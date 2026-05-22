import { AST_NODE_TYPES } from '@typescript-eslint/utils'
import type { TSESTree } from '@typescript-eslint/utils'

export function isBareOutletJsx(
  node: TSESTree.Node,
): node is TSESTree.JSXElement {
  if (node.type !== AST_NODE_TYPES.JSXElement) {
    return false
  }
  const opening = node.openingElement
  if (opening.name.type !== AST_NODE_TYPES.JSXIdentifier) {
    return false
  }
  if (opening.name.name !== 'Outlet') {
    return false
  }
  if (opening.attributes.length > 0) {
    return false
  }
  return node.children.every(
    (child) =>
      child.type === AST_NODE_TYPES.JSXText && child.value.trim() === '',
  )
}

function unwrapFragment(node: TSESTree.Node): TSESTree.Node {
  if (node.type !== AST_NODE_TYPES.JSXFragment) {
    return node
  }
  const meaningful = node.children.filter(
    (child) =>
      !(child.type === AST_NODE_TYPES.JSXText && child.value.trim() === ''),
  )
  if (meaningful.length !== 1) {
    return node
  }
  return meaningful[0]!
}

export function getOutletReturnedByFunctionBody(
  fnBody: TSESTree.Node,
): TSESTree.JSXElement | null {
  if (
    fnBody.type === AST_NODE_TYPES.JSXElement ||
    fnBody.type === AST_NODE_TYPES.JSXFragment
  ) {
    const unwrapped = unwrapFragment(fnBody)
    return isBareOutletJsx(unwrapped) ? unwrapped : null
  }

  if (fnBody.type === AST_NODE_TYPES.BlockStatement) {
    if (fnBody.body.length !== 1) {
      return null
    }
    const stmt = fnBody.body[0]!
    if (stmt.type !== AST_NODE_TYPES.ReturnStatement || !stmt.argument) {
      return null
    }
    const arg = stmt.argument
    if (
      arg.type !== AST_NODE_TYPES.JSXElement &&
      arg.type !== AST_NODE_TYPES.JSXFragment
    ) {
      return null
    }
    const unwrapped = unwrapFragment(arg)
    return isBareOutletJsx(unwrapped) ? unwrapped : null
  }

  return null
}
