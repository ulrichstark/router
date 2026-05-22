import { RuleTester } from '@typescript-eslint/rule-tester'

import {
  name,
  rule,
} from '../rules/useless-outlet-component/useless-outlet-component.rule'

const ruleTester = new RuleTester({
  languageOptions: {
    parserOptions: {
      ecmaFeatures: { jsx: true },
    },
  },
})

ruleTester.run(name, rule, {
  valid: [
    {
      name: 'route without a component property',
      code: `
        import { createFileRoute } from '@tanstack/react-router'
        export const Route = createFileRoute('/x')({})
      `,
    },
    {
      name: 'component wraps Outlet with surrounding markup',
      code: `
        import { createFileRoute, Outlet } from '@tanstack/react-router'
        export const Route = createFileRoute('/x')({
          component: () => <div><Outlet /></div>,
        })
      `,
    },
    {
      name: 'inline component returns Outlet from a non-tanstack package',
      code: `
        import { createFileRoute } from '@tanstack/react-router'
        import { Outlet } from 'some-other-router'
        export const Route = createFileRoute('/x')({
          component: () => <Outlet />,
        })
      `,
    },
    {
      name: 'Outlet has attributes',
      code: `
        import { createFileRoute, Outlet } from '@tanstack/react-router'
        export const Route = createFileRoute('/x')({
          component: () => <Outlet foo="x" />,
        })
      `,
    },
    {
      name: 'Outlet has children',
      code: `
        import { createFileRoute, Outlet } from '@tanstack/react-router'
        export const Route = createFileRoute('/x')({
          component: () => <Outlet>child</Outlet>,
        })
      `,
    },
    {
      name: 'component body has side effects before returning Outlet',
      code: `
        import { createFileRoute, Outlet } from '@tanstack/react-router'
        export const Route = createFileRoute('/x')({
          component: () => { doSomething(); return <Outlet />; },
        })
      `,
    },
    {
      name: 'local function renders more than just Outlet',
      code: `
        import { createFileRoute, Outlet } from '@tanstack/react-router'
        function RouteComponent() {
          return <div><Outlet /></div>
        }
        export const Route = createFileRoute('/x')({
          component: RouteComponent,
        })
      `,
    },
    {
      name: 'component identifier is imported from another module',
      code: `
        import { createFileRoute } from '@tanstack/react-router'
        import { RouteComponent } from './RouteComponent'
        export const Route = createFileRoute('/x')({
          component: RouteComponent,
        })
      `,
    },
    {
      name: 'createFileRoute imported from a non-tanstack package is ignored',
      code: `
        import { createFileRoute } from 'other-router'
        import { Outlet } from '@tanstack/react-router'
        export const Route = createFileRoute('/x')({
          component: () => <Outlet />,
        })
      `,
    },
    {
      name: 'Outlet identifier from a non-tanstack package as direct value',
      code: `
        import { createFileRoute } from '@tanstack/react-router'
        import { Outlet } from 'some-other-router'
        export const Route = createFileRoute('/x')({
          component: Outlet,
        })
      `,
    },
    {
      name: 'component value is a call expression (not flagged)',
      code: `
        import { createFileRoute } from '@tanstack/react-router'
        export const Route = createFileRoute('/x')({
          component: makeComponent(),
        })
      `,
    },
  ],

  invalid: [
    {
      name: 'inline arrow returning <Outlet /> in createFileRoute',
      code: `import { createFileRoute, Outlet } from '@tanstack/react-router'
export const Route = createFileRoute('/x')({
  component: () => <Outlet />,
})`,
      errors: [{ messageId: 'uselessOutletComponent' }],
      output: `import { createFileRoute, Outlet } from '@tanstack/react-router'
export const Route = createFileRoute('/x')({
})`,
    },
    {
      name: 'inline arrow with block body in createRoute',
      code: `import { createRoute, Outlet } from '@tanstack/react-router'
export const Route = createRoute({
  component: () => { return <Outlet />; },
})`,
      errors: [{ messageId: 'uselessOutletComponent' }],
      output: `import { createRoute, Outlet } from '@tanstack/react-router'
export const Route = createRoute({
})`,
    },
    {
      name: 'inline function expression returning <Outlet />',
      code: `import { createFileRoute, Outlet } from '@tanstack/react-router'
export const Route = createFileRoute('/x')({
  component: function C() { return <Outlet /> },
})`,
      errors: [{ messageId: 'uselessOutletComponent' }],
      output: `import { createFileRoute, Outlet } from '@tanstack/react-router'
export const Route = createFileRoute('/x')({
})`,
    },
    {
      name: 'fragment wrapping a single <Outlet />',
      code: `import { createFileRoute, Outlet } from '@tanstack/react-router'
export const Route = createFileRoute('/x')({
  component: () => <><Outlet /></>,
})`,
      errors: [{ messageId: 'uselessOutletComponent' }],
      output: `import { createFileRoute, Outlet } from '@tanstack/react-router'
export const Route = createFileRoute('/x')({
})`,
    },
    {
      name: 'local function declaration only returning <Outlet />',
      code: `import { createFileRoute, Outlet } from '@tanstack/react-router'
function RouteComponent() {
  return <Outlet />
}
export const Route = createFileRoute('/x')({
  component: RouteComponent,
})`,
      errors: [{ messageId: 'uselessOutletComponent' }],
      output: `import { createFileRoute, Outlet } from '@tanstack/react-router'
function RouteComponent() {
  return <Outlet />
}
export const Route = createFileRoute('/x')({
})`,
    },
    {
      name: 'local const arrow only returning <Outlet />',
      code: `import { createFileRoute, Outlet } from '@tanstack/react-router'
const RouteComponent = () => <Outlet />
export const Route = createFileRoute('/x')({
  component: RouteComponent,
})`,
      errors: [{ messageId: 'uselessOutletComponent' }],
      output: `import { createFileRoute, Outlet } from '@tanstack/react-router'
const RouteComponent = () => <Outlet />
export const Route = createFileRoute('/x')({
})`,
    },
    {
      name: 'direct reference to imported Outlet',
      code: `import { createFileRoute, Outlet } from '@tanstack/react-router'
export const Route = createFileRoute('/x')({
  component: Outlet,
})`,
      errors: [{ messageId: 'uselessOutletComponent' }],
      output: `import { createFileRoute, Outlet } from '@tanstack/react-router'
export const Route = createFileRoute('/x')({
})`,
    },
    {
      name: 'createRootRoute direct form',
      code: `import { createRootRoute, Outlet } from '@tanstack/react-router'
export const Route = createRootRoute({
  component: () => <Outlet />,
})`,
      errors: [{ messageId: 'uselessOutletComponent' }],
      output: `import { createRootRoute, Outlet } from '@tanstack/react-router'
export const Route = createRootRoute({
})`,
    },
    {
      name: 'createRootRouteWithContext indirect form',
      code: `import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
export const Route = createRootRouteWithContext<{}>()({
  component: () => <Outlet />,
})`,
      errors: [{ messageId: 'uselessOutletComponent' }],
      output: `import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
export const Route = createRootRouteWithContext<{}>()({
})`,
    },
    {
      name: 'createLazyFileRoute',
      code: `import { createLazyFileRoute, Outlet } from '@tanstack/react-router'
export const Route = createLazyFileRoute('/x')({
  component: () => <Outlet />,
})`,
      errors: [{ messageId: 'uselessOutletComponent' }],
      output: `import { createLazyFileRoute, Outlet } from '@tanstack/react-router'
export const Route = createLazyFileRoute('/x')({
})`,
    },
    {
      name: 'createLazyRoute',
      code: `import { createLazyRoute, Outlet } from '@tanstack/react-router'
export const Route = createLazyRoute('/x')({
  component: () => <Outlet />,
})`,
      errors: [{ messageId: 'uselessOutletComponent' }],
      output: `import { createLazyRoute, Outlet } from '@tanstack/react-router'
export const Route = createLazyRoute('/x')({
})`,
    },
    {
      name: 'component property is first among others',
      code: `import { createFileRoute, Outlet } from '@tanstack/react-router'
export const Route = createFileRoute('/x')({
  component: () => <Outlet />,
  loader: () => ({}),
})`,
      errors: [{ messageId: 'uselessOutletComponent' }],
      output: `import { createFileRoute, Outlet } from '@tanstack/react-router'
export const Route = createFileRoute('/x')({
  loader: () => ({}),
})`,
    },
    {
      name: 'component property is in the middle of others',
      code: `import { createFileRoute, Outlet } from '@tanstack/react-router'
export const Route = createFileRoute('/x')({
  beforeLoad: () => ({}),
  component: () => <Outlet />,
  loader: () => ({}),
})`,
      errors: [{ messageId: 'uselessOutletComponent' }],
      output: `import { createFileRoute, Outlet } from '@tanstack/react-router'
export const Route = createFileRoute('/x')({
  beforeLoad: () => ({}),
  loader: () => ({}),
})`,
    },
    {
      name: 'component property is last (no trailing comma)',
      code: `import { createFileRoute, Outlet } from '@tanstack/react-router'
export const Route = createFileRoute('/x')({
  beforeLoad: () => ({}),
  component: () => <Outlet />
})`,
      errors: [{ messageId: 'uselessOutletComponent' }],
      output: `import { createFileRoute, Outlet } from '@tanstack/react-router'
export const Route = createFileRoute('/x')({
  beforeLoad: () => ({})
})`,
    },
    {
      name: 'string-literal key',
      code: `import { createFileRoute, Outlet } from '@tanstack/react-router'
export const Route = createFileRoute('/x')({
  'component': () => <Outlet />,
})`,
      errors: [{ messageId: 'uselessOutletComponent' }],
      output: `import { createFileRoute, Outlet } from '@tanstack/react-router'
export const Route = createFileRoute('/x')({
})`,
    },
    {
      name: 'inline component using a fragment in block-statement return',
      code: `import { createFileRoute, Outlet } from '@tanstack/react-router'
export const Route = createFileRoute('/x')({
  component: () => { return <><Outlet /></>; },
})`,
      errors: [{ messageId: 'uselessOutletComponent' }],
      output: `import { createFileRoute, Outlet } from '@tanstack/react-router'
export const Route = createFileRoute('/x')({
})`,
    },
  ],
})
