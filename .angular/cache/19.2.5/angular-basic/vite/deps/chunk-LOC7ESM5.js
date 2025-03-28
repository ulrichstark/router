import {
  DOCUMENT
} from "./chunk-3S33LVVJ.js";
import {
  ApplicationRef,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  Directive,
  ElementRef,
  EnvironmentInjector,
  InjectionToken,
  Injector,
  ReplaySubject,
  RuntimeError,
  Subscription,
  ViewContainerRef,
  afterNextRender,
  afterRenderEffect,
  assertInInjectionContext,
  assertNotInReactiveContext,
  catchError,
  combineLatest,
  computed,
  createEnvironmentInjector,
  distinctUntilChanged,
  effect,
  filter,
  inject,
  input,
  map,
  of,
  pairwise,
  runInInjectionContext,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  take,
  tap,
  throwError,
  untracked,
  withLatestFrom,
  ɵɵHostDirectivesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QZ2YKBDB.js";
import {
  BaseRootRoute,
  BaseRoute,
  BaseRouteApi,
  RouterCore,
  createControlledPromise,
  deepEqual,
  exactPathTest,
  getLocationChangeInfo,
  invariant,
  isNotFound,
  isRedirect,
  pick,
  preloadWarning,
  removeTrailingSlash,
  rootRouteId,
  shallow,
  trimPathRight
} from "./chunk-3JUTRO22.js";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// node_modules/.pnpm/tiny-warning@1.0.3/node_modules/tiny-warning/dist/tiny-warning.esm.js
var isProduction = false;
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }
    var text = "Warning: " + message;
    if (typeof console !== "undefined") {
      console.warn(text);
    }
    try {
      throw Error(text);
    } catch (x) {
    }
  }
}
var tiny_warning_esm_default = warning;

// node_modules/.pnpm/@angular+core@19.2.4_rxjs@7.8.1_zone.js@0.15.0/node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function toObservable(source, options) {
  !options?.injector && assertInInjectionContext(toObservable);
  const injector = options?.injector ?? inject(Injector);
  const subject = new ReplaySubject(1);
  const watcher = effect(() => {
    let value;
    try {
      value = source();
    } catch (err) {
      untracked(() => subject.error(err));
      return;
    }
    untracked(() => subject.next(value));
  }, {
    injector,
    manualCleanup: true
  });
  injector.get(DestroyRef).onDestroy(() => {
    watcher.destroy();
    subject.complete();
  });
  return subject.asObservable();
}
function toSignal(source, options) {
  ngDevMode && assertNotInReactiveContext(toSignal, "Invoking `toSignal` causes new subscriptions every time. Consider moving `toSignal` outside of the reactive context and read the signal value where needed.");
  const requiresCleanup = !options?.manualCleanup;
  requiresCleanup && !options?.injector && assertInInjectionContext(toSignal);
  const cleanupRef = requiresCleanup ? options?.injector?.get(DestroyRef) ?? inject(DestroyRef) : null;
  const equal = makeToSignalEqual(options?.equal);
  let state;
  if (options?.requireSync) {
    state = signal({
      kind: 0
      /* StateKind.NoValue */
    }, {
      equal
    });
  } else {
    state = signal({
      kind: 1,
      value: options?.initialValue
    }, {
      equal
    });
  }
  const sub = source.subscribe({
    next: (value) => state.set({
      kind: 1,
      value
    }),
    error: (error) => {
      if (options?.rejectErrors) {
        throw error;
      }
      state.set({
        kind: 2,
        error
      });
    }
    // Completion of the Observable is meaningless to the signal. Signals don't have a concept of
    // "complete".
  });
  if (options?.requireSync && state().kind === 0) {
    throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
  }
  cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
  return computed(() => {
    const current = state();
    switch (current.kind) {
      case 1:
        return current.value;
      case 2:
        throw current.error;
      case 0:
        throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
    }
  }, {
    equal: options?.equal
  });
}
function makeToSignalEqual(userEquality = Object.is) {
  return (a, b) => a.kind === 1 && b.kind === 1 && userEquality(a.value, b.value);
}

// packages/angular-router/dist/fesm2022/tanstack-angular-router.mjs
function DefaultError_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0, "\n            ");
    ɵɵelementStart(1, "code");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtext(3, "\n          ");
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx);
  }
}
function DefaultError_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "pre", 4);
    ɵɵtext(2, "          ");
    ɵɵtemplate(3, DefaultError_Conditional_6_Conditional_3_Template, 4, 1);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵconditional((tmp_1_0 = ctx_r0.context.error.message) ? 3 : -1, tmp_1_0);
  }
}
function distinctUntilRefChanged() {
  return distinctUntilChanged(Object.is);
}
var DefaultNotFound = class _DefaultNotFound {
  static ɵfac = function DefaultNotFound_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DefaultNotFound)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _DefaultNotFound,
    selectors: [["default-not-found"], ["DefaultNotFound"]],
    hostAttrs: [2, "display", "contents"],
    decls: 2,
    vars: 0,
    template: function DefaultNotFound_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, "Page not found");
        ɵɵelementEnd();
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultNotFound, [{
    type: Component,
    args: [{
      selector: "default-not-found,DefaultNotFound",
      template: ` <p>Page not found</p> `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        style: "display: contents;"
      }
    }]
  }], null, null);
})();
function isDevMode({
  injector
} = {}) {
  !injector && assertInInjectionContext(isDevMode);
  if (!injector) {
    injector = inject(Injector);
  }
  return runInInjectionContext(injector, () => {
    const document = inject(DOCUMENT);
    const window = document.defaultView;
    return !!window && "ng" in window;
  });
}
var ROUTER = new InjectionToken("ROUTER");
var ROUTER_STATE = new InjectionToken("ROUTER_STATE");
function injectRouter() {
  return inject(ROUTER);
}
function injectRouterState() {
  return inject(ROUTER_STATE);
}
function provideRouter(router) {
  return [{
    provide: ROUTER,
    useValue: router
  }, {
    provide: ROUTER_STATE,
    useFactory: () => {
      const state = new BehaviorSubject(router.state);
      const appRef = inject(ApplicationRef);
      const unsub = router.__store.subscribe(({
        currentVal
      }) => {
        state.next(currentVal);
      });
      appRef.onDestroy(() => {
        state.complete();
        unsub();
      });
      return state.asObservable();
    }
  }];
}
var createRouter = (options) => {
  return new NgRouter(options);
};
var NgRouter = class extends RouterCore {
  injectors = /* @__PURE__ */ new Map();
  envInjectors = /* @__PURE__ */ new Map();
  constructor(options) {
    super(options);
  }
  getRouteInjector(routeId, parent, providers = []) {
    const existingInjector = this.injectors.get(routeId);
    if (existingInjector) return existingInjector;
    const injector = Injector.create({
      providers,
      parent,
      name: routeId
    });
    this.injectors.set(routeId, injector);
    return injector;
  }
  getRouteEnvInjector(routeId, parent, providers = [], router) {
    const existingInjector = this.envInjectors.get(routeId);
    if (existingInjector) return existingInjector;
    let route = router.routesById[routeId] || router.routesByPath[routeId];
    while (route) {
      if (route.options?.providers) {
        providers.push(...route.options.providers);
      }
      const parentInjector = route.parentRoute ? this.envInjectors.get(route.parentRoute.id) : null;
      if (parentInjector) {
        parent = parentInjector;
        break;
      }
      route = route.parentRoute;
    }
    const envInjector = createEnvironmentInjector(providers, parent, routeId);
    if (routeId === rootRouteId) {
      this.envInjectors.forEach((ele) => {
        if ("parent" in ele && ele.parent === parent) {
          ele.parent = envInjector;
        }
      });
    }
    this.envInjectors.set(routeId, envInjector);
    return envInjector;
  }
};
function routerState$({
  select,
  injector,
  equal = shallow
}) {
  !injector && assertInInjectionContext(routerState$);
  if (!injector) {
    injector = inject(Injector);
  }
  return runInInjectionContext(injector, () => {
    const rootRouterState = injectRouterState();
    if (select) return rootRouterState.pipe(map((s) => select(s)), distinctUntilChanged(equal));
    return rootRouterState.pipe(distinctUntilChanged(equal));
  });
}
function routerState({
  select,
  injector,
  equal = shallow
} = {}) {
  !injector && assertInInjectionContext(routerState);
  if (!injector) {
    injector = inject(Injector);
  }
  return runInInjectionContext(injector, () => toSignal(routerState$({
    select,
    injector,
    equal
  }), {
    injector
  }));
}
var OnRendered = class _OnRendered {
  match = inject(RouteMatch);
  router = injectRouter();
  parentRouteId$ = combineLatest([this.match.matchId$, routerState$({
    select: (s) => s.matches
  })]).pipe(map(([matchId, matches2]) => matches2.find((d) => d.id === matchId)?.routeId), distinctUntilRefChanged());
  location$ = routerState$({
    select: (s) => s.resolvedLocation?.state.key
  });
  constructor() {
    let subscription;
    afterNextRender(() => {
      subscription = combineLatest([this.parentRouteId$, this.location$]).subscribe(([parentRouteId]) => {
        if (!parentRouteId || parentRouteId !== rootRouteId) return;
        this.router.emit(__spreadValues({
          type: "onRendered"
        }, getLocationChangeInfo(this.router.state)));
      });
    });
    inject(DestroyRef).onDestroy(() => {
      subscription.unsubscribe();
    });
  }
  static ɵfac = function OnRendered_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OnRendered)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _OnRendered
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OnRendered, [{
    type: Directive
  }], () => [], null);
})();
var MATCH_ID = new InjectionToken("MATCH_ID");
var RouteMatch = class _RouteMatch {
  matchId = input.required();
  isDevMode = isDevMode();
  router = injectRouter();
  vcr = inject(ViewContainerRef);
  injector = inject(Injector);
  environmentInjector = inject(EnvironmentInjector);
  matchId$ = toObservable(this.matchId);
  resetKey$ = routerState$({
    select: (s) => s.loadedAt.toString()
  });
  matches$ = routerState$({
    select: (s) => s.matches
  });
  routeId$ = combineLatest([this.matchId$, this.matches$]).pipe(map(([matchId, matches2]) => matches2.find((d) => d.id === matchId)?.routeId), distinctUntilRefChanged());
  route$ = this.routeId$.pipe(map((routeId) => this.router.routesById[routeId]), distinctUntilRefChanged());
  pendingComponent$ = this.route$.pipe(map((route) => route.options.pendingComponent || this.router.options.defaultPendingComponent), distinctUntilRefChanged());
  errorComponent$ = this.route$.pipe(map((route) => route.options.errorComponent || this.router.options.defaultErrorComponent), distinctUntilRefChanged());
  onCatch$ = this.route$.pipe(map((route) => route.options.onCatch || this.router.options.defaultOnCatch), distinctUntilRefChanged());
  matchIndex$ = combineLatest([this.matchId$, this.matches$]).pipe(map(([matchId, matches2]) => matches2.findIndex((d) => d.id === matchId)), distinctUntilRefChanged());
  matchState$ = combineLatest([this.matchIndex$, this.matches$]).pipe(map(([matchIndex, matches2]) => matches2[matchIndex]), filter((match2) => !!match2), map((match2) => ({
    routeId: match2.routeId,
    match: pick(match2, ["id", "status", "error"])
  })));
  matchRoute$ = this.matchState$.pipe(map(({
    routeId
  }) => this.router.routesById[routeId]), distinctUntilRefChanged());
  match$ = this.matchState$.pipe(map(({
    match: match2
  }) => match2), distinctUntilChanged((a, b) => a.id === b.id && a.status === b.status));
  matchLoad$ = this.match$.pipe(withLatestFrom(this.matchRoute$), switchMap(([match2, matchRoute2]) => {
    const loadPromise = this.router.getMatch(match2.id)?.loadPromise;
    if (!loadPromise) return Promise.resolve();
    if (match2.status === "pending") {
      const pendingMinMs = matchRoute2.options.pendingMinMs ?? this.router.options.defaultPendingMinMs;
      let minPendingPromise = this.router.getMatch(match2.id)?.minPendingPromise;
      if (pendingMinMs && !minPendingPromise) {
        if (!this.router.isServer) {
          minPendingPromise = createControlledPromise();
          Promise.resolve().then(() => {
            this.router.updateMatch(match2.id, (prev) => __spreadProps(__spreadValues({}, prev), {
              minPendingPromise
            }));
          });
          setTimeout(() => {
            minPendingPromise?.resolve();
            this.router.updateMatch(match2.id, (prev) => __spreadProps(__spreadValues({}, prev), {
              minPendingPromise: void 0
            }));
          }, pendingMinMs);
        }
      }
      return minPendingPromise?.then(() => loadPromise) || loadPromise;
    }
    return loadPromise;
  }), distinctUntilRefChanged());
  run$ = this.routeId$.pipe(switchMap((routeId) => {
    invariant(routeId, `Could not find routeId for matchId "${this.matchId()}". Please file an issue!`);
    return combineLatest([this.match$, this.matchRoute$, this.resetKey$]).pipe(switchMap(([match2, route]) => {
      if (match2.status === "notFound") {
        invariant(isNotFound(match2.error), "Expected a notFound error");
        let notFoundCmp;
        if (!route.options.notFoundComponent) {
          notFoundCmp = this.router.options.defaultNotFoundComponent?.();
          if (!notFoundCmp) {
            if (this.isDevMode) {
              tiny_warning_esm_default(route.options.notFoundComponent, `A notFoundError was encountered on the route with ID "${route.id}", but a notFoundComponent option was not configured, nor was a router level defaultNotFoundComponent configured. Consider configuring at least one of these to avoid TanStack Router's overly generic defaultNotFoundComponent (<p>Page not found</p>)`);
            }
            notFoundCmp = DefaultNotFound;
          }
        } else {
          notFoundCmp = route.options.notFoundComponent();
        }
        const injector2 = this.router.getRouteInjector(route.id + "-not-found", this.injector, [{
          provide: NOT_FOUND_COMPONENT_CONTEXT,
          useValue: {}
        }]);
        return of({
          component: notFoundCmp,
          injector: injector2,
          environmentInjector: null,
          clearView: true
        });
      }
      if (match2.status === "redirected" || match2.status === "pending") {
        if (match2.status === "redirected") {
          invariant(isRedirect(match2.error), "Expected a redirect error");
        }
        return this.matchLoad$.pipe(withLatestFrom(this.pendingComponent$), switchMap(([, pendingComponent]) => {
          const pendingCmp = pendingComponent?.();
          if (!pendingCmp) return of(null);
          return of({
            component: pendingCmp,
            injector: null,
            environmentInjector: null,
            clearView: true
          });
        }));
      }
      if (match2.status === "error") {
        return this.errorComponent$.pipe(take(1), switchMap((errorComponent) => {
          const errorCmp = errorComponent?.() || DefaultError;
          const injector2 = this.router.getRouteInjector(route.id + "-error", this.injector, [{
            provide: ERROR_COMPONENT_CONTEXT,
            useValue: {
              error: match2.error,
              info: {
                componentStack: ""
              },
              reset: () => void this.router.invalidate()
            }
          }]);
          return of({
            component: errorCmp,
            injector: injector2,
            environmentInjector: null,
            clearView: true
          });
        }));
      }
      const successComponent = route.options.component?.() || Outlet;
      if (this.cmp === successComponent) {
        return of({
          clearView: false
        });
      }
      this.cmpRef = void 0;
      this.cmp = successComponent;
      const injector = this.router.getRouteInjector(route.id, this.injector);
      const environmentInjector = this.router.getRouteEnvInjector(route.id, this.environmentInjector, route.options.providers || [], this.router);
      return of({
        component: successComponent,
        injector: Injector.create({
          providers: [{
            provide: MATCH_ID,
            useValue: match2.id
          }],
          parent: injector
        }),
        environmentInjector,
        clearView: true
      });
    }));
  }), catchError((error) => this.onCatch$.pipe(take(1), switchMap((onCatch) => throwError(() => [error, onCatch])))));
  cmp;
  cmpRef;
  constructor() {
    let subscription;
    afterNextRender(() => {
      subscription = this.run$.subscribe({
        next: (runData) => {
          if (!runData) return;
          if (!runData.clearView) {
            this.cmpRef?.changeDetectorRef.markForCheck();
            return;
          }
          const {
            component,
            injector,
            environmentInjector
          } = runData;
          this.vcr.clear();
          this.cmpRef = this.vcr.createComponent(component, {
            injector: injector || void 0,
            environmentInjector: environmentInjector || void 0
          });
          this.cmpRef.changeDetectorRef.markForCheck();
        },
        error: (error) => {
          if (Array.isArray(error)) {
            const [errorToThrow, onCatch] = error;
            if (onCatch) onCatch(errorToThrow);
            console.error(errorToThrow);
            return;
          }
          console.error(error);
        }
      });
    });
    inject(DestroyRef).onDestroy(() => {
      subscription.unsubscribe();
      this.vcr.clear();
      this.cmp = void 0;
      this.cmpRef = void 0;
    });
  }
  static ɵfac = function RouteMatch_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouteMatch)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _RouteMatch,
    selectors: [["route-match"], ["RouteMatch"]],
    hostVars: 1,
    hostBindings: function RouteMatch_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("data-matchId", ctx.matchId());
      }
    },
    inputs: {
      matchId: [1, "matchId"]
    },
    features: [ɵɵHostDirectivesFeature([OnRendered])],
    decls: 0,
    vars: 0,
    template: function RouteMatch_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouteMatch, [{
    type: Component,
    args: [{
      selector: "route-match,RouteMatch",
      template: ``,
      hostDirectives: [OnRendered],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[attr.data-matchId]": "matchId()"
      }
    }]
  }], () => [], null);
})();
var Outlet = class _Outlet {
  matchId = inject(MATCH_ID);
  router = injectRouter();
  vcr = inject(ViewContainerRef);
  isDevMode = isDevMode();
  defaultPendingComponent = this.router.options.defaultPendingComponent?.();
  matches$ = routerState$({
    select: (s) => s.matches
  });
  routeId$ = this.matches$.pipe(map((matches2) => matches2.find((d) => d.id === this.matchId)?.routeId), distinctUntilRefChanged());
  route$ = this.routeId$.pipe(map((routeId) => this.router.routesById[routeId]), distinctUntilRefChanged());
  parentGlobalNotFound$ = this.matches$.pipe(map((matches2) => {
    const parentMatch = matches2.find((d) => d.id === this.matchId);
    if (!parentMatch) {
      tiny_warning_esm_default(false, `Could not find parent match for matchId "${this.matchId}". Please file an issue!`);
      return false;
    }
    return parentMatch.globalNotFound;
  }));
  childMatchId$ = this.matches$.pipe(map((matches2) => {
    const index = matches2.findIndex((d) => d.id === this.matchId);
    if (index === -1) return null;
    return matches2[index + 1]?.id;
  }), distinctUntilRefChanged());
  matchLoad$ = this.childMatchId$.pipe(switchMap((childMatchId) => {
    if (!childMatchId) return Promise.resolve();
    const loadPromise = this.router.getMatch(childMatchId)?.loadPromise;
    if (!loadPromise) return Promise.resolve();
    return loadPromise;
  }));
  renderedId;
  cmpRef;
  run$ = combineLatest([this.parentGlobalNotFound$, this.childMatchId$]).pipe(switchMap(([parentGlobalNotFound, childMatchId]) => {
    if (parentGlobalNotFound) {
      return this.route$.pipe(map((route) => {
        let notFoundCmp = void 0;
        if (!route.options.notFoundComponent) {
          notFoundCmp = this.router.options.defaultNotFoundComponent?.();
          if (!notFoundCmp) {
            if (this.isDevMode) {
              tiny_warning_esm_default(route.options.notFoundComponent, `A notFoundError was encountered on the route with ID "${route.id}", but a notFoundComponent option was not configured, nor was a router level defaultNotFoundComponent configured. Consider configuring at least one of these to avoid TanStack Router's overly generic defaultNotFoundComponent (<p>Page not found</p>)`);
            }
            notFoundCmp = DefaultNotFound;
          }
        } else {
          notFoundCmp = route.options.notFoundComponent();
        }
        this.renderedId = route.id + "-not-found";
        const injector = this.router.getRouteInjector(route.id + "-not-found", this.vcr.injector, [{
          provide: NOT_FOUND_COMPONENT_CONTEXT,
          useValue: {}
        }]);
        return {
          component: notFoundCmp,
          injector,
          clearView: true,
          childMatchId: null
        };
      }));
    }
    if (!childMatchId) return of(null);
    if (this.renderedId === childMatchId) {
      return of({
        clearView: false
      });
    }
    this.cmpRef = void 0;
    if (childMatchId === rootRouteId) {
      return this.matchLoad$.pipe(map(() => {
        return {
          component: this.defaultPendingComponent,
          injector: null,
          clearView: true,
          childMatchId: null
        };
      }));
    }
    this.renderedId = childMatchId;
    return of({
      component: RouteMatch,
      injector: null,
      clearView: true,
      childMatchId
    });
  }), catchError((error) => throwError(() => error)));
  constructor() {
    let subscription;
    afterNextRender(() => {
      subscription = this.run$.subscribe({
        next: (runData) => {
          if (!runData) return;
          if (!runData.clearView) {
            this.cmpRef?.changeDetectorRef.markForCheck();
            return;
          }
          const {
            component,
            injector,
            childMatchId
          } = runData;
          this.vcr.clear();
          if (!component) return;
          this.cmpRef = this.vcr.createComponent(component, {
            injector: injector || void 0
          });
          if (childMatchId) {
            this.cmpRef.setInput("matchId", childMatchId);
          }
          this.cmpRef.changeDetectorRef.markForCheck();
        },
        error: (error) => {
          console.error(error);
        }
      });
    });
    inject(DestroyRef).onDestroy(() => {
      subscription.unsubscribe();
      this.vcr.clear();
      this.cmpRef = void 0;
      this.renderedId = void 0;
    });
  }
  static ɵfac = function Outlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Outlet)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Outlet,
    selectors: [["outlet"], ["Outlet"]],
    decls: 0,
    vars: 0,
    template: function Outlet_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Outlet, [{
    type: Component,
    args: [{
      selector: "outlet,Outlet",
      template: ``,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], () => [], null);
})();
function match$(_a) {
  var _b = _a, {
    injector
  } = _b, opts = __objRest(_b, [
    "injector"
  ]);
  !injector && assertInInjectionContext(match$);
  if (!injector) {
    injector = inject(Injector);
  }
  return runInInjectionContext(injector, () => {
    const closestMatchId = inject(MATCH_ID, {
      optional: true
    });
    const nearestMatchId = computed(() => {
      if (opts.from) return null;
      return closestMatchId;
    });
    return combineLatest([routerState$({
      select: (s) => s.matches,
      injector
    }), toObservable(nearestMatchId)]).pipe(map(([matches2, matchId]) => {
      const match2 = matches2.find((d) => {
        return opts.from ? opts.from === d.routeId : d.id === matchId;
      });
      invariant(!((opts.shouldThrow ?? true) && !match2), `Could not find ${opts.from ? `an active match from "${opts.from}"` : "a nearest match!"}`);
      if (match2 === void 0) {
        return void 0;
      }
      return opts.select ? opts.select(match2) : match2;
    }));
  });
}
function match(_a) {
  var _b = _a, {
    injector
  } = _b, opts = __objRest(_b, [
    "injector"
  ]);
  !injector && assertInInjectionContext(match);
  if (!injector) {
    injector = inject(Injector);
  }
  return runInInjectionContext(injector, () => {
    return toSignal(match$(__spreadValues({
      injector
    }, opts)), {
      injector
    });
  });
}
function loaderData$(_a) {
  var _b = _a, {
    injector
  } = _b, opts = __objRest(_b, [
    "injector"
  ]);
  !injector && assertInInjectionContext(loaderData$);
  if (!injector) {
    injector = inject(Injector);
  }
  return runInInjectionContext(injector, () => {
    return match$({
      injector,
      from: opts.from,
      strict: opts.strict,
      select: (s) => opts.select ? opts.select(s.loaderData) : s.loaderData
    });
  });
}
function loaderData(_a) {
  var _b = _a, {
    injector
  } = _b, opts = __objRest(_b, [
    "injector"
  ]);
  !injector && assertInInjectionContext(loaderData);
  if (!injector) {
    injector = inject(Injector);
  }
  return runInInjectionContext(injector, () => {
    return toSignal(loaderData$(__spreadValues({
      injector
    }, opts)), {
      injector
    });
  });
}
function loaderDeps$(_a) {
  var _b = _a, {
    injector
  } = _b, opts = __objRest(_b, [
    "injector"
  ]);
  !injector && assertInInjectionContext(loaderDeps$);
  if (!injector) {
    injector = inject(Injector);
  }
  return runInInjectionContext(injector, () => {
    const _a2 = opts, {
      select
    } = _a2, rest = __objRest(_a2, [
      "select"
    ]);
    return match$(__spreadProps(__spreadValues({}, rest), {
      select: (s) => {
        return select ? select(s.loaderDeps) : s.loaderDeps;
      }
    }));
  });
}
function loaderDeps(_a) {
  var _b = _a, {
    injector
  } = _b, opts = __objRest(_b, [
    "injector"
  ]);
  !injector && assertInInjectionContext(loaderDeps);
  if (!injector) {
    injector = inject(Injector);
  }
  return runInInjectionContext(injector, () => {
    return toSignal(loaderDeps$(__spreadValues({
      injector
    }, opts)), {
      injector
    });
  });
}
function params$(_a) {
  var _b = _a, {
    injector
  } = _b, opts = __objRest(_b, [
    "injector"
  ]);
  !injector && assertInInjectionContext(params);
  if (!injector) {
    injector = inject(Injector);
  }
  return runInInjectionContext(injector, () => {
    return match$({
      from: opts.from,
      strict: opts.strict,
      shouldThrow: opts.shouldThrow,
      select: (match2) => {
        return opts.select ? opts.select(match2.params) : match2.params;
      }
    });
  });
}
function params(_a) {
  var _b = _a, {
    injector
  } = _b, opts = __objRest(_b, [
    "injector"
  ]);
  !injector && assertInInjectionContext(params);
  if (!injector) {
    injector = inject(Injector);
  }
  return runInInjectionContext(injector, () => {
    return toSignal(params$(__spreadValues({
      injector
    }, opts)));
  });
}
function routeContext$(_a) {
  var _b = _a, {
    injector
  } = _b, opts = __objRest(_b, [
    "injector"
  ]);
  !injector && assertInInjectionContext(routeContext);
  if (!injector) {
    injector = inject(Injector);
  }
  return runInInjectionContext(injector, () => {
    return match$(__spreadProps(__spreadValues({}, opts), {
      select: (match2) => {
        return opts.select ? opts.select(match2.context) : match2.context;
      }
    }));
  });
}
function routeContext(_a) {
  var _b = _a, {
    injector
  } = _b, opts = __objRest(_b, [
    "injector"
  ]);
  !injector && assertInInjectionContext(routeContext);
  if (!injector) {
    injector = inject(Injector);
  }
  return runInInjectionContext(injector, () => {
    return toSignal(routeContext$(__spreadValues({
      injector
    }, opts)));
  });
}
function search$(_a) {
  var _b = _a, {
    injector
  } = _b, opts = __objRest(_b, [
    "injector"
  ]);
  !injector && assertInInjectionContext(search);
  if (!injector) {
    injector = inject(Injector);
  }
  return runInInjectionContext(injector, () => {
    return match$({
      from: opts.from,
      strict: opts.strict,
      shouldThrow: opts.shouldThrow,
      select: (match2) => {
        return opts.select ? opts.select(match2.search) : match2.search;
      }
    });
  });
}
function search(_a) {
  var _b = _a, {
    injector
  } = _b, opts = __objRest(_b, [
    "injector"
  ]);
  !injector && assertInInjectionContext(search);
  if (!injector) {
    injector = inject(Injector);
  }
  return runInInjectionContext(injector, () => {
    return toSignal(search$(__spreadValues({
      injector
    }, opts)));
  });
}
var ERROR_COMPONENT_CONTEXT = new InjectionToken("ERROR_COMPONENT_CONTEXT");
var NOT_FOUND_COMPONENT_CONTEXT = new InjectionToken("NOT_FOUND_COMPONENT_CONTEXT");
function routeApi(id) {
  return new RouteApi({
    id
  });
}
var RouteApi = class extends BaseRouteApi {
  /**
   * @deprecated Use the `getRouteApi` function instead.
   */
  constructor({
    id
  }) {
    super({
      id
    });
  }
  match$ = (opts) => match$(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
  match = (opts) => match(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
  routeContext$ = (opts) => routeContext$(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
  routeContext = (opts) => routeContext(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
  search$ = (opts) => search$(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
  search = (opts) => search(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
  params$ = (opts) => params$(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
  params = (opts) => params(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
  loaderDeps$ = (opts) => loaderDeps$(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
  loaderDeps = (opts) => loaderDeps(__spreadProps(__spreadValues({}, opts), {
    from: this.id,
    strict: false
  }));
  loaderData$ = (opts) => loaderData$(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
  loaderData = (opts) => loaderData(__spreadProps(__spreadValues({}, opts), {
    from: this.id,
    strict: false
  }));
};
var Route = class extends BaseRoute {
  /**
   * @deprecated Use the `createRoute` function instead.
   */
  constructor(options) {
    super(options);
  }
  match$ = (opts) => match$(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
  match = (opts) => match(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
  routeContext$ = (opts) => routeContext$(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
  routeContext = (opts) => routeContext(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
  search$ = (opts) => search$(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
  search = (opts) => search(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
  params$ = (opts) => params$(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
  params = (opts) => params(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
  loaderDeps$ = (opts) => loaderDeps$(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
  loaderDeps = (opts) => loaderDeps(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
  loaderData$ = (opts) => loaderData$(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
  loaderData = (opts) => loaderData(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
};
function createRoute(options) {
  if (options.loader) {
    options.loader = runFnInInjectionContext(options.loader);
  }
  if (options.shouldReload && typeof options.shouldReload === "function") {
    options.shouldReload = runFnInInjectionContext(options.shouldReload);
  }
  if (options.beforeLoad) {
    options.beforeLoad = runFnInInjectionContext(options.beforeLoad);
  }
  return new Route(options);
}
function createRootRouteWithContext() {
  return (options) => {
    return createRootRoute(options);
  };
}
var RootRoute = class extends BaseRootRoute {
  /**
   * @deprecated `RootRoute` is now an internal implementation detail. Use `createRootRoute()` instead.
   */
  constructor(options) {
    super(options);
  }
  match$ = (opts) => match$(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
  match = (opts) => match(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
  routeContext$ = (opts) => routeContext$(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
  routeContext = (opts) => routeContext(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
  search$ = (opts) => search$(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
  search = (opts) => search(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
  params$ = (opts) => params$(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
  params = (opts) => params(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
  loaderDeps$ = (opts) => loaderDeps$(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
  loaderDeps = (opts) => loaderDeps(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
  loaderData$ = (opts) => loaderData$(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
  loaderData = (opts) => loaderData(__spreadProps(__spreadValues({}, opts), {
    from: this.id
  }));
};
function createRootRoute(options) {
  return new RootRoute(options);
}
var NotFoundRoute = class extends Route {
  constructor(options) {
    super(__spreadProps(__spreadValues({}, options), {
      id: "404"
    }));
  }
};
function runFnInInjectionContext(fn) {
  const originalFn = fn;
  return (...args) => {
    const {
      context,
      location: location2,
      route
    } = args[0];
    const routeInjector = context.getRouteInjector(route?.id || location2.href);
    return runInInjectionContext(routeInjector, originalFn.bind(null, ...args));
  };
}
var DefaultError = class _DefaultError {
  context = inject(ERROR_COMPONENT_CONTEXT);
  show = signal(false);
  static ɵfac = function DefaultError_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DefaultError)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _DefaultError,
    selectors: [["default-error"], ["DefaultError"]],
    decls: 7,
    vars: 2,
    consts: [[2, "display", "flex", "align-items", "center", "gap", "0.5rem"], [2, "font-size", "1rem"], [2, "appearance", "none", "font-size", "0.6em", "border", "1px solid currentColor", "padding", "0.1rem 0.2rem", "font-weight", "bold", "border-radius", "0.25rem", 3, "click"], [2, "height", "0.25rem"], [2, "font-size", "0.7em", "border", "1px solid red", "border-radius", "0.25rem", "padding", "0.3rem", "color", "red", "overflow", "auto"]],
    template: function DefaultError_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0)(1, "strong", 1);
        ɵɵtext(2, "Something went wrong!");
        ɵɵelementEnd();
        ɵɵelementStart(3, "button", 2);
        ɵɵlistener("click", function DefaultError_Template_button_click_3_listener() {
          return ctx.show.set(!ctx.show());
        });
        ɵɵtext(4);
        ɵɵelementEnd()();
        ɵɵelement(5, "div", 3);
        ɵɵtemplate(6, DefaultError_Conditional_6_Template, 4, 1, "div");
      }
      if (rf & 2) {
        ɵɵadvance(4);
        ɵɵtextInterpolate1(" ", ctx.show() ? "Hide Error" : "Show Error", " ");
        ɵɵadvance(2);
        ɵɵconditional(ctx.show() ? 6 : -1);
      }
    },
    styles: ["[_nghost-%COMP%]{display:block;padding:.5rem;max-width:100%}"],
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultError, [{
    type: Component,
    args: [{
      selector: "default-error,DefaultError",
      template: `
    <div style="display: flex; align-items: center; gap: 0.5rem">
      <strong style="font-size: 1rem">Something went wrong!</strong>
      <button
        style="appearance: none; font-size: 0.6em; border: 1px solid currentColor; padding: 0.1rem 0.2rem; font-weight: bold; border-radius: 0.25rem"
        (click)="show.set(!show())"
      >
        {{ show() ? 'Hide Error' : 'Show Error' }}
      </button>
    </div>
    <div style="height: 0.25rem"></div>
    @if (show()) {
      <div>
        <pre
          style="font-size: 0.7em; border: 1px solid red; border-radius: 0.25rem; padding: 0.3rem; color: red; overflow: auto"
        >
          @if (context.error.message; as message) {
            <code>{{ message }}</code>
          }
        </pre>
      </div>
    }
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [":host{display:block;padding:.5rem;max-width:100%}\n"]
    }]
  }], null, null);
})();
var Transitioner = class _Transitioner {
  router = injectRouter();
  destroyRef = inject(DestroyRef);
  document = inject(DOCUMENT);
  cdr = inject(ChangeDetectorRef);
  matches$ = routerState$({
    select: (s) => s.matches
  });
  hasPendingMatches$ = this.matches$.pipe(map((matches2) => matches2.some((d) => d.status === "pending")), distinctUntilChanged(() => false));
  isLoading$ = routerState$({
    select: (s) => s.isLoading,
    equal: () => false
  });
  previousIsLoading$ = this.isLoading$.pipe(startWith(void 0), pairwise(), map(([prev, curr]) => prev ?? !!curr));
  isTransitioning$ = new BehaviorSubject(false);
  isAnyPending$ = combineLatest([this.isLoading$, this.isTransitioning$, this.hasPendingMatches$]).pipe(map(([isLoading, isTransitioning, hasPendingMatches]) => isLoading || isTransitioning || hasPendingMatches), distinctUntilChanged(() => false));
  previousIsAnyPending$ = this.isAnyPending$.pipe(startWith(void 0), pairwise(), map(([prev, curr]) => prev ?? !!curr));
  isPagePending$ = combineLatest([this.isLoading$, this.hasPendingMatches$]).pipe(map(([isLoading, hasPendingMatches]) => isLoading || hasPendingMatches), distinctUntilChanged(() => false));
  previousIsPagePending$ = this.isPagePending$.pipe(startWith(void 0), pairwise(), map(([prev, curr]) => prev ?? !!curr));
  mountLoadForRouter = {
    router: this.router,
    mounted: false
  };
  load$ = combineLatest([this.previousIsLoading$, this.isLoading$]).pipe(tap(([previousIsLoading, isLoading]) => {
    if (previousIsLoading && !isLoading) {
      this.router.emit(__spreadValues({
        type: "onLoad"
      }, getLocationChangeInfo(this.router.state)));
      this.router.__store.setState((s) => __spreadProps(__spreadValues({}, s), {
        status: "idle"
      }));
    }
  }));
  pagePending$ = combineLatest([this.previousIsPagePending$, this.isPagePending$]).pipe(tap(([previousIsPagePending, isPagePending]) => {
    if (previousIsPagePending && !isPagePending) {
      this.router.emit(__spreadValues({
        type: "onBeforeRouteMount"
      }, getLocationChangeInfo(this.router.state)));
    }
  }));
  pending$ = combineLatest([this.previousIsAnyPending$, this.isAnyPending$]).pipe(tap(([previousIsAnyPending, isAnyPending]) => {
    if (previousIsAnyPending && !isAnyPending) {
      this.router.emit(__spreadValues({
        type: "onResolved"
      }, getLocationChangeInfo(this.router.state)));
      this.router.__store.setState((s) => __spreadProps(__spreadValues({}, s), {
        status: "idle",
        resolvedLocation: s.location
      }));
      if (typeof this.document !== "undefined" && "querySelector" in this.document) {
        const hashScrollIntoViewOptions = this.router.state.location.state.__hashScrollIntoViewOptions ?? true;
        if (hashScrollIntoViewOptions && this.router.state.location.hash !== "") {
          const el = this.document.getElementById(this.router.state.location.hash);
          if (el) el.scrollIntoView(hashScrollIntoViewOptions);
        }
      }
    }
  }));
  constructor() {
    if (!this.router.isServer) {
      this.router.startTransition = (fn) => {
        this.isTransitioning$.next(true);
        fn();
        this.isTransitioning$.next(false);
        this.cdr.detectChanges();
      };
    }
    const subscription = new Subscription();
    afterNextRender(() => {
      untracked(() => {
        const window = this.document.defaultView;
        if (typeof window !== "undefined" && this.router.clientSsr || this.mountLoadForRouter.router === this.router && this.mountLoadForRouter.mounted) {
          return;
        }
        this.mountLoadForRouter = {
          router: this.router,
          mounted: true
        };
        const tryLoad = () => __async(this, null, function* () {
          try {
            yield this.router.load();
            this.router.__store.setState((s) => __spreadProps(__spreadValues({}, s), {
              status: "idle"
            }));
          } catch (err) {
            console.error(err);
          }
        });
        void tryLoad();
      });
      subscription.add(this.load$.subscribe());
      subscription.add(this.pagePending$.subscribe());
      subscription.add(this.pending$.subscribe());
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
  ngOnInit() {
    const unsub = this.router.history.subscribe(() => this.router.load());
    const nextLocation = this.router.buildLocation({
      to: this.router.latestLocation.pathname,
      search: true,
      params: true,
      hash: true,
      state: true,
      _includeValidateSearch: true
    });
    if (trimPathRight(this.router.latestLocation.href) !== trimPathRight(nextLocation.href)) {
      void this.router.commitLocation(__spreadProps(__spreadValues({}, nextLocation), {
        replace: true
      }));
    }
    this.destroyRef.onDestroy(() => unsub());
  }
  static ɵfac = function Transitioner_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Transitioner)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _Transitioner
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Transitioner, [{
    type: Directive
  }], () => [], null);
})();
var Matches = class _Matches {
  router = injectRouter();
  injector = inject(Injector);
  vcr = inject(ViewContainerRef);
  defaultPendingComponent = this.router.options.defaultPendingComponent?.();
  resetKey$ = routerState$({
    select: (s) => s.loadedAt.toString()
  });
  rootMatchId$ = routerState$({
    select: (s) => s.matches[0]?.id
  });
  matchLoad$ = this.rootMatchId$.pipe(switchMap((rootMatchId) => {
    if (!rootMatchId) return of({
      pending: false
    });
    const loadPromise = this.router.getMatch(rootMatchId)?.loadPromise;
    if (!loadPromise) return of({
      pending: false
    });
    return of({
      pending: true
    }).pipe(switchMap(() => loadPromise.then(() => ({
      pending: false
    }))));
  }));
  cmpRef;
  run$ = this.matchLoad$.pipe(switchMap(({
    pending
  }) => {
    if (pending) {
      if (this.defaultPendingComponent) {
        return of({
          component: this.defaultPendingComponent,
          clearView: true,
          matchId: null
        });
      }
      return of(null);
    }
    return combineLatest([this.rootMatchId$, this.resetKey$]).pipe(map(([matchId]) => {
      if (!matchId) return null;
      if (this.cmpRef) return {
        clearView: false
      };
      return {
        component: RouteMatch,
        matchId,
        clearView: true
      };
    }));
  }));
  constructor() {
    let subscription;
    afterNextRender(() => {
      subscription = this.run$.subscribe({
        next: (runData) => {
          if (!runData) return;
          if (!runData.clearView) {
            this.cmpRef?.changeDetectorRef.markForCheck();
            return;
          }
          const {
            component,
            matchId
          } = runData;
          this.vcr.clear();
          this.cmpRef = this.vcr.createComponent(component);
          if (matchId) {
            this.cmpRef.setInput("matchId", matchId);
          }
          this.cmpRef.changeDetectorRef.markForCheck();
        },
        error: (error) => {
          console.error(error);
          const injector = Injector.create({
            providers: [{
              provide: ERROR_COMPONENT_CONTEXT,
              useValue: {
                error,
                info: {
                  componentStack: ""
                },
                reset: () => void this.router.invalidate()
              }
            }],
            parent: this.injector
          });
          this.vcr.clear();
          const ref = this.vcr.createComponent(DefaultError, {
            injector
          });
          ref.changeDetectorRef.markForCheck();
          this.cmpRef = void 0;
        }
      });
    });
    inject(DestroyRef).onDestroy(() => {
      subscription.unsubscribe();
      this.vcr.clear();
      this.cmpRef = void 0;
    });
  }
  static ɵfac = function Matches_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Matches)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _Matches,
    features: [ɵɵHostDirectivesFeature([Transitioner])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Matches, [{
    type: Directive,
    args: [{
      hostDirectives: [Transitioner]
    }]
  }], () => [], null);
})();
function matches$(_a = {}) {
  var _b = _a, {
    injector
  } = _b, opts = __objRest(_b, [
    "injector"
  ]);
  !injector && assertInInjectionContext(matches$);
  if (!injector) {
    injector = inject(Injector);
  }
  return runInInjectionContext(injector, () => {
    return routerState$({
      injector,
      select: (state) => {
        const matches2 = state.matches;
        return opts.select ? opts.select(matches2) : matches2;
      }
    });
  });
}
function matches(_a = {}) {
  var _b = _a, {
    injector
  } = _b, opts = __objRest(_b, [
    "injector"
  ]);
  !injector && assertInInjectionContext(matches);
  if (!injector) {
    injector = inject(Injector);
  }
  return runInInjectionContext(injector, () => {
    return toSignal(matches$(__spreadValues({
      injector
    }, opts)));
  });
}
function parentMatches$(_a = {}) {
  var _b = _a, {
    injector
  } = _b, opts = __objRest(_b, [
    "injector"
  ]);
  !injector && assertInInjectionContext(parentMatches$);
  if (!injector) {
    injector = inject(Injector);
  }
  return runInInjectionContext(injector, () => {
    const closestMatch = inject(MATCH_ID);
    return routerState$({
      injector,
      select: (s) => s.matches
    }).pipe(map((matches2) => {
      const sliced = matches2.slice(0, matches2.findIndex((d) => d.id === closestMatch));
      return opts.select ? opts.select(sliced) : sliced;
    }), distinctUntilRefChanged());
  });
}
function parentMatches(_a = {}) {
  var _b = _a, {
    injector
  } = _b, opts = __objRest(_b, [
    "injector"
  ]);
  !injector && assertInInjectionContext(parentMatches);
  if (!injector) {
    injector = inject(Injector);
  }
  return runInInjectionContext(injector, () => {
    return toSignal(parentMatches$(__spreadValues({
      injector
    }, opts)));
  });
}
function childMatches$(_a = {}) {
  var _b = _a, {
    injector
  } = _b, opts = __objRest(_b, [
    "injector"
  ]);
  !injector && assertInInjectionContext(childMatches$);
  if (!injector) {
    injector = inject(Injector);
  }
  return runInInjectionContext(injector, () => {
    const closestMatch = inject(MATCH_ID);
    return routerState$({
      injector,
      select: (s) => s.matches
    }).pipe(map((matches2) => {
      const sliced = matches2.slice(matches2.findIndex((d) => d.id === closestMatch) + 1);
      return opts.select ? opts.select(sliced) : sliced;
    }), distinctUntilRefChanged());
  });
}
function childMatches(_a = {}) {
  var _b = _a, {
    injector
  } = _b, opts = __objRest(_b, [
    "injector"
  ]);
  !injector && assertInInjectionContext(childMatches);
  if (!injector) {
    injector = inject(Injector);
  }
  return runInInjectionContext(injector, () => {
    return toSignal(childMatches$(__spreadValues({
      injector
    }, opts)));
  });
}
var Link = class _Link {
  linkOptions = input.required({
    alias: "link",
    transform: (value) => {
      return typeof value === "object" ? value : {
        to: value
      };
    }
  });
  linkActiveOptions = input({
    class: "active"
  }, {
    alias: "linkActive",
    transform: (value) => {
      if (typeof value === "string") return {
        class: value
      };
      if (!value.class) value.class = "active";
      return value;
    }
  });
  router = injectRouter();
  hostElement = inject(ElementRef);
  currentSearch = routerState({
    select: (s) => s.location.searchStr
  });
  disabled = computed(() => this.linkOptions()["disabled"]);
  to = computed(() => this.linkOptions()["to"]);
  userFrom = computed(() => this.linkOptions()["from"]);
  userReloadDocument = computed(() => this.linkOptions()["reloadDocument"]);
  userPreload = computed(() => this.linkOptions()["preload"]);
  userPreloadDelay = computed(() => this.linkOptions()["preloadDelay"]);
  activeOptions = computed(() => this.linkOptions().activeOptions || this.linkActiveOptions());
  exactActiveOptions = computed(() => this.activeOptions().exact);
  includeHashActiveOptions = computed(() => this.activeOptions().includeHash);
  includeSearchActiveOptions = computed(() => this.activeOptions().includeSearch);
  type = computed(() => {
    const to = this.to();
    try {
      new URL(`${to}`);
      return "external";
    } catch {
      return "internal";
    }
  });
  // when `from` is not supplied, use the leaf route of the current matches as the `from` location
  // so relative routing works as expected
  from = toSignal(combineLatest([toObservable(this.userFrom), matches$({
    select: (matches2) => matches2[matches2.length - 1]?.fullPath
  })]).pipe(map(([userFrom, from]) => userFrom ?? from), distinctUntilRefChanged()));
  navigateOptions = computed(() => {
    return __spreadProps(__spreadValues({}, this.linkOptions()), {
      from: this.from()
    });
  });
  next = computed(() => {
    const [options] = [this.navigateOptions(), this.currentSearch()];
    try {
      return this.router.buildLocation(options);
    } catch {
      return null;
    }
  });
  preload = computed(() => {
    const userReloadDocument = this.userReloadDocument();
    if (userReloadDocument) return false;
    const userPreload = this.userPreload();
    if (userPreload) return userPreload;
    return this.router.options.defaultPreload;
  });
  preloadDelay = computed(() => {
    const userPreloadDelay = this.userPreloadDelay();
    if (userPreloadDelay) return userPreloadDelay;
    return this.router.options.defaultPreloadDelay;
  });
  hostHref = computed(() => {
    const [type, to] = [this.type(), this.to()];
    if (type === "external") return to;
    const disabled = this.disabled();
    if (disabled) return void 0;
    const next = this.next();
    if (!next) return void 0;
    return next.maskedLocation ? this.router.history.createHref(next.maskedLocation.href) : this.router.history.createHref(next.href);
  });
  transitioning = signal(false);
  isActive = toSignal(combineLatest([toObservable(this.next), toObservable(this.exactActiveOptions), toObservable(this.includeSearchActiveOptions), toObservable(this.includeHashActiveOptions), routerState$({
    select: (s) => s.location
  })]).pipe(map(([next, exact, includeSearchOptions, includeHashOptions, location2]) => {
    if (!next) return false;
    if (exact) {
      const testExact = exactPathTest(location2.pathname, next.pathname, this.router.basepath);
      if (!testExact) return false;
    } else {
      const currentPathSplit = removeTrailingSlash(location2.pathname, this.router.basepath).split("/");
      const nextPathSplit = removeTrailingSlash(next.pathname, this.router.basepath).split("/");
      const pathIsFuzzyEqual = nextPathSplit.every((d, i) => d === currentPathSplit[i]);
      if (!pathIsFuzzyEqual) {
        return false;
      }
    }
    const includeSearch = includeSearchOptions ?? true;
    if (includeSearch) {
      const searchTest = deepEqual(location2.search, next.search, {
        partial: !exact,
        ignoreUndefined: !(includeSearchOptions ?? true)
      });
      if (!searchTest) {
        return false;
      }
    }
    const includeHash = includeHashOptions ?? true;
    if (includeHash) {
      return location2.hash === next.hash;
    }
    return true;
  })));
  activeClass = computed(() => this.isActive() ? this.activeOptions().class || "active" : "");
  constructor() {
    afterRenderEffect(() => {
      const [disabled, preload] = [untracked(this.disabled), untracked(this.preload)];
      if (!disabled && preload === "render") {
        this.doPreload();
      }
    });
    afterRenderEffect((onCleanup) => {
      const unsub = this.router.subscribe("onResolved", () => {
        this.transitioning.set(false);
      });
      onCleanup(() => unsub());
    });
  }
  handleClick(event) {
    if (this.type() === "external") return;
    const [disabled, target] = [this.disabled(), this.hostElement.nativeElement.target];
    if (disabled || this.isCtrlEvent(event) || event.defaultPrevented || target && target !== "_self" || event.button !== 0) {
      return;
    }
    event.preventDefault();
    this.transitioning.set(true);
    this.router.navigate(this.navigateOptions());
  }
  handleFocus() {
    if (this.disabled() || this.type() === "external") return;
    if (this.preload()) {
      this.doPreload();
    }
  }
  preloadTimeout = null;
  handleMouseEnter() {
    if (this.disabled() || !this.preload() || this.isActive() || this.type() === "external") return;
    this.preloadTimeout = setTimeout(() => {
      this.preloadTimeout = null;
      this.doPreload();
    }, this.preloadDelay());
  }
  handleMouseLeave() {
    if (this.disabled() || this.type() === "external") return;
    if (this.preloadTimeout) {
      clearTimeout(this.preloadTimeout);
      this.preloadTimeout = null;
    }
  }
  doPreload() {
    this.router.preloadRoute(this.navigateOptions()).catch((err) => {
      console.warn(err);
      console.warn(preloadWarning);
    });
  }
  isCtrlEvent(e) {
    return e.metaKey || e.altKey || e.ctrlKey || e.shiftKey;
  }
  static ɵfac = function Link_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Link)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _Link,
    selectors: [["a", "link", ""]],
    hostVars: 10,
    hostBindings: function Link_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function Link_click_HostBindingHandler($event) {
          return ctx.handleClick($event);
        })("focus", function Link_focus_HostBindingHandler() {
          return ctx.handleFocus();
        })("touchstart", function Link_touchstart_HostBindingHandler($event) {
          return ctx.handleClick($event);
        })("mouseenter", function Link_mouseenter_HostBindingHandler($event) {
          return ctx.handleMouseEnter($event);
        })("mouseleave", function Link_mouseleave_HostBindingHandler() {
          return ctx.handleMouseLeave();
        });
      }
      if (rf & 2) {
        ɵɵattribute("data-active", ctx.isActive())("data-type", ctx.type())("data-transitioning", ctx.transitioning() ? "transitioning" : void 0)("href", ctx.hostHref(), ɵɵsanitizeUrl)("role", ctx.disabled() ? "link" : void 0)("aria-disabled", ctx.disabled())("aria-current", ctx.isActive() ? "page" : void 0)("data-from", ctx.from());
        ɵɵclassMap(ctx.activeClass());
      }
    },
    inputs: {
      linkOptions: [1, "link", "linkOptions"],
      linkActiveOptions: [1, "linkActive", "linkActiveOptions"]
    },
    exportAs: ["link"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Link, [{
    type: Directive,
    args: [{
      selector: "a[link]",
      exportAs: "link",
      host: {
        "(click)": "handleClick($event)",
        "(focus)": "handleFocus()",
        "(touchstart)": "handleClick($event)",
        "(mouseenter)": "handleMouseEnter($event)",
        "(mouseleave)": "handleMouseLeave()",
        "[class]": "activeClass()",
        "[attr.data-active]": "isActive()",
        "[attr.data-type]": "type()",
        "[attr.data-transitioning]": 'transitioning() ? "transitioning" : undefined',
        "[attr.href]": "hostHref()",
        "[attr.role]": 'disabled() ? "link" : undefined',
        "[attr.aria-disabled]": "disabled()",
        "[attr.aria-current]": 'isActive() ? "page" : undefined',
        "[attr.data-from]": "from()"
      }
    }]
  }], () => [], null);
})();
var linkOptions = (options) => {
  return options;
};
function matchRoute$({
  injector
} = {}) {
  !injector && assertInInjectionContext(matchRoute$);
  if (!injector) {
    injector = inject(Injector);
  }
  return runInInjectionContext(injector, () => {
    const router = injectRouter();
    const status$ = routerState$({
      select: (s) => s.status
    });
    return (opts) => {
      const _a = opts, {
        pending,
        caseSensitive,
        fuzzy,
        includeSearch
      } = _a, rest = __objRest(_a, [
        "pending",
        "caseSensitive",
        "fuzzy",
        "includeSearch"
      ]);
      return status$.pipe(map(() => router.matchRoute(rest, {
        pending,
        caseSensitive,
        fuzzy,
        includeSearch
      })));
    };
  });
}
function matchRoute({
  injector
} = {}) {
  !injector && assertInInjectionContext(matchRoute);
  if (!injector) {
    injector = inject(Injector);
  }
  return runInInjectionContext(injector, () => {
    const matchRoute$Return = matchRoute$({
      injector
    });
    return (opts) => {
      return toSignal(matchRoute$Return(opts), {
        injector
      });
    };
  });
}
var MatchRoute = class _MatchRoute {
  matchRoute = input({}, {
    alias: "match"
  });
  status$ = routerState$({
    select: (s) => s.status
  });
  matchRouteFn = matchRoute$();
  parentLink = inject(Link, {
    optional: true
  });
  options = computed(() => {
    const parentLinkOptions = this.parentLink?.linkOptions();
    if (!parentLinkOptions) return this.matchRoute();
    return __spreadValues(__spreadValues({}, parentLinkOptions), this.matchRoute());
  });
  match$ = combineLatest([toObservable(this.options), this.status$]).pipe(switchMap(([matchRoute2]) => this.matchRouteFn(matchRoute2)));
  match = toSignal(this.match$);
  static ɵfac = function MatchRoute_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatchRoute)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatchRoute,
    selectors: [["", "match", ""]],
    inputs: {
      matchRoute: [1, "match", "matchRoute"]
    },
    exportAs: ["matchRoute"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatchRoute, [{
    type: Directive,
    args: [{
      selector: "[match]",
      exportAs: "matchRoute"
    }]
  }], null, null);
})();
function createFileRoute(path) {
  return new FileRoute(path, {
    silent: true
  }).createRoute;
}
var FileRoute = class {
  path;
  silent;
  constructor(path, _opts) {
    this.path = path;
    this.silent = _opts?.silent;
  }
  createRoute = (options) => {
    tiny_warning_esm_default(this.silent, "FileRoute is deprecated and will be removed in the next major version. Use the createFileRoute(path)(options) function instead.");
    const route = createRoute(options);
    route.isRoot = false;
    return route;
  };
};
var LazyRoute = class {
  options;
  constructor(opts) {
    this.options = opts;
  }
  match$ = (opts) => match$(__spreadProps(__spreadValues({}, opts), {
    from: this.options.id
  }));
  match = (opts) => match(__spreadProps(__spreadValues({}, opts), {
    from: this.options.id
  }));
  routeContext$ = (opts) => routeContext$(__spreadProps(__spreadValues({}, opts), {
    from: this.options.id
  }));
  routeContext = (opts) => routeContext(__spreadProps(__spreadValues({}, opts), {
    from: this.options.id
  }));
  search$ = (opts) => search$(__spreadProps(__spreadValues({}, opts), {
    from: this.options.id
  }));
  search = (opts) => search(__spreadProps(__spreadValues({}, opts), {
    from: this.options.id
  }));
  params$ = (opts) => params$(__spreadProps(__spreadValues({}, opts), {
    from: this.options.id
  }));
  params = (opts) => params(__spreadProps(__spreadValues({}, opts), {
    from: this.options.id
  }));
  loaderDeps$ = (opts) => loaderDeps$(__spreadProps(__spreadValues({}, opts), {
    from: this.options.id
  }));
  loaderDeps = (opts) => loaderDeps(__spreadProps(__spreadValues({}, opts), {
    from: this.options.id
  }));
  loaderData$ = (opts) => loaderData$(__spreadProps(__spreadValues({}, opts), {
    from: this.options.id
  }));
  loaderData = (opts) => loaderData(__spreadProps(__spreadValues({}, opts), {
    from: this.options.id
  }));
};
function createLazyRoute(id) {
  return (opts) => {
    return new LazyRoute(__spreadValues({
      id
    }, opts));
  };
}
function createLazyFileRoute(id) {
  return (opts) => new LazyRoute(__spreadValues({
    id
  }, opts));
}
var RouterRoot = class _RouterRoot {
  router = input(injectRouter());
  options = input({});
  constructor() {
    const environmentInjector = inject(EnvironmentInjector);
    effect(() => {
      const [router, options] = [this.router(), this.options()];
      router.update(__spreadProps(__spreadValues(__spreadValues({}, router.options), options), {
        context: __spreadProps(__spreadValues(__spreadValues({}, router.options.context), options.context), {
          getRouteInjector(routeId, providers = []) {
            return router.getRouteEnvInjector(routeId, environmentInjector, providers, router);
          }
        })
      }));
    });
  }
  static ɵfac = function RouterRoot_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterRoot)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _RouterRoot,
    selectors: [["router-root"], ["RouterRoot"]],
    inputs: {
      router: [1, "router"],
      options: [1, "options"]
    },
    features: [ɵɵHostDirectivesFeature([Matches])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterRoot, [{
    type: Directive,
    args: [{
      selector: "router-root,RouterRoot",
      hostDirectives: [Matches]
    }]
  }], () => [], null);
})();
function canGoBack$({
  injector
} = {}) {
  !injector && assertInInjectionContext(canGoBack$);
  if (!injector) {
    injector = inject(Injector);
  }
  return runInInjectionContext(injector, () => {
    return routerState$({
      select: (s) => s.location.state.__TSR_index !== 0,
      injector
    });
  });
}
function canGoBack({
  injector
} = {}) {
  !injector && assertInInjectionContext(canGoBack);
  if (!injector) {
    injector = inject(Injector);
  }
  return runInInjectionContext(injector, () => {
    return toSignal(canGoBack$({
      injector
    }));
  });
}
function location$({
  injector,
  select
} = {}) {
  !injector && assertInInjectionContext(location$);
  if (!injector) {
    injector = inject(Injector);
  }
  return runInInjectionContext(injector, () => {
    return routerState$({
      injector,
      select: (state) => select ? select(state.location) : state.location
    });
  });
}
function location({
  injector,
  select
} = {}) {
  !injector && assertInInjectionContext(location);
  if (!injector) {
    injector = inject(Injector);
  }
  return runInInjectionContext(injector, () => {
    return toSignal(location$({
      injector,
      select
    }));
  });
}

export {
  tiny_warning_esm_default,
  DefaultNotFound,
  isDevMode,
  ROUTER,
  ROUTER_STATE,
  injectRouter,
  injectRouterState,
  provideRouter,
  createRouter,
  NgRouter,
  routerState$,
  routerState,
  OnRendered,
  RouteMatch,
  Outlet,
  match$,
  match,
  loaderData$,
  loaderData,
  loaderDeps$,
  loaderDeps,
  params$,
  params,
  routeContext$,
  routeContext,
  search$,
  search,
  ERROR_COMPONENT_CONTEXT,
  NOT_FOUND_COMPONENT_CONTEXT,
  routeApi,
  RouteApi,
  Route,
  createRoute,
  createRootRouteWithContext,
  RootRoute,
  createRootRoute,
  NotFoundRoute,
  DefaultError,
  Transitioner,
  Matches,
  matches$,
  matches,
  parentMatches$,
  parentMatches,
  childMatches$,
  childMatches,
  Link,
  linkOptions,
  matchRoute$,
  matchRoute,
  MatchRoute,
  createFileRoute,
  LazyRoute,
  createLazyRoute,
  createLazyFileRoute,
  RouterRoot,
  canGoBack$,
  canGoBack,
  location$,
  location
};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v19.2.4
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-LOC7ESM5.js.map
