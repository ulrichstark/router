import { AST_NODE_TYPES, ESLintUtils } from '@typescript-eslint/utils'

import { getDocsUrl } from '../../utils/get-docs-url'
import { detectTanstackRouterImports } from '../../utils/detect-router-imports'
import { getOutletReturnedByFunctionBody } from './useless-outlet-component.utils'
import { routeFunctions, routeFunctionsIndirect } from './constants'
import type { TSESTree } from '@typescript-eslint/utils'
import type { RuleFix, RuleFixer } from '@typescript-eslint/utils/ts-eslint'
import type { ExtraRuleDocs } from '../../types'

const createRule = ESLintUtils.RuleCreator<ExtraRuleDocs>(getDocsUrl)

const routeFunctionSet = new Set<string>(routeFunctions)
const indirectRouteFunctionSet = new Set<string>(routeFunctionsIndirect)

export const name = 'useless-outlet-component'

export const rule = createRule({
  name,
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Disallow route components that only render `<Outlet />` — omit the `component` property instead',
      recommended: 'warn',
    },
    messages: {
      uselessOutletComponent:
        'Route component only renders `<Outlet />`. Omit the `component` property — TanStack Router renders the outlet by default.',
    },
    schema: [],
    fixable: 'code',
  },
  defaultOptions: [],

  create: detectTanstackRouterImports((context, _, helpers) => {
    function getRouteOptionsObject(
      node: TSESTree.CallExpression,
    ): TSESTree.ObjectExpression | null {
      if (node.callee.type !== AST_NODE_TYPES.Identifier) {
        return null
      }
      const fnName = node.callee.name
      if (!routeFunctionSet.has(fnName)) {
        return null
      }
      if (!helpers.isTanstackRouterImport(node.callee)) {
        return null
      }

      let args = node.arguments
      if (indirectRouteFunctionSet.has(fnName)) {
        if (node.parent.type !== AST_NODE_TYPES.CallExpression) {
          return null
        }
        args = node.parent.arguments
      }

      const first = args[0]
      if (!first || first.type !== AST_NODE_TYPES.ObjectExpression) {
        return null
      }
      return first
    }

    function findComponentProperty(
      obj: TSESTree.ObjectExpression,
    ): TSESTree.Property | null {
      for (const prop of obj.properties) {
        if (prop.type !== AST_NODE_TYPES.Property) continue
        if (prop.computed) continue
        const key = prop.key
        const isComponent =
          (key.type === AST_NODE_TYPES.Identifier && key.name === 'component') ||
          (key.type === AST_NODE_TYPES.Literal && key.value === 'component')
        if (isComponent) {
          return prop
        }
      }
      return null
    }

    function isTanstackOutletIdentifier(
      node: TSESTree.Identifier | TSESTree.JSXIdentifier,
    ): boolean {
      return node.name === 'Outlet' && helpers.isTanstackRouterImport(node)
    }

    function isOutletReturningFunction(
      fn:
        | TSESTree.ArrowFunctionExpression
        | TSESTree.FunctionExpression
        | TSESTree.FunctionDeclaration,
    ): boolean {
      const outlet = getOutletReturnedByFunctionBody(fn.body)
      if (!outlet) return false
      const openingName = outlet.openingElement.name
      if (openingName.type !== AST_NODE_TYPES.JSXIdentifier) return false
      return isTanstackOutletIdentifier(openingName)
    }

    function resolveLocalFunction(
      identifier: TSESTree.Identifier,
    ):
      | TSESTree.FunctionDeclaration
      | TSESTree.ArrowFunctionExpression
      | TSESTree.FunctionExpression
      | null {
      let scope: ReturnType<typeof context.sourceCode.getScope> | null =
        context.sourceCode.getScope(identifier)
      while (scope) {
        const variable = scope.variables.find((v) => v.name === identifier.name)
        if (variable) {
          if (variable.defs.length !== 1) return null
          const def = variable.defs[0]!
          if (
            def.type === 'FunctionName' &&
            def.node.type === AST_NODE_TYPES.FunctionDeclaration
          ) {
            return def.node
          }
          if (def.type === 'Variable') {
            const init = def.node.init
            if (
              init &&
              (init.type === AST_NODE_TYPES.ArrowFunctionExpression ||
                init.type === AST_NODE_TYPES.FunctionExpression)
            ) {
              return init
            }
          }
          return null
        }
        scope = scope.upper
      }
      return null
    }

    function isUselessOutletComponentValue(
      value: TSESTree.Node,
    ): boolean {
      if (
        value.type === AST_NODE_TYPES.ArrowFunctionExpression ||
        value.type === AST_NODE_TYPES.FunctionExpression
      ) {
        return isOutletReturningFunction(value)
      }

      if (value.type === AST_NODE_TYPES.Identifier) {
        if (isTanstackOutletIdentifier(value)) {
          return true
        }
        const fn = resolveLocalFunction(value)
        if (!fn) return false
        return isOutletReturningFunction(fn)
      }

      return false
    }

    function removeComponentProperty(
      fixer: RuleFixer,
      property: TSESTree.Property,
    ): RuleFix {
      const sourceCode = context.sourceCode
      const text = sourceCode.getText()

      const tokenAfter = sourceCode.getTokenAfter(property)
      const tokenBefore = sourceCode.getTokenBefore(property)

      let startRange = property.range[0]
      let endRange = property.range[1]

      if (tokenAfter && tokenAfter.value === ',') {
        endRange = tokenAfter.range[1]
      } else if (tokenBefore && tokenBefore.value === ',') {
        startRange = tokenBefore.range[0]
      }

      let lineStart = startRange
      while (
        lineStart > 0 &&
        (text[lineStart - 1] === ' ' || text[lineStart - 1] === '\t')
      ) {
        lineStart--
      }
      const isStartOfLine = lineStart === 0 || text[lineStart - 1] === '\n'

      if (isStartOfLine && text[endRange] === '\n') {
        return fixer.removeRange([lineStart, endRange + 1])
      }

      return fixer.removeRange([startRange, endRange])
    }

    return {
      CallExpression(node) {
        const optionsObject = getRouteOptionsObject(node)
        if (!optionsObject) return

        const componentProp = findComponentProperty(optionsObject)
        if (!componentProp) return

        if (!isUselessOutletComponentValue(componentProp.value)) return

        context.report({
          node: componentProp,
          messageId: 'uselessOutletComponent',
          fix: (fixer) => removeComponentProperty(fixer, componentProp),
        })
      },
    }
  }),
})
