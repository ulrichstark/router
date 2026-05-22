export const routeFunctionsDirect = ['createRoute', 'createRootRoute'] as const

export const routeFunctionsIndirect = [
  'createFileRoute',
  'createLazyRoute',
  'createLazyFileRoute',
  'createRootRouteWithContext',
] as const

export const routeFunctions = [
  ...routeFunctionsDirect,
  ...routeFunctionsIndirect,
] as const

export type RouteFunction = (typeof routeFunctions)[number]
