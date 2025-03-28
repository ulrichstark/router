import {
  injectRouter,
  isDevMode
} from "./chunk-LOC7ESM5.js";
import "./chunk-3S33LVVJ.js";
import {
  Directive,
  ElementRef,
  NgZone,
  afterNextRender,
  booleanAttribute,
  effect,
  inject,
  input,
  setClassMetadata,
  signal,
  untracked,
  ɵɵdefineDirective
} from "./chunk-QZ2YKBDB.js";
import {
  createComponent,
  createSignal,
  lazy,
  render
} from "./chunk-RJV7ZQ7L.js";
import "./chunk-3JUTRO22.js";
import "./chunk-WDMUDEB6.js";

// packages/router-devtools-core/dist/esm/TanStackRouterDevtoolsCore.js
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var _router;
var _routerState;
var _position;
var _initialIsOpen;
var _shadowDOMTarget;
var _panelProps;
var _closeButtonProps;
var _toggleButtonProps;
var _isMounted;
var _Component;
var _dispose;
var TanStackRouterDevtoolsCore = class {
  constructor(config) {
    __privateAdd(this, _router);
    __privateAdd(this, _routerState);
    __privateAdd(this, _position);
    __privateAdd(this, _initialIsOpen);
    __privateAdd(this, _shadowDOMTarget);
    __privateAdd(this, _panelProps);
    __privateAdd(this, _closeButtonProps);
    __privateAdd(this, _toggleButtonProps);
    __privateAdd(this, _isMounted, false);
    __privateAdd(this, _Component);
    __privateAdd(this, _dispose);
    __privateSet(this, _router, createSignal(config.router));
    __privateSet(this, _routerState, createSignal(config.routerState));
    __privateSet(this, _position, config.position ?? "bottom-left");
    __privateSet(this, _initialIsOpen, config.initialIsOpen ?? false);
    __privateSet(this, _shadowDOMTarget, config.shadowDOMTarget);
    __privateSet(this, _panelProps, config.panelProps);
    __privateSet(this, _closeButtonProps, config.closeButtonProps);
    __privateSet(this, _toggleButtonProps, config.toggleButtonProps);
  }
  mount(el) {
    if (__privateGet(this, _isMounted)) {
      throw new Error("Devtools is already mounted");
    }
    const dispose = render(() => {
      const [router] = __privateGet(this, _router);
      const [routerState] = __privateGet(this, _routerState);
      const position = __privateGet(this, _position);
      const initialIsOpen = __privateGet(this, _initialIsOpen);
      const shadowDOMTarget = __privateGet(this, _shadowDOMTarget);
      const panelProps = __privateGet(this, _panelProps);
      const closeButtonProps = __privateGet(this, _closeButtonProps);
      const toggleButtonProps = __privateGet(this, _toggleButtonProps);
      let Devtools;
      if (__privateGet(this, _Component)) {
        Devtools = __privateGet(this, _Component);
      } else {
        Devtools = lazy(() => import("./FloatingTanStackRouterDevtools-JAODFE67.js"));
        __privateSet(this, _Component, Devtools);
      }
      return createComponent(Devtools, {
        position,
        initialIsOpen,
        shadowDOMTarget,
        router,
        routerState,
        panelProps,
        closeButtonProps,
        toggleButtonProps
      });
    }, el);
    __privateSet(this, _isMounted, true);
    __privateSet(this, _dispose, dispose);
  }
  unmount() {
    var _a;
    if (!__privateGet(this, _isMounted)) {
      throw new Error("Devtools is not mounted");
    }
    (_a = __privateGet(this, _dispose)) == null ? void 0 : _a.call(this);
    __privateSet(this, _isMounted, false);
  }
  setRouter(router) {
    __privateGet(this, _router)[1](router);
  }
  setRouterState(routerState) {
    __privateGet(this, _routerState)[1](routerState);
  }
  setOptions(options) {
    if (options.position !== void 0) {
      __privateSet(this, _position, options.position);
    }
    if (options.initialIsOpen !== void 0) {
      __privateSet(this, _initialIsOpen, options.initialIsOpen);
    }
    if (options.shadowDOMTarget !== void 0) {
      __privateSet(this, _shadowDOMTarget, options.shadowDOMTarget);
    }
  }
};
_router = /* @__PURE__ */ new WeakMap();
_routerState = /* @__PURE__ */ new WeakMap();
_position = /* @__PURE__ */ new WeakMap();
_initialIsOpen = /* @__PURE__ */ new WeakMap();
_shadowDOMTarget = /* @__PURE__ */ new WeakMap();
_panelProps = /* @__PURE__ */ new WeakMap();
_closeButtonProps = /* @__PURE__ */ new WeakMap();
_toggleButtonProps = /* @__PURE__ */ new WeakMap();
_isMounted = /* @__PURE__ */ new WeakMap();
_Component = /* @__PURE__ */ new WeakMap();
_dispose = /* @__PURE__ */ new WeakMap();

// packages/router-devtools-core/dist/esm/TanStackRouterDevtoolsPanelCore.js
var _router2;
var _routerState2;
var _shadowDOMTarget2;
var _isMounted2;
var _setIsOpen;
var _dispose2;
var _Component2;
_router2 = /* @__PURE__ */ new WeakMap();
_routerState2 = /* @__PURE__ */ new WeakMap();
_shadowDOMTarget2 = /* @__PURE__ */ new WeakMap();
_isMounted2 = /* @__PURE__ */ new WeakMap();
_setIsOpen = /* @__PURE__ */ new WeakMap();
_dispose2 = /* @__PURE__ */ new WeakMap();
_Component2 = /* @__PURE__ */ new WeakMap();

// packages/angular-router-devtools/dist/fesm2022/tanstack-angular-router-devtools.mjs
var RouterDevtools = class _RouterDevtools {
  injectedRouter = injectRouter();
  host = inject(ElementRef);
  ngZone = inject(NgZone);
  router = input(this.injectedRouter);
  show = input(isDevMode(), {
    transform: booleanAttribute
  });
  initialIsOpen = input(void 0, {
    transform: booleanAttribute
  });
  panelOptions = input({});
  closeButtonOptions = input({});
  toggleButtonOptions = input({});
  shadowDOMTarget = input();
  containerElement = input();
  position = input();
  devtools = signal(null);
  constructor() {
    afterNextRender(() => {
      const show = this.show();
      if (!show) return;
      const router = untracked(this.router);
      const [initialIsOpen, panelOptions, closeButtonOptions, toggleButtonOptions, shadowDOMTarget, containerElement, position, activeRouterState] = [untracked(this.initialIsOpen), untracked(this.panelOptions), untracked(this.closeButtonOptions), untracked(this.toggleButtonOptions), untracked(this.shadowDOMTarget), untracked(this.containerElement), untracked(this.position), router.state];
      this.devtools.set(new TanStackRouterDevtoolsCore({
        router,
        routerState: activeRouterState,
        initialIsOpen,
        position,
        panelProps: panelOptions,
        closeButtonProps: closeButtonOptions,
        toggleButtonProps: toggleButtonOptions,
        shadowDOMTarget,
        containerElement
      }));
    });
    effect(() => {
      const devtools = this.devtools();
      if (!devtools) return;
      this.ngZone.runOutsideAngular(() => devtools.setRouter(this.router()));
    });
    effect((onCleanup) => {
      const devtools = this.devtools();
      if (!devtools) return;
      this.ngZone.runOutsideAngular(() => {
        const unsub = untracked(this.router).__store.subscribe(({
          currentVal
        }) => {
          devtools.setRouterState(currentVal);
        });
        onCleanup(() => unsub());
      });
    });
    effect(() => {
      const devtools = this.devtools();
      if (!devtools) return;
      this.ngZone.runOutsideAngular(() => {
        devtools.setOptions({
          initialIsOpen: this.initialIsOpen(),
          panelProps: this.panelOptions(),
          closeButtonProps: this.closeButtonOptions(),
          toggleButtonProps: this.toggleButtonOptions(),
          position: this.position(),
          containerElement: this.containerElement(),
          shadowDOMTarget: this.shadowDOMTarget()
        });
      });
    });
    effect((onCleanup) => {
      const devtools = this.devtools();
      if (!devtools) return;
      this.ngZone.runOutsideAngular(() => devtools.mount(this.host.nativeElement));
      onCleanup(() => {
        this.ngZone.runOutsideAngular(() => devtools.unmount());
      });
    });
  }
  static ɵfac = function RouterDevtools_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterDevtools)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _RouterDevtools,
    selectors: [["tanstack-router-devtools"], ["TanstackRouterDevtools"]],
    hostAttrs: [2, "display", "block"],
    inputs: {
      router: [1, "router"],
      show: [1, "show"],
      initialIsOpen: [1, "initialIsOpen"],
      panelOptions: [1, "panelOptions"],
      closeButtonOptions: [1, "closeButtonOptions"],
      toggleButtonOptions: [1, "toggleButtonOptions"],
      shadowDOMTarget: [1, "shadowDOMTarget"],
      containerElement: [1, "containerElement"],
      position: [1, "position"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterDevtools, [{
    type: Directive,
    args: [{
      selector: "tanstack-router-devtools,TanstackRouterDevtools",
      host: {
        style: "display: block;"
      }
    }]
  }], () => [], null);
})();
export {
  RouterDevtools
};
//# sourceMappingURL=@tanstack_angular-router-devtools.js.map
