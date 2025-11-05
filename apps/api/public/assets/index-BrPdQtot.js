(function () {
  const Z = document.createElement("link").relList;
  if (Z && Z.supports && Z.supports("modulepreload")) return;
  for (const B of document.querySelectorAll('link[rel="modulepreload"]')) h(B);
  new MutationObserver((B) => {
    for (const $ of B)
      if ($.type === "childList")
        for (const cl of $.addedNodes)
          cl.tagName === "LINK" && cl.rel === "modulepreload" && h(cl);
  }).observe(document, { childList: !0, subtree: !0 });
  function x(B) {
    const $ = {};
    return (
      B.integrity && ($.integrity = B.integrity),
      B.referrerPolicy && ($.referrerPolicy = B.referrerPolicy),
      B.crossOrigin === "use-credentials"
        ? ($.credentials = "include")
        : B.crossOrigin === "anonymous"
        ? ($.credentials = "omit")
        : ($.credentials = "same-origin"),
      $
    );
  }
  function h(B) {
    if (B.ep) return;
    B.ep = !0;
    const $ = x(B);
    fetch(B.href, $);
  }
})();
var di = { exports: {} },
  ze = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sy;
function Pm() {
  if (Sy) return ze;
  Sy = 1;
  var _ = Symbol.for("react.transitional.element"),
    Z = Symbol.for("react.fragment");
  function x(h, B, $) {
    var cl = null;
    if (
      ($ !== void 0 && (cl = "" + $),
      B.key !== void 0 && (cl = "" + B.key),
      "key" in B)
    ) {
      $ = {};
      for (var il in B) il !== "key" && ($[il] = B[il]);
    } else $ = B;
    return (
      (B = $.ref),
      { $$typeof: _, type: h, key: cl, ref: B !== void 0 ? B : null, props: $ }
    );
  }
  return (ze.Fragment = Z), (ze.jsx = x), (ze.jsxs = x), ze;
}
var by;
function lv() {
  return by || ((by = 1), (di.exports = Pm())), di.exports;
}
var M = lv(),
  yi = { exports: {} },
  X = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zy;
function tv() {
  if (zy) return X;
  zy = 1;
  var _ = Symbol.for("react.transitional.element"),
    Z = Symbol.for("react.portal"),
    x = Symbol.for("react.fragment"),
    h = Symbol.for("react.strict_mode"),
    B = Symbol.for("react.profiler"),
    $ = Symbol.for("react.consumer"),
    cl = Symbol.for("react.context"),
    il = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    T = Symbol.for("react.memo"),
    Q = Symbol.for("react.lazy"),
    H = Symbol.for("react.activity"),
    R = Symbol.iterator;
  function sl(s) {
    return s === null || typeof s != "object"
      ? null
      : ((s = (R && s[R]) || s["@@iterator"]),
        typeof s == "function" ? s : null);
  }
  var al = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    hl = Object.assign,
    Ll = {};
  function Ql(s, z, O) {
    (this.props = s),
      (this.context = z),
      (this.refs = Ll),
      (this.updater = O || al);
  }
  (Ql.prototype.isReactComponent = {}),
    (Ql.prototype.setState = function (s, z) {
      if (typeof s != "object" && typeof s != "function" && s != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, s, z, "setState");
    }),
    (Ql.prototype.forceUpdate = function (s) {
      this.updater.enqueueForceUpdate(this, s, "forceUpdate");
    });
  function _t() {}
  _t.prototype = Ql.prototype;
  function zl(s, z, O) {
    (this.props = s),
      (this.context = z),
      (this.refs = Ll),
      (this.updater = O || al);
  }
  var Kl = (zl.prototype = new _t());
  (Kl.constructor = zl), hl(Kl, Ql.prototype), (Kl.isPureReactComponent = !0);
  var tt = Array.isArray;
  function Xl() {}
  var G = { H: null, A: null, T: null, S: null },
    Zl = Object.prototype.hasOwnProperty;
  function at(s, z, O) {
    var N = O.ref;
    return {
      $$typeof: _,
      type: s,
      key: z,
      ref: N !== void 0 ? N : null,
      props: O,
    };
  }
  function Ot(s, z) {
    return at(s.type, z, s.props);
  }
  function mt(s) {
    return typeof s == "object" && s !== null && s.$$typeof === _;
  }
  function Rl(s) {
    var z = { "=": "=0", ":": "=2" };
    return (
      "$" +
      s.replace(/[=:]/g, function (O) {
        return z[O];
      })
    );
  }
  var Ct = /\/+/g;
  function Y(s, z) {
    return typeof s == "object" && s !== null && s.key != null
      ? Rl("" + s.key)
      : z.toString(36);
  }
  function K(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (
          (typeof s.status == "string"
            ? s.then(Xl, Xl)
            : ((s.status = "pending"),
              s.then(
                function (z) {
                  s.status === "pending" &&
                    ((s.status = "fulfilled"), (s.value = z));
                },
                function (z) {
                  s.status === "pending" &&
                    ((s.status = "rejected"), (s.reason = z));
                }
              )),
          s.status)
        ) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function o(s, z, O, N, V) {
    var k = typeof s;
    (k === "undefined" || k === "boolean") && (s = null);
    var fl = !1;
    if (s === null) fl = !0;
    else
      switch (k) {
        case "bigint":
        case "string":
        case "number":
          fl = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case _:
            case Z:
              fl = !0;
              break;
            case Q:
              return (fl = s._init), o(fl(s._payload), z, O, N, V);
          }
      }
    if (fl)
      return (
        (V = V(s)),
        (fl = N === "" ? "." + Y(s, 0) : N),
        tt(V)
          ? ((O = ""),
            fl != null && (O = fl.replace(Ct, "$&/") + "/"),
            o(V, z, O, "", function (pu) {
              return pu;
            }))
          : V != null &&
            (mt(V) &&
              (V = Ot(
                V,
                O +
                  (V.key == null || (s && s.key === V.key)
                    ? ""
                    : ("" + V.key).replace(Ct, "$&/") + "/") +
                  fl
              )),
            z.push(V)),
        1
      );
    fl = 0;
    var Jl = N === "" ? "." : N + ":";
    if (tt(s))
      for (var Al = 0; Al < s.length; Al++)
        (N = s[Al]), (k = Jl + Y(N, Al)), (fl += o(N, z, O, k, V));
    else if (((Al = sl(s)), typeof Al == "function"))
      for (s = Al.call(s), Al = 0; !(N = s.next()).done; )
        (N = N.value), (k = Jl + Y(N, Al++)), (fl += o(N, z, O, k, V));
    else if (k === "object") {
      if (typeof s.then == "function") return o(K(s), z, O, N, V);
      throw (
        ((z = String(s)),
        Error(
          "Objects are not valid as a React child (found: " +
            (z === "[object Object]"
              ? "object with keys {" + Object.keys(s).join(", ") + "}"
              : z) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return fl;
  }
  function A(s, z, O) {
    if (s == null) return s;
    var N = [],
      V = 0;
    return (
      o(s, N, "", "", function (k) {
        return z.call(O, k, V++);
      }),
      N
    );
  }
  function D(s) {
    if (s._status === -1) {
      var z = s._result;
      (z = z()),
        z.then(
          function (O) {
            (s._status === 0 || s._status === -1) &&
              ((s._status = 1), (s._result = O));
          },
          function (O) {
            (s._status === 0 || s._status === -1) &&
              ((s._status = 2), (s._result = O));
          }
        ),
        s._status === -1 && ((s._status = 0), (s._result = z));
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var J =
      typeof reportError == "function"
        ? reportError
        : function (s) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var z = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof s == "object" &&
                  s !== null &&
                  typeof s.message == "string"
                    ? String(s.message)
                    : String(s),
                error: s,
              });
              if (!window.dispatchEvent(z)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", s);
              return;
            }
            console.error(s);
          },
    W = {
      map: A,
      forEach: function (s, z, O) {
        A(
          s,
          function () {
            z.apply(this, arguments);
          },
          O
        );
      },
      count: function (s) {
        var z = 0;
        return (
          A(s, function () {
            z++;
          }),
          z
        );
      },
      toArray: function (s) {
        return (
          A(s, function (z) {
            return z;
          }) || []
        );
      },
      only: function (s) {
        if (!mt(s))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return s;
      },
    };
  return (
    (X.Activity = H),
    (X.Children = W),
    (X.Component = Ql),
    (X.Fragment = x),
    (X.Profiler = B),
    (X.PureComponent = zl),
    (X.StrictMode = h),
    (X.Suspense = p),
    (X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G),
    (X.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (s) {
        return G.H.useMemoCache(s);
      },
    }),
    (X.cache = function (s) {
      return function () {
        return s.apply(null, arguments);
      };
    }),
    (X.cacheSignal = function () {
      return null;
    }),
    (X.cloneElement = function (s, z, O) {
      if (s == null)
        throw Error(
          "The argument must be a React element, but you passed " + s + "."
        );
      var N = hl({}, s.props),
        V = s.key;
      if (z != null)
        for (k in (z.key !== void 0 && (V = "" + z.key), z))
          !Zl.call(z, k) ||
            k === "key" ||
            k === "__self" ||
            k === "__source" ||
            (k === "ref" && z.ref === void 0) ||
            (N[k] = z[k]);
      var k = arguments.length - 2;
      if (k === 1) N.children = O;
      else if (1 < k) {
        for (var fl = Array(k), Jl = 0; Jl < k; Jl++)
          fl[Jl] = arguments[Jl + 2];
        N.children = fl;
      }
      return at(s.type, V, N);
    }),
    (X.createContext = function (s) {
      return (
        (s = {
          $$typeof: cl,
          _currentValue: s,
          _currentValue2: s,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (s.Provider = s),
        (s.Consumer = { $$typeof: $, _context: s }),
        s
      );
    }),
    (X.createElement = function (s, z, O) {
      var N,
        V = {},
        k = null;
      if (z != null)
        for (N in (z.key !== void 0 && (k = "" + z.key), z))
          Zl.call(z, N) &&
            N !== "key" &&
            N !== "__self" &&
            N !== "__source" &&
            (V[N] = z[N]);
      var fl = arguments.length - 2;
      if (fl === 1) V.children = O;
      else if (1 < fl) {
        for (var Jl = Array(fl), Al = 0; Al < fl; Al++)
          Jl[Al] = arguments[Al + 2];
        V.children = Jl;
      }
      if (s && s.defaultProps)
        for (N in ((fl = s.defaultProps), fl))
          V[N] === void 0 && (V[N] = fl[N]);
      return at(s, k, V);
    }),
    (X.createRef = function () {
      return { current: null };
    }),
    (X.forwardRef = function (s) {
      return { $$typeof: il, render: s };
    }),
    (X.isValidElement = mt),
    (X.lazy = function (s) {
      return { $$typeof: Q, _payload: { _status: -1, _result: s }, _init: D };
    }),
    (X.memo = function (s, z) {
      return { $$typeof: T, type: s, compare: z === void 0 ? null : z };
    }),
    (X.startTransition = function (s) {
      var z = G.T,
        O = {};
      G.T = O;
      try {
        var N = s(),
          V = G.S;
        V !== null && V(O, N),
          typeof N == "object" &&
            N !== null &&
            typeof N.then == "function" &&
            N.then(Xl, J);
      } catch (k) {
        J(k);
      } finally {
        z !== null && O.types !== null && (z.types = O.types), (G.T = z);
      }
    }),
    (X.unstable_useCacheRefresh = function () {
      return G.H.useCacheRefresh();
    }),
    (X.use = function (s) {
      return G.H.use(s);
    }),
    (X.useActionState = function (s, z, O) {
      return G.H.useActionState(s, z, O);
    }),
    (X.useCallback = function (s, z) {
      return G.H.useCallback(s, z);
    }),
    (X.useContext = function (s) {
      return G.H.useContext(s);
    }),
    (X.useDebugValue = function () {}),
    (X.useDeferredValue = function (s, z) {
      return G.H.useDeferredValue(s, z);
    }),
    (X.useEffect = function (s, z) {
      return G.H.useEffect(s, z);
    }),
    (X.useEffectEvent = function (s) {
      return G.H.useEffectEvent(s);
    }),
    (X.useId = function () {
      return G.H.useId();
    }),
    (X.useImperativeHandle = function (s, z, O) {
      return G.H.useImperativeHandle(s, z, O);
    }),
    (X.useInsertionEffect = function (s, z) {
      return G.H.useInsertionEffect(s, z);
    }),
    (X.useLayoutEffect = function (s, z) {
      return G.H.useLayoutEffect(s, z);
    }),
    (X.useMemo = function (s, z) {
      return G.H.useMemo(s, z);
    }),
    (X.useOptimistic = function (s, z) {
      return G.H.useOptimistic(s, z);
    }),
    (X.useReducer = function (s, z, O) {
      return G.H.useReducer(s, z, O);
    }),
    (X.useRef = function (s) {
      return G.H.useRef(s);
    }),
    (X.useState = function (s) {
      return G.H.useState(s);
    }),
    (X.useSyncExternalStore = function (s, z, O) {
      return G.H.useSyncExternalStore(s, z, O);
    }),
    (X.useTransition = function () {
      return G.H.useTransition();
    }),
    (X.version = "19.2.0"),
    X
  );
}
var Ey;
function gi() {
  return Ey || ((Ey = 1), (yi.exports = tv())), yi.exports;
}
var Cl = gi(),
  oi = { exports: {} },
  Ee = {},
  mi = { exports: {} },
  vi = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ty;
function av() {
  return (
    Ty ||
      ((Ty = 1),
      (function (_) {
        function Z(o, A) {
          var D = o.length;
          o.push(A);
          l: for (; 0 < D; ) {
            var J = (D - 1) >>> 1,
              W = o[J];
            if (0 < B(W, A)) (o[J] = A), (o[D] = W), (D = J);
            else break l;
          }
        }
        function x(o) {
          return o.length === 0 ? null : o[0];
        }
        function h(o) {
          if (o.length === 0) return null;
          var A = o[0],
            D = o.pop();
          if (D !== A) {
            o[0] = D;
            l: for (var J = 0, W = o.length, s = W >>> 1; J < s; ) {
              var z = 2 * (J + 1) - 1,
                O = o[z],
                N = z + 1,
                V = o[N];
              if (0 > B(O, D))
                N < W && 0 > B(V, O)
                  ? ((o[J] = V), (o[N] = D), (J = N))
                  : ((o[J] = O), (o[z] = D), (J = z));
              else if (N < W && 0 > B(V, D)) (o[J] = V), (o[N] = D), (J = N);
              else break l;
            }
          }
          return A;
        }
        function B(o, A) {
          var D = o.sortIndex - A.sortIndex;
          return D !== 0 ? D : o.id - A.id;
        }
        if (
          ((_.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var $ = performance;
          _.unstable_now = function () {
            return $.now();
          };
        } else {
          var cl = Date,
            il = cl.now();
          _.unstable_now = function () {
            return cl.now() - il;
          };
        }
        var p = [],
          T = [],
          Q = 1,
          H = null,
          R = 3,
          sl = !1,
          al = !1,
          hl = !1,
          Ll = !1,
          Ql = typeof setTimeout == "function" ? setTimeout : null,
          _t = typeof clearTimeout == "function" ? clearTimeout : null,
          zl = typeof setImmediate < "u" ? setImmediate : null;
        function Kl(o) {
          for (var A = x(T); A !== null; ) {
            if (A.callback === null) h(T);
            else if (A.startTime <= o)
              h(T), (A.sortIndex = A.expirationTime), Z(p, A);
            else break;
            A = x(T);
          }
        }
        function tt(o) {
          if (((hl = !1), Kl(o), !al))
            if (x(p) !== null) (al = !0), Xl || ((Xl = !0), Rl());
            else {
              var A = x(T);
              A !== null && K(tt, A.startTime - o);
            }
        }
        var Xl = !1,
          G = -1,
          Zl = 5,
          at = -1;
        function Ot() {
          return Ll ? !0 : !(_.unstable_now() - at < Zl);
        }
        function mt() {
          if (((Ll = !1), Xl)) {
            var o = _.unstable_now();
            at = o;
            var A = !0;
            try {
              l: {
                (al = !1), hl && ((hl = !1), _t(G), (G = -1)), (sl = !0);
                var D = R;
                try {
                  t: {
                    for (
                      Kl(o), H = x(p);
                      H !== null && !(H.expirationTime > o && Ot());

                    ) {
                      var J = H.callback;
                      if (typeof J == "function") {
                        (H.callback = null), (R = H.priorityLevel);
                        var W = J(H.expirationTime <= o);
                        if (((o = _.unstable_now()), typeof W == "function")) {
                          (H.callback = W), Kl(o), (A = !0);
                          break t;
                        }
                        H === x(p) && h(p), Kl(o);
                      } else h(p);
                      H = x(p);
                    }
                    if (H !== null) A = !0;
                    else {
                      var s = x(T);
                      s !== null && K(tt, s.startTime - o), (A = !1);
                    }
                  }
                  break l;
                } finally {
                  (H = null), (R = D), (sl = !1);
                }
                A = void 0;
              }
            } finally {
              A ? Rl() : (Xl = !1);
            }
          }
        }
        var Rl;
        if (typeof zl == "function")
          Rl = function () {
            zl(mt);
          };
        else if (typeof MessageChannel < "u") {
          var Ct = new MessageChannel(),
            Y = Ct.port2;
          (Ct.port1.onmessage = mt),
            (Rl = function () {
              Y.postMessage(null);
            });
        } else
          Rl = function () {
            Ql(mt, 0);
          };
        function K(o, A) {
          G = Ql(function () {
            o(_.unstable_now());
          }, A);
        }
        (_.unstable_IdlePriority = 5),
          (_.unstable_ImmediatePriority = 1),
          (_.unstable_LowPriority = 4),
          (_.unstable_NormalPriority = 3),
          (_.unstable_Profiling = null),
          (_.unstable_UserBlockingPriority = 2),
          (_.unstable_cancelCallback = function (o) {
            o.callback = null;
          }),
          (_.unstable_forceFrameRate = function (o) {
            0 > o || 125 < o
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Zl = 0 < o ? Math.floor(1e3 / o) : 5);
          }),
          (_.unstable_getCurrentPriorityLevel = function () {
            return R;
          }),
          (_.unstable_next = function (o) {
            switch (R) {
              case 1:
              case 2:
              case 3:
                var A = 3;
                break;
              default:
                A = R;
            }
            var D = R;
            R = A;
            try {
              return o();
            } finally {
              R = D;
            }
          }),
          (_.unstable_requestPaint = function () {
            Ll = !0;
          }),
          (_.unstable_runWithPriority = function (o, A) {
            switch (o) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                o = 3;
            }
            var D = R;
            R = o;
            try {
              return A();
            } finally {
              R = D;
            }
          }),
          (_.unstable_scheduleCallback = function (o, A, D) {
            var J = _.unstable_now();
            switch (
              (typeof D == "object" && D !== null
                ? ((D = D.delay),
                  (D = typeof D == "number" && 0 < D ? J + D : J))
                : (D = J),
              o)
            ) {
              case 1:
                var W = -1;
                break;
              case 2:
                W = 250;
                break;
              case 5:
                W = 1073741823;
                break;
              case 4:
                W = 1e4;
                break;
              default:
                W = 5e3;
            }
            return (
              (W = D + W),
              (o = {
                id: Q++,
                callback: A,
                priorityLevel: o,
                startTime: D,
                expirationTime: W,
                sortIndex: -1,
              }),
              D > J
                ? ((o.sortIndex = D),
                  Z(T, o),
                  x(p) === null &&
                    o === x(T) &&
                    (hl ? (_t(G), (G = -1)) : (hl = !0), K(tt, D - J)))
                : ((o.sortIndex = W),
                  Z(p, o),
                  al || sl || ((al = !0), Xl || ((Xl = !0), Rl()))),
              o
            );
          }),
          (_.unstable_shouldYield = Ot),
          (_.unstable_wrapCallback = function (o) {
            var A = R;
            return function () {
              var D = R;
              R = A;
              try {
                return o.apply(this, arguments);
              } finally {
                R = D;
              }
            };
          });
      })(vi)),
    vi
  );
}
var Ay;
function uv() {
  return Ay || ((Ay = 1), (mi.exports = av())), mi.exports;
}
var hi = { exports: {} },
  Vl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _y;
function ev() {
  if (_y) return Vl;
  _y = 1;
  var _ = gi();
  function Z(p) {
    var T = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      T += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var Q = 2; Q < arguments.length; Q++)
        T += "&args[]=" + encodeURIComponent(arguments[Q]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      T +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function x() {}
  var h = {
      d: {
        f: x,
        r: function () {
          throw Error(Z(522));
        },
        D: x,
        C: x,
        L: x,
        m: x,
        X: x,
        S: x,
        M: x,
      },
      p: 0,
      findDOMNode: null,
    },
    B = Symbol.for("react.portal");
  function $(p, T, Q) {
    var H =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: B,
      key: H == null ? null : "" + H,
      children: p,
      containerInfo: T,
      implementation: Q,
    };
  }
  var cl = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function il(p, T) {
    if (p === "font") return "";
    if (typeof T == "string") return T === "use-credentials" ? T : "";
  }
  return (
    (Vl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h),
    (Vl.createPortal = function (p, T) {
      var Q =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!T || (T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11))
        throw Error(Z(299));
      return $(p, T, null, Q);
    }),
    (Vl.flushSync = function (p) {
      var T = cl.T,
        Q = h.p;
      try {
        if (((cl.T = null), (h.p = 2), p)) return p();
      } finally {
        (cl.T = T), (h.p = Q), h.d.f();
      }
    }),
    (Vl.preconnect = function (p, T) {
      typeof p == "string" &&
        (T
          ? ((T = T.crossOrigin),
            (T =
              typeof T == "string"
                ? T === "use-credentials"
                  ? T
                  : ""
                : void 0))
          : (T = null),
        h.d.C(p, T));
    }),
    (Vl.prefetchDNS = function (p) {
      typeof p == "string" && h.d.D(p);
    }),
    (Vl.preinit = function (p, T) {
      if (typeof p == "string" && T && typeof T.as == "string") {
        var Q = T.as,
          H = il(Q, T.crossOrigin),
          R = typeof T.integrity == "string" ? T.integrity : void 0,
          sl = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
        Q === "style"
          ? h.d.S(p, typeof T.precedence == "string" ? T.precedence : void 0, {
              crossOrigin: H,
              integrity: R,
              fetchPriority: sl,
            })
          : Q === "script" &&
            h.d.X(p, {
              crossOrigin: H,
              integrity: R,
              fetchPriority: sl,
              nonce: typeof T.nonce == "string" ? T.nonce : void 0,
            });
      }
    }),
    (Vl.preinitModule = function (p, T) {
      if (typeof p == "string")
        if (typeof T == "object" && T !== null) {
          if (T.as == null || T.as === "script") {
            var Q = il(T.as, T.crossOrigin);
            h.d.M(p, {
              crossOrigin: Q,
              integrity: typeof T.integrity == "string" ? T.integrity : void 0,
              nonce: typeof T.nonce == "string" ? T.nonce : void 0,
            });
          }
        } else T == null && h.d.M(p);
    }),
    (Vl.preload = function (p, T) {
      if (
        typeof p == "string" &&
        typeof T == "object" &&
        T !== null &&
        typeof T.as == "string"
      ) {
        var Q = T.as,
          H = il(Q, T.crossOrigin);
        h.d.L(p, Q, {
          crossOrigin: H,
          integrity: typeof T.integrity == "string" ? T.integrity : void 0,
          nonce: typeof T.nonce == "string" ? T.nonce : void 0,
          type: typeof T.type == "string" ? T.type : void 0,
          fetchPriority:
            typeof T.fetchPriority == "string" ? T.fetchPriority : void 0,
          referrerPolicy:
            typeof T.referrerPolicy == "string" ? T.referrerPolicy : void 0,
          imageSrcSet:
            typeof T.imageSrcSet == "string" ? T.imageSrcSet : void 0,
          imageSizes: typeof T.imageSizes == "string" ? T.imageSizes : void 0,
          media: typeof T.media == "string" ? T.media : void 0,
        });
      }
    }),
    (Vl.preloadModule = function (p, T) {
      if (typeof p == "string")
        if (T) {
          var Q = il(T.as, T.crossOrigin);
          h.d.m(p, {
            as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
            crossOrigin: Q,
            integrity: typeof T.integrity == "string" ? T.integrity : void 0,
          });
        } else h.d.m(p);
    }),
    (Vl.requestFormReset = function (p) {
      h.d.r(p);
    }),
    (Vl.unstable_batchedUpdates = function (p, T) {
      return p(T);
    }),
    (Vl.useFormState = function (p, T, Q) {
      return cl.H.useFormState(p, T, Q);
    }),
    (Vl.useFormStatus = function () {
      return cl.H.useHostTransitionStatus();
    }),
    (Vl.version = "19.2.0"),
    Vl
  );
}
var Oy;
function nv() {
  if (Oy) return hi.exports;
  Oy = 1;
  function _() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_);
      } catch (Z) {
        console.error(Z);
      }
  }
  return _(), (hi.exports = ev()), hi.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var My;
function fv() {
  if (My) return Ee;
  My = 1;
  var _ = uv(),
    Z = gi(),
    x = nv();
  function h(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function B(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function $(l) {
    var t = l,
      a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do (t = l), (t.flags & 4098) !== 0 && (a = t.return), (l = t.return);
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function cl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function il(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function p(l) {
    if ($(l) !== l) throw Error(h(188));
  }
  function T(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = $(l)), t === null)) throw Error(h(188));
      return t !== l ? null : l;
    }
    for (var a = l, u = t; ; ) {
      var e = a.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (((u = e.return), u !== null)) {
          a = u;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === a) return p(e), l;
          if (n === u) return p(e), t;
          n = n.sibling;
        }
        throw Error(h(188));
      }
      if (a.return !== u.return) (a = e), (u = n);
      else {
        for (var f = !1, c = e.child; c; ) {
          if (c === a) {
            (f = !0), (a = e), (u = n);
            break;
          }
          if (c === u) {
            (f = !0), (u = e), (a = n);
            break;
          }
          c = c.sibling;
        }
        if (!f) {
          for (c = n.child; c; ) {
            if (c === a) {
              (f = !0), (a = n), (u = e);
              break;
            }
            if (c === u) {
              (f = !0), (u = n), (a = e);
              break;
            }
            c = c.sibling;
          }
          if (!f) throw Error(h(189));
        }
      }
      if (a.alternate !== u) throw Error(h(190));
    }
    if (a.tag !== 3) throw Error(h(188));
    return a.stateNode.current === a ? l : t;
  }
  function Q(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = Q(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var H = Object.assign,
    R = Symbol.for("react.element"),
    sl = Symbol.for("react.transitional.element"),
    al = Symbol.for("react.portal"),
    hl = Symbol.for("react.fragment"),
    Ll = Symbol.for("react.strict_mode"),
    Ql = Symbol.for("react.profiler"),
    _t = Symbol.for("react.consumer"),
    zl = Symbol.for("react.context"),
    Kl = Symbol.for("react.forward_ref"),
    tt = Symbol.for("react.suspense"),
    Xl = Symbol.for("react.suspense_list"),
    G = Symbol.for("react.memo"),
    Zl = Symbol.for("react.lazy"),
    at = Symbol.for("react.activity"),
    Ot = Symbol.for("react.memo_cache_sentinel"),
    mt = Symbol.iterator;
  function Rl(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (mt && l[mt]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var Ct = Symbol.for("react.client.reference");
  function Y(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Ct ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case hl:
        return "Fragment";
      case Ql:
        return "Profiler";
      case Ll:
        return "StrictMode";
      case tt:
        return "Suspense";
      case Xl:
        return "SuspenseList";
      case at:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case al:
          return "Portal";
        case zl:
          return l.displayName || "Context";
        case _t:
          return (l._context.displayName || "Context") + ".Consumer";
        case Kl:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case G:
          return (
            (t = l.displayName || null), t !== null ? t : Y(l.type) || "Memo"
          );
        case Zl:
          (t = l._payload), (l = l._init);
          try {
            return Y(l(t));
          } catch {}
      }
    return null;
  }
  var K = Array.isArray,
    o = Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    A = x.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    D = { pending: !1, data: null, method: null, action: null },
    J = [],
    W = -1;
  function s(l) {
    return { current: l };
  }
  function z(l) {
    0 > W || ((l.current = J[W]), (J[W] = null), W--);
  }
  function O(l, t) {
    W++, (J[W] = l.current), (l.current = t);
  }
  var N = s(null),
    V = s(null),
    k = s(null),
    fl = s(null);
  function Jl(l, t) {
    switch ((O(k, t), O(V, l), O(N, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Xd(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          (t = Xd(t)), (l = Zd(t, l));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    z(N), O(N, l);
  }
  function Al() {
    z(N), z(V), z(k);
  }
  function pu(l) {
    l.memoizedState !== null && O(fl, l);
    var t = N.current,
      a = Zd(t, l.type);
    t !== a && (O(V, l), O(N, a));
  }
  function Te(l) {
    V.current === l && (z(N), z(V)),
      fl.current === l && (z(fl), (ge._currentValue = D));
  }
  var Kn, ri;
  function Aa(l) {
    if (Kn === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        (Kn = (t && t[1]) || ""),
          (ri =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Kn +
      l +
      ri
    );
  }
  var Jn = !1;
  function wn(l, t) {
    if (!l || Jn) return "";
    Jn = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var E = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(E.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(E, []);
                } catch (r) {
                  var g = r;
                }
                Reflect.construct(l, [], E);
              } else {
                try {
                  E.call();
                } catch (r) {
                  g = r;
                }
                l.call(E.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (r) {
                g = r;
              }
              (E = l()) &&
                typeof E.catch == "function" &&
                E.catch(function () {});
            }
          } catch (r) {
            if (r && g && typeof r.stack == "string") return [r.stack, g.stack];
          }
          return [null, null];
        },
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name"
      );
      e &&
        e.configurable &&
        Object.defineProperty(u.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = u.DetermineComponentFrameRoot(),
        f = n[0],
        c = n[1];
      if (f && c) {
        var i = f.split(`
`),
          v = c.split(`
`);
        for (
          e = u = 0;
          u < i.length && !i[u].includes("DetermineComponentFrameRoot");

        )
          u++;
        for (; e < v.length && !v[e].includes("DetermineComponentFrameRoot"); )
          e++;
        if (u === i.length || e === v.length)
          for (
            u = i.length - 1, e = v.length - 1;
            1 <= u && 0 <= e && i[u] !== v[e];

          )
            e--;
        for (; 1 <= u && 0 <= e; u--, e--)
          if (i[u] !== v[e]) {
            if (u !== 1 || e !== 1)
              do
                if ((u--, e--, 0 > e || i[u] !== v[e])) {
                  var S =
                    `
` + i[u].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      S.includes("<anonymous>") &&
                      (S = S.replace("<anonymous>", l.displayName)),
                    S
                  );
                }
              while (1 <= u && 0 <= e);
            break;
          }
      }
    } finally {
      (Jn = !1), (Error.prepareStackTrace = a);
    }
    return (a = l ? l.displayName || l.name : "") ? Aa(a) : "";
  }
  function Uy(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Aa(l.type);
      case 16:
        return Aa("Lazy");
      case 13:
        return l.child !== t && t !== null
          ? Aa("Suspense Fallback")
          : Aa("Suspense");
      case 19:
        return Aa("SuspenseList");
      case 0:
      case 15:
        return wn(l.type, !1);
      case 11:
        return wn(l.type.render, !1);
      case 1:
        return wn(l.type, !0);
      case 31:
        return Aa("Activity");
      default:
        return "";
    }
  }
  function Si(l) {
    try {
      var t = "",
        a = null;
      do (t += Uy(l, a)), (a = l), (l = l.return);
      while (l);
      return t;
    } catch (u) {
      return (
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack
      );
    }
  }
  var $n = Object.prototype.hasOwnProperty,
    Wn = _.unstable_scheduleCallback,
    kn = _.unstable_cancelCallback,
    Ny = _.unstable_shouldYield,
    Hy = _.unstable_requestPaint,
    ut = _.unstable_now,
    jy = _.unstable_getCurrentPriorityLevel,
    bi = _.unstable_ImmediatePriority,
    zi = _.unstable_UserBlockingPriority,
    Ae = _.unstable_NormalPriority,
    Cy = _.unstable_LowPriority,
    Ei = _.unstable_IdlePriority,
    Ry = _.log,
    qy = _.unstable_setDisableYieldValue,
    Du = null,
    et = null;
  function It(l) {
    if (
      (typeof Ry == "function" && qy(l),
      et && typeof et.setStrictMode == "function")
    )
      try {
        et.setStrictMode(Du, l);
      } catch {}
  }
  var nt = Math.clz32 ? Math.clz32 : xy,
    By = Math.log,
    Yy = Math.LN2;
  function xy(l) {
    return (l >>>= 0), l === 0 ? 32 : (31 - ((By(l) / Yy) | 0)) | 0;
  }
  var _e = 256,
    Oe = 262144,
    Me = 4194304;
  function _a(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function pe(l, t, a) {
    var u = l.pendingLanes;
    if (u === 0) return 0;
    var e = 0,
      n = l.suspendedLanes,
      f = l.pingedLanes;
    l = l.warmLanes;
    var c = u & 134217727;
    return (
      c !== 0
        ? ((u = c & ~n),
          u !== 0
            ? (e = _a(u))
            : ((f &= c),
              f !== 0
                ? (e = _a(f))
                : a || ((a = c & ~l), a !== 0 && (e = _a(a)))))
        : ((c = u & ~n),
          c !== 0
            ? (e = _a(c))
            : f !== 0
            ? (e = _a(f))
            : a || ((a = u & ~l), a !== 0 && (e = _a(a)))),
      e === 0
        ? 0
        : t !== 0 &&
          t !== e &&
          (t & n) === 0 &&
          ((n = e & -e),
          (a = t & -t),
          n >= a || (n === 32 && (a & 4194048) !== 0))
        ? t
        : e
    );
  }
  function Uu(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Gy(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ti() {
    var l = Me;
    return (Me <<= 1), (Me & 62914560) === 0 && (Me = 4194304), l;
  }
  function Fn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function Nu(l, t) {
    (l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0));
  }
  function Qy(l, t, a, u, e, n) {
    var f = l.pendingLanes;
    (l.pendingLanes = a),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= a),
      (l.entangledLanes &= a),
      (l.errorRecoveryDisabledLanes &= a),
      (l.shellSuspendCounter = 0);
    var c = l.entanglements,
      i = l.expirationTimes,
      v = l.hiddenUpdates;
    for (a = f & ~a; 0 < a; ) {
      var S = 31 - nt(a),
        E = 1 << S;
      (c[S] = 0), (i[S] = -1);
      var g = v[S];
      if (g !== null)
        for (v[S] = null, S = 0; S < g.length; S++) {
          var r = g[S];
          r !== null && (r.lane &= -536870913);
        }
      a &= ~E;
    }
    u !== 0 && Ai(l, u, 0),
      n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function Ai(l, t, a) {
    (l.pendingLanes |= t), (l.suspendedLanes &= ~t);
    var u = 31 - nt(t);
    (l.entangledLanes |= t),
      (l.entanglements[u] = l.entanglements[u] | 1073741824 | (a & 261930));
  }
  function _i(l, t) {
    var a = (l.entangledLanes |= t);
    for (l = l.entanglements; a; ) {
      var u = 31 - nt(a),
        e = 1 << u;
      (e & t) | (l[u] & t) && (l[u] |= t), (a &= ~e);
    }
  }
  function Oi(l, t) {
    var a = t & -t;
    return (
      (a = (a & 42) !== 0 ? 1 : In(a)),
      (a & (l.suspendedLanes | t)) !== 0 ? 0 : a
    );
  }
  function In(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Pn(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Mi() {
    var l = A.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : yy(l.type));
  }
  function pi(l, t) {
    var a = A.p;
    try {
      return (A.p = l), t();
    } finally {
      A.p = a;
    }
  }
  var Pt = Math.random().toString(36).slice(2),
    ql = "__reactFiber$" + Pt,
    $l = "__reactProps$" + Pt,
    Va = "__reactContainer$" + Pt,
    lf = "__reactEvents$" + Pt,
    Xy = "__reactListeners$" + Pt,
    Zy = "__reactHandles$" + Pt,
    Di = "__reactResources$" + Pt,
    Hu = "__reactMarker$" + Pt;
  function tf(l) {
    delete l[ql], delete l[$l], delete l[lf], delete l[Xy], delete l[Zy];
  }
  function La(l) {
    var t = l[ql];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if ((t = a[Va] || a[ql])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (l = Wd(l); l !== null; ) {
            if ((a = l[ql])) return a;
            l = Wd(l);
          }
        return t;
      }
      (l = a), (a = l.parentNode);
    }
    return null;
  }
  function Ka(l) {
    if ((l = l[ql] || l[Va])) {
      var t = l.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return l;
    }
    return null;
  }
  function ju(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(h(33));
  }
  function Ja(l) {
    var t = l[Di];
    return (
      t ||
        (t = l[Di] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Hl(l) {
    l[Hu] = !0;
  }
  var Ui = new Set(),
    Ni = {};
  function Oa(l, t) {
    wa(l, t), wa(l + "Capture", t);
  }
  function wa(l, t) {
    for (Ni[l] = t, l = 0; l < t.length; l++) Ui.add(t[l]);
  }
  var Vy = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Hi = {},
    ji = {};
  function Ly(l) {
    return $n.call(ji, l)
      ? !0
      : $n.call(Hi, l)
      ? !1
      : Vy.test(l)
      ? (ji[l] = !0)
      : ((Hi[l] = !0), !1);
  }
  function De(l, t, a) {
    if (Ly(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var u = t.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function Ue(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Rt(l, t, a, u) {
    if (u === null) l.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + u);
    }
  }
  function vt(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Ci(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Ky(l, t, a) {
    var u = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (
      !l.hasOwnProperty(t) &&
      typeof u < "u" &&
      typeof u.get == "function" &&
      typeof u.set == "function"
    ) {
      var e = u.get,
        n = u.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return e.call(this);
          },
          set: function (f) {
            (a = "" + f), n.call(this, f);
          },
        }),
        Object.defineProperty(l, t, { enumerable: u.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (f) {
            a = "" + f;
          },
          stopTracking: function () {
            (l._valueTracker = null), delete l[t];
          },
        }
      );
    }
  }
  function af(l) {
    if (!l._valueTracker) {
      var t = Ci(l) ? "checked" : "value";
      l._valueTracker = Ky(l, t, "" + l[t]);
    }
  }
  function Ri(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      u = "";
    return (
      l && (u = Ci(l) ? (l.checked ? "true" : "false") : l.value),
      (l = u),
      l !== a ? (t.setValue(l), !0) : !1
    );
  }
  function Ne(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Jy = /[\n"\\]/g;
  function ht(l) {
    return l.replace(Jy, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function uf(l, t, a, u, e, n, f, c) {
    (l.name = ""),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (l.type = f)
        : l.removeAttribute("type"),
      t != null
        ? f === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + vt(t))
          : l.value !== "" + vt(t) && (l.value = "" + vt(t))
        : (f !== "submit" && f !== "reset") || l.removeAttribute("value"),
      t != null
        ? ef(l, f, vt(t))
        : a != null
        ? ef(l, f, vt(a))
        : u != null && l.removeAttribute("value"),
      e == null && n != null && (l.defaultChecked = !!n),
      e != null &&
        (l.checked = e && typeof e != "function" && typeof e != "symbol"),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.name = "" + vt(c))
        : l.removeAttribute("name");
  }
  function qi(l, t, a, u, e, n, f, c) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || a != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) {
        af(l);
        return;
      }
      (a = a != null ? "" + vt(a) : ""),
        (t = t != null ? "" + vt(t) : a),
        c || t === l.value || (l.value = t),
        (l.defaultValue = t);
    }
    (u = u ?? e),
      (u = typeof u != "function" && typeof u != "symbol" && !!u),
      (l.checked = c ? l.checked : !!u),
      (l.defaultChecked = !!u),
      f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (l.name = f),
      af(l);
  }
  function ef(l, t, a) {
    (t === "number" && Ne(l.ownerDocument) === l) ||
      l.defaultValue === "" + a ||
      (l.defaultValue = "" + a);
  }
  function $a(l, t, a, u) {
    if (((l = l.options), t)) {
      t = {};
      for (var e = 0; e < a.length; e++) t["$" + a[e]] = !0;
      for (a = 0; a < l.length; a++)
        (e = t.hasOwnProperty("$" + l[a].value)),
          l[a].selected !== e && (l[a].selected = e),
          e && u && (l[a].defaultSelected = !0);
    } else {
      for (a = "" + vt(a), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === a) {
          (l[e].selected = !0), u && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Bi(l, t, a) {
    if (
      t != null &&
      ((t = "" + vt(t)), t !== l.value && (l.value = t), a == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + vt(a) : "";
  }
  function Yi(l, t, a, u) {
    if (t == null) {
      if (u != null) {
        if (a != null) throw Error(h(92));
        if (K(u)) {
          if (1 < u.length) throw Error(h(93));
          u = u[0];
        }
        a = u;
      }
      a == null && (a = ""), (t = a);
    }
    (a = vt(t)),
      (l.defaultValue = a),
      (u = l.textContent),
      u === a && u !== "" && u !== null && (l.value = u),
      af(l);
  }
  function Wa(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var wy = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function xi(l, t, a) {
    var u = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? u
        ? l.setProperty(t, "")
        : t === "float"
        ? (l.cssFloat = "")
        : (l[t] = "")
      : u
      ? l.setProperty(t, a)
      : typeof a != "number" || a === 0 || wy.has(t)
      ? t === "float"
        ? (l.cssFloat = a)
        : (l[t] = ("" + a).trim())
      : (l[t] = a + "px");
  }
  function Gi(l, t, a) {
    if (t != null && typeof t != "object") throw Error(h(62));
    if (((l = l.style), a != null)) {
      for (var u in a)
        !a.hasOwnProperty(u) ||
          (t != null && t.hasOwnProperty(u)) ||
          (u.indexOf("--") === 0
            ? l.setProperty(u, "")
            : u === "float"
            ? (l.cssFloat = "")
            : (l[u] = ""));
      for (var e in t)
        (u = t[e]), t.hasOwnProperty(e) && a[e] !== u && xi(l, e, u);
    } else for (var n in t) t.hasOwnProperty(n) && xi(l, n, t[n]);
  }
  function nf(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var $y = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Wy =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function He(l) {
    return Wy.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  function qt() {}
  var ff = null;
  function cf(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var ka = null,
    Fa = null;
  function Qi(l) {
    var t = Ka(l);
    if (t && (l = t.stateNode)) {
      var a = l[$l] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (uf(
              l,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + ht("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var u = a[t];
              if (u !== l && u.form === l.form) {
                var e = u[$l] || null;
                if (!e) throw Error(h(90));
                uf(
                  u,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              (u = a[t]), u.form === l.form && Ri(u);
          }
          break l;
        case "textarea":
          Bi(l, a.value, a.defaultValue);
          break l;
        case "select":
          (t = a.value), t != null && $a(l, !!a.multiple, t, !1);
      }
    }
  }
  var sf = !1;
  function Xi(l, t, a) {
    if (sf) return l(t, a);
    sf = !0;
    try {
      var u = l(t);
      return u;
    } finally {
      if (
        ((sf = !1),
        (ka !== null || Fa !== null) &&
          (bn(), ka && ((t = ka), (l = Fa), (Fa = ka = null), Qi(t), l)))
      )
        for (t = 0; t < l.length; t++) Qi(l[t]);
    }
  }
  function Cu(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var u = a[$l] || null;
    if (u === null) return null;
    a = u[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) ||
          ((l = l.type),
          (u = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !u);
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function") throw Error(h(231, t, typeof a));
    return a;
  }
  var Bt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    df = !1;
  if (Bt)
    try {
      var Ru = {};
      Object.defineProperty(Ru, "passive", {
        get: function () {
          df = !0;
        },
      }),
        window.addEventListener("test", Ru, Ru),
        window.removeEventListener("test", Ru, Ru);
    } catch {
      df = !1;
    }
  var la = null,
    yf = null,
    je = null;
  function Zi() {
    if (je) return je;
    var l,
      t = yf,
      a = t.length,
      u,
      e = "value" in la ? la.value : la.textContent,
      n = e.length;
    for (l = 0; l < a && t[l] === e[l]; l++);
    var f = a - l;
    for (u = 1; u <= f && t[a - u] === e[n - u]; u++);
    return (je = e.slice(l, 1 < u ? 1 - u : void 0));
  }
  function Ce(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function Re() {
    return !0;
  }
  function Vi() {
    return !1;
  }
  function Wl(l) {
    function t(a, u, e, n, f) {
      (this._reactName = a),
        (this._targetInst = e),
        (this.type = u),
        (this.nativeEvent = n),
        (this.target = f),
        (this.currentTarget = null);
      for (var c in l)
        l.hasOwnProperty(c) && ((a = l[c]), (this[c] = a ? a(n) : n[c]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Re
          : Vi),
        (this.isPropagationStopped = Vi),
        this
      );
    }
    return (
      H(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Re));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Re));
        },
        persist: function () {},
        isPersistent: Re,
      }),
      t
    );
  }
  var Ma = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    qe = Wl(Ma),
    qu = H({}, Ma, { view: 0, detail: 0 }),
    ky = Wl(qu),
    of,
    mf,
    Bu,
    Be = H({}, qu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: hf,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== Bu &&
              (Bu && l.type === "mousemove"
                ? ((of = l.screenX - Bu.screenX), (mf = l.screenY - Bu.screenY))
                : (mf = of = 0),
              (Bu = l)),
            of);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : mf;
      },
    }),
    Li = Wl(Be),
    Fy = H({}, Be, { dataTransfer: 0 }),
    Iy = Wl(Fy),
    Py = H({}, qu, { relatedTarget: 0 }),
    vf = Wl(Py),
    lo = H({}, Ma, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    to = Wl(lo),
    ao = H({}, Ma, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    uo = Wl(ao),
    eo = H({}, Ma, { data: 0 }),
    Ki = Wl(eo),
    no = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    fo = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    co = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function io(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = co[l])
      ? !!t[l]
      : !1;
  }
  function hf() {
    return io;
  }
  var so = H({}, qu, {
      key: function (l) {
        if (l.key) {
          var t = no[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = Ce(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
          ? fo[l.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: hf,
      charCode: function (l) {
        return l.type === "keypress" ? Ce(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? Ce(l)
          : l.type === "keydown" || l.type === "keyup"
          ? l.keyCode
          : 0;
      },
    }),
    yo = Wl(so),
    oo = H({}, Be, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Ji = Wl(oo),
    mo = H({}, qu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: hf,
    }),
    vo = Wl(mo),
    ho = H({}, Ma, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    go = Wl(ho),
    ro = H({}, Be, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
          ? -l.wheelDeltaX
          : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
          ? -l.wheelDeltaY
          : "wheelDelta" in l
          ? -l.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    So = Wl(ro),
    bo = H({}, Ma, { newState: 0, oldState: 0 }),
    zo = Wl(bo),
    Eo = [9, 13, 27, 32],
    gf = Bt && "CompositionEvent" in window,
    Yu = null;
  Bt && "documentMode" in document && (Yu = document.documentMode);
  var To = Bt && "TextEvent" in window && !Yu,
    wi = Bt && (!gf || (Yu && 8 < Yu && 11 >= Yu)),
    $i = " ",
    Wi = !1;
  function ki(l, t) {
    switch (l) {
      case "keyup":
        return Eo.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Fi(l) {
    return (l = l.detail), typeof l == "object" && "data" in l ? l.data : null;
  }
  var Ia = !1;
  function Ao(l, t) {
    switch (l) {
      case "compositionend":
        return Fi(t);
      case "keypress":
        return t.which !== 32 ? null : ((Wi = !0), $i);
      case "textInput":
        return (l = t.data), l === $i && Wi ? null : l;
      default:
        return null;
    }
  }
  function _o(l, t) {
    if (Ia)
      return l === "compositionend" || (!gf && ki(l, t))
        ? ((l = Zi()), (je = yf = la = null), (Ia = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return wi && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Oo = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Ii(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Oo[l.type] : t === "textarea";
  }
  function Pi(l, t, a, u) {
    ka ? (Fa ? Fa.push(u) : (Fa = [u])) : (ka = u),
      (t = Mn(t, "onChange")),
      0 < t.length &&
        ((a = new qe("onChange", "change", null, a, u)),
        l.push({ event: a, listeners: t }));
  }
  var xu = null,
    Gu = null;
  function Mo(l) {
    qd(l, 0);
  }
  function Ye(l) {
    var t = ju(l);
    if (Ri(t)) return l;
  }
  function ls(l, t) {
    if (l === "change") return t;
  }
  var ts = !1;
  if (Bt) {
    var rf;
    if (Bt) {
      var Sf = "oninput" in document;
      if (!Sf) {
        var as = document.createElement("div");
        as.setAttribute("oninput", "return;"),
          (Sf = typeof as.oninput == "function");
      }
      rf = Sf;
    } else rf = !1;
    ts = rf && (!document.documentMode || 9 < document.documentMode);
  }
  function us() {
    xu && (xu.detachEvent("onpropertychange", es), (Gu = xu = null));
  }
  function es(l) {
    if (l.propertyName === "value" && Ye(Gu)) {
      var t = [];
      Pi(t, Gu, l, cf(l)), Xi(Mo, t);
    }
  }
  function po(l, t, a) {
    l === "focusin"
      ? (us(), (xu = t), (Gu = a), xu.attachEvent("onpropertychange", es))
      : l === "focusout" && us();
  }
  function Do(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Ye(Gu);
  }
  function Uo(l, t) {
    if (l === "click") return Ye(t);
  }
  function No(l, t) {
    if (l === "input" || l === "change") return Ye(t);
  }
  function Ho(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var ft = typeof Object.is == "function" ? Object.is : Ho;
  function Qu(l, t) {
    if (ft(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(l),
      u = Object.keys(t);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var e = a[u];
      if (!$n.call(t, e) || !ft(l[e], t[e])) return !1;
    }
    return !0;
  }
  function ns(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function fs(l, t) {
    var a = ns(l);
    l = 0;
    for (var u; a; ) {
      if (a.nodeType === 3) {
        if (((u = l + a.textContent.length), l <= t && u >= t))
          return { node: a, offset: t - l };
        l = u;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = ns(a);
    }
  }
  function cs(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? cs(l, t.parentNode)
        : "contains" in l
        ? l.contains(t)
        : l.compareDocumentPosition
        ? !!(l.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function is(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = Ne(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = Ne(l.document);
    }
    return t;
  }
  function bf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var jo = Bt && "documentMode" in document && 11 >= document.documentMode,
    Pa = null,
    zf = null,
    Xu = null,
    Ef = !1;
  function ss(l, t, a) {
    var u =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Ef ||
      Pa == null ||
      Pa !== Ne(u) ||
      ((u = Pa),
      "selectionStart" in u && bf(u)
        ? (u = { start: u.selectionStart, end: u.selectionEnd })
        : ((u = (
            (u.ownerDocument && u.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset,
          })),
      (Xu && Qu(Xu, u)) ||
        ((Xu = u),
        (u = Mn(zf, "onSelect")),
        0 < u.length &&
          ((t = new qe("onSelect", "select", null, t, a)),
          l.push({ event: t, listeners: u }),
          (t.target = Pa))));
  }
  function pa(l, t) {
    var a = {};
    return (
      (a[l.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + l] = "webkit" + t),
      (a["Moz" + l] = "moz" + t),
      a
    );
  }
  var lu = {
      animationend: pa("Animation", "AnimationEnd"),
      animationiteration: pa("Animation", "AnimationIteration"),
      animationstart: pa("Animation", "AnimationStart"),
      transitionrun: pa("Transition", "TransitionRun"),
      transitionstart: pa("Transition", "TransitionStart"),
      transitioncancel: pa("Transition", "TransitionCancel"),
      transitionend: pa("Transition", "TransitionEnd"),
    },
    Tf = {},
    ds = {};
  Bt &&
    ((ds = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete lu.animationend.animation,
      delete lu.animationiteration.animation,
      delete lu.animationstart.animation),
    "TransitionEvent" in window || delete lu.transitionend.transition);
  function Da(l) {
    if (Tf[l]) return Tf[l];
    if (!lu[l]) return l;
    var t = lu[l],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in ds) return (Tf[l] = t[a]);
    return l;
  }
  var ys = Da("animationend"),
    os = Da("animationiteration"),
    ms = Da("animationstart"),
    Co = Da("transitionrun"),
    Ro = Da("transitionstart"),
    qo = Da("transitioncancel"),
    vs = Da("transitionend"),
    hs = new Map(),
    Af =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Af.push("scrollEnd");
  function Mt(l, t) {
    hs.set(l, t), Oa(t, [l]);
  }
  var xe =
      typeof reportError == "function"
        ? reportError
        : function (l) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof l == "object" &&
                  l !== null &&
                  typeof l.message == "string"
                    ? String(l.message)
                    : String(l),
                error: l,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", l);
              return;
            }
            console.error(l);
          },
    gt = [],
    tu = 0,
    _f = 0;
  function Ge() {
    for (var l = tu, t = (_f = tu = 0); t < l; ) {
      var a = gt[t];
      gt[t++] = null;
      var u = gt[t];
      gt[t++] = null;
      var e = gt[t];
      gt[t++] = null;
      var n = gt[t];
      if (((gt[t++] = null), u !== null && e !== null)) {
        var f = u.pending;
        f === null ? (e.next = e) : ((e.next = f.next), (f.next = e)),
          (u.pending = e);
      }
      n !== 0 && gs(a, e, n);
    }
  }
  function Qe(l, t, a, u) {
    (gt[tu++] = l),
      (gt[tu++] = t),
      (gt[tu++] = a),
      (gt[tu++] = u),
      (_f |= u),
      (l.lanes |= u),
      (l = l.alternate),
      l !== null && (l.lanes |= u);
  }
  function Of(l, t, a, u) {
    return Qe(l, t, a, u), Xe(l);
  }
  function Ua(l, t) {
    return Qe(l, null, null, t), Xe(l);
  }
  function gs(l, t, a) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a);
    for (var e = !1, n = l.return; n !== null; )
      (n.childLanes |= a),
        (u = n.alternate),
        u !== null && (u.childLanes |= a),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (e = !0)),
        (l = n),
        (n = n.return);
    return l.tag === 3
      ? ((n = l.stateNode),
        e &&
          t !== null &&
          ((e = 31 - nt(a)),
          (l = n.hiddenUpdates),
          (u = l[e]),
          u === null ? (l[e] = [t]) : u.push(t),
          (t.lane = a | 536870912)),
        n)
      : null;
  }
  function Xe(l) {
    if (50 < se) throw ((se = 0), (Rc = null), Error(h(185)));
    for (var t = l.return; t !== null; ) (l = t), (t = l.return);
    return l.tag === 3 ? l.stateNode : null;
  }
  var au = {};
  function Bo(l, t, a, u) {
    (this.tag = l),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = u),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ct(l, t, a, u) {
    return new Bo(l, t, a, u);
  }
  function Mf(l) {
    return (l = l.prototype), !(!l || !l.isReactComponent);
  }
  function Yt(l, t) {
    var a = l.alternate;
    return (
      a === null
        ? ((a = ct(l.tag, t, l.key, l.mode)),
          (a.elementType = l.elementType),
          (a.type = l.type),
          (a.stateNode = l.stateNode),
          (a.alternate = l),
          (l.alternate = a))
        : ((a.pendingProps = t),
          (a.type = l.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = l.flags & 65011712),
      (a.childLanes = l.childLanes),
      (a.lanes = l.lanes),
      (a.child = l.child),
      (a.memoizedProps = l.memoizedProps),
      (a.memoizedState = l.memoizedState),
      (a.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = l.sibling),
      (a.index = l.index),
      (a.ref = l.ref),
      (a.refCleanup = l.refCleanup),
      a
    );
  }
  function rs(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return (
      a === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = a.childLanes),
          (l.lanes = a.lanes),
          (l.child = a.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = a.memoizedProps),
          (l.memoizedState = a.memoizedState),
          (l.updateQueue = a.updateQueue),
          (l.type = a.type),
          (t = a.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function Ze(l, t, a, u, e, n) {
    var f = 0;
    if (((u = l), typeof l == "function")) Mf(l) && (f = 1);
    else if (typeof l == "string")
      f = Xm(l, a, N.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
        ? 27
        : 5;
    else
      l: switch (l) {
        case at:
          return (l = ct(31, a, t, e)), (l.elementType = at), (l.lanes = n), l;
        case hl:
          return Na(a.children, e, n, t);
        case Ll:
          (f = 8), (e |= 24);
          break;
        case Ql:
          return (
            (l = ct(12, a, t, e | 2)), (l.elementType = Ql), (l.lanes = n), l
          );
        case tt:
          return (l = ct(13, a, t, e)), (l.elementType = tt), (l.lanes = n), l;
        case Xl:
          return (l = ct(19, a, t, e)), (l.elementType = Xl), (l.lanes = n), l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case zl:
                f = 10;
                break l;
              case _t:
                f = 9;
                break l;
              case Kl:
                f = 11;
                break l;
              case G:
                f = 14;
                break l;
              case Zl:
                (f = 16), (u = null);
                break l;
            }
          (f = 29),
            (a = Error(h(130, l === null ? "null" : typeof l, ""))),
            (u = null);
      }
    return (
      (t = ct(f, a, t, e)), (t.elementType = l), (t.type = u), (t.lanes = n), t
    );
  }
  function Na(l, t, a, u) {
    return (l = ct(7, l, u, t)), (l.lanes = a), l;
  }
  function pf(l, t, a) {
    return (l = ct(6, l, null, t)), (l.lanes = a), l;
  }
  function Ss(l) {
    var t = ct(18, null, null, 0);
    return (t.stateNode = l), t;
  }
  function Df(l, t, a) {
    return (
      (t = ct(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var bs = new WeakMap();
  function rt(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = bs.get(l);
      return a !== void 0
        ? a
        : ((t = { value: l, source: t, stack: Si(t) }), bs.set(l, t), t);
    }
    return { value: l, source: t, stack: Si(t) };
  }
  var uu = [],
    eu = 0,
    Ve = null,
    Zu = 0,
    St = [],
    bt = 0,
    ta = null,
    Ut = 1,
    Nt = "";
  function xt(l, t) {
    (uu[eu++] = Zu), (uu[eu++] = Ve), (Ve = l), (Zu = t);
  }
  function zs(l, t, a) {
    (St[bt++] = Ut), (St[bt++] = Nt), (St[bt++] = ta), (ta = l);
    var u = Ut;
    l = Nt;
    var e = 32 - nt(u) - 1;
    (u &= ~(1 << e)), (a += 1);
    var n = 32 - nt(t) + e;
    if (30 < n) {
      var f = e - (e % 5);
      (n = (u & ((1 << f) - 1)).toString(32)),
        (u >>= f),
        (e -= f),
        (Ut = (1 << (32 - nt(t) + e)) | (a << e) | u),
        (Nt = n + l);
    } else (Ut = (1 << n) | (a << e) | u), (Nt = l);
  }
  function Uf(l) {
    l.return !== null && (xt(l, 1), zs(l, 1, 0));
  }
  function Nf(l) {
    for (; l === Ve; )
      (Ve = uu[--eu]), (uu[eu] = null), (Zu = uu[--eu]), (uu[eu] = null);
    for (; l === ta; )
      (ta = St[--bt]),
        (St[bt] = null),
        (Nt = St[--bt]),
        (St[bt] = null),
        (Ut = St[--bt]),
        (St[bt] = null);
  }
  function Es(l, t) {
    (St[bt++] = Ut),
      (St[bt++] = Nt),
      (St[bt++] = ta),
      (Ut = t.id),
      (Nt = t.overflow),
      (ta = l);
  }
  var Bl = null,
    rl = null,
    tl = !1,
    aa = null,
    zt = !1,
    Hf = Error(h(519));
  function ua(l) {
    var t = Error(
      h(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (Vu(rt(t, l)), Hf);
  }
  function Ts(l) {
    var t = l.stateNode,
      a = l.type,
      u = l.memoizedProps;
    switch (((t[ql] = l), (t[$l] = u), a)) {
      case "dialog":
        I("cancel", t), I("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        I("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ye.length; a++) I(ye[a], t);
        break;
      case "source":
        I("error", t);
        break;
      case "img":
      case "image":
      case "link":
        I("error", t), I("load", t);
        break;
      case "details":
        I("toggle", t);
        break;
      case "input":
        I("invalid", t),
          qi(
            t,
            u.value,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name,
            !0
          );
        break;
      case "select":
        I("invalid", t);
        break;
      case "textarea":
        I("invalid", t), Yi(t, u.value, u.defaultValue, u.children);
    }
    (a = u.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      u.suppressHydrationWarning === !0 ||
      Gd(t.textContent, a)
        ? (u.popover != null && (I("beforetoggle", t), I("toggle", t)),
          u.onScroll != null && I("scroll", t),
          u.onScrollEnd != null && I("scrollend", t),
          u.onClick != null && (t.onclick = qt),
          (t = !0))
        : (t = !1),
      t || ua(l, !0);
  }
  function As(l) {
    for (Bl = l.return; Bl; )
      switch (Bl.tag) {
        case 5:
        case 31:
        case 13:
          zt = !1;
          return;
        case 27:
        case 3:
          zt = !0;
          return;
        default:
          Bl = Bl.return;
      }
  }
  function nu(l) {
    if (l !== Bl) return !1;
    if (!tl) return As(l), (tl = !0), !1;
    var t = l.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = l.type),
          (a =
            !(a !== "form" && a !== "button") || Wc(l.type, l.memoizedProps))),
        (a = !a)),
      a && rl && ua(l),
      As(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(h(317));
      rl = $d(l);
    } else if (t === 31) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(h(317));
      rl = $d(l);
    } else
      t === 27
        ? ((t = rl), ra(l.type) ? ((l = li), (li = null), (rl = l)) : (rl = t))
        : (rl = Bl ? Tt(l.stateNode.nextSibling) : null);
    return !0;
  }
  function Ha() {
    (rl = Bl = null), (tl = !1);
  }
  function jf() {
    var l = aa;
    return (
      l !== null &&
        (Pl === null ? (Pl = l) : Pl.push.apply(Pl, l), (aa = null)),
      l
    );
  }
  function Vu(l) {
    aa === null ? (aa = [l]) : aa.push(l);
  }
  var Cf = s(null),
    ja = null,
    Gt = null;
  function ea(l, t, a) {
    O(Cf, t._currentValue), (t._currentValue = a);
  }
  function Qt(l) {
    (l._currentValue = Cf.current), z(Cf);
  }
  function Rf(l, t, a) {
    for (; l !== null; ) {
      var u = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), u !== null && (u.childLanes |= t))
          : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t),
        l === a)
      )
        break;
      l = l.return;
    }
  }
  function qf(l, t, a, u) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = e;
          for (var i = 0; i < t.length; i++)
            if (c.context === t[i]) {
              (n.lanes |= a),
                (c = n.alternate),
                c !== null && (c.lanes |= a),
                Rf(n.return, a, l),
                u || (f = null);
              break l;
            }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (((f = e.return), f === null)) throw Error(h(341));
        (f.lanes |= a),
          (n = f.alternate),
          n !== null && (n.lanes |= a),
          Rf(f, a, l),
          (f = null);
      } else f = e.child;
      if (f !== null) f.return = e;
      else
        for (f = e; f !== null; ) {
          if (f === l) {
            f = null;
            break;
          }
          if (((e = f.sibling), e !== null)) {
            (e.return = f.return), (f = e);
            break;
          }
          f = f.return;
        }
      e = f;
    }
  }
  function fu(l, t, a, u) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(h(387));
        if (((f = f.memoizedProps), f !== null)) {
          var c = e.type;
          ft(e.pendingProps.value, f.value) ||
            (l !== null ? l.push(c) : (l = [c]));
        }
      } else if (e === fl.current) {
        if (((f = e.alternate), f === null)) throw Error(h(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState &&
          (l !== null ? l.push(ge) : (l = [ge]));
      }
      e = e.return;
    }
    l !== null && qf(t, l, a, u), (t.flags |= 262144);
  }
  function Le(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!ft(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Ca(l) {
    (ja = l),
      (Gt = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null);
  }
  function Yl(l) {
    return _s(ja, l);
  }
  function Ke(l, t) {
    return ja === null && Ca(l), _s(l, t);
  }
  function _s(l, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), Gt === null)) {
      if (l === null) throw Error(h(308));
      (Gt = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288);
    } else Gt = Gt.next = t;
    return a;
  }
  var Yo =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, u) {
                  l.push(u);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                l.forEach(function (a) {
                  return a();
                });
            };
          },
    xo = _.unstable_scheduleCallback,
    Go = _.unstable_NormalPriority,
    Ml = {
      $$typeof: zl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Bf() {
    return { controller: new Yo(), data: new Map(), refCount: 0 };
  }
  function Lu(l) {
    l.refCount--,
      l.refCount === 0 &&
        xo(Go, function () {
          l.controller.abort();
        });
  }
  var Ku = null,
    Yf = 0,
    cu = 0,
    iu = null;
  function Qo(l, t) {
    if (Ku === null) {
      var a = (Ku = []);
      (Yf = 0),
        (cu = Qc()),
        (iu = {
          status: "pending",
          value: void 0,
          then: function (u) {
            a.push(u);
          },
        });
    }
    return Yf++, t.then(Os, Os), t;
  }
  function Os() {
    if (--Yf === 0 && Ku !== null) {
      iu !== null && (iu.status = "fulfilled");
      var l = Ku;
      (Ku = null), (cu = 0), (iu = null);
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Xo(l, t) {
    var a = [],
      u = {
        status: "pending",
        value: null,
        reason: null,
        then: function (e) {
          a.push(e);
        },
      };
    return (
      l.then(
        function () {
          (u.status = "fulfilled"), (u.value = t);
          for (var e = 0; e < a.length; e++) (0, a[e])(t);
        },
        function (e) {
          for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++)
            (0, a[e])(void 0);
        }
      ),
      u
    );
  }
  var Ms = o.S;
  o.S = function (l, t) {
    (sd = ut()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        Qo(l, t),
      Ms !== null && Ms(l, t);
  };
  var Ra = s(null);
  function xf() {
    var l = Ra.current;
    return l !== null ? l : gl.pooledCache;
  }
  function Je(l, t) {
    t === null ? O(Ra, Ra.current) : O(Ra, t.pool);
  }
  function ps() {
    var l = xf();
    return l === null ? null : { parent: Ml._currentValue, pool: l };
  }
  var su = Error(h(460)),
    Gf = Error(h(474)),
    we = Error(h(542)),
    $e = { then: function () {} };
  function Ds(l) {
    return (l = l.status), l === "fulfilled" || l === "rejected";
  }
  function Us(l, t, a) {
    switch (
      ((a = l[a]),
      a === void 0 ? l.push(t) : a !== t && (t.then(qt, qt), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), Hs(l), l);
      default:
        if (typeof t.status == "string") t.then(qt, qt);
        else {
          if (((l = gl), l !== null && 100 < l.shellSuspendCounter))
            throw Error(h(482));
          (l = t),
            (l.status = "pending"),
            l.then(
              function (u) {
                if (t.status === "pending") {
                  var e = t;
                  (e.status = "fulfilled"), (e.value = u);
                }
              },
              function (u) {
                if (t.status === "pending") {
                  var e = t;
                  (e.status = "rejected"), (e.reason = u);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), Hs(l), l);
        }
        throw ((Ba = t), su);
    }
  }
  function qa(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function"
        ? ((Ba = a), su)
        : a;
    }
  }
  var Ba = null;
  function Ns() {
    if (Ba === null) throw Error(h(459));
    var l = Ba;
    return (Ba = null), l;
  }
  function Hs(l) {
    if (l === su || l === we) throw Error(h(483));
  }
  var du = null,
    Ju = 0;
  function We(l) {
    var t = Ju;
    return (Ju += 1), du === null && (du = []), Us(du, l, t);
  }
  function wu(l, t) {
    (t = t.props.ref), (l.ref = t !== void 0 ? t : null);
  }
  function ke(l, t) {
    throw t.$$typeof === R
      ? Error(h(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          h(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l
          )
        ));
  }
  function js(l) {
    function t(y, d) {
      if (l) {
        var m = y.deletions;
        m === null ? ((y.deletions = [d]), (y.flags |= 16)) : m.push(d);
      }
    }
    function a(y, d) {
      if (!l) return null;
      for (; d !== null; ) t(y, d), (d = d.sibling);
      return null;
    }
    function u(y) {
      for (var d = new Map(); y !== null; )
        y.key !== null ? d.set(y.key, y) : d.set(y.index, y), (y = y.sibling);
      return d;
    }
    function e(y, d) {
      return (y = Yt(y, d)), (y.index = 0), (y.sibling = null), y;
    }
    function n(y, d, m) {
      return (
        (y.index = m),
        l
          ? ((m = y.alternate),
            m !== null
              ? ((m = m.index), m < d ? ((y.flags |= 67108866), d) : m)
              : ((y.flags |= 67108866), d))
          : ((y.flags |= 1048576), d)
      );
    }
    function f(y) {
      return l && y.alternate === null && (y.flags |= 67108866), y;
    }
    function c(y, d, m, b) {
      return d === null || d.tag !== 6
        ? ((d = pf(m, y.mode, b)), (d.return = y), d)
        : ((d = e(d, m)), (d.return = y), d);
    }
    function i(y, d, m, b) {
      var C = m.type;
      return C === hl
        ? S(y, d, m.props.children, b, m.key)
        : d !== null &&
          (d.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === Zl &&
              qa(C) === d.type))
        ? ((d = e(d, m.props)), wu(d, m), (d.return = y), d)
        : ((d = Ze(m.type, m.key, m.props, null, y.mode, b)),
          wu(d, m),
          (d.return = y),
          d);
    }
    function v(y, d, m, b) {
      return d === null ||
        d.tag !== 4 ||
        d.stateNode.containerInfo !== m.containerInfo ||
        d.stateNode.implementation !== m.implementation
        ? ((d = Df(m, y.mode, b)), (d.return = y), d)
        : ((d = e(d, m.children || [])), (d.return = y), d);
    }
    function S(y, d, m, b, C) {
      return d === null || d.tag !== 7
        ? ((d = Na(m, y.mode, b, C)), (d.return = y), d)
        : ((d = e(d, m)), (d.return = y), d);
    }
    function E(y, d, m) {
      if (
        (typeof d == "string" && d !== "") ||
        typeof d == "number" ||
        typeof d == "bigint"
      )
        return (d = pf("" + d, y.mode, m)), (d.return = y), d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case sl:
            return (
              (m = Ze(d.type, d.key, d.props, null, y.mode, m)),
              wu(m, d),
              (m.return = y),
              m
            );
          case al:
            return (d = Df(d, y.mode, m)), (d.return = y), d;
          case Zl:
            return (d = qa(d)), E(y, d, m);
        }
        if (K(d) || Rl(d))
          return (d = Na(d, y.mode, m, null)), (d.return = y), d;
        if (typeof d.then == "function") return E(y, We(d), m);
        if (d.$$typeof === zl) return E(y, Ke(y, d), m);
        ke(y, d);
      }
      return null;
    }
    function g(y, d, m, b) {
      var C = d !== null ? d.key : null;
      if (
        (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
      )
        return C !== null ? null : c(y, d, "" + m, b);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case sl:
            return m.key === C ? i(y, d, m, b) : null;
          case al:
            return m.key === C ? v(y, d, m, b) : null;
          case Zl:
            return (m = qa(m)), g(y, d, m, b);
        }
        if (K(m) || Rl(m)) return C !== null ? null : S(y, d, m, b, null);
        if (typeof m.then == "function") return g(y, d, We(m), b);
        if (m.$$typeof === zl) return g(y, d, Ke(y, m), b);
        ke(y, m);
      }
      return null;
    }
    function r(y, d, m, b, C) {
      if (
        (typeof b == "string" && b !== "") ||
        typeof b == "number" ||
        typeof b == "bigint"
      )
        return (y = y.get(m) || null), c(d, y, "" + b, C);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case sl:
            return (
              (y = y.get(b.key === null ? m : b.key) || null), i(d, y, b, C)
            );
          case al:
            return (
              (y = y.get(b.key === null ? m : b.key) || null), v(d, y, b, C)
            );
          case Zl:
            return (b = qa(b)), r(y, d, m, b, C);
        }
        if (K(b) || Rl(b)) return (y = y.get(m) || null), S(d, y, b, C, null);
        if (typeof b.then == "function") return r(y, d, m, We(b), C);
        if (b.$$typeof === zl) return r(y, d, m, Ke(d, b), C);
        ke(d, b);
      }
      return null;
    }
    function U(y, d, m, b) {
      for (
        var C = null, ul = null, j = d, w = (d = 0), ll = null;
        j !== null && w < m.length;
        w++
      ) {
        j.index > w ? ((ll = j), (j = null)) : (ll = j.sibling);
        var el = g(y, j, m[w], b);
        if (el === null) {
          j === null && (j = ll);
          break;
        }
        l && j && el.alternate === null && t(y, j),
          (d = n(el, d, w)),
          ul === null ? (C = el) : (ul.sibling = el),
          (ul = el),
          (j = ll);
      }
      if (w === m.length) return a(y, j), tl && xt(y, w), C;
      if (j === null) {
        for (; w < m.length; w++)
          (j = E(y, m[w], b)),
            j !== null &&
              ((d = n(j, d, w)),
              ul === null ? (C = j) : (ul.sibling = j),
              (ul = j));
        return tl && xt(y, w), C;
      }
      for (j = u(j); w < m.length; w++)
        (ll = r(j, y, w, m[w], b)),
          ll !== null &&
            (l &&
              ll.alternate !== null &&
              j.delete(ll.key === null ? w : ll.key),
            (d = n(ll, d, w)),
            ul === null ? (C = ll) : (ul.sibling = ll),
            (ul = ll));
      return (
        l &&
          j.forEach(function (Ta) {
            return t(y, Ta);
          }),
        tl && xt(y, w),
        C
      );
    }
    function q(y, d, m, b) {
      if (m == null) throw Error(h(151));
      for (
        var C = null, ul = null, j = d, w = (d = 0), ll = null, el = m.next();
        j !== null && !el.done;
        w++, el = m.next()
      ) {
        j.index > w ? ((ll = j), (j = null)) : (ll = j.sibling);
        var Ta = g(y, j, el.value, b);
        if (Ta === null) {
          j === null && (j = ll);
          break;
        }
        l && j && Ta.alternate === null && t(y, j),
          (d = n(Ta, d, w)),
          ul === null ? (C = Ta) : (ul.sibling = Ta),
          (ul = Ta),
          (j = ll);
      }
      if (el.done) return a(y, j), tl && xt(y, w), C;
      if (j === null) {
        for (; !el.done; w++, el = m.next())
          (el = E(y, el.value, b)),
            el !== null &&
              ((d = n(el, d, w)),
              ul === null ? (C = el) : (ul.sibling = el),
              (ul = el));
        return tl && xt(y, w), C;
      }
      for (j = u(j); !el.done; w++, el = m.next())
        (el = r(j, y, w, el.value, b)),
          el !== null &&
            (l &&
              el.alternate !== null &&
              j.delete(el.key === null ? w : el.key),
            (d = n(el, d, w)),
            ul === null ? (C = el) : (ul.sibling = el),
            (ul = el));
      return (
        l &&
          j.forEach(function (Im) {
            return t(y, Im);
          }),
        tl && xt(y, w),
        C
      );
    }
    function vl(y, d, m, b) {
      if (
        (typeof m == "object" &&
          m !== null &&
          m.type === hl &&
          m.key === null &&
          (m = m.props.children),
        typeof m == "object" && m !== null)
      ) {
        switch (m.$$typeof) {
          case sl:
            l: {
              for (var C = m.key; d !== null; ) {
                if (d.key === C) {
                  if (((C = m.type), C === hl)) {
                    if (d.tag === 7) {
                      a(y, d.sibling),
                        (b = e(d, m.props.children)),
                        (b.return = y),
                        (y = b);
                      break l;
                    }
                  } else if (
                    d.elementType === C ||
                    (typeof C == "object" &&
                      C !== null &&
                      C.$$typeof === Zl &&
                      qa(C) === d.type)
                  ) {
                    a(y, d.sibling),
                      (b = e(d, m.props)),
                      wu(b, m),
                      (b.return = y),
                      (y = b);
                    break l;
                  }
                  a(y, d);
                  break;
                } else t(y, d);
                d = d.sibling;
              }
              m.type === hl
                ? ((b = Na(m.props.children, y.mode, b, m.key)),
                  (b.return = y),
                  (y = b))
                : ((b = Ze(m.type, m.key, m.props, null, y.mode, b)),
                  wu(b, m),
                  (b.return = y),
                  (y = b));
            }
            return f(y);
          case al:
            l: {
              for (C = m.key; d !== null; ) {
                if (d.key === C)
                  if (
                    d.tag === 4 &&
                    d.stateNode.containerInfo === m.containerInfo &&
                    d.stateNode.implementation === m.implementation
                  ) {
                    a(y, d.sibling),
                      (b = e(d, m.children || [])),
                      (b.return = y),
                      (y = b);
                    break l;
                  } else {
                    a(y, d);
                    break;
                  }
                else t(y, d);
                d = d.sibling;
              }
              (b = Df(m, y.mode, b)), (b.return = y), (y = b);
            }
            return f(y);
          case Zl:
            return (m = qa(m)), vl(y, d, m, b);
        }
        if (K(m)) return U(y, d, m, b);
        if (Rl(m)) {
          if (((C = Rl(m)), typeof C != "function")) throw Error(h(150));
          return (m = C.call(m)), q(y, d, m, b);
        }
        if (typeof m.then == "function") return vl(y, d, We(m), b);
        if (m.$$typeof === zl) return vl(y, d, Ke(y, m), b);
        ke(y, m);
      }
      return (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
        ? ((m = "" + m),
          d !== null && d.tag === 6
            ? (a(y, d.sibling), (b = e(d, m)), (b.return = y), (y = b))
            : (a(y, d), (b = pf(m, y.mode, b)), (b.return = y), (y = b)),
          f(y))
        : a(y, d);
    }
    return function (y, d, m, b) {
      try {
        Ju = 0;
        var C = vl(y, d, m, b);
        return (du = null), C;
      } catch (j) {
        if (j === su || j === we) throw j;
        var ul = ct(29, j, null, y.mode);
        return (ul.lanes = b), (ul.return = y), ul;
      } finally {
      }
    };
  }
  var Ya = js(!0),
    Cs = js(!1),
    na = !1;
  function Qf(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Xf(l, t) {
    (l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        });
  }
  function fa(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ca(l, t, a) {
    var u = l.updateQueue;
    if (u === null) return null;
    if (((u = u.shared), (nl & 2) !== 0)) {
      var e = u.pending;
      return (
        e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
        (u.pending = t),
        (t = Xe(l)),
        gs(l, null, a),
        t
      );
    }
    return Qe(l, u, t, a), Xe(l);
  }
  function $u(l, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var u = t.lanes;
      (u &= l.pendingLanes), (a |= u), (t.lanes = a), _i(l, a);
    }
  }
  function Zf(l, t) {
    var a = l.updateQueue,
      u = l.alternate;
    if (u !== null && ((u = u.updateQueue), a === u)) {
      var e = null,
        n = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var f = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          n === null ? (e = n = f) : (n = n.next = f), (a = a.next);
        } while (a !== null);
        n === null ? (e = n = t) : (n = n.next = t);
      } else e = n = t;
      (a = {
        baseState: u.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks,
      }),
        (l.updateQueue = a);
      return;
    }
    (l = a.lastBaseUpdate),
      l === null ? (a.firstBaseUpdate = t) : (l.next = t),
      (a.lastBaseUpdate = t);
  }
  var Vf = !1;
  function Wu() {
    if (Vf) {
      var l = iu;
      if (l !== null) throw l;
    }
  }
  function ku(l, t, a, u) {
    Vf = !1;
    var e = l.updateQueue;
    na = !1;
    var n = e.firstBaseUpdate,
      f = e.lastBaseUpdate,
      c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var i = c,
        v = i.next;
      (i.next = null), f === null ? (n = v) : (f.next = v), (f = i);
      var S = l.alternate;
      S !== null &&
        ((S = S.updateQueue),
        (c = S.lastBaseUpdate),
        c !== f &&
          (c === null ? (S.firstBaseUpdate = v) : (c.next = v),
          (S.lastBaseUpdate = i)));
    }
    if (n !== null) {
      var E = e.baseState;
      (f = 0), (S = v = i = null), (c = n);
      do {
        var g = c.lane & -536870913,
          r = g !== c.lane;
        if (r ? (P & g) === g : (u & g) === g) {
          g !== 0 && g === cu && (Vf = !0),
            S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  tag: c.tag,
                  payload: c.payload,
                  callback: null,
                  next: null,
                });
          l: {
            var U = l,
              q = c;
            g = t;
            var vl = a;
            switch (q.tag) {
              case 1:
                if (((U = q.payload), typeof U == "function")) {
                  E = U.call(vl, E, g);
                  break l;
                }
                E = U;
                break l;
              case 3:
                U.flags = (U.flags & -65537) | 128;
              case 0:
                if (
                  ((U = q.payload),
                  (g = typeof U == "function" ? U.call(vl, E, g) : U),
                  g == null)
                )
                  break l;
                E = H({}, E, g);
                break l;
              case 2:
                na = !0;
            }
          }
          (g = c.callback),
            g !== null &&
              ((l.flags |= 64),
              r && (l.flags |= 8192),
              (r = e.callbacks),
              r === null ? (e.callbacks = [g]) : r.push(g));
        } else
          (r = {
            lane: g,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            S === null ? ((v = S = r), (i = E)) : (S = S.next = r),
            (f |= g);
        if (((c = c.next), c === null)) {
          if (((c = e.shared.pending), c === null)) break;
          (r = c),
            (c = r.next),
            (r.next = null),
            (e.lastBaseUpdate = r),
            (e.shared.pending = null);
        }
      } while (!0);
      S === null && (i = E),
        (e.baseState = i),
        (e.firstBaseUpdate = v),
        (e.lastBaseUpdate = S),
        n === null && (e.shared.lanes = 0),
        (oa |= f),
        (l.lanes = f),
        (l.memoizedState = E);
    }
  }
  function Rs(l, t) {
    if (typeof l != "function") throw Error(h(191, l));
    l.call(t);
  }
  function qs(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++) Rs(a[l], t);
  }
  var yu = s(null),
    Fe = s(0);
  function Bs(l, t) {
    (l = Wt), O(Fe, l), O(yu, t), (Wt = l | t.baseLanes);
  }
  function Lf() {
    O(Fe, Wt), O(yu, yu.current);
  }
  function Kf() {
    (Wt = Fe.current), z(yu), z(Fe);
  }
  var it = s(null),
    Et = null;
  function ia(l) {
    var t = l.alternate;
    O(_l, _l.current & 1),
      O(it, l),
      Et === null &&
        (t === null || yu.current !== null || t.memoizedState !== null) &&
        (Et = l);
  }
  function Jf(l) {
    O(_l, _l.current), O(it, l), Et === null && (Et = l);
  }
  function Ys(l) {
    l.tag === 22
      ? (O(_l, _l.current), O(it, l), Et === null && (Et = l))
      : sa();
  }
  function sa() {
    O(_l, _l.current), O(it, it.current);
  }
  function st(l) {
    z(it), Et === l && (Et = null), z(_l);
  }
  var _l = s(0);
  function Ie(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || Ic(a) || Pc(a)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Xt = 0,
    L = null,
    ol = null,
    pl = null,
    Pe = !1,
    ou = !1,
    xa = !1,
    ln = 0,
    Fu = 0,
    mu = null,
    Zo = 0;
  function El() {
    throw Error(h(321));
  }
  function wf(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!ft(l[a], t[a])) return !1;
    return !0;
  }
  function $f(l, t, a, u, e, n) {
    return (
      (Xt = n),
      (L = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (o.H = l === null || l.memoizedState === null ? z0 : sc),
      (xa = !1),
      (n = a(u, e)),
      (xa = !1),
      ou && (n = Gs(t, a, u, e)),
      xs(l),
      n
    );
  }
  function xs(l) {
    o.H = le;
    var t = ol !== null && ol.next !== null;
    if (((Xt = 0), (pl = ol = L = null), (Pe = !1), (Fu = 0), (mu = null), t))
      throw Error(h(300));
    l === null ||
      Dl ||
      ((l = l.dependencies), l !== null && Le(l) && (Dl = !0));
  }
  function Gs(l, t, a, u) {
    L = l;
    var e = 0;
    do {
      if ((ou && (mu = null), (Fu = 0), (ou = !1), 25 <= e))
        throw Error(h(301));
      if (((e += 1), (pl = ol = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (o.H = E0), (n = t(a, u));
    } while (ou);
    return n;
  }
  function Vo() {
    var l = o.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? Iu(t) : t),
      (l = l.useState()[0]),
      (ol !== null ? ol.memoizedState : null) !== l && (L.flags |= 1024),
      t
    );
  }
  function Wf() {
    var l = ln !== 0;
    return (ln = 0), l;
  }
  function kf(l, t, a) {
    (t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~a);
  }
  function Ff(l) {
    if (Pe) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), (l = l.next);
      }
      Pe = !1;
    }
    (Xt = 0), (pl = ol = L = null), (ou = !1), (Fu = ln = 0), (mu = null);
  }
  function wl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return pl === null ? (L.memoizedState = pl = l) : (pl = pl.next = l), pl;
  }
  function Ol() {
    if (ol === null) {
      var l = L.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ol.next;
    var t = pl === null ? L.memoizedState : pl.next;
    if (t !== null) (pl = t), (ol = l);
    else {
      if (l === null)
        throw L.alternate === null ? Error(h(467)) : Error(h(310));
      (ol = l),
        (l = {
          memoizedState: ol.memoizedState,
          baseState: ol.baseState,
          baseQueue: ol.baseQueue,
          queue: ol.queue,
          next: null,
        }),
        pl === null ? (L.memoizedState = pl = l) : (pl = pl.next = l);
    }
    return pl;
  }
  function tn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Iu(l) {
    var t = Fu;
    return (
      (Fu += 1),
      mu === null && (mu = []),
      (l = Us(mu, l, t)),
      (t = L),
      (pl === null ? t.memoizedState : pl.next) === null &&
        ((t = t.alternate),
        (o.H = t === null || t.memoizedState === null ? z0 : sc)),
      l
    );
  }
  function an(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Iu(l);
      if (l.$$typeof === zl) return Yl(l);
    }
    throw Error(h(438, String(l)));
  }
  function If(l) {
    var t = null,
      a = L.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var u = L.alternate;
      u !== null &&
        ((u = u.updateQueue),
        u !== null &&
          ((u = u.memoCache),
          u != null &&
            (t = {
              data: u.data.map(function (e) {
                return e.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = tn()), (L.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(l), u = 0; u < l; u++) a[u] = Ot;
    return t.index++, a;
  }
  function Zt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function un(l) {
    var t = Ol();
    return Pf(t, ol, l);
  }
  function Pf(l, t, a) {
    var u = l.queue;
    if (u === null) throw Error(h(311));
    u.lastRenderedReducer = a;
    var e = l.baseQueue,
      n = u.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        (e.next = n.next), (n.next = f);
      }
      (t.baseQueue = e = n), (u.pending = null);
    }
    if (((n = l.baseState), e === null)) l.memoizedState = n;
    else {
      t = e.next;
      var c = (f = null),
        i = null,
        v = t,
        S = !1;
      do {
        var E = v.lane & -536870913;
        if (E !== v.lane ? (P & E) === E : (Xt & E) === E) {
          var g = v.revertLane;
          if (g === 0)
            i !== null &&
              (i = i.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: v.action,
                  hasEagerState: v.hasEagerState,
                  eagerState: v.eagerState,
                  next: null,
                }),
              E === cu && (S = !0);
          else if ((Xt & g) === g) {
            (v = v.next), g === cu && (S = !0);
            continue;
          } else
            (E = {
              lane: 0,
              revertLane: v.revertLane,
              gesture: null,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null,
            }),
              i === null ? ((c = i = E), (f = n)) : (i = i.next = E),
              (L.lanes |= g),
              (oa |= g);
          (E = v.action),
            xa && a(n, E),
            (n = v.hasEagerState ? v.eagerState : a(n, E));
        } else
          (g = {
            lane: E,
            revertLane: v.revertLane,
            gesture: v.gesture,
            action: v.action,
            hasEagerState: v.hasEagerState,
            eagerState: v.eagerState,
            next: null,
          }),
            i === null ? ((c = i = g), (f = n)) : (i = i.next = g),
            (L.lanes |= E),
            (oa |= E);
        v = v.next;
      } while (v !== null && v !== t);
      if (
        (i === null ? (f = n) : (i.next = c),
        !ft(n, l.memoizedState) && ((Dl = !0), S && ((a = iu), a !== null)))
      )
        throw a;
      (l.memoizedState = n),
        (l.baseState = f),
        (l.baseQueue = i),
        (u.lastRenderedState = n);
    }
    return e === null && (u.lanes = 0), [l.memoizedState, u.dispatch];
  }
  function lc(l) {
    var t = Ol(),
      a = t.queue;
    if (a === null) throw Error(h(311));
    a.lastRenderedReducer = l;
    var u = a.dispatch,
      e = a.pending,
      n = t.memoizedState;
    if (e !== null) {
      a.pending = null;
      var f = (e = e.next);
      do (n = l(n, f.action)), (f = f.next);
      while (f !== e);
      ft(n, t.memoizedState) || (Dl = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (a.lastRenderedState = n);
    }
    return [n, u];
  }
  function Qs(l, t, a) {
    var u = L,
      e = Ol(),
      n = tl;
    if (n) {
      if (a === void 0) throw Error(h(407));
      a = a();
    } else a = t();
    var f = !ft((ol || e).memoizedState, a);
    if (
      (f && ((e.memoizedState = a), (Dl = !0)),
      (e = e.queue),
      uc(Vs.bind(null, u, e, l), [l]),
      e.getSnapshot !== t || f || (pl !== null && pl.memoizedState.tag & 1))
    ) {
      if (
        ((u.flags |= 2048),
        vu(9, { destroy: void 0 }, Zs.bind(null, u, e, a, t), null),
        gl === null)
      )
        throw Error(h(349));
      n || (Xt & 127) !== 0 || Xs(u, t, a);
    }
    return a;
  }
  function Xs(l, t, a) {
    (l.flags |= 16384),
      (l = { getSnapshot: t, value: a }),
      (t = L.updateQueue),
      t === null
        ? ((t = tn()), (L.updateQueue = t), (t.stores = [l]))
        : ((a = t.stores), a === null ? (t.stores = [l]) : a.push(l));
  }
  function Zs(l, t, a, u) {
    (t.value = a), (t.getSnapshot = u), Ls(t) && Ks(l);
  }
  function Vs(l, t, a) {
    return a(function () {
      Ls(t) && Ks(l);
    });
  }
  function Ls(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !ft(l, a);
    } catch {
      return !0;
    }
  }
  function Ks(l) {
    var t = Ua(l, 2);
    t !== null && lt(t, l, 2);
  }
  function tc(l) {
    var t = wl();
    if (typeof l == "function") {
      var a = l;
      if (((l = a()), xa)) {
        It(!0);
        try {
          a();
        } finally {
          It(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function Js(l, t, a, u) {
    return (l.baseState = a), Pf(l, ol, typeof u == "function" ? u : Zt);
  }
  function Lo(l, t, a, u, e) {
    if (fn(l)) throw Error(h(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          n.listeners.push(f);
        },
      };
      o.T !== null ? a(!0) : (n.isTransition = !1),
        u(n),
        (a = t.pending),
        a === null
          ? ((n.next = t.pending = n), ws(t, n))
          : ((n.next = a.next), (t.pending = a.next = n));
    }
  }
  function ws(l, t) {
    var a = t.action,
      u = t.payload,
      e = l.state;
    if (t.isTransition) {
      var n = o.T,
        f = {};
      o.T = f;
      try {
        var c = a(e, u),
          i = o.S;
        i !== null && i(f, c), $s(l, t, c);
      } catch (v) {
        ac(l, t, v);
      } finally {
        n !== null && f.types !== null && (n.types = f.types), (o.T = n);
      }
    } else
      try {
        (n = a(e, u)), $s(l, t, n);
      } catch (v) {
        ac(l, t, v);
      }
  }
  function $s(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (u) {
            Ws(l, t, u);
          },
          function (u) {
            return ac(l, t, u);
          }
        )
      : Ws(l, t, a);
  }
  function Ws(l, t, a) {
    (t.status = "fulfilled"),
      (t.value = a),
      ks(t),
      (l.state = a),
      (t = l.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (l.pending = null) : ((a = a.next), (t.next = a), ws(l, a)));
  }
  function ac(l, t, a) {
    var u = l.pending;
    if (((l.pending = null), u !== null)) {
      u = u.next;
      do (t.status = "rejected"), (t.reason = a), ks(t), (t = t.next);
      while (t !== u);
    }
    l.action = null;
  }
  function ks(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Fs(l, t) {
    return t;
  }
  function Is(l, t) {
    if (tl) {
      var a = gl.formState;
      if (a !== null) {
        l: {
          var u = L;
          if (tl) {
            if (rl) {
              t: {
                for (var e = rl, n = zt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (((e = Tt(e.nextSibling)), e === null)) {
                    e = null;
                    break t;
                  }
                }
                (n = e.data), (e = n === "F!" || n === "F" ? e : null);
              }
              if (e) {
                (rl = Tt(e.nextSibling)), (u = e.data === "F!");
                break l;
              }
            }
            ua(u);
          }
          u = !1;
        }
        u && (t = a[0]);
      }
    }
    return (
      (a = wl()),
      (a.memoizedState = a.baseState = t),
      (u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Fs,
        lastRenderedState: t,
      }),
      (a.queue = u),
      (a = r0.bind(null, L, u)),
      (u.dispatch = a),
      (u = tc(!1)),
      (n = ic.bind(null, L, !1, u.queue)),
      (u = wl()),
      (e = { state: t, dispatch: null, action: l, pending: null }),
      (u.queue = e),
      (a = Lo.bind(null, L, e, n, a)),
      (e.dispatch = a),
      (u.memoizedState = l),
      [t, a, !1]
    );
  }
  function Ps(l) {
    var t = Ol();
    return l0(t, ol, l);
  }
  function l0(l, t, a) {
    if (
      ((t = Pf(l, t, Fs)[0]),
      (l = un(Zt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var u = Iu(t);
      } catch (f) {
        throw f === su ? we : f;
      }
    else u = t;
    t = Ol();
    var e = t.queue,
      n = e.dispatch;
    return (
      a !== t.memoizedState &&
        ((L.flags |= 2048),
        vu(9, { destroy: void 0 }, Ko.bind(null, e, a), null)),
      [u, n, l]
    );
  }
  function Ko(l, t) {
    l.action = t;
  }
  function t0(l) {
    var t = Ol(),
      a = ol;
    if (a !== null) return l0(t, a, l);
    Ol(), (t = t.memoizedState), (a = Ol());
    var u = a.queue.dispatch;
    return (a.memoizedState = l), [t, u, !1];
  }
  function vu(l, t, a, u) {
    return (
      (l = { tag: l, create: a, deps: u, inst: t, next: null }),
      (t = L.updateQueue),
      t === null && ((t = tn()), (L.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = l.next = l)
        : ((u = a.next), (a.next = l), (l.next = u), (t.lastEffect = l)),
      l
    );
  }
  function a0() {
    return Ol().memoizedState;
  }
  function en(l, t, a, u) {
    var e = wl();
    (L.flags |= l),
      (e.memoizedState = vu(
        1 | t,
        { destroy: void 0 },
        a,
        u === void 0 ? null : u
      ));
  }
  function nn(l, t, a, u) {
    var e = Ol();
    u = u === void 0 ? null : u;
    var n = e.memoizedState.inst;
    ol !== null && u !== null && wf(u, ol.memoizedState.deps)
      ? (e.memoizedState = vu(t, n, a, u))
      : ((L.flags |= l), (e.memoizedState = vu(1 | t, n, a, u)));
  }
  function u0(l, t) {
    en(8390656, 8, l, t);
  }
  function uc(l, t) {
    nn(2048, 8, l, t);
  }
  function Jo(l) {
    L.flags |= 4;
    var t = L.updateQueue;
    if (t === null) (t = tn()), (L.updateQueue = t), (t.events = [l]);
    else {
      var a = t.events;
      a === null ? (t.events = [l]) : a.push(l);
    }
  }
  function e0(l) {
    var t = Ol().memoizedState;
    return (
      Jo({ ref: t, nextImpl: l }),
      function () {
        if ((nl & 2) !== 0) throw Error(h(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function n0(l, t) {
    return nn(4, 2, l, t);
  }
  function f0(l, t) {
    return nn(4, 4, l, t);
  }
  function c0(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function i0(l, t, a) {
    (a = a != null ? a.concat([l]) : null), nn(4, 4, c0.bind(null, t, l), a);
  }
  function ec() {}
  function s0(l, t) {
    var a = Ol();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && wf(t, u[1]) ? u[0] : ((a.memoizedState = [l, t]), l);
  }
  function d0(l, t) {
    var a = Ol();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && wf(t, u[1])) return u[0];
    if (((u = l()), xa)) {
      It(!0);
      try {
        l();
      } finally {
        It(!1);
      }
    }
    return (a.memoizedState = [u, t]), u;
  }
  function nc(l, t, a) {
    return a === void 0 || ((Xt & 1073741824) !== 0 && (P & 261930) === 0)
      ? (l.memoizedState = t)
      : ((l.memoizedState = a), (l = yd()), (L.lanes |= l), (oa |= l), a);
  }
  function y0(l, t, a, u) {
    return ft(a, t)
      ? a
      : yu.current !== null
      ? ((l = nc(l, a, u)), ft(l, t) || (Dl = !0), l)
      : (Xt & 42) === 0 || ((Xt & 1073741824) !== 0 && (P & 261930) === 0)
      ? ((Dl = !0), (l.memoizedState = a))
      : ((l = yd()), (L.lanes |= l), (oa |= l), t);
  }
  function o0(l, t, a, u, e) {
    var n = A.p;
    A.p = n !== 0 && 8 > n ? n : 8;
    var f = o.T,
      c = {};
    (o.T = c), ic(l, !1, t, a);
    try {
      var i = e(),
        v = o.S;
      if (
        (v !== null && v(c, i),
        i !== null && typeof i == "object" && typeof i.then == "function")
      ) {
        var S = Xo(i, u);
        Pu(l, t, S, ot(l));
      } else Pu(l, t, u, ot(l));
    } catch (E) {
      Pu(l, t, { then: function () {}, status: "rejected", reason: E }, ot());
    } finally {
      (A.p = n),
        f !== null && c.types !== null && (f.types = c.types),
        (o.T = f);
    }
  }
  function wo() {}
  function fc(l, t, a, u) {
    if (l.tag !== 5) throw Error(h(476));
    var e = m0(l).queue;
    o0(
      l,
      e,
      t,
      D,
      a === null
        ? wo
        : function () {
            return v0(l), a(u);
          }
    );
  }
  function m0(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: D,
      baseState: D,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zt,
        lastRenderedState: D,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Zt,
          lastRenderedState: a,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function v0(l) {
    var t = m0(l);
    t.next === null && (t = l.alternate.memoizedState),
      Pu(l, t.next.queue, {}, ot());
  }
  function cc() {
    return Yl(ge);
  }
  function h0() {
    return Ol().memoizedState;
  }
  function g0() {
    return Ol().memoizedState;
  }
  function $o(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = ot();
          l = fa(a);
          var u = ca(t, l, a);
          u !== null && (lt(u, t, a), $u(u, t, a)),
            (t = { cache: Bf() }),
            (l.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function Wo(l, t, a) {
    var u = ot();
    (a = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      fn(l)
        ? S0(t, a)
        : ((a = Of(l, t, a, u)), a !== null && (lt(a, l, u), b0(a, t, u)));
  }
  function r0(l, t, a) {
    var u = ot();
    Pu(l, t, a, u);
  }
  function Pu(l, t, a, u) {
    var e = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (fn(l)) S0(t, e);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var f = t.lastRenderedState,
            c = n(f, a);
          if (((e.hasEagerState = !0), (e.eagerState = c), ft(c, f)))
            return Qe(l, t, e, 0), gl === null && Ge(), !1;
        } catch {
        } finally {
        }
      if (((a = Of(l, t, e, u)), a !== null))
        return lt(a, l, u), b0(a, t, u), !0;
    }
    return !1;
  }
  function ic(l, t, a, u) {
    if (
      ((u = {
        lane: 2,
        revertLane: Qc(),
        gesture: null,
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      fn(l))
    ) {
      if (t) throw Error(h(479));
    } else (t = Of(l, a, u, 2)), t !== null && lt(t, l, 2);
  }
  function fn(l) {
    var t = l.alternate;
    return l === L || (t !== null && t === L);
  }
  function S0(l, t) {
    ou = Pe = !0;
    var a = l.pending;
    a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (l.pending = t);
  }
  function b0(l, t, a) {
    if ((a & 4194048) !== 0) {
      var u = t.lanes;
      (u &= l.pendingLanes), (a |= u), (t.lanes = a), _i(l, a);
    }
  }
  var le = {
    readContext: Yl,
    use: an,
    useCallback: El,
    useContext: El,
    useEffect: El,
    useImperativeHandle: El,
    useLayoutEffect: El,
    useInsertionEffect: El,
    useMemo: El,
    useReducer: El,
    useRef: El,
    useState: El,
    useDebugValue: El,
    useDeferredValue: El,
    useTransition: El,
    useSyncExternalStore: El,
    useId: El,
    useHostTransitionStatus: El,
    useFormState: El,
    useActionState: El,
    useOptimistic: El,
    useMemoCache: El,
    useCacheRefresh: El,
  };
  le.useEffectEvent = El;
  var z0 = {
      readContext: Yl,
      use: an,
      useCallback: function (l, t) {
        return (wl().memoizedState = [l, t === void 0 ? null : t]), l;
      },
      useContext: Yl,
      useEffect: u0,
      useImperativeHandle: function (l, t, a) {
        (a = a != null ? a.concat([l]) : null),
          en(4194308, 4, c0.bind(null, t, l), a);
      },
      useLayoutEffect: function (l, t) {
        return en(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        en(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var a = wl();
        t = t === void 0 ? null : t;
        var u = l();
        if (xa) {
          It(!0);
          try {
            l();
          } finally {
            It(!1);
          }
        }
        return (a.memoizedState = [u, t]), u;
      },
      useReducer: function (l, t, a) {
        var u = wl();
        if (a !== void 0) {
          var e = a(t);
          if (xa) {
            It(!0);
            try {
              a(t);
            } finally {
              It(!1);
            }
          }
        } else e = t;
        return (
          (u.memoizedState = u.baseState = e),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: e,
          }),
          (u.queue = l),
          (l = l.dispatch = Wo.bind(null, L, l)),
          [u.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = wl();
        return (l = { current: l }), (t.memoizedState = l);
      },
      useState: function (l) {
        l = tc(l);
        var t = l.queue,
          a = r0.bind(null, L, t);
        return (t.dispatch = a), [l.memoizedState, a];
      },
      useDebugValue: ec,
      useDeferredValue: function (l, t) {
        var a = wl();
        return nc(a, l, t);
      },
      useTransition: function () {
        var l = tc(!1);
        return (
          (l = o0.bind(null, L, l.queue, !0, !1)),
          (wl().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, a) {
        var u = L,
          e = wl();
        if (tl) {
          if (a === void 0) throw Error(h(407));
          a = a();
        } else {
          if (((a = t()), gl === null)) throw Error(h(349));
          (P & 127) !== 0 || Xs(u, t, a);
        }
        e.memoizedState = a;
        var n = { value: a, getSnapshot: t };
        return (
          (e.queue = n),
          u0(Vs.bind(null, u, n, l), [l]),
          (u.flags |= 2048),
          vu(9, { destroy: void 0 }, Zs.bind(null, u, n, a, t), null),
          a
        );
      },
      useId: function () {
        var l = wl(),
          t = gl.identifierPrefix;
        if (tl) {
          var a = Nt,
            u = Ut;
          (a = (u & ~(1 << (32 - nt(u) - 1))).toString(32) + a),
            (t = "_" + t + "R_" + a),
            (a = ln++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "_");
        } else (a = Zo++), (t = "_" + t + "r_" + a.toString(32) + "_");
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: cc,
      useFormState: Is,
      useActionState: Is,
      useOptimistic: function (l) {
        var t = wl();
        t.memoizedState = t.baseState = l;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a), (t = ic.bind(null, L, !0, a)), (a.dispatch = t), [l, t]
        );
      },
      useMemoCache: If,
      useCacheRefresh: function () {
        return (wl().memoizedState = $o.bind(null, L));
      },
      useEffectEvent: function (l) {
        var t = wl(),
          a = { impl: l };
        return (
          (t.memoizedState = a),
          function () {
            if ((nl & 2) !== 0) throw Error(h(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      },
    },
    sc = {
      readContext: Yl,
      use: an,
      useCallback: s0,
      useContext: Yl,
      useEffect: uc,
      useImperativeHandle: i0,
      useInsertionEffect: n0,
      useLayoutEffect: f0,
      useMemo: d0,
      useReducer: un,
      useRef: a0,
      useState: function () {
        return un(Zt);
      },
      useDebugValue: ec,
      useDeferredValue: function (l, t) {
        var a = Ol();
        return y0(a, ol.memoizedState, l, t);
      },
      useTransition: function () {
        var l = un(Zt)[0],
          t = Ol().memoizedState;
        return [typeof l == "boolean" ? l : Iu(l), t];
      },
      useSyncExternalStore: Qs,
      useId: h0,
      useHostTransitionStatus: cc,
      useFormState: Ps,
      useActionState: Ps,
      useOptimistic: function (l, t) {
        var a = Ol();
        return Js(a, ol, l, t);
      },
      useMemoCache: If,
      useCacheRefresh: g0,
    };
  sc.useEffectEvent = e0;
  var E0 = {
    readContext: Yl,
    use: an,
    useCallback: s0,
    useContext: Yl,
    useEffect: uc,
    useImperativeHandle: i0,
    useInsertionEffect: n0,
    useLayoutEffect: f0,
    useMemo: d0,
    useReducer: lc,
    useRef: a0,
    useState: function () {
      return lc(Zt);
    },
    useDebugValue: ec,
    useDeferredValue: function (l, t) {
      var a = Ol();
      return ol === null ? nc(a, l, t) : y0(a, ol.memoizedState, l, t);
    },
    useTransition: function () {
      var l = lc(Zt)[0],
        t = Ol().memoizedState;
      return [typeof l == "boolean" ? l : Iu(l), t];
    },
    useSyncExternalStore: Qs,
    useId: h0,
    useHostTransitionStatus: cc,
    useFormState: t0,
    useActionState: t0,
    useOptimistic: function (l, t) {
      var a = Ol();
      return ol !== null
        ? Js(a, ol, l, t)
        : ((a.baseState = l), [l, a.queue.dispatch]);
    },
    useMemoCache: If,
    useCacheRefresh: g0,
  };
  E0.useEffectEvent = e0;
  function dc(l, t, a, u) {
    (t = l.memoizedState),
      (a = a(u, t)),
      (a = a == null ? t : H({}, t, a)),
      (l.memoizedState = a),
      l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var yc = {
    enqueueSetState: function (l, t, a) {
      l = l._reactInternals;
      var u = ot(),
        e = fa(u);
      (e.payload = t),
        a != null && (e.callback = a),
        (t = ca(l, e, u)),
        t !== null && (lt(t, l, u), $u(t, l, u));
    },
    enqueueReplaceState: function (l, t, a) {
      l = l._reactInternals;
      var u = ot(),
        e = fa(u);
      (e.tag = 1),
        (e.payload = t),
        a != null && (e.callback = a),
        (t = ca(l, e, u)),
        t !== null && (lt(t, l, u), $u(t, l, u));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var a = ot(),
        u = fa(a);
      (u.tag = 2),
        t != null && (u.callback = t),
        (t = ca(l, u, a)),
        t !== null && (lt(t, l, a), $u(t, l, a));
    },
  };
  function T0(l, t, a, u, e, n, f) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(u, n, f)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Qu(a, u) || !Qu(e, n)
        : !0
    );
  }
  function A0(l, t, a, u) {
    (l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, u),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, u),
      t.state !== l && yc.enqueueReplaceState(t, t.state, null);
  }
  function Ga(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var u in t) u !== "ref" && (a[u] = t[u]);
    }
    if ((l = l.defaultProps)) {
      a === t && (a = H({}, a));
      for (var e in l) a[e] === void 0 && (a[e] = l[e]);
    }
    return a;
  }
  function _0(l) {
    xe(l);
  }
  function O0(l) {
    console.error(l);
  }
  function M0(l) {
    xe(l);
  }
  function cn(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function p0(l, t, a) {
    try {
      var u = l.onCaughtError;
      u(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function oc(l, t, a) {
    return (
      (a = fa(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        cn(l, t);
      }),
      a
    );
  }
  function D0(l) {
    return (l = fa(l)), (l.tag = 3), l;
  }
  function U0(l, t, a, u) {
    var e = a.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = u.value;
      (l.payload = function () {
        return e(n);
      }),
        (l.callback = function () {
          p0(t, a, u);
        });
    }
    var f = a.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (l.callback = function () {
        p0(t, a, u),
          typeof e != "function" &&
            (ma === null ? (ma = new Set([this])) : ma.add(this));
        var c = u.stack;
        this.componentDidCatch(u.value, {
          componentStack: c !== null ? c : "",
        });
      });
  }
  function ko(l, t, a, u, e) {
    if (
      ((a.flags |= 32768),
      u !== null && typeof u == "object" && typeof u.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && fu(t, a, e, !0),
        (a = it.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              Et === null ? zn() : a.alternate === null && Tl === 0 && (Tl = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = e),
              u === $e
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([u])) : t.add(u),
                  Yc(l, u, e)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              u === $e
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([u]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([u])) : a.add(u)),
                  Yc(l, u, e)),
              !1
            );
        }
        throw Error(h(435, a.tag));
      }
      return Yc(l, u, e), zn(), !1;
    }
    if (tl)
      return (
        (t = it.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = e),
            u !== Hf && ((l = Error(h(422), { cause: u })), Vu(rt(l, a))))
          : (u !== Hf && ((t = Error(h(423), { cause: u })), Vu(rt(t, a))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (e &= -e),
            (l.lanes |= e),
            (u = rt(u, a)),
            (e = oc(l.stateNode, u, e)),
            Zf(l, e),
            Tl !== 4 && (Tl = 2)),
        !1
      );
    var n = Error(h(520), { cause: u });
    if (
      ((n = rt(n, a)),
      ie === null ? (ie = [n]) : ie.push(n),
      Tl !== 4 && (Tl = 2),
      t === null)
    )
      return !0;
    (u = rt(u, a)), (a = t);
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (l = e & -e),
            (a.lanes |= l),
            (l = oc(a.stateNode, u, l)),
            Zf(a, l),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (n = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (ma === null || !ma.has(n)))))
          )
            return (
              (a.flags |= 65536),
              (e &= -e),
              (a.lanes |= e),
              (e = D0(e)),
              U0(e, l, a, u),
              Zf(a, e),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var mc = Error(h(461)),
    Dl = !1;
  function xl(l, t, a, u) {
    t.child = l === null ? Cs(t, null, a, u) : Ya(t, l.child, a, u);
  }
  function N0(l, t, a, u, e) {
    a = a.render;
    var n = t.ref;
    if ("ref" in u) {
      var f = {};
      for (var c in u) c !== "ref" && (f[c] = u[c]);
    } else f = u;
    return (
      Ca(t),
      (u = $f(l, t, a, f, n, e)),
      (c = Wf()),
      l !== null && !Dl
        ? (kf(l, t, e), Vt(l, t, e))
        : (tl && c && Uf(t), (t.flags |= 1), xl(l, t, u, e), t.child)
    );
  }
  function H0(l, t, a, u, e) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" &&
        !Mf(n) &&
        n.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = n), j0(l, t, n, u, e))
        : ((l = Ze(a.type, null, u, t, t.mode, e)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !Ec(l, e))) {
      var f = n.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : Qu), a(f, u) && l.ref === t.ref)
      )
        return Vt(l, t, e);
    }
    return (
      (t.flags |= 1),
      (l = Yt(n, u)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function j0(l, t, a, u, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Qu(n, u) && l.ref === t.ref)
        if (((Dl = !1), (t.pendingProps = u = n), Ec(l, e)))
          (l.flags & 131072) !== 0 && (Dl = !0);
        else return (t.lanes = l.lanes), Vt(l, t, e);
    }
    return vc(l, t, a, u, e);
  }
  function C0(l, t, a, u) {
    var e = u.children,
      n = l !== null ? l.memoizedState : null;
    if (
      (l === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      u.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((n = n !== null ? n.baseLanes | a : a), l !== null)) {
          for (u = t.child = l.child, e = 0; u !== null; )
            (e = e | u.lanes | u.childLanes), (u = u.sibling);
          u = e & ~n;
        } else (u = 0), (t.child = null);
        return R0(l, t, n, a, u);
      }
      if ((a & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && Je(t, n !== null ? n.cachePool : null),
          n !== null ? Bs(t, n) : Lf(),
          Ys(t);
      else
        return (
          (u = t.lanes = 536870912),
          R0(l, t, n !== null ? n.baseLanes | a : a, a, u)
        );
    } else
      n !== null
        ? (Je(t, n.cachePool), Bs(t, n), sa(), (t.memoizedState = null))
        : (l !== null && Je(t, null), Lf(), sa());
    return xl(l, t, e, a), t.child;
  }
  function te(l, t) {
    return (
      (l !== null && l.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function R0(l, t, a, u, e) {
    var n = xf();
    return (
      (n = n === null ? null : { parent: Ml._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: a, cachePool: n }),
      l !== null && Je(t, null),
      Lf(),
      Ys(t),
      l !== null && fu(l, t, u, !0),
      (t.childLanes = e),
      null
    );
  }
  function sn(l, t) {
    return (
      (t = yn({ mode: t.mode, children: t.children }, l.mode)),
      (t.ref = l.ref),
      (l.child = t),
      (t.return = l),
      t
    );
  }
  function q0(l, t, a) {
    return (
      Ya(t, l.child, null, a),
      (l = sn(t, t.pendingProps)),
      (l.flags |= 2),
      st(t),
      (t.memoizedState = null),
      l
    );
  }
  function Fo(l, t, a) {
    var u = t.pendingProps,
      e = (t.flags & 128) !== 0;
    if (((t.flags &= -129), l === null)) {
      if (tl) {
        if (u.mode === "hidden")
          return (l = sn(t, u)), (t.lanes = 536870912), te(null, l);
        if (
          (Jf(t),
          (l = rl)
            ? ((l = wd(l, zt)),
              (l = l !== null && l.data === "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: ta !== null ? { id: Ut, overflow: Nt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = Ss(l)),
                (a.return = t),
                (t.child = a),
                (Bl = t),
                (rl = null)))
            : (l = null),
          l === null)
        )
          throw ua(t);
        return (t.lanes = 536870912), null;
      }
      return sn(t, u);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var f = n.dehydrated;
      if ((Jf(t), e))
        if (t.flags & 256) (t.flags &= -257), (t = q0(l, t, a));
        else if (t.memoizedState !== null)
          (t.child = l.child), (t.flags |= 128), (t = null);
        else throw Error(h(558));
      else if (
        (Dl || fu(l, t, a, !1), (e = (a & l.childLanes) !== 0), Dl || e)
      ) {
        if (
          ((u = gl),
          u !== null && ((f = Oi(u, a)), f !== 0 && f !== n.retryLane))
        )
          throw ((n.retryLane = f), Ua(l, f), lt(u, l, f), mc);
        zn(), (t = q0(l, t, a));
      } else
        (l = n.treeContext),
          (rl = Tt(f.nextSibling)),
          (Bl = t),
          (tl = !0),
          (aa = null),
          (zt = !1),
          l !== null && Es(t, l),
          (t = sn(t, u)),
          (t.flags |= 4096);
      return t;
    }
    return (
      (l = Yt(l.child, { mode: u.mode, children: u.children })),
      (l.ref = t.ref),
      (t.child = l),
      (l.return = t),
      l
    );
  }
  function dn(l, t) {
    var a = t.ref;
    if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(h(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function vc(l, t, a, u, e) {
    return (
      Ca(t),
      (a = $f(l, t, a, u, void 0, e)),
      (u = Wf()),
      l !== null && !Dl
        ? (kf(l, t, e), Vt(l, t, e))
        : (tl && u && Uf(t), (t.flags |= 1), xl(l, t, a, e), t.child)
    );
  }
  function B0(l, t, a, u, e, n) {
    return (
      Ca(t),
      (t.updateQueue = null),
      (a = Gs(t, u, a, e)),
      xs(l),
      (u = Wf()),
      l !== null && !Dl
        ? (kf(l, t, n), Vt(l, t, n))
        : (tl && u && Uf(t), (t.flags |= 1), xl(l, t, a, n), t.child)
    );
  }
  function Y0(l, t, a, u, e) {
    if ((Ca(t), t.stateNode === null)) {
      var n = au,
        f = a.contextType;
      typeof f == "object" && f !== null && (n = Yl(f)),
        (n = new a(u, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = yc),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = u),
        (n.state = t.memoizedState),
        (n.refs = {}),
        Qf(t),
        (f = a.contextType),
        (n.context = typeof f == "object" && f !== null ? Yl(f) : au),
        (n.state = t.memoizedState),
        (f = a.getDerivedStateFromProps),
        typeof f == "function" && (dc(t, a, f, u), (n.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((f = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          f !== n.state && yc.enqueueReplaceState(n, n.state, null),
          ku(t, u, n, e),
          Wu(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (u = !0);
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps,
        i = Ga(a, c);
      n.props = i;
      var v = n.context,
        S = a.contextType;
      (f = au), typeof S == "object" && S !== null && (f = Yl(S));
      var E = a.getDerivedStateFromProps;
      (S =
        typeof E == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (c = t.pendingProps !== c),
        S ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c || v !== f) && A0(t, n, u, f)),
        (na = !1);
      var g = t.memoizedState;
      (n.state = g),
        ku(t, u, n, e),
        Wu(),
        (v = t.memoizedState),
        c || g !== v || na
          ? (typeof E == "function" && (dc(t, a, E, u), (v = t.memoizedState)),
            (i = na || T0(t, a, i, u, g, v, f))
              ? (S ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = u),
                (t.memoizedState = v)),
            (n.props = u),
            (n.state = v),
            (n.context = f),
            (u = i))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (u = !1));
    } else {
      (n = t.stateNode),
        Xf(l, t),
        (f = t.memoizedProps),
        (S = Ga(a, f)),
        (n.props = S),
        (E = t.pendingProps),
        (g = n.context),
        (v = a.contextType),
        (i = au),
        typeof v == "object" && v !== null && (i = Yl(v)),
        (c = a.getDerivedStateFromProps),
        (v =
          typeof c == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((f !== E || g !== i) && A0(t, n, u, i)),
        (na = !1),
        (g = t.memoizedState),
        (n.state = g),
        ku(t, u, n, e),
        Wu();
      var r = t.memoizedState;
      f !== E ||
      g !== r ||
      na ||
      (l !== null && l.dependencies !== null && Le(l.dependencies))
        ? (typeof c == "function" && (dc(t, a, c, u), (r = t.memoizedState)),
          (S =
            na ||
            T0(t, a, S, u, g, r, i) ||
            (l !== null && l.dependencies !== null && Le(l.dependencies)))
            ? (v ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(u, r, i),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(u, r, i)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (f === l.memoizedProps && g === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (f === l.memoizedProps && g === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = u),
              (t.memoizedState = r)),
          (n.props = u),
          (n.state = r),
          (n.context = i),
          (u = S))
        : (typeof n.componentDidUpdate != "function" ||
            (f === l.memoizedProps && g === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (f === l.memoizedProps && g === l.memoizedState) ||
            (t.flags |= 1024),
          (u = !1));
    }
    return (
      (n = u),
      dn(l, t),
      (u = (t.flags & 128) !== 0),
      n || u
        ? ((n = t.stateNode),
          (a =
            u && typeof a.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && u
            ? ((t.child = Ya(t, l.child, null, e)),
              (t.child = Ya(t, null, a, e)))
            : xl(l, t, a, e),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = Vt(l, t, e)),
      l
    );
  }
  function x0(l, t, a, u) {
    return Ha(), (t.flags |= 256), xl(l, t, a, u), t.child;
  }
  var hc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function gc(l) {
    return { baseLanes: l, cachePool: ps() };
  }
  function rc(l, t, a) {
    return (l = l !== null ? l.childLanes & ~a : 0), t && (l |= yt), l;
  }
  function G0(l, t, a) {
    var u = t.pendingProps,
      e = !1,
      n = (t.flags & 128) !== 0,
      f;
    if (
      ((f = n) ||
        (f =
          l !== null && l.memoizedState === null ? !1 : (_l.current & 2) !== 0),
      f && ((e = !0), (t.flags &= -129)),
      (f = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (tl) {
        if (
          (e ? ia(t) : sa(),
          (l = rl)
            ? ((l = wd(l, zt)),
              (l = l !== null && l.data !== "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: ta !== null ? { id: Ut, overflow: Nt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = Ss(l)),
                (a.return = t),
                (t.child = a),
                (Bl = t),
                (rl = null)))
            : (l = null),
          l === null)
        )
          throw ua(t);
        return Pc(l) ? (t.lanes = 32) : (t.lanes = 536870912), null;
      }
      var c = u.children;
      return (
        (u = u.fallback),
        e
          ? (sa(),
            (e = t.mode),
            (c = yn({ mode: "hidden", children: c }, e)),
            (u = Na(u, e, a, null)),
            (c.return = t),
            (u.return = t),
            (c.sibling = u),
            (t.child = c),
            (u = t.child),
            (u.memoizedState = gc(a)),
            (u.childLanes = rc(l, f, a)),
            (t.memoizedState = hc),
            te(null, u))
          : (ia(t), Sc(t, c))
      );
    }
    var i = l.memoizedState;
    if (i !== null && ((c = i.dehydrated), c !== null)) {
      if (n)
        t.flags & 256
          ? (ia(t), (t.flags &= -257), (t = bc(l, t, a)))
          : t.memoizedState !== null
          ? (sa(), (t.child = l.child), (t.flags |= 128), (t = null))
          : (sa(),
            (c = u.fallback),
            (e = t.mode),
            (u = yn({ mode: "visible", children: u.children }, e)),
            (c = Na(c, e, a, null)),
            (c.flags |= 2),
            (u.return = t),
            (c.return = t),
            (u.sibling = c),
            (t.child = u),
            Ya(t, l.child, null, a),
            (u = t.child),
            (u.memoizedState = gc(a)),
            (u.childLanes = rc(l, f, a)),
            (t.memoizedState = hc),
            (t = te(null, u)));
      else if ((ia(t), Pc(c))) {
        if (((f = c.nextSibling && c.nextSibling.dataset), f)) var v = f.dgst;
        (f = v),
          (u = Error(h(419))),
          (u.stack = ""),
          (u.digest = f),
          Vu({ value: u, source: null, stack: null }),
          (t = bc(l, t, a));
      } else if (
        (Dl || fu(l, t, a, !1), (f = (a & l.childLanes) !== 0), Dl || f)
      ) {
        if (
          ((f = gl),
          f !== null && ((u = Oi(f, a)), u !== 0 && u !== i.retryLane))
        )
          throw ((i.retryLane = u), Ua(l, u), lt(f, l, u), mc);
        Ic(c) || zn(), (t = bc(l, t, a));
      } else
        Ic(c)
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = i.treeContext),
            (rl = Tt(c.nextSibling)),
            (Bl = t),
            (tl = !0),
            (aa = null),
            (zt = !1),
            l !== null && Es(t, l),
            (t = Sc(t, u.children)),
            (t.flags |= 4096));
      return t;
    }
    return e
      ? (sa(),
        (c = u.fallback),
        (e = t.mode),
        (i = l.child),
        (v = i.sibling),
        (u = Yt(i, { mode: "hidden", children: u.children })),
        (u.subtreeFlags = i.subtreeFlags & 65011712),
        v !== null ? (c = Yt(v, c)) : ((c = Na(c, e, a, null)), (c.flags |= 2)),
        (c.return = t),
        (u.return = t),
        (u.sibling = c),
        (t.child = u),
        te(null, u),
        (u = t.child),
        (c = l.child.memoizedState),
        c === null
          ? (c = gc(a))
          : ((e = c.cachePool),
            e !== null
              ? ((i = Ml._currentValue),
                (e = e.parent !== i ? { parent: i, pool: i } : e))
              : (e = ps()),
            (c = { baseLanes: c.baseLanes | a, cachePool: e })),
        (u.memoizedState = c),
        (u.childLanes = rc(l, f, a)),
        (t.memoizedState = hc),
        te(l.child, u))
      : (ia(t),
        (a = l.child),
        (l = a.sibling),
        (a = Yt(a, { mode: "visible", children: u.children })),
        (a.return = t),
        (a.sibling = null),
        l !== null &&
          ((f = t.deletions),
          f === null ? ((t.deletions = [l]), (t.flags |= 16)) : f.push(l)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function Sc(l, t) {
    return (
      (t = yn({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function yn(l, t) {
    return (l = ct(22, l, null, t)), (l.lanes = 0), l;
  }
  function bc(l, t, a) {
    return (
      Ya(t, l.child, null, a),
      (l = Sc(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function Q0(l, t, a) {
    l.lanes |= t;
    var u = l.alternate;
    u !== null && (u.lanes |= t), Rf(l.return, t, a);
  }
  function zc(l, t, a, u, e, n) {
    var f = l.memoizedState;
    f === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: u,
          tail: a,
          tailMode: e,
          treeForkCount: n,
        })
      : ((f.isBackwards = t),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = u),
        (f.tail = a),
        (f.tailMode = e),
        (f.treeForkCount = n));
  }
  function X0(l, t, a) {
    var u = t.pendingProps,
      e = u.revealOrder,
      n = u.tail;
    u = u.children;
    var f = _l.current,
      c = (f & 2) !== 0;
    if (
      (c ? ((f = (f & 1) | 2), (t.flags |= 128)) : (f &= 1),
      O(_l, f),
      xl(l, t, u, a),
      (u = tl ? Zu : 0),
      !c && l !== null && (l.flags & 128) !== 0)
    )
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13) l.memoizedState !== null && Q0(l, a, t);
        else if (l.tag === 19) Q0(l, a, t);
        else if (l.child !== null) {
          (l.child.return = l), (l = l.child);
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) break l;
          l = l.return;
        }
        (l.sibling.return = l.return), (l = l.sibling);
      }
    switch (e) {
      case "forwards":
        for (a = t.child, e = null; a !== null; )
          (l = a.alternate),
            l !== null && Ie(l) === null && (e = a),
            (a = a.sibling);
        (a = e),
          a === null
            ? ((e = t.child), (t.child = null))
            : ((e = a.sibling), (a.sibling = null)),
          zc(t, !1, e, a, n, u);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, e = t.child, t.child = null; e !== null; ) {
          if (((l = e.alternate), l !== null && Ie(l) === null)) {
            t.child = e;
            break;
          }
          (l = e.sibling), (e.sibling = a), (a = e), (e = l);
        }
        zc(t, !0, a, null, n, u);
        break;
      case "together":
        zc(t, !1, null, null, void 0, u);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Vt(l, t, a) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (oa |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((fu(l, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(h(153));
    if (t.child !== null) {
      for (
        l = t.child, a = Yt(l, l.pendingProps), t.child = a, a.return = t;
        l.sibling !== null;

      )
        (l = l.sibling),
          (a = a.sibling = Yt(l, l.pendingProps)),
          (a.return = t);
      a.sibling = null;
    }
    return t.child;
  }
  function Ec(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && Le(l)));
  }
  function Io(l, t, a) {
    switch (t.tag) {
      case 3:
        Jl(t, t.stateNode.containerInfo),
          ea(t, Ml, l.memoizedState.cache),
          Ha();
        break;
      case 27:
      case 5:
        pu(t);
        break;
      case 4:
        Jl(t, t.stateNode.containerInfo);
        break;
      case 10:
        ea(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return (t.flags |= 128), Jf(t), null;
        break;
      case 13:
        var u = t.memoizedState;
        if (u !== null)
          return u.dehydrated !== null
            ? (ia(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
            ? G0(l, t, a)
            : (ia(t), (l = Vt(l, t, a)), l !== null ? l.sibling : null);
        ia(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (
          ((u = (a & t.childLanes) !== 0),
          u || (fu(l, t, a, !1), (u = (a & t.childLanes) !== 0)),
          e)
        ) {
          if (u) return X0(l, t, a);
          t.flags |= 128;
        }
        if (
          ((e = t.memoizedState),
          e !== null &&
            ((e.rendering = null), (e.tail = null), (e.lastEffect = null)),
          O(_l, _l.current),
          u)
        )
          break;
        return null;
      case 22:
        return (t.lanes = 0), C0(l, t, a, t.pendingProps);
      case 24:
        ea(t, Ml, l.memoizedState.cache);
    }
    return Vt(l, t, a);
  }
  function Z0(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) Dl = !0;
      else {
        if (!Ec(l, a) && (t.flags & 128) === 0) return (Dl = !1), Io(l, t, a);
        Dl = (l.flags & 131072) !== 0;
      }
    else (Dl = !1), tl && (t.flags & 1048576) !== 0 && zs(t, Zu, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          var u = t.pendingProps;
          if (((l = qa(t.elementType)), (t.type = l), typeof l == "function"))
            Mf(l)
              ? ((u = Ga(l, u)), (t.tag = 1), (t = Y0(null, t, l, u, a)))
              : ((t.tag = 0), (t = vc(null, t, l, u, a)));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === Kl) {
                (t.tag = 11), (t = N0(null, t, l, u, a));
                break l;
              } else if (e === G) {
                (t.tag = 14), (t = H0(null, t, l, u, a));
                break l;
              }
            }
            throw ((t = Y(l) || l), Error(h(306, t, "")));
          }
        }
        return t;
      case 0:
        return vc(l, t, t.type, t.pendingProps, a);
      case 1:
        return (u = t.type), (e = Ga(u, t.pendingProps)), Y0(l, t, u, e, a);
      case 3:
        l: {
          if ((Jl(t, t.stateNode.containerInfo), l === null))
            throw Error(h(387));
          u = t.pendingProps;
          var n = t.memoizedState;
          (e = n.element), Xf(l, t), ku(t, u, null, a);
          var f = t.memoizedState;
          if (
            ((u = f.cache),
            ea(t, Ml, u),
            u !== n.cache && qf(t, [Ml], a, !0),
            Wu(),
            (u = f.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: u, isDehydrated: !1, cache: f.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = x0(l, t, u, a);
              break l;
            } else if (u !== e) {
              (e = rt(Error(h(424)), t)), Vu(e), (t = x0(l, t, u, a));
              break l;
            } else {
              switch (((l = t.stateNode.containerInfo), l.nodeType)) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (
                rl = Tt(l.firstChild),
                  Bl = t,
                  tl = !0,
                  aa = null,
                  zt = !0,
                  a = Cs(t, null, u, a),
                  t.child = a;
                a;

              )
                (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
            }
          else {
            if ((Ha(), u === e)) {
              t = Vt(l, t, a);
              break l;
            }
            xl(l, t, u, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          dn(l, t),
          l === null
            ? (a = Pd(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : tl ||
                ((a = t.type),
                (l = t.pendingProps),
                (u = pn(k.current).createElement(a)),
                (u[ql] = t),
                (u[$l] = l),
                Gl(u, a, l),
                Hl(u),
                (t.stateNode = u))
            : (t.memoizedState = Pd(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState
              )),
          null
        );
      case 27:
        return (
          pu(t),
          l === null &&
            tl &&
            ((u = t.stateNode = kd(t.type, t.pendingProps, k.current)),
            (Bl = t),
            (zt = !0),
            (e = rl),
            ra(t.type) ? ((li = e), (rl = Tt(u.firstChild))) : (rl = e)),
          xl(l, t, t.pendingProps.children, a),
          dn(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            tl &&
            ((e = u = rl) &&
              ((u = Dm(u, t.type, t.pendingProps, zt)),
              u !== null
                ? ((t.stateNode = u),
                  (Bl = t),
                  (rl = Tt(u.firstChild)),
                  (zt = !1),
                  (e = !0))
                : (e = !1)),
            e || ua(t)),
          pu(t),
          (e = t.type),
          (n = t.pendingProps),
          (f = l !== null ? l.memoizedProps : null),
          (u = n.children),
          Wc(e, n) ? (u = null) : f !== null && Wc(e, f) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((e = $f(l, t, Vo, null, null, a)), (ge._currentValue = e)),
          dn(l, t),
          xl(l, t, u, a),
          t.child
        );
      case 6:
        return (
          l === null &&
            tl &&
            ((l = a = rl) &&
              ((a = Um(a, t.pendingProps, zt)),
              a !== null
                ? ((t.stateNode = a), (Bl = t), (rl = null), (l = !0))
                : (l = !1)),
            l || ua(t)),
          null
        );
      case 13:
        return G0(l, t, a);
      case 4:
        return (
          Jl(t, t.stateNode.containerInfo),
          (u = t.pendingProps),
          l === null ? (t.child = Ya(t, null, u, a)) : xl(l, t, u, a),
          t.child
        );
      case 11:
        return N0(l, t, t.type, t.pendingProps, a);
      case 7:
        return xl(l, t, t.pendingProps, a), t.child;
      case 8:
        return xl(l, t, t.pendingProps.children, a), t.child;
      case 12:
        return xl(l, t, t.pendingProps.children, a), t.child;
      case 10:
        return (
          (u = t.pendingProps),
          ea(t, t.type, u.value),
          xl(l, t, u.children, a),
          t.child
        );
      case 9:
        return (
          (e = t.type._context),
          (u = t.pendingProps.children),
          Ca(t),
          (e = Yl(e)),
          (u = u(e)),
          (t.flags |= 1),
          xl(l, t, u, a),
          t.child
        );
      case 14:
        return H0(l, t, t.type, t.pendingProps, a);
      case 15:
        return j0(l, t, t.type, t.pendingProps, a);
      case 19:
        return X0(l, t, a);
      case 31:
        return Fo(l, t, a);
      case 22:
        return C0(l, t, a, t.pendingProps);
      case 24:
        return (
          Ca(t),
          (u = Yl(Ml)),
          l === null
            ? ((e = xf()),
              e === null &&
                ((e = gl),
                (n = Bf()),
                (e.pooledCache = n),
                n.refCount++,
                n !== null && (e.pooledCacheLanes |= a),
                (e = n)),
              (t.memoizedState = { parent: u, cache: e }),
              Qf(t),
              ea(t, Ml, e))
            : ((l.lanes & a) !== 0 && (Xf(l, t), ku(t, null, null, a), Wu()),
              (e = l.memoizedState),
              (n = t.memoizedState),
              e.parent !== u
                ? ((e = { parent: u, cache: u }),
                  (t.memoizedState = e),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = e),
                  ea(t, Ml, u))
                : ((u = n.cache),
                  ea(t, Ml, u),
                  u !== e.cache && qf(t, [Ml], a, !0))),
          xl(l, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(h(156, t.tag));
  }
  function Lt(l) {
    l.flags |= 4;
  }
  function Tc(l, t, a, u, e) {
    if (((t = (l.mode & 32) !== 0) && (t = !1), t)) {
      if (((l.flags |= 16777216), (e & 335544128) === e))
        if (l.stateNode.complete) l.flags |= 8192;
        else if (hd()) l.flags |= 8192;
        else throw ((Ba = $e), Gf);
    } else l.flags &= -16777217;
  }
  function V0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !ey(t)))
      if (hd()) l.flags |= 8192;
      else throw ((Ba = $e), Gf);
  }
  function on(l, t) {
    t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? Ti() : 536870912), (l.lanes |= t), (Su |= t));
  }
  function ae(l, t) {
    if (!tl)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), (t = t.sibling);
          a === null ? (l.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = l.tail;
          for (var u = null; a !== null; )
            a.alternate !== null && (u = a), (a = a.sibling);
          u === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (u.sibling = null);
      }
  }
  function Sl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      a = 0,
      u = 0;
    if (t)
      for (var e = l.child; e !== null; )
        (a |= e.lanes | e.childLanes),
          (u |= e.subtreeFlags & 65011712),
          (u |= e.flags & 65011712),
          (e.return = l),
          (e = e.sibling);
    else
      for (e = l.child; e !== null; )
        (a |= e.lanes | e.childLanes),
          (u |= e.subtreeFlags),
          (u |= e.flags),
          (e.return = l),
          (e = e.sibling);
    return (l.subtreeFlags |= u), (l.childLanes = a), t;
  }
  function Po(l, t, a) {
    var u = t.pendingProps;
    switch ((Nf(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Sl(t), null;
      case 1:
        return Sl(t), null;
      case 3:
        return (
          (a = t.stateNode),
          (u = null),
          l !== null && (u = l.memoizedState.cache),
          t.memoizedState.cache !== u && (t.flags |= 2048),
          Qt(Ml),
          Al(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (l === null || l.child === null) &&
            (nu(t)
              ? Lt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), jf())),
          Sl(t),
          null
        );
      case 26:
        var e = t.type,
          n = t.memoizedState;
        return (
          l === null
            ? (Lt(t),
              n !== null ? (Sl(t), V0(t, n)) : (Sl(t), Tc(t, e, null, u, a)))
            : n
            ? n !== l.memoizedState
              ? (Lt(t), Sl(t), V0(t, n))
              : (Sl(t), (t.flags &= -16777217))
            : ((l = l.memoizedProps),
              l !== u && Lt(t),
              Sl(t),
              Tc(t, e, l, u, a)),
          null
        );
      case 27:
        if (
          (Te(t),
          (a = k.current),
          (e = t.type),
          l !== null && t.stateNode != null)
        )
          l.memoizedProps !== u && Lt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(h(166));
            return Sl(t), null;
          }
          (l = N.current),
            nu(t) ? Ts(t) : ((l = kd(e, u, a)), (t.stateNode = l), Lt(t));
        }
        return Sl(t), null;
      case 5:
        if ((Te(t), (e = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== u && Lt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(h(166));
            return Sl(t), null;
          }
          if (((n = N.current), nu(t))) Ts(t);
          else {
            var f = pn(k.current);
            switch (n) {
              case 1:
                n = f.createElementNS("http://www.w3.org/2000/svg", e);
                break;
              case 2:
                n = f.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                break;
              default:
                switch (e) {
                  case "svg":
                    n = f.createElementNS("http://www.w3.org/2000/svg", e);
                    break;
                  case "math":
                    n = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e
                    );
                    break;
                  case "script":
                    (n = f.createElement("div")),
                      (n.innerHTML = "<script></script>"),
                      (n = n.removeChild(n.firstChild));
                    break;
                  case "select":
                    (n =
                      typeof u.is == "string"
                        ? f.createElement("select", { is: u.is })
                        : f.createElement("select")),
                      u.multiple
                        ? (n.multiple = !0)
                        : u.size && (n.size = u.size);
                    break;
                  default:
                    n =
                      typeof u.is == "string"
                        ? f.createElement(e, { is: u.is })
                        : f.createElement(e);
                }
            }
            (n[ql] = t), (n[$l] = u);
            l: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) n.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                (f.child.return = f), (f = f.child);
                continue;
              }
              if (f === t) break l;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t) break l;
                f = f.return;
              }
              (f.sibling.return = f.return), (f = f.sibling);
            }
            t.stateNode = n;
            l: switch ((Gl(n, e, u), e)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                u = !!u.autoFocus;
                break l;
              case "img":
                u = !0;
                break l;
              default:
                u = !1;
            }
            u && Lt(t);
          }
        }
        return (
          Sl(t),
          Tc(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, a),
          null
        );
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== u && Lt(t);
        else {
          if (typeof u != "string" && t.stateNode === null) throw Error(h(166));
          if (((l = k.current), nu(t))) {
            if (
              ((l = t.stateNode),
              (a = t.memoizedProps),
              (u = null),
              (e = Bl),
              e !== null)
            )
              switch (e.tag) {
                case 27:
                case 5:
                  u = e.memoizedProps;
              }
            (l[ql] = t),
              (l = !!(
                l.nodeValue === a ||
                (u !== null && u.suppressHydrationWarning === !0) ||
                Gd(l.nodeValue, a)
              )),
              l || ua(t, !0);
          } else (l = pn(l).createTextNode(u)), (l[ql] = t), (t.stateNode = l);
        }
        return Sl(t), null;
      case 31:
        if (((a = t.memoizedState), l === null || l.memoizedState !== null)) {
          if (((u = nu(t)), a !== null)) {
            if (l === null) {
              if (!u) throw Error(h(318));
              if (
                ((l = t.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(h(557));
              l[ql] = t;
            } else
              Ha(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            Sl(t), (l = !1);
          } else
            (a = jf()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = a),
              (l = !0);
          if (!l) return t.flags & 256 ? (st(t), t) : (st(t), null);
          if ((t.flags & 128) !== 0) throw Error(h(558));
        }
        return Sl(t), null;
      case 13:
        if (
          ((u = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((e = nu(t)), u !== null && u.dehydrated !== null)) {
            if (l === null) {
              if (!e) throw Error(h(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(h(317));
              e[ql] = t;
            } else
              Ha(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            Sl(t), (e = !1);
          } else
            (e = jf()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = e),
              (e = !0);
          if (!e) return t.flags & 256 ? (st(t), t) : (st(t), null);
        }
        return (
          st(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = a), t)
            : ((a = u !== null),
              (l = l !== null && l.memoizedState !== null),
              a &&
                ((u = t.child),
                (e = null),
                u.alternate !== null &&
                  u.alternate.memoizedState !== null &&
                  u.alternate.memoizedState.cachePool !== null &&
                  (e = u.alternate.memoizedState.cachePool.pool),
                (n = null),
                u.memoizedState !== null &&
                  u.memoizedState.cachePool !== null &&
                  (n = u.memoizedState.cachePool.pool),
                n !== e && (u.flags |= 2048)),
              a !== l && a && (t.child.flags |= 8192),
              on(t, t.updateQueue),
              Sl(t),
              null)
        );
      case 4:
        return Al(), l === null && Lc(t.stateNode.containerInfo), Sl(t), null;
      case 10:
        return Qt(t.type), Sl(t), null;
      case 19:
        if ((z(_l), (u = t.memoizedState), u === null)) return Sl(t), null;
        if (((e = (t.flags & 128) !== 0), (n = u.rendering), n === null))
          if (e) ae(u, !1);
          else {
            if (Tl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((n = Ie(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      ae(u, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      on(t, l),
                      t.subtreeFlags = 0,
                      l = a,
                      a = t.child;
                    a !== null;

                  )
                    rs(a, l), (a = a.sibling);
                  return (
                    O(_l, (_l.current & 1) | 2),
                    tl && xt(t, u.treeForkCount),
                    t.child
                  );
                }
                l = l.sibling;
              }
            u.tail !== null &&
              ut() > rn &&
              ((t.flags |= 128), (e = !0), ae(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!e)
            if (((l = Ie(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (e = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                on(t, l),
                ae(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !n.alternate &&
                  !tl)
              )
                return Sl(t), null;
            } else
              2 * ut() - u.renderingStartTime > rn &&
                a !== 536870912 &&
                ((t.flags |= 128), (e = !0), ae(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = u.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (u.last = n));
        }
        return u.tail !== null
          ? ((l = u.tail),
            (u.rendering = l),
            (u.tail = l.sibling),
            (u.renderingStartTime = ut()),
            (l.sibling = null),
            (a = _l.current),
            O(_l, e ? (a & 1) | 2 : a & 1),
            tl && xt(t, u.treeForkCount),
            l)
          : (Sl(t), null);
      case 22:
      case 23:
        return (
          st(t),
          Kf(),
          (u = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== u && (t.flags |= 8192)
            : u && (t.flags |= 8192),
          u
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Sl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Sl(t),
          (a = t.updateQueue),
          a !== null && on(t, a.retryQueue),
          (a = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
          (u = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (u = t.memoizedState.cachePool.pool),
          u !== a && (t.flags |= 2048),
          l !== null && z(Ra),
          null
        );
      case 24:
        return (
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Qt(Ml),
          Sl(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(h(156, t.tag));
  }
  function lm(l, t) {
    switch ((Nf(t), t.tag)) {
      case 1:
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          Qt(Ml),
          Al(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Te(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if ((st(t), t.alternate === null)) throw Error(h(340));
          Ha();
        }
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 13:
        if (
          (st(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(h(340));
          Ha();
        }
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return z(_l), null;
      case 4:
        return Al(), null;
      case 10:
        return Qt(t.type), null;
      case 22:
      case 23:
        return (
          st(t),
          Kf(),
          l !== null && z(Ra),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return Qt(Ml), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function L0(l, t) {
    switch ((Nf(t), t.tag)) {
      case 3:
        Qt(Ml), Al();
        break;
      case 26:
      case 27:
      case 5:
        Te(t);
        break;
      case 4:
        Al();
        break;
      case 31:
        t.memoizedState !== null && st(t);
        break;
      case 13:
        st(t);
        break;
      case 19:
        z(_l);
        break;
      case 10:
        Qt(t.type);
        break;
      case 22:
      case 23:
        st(t), Kf(), l !== null && z(Ra);
        break;
      case 24:
        Qt(Ml);
    }
  }
  function ue(l, t) {
    try {
      var a = t.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var e = u.next;
        a = e;
        do {
          if ((a.tag & l) === l) {
            u = void 0;
            var n = a.create,
              f = a.inst;
            (u = n()), (f.destroy = u);
          }
          a = a.next;
        } while (a !== e);
      }
    } catch (c) {
      yl(t, t.return, c);
    }
  }
  function da(l, t, a) {
    try {
      var u = t.updateQueue,
        e = u !== null ? u.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        u = n;
        do {
          if ((u.tag & l) === l) {
            var f = u.inst,
              c = f.destroy;
            if (c !== void 0) {
              (f.destroy = void 0), (e = t);
              var i = a,
                v = c;
              try {
                v();
              } catch (S) {
                yl(e, i, S);
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (S) {
      yl(t, t.return, S);
    }
  }
  function K0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        qs(t, a);
      } catch (u) {
        yl(l, l.return, u);
      }
    }
  }
  function J0(l, t, a) {
    (a.props = Ga(l.type, l.memoizedProps)), (a.state = l.memoizedState);
    try {
      a.componentWillUnmount();
    } catch (u) {
      yl(l, t, u);
    }
  }
  function ee(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var u = l.stateNode;
            break;
          case 30:
            u = l.stateNode;
            break;
          default:
            u = l.stateNode;
        }
        typeof a == "function" ? (l.refCleanup = a(u)) : (a.current = u);
      }
    } catch (e) {
      yl(l, t, e);
    }
  }
  function Ht(l, t) {
    var a = l.ref,
      u = l.refCleanup;
    if (a !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (e) {
          yl(l, t, e);
        } finally {
          (l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (e) {
          yl(l, t, e);
        }
      else a.current = null;
  }
  function w0(l) {
    var t = l.type,
      a = l.memoizedProps,
      u = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && u.focus();
          break l;
        case "img":
          a.src ? (u.src = a.src) : a.srcSet && (u.srcset = a.srcSet);
      }
    } catch (e) {
      yl(l, l.return, e);
    }
  }
  function Ac(l, t, a) {
    try {
      var u = l.stateNode;
      Tm(u, l.type, a, t), (u[$l] = t);
    } catch (e) {
      yl(l, l.return, e);
    }
  }
  function $0(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && ra(l.type)) ||
      l.tag === 4
    );
  }
  function _c(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || $0(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;

      ) {
        if (
          (l.tag === 27 && ra(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        (l.child.return = l), (l = l.child);
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Oc(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      (l = l.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
              ? a.ownerDocument.body
              : a
            ).insertBefore(l, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a),
            t.appendChild(l),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = qt));
    else if (
      u !== 4 &&
      (u === 27 && ra(l.type) && ((a = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (Oc(l, t, a), l = l.sibling; l !== null; )
        Oc(l, t, a), (l = l.sibling);
  }
  function mn(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      (l = l.stateNode), t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (
      u !== 4 &&
      (u === 27 && ra(l.type) && (a = l.stateNode), (l = l.child), l !== null)
    )
      for (mn(l, t, a), l = l.sibling; l !== null; )
        mn(l, t, a), (l = l.sibling);
  }
  function W0(l) {
    var t = l.stateNode,
      a = l.memoizedProps;
    try {
      for (var u = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Gl(t, u, a), (t[ql] = l), (t[$l] = a);
    } catch (n) {
      yl(l, l.return, n);
    }
  }
  var Kt = !1,
    Ul = !1,
    Mc = !1,
    k0 = typeof WeakSet == "function" ? WeakSet : Set,
    jl = null;
  function tm(l, t) {
    if (((l = l.containerInfo), (wc = Rn), (l = is(l)), bf(l))) {
      if ("selectionStart" in l)
        var a = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          a = ((a = l.ownerDocument) && a.defaultView) || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var e = u.anchorOffset,
              n = u.focusNode;
            u = u.focusOffset;
            try {
              a.nodeType, n.nodeType;
            } catch {
              a = null;
              break l;
            }
            var f = 0,
              c = -1,
              i = -1,
              v = 0,
              S = 0,
              E = l,
              g = null;
            t: for (;;) {
              for (
                var r;
                E !== a || (e !== 0 && E.nodeType !== 3) || (c = f + e),
                  E !== n || (u !== 0 && E.nodeType !== 3) || (i = f + u),
                  E.nodeType === 3 && (f += E.nodeValue.length),
                  (r = E.firstChild) !== null;

              )
                (g = E), (E = r);
              for (;;) {
                if (E === l) break t;
                if (
                  (g === a && ++v === e && (c = f),
                  g === n && ++S === u && (i = f),
                  (r = E.nextSibling) !== null)
                )
                  break;
                (E = g), (g = E.parentNode);
              }
              E = r;
            }
            a = c === -1 || i === -1 ? null : { start: c, end: i };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      $c = { focusedElem: l, selectionRange: a }, Rn = !1, jl = t;
      jl !== null;

    )
      if (
        ((t = jl), (l = t.child), (t.subtreeFlags & 1028) !== 0 && l !== null)
      )
        (l.return = t), (jl = l);
      else
        for (; jl !== null; ) {
          switch (((t = jl), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              if (
                (l & 4) !== 0 &&
                ((l = t.updateQueue),
                (l = l !== null ? l.events : null),
                l !== null)
              )
                for (a = 0; a < l.length; a++)
                  (e = l[a]), (e.ref.impl = e.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                (l = void 0),
                  (a = t),
                  (e = n.memoizedProps),
                  (n = n.memoizedState),
                  (u = a.stateNode);
                try {
                  var U = Ga(a.type, e);
                  (l = u.getSnapshotBeforeUpdate(U, n)),
                    (u.__reactInternalSnapshotBeforeUpdate = l);
                } catch (q) {
                  yl(a, a.return, q);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (a = l.nodeType), a === 9)
                )
                  Fc(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Fc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(h(163));
          }
          if (((l = t.sibling), l !== null)) {
            (l.return = t.return), (jl = l);
            break;
          }
          jl = t.return;
        }
  }
  function F0(l, t, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        wt(l, a), u & 4 && ue(5, a);
        break;
      case 1:
        if ((wt(l, a), u & 4))
          if (((l = a.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (f) {
              yl(a, a.return, f);
            }
          else {
            var e = Ga(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              yl(a, a.return, f);
            }
          }
        u & 64 && K0(a), u & 512 && ee(a, a.return);
        break;
      case 3:
        if ((wt(l, a), u & 64 && ((l = a.updateQueue), l !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            qs(l, t);
          } catch (f) {
            yl(a, a.return, f);
          }
        }
        break;
      case 27:
        t === null && u & 4 && W0(a);
      case 26:
      case 5:
        wt(l, a), t === null && u & 4 && w0(a), u & 512 && ee(a, a.return);
        break;
      case 12:
        wt(l, a);
        break;
      case 31:
        wt(l, a), u & 4 && ld(l, a);
        break;
      case 13:
        wt(l, a),
          u & 4 && td(l, a),
          u & 64 &&
            ((l = a.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((a = dm.bind(null, a)), Nm(l, a))));
        break;
      case 22:
        if (((u = a.memoizedState !== null || Kt), !u)) {
          (t = (t !== null && t.memoizedState !== null) || Ul), (e = Kt);
          var n = Ul;
          (Kt = u),
            (Ul = t) && !n ? $t(l, a, (a.subtreeFlags & 8772) !== 0) : wt(l, a),
            (Kt = e),
            (Ul = n);
        }
        break;
      case 30:
        break;
      default:
        wt(l, a);
    }
  }
  function I0(l) {
    var t = l.alternate;
    t !== null && ((l.alternate = null), I0(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && tf(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null);
  }
  var bl = null,
    kl = !1;
  function Jt(l, t, a) {
    for (a = a.child; a !== null; ) P0(l, t, a), (a = a.sibling);
  }
  function P0(l, t, a) {
    if (et && typeof et.onCommitFiberUnmount == "function")
      try {
        et.onCommitFiberUnmount(Du, a);
      } catch {}
    switch (a.tag) {
      case 26:
        Ul || Ht(a, t),
          Jt(l, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
        break;
      case 27:
        Ul || Ht(a, t);
        var u = bl,
          e = kl;
        ra(a.type) && ((bl = a.stateNode), (kl = !1)),
          Jt(l, t, a),
          me(a.stateNode),
          (bl = u),
          (kl = e);
        break;
      case 5:
        Ul || Ht(a, t);
      case 6:
        if (
          ((u = bl),
          (e = kl),
          (bl = null),
          Jt(l, t, a),
          (bl = u),
          (kl = e),
          bl !== null)
        )
          if (kl)
            try {
              (bl.nodeType === 9
                ? bl.body
                : bl.nodeName === "HTML"
                ? bl.ownerDocument.body
                : bl
              ).removeChild(a.stateNode);
            } catch (n) {
              yl(a, t, n);
            }
          else
            try {
              bl.removeChild(a.stateNode);
            } catch (n) {
              yl(a, t, n);
            }
        break;
      case 18:
        bl !== null &&
          (kl
            ? ((l = bl),
              Kd(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l,
                a.stateNode
              ),
              Mu(l))
            : Kd(bl, a.stateNode));
        break;
      case 4:
        (u = bl),
          (e = kl),
          (bl = a.stateNode.containerInfo),
          (kl = !0),
          Jt(l, t, a),
          (bl = u),
          (kl = e);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        da(2, a, t), Ul || da(4, a, t), Jt(l, t, a);
        break;
      case 1:
        Ul ||
          (Ht(a, t),
          (u = a.stateNode),
          typeof u.componentWillUnmount == "function" && J0(a, t, u)),
          Jt(l, t, a);
        break;
      case 21:
        Jt(l, t, a);
        break;
      case 22:
        (Ul = (u = Ul) || a.memoizedState !== null), Jt(l, t, a), (Ul = u);
        break;
      default:
        Jt(l, t, a);
    }
  }
  function ld(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null))
    ) {
      l = l.dehydrated;
      try {
        Mu(l);
      } catch (a) {
        yl(t, t.return, a);
      }
    }
  }
  function td(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        Mu(l);
      } catch (a) {
        yl(t, t.return, a);
      }
  }
  function am(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new k0()), t;
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new k0()),
          t
        );
      default:
        throw Error(h(435, l.tag));
    }
  }
  function vn(l, t) {
    var a = am(l);
    t.forEach(function (u) {
      if (!a.has(u)) {
        a.add(u);
        var e = ym.bind(null, l, u);
        u.then(e, e);
      }
    });
  }
  function Fl(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var e = a[u],
          n = l,
          f = t,
          c = f;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (ra(c.type)) {
                (bl = c.stateNode), (kl = !1);
                break l;
              }
              break;
            case 5:
              (bl = c.stateNode), (kl = !1);
              break l;
            case 3:
            case 4:
              (bl = c.stateNode.containerInfo), (kl = !0);
              break l;
          }
          c = c.return;
        }
        if (bl === null) throw Error(h(160));
        P0(n, f, e),
          (bl = null),
          (kl = !1),
          (n = e.alternate),
          n !== null && (n.return = null),
          (e.return = null);
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) ad(t, l), (t = t.sibling);
  }
  var pt = null;
  function ad(l, t) {
    var a = l.alternate,
      u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Fl(t, l),
          Il(l),
          u & 4 && (da(3, l, l.return), ue(3, l), da(5, l, l.return));
        break;
      case 1:
        Fl(t, l),
          Il(l),
          u & 512 && (Ul || a === null || Ht(a, a.return)),
          u & 64 &&
            Kt &&
            ((l = l.updateQueue),
            l !== null &&
              ((u = l.callbacks),
              u !== null &&
                ((a = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = a === null ? u : a.concat(u)))));
        break;
      case 26:
        var e = pt;
        if (
          (Fl(t, l),
          Il(l),
          u & 512 && (Ul || a === null || Ht(a, a.return)),
          u & 4)
        ) {
          var n = a !== null ? a.memoizedState : null;
          if (((u = l.memoizedState), a === null))
            if (u === null)
              if (l.stateNode === null) {
                l: {
                  (u = l.type),
                    (a = l.memoizedProps),
                    (e = e.ownerDocument || e);
                  t: switch (u) {
                    case "title":
                      (n = e.getElementsByTagName("title")[0]),
                        (!n ||
                          n[Hu] ||
                          n[ql] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = e.createElement(u)),
                          e.head.insertBefore(
                            n,
                            e.querySelector("head > title")
                          )),
                        Gl(n, u, a),
                        (n[ql] = l),
                        Hl(n),
                        (u = n);
                      break l;
                    case "link":
                      var f = ay("link", "href", e).get(u + (a.href || ""));
                      if (f) {
                        for (var c = 0; c < f.length; c++)
                          if (
                            ((n = f[c]),
                            n.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              n.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              n.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              n.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      (n = e.createElement(u)),
                        Gl(n, u, a),
                        e.head.appendChild(n);
                      break;
                    case "meta":
                      if (
                        (f = ay("meta", "content", e).get(
                          u + (a.content || "")
                        ))
                      ) {
                        for (c = 0; c < f.length; c++)
                          if (
                            ((n = f[c]),
                            n.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              n.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              n.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              n.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      (n = e.createElement(u)),
                        Gl(n, u, a),
                        e.head.appendChild(n);
                      break;
                    default:
                      throw Error(h(468, u));
                  }
                  (n[ql] = l), Hl(n), (u = n);
                }
                l.stateNode = u;
              } else uy(e, l.type, l.stateNode);
            else l.stateNode = ty(e, u, l.memoizedProps);
          else
            n !== u
              ? (n === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : n.count--,
                u === null
                  ? uy(e, l.type, l.stateNode)
                  : ty(e, u, l.memoizedProps))
              : u === null &&
                l.stateNode !== null &&
                Ac(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        Fl(t, l),
          Il(l),
          u & 512 && (Ul || a === null || Ht(a, a.return)),
          a !== null && u & 4 && Ac(l, l.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (
          (Fl(t, l),
          Il(l),
          u & 512 && (Ul || a === null || Ht(a, a.return)),
          l.flags & 32)
        ) {
          e = l.stateNode;
          try {
            Wa(e, "");
          } catch (U) {
            yl(l, l.return, U);
          }
        }
        u & 4 &&
          l.stateNode != null &&
          ((e = l.memoizedProps), Ac(l, e, a !== null ? a.memoizedProps : e)),
          u & 1024 && (Mc = !0);
        break;
      case 6:
        if ((Fl(t, l), Il(l), u & 4)) {
          if (l.stateNode === null) throw Error(h(162));
          (u = l.memoizedProps), (a = l.stateNode);
          try {
            a.nodeValue = u;
          } catch (U) {
            yl(l, l.return, U);
          }
        }
        break;
      case 3:
        if (
          ((Nn = null),
          (e = pt),
          (pt = Dn(t.containerInfo)),
          Fl(t, l),
          (pt = e),
          Il(l),
          u & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            Mu(t.containerInfo);
          } catch (U) {
            yl(l, l.return, U);
          }
        Mc && ((Mc = !1), ud(l));
        break;
      case 4:
        (u = pt),
          (pt = Dn(l.stateNode.containerInfo)),
          Fl(t, l),
          Il(l),
          (pt = u);
        break;
      case 12:
        Fl(t, l), Il(l);
        break;
      case 31:
        Fl(t, l),
          Il(l),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), vn(l, u)));
        break;
      case 13:
        Fl(t, l),
          Il(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (gn = ut()),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), vn(l, u)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = a !== null && a.memoizedState !== null,
          v = Kt,
          S = Ul;
        if (
          ((Kt = v || e),
          (Ul = S || i),
          Fl(t, l),
          (Ul = S),
          (Kt = v),
          Il(l),
          u & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = e ? t._visibility & -2 : t._visibility | 1,
              e && (a === null || i || Kt || Ul || Qa(l)),
              a = null,
              t = l;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                i = a = t;
                try {
                  if (((n = i.stateNode), e))
                    (f = n.style),
                      typeof f.setProperty == "function"
                        ? f.setProperty("display", "none", "important")
                        : (f.display = "none");
                  else {
                    c = i.stateNode;
                    var E = i.memoizedProps.style,
                      g =
                        E != null && E.hasOwnProperty("display")
                          ? E.display
                          : null;
                    c.style.display =
                      g == null || typeof g == "boolean" ? "" : ("" + g).trim();
                  }
                } catch (U) {
                  yl(i, i.return, U);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                i = t;
                try {
                  i.stateNode.nodeValue = e ? "" : i.memoizedProps;
                } catch (U) {
                  yl(i, i.return, U);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                i = t;
                try {
                  var r = i.stateNode;
                  e ? Jd(r, !0) : Jd(i.stateNode, !1);
                } catch (U) {
                  yl(i, i.return, U);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              a === t && (a = null), (t = t.return);
            }
            a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        u & 4 &&
          ((u = l.updateQueue),
          u !== null &&
            ((a = u.retryQueue),
            a !== null && ((u.retryQueue = null), vn(l, a))));
        break;
      case 19:
        Fl(t, l),
          Il(l),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), vn(l, u)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Fl(t, l), Il(l);
    }
  }
  function Il(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, u = l.return; u !== null; ) {
          if ($0(u)) {
            a = u;
            break;
          }
          u = u.return;
        }
        if (a == null) throw Error(h(160));
        switch (a.tag) {
          case 27:
            var e = a.stateNode,
              n = _c(l);
            mn(l, n, e);
            break;
          case 5:
            var f = a.stateNode;
            a.flags & 32 && (Wa(f, ""), (a.flags &= -33));
            var c = _c(l);
            mn(l, c, f);
            break;
          case 3:
          case 4:
            var i = a.stateNode.containerInfo,
              v = _c(l);
            Oc(l, v, i);
            break;
          default:
            throw Error(h(161));
        }
      } catch (S) {
        yl(l, l.return, S);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function ud(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        ud(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling);
      }
  }
  function wt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) F0(l, t.alternate, t), (t = t.sibling);
  }
  function Qa(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          da(4, t, t.return), Qa(t);
          break;
        case 1:
          Ht(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && J0(t, t.return, a),
            Qa(t);
          break;
        case 27:
          me(t.stateNode);
        case 26:
        case 5:
          Ht(t, t.return), Qa(t);
          break;
        case 22:
          t.memoizedState === null && Qa(t);
          break;
        case 30:
          Qa(t);
          break;
        default:
          Qa(t);
      }
      l = l.sibling;
    }
  }
  function $t(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var u = t.alternate,
        e = l,
        n = t,
        f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          $t(e, n, a), ue(4, n);
          break;
        case 1:
          if (
            ($t(e, n, a),
            (u = n),
            (e = u.stateNode),
            typeof e.componentDidMount == "function")
          )
            try {
              e.componentDidMount();
            } catch (v) {
              yl(u, u.return, v);
            }
          if (((u = n), (e = u.updateQueue), e !== null)) {
            var c = u.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  Rs(i[e], c);
            } catch (v) {
              yl(u, u.return, v);
            }
          }
          a && f & 64 && K0(n), ee(n, n.return);
          break;
        case 27:
          W0(n);
        case 26:
        case 5:
          $t(e, n, a), a && u === null && f & 4 && w0(n), ee(n, n.return);
          break;
        case 12:
          $t(e, n, a);
          break;
        case 31:
          $t(e, n, a), a && f & 4 && ld(e, n);
          break;
        case 13:
          $t(e, n, a), a && f & 4 && td(e, n);
          break;
        case 22:
          n.memoizedState === null && $t(e, n, a), ee(n, n.return);
          break;
        case 30:
          break;
        default:
          $t(e, n, a);
      }
      t = t.sibling;
    }
  }
  function pc(l, t) {
    var a = null;
    l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (a = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== a && (l != null && l.refCount++, a != null && Lu(a));
  }
  function Dc(l, t) {
    (l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Lu(l));
  }
  function Dt(l, t, a, u) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) ed(l, t, a, u), (t = t.sibling);
  }
  function ed(l, t, a, u) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Dt(l, t, a, u), e & 2048 && ue(9, t);
        break;
      case 1:
        Dt(l, t, a, u);
        break;
      case 3:
        Dt(l, t, a, u),
          e & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Lu(l)));
        break;
      case 12:
        if (e & 2048) {
          Dt(l, t, a, u), (l = t.stateNode);
          try {
            var n = t.memoizedProps,
              f = n.id,
              c = n.onPostCommit;
            typeof c == "function" &&
              c(
                f,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0
              );
          } catch (i) {
            yl(t, t.return, i);
          }
        } else Dt(l, t, a, u);
        break;
      case 31:
        Dt(l, t, a, u);
        break;
      case 13:
        Dt(l, t, a, u);
        break;
      case 23:
        break;
      case 22:
        (n = t.stateNode),
          (f = t.alternate),
          t.memoizedState !== null
            ? n._visibility & 2
              ? Dt(l, t, a, u)
              : ne(l, t)
            : n._visibility & 2
            ? Dt(l, t, a, u)
            : ((n._visibility |= 2),
              hu(l, t, a, u, (t.subtreeFlags & 10256) !== 0 || !1)),
          e & 2048 && pc(f, t);
        break;
      case 24:
        Dt(l, t, a, u), e & 2048 && Dc(t.alternate, t);
        break;
      default:
        Dt(l, t, a, u);
    }
  }
  function hu(l, t, a, u, e) {
    for (
      e = e && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;

    ) {
      var n = l,
        f = t,
        c = a,
        i = u,
        v = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          hu(n, f, c, i, e), ue(8, f);
          break;
        case 23:
          break;
        case 22:
          var S = f.stateNode;
          f.memoizedState !== null
            ? S._visibility & 2
              ? hu(n, f, c, i, e)
              : ne(n, f)
            : ((S._visibility |= 2), hu(n, f, c, i, e)),
            e && v & 2048 && pc(f.alternate, f);
          break;
        case 24:
          hu(n, f, c, i, e), e && v & 2048 && Dc(f.alternate, f);
          break;
        default:
          hu(n, f, c, i, e);
      }
      t = t.sibling;
    }
  }
  function ne(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l,
          u = t,
          e = u.flags;
        switch (u.tag) {
          case 22:
            ne(a, u), e & 2048 && pc(u.alternate, u);
            break;
          case 24:
            ne(a, u), e & 2048 && Dc(u.alternate, u);
            break;
          default:
            ne(a, u);
        }
        t = t.sibling;
      }
  }
  var fe = 8192;
  function gu(l, t, a) {
    if (l.subtreeFlags & fe)
      for (l = l.child; l !== null; ) nd(l, t, a), (l = l.sibling);
  }
  function nd(l, t, a) {
    switch (l.tag) {
      case 26:
        gu(l, t, a),
          l.flags & fe &&
            l.memoizedState !== null &&
            Zm(a, pt, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        gu(l, t, a);
        break;
      case 3:
      case 4:
        var u = pt;
        (pt = Dn(l.stateNode.containerInfo)), gu(l, t, a), (pt = u);
        break;
      case 22:
        l.memoizedState === null &&
          ((u = l.alternate),
          u !== null && u.memoizedState !== null
            ? ((u = fe), (fe = 16777216), gu(l, t, a), (fe = u))
            : gu(l, t, a));
        break;
      default:
        gu(l, t, a);
    }
  }
  function fd(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do (t = l.sibling), (l.sibling = null), (l = t);
      while (l !== null);
    }
  }
  function ce(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          (jl = u), id(u, l);
        }
      fd(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) cd(l), (l = l.sibling);
  }
  function cd(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ce(l), l.flags & 2048 && da(9, l, l.return);
        break;
      case 3:
        ce(l);
        break;
      case 12:
        ce(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), hn(l))
          : ce(l);
        break;
      default:
        ce(l);
    }
  }
  function hn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          (jl = u), id(u, l);
        }
      fd(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          da(8, t, t.return), hn(t);
          break;
        case 22:
          (a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), hn(t));
          break;
        default:
          hn(t);
      }
      l = l.sibling;
    }
  }
  function id(l, t) {
    for (; jl !== null; ) {
      var a = jl;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          da(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var u = a.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          Lu(a.memoizedState.cache);
      }
      if (((u = a.child), u !== null)) (u.return = a), (jl = u);
      else
        l: for (a = l; jl !== null; ) {
          u = jl;
          var e = u.sibling,
            n = u.return;
          if ((I0(u), u === a)) {
            jl = null;
            break l;
          }
          if (e !== null) {
            (e.return = n), (jl = e);
            break l;
          }
          jl = n;
        }
    }
  }
  var um = {
      getCacheForType: function (l) {
        var t = Yl(Ml),
          a = t.data.get(l);
        return a === void 0 && ((a = l()), t.data.set(l, a)), a;
      },
      cacheSignal: function () {
        return Yl(Ml).controller.signal;
      },
    },
    em = typeof WeakMap == "function" ? WeakMap : Map,
    nl = 0,
    gl = null,
    F = null,
    P = 0,
    dl = 0,
    dt = null,
    ya = !1,
    ru = !1,
    Uc = !1,
    Wt = 0,
    Tl = 0,
    oa = 0,
    Xa = 0,
    Nc = 0,
    yt = 0,
    Su = 0,
    ie = null,
    Pl = null,
    Hc = !1,
    gn = 0,
    sd = 0,
    rn = 1 / 0,
    Sn = null,
    ma = null,
    Nl = 0,
    va = null,
    bu = null,
    kt = 0,
    jc = 0,
    Cc = null,
    dd = null,
    se = 0,
    Rc = null;
  function ot() {
    return (nl & 2) !== 0 && P !== 0 ? P & -P : o.T !== null ? Qc() : Mi();
  }
  function yd() {
    if (yt === 0)
      if ((P & 536870912) === 0 || tl) {
        var l = Oe;
        (Oe <<= 1), (Oe & 3932160) === 0 && (Oe = 262144), (yt = l);
      } else yt = 536870912;
    return (l = it.current), l !== null && (l.flags |= 32), yt;
  }
  function lt(l, t, a) {
    ((l === gl && (dl === 2 || dl === 9)) || l.cancelPendingCommit !== null) &&
      (zu(l, 0), ha(l, P, yt, !1)),
      Nu(l, a),
      ((nl & 2) === 0 || l !== gl) &&
        (l === gl &&
          ((nl & 2) === 0 && (Xa |= a), Tl === 4 && ha(l, P, yt, !1)),
        jt(l));
  }
  function od(l, t, a) {
    if ((nl & 6) !== 0) throw Error(h(327));
    var u = (!a && (t & 127) === 0 && (t & l.expiredLanes) === 0) || Uu(l, t),
      e = u ? cm(l, t) : Bc(l, t, !0),
      n = u;
    do {
      if (e === 0) {
        ru && !u && ha(l, t, 0, !1);
        break;
      } else {
        if (((a = l.current.alternate), n && !nm(a))) {
          (e = Bc(l, t, !1)), (n = !1);
          continue;
        }
        if (e === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var f = 0;
          else
            (f = l.pendingLanes & -536870913),
              (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0);
          if (f !== 0) {
            t = f;
            l: {
              var c = l;
              e = ie;
              var i = c.current.memoizedState.isDehydrated;
              if ((i && (zu(c, f).flags |= 256), (f = Bc(c, f, !1)), f !== 2)) {
                if (Uc && !i) {
                  (c.errorRecoveryDisabledLanes |= n), (Xa |= n), (e = 4);
                  break l;
                }
                (n = Pl),
                  (Pl = e),
                  n !== null && (Pl === null ? (Pl = n) : Pl.push.apply(Pl, n));
              }
              e = f;
            }
            if (((n = !1), e !== 2)) continue;
          }
        }
        if (e === 1) {
          zu(l, 0), ha(l, t, 0, !0);
          break;
        }
        l: {
          switch (((u = l), (n = e), n)) {
            case 0:
            case 1:
              throw Error(h(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ha(u, t, yt, !ya);
              break l;
            case 2:
              Pl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(h(329));
          }
          if ((t & 62914560) === t && ((e = gn + 300 - ut()), 10 < e)) {
            if ((ha(u, t, yt, !ya), pe(u, 0, !0) !== 0)) break l;
            (kt = t),
              (u.timeoutHandle = Vd(
                md.bind(
                  null,
                  u,
                  a,
                  Pl,
                  Sn,
                  Hc,
                  t,
                  yt,
                  Xa,
                  Su,
                  ya,
                  n,
                  "Throttled",
                  -0,
                  0
                ),
                e
              ));
            break l;
          }
          md(u, a, Pl, Sn, Hc, t, yt, Xa, Su, ya, n, null, -0, 0);
        }
      }
      break;
    } while (!0);
    jt(l);
  }
  function md(l, t, a, u, e, n, f, c, i, v, S, E, g, r) {
    if (
      ((l.timeoutHandle = -1),
      (E = t.subtreeFlags),
      E & 8192 || (E & 16785408) === 16785408)
    ) {
      (E = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: qt,
      }),
        nd(t, n, E);
      var U =
        (n & 62914560) === n ? gn - ut() : (n & 4194048) === n ? sd - ut() : 0;
      if (((U = Vm(E, U)), U !== null)) {
        (kt = n),
          (l.cancelPendingCommit = U(
            Ed.bind(null, l, t, n, a, u, e, f, c, i, S, E, null, g, r)
          )),
          ha(l, n, f, !v);
        return;
      }
    }
    Ed(l, t, n, a, u, e, f, c, i);
  }
  function nm(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var u = 0; u < a.length; u++) {
          var e = a[u],
            n = e.getSnapshot;
          e = e.value;
          try {
            if (!ft(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        (a.return = t), (t = a);
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function ha(l, t, a, u) {
    (t &= ~Nc),
      (t &= ~Xa),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      u && (l.warmLanes |= t),
      (u = l.expirationTimes);
    for (var e = t; 0 < e; ) {
      var n = 31 - nt(e),
        f = 1 << n;
      (u[n] = -1), (e &= ~f);
    }
    a !== 0 && Ai(l, a, t);
  }
  function bn() {
    return (nl & 6) === 0 ? (de(0), !1) : !0;
  }
  function qc() {
    if (F !== null) {
      if (dl === 0) var l = F.return;
      else (l = F), (Gt = ja = null), Ff(l), (du = null), (Ju = 0), (l = F);
      for (; l !== null; ) L0(l.alternate, l), (l = l.return);
      F = null;
    }
  }
  function zu(l, t) {
    var a = l.timeoutHandle;
    a !== -1 && ((l.timeoutHandle = -1), Om(a)),
      (a = l.cancelPendingCommit),
      a !== null && ((l.cancelPendingCommit = null), a()),
      (kt = 0),
      qc(),
      (gl = l),
      (F = a = Yt(l.current, null)),
      (P = t),
      (dl = 0),
      (dt = null),
      (ya = !1),
      (ru = Uu(l, t)),
      (Uc = !1),
      (Su = yt = Nc = Xa = oa = Tl = 0),
      (Pl = ie = null),
      (Hc = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var e = 31 - nt(u),
          n = 1 << e;
        (t |= l[e]), (u &= ~n);
      }
    return (Wt = t), Ge(), a;
  }
  function vd(l, t) {
    (L = null),
      (o.H = le),
      t === su || t === we
        ? ((t = Ns()), (dl = 3))
        : t === Gf
        ? ((t = Ns()), (dl = 4))
        : (dl =
            t === mc
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (dt = t),
      F === null && ((Tl = 1), cn(l, rt(t, l.current)));
  }
  function hd() {
    var l = it.current;
    return l === null
      ? !0
      : (P & 4194048) === P
      ? Et === null
      : (P & 62914560) === P || (P & 536870912) !== 0
      ? l === Et
      : !1;
  }
  function gd() {
    var l = o.H;
    return (o.H = le), l === null ? le : l;
  }
  function rd() {
    var l = o.A;
    return (o.A = um), l;
  }
  function zn() {
    (Tl = 4),
      ya || ((P & 4194048) !== P && it.current !== null) || (ru = !0),
      ((oa & 134217727) === 0 && (Xa & 134217727) === 0) ||
        gl === null ||
        ha(gl, P, yt, !1);
  }
  function Bc(l, t, a) {
    var u = nl;
    nl |= 2;
    var e = gd(),
      n = rd();
    (gl !== l || P !== t) && ((Sn = null), zu(l, t)), (t = !1);
    var f = Tl;
    l: do
      try {
        if (dl !== 0 && F !== null) {
          var c = F,
            i = dt;
          switch (dl) {
            case 8:
              qc(), (f = 6);
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              it.current === null && (t = !0);
              var v = dl;
              if (((dl = 0), (dt = null), Eu(l, c, i, v), a && ru)) {
                f = 0;
                break l;
              }
              break;
            default:
              (v = dl), (dl = 0), (dt = null), Eu(l, c, i, v);
          }
        }
        fm(), (f = Tl);
        break;
      } catch (S) {
        vd(l, S);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Gt = ja = null),
      (nl = u),
      (o.H = e),
      (o.A = n),
      F === null && ((gl = null), (P = 0), Ge()),
      f
    );
  }
  function fm() {
    for (; F !== null; ) Sd(F);
  }
  function cm(l, t) {
    var a = nl;
    nl |= 2;
    var u = gd(),
      e = rd();
    gl !== l || P !== t
      ? ((Sn = null), (rn = ut() + 500), zu(l, t))
      : (ru = Uu(l, t));
    l: do
      try {
        if (dl !== 0 && F !== null) {
          t = F;
          var n = dt;
          t: switch (dl) {
            case 1:
              (dl = 0), (dt = null), Eu(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (Ds(n)) {
                (dl = 0), (dt = null), bd(t);
                break;
              }
              (t = function () {
                (dl !== 2 && dl !== 9) || gl !== l || (dl = 7), jt(l);
              }),
                n.then(t, t);
              break l;
            case 3:
              dl = 7;
              break l;
            case 4:
              dl = 5;
              break l;
            case 7:
              Ds(n)
                ? ((dl = 0), (dt = null), bd(t))
                : ((dl = 0), (dt = null), Eu(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (F.tag) {
                case 26:
                  f = F.memoizedState;
                case 5:
                case 27:
                  var c = F;
                  if (f ? ey(f) : c.stateNode.complete) {
                    (dl = 0), (dt = null);
                    var i = c.sibling;
                    if (i !== null) F = i;
                    else {
                      var v = c.return;
                      v !== null ? ((F = v), En(v)) : (F = null);
                    }
                    break t;
                  }
              }
              (dl = 0), (dt = null), Eu(l, t, n, 5);
              break;
            case 6:
              (dl = 0), (dt = null), Eu(l, t, n, 6);
              break;
            case 8:
              qc(), (Tl = 6);
              break l;
            default:
              throw Error(h(462));
          }
        }
        im();
        break;
      } catch (S) {
        vd(l, S);
      }
    while (!0);
    return (
      (Gt = ja = null),
      (o.H = u),
      (o.A = e),
      (nl = a),
      F !== null ? 0 : ((gl = null), (P = 0), Ge(), Tl)
    );
  }
  function im() {
    for (; F !== null && !Ny(); ) Sd(F);
  }
  function Sd(l) {
    var t = Z0(l.alternate, l, Wt);
    (l.memoizedProps = l.pendingProps), t === null ? En(l) : (F = t);
  }
  function bd(l) {
    var t = l,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = B0(a, t, t.pendingProps, t.type, void 0, P);
        break;
      case 11:
        t = B0(a, t, t.pendingProps, t.type.render, t.ref, P);
        break;
      case 5:
        Ff(t);
      default:
        L0(a, t), (t = F = rs(t, Wt)), (t = Z0(a, t, Wt));
    }
    (l.memoizedProps = l.pendingProps), t === null ? En(l) : (F = t);
  }
  function Eu(l, t, a, u) {
    (Gt = ja = null), Ff(t), (du = null), (Ju = 0);
    var e = t.return;
    try {
      if (ko(l, e, t, a, P)) {
        (Tl = 1), cn(l, rt(a, l.current)), (F = null);
        return;
      }
    } catch (n) {
      if (e !== null) throw ((F = e), n);
      (Tl = 1), cn(l, rt(a, l.current)), (F = null);
      return;
    }
    t.flags & 32768
      ? (tl || u === 1
          ? (l = !0)
          : ru || (P & 536870912) !== 0
          ? (l = !1)
          : ((ya = l = !0),
            (u === 2 || u === 9 || u === 3 || u === 6) &&
              ((u = it.current),
              u !== null && u.tag === 13 && (u.flags |= 16384))),
        zd(t, l))
      : En(t);
  }
  function En(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        zd(t, ya);
        return;
      }
      l = t.return;
      var a = Po(t.alternate, t, Wt);
      if (a !== null) {
        F = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        F = t;
        return;
      }
      F = t = l;
    } while (t !== null);
    Tl === 0 && (Tl = 5);
  }
  function zd(l, t) {
    do {
      var a = lm(l.alternate, l);
      if (a !== null) {
        (a.flags &= 32767), (F = a);
        return;
      }
      if (
        ((a = l.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        F = l;
        return;
      }
      F = l = a;
    } while (l !== null);
    (Tl = 6), (F = null);
  }
  function Ed(l, t, a, u, e, n, f, c, i) {
    l.cancelPendingCommit = null;
    do Tn();
    while (Nl !== 0);
    if ((nl & 6) !== 0) throw Error(h(327));
    if (t !== null) {
      if (t === l.current) throw Error(h(177));
      if (
        ((n = t.lanes | t.childLanes),
        (n |= _f),
        Qy(l, a, n, f, c, i),
        l === gl && ((F = gl = null), (P = 0)),
        (bu = t),
        (va = l),
        (kt = a),
        (jc = n),
        (Cc = e),
        (dd = u),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            om(Ae, function () {
              return Md(), null;
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (u = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || u)
      ) {
        (u = o.T), (o.T = null), (e = A.p), (A.p = 2), (f = nl), (nl |= 4);
        try {
          tm(l, t, a);
        } finally {
          (nl = f), (A.p = e), (o.T = u);
        }
      }
      (Nl = 1), Td(), Ad(), _d();
    }
  }
  function Td() {
    if (Nl === 1) {
      Nl = 0;
      var l = va,
        t = bu,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        (a = o.T), (o.T = null);
        var u = A.p;
        A.p = 2;
        var e = nl;
        nl |= 4;
        try {
          ad(t, l);
          var n = $c,
            f = is(l.containerInfo),
            c = n.focusedElem,
            i = n.selectionRange;
          if (
            f !== c &&
            c &&
            c.ownerDocument &&
            cs(c.ownerDocument.documentElement, c)
          ) {
            if (i !== null && bf(c)) {
              var v = i.start,
                S = i.end;
              if ((S === void 0 && (S = v), "selectionStart" in c))
                (c.selectionStart = v),
                  (c.selectionEnd = Math.min(S, c.value.length));
              else {
                var E = c.ownerDocument || document,
                  g = (E && E.defaultView) || window;
                if (g.getSelection) {
                  var r = g.getSelection(),
                    U = c.textContent.length,
                    q = Math.min(i.start, U),
                    vl = i.end === void 0 ? q : Math.min(i.end, U);
                  !r.extend && q > vl && ((f = vl), (vl = q), (q = f));
                  var y = fs(c, q),
                    d = fs(c, vl);
                  if (
                    y &&
                    d &&
                    (r.rangeCount !== 1 ||
                      r.anchorNode !== y.node ||
                      r.anchorOffset !== y.offset ||
                      r.focusNode !== d.node ||
                      r.focusOffset !== d.offset)
                  ) {
                    var m = E.createRange();
                    m.setStart(y.node, y.offset),
                      r.removeAllRanges(),
                      q > vl
                        ? (r.addRange(m), r.extend(d.node, d.offset))
                        : (m.setEnd(d.node, d.offset), r.addRange(m));
                  }
                }
              }
            }
            for (E = [], r = c; (r = r.parentNode); )
              r.nodeType === 1 &&
                E.push({ element: r, left: r.scrollLeft, top: r.scrollTop });
            for (
              typeof c.focus == "function" && c.focus(), c = 0;
              c < E.length;
              c++
            ) {
              var b = E[c];
              (b.element.scrollLeft = b.left), (b.element.scrollTop = b.top);
            }
          }
          (Rn = !!wc), ($c = wc = null);
        } finally {
          (nl = e), (A.p = u), (o.T = a);
        }
      }
      (l.current = t), (Nl = 2);
    }
  }
  function Ad() {
    if (Nl === 2) {
      Nl = 0;
      var l = va,
        t = bu,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        (a = o.T), (o.T = null);
        var u = A.p;
        A.p = 2;
        var e = nl;
        nl |= 4;
        try {
          F0(l, t.alternate, t);
        } finally {
          (nl = e), (A.p = u), (o.T = a);
        }
      }
      Nl = 3;
    }
  }
  function _d() {
    if (Nl === 4 || Nl === 3) {
      (Nl = 0), Hy();
      var l = va,
        t = bu,
        a = kt,
        u = dd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Nl = 5)
        : ((Nl = 0), (bu = va = null), Od(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (
        (e === 0 && (ma = null),
        Pn(a),
        (t = t.stateNode),
        et && typeof et.onCommitFiberRoot == "function")
      )
        try {
          et.onCommitFiberRoot(Du, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (u !== null) {
        (t = o.T), (e = A.p), (A.p = 2), (o.T = null);
        try {
          for (var n = l.onRecoverableError, f = 0; f < u.length; f++) {
            var c = u[f];
            n(c.value, { componentStack: c.stack });
          }
        } finally {
          (o.T = t), (A.p = e);
        }
      }
      (kt & 3) !== 0 && Tn(),
        jt(l),
        (e = l.pendingLanes),
        (a & 261930) !== 0 && (e & 42) !== 0
          ? l === Rc
            ? se++
            : ((se = 0), (Rc = l))
          : (se = 0),
        de(0);
    }
  }
  function Od(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), Lu(t)));
  }
  function Tn() {
    return Td(), Ad(), _d(), Md();
  }
  function Md() {
    if (Nl !== 5) return !1;
    var l = va,
      t = jc;
    jc = 0;
    var a = Pn(kt),
      u = o.T,
      e = A.p;
    try {
      (A.p = 32 > a ? 32 : a), (o.T = null), (a = Cc), (Cc = null);
      var n = va,
        f = kt;
      if (((Nl = 0), (bu = va = null), (kt = 0), (nl & 6) !== 0))
        throw Error(h(331));
      var c = nl;
      if (
        ((nl |= 4),
        cd(n.current),
        ed(n, n.current, f, a),
        (nl = c),
        de(0, !1),
        et && typeof et.onPostCommitFiberRoot == "function")
      )
        try {
          et.onPostCommitFiberRoot(Du, n);
        } catch {}
      return !0;
    } finally {
      (A.p = e), (o.T = u), Od(l, t);
    }
  }
  function pd(l, t, a) {
    (t = rt(a, t)),
      (t = oc(l.stateNode, t, 2)),
      (l = ca(l, t, 2)),
      l !== null && (Nu(l, 2), jt(l));
  }
  function yl(l, t, a) {
    if (l.tag === 3) pd(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          pd(t, l, a);
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof u.componentDidCatch == "function" &&
              (ma === null || !ma.has(u)))
          ) {
            (l = rt(a, l)),
              (a = D0(2)),
              (u = ca(t, a, 2)),
              u !== null && (U0(a, u, t, l), Nu(u, 2), jt(u));
            break;
          }
        }
        t = t.return;
      }
  }
  function Yc(l, t, a) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new em();
      var e = new Set();
      u.set(t, e);
    } else (e = u.get(t)), e === void 0 && ((e = new Set()), u.set(t, e));
    e.has(a) ||
      ((Uc = !0), e.add(a), (l = sm.bind(null, l, t, a)), t.then(l, l));
  }
  function sm(l, t, a) {
    var u = l.pingCache;
    u !== null && u.delete(t),
      (l.pingedLanes |= l.suspendedLanes & a),
      (l.warmLanes &= ~a),
      gl === l &&
        (P & a) === a &&
        (Tl === 4 || (Tl === 3 && (P & 62914560) === P && 300 > ut() - gn)
          ? (nl & 2) === 0 && zu(l, 0)
          : (Nc |= a),
        Su === P && (Su = 0)),
      jt(l);
  }
  function Dd(l, t) {
    t === 0 && (t = Ti()), (l = Ua(l, t)), l !== null && (Nu(l, t), jt(l));
  }
  function dm(l) {
    var t = l.memoizedState,
      a = 0;
    t !== null && (a = t.retryLane), Dd(l, a);
  }
  function ym(l, t) {
    var a = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var u = l.stateNode,
          e = l.memoizedState;
        e !== null && (a = e.retryLane);
        break;
      case 19:
        u = l.stateNode;
        break;
      case 22:
        u = l.stateNode._retryCache;
        break;
      default:
        throw Error(h(314));
    }
    u !== null && u.delete(t), Dd(l, a);
  }
  function om(l, t) {
    return Wn(l, t);
  }
  var An = null,
    Tu = null,
    xc = !1,
    _n = !1,
    Gc = !1,
    ga = 0;
  function jt(l) {
    l !== Tu &&
      l.next === null &&
      (Tu === null ? (An = Tu = l) : (Tu = Tu.next = l)),
      (_n = !0),
      xc || ((xc = !0), vm());
  }
  function de(l, t) {
    if (!Gc && _n) {
      Gc = !0;
      do
        for (var a = !1, u = An; u !== null; ) {
          if (l !== 0) {
            var e = u.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = u.suspendedLanes,
                c = u.pingedLanes;
              (n = (1 << (31 - nt(42 | l) + 1)) - 1),
                (n &= e & ~(f & ~c)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((a = !0), jd(u, n));
          } else
            (n = P),
              (n = pe(
                u,
                u === gl ? n : 0,
                u.cancelPendingCommit !== null || u.timeoutHandle !== -1
              )),
              (n & 3) === 0 || Uu(u, n) || ((a = !0), jd(u, n));
          u = u.next;
        }
      while (a);
      Gc = !1;
    }
  }
  function mm() {
    Ud();
  }
  function Ud() {
    _n = xc = !1;
    var l = 0;
    ga !== 0 && _m() && (l = ga);
    for (var t = ut(), a = null, u = An; u !== null; ) {
      var e = u.next,
        n = Nd(u, t);
      n === 0
        ? ((u.next = null),
          a === null ? (An = e) : (a.next = e),
          e === null && (Tu = a))
        : ((a = u), (l !== 0 || (n & 3) !== 0) && (_n = !0)),
        (u = e);
    }
    (Nl !== 0 && Nl !== 5) || de(l), ga !== 0 && (ga = 0);
  }
  function Nd(l, t) {
    for (
      var a = l.suspendedLanes,
        u = l.pingedLanes,
        e = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;

    ) {
      var f = 31 - nt(n),
        c = 1 << f,
        i = e[f];
      i === -1
        ? ((c & a) === 0 || (c & u) !== 0) && (e[f] = Gy(c, t))
        : i <= t && (l.expiredLanes |= c),
        (n &= ~c);
    }
    if (
      ((t = gl),
      (a = P),
      (a = pe(
        l,
        l === t ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      (u = l.callbackNode),
      a === 0 ||
        (l === t && (dl === 2 || dl === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        u !== null && u !== null && kn(u),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((a & 3) === 0 || Uu(l, a)) {
      if (((t = a & -a), t === l.callbackPriority)) return t;
      switch ((u !== null && kn(u), Pn(a))) {
        case 2:
        case 8:
          a = zi;
          break;
        case 32:
          a = Ae;
          break;
        case 268435456:
          a = Ei;
          break;
        default:
          a = Ae;
      }
      return (
        (u = Hd.bind(null, l)),
        (a = Wn(a, u)),
        (l.callbackPriority = t),
        (l.callbackNode = a),
        t
      );
    }
    return (
      u !== null && u !== null && kn(u),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function Hd(l, t) {
    if (Nl !== 0 && Nl !== 5)
      return (l.callbackNode = null), (l.callbackPriority = 0), null;
    var a = l.callbackNode;
    if (Tn() && l.callbackNode !== a) return null;
    var u = P;
    return (
      (u = pe(
        l,
        l === gl ? u : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      u === 0
        ? null
        : (od(l, u, t),
          Nd(l, ut()),
          l.callbackNode != null && l.callbackNode === a
            ? Hd.bind(null, l)
            : null)
    );
  }
  function jd(l, t) {
    if (Tn()) return null;
    od(l, t, !0);
  }
  function vm() {
    Mm(function () {
      (nl & 6) !== 0 ? Wn(bi, mm) : Ud();
    });
  }
  function Qc() {
    if (ga === 0) {
      var l = cu;
      l === 0 && ((l = _e), (_e <<= 1), (_e & 261888) === 0 && (_e = 256)),
        (ga = l);
    }
    return ga;
  }
  function Cd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
      ? l
      : He("" + l);
  }
  function Rd(l, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      l.id && a.setAttribute("form", l.id),
      t.parentNode.insertBefore(a, t),
      (l = new FormData(l)),
      a.parentNode.removeChild(a),
      l
    );
  }
  function hm(l, t, a, u, e) {
    if (t === "submit" && a && a.stateNode === e) {
      var n = Cd((e[$l] || null).action),
        f = u.submitter;
      f &&
        ((t = (t = f[$l] || null)
          ? Cd(t.formAction)
          : f.getAttribute("formAction")),
        t !== null && ((n = t), (f = null)));
      var c = new qe("action", "action", null, u, e);
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (u.defaultPrevented) {
                if (ga !== 0) {
                  var i = f ? Rd(e, f) : new FormData(e);
                  fc(
                    a,
                    { pending: !0, data: i, method: e.method, action: n },
                    null,
                    i
                  );
                }
              } else
                typeof n == "function" &&
                  (c.preventDefault(),
                  (i = f ? Rd(e, f) : new FormData(e)),
                  fc(
                    a,
                    { pending: !0, data: i, method: e.method, action: n },
                    n,
                    i
                  ));
            },
            currentTarget: e,
          },
        ],
      });
    }
  }
  for (var Xc = 0; Xc < Af.length; Xc++) {
    var Zc = Af[Xc],
      gm = Zc.toLowerCase(),
      rm = Zc[0].toUpperCase() + Zc.slice(1);
    Mt(gm, "on" + rm);
  }
  Mt(ys, "onAnimationEnd"),
    Mt(os, "onAnimationIteration"),
    Mt(ms, "onAnimationStart"),
    Mt("dblclick", "onDoubleClick"),
    Mt("focusin", "onFocus"),
    Mt("focusout", "onBlur"),
    Mt(Co, "onTransitionRun"),
    Mt(Ro, "onTransitionStart"),
    Mt(qo, "onTransitionCancel"),
    Mt(vs, "onTransitionEnd"),
    wa("onMouseEnter", ["mouseout", "mouseover"]),
    wa("onMouseLeave", ["mouseout", "mouseover"]),
    wa("onPointerEnter", ["pointerout", "pointerover"]),
    wa("onPointerLeave", ["pointerout", "pointerover"]),
    Oa(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Oa(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Oa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Oa(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Oa(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Oa(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var ye =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Sm = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(ye)
    );
  function qd(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var u = l[a],
        e = u.event;
      u = u.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = u.length - 1; 0 <= f; f--) {
            var c = u[f],
              i = c.instance,
              v = c.currentTarget;
            if (((c = c.listener), i !== n && e.isPropagationStopped()))
              break l;
            (n = c), (e.currentTarget = v);
            try {
              n(e);
            } catch (S) {
              xe(S);
            }
            (e.currentTarget = null), (n = i);
          }
        else
          for (f = 0; f < u.length; f++) {
            if (
              ((c = u[f]),
              (i = c.instance),
              (v = c.currentTarget),
              (c = c.listener),
              i !== n && e.isPropagationStopped())
            )
              break l;
            (n = c), (e.currentTarget = v);
            try {
              n(e);
            } catch (S) {
              xe(S);
            }
            (e.currentTarget = null), (n = i);
          }
      }
    }
  }
  function I(l, t) {
    var a = t[lf];
    a === void 0 && (a = t[lf] = new Set());
    var u = l + "__bubble";
    a.has(u) || (Bd(t, l, 2, !1), a.add(u));
  }
  function Vc(l, t, a) {
    var u = 0;
    t && (u |= 4), Bd(a, l, u, t);
  }
  var On = "_reactListening" + Math.random().toString(36).slice(2);
  function Lc(l) {
    if (!l[On]) {
      (l[On] = !0),
        Ui.forEach(function (a) {
          a !== "selectionchange" && (Sm.has(a) || Vc(a, !1, l), Vc(a, !0, l));
        });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[On] || ((t[On] = !0), Vc("selectionchange", !1, t));
    }
  }
  function Bd(l, t, a, u) {
    switch (yy(t)) {
      case 2:
        var e = Jm;
        break;
      case 8:
        e = wm;
        break;
      default:
        e = ni;
    }
    (a = e.bind(null, t, a, l)),
      (e = void 0),
      !df ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (e = !0),
      u
        ? e !== void 0
          ? l.addEventListener(t, a, { capture: !0, passive: e })
          : l.addEventListener(t, a, !0)
        : e !== void 0
        ? l.addEventListener(t, a, { passive: e })
        : l.addEventListener(t, a, !1);
  }
  function Kc(l, t, a, u, e) {
    var n = u;
    if ((t & 1) === 0 && (t & 2) === 0 && u !== null)
      l: for (;;) {
        if (u === null) return;
        var f = u.tag;
        if (f === 3 || f === 4) {
          var c = u.stateNode.containerInfo;
          if (c === e) break;
          if (f === 4)
            for (f = u.return; f !== null; ) {
              var i = f.tag;
              if ((i === 3 || i === 4) && f.stateNode.containerInfo === e)
                return;
              f = f.return;
            }
          for (; c !== null; ) {
            if (((f = La(c)), f === null)) return;
            if (((i = f.tag), i === 5 || i === 6 || i === 26 || i === 27)) {
              u = n = f;
              continue l;
            }
            c = c.parentNode;
          }
        }
        u = u.return;
      }
    Xi(function () {
      var v = n,
        S = cf(a),
        E = [];
      l: {
        var g = hs.get(l);
        if (g !== void 0) {
          var r = qe,
            U = l;
          switch (l) {
            case "keypress":
              if (Ce(a) === 0) break l;
            case "keydown":
            case "keyup":
              r = yo;
              break;
            case "focusin":
              (U = "focus"), (r = vf);
              break;
            case "focusout":
              (U = "blur"), (r = vf);
              break;
            case "beforeblur":
            case "afterblur":
              r = vf;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              r = Li;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              r = Iy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              r = vo;
              break;
            case ys:
            case os:
            case ms:
              r = to;
              break;
            case vs:
              r = go;
              break;
            case "scroll":
            case "scrollend":
              r = ky;
              break;
            case "wheel":
              r = So;
              break;
            case "copy":
            case "cut":
            case "paste":
              r = uo;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              r = Ji;
              break;
            case "toggle":
            case "beforetoggle":
              r = zo;
          }
          var q = (t & 4) !== 0,
            vl = !q && (l === "scroll" || l === "scrollend"),
            y = q ? (g !== null ? g + "Capture" : null) : g;
          q = [];
          for (var d = v, m; d !== null; ) {
            var b = d;
            if (
              ((m = b.stateNode),
              (b = b.tag),
              (b !== 5 && b !== 26 && b !== 27) ||
                m === null ||
                y === null ||
                ((b = Cu(d, y)), b != null && q.push(oe(d, b, m))),
              vl)
            )
              break;
            d = d.return;
          }
          0 < q.length &&
            ((g = new r(g, U, null, a, S)), E.push({ event: g, listeners: q }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((g = l === "mouseover" || l === "pointerover"),
            (r = l === "mouseout" || l === "pointerout"),
            g &&
              a !== ff &&
              (U = a.relatedTarget || a.fromElement) &&
              (La(U) || U[Va]))
          )
            break l;
          if (
            (r || g) &&
            ((g =
              S.window === S
                ? S
                : (g = S.ownerDocument)
                ? g.defaultView || g.parentWindow
                : window),
            r
              ? ((U = a.relatedTarget || a.toElement),
                (r = v),
                (U = U ? La(U) : null),
                U !== null &&
                  ((vl = $(U)),
                  (q = U.tag),
                  U !== vl || (q !== 5 && q !== 27 && q !== 6)) &&
                  (U = null))
              : ((r = null), (U = v)),
            r !== U)
          ) {
            if (
              ((q = Li),
              (b = "onMouseLeave"),
              (y = "onMouseEnter"),
              (d = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((q = Ji),
                (b = "onPointerLeave"),
                (y = "onPointerEnter"),
                (d = "pointer")),
              (vl = r == null ? g : ju(r)),
              (m = U == null ? g : ju(U)),
              (g = new q(b, d + "leave", r, a, S)),
              (g.target = vl),
              (g.relatedTarget = m),
              (b = null),
              La(S) === v &&
                ((q = new q(y, d + "enter", U, a, S)),
                (q.target = m),
                (q.relatedTarget = vl),
                (b = q)),
              (vl = b),
              r && U)
            )
              t: {
                for (q = bm, y = r, d = U, m = 0, b = y; b; b = q(b)) m++;
                b = 0;
                for (var C = d; C; C = q(C)) b++;
                for (; 0 < m - b; ) (y = q(y)), m--;
                for (; 0 < b - m; ) (d = q(d)), b--;
                for (; m--; ) {
                  if (y === d || (d !== null && y === d.alternate)) {
                    q = y;
                    break t;
                  }
                  (y = q(y)), (d = q(d));
                }
                q = null;
              }
            else q = null;
            r !== null && Yd(E, g, r, q, !1),
              U !== null && vl !== null && Yd(E, vl, U, q, !0);
          }
        }
        l: {
          if (
            ((g = v ? ju(v) : window),
            (r = g.nodeName && g.nodeName.toLowerCase()),
            r === "select" || (r === "input" && g.type === "file"))
          )
            var ul = ls;
          else if (Ii(g))
            if (ts) ul = No;
            else {
              ul = Do;
              var j = po;
            }
          else
            (r = g.nodeName),
              !r ||
              r.toLowerCase() !== "input" ||
              (g.type !== "checkbox" && g.type !== "radio")
                ? v && nf(v.elementType) && (ul = ls)
                : (ul = Uo);
          if (ul && (ul = ul(l, v))) {
            Pi(E, ul, a, S);
            break l;
          }
          j && j(l, g, v),
            l === "focusout" &&
              v &&
              g.type === "number" &&
              v.memoizedProps.value != null &&
              ef(g, "number", g.value);
        }
        switch (((j = v ? ju(v) : window), l)) {
          case "focusin":
            (Ii(j) || j.contentEditable === "true") &&
              ((Pa = j), (zf = v), (Xu = null));
            break;
          case "focusout":
            Xu = zf = Pa = null;
            break;
          case "mousedown":
            Ef = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Ef = !1), ss(E, a, S);
            break;
          case "selectionchange":
            if (jo) break;
          case "keydown":
          case "keyup":
            ss(E, a, S);
        }
        var w;
        if (gf)
          l: {
            switch (l) {
              case "compositionstart":
                var ll = "onCompositionStart";
                break l;
              case "compositionend":
                ll = "onCompositionEnd";
                break l;
              case "compositionupdate":
                ll = "onCompositionUpdate";
                break l;
            }
            ll = void 0;
          }
        else
          Ia
            ? ki(l, a) && (ll = "onCompositionEnd")
            : l === "keydown" &&
              a.keyCode === 229 &&
              (ll = "onCompositionStart");
        ll &&
          (wi &&
            a.locale !== "ko" &&
            (Ia || ll !== "onCompositionStart"
              ? ll === "onCompositionEnd" && Ia && (w = Zi())
              : ((la = S),
                (yf = "value" in la ? la.value : la.textContent),
                (Ia = !0))),
          (j = Mn(v, ll)),
          0 < j.length &&
            ((ll = new Ki(ll, l, null, a, S)),
            E.push({ event: ll, listeners: j }),
            w ? (ll.data = w) : ((w = Fi(a)), w !== null && (ll.data = w)))),
          (w = To ? Ao(l, a) : _o(l, a)) &&
            ((ll = Mn(v, "onBeforeInput")),
            0 < ll.length &&
              ((j = new Ki("onBeforeInput", "beforeinput", null, a, S)),
              E.push({ event: j, listeners: ll }),
              (j.data = w))),
          hm(E, l, v, a, S);
      }
      qd(E, t);
    });
  }
  function oe(l, t, a) {
    return { instance: l, listener: t, currentTarget: a };
  }
  function Mn(l, t) {
    for (var a = t + "Capture", u = []; l !== null; ) {
      var e = l,
        n = e.stateNode;
      if (
        ((e = e.tag),
        (e !== 5 && e !== 26 && e !== 27) ||
          n === null ||
          ((e = Cu(l, a)),
          e != null && u.unshift(oe(l, e, n)),
          (e = Cu(l, t)),
          e != null && u.push(oe(l, e, n))),
        l.tag === 3)
      )
        return u;
      l = l.return;
    }
    return [];
  }
  function bm(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Yd(l, t, a, u, e) {
    for (var n = t._reactName, f = []; a !== null && a !== u; ) {
      var c = a,
        i = c.alternate,
        v = c.stateNode;
      if (((c = c.tag), i !== null && i === u)) break;
      (c !== 5 && c !== 26 && c !== 27) ||
        v === null ||
        ((i = v),
        e
          ? ((v = Cu(a, n)), v != null && f.unshift(oe(a, v, i)))
          : e || ((v = Cu(a, n)), v != null && f.push(oe(a, v, i)))),
        (a = a.return);
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var zm = /\r\n?/g,
    Em = /\u0000|\uFFFD/g;
  function xd(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        zm,
        `
`
      )
      .replace(Em, "");
  }
  function Gd(l, t) {
    return (t = xd(t)), xd(l) === t;
  }
  function ml(l, t, a, u, e, n) {
    switch (a) {
      case "children":
        typeof u == "string"
          ? t === "body" || (t === "textarea" && u === "") || Wa(l, u)
          : (typeof u == "number" || typeof u == "bigint") &&
            t !== "body" &&
            Wa(l, "" + u);
        break;
      case "className":
        Ue(l, "class", u);
        break;
      case "tabIndex":
        Ue(l, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ue(l, a, u);
        break;
      case "style":
        Gi(l, u, n);
        break;
      case "data":
        if (t !== "object") {
          Ue(l, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "symbol" ||
          typeof u == "boolean"
        ) {
          l.removeAttribute(a);
          break;
        }
        (u = He("" + u)), l.setAttribute(a, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" &&
            (a === "formAction"
              ? (t !== "input" && ml(l, t, "name", e.name, e, null),
                ml(l, t, "formEncType", e.formEncType, e, null),
                ml(l, t, "formMethod", e.formMethod, e, null),
                ml(l, t, "formTarget", e.formTarget, e, null))
              : (ml(l, t, "encType", e.encType, e, null),
                ml(l, t, "method", e.method, e, null),
                ml(l, t, "target", e.target, e, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        (u = He("" + u)), l.setAttribute(a, u);
        break;
      case "onClick":
        u != null && (l.onclick = qt);
        break;
      case "onScroll":
        u != null && I("scroll", l);
        break;
      case "onScrollEnd":
        u != null && I("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(h(61));
          if (((a = u.__html), a != null)) {
            if (e.children != null) throw Error(h(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        l.muted = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "boolean" ||
          typeof u == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        (a = He("" + u)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol"
          ? l.setAttribute(a, "" + u)
          : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        u && typeof u != "function" && typeof u != "symbol"
          ? l.setAttribute(a, "")
          : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        u === !0
          ? l.setAttribute(a, "")
          : u !== !1 &&
            u != null &&
            typeof u != "function" &&
            typeof u != "symbol"
          ? l.setAttribute(a, u)
          : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        !isNaN(u) &&
        1 <= u
          ? l.setAttribute(a, u)
          : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u)
          ? l.removeAttribute(a)
          : l.setAttribute(a, u);
        break;
      case "popover":
        I("beforetoggle", l), I("toggle", l), De(l, "popover", u);
        break;
      case "xlinkActuate":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
        break;
      case "xlinkArcrole":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
        break;
      case "xlinkRole":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:role", u);
        break;
      case "xlinkShow":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:show", u);
        break;
      case "xlinkTitle":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:title", u);
        break;
      case "xlinkType":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:type", u);
        break;
      case "xmlBase":
        Rt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
        break;
      case "xmlLang":
        Rt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
        break;
      case "xmlSpace":
        Rt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
        break;
      case "is":
        De(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = $y.get(a) || a), De(l, a, u));
    }
  }
  function Jc(l, t, a, u, e, n) {
    switch (a) {
      case "style":
        Gi(l, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(h(61));
          if (((a = u.__html), a != null)) {
            if (e.children != null) throw Error(h(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string"
          ? Wa(l, u)
          : (typeof u == "number" || typeof u == "bigint") && Wa(l, "" + u);
        break;
      case "onScroll":
        u != null && I("scroll", l);
        break;
      case "onScrollEnd":
        u != null && I("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = qt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Ni.hasOwnProperty(a))
          l: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((e = a.endsWith("Capture")),
              (t = a.slice(2, e ? a.length - 7 : void 0)),
              (n = l[$l] || null),
              (n = n != null ? n[a] : null),
              typeof n == "function" && l.removeEventListener(t, n, e),
              typeof u == "function")
            ) {
              typeof n != "function" &&
                n !== null &&
                (a in l
                  ? (l[a] = null)
                  : l.hasAttribute(a) && l.removeAttribute(a)),
                l.addEventListener(t, u, e);
              break l;
            }
            a in l
              ? (l[a] = u)
              : u === !0
              ? l.setAttribute(a, "")
              : De(l, a, u);
          }
    }
  }
  function Gl(l, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        I("error", l), I("load", l);
        var u = !1,
          e = !1,
          n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var f = a[n];
            if (f != null)
              switch (n) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(h(137, t));
                default:
                  ml(l, t, n, f, a, null);
              }
          }
        e && ml(l, t, "srcSet", a.srcSet, a, null),
          u && ml(l, t, "src", a.src, a, null);
        return;
      case "input":
        I("invalid", l);
        var c = (n = f = e = null),
          i = null,
          v = null;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var S = a[u];
            if (S != null)
              switch (u) {
                case "name":
                  e = S;
                  break;
                case "type":
                  f = S;
                  break;
                case "checked":
                  i = S;
                  break;
                case "defaultChecked":
                  v = S;
                  break;
                case "value":
                  n = S;
                  break;
                case "defaultValue":
                  c = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null) throw Error(h(137, t));
                  break;
                default:
                  ml(l, t, u, S, a, null);
              }
          }
        qi(l, n, c, i, v, f, e, !1);
        return;
      case "select":
        I("invalid", l), (u = f = n = null);
        for (e in a)
          if (a.hasOwnProperty(e) && ((c = a[e]), c != null))
            switch (e) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                f = c;
                break;
              case "multiple":
                u = c;
              default:
                ml(l, t, e, c, a, null);
            }
        (t = n),
          (a = f),
          (l.multiple = !!u),
          t != null ? $a(l, !!u, t, !1) : a != null && $a(l, !!u, a, !0);
        return;
      case "textarea":
        I("invalid", l), (n = e = u = null);
        for (f in a)
          if (a.hasOwnProperty(f) && ((c = a[f]), c != null))
            switch (f) {
              case "value":
                u = c;
                break;
              case "defaultValue":
                e = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(h(91));
                break;
              default:
                ml(l, t, f, c, a, null);
            }
        Yi(l, u, e, n);
        return;
      case "option":
        for (i in a)
          if (a.hasOwnProperty(i) && ((u = a[i]), u != null))
            switch (i) {
              case "selected":
                l.selected =
                  u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                ml(l, t, i, u, a, null);
            }
        return;
      case "dialog":
        I("beforetoggle", l), I("toggle", l), I("cancel", l), I("close", l);
        break;
      case "iframe":
      case "object":
        I("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ye.length; u++) I(ye[u], l);
        break;
      case "image":
        I("error", l), I("load", l);
        break;
      case "details":
        I("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        I("error", l), I("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (v in a)
          if (a.hasOwnProperty(v) && ((u = a[v]), u != null))
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(h(137, t));
              default:
                ml(l, t, v, u, a, null);
            }
        return;
      default:
        if (nf(t)) {
          for (S in a)
            a.hasOwnProperty(S) &&
              ((u = a[S]), u !== void 0 && Jc(l, t, S, u, a, void 0));
          return;
        }
    }
    for (c in a)
      a.hasOwnProperty(c) && ((u = a[c]), u != null && ml(l, t, c, u, a, null));
  }
  function Tm(l, t, a, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null,
          n = null,
          f = null,
          c = null,
          i = null,
          v = null,
          S = null;
        for (r in a) {
          var E = a[r];
          if (a.hasOwnProperty(r) && E != null)
            switch (r) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = E;
              default:
                u.hasOwnProperty(r) || ml(l, t, r, null, u, E);
            }
        }
        for (var g in u) {
          var r = u[g];
          if (((E = a[g]), u.hasOwnProperty(g) && (r != null || E != null)))
            switch (g) {
              case "type":
                n = r;
                break;
              case "name":
                e = r;
                break;
              case "checked":
                v = r;
                break;
              case "defaultChecked":
                S = r;
                break;
              case "value":
                f = r;
                break;
              case "defaultValue":
                c = r;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(h(137, t));
                break;
              default:
                r !== E && ml(l, t, g, r, u, E);
            }
        }
        uf(l, f, c, i, v, S, n, e);
        return;
      case "select":
        r = f = c = g = null;
        for (n in a)
          if (((i = a[n]), a.hasOwnProperty(n) && i != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                r = i;
              default:
                u.hasOwnProperty(n) || ml(l, t, n, null, u, i);
            }
        for (e in u)
          if (
            ((n = u[e]),
            (i = a[e]),
            u.hasOwnProperty(e) && (n != null || i != null))
          )
            switch (e) {
              case "value":
                g = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                f = n;
              default:
                n !== i && ml(l, t, e, n, u, i);
            }
        (t = c),
          (a = f),
          (u = r),
          g != null
            ? $a(l, !!a, g, !1)
            : !!u != !!a &&
              (t != null ? $a(l, !!a, t, !0) : $a(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        r = g = null;
        for (c in a)
          if (
            ((e = a[c]),
            a.hasOwnProperty(c) && e != null && !u.hasOwnProperty(c))
          )
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                ml(l, t, c, null, u, e);
            }
        for (f in u)
          if (
            ((e = u[f]),
            (n = a[f]),
            u.hasOwnProperty(f) && (e != null || n != null))
          )
            switch (f) {
              case "value":
                g = e;
                break;
              case "defaultValue":
                r = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(h(91));
                break;
              default:
                e !== n && ml(l, t, f, e, u, n);
            }
        Bi(l, g, r);
        return;
      case "option":
        for (var U in a)
          if (
            ((g = a[U]),
            a.hasOwnProperty(U) && g != null && !u.hasOwnProperty(U))
          )
            switch (U) {
              case "selected":
                l.selected = !1;
                break;
              default:
                ml(l, t, U, null, u, g);
            }
        for (i in u)
          if (
            ((g = u[i]),
            (r = a[i]),
            u.hasOwnProperty(i) && g !== r && (g != null || r != null))
          )
            switch (i) {
              case "selected":
                l.selected =
                  g && typeof g != "function" && typeof g != "symbol";
                break;
              default:
                ml(l, t, i, g, u, r);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var q in a)
          (g = a[q]),
            a.hasOwnProperty(q) &&
              g != null &&
              !u.hasOwnProperty(q) &&
              ml(l, t, q, null, u, g);
        for (v in u)
          if (
            ((g = u[v]),
            (r = a[v]),
            u.hasOwnProperty(v) && g !== r && (g != null || r != null))
          )
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(h(137, t));
                break;
              default:
                ml(l, t, v, g, u, r);
            }
        return;
      default:
        if (nf(t)) {
          for (var vl in a)
            (g = a[vl]),
              a.hasOwnProperty(vl) &&
                g !== void 0 &&
                !u.hasOwnProperty(vl) &&
                Jc(l, t, vl, void 0, u, g);
          for (S in u)
            (g = u[S]),
              (r = a[S]),
              !u.hasOwnProperty(S) ||
                g === r ||
                (g === void 0 && r === void 0) ||
                Jc(l, t, S, g, u, r);
          return;
        }
    }
    for (var y in a)
      (g = a[y]),
        a.hasOwnProperty(y) &&
          g != null &&
          !u.hasOwnProperty(y) &&
          ml(l, t, y, null, u, g);
    for (E in u)
      (g = u[E]),
        (r = a[E]),
        !u.hasOwnProperty(E) ||
          g === r ||
          (g == null && r == null) ||
          ml(l, t, E, g, u, r);
  }
  function Qd(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Am() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var l = 0, t = 0, a = performance.getEntriesByType("resource"), u = 0;
        u < a.length;
        u++
      ) {
        var e = a[u],
          n = e.transferSize,
          f = e.initiatorType,
          c = e.duration;
        if (n && c && Qd(f)) {
          for (f = 0, c = e.responseEnd, u += 1; u < a.length; u++) {
            var i = a[u],
              v = i.startTime;
            if (v > c) break;
            var S = i.transferSize,
              E = i.initiatorType;
            S &&
              Qd(E) &&
              ((i = i.responseEnd), (f += S * (i < c ? 1 : (c - v) / (i - v))));
          }
          if ((--u, (t += (8 * (n + f)) / (e.duration / 1e3)), l++, 10 < l))
            break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection &&
      ((l = navigator.connection.downlink), typeof l == "number")
      ? l
      : 5;
  }
  var wc = null,
    $c = null;
  function pn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Xd(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Zd(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Wc(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var kc = null;
  function _m() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === kc
        ? !1
        : ((kc = l), !0)
      : ((kc = null), !1);
  }
  var Vd = typeof setTimeout == "function" ? setTimeout : void 0,
    Om = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ld = typeof Promise == "function" ? Promise : void 0,
    Mm =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ld < "u"
        ? function (l) {
            return Ld.resolve(null).then(l).catch(pm);
          }
        : Vd;
  function pm(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function ra(l) {
    return l === "head";
  }
  function Kd(l, t) {
    var a = t,
      u = 0;
    do {
      var e = a.nextSibling;
      if ((l.removeChild(a), e && e.nodeType === 8))
        if (((a = e.data), a === "/$" || a === "/&")) {
          if (u === 0) {
            l.removeChild(e), Mu(t);
            return;
          }
          u--;
        } else if (
          a === "$" ||
          a === "$?" ||
          a === "$~" ||
          a === "$!" ||
          a === "&"
        )
          u++;
        else if (a === "html") me(l.ownerDocument.documentElement);
        else if (a === "head") {
          (a = l.ownerDocument.head), me(a);
          for (var n = a.firstChild; n; ) {
            var f = n.nextSibling,
              c = n.nodeName;
            n[Hu] ||
              c === "SCRIPT" ||
              c === "STYLE" ||
              (c === "LINK" && n.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(n),
              (n = f);
          }
        } else a === "body" && me(l.ownerDocument.body);
      a = e;
    } while (a);
    Mu(t);
  }
  function Jd(l, t) {
    var a = l;
    l = 0;
    do {
      var u = a.nextSibling;
      if (
        (a.nodeType === 1
          ? t
            ? ((a._stashedDisplay = a.style.display),
              (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (t
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        u && u.nodeType === 8)
      )
        if (((a = u.data), a === "/$")) {
          if (l === 0) break;
          l--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || l++;
      a = u;
    } while (a);
  }
  function Fc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Fc(a), tf(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function Dm(l, t, a, u) {
    for (; l.nodeType === 1; ) {
      var e = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (u) {
        if (!l[Hu])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== e.rel ||
                l.getAttribute("href") !==
                  (e.href == null || e.href === "" ? null : e.href) ||
                l.getAttribute("crossorigin") !==
                  (e.crossOrigin == null ? null : e.crossOrigin) ||
                l.getAttribute("title") !== (e.title == null ? null : e.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (e.src == null ? null : e.src) ||
                  l.getAttribute("type") !== (e.type == null ? null : e.type) ||
                  l.getAttribute("crossorigin") !==
                    (e.crossOrigin == null ? null : e.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = Tt(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function Um(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !a) ||
        ((l = Tt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function wd(l, t) {
    for (; l.nodeType !== 8; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !t) ||
        ((l = Tt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Ic(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Pc(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState !== "loading")
    );
  }
  function Nm(l, t) {
    var a = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || a.readyState !== "loading") t();
    else {
      var u = function () {
        t(), a.removeEventListener("DOMContentLoaded", u);
      };
      a.addEventListener("DOMContentLoaded", u), (l._reactRetry = u);
    }
  }
  function Tt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var li = null;
  function $d(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return Tt(l.nextSibling);
          t--;
        } else
          (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") ||
            t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Wd(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return l;
          t--;
        } else (a !== "/$" && a !== "/&") || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function kd(l, t, a) {
    switch (((t = pn(a)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(h(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(h(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(h(454));
        return l;
      default:
        throw Error(h(451));
    }
  }
  function me(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    tf(l);
  }
  var At = new Map(),
    Fd = new Set();
  function Dn(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
      ? l
      : l.ownerDocument;
  }
  var Ft = A.d;
  A.d = { f: Hm, r: jm, D: Cm, C: Rm, L: qm, m: Bm, X: xm, S: Ym, M: Gm };
  function Hm() {
    var l = Ft.f(),
      t = bn();
    return l || t;
  }
  function jm(l) {
    var t = Ka(l);
    t !== null && t.tag === 5 && t.type === "form" ? v0(t) : Ft.r(l);
  }
  var Au = typeof document > "u" ? null : document;
  function Id(l, t, a) {
    var u = Au;
    if (u && typeof t == "string" && t) {
      var e = ht(t);
      (e = 'link[rel="' + l + '"][href="' + e + '"]'),
        typeof a == "string" && (e += '[crossorigin="' + a + '"]'),
        Fd.has(e) ||
          (Fd.add(e),
          (l = { rel: l, crossOrigin: a, href: t }),
          u.querySelector(e) === null &&
            ((t = u.createElement("link")),
            Gl(t, "link", l),
            Hl(t),
            u.head.appendChild(t)));
    }
  }
  function Cm(l) {
    Ft.D(l), Id("dns-prefetch", l, null);
  }
  function Rm(l, t) {
    Ft.C(l, t), Id("preconnect", l, t);
  }
  function qm(l, t, a) {
    Ft.L(l, t, a);
    var u = Au;
    if (u && l && t) {
      var e = 'link[rel="preload"][as="' + ht(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((e += '[imagesrcset="' + ht(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (e += '[imagesizes="' + ht(a.imageSizes) + '"]'))
        : (e += '[href="' + ht(l) + '"]');
      var n = e;
      switch (t) {
        case "style":
          n = _u(l);
          break;
        case "script":
          n = Ou(l);
      }
      At.has(n) ||
        ((l = H(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : l,
            as: t,
          },
          a
        )),
        At.set(n, l),
        u.querySelector(e) !== null ||
          (t === "style" && u.querySelector(ve(n))) ||
          (t === "script" && u.querySelector(he(n))) ||
          ((t = u.createElement("link")),
          Gl(t, "link", l),
          Hl(t),
          u.head.appendChild(t)));
    }
  }
  function Bm(l, t) {
    Ft.m(l, t);
    var a = Au;
    if (a && l) {
      var u = t && typeof t.as == "string" ? t.as : "script",
        e =
          'link[rel="modulepreload"][as="' + ht(u) + '"][href="' + ht(l) + '"]',
        n = e;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Ou(l);
      }
      if (
        !At.has(n) &&
        ((l = H({ rel: "modulepreload", href: l }, t)),
        At.set(n, l),
        a.querySelector(e) === null)
      ) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(he(n))) return;
        }
        (u = a.createElement("link")),
          Gl(u, "link", l),
          Hl(u),
          a.head.appendChild(u);
      }
    }
  }
  function Ym(l, t, a) {
    Ft.S(l, t, a);
    var u = Au;
    if (u && l) {
      var e = Ja(u).hoistableStyles,
        n = _u(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if ((f = u.querySelector(ve(n)))) c.loading = 5;
        else {
          (l = H({ rel: "stylesheet", href: l, "data-precedence": t }, a)),
            (a = At.get(n)) && ti(l, a);
          var i = (f = u.createElement("link"));
          Hl(i),
            Gl(i, "link", l),
            (i._p = new Promise(function (v, S) {
              (i.onload = v), (i.onerror = S);
            })),
            i.addEventListener("load", function () {
              c.loading |= 1;
            }),
            i.addEventListener("error", function () {
              c.loading |= 2;
            }),
            (c.loading |= 4),
            Un(f, t, u);
        }
        (f = { type: "stylesheet", instance: f, count: 1, state: c }),
          e.set(n, f);
      }
    }
  }
  function xm(l, t) {
    Ft.X(l, t);
    var a = Au;
    if (a && l) {
      var u = Ja(a).hoistableScripts,
        e = Ou(l),
        n = u.get(e);
      n ||
        ((n = a.querySelector(he(e))),
        n ||
          ((l = H({ src: l, async: !0 }, t)),
          (t = At.get(e)) && ai(l, t),
          (n = a.createElement("script")),
          Hl(n),
          Gl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(e, n));
    }
  }
  function Gm(l, t) {
    Ft.M(l, t);
    var a = Au;
    if (a && l) {
      var u = Ja(a).hoistableScripts,
        e = Ou(l),
        n = u.get(e);
      n ||
        ((n = a.querySelector(he(e))),
        n ||
          ((l = H({ src: l, async: !0, type: "module" }, t)),
          (t = At.get(e)) && ai(l, t),
          (n = a.createElement("script")),
          Hl(n),
          Gl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(e, n));
    }
  }
  function Pd(l, t, a, u) {
    var e = (e = k.current) ? Dn(e) : null;
    if (!e) throw Error(h(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = _u(a.href)),
            (a = Ja(e).hoistableStyles),
            (u = a.get(t)),
            u ||
              ((u = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, u)),
            u)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          l = _u(a.href);
          var n = Ja(e).hoistableStyles,
            f = n.get(l);
          if (
            (f ||
              ((e = e.ownerDocument || e),
              (f = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, f),
              (n = e.querySelector(ve(l))) &&
                !n._p &&
                ((f.instance = n), (f.state.loading = 5)),
              At.has(l) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                At.set(l, a),
                n || Qm(e, l, a, f.state))),
            t && u === null)
          )
            throw Error(h(528, ""));
          return f;
        }
        if (t && u !== null) throw Error(h(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Ou(a)),
              (a = Ja(e).hoistableScripts),
              (u = a.get(t)),
              u ||
                ((u = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, u)),
              u)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(h(444, l));
    }
  }
  function _u(l) {
    return 'href="' + ht(l) + '"';
  }
  function ve(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function ly(l) {
    return H({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function Qm(l, t, a, u) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (u.loading = 1)
      : ((t = l.createElement("link")),
        (u.preload = t),
        t.addEventListener("load", function () {
          return (u.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (u.loading |= 2);
        }),
        Gl(t, "link", a),
        Hl(t),
        l.head.appendChild(t));
  }
  function Ou(l) {
    return '[src="' + ht(l) + '"]';
  }
  function he(l) {
    return "script[async]" + l;
  }
  function ty(l, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var u = l.querySelector('style[data-href~="' + ht(a.href) + '"]');
          if (u) return (t.instance = u), Hl(u), u;
          var e = H({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (u = (l.ownerDocument || l).createElement("style")),
            Hl(u),
            Gl(u, "style", e),
            Un(u, a.precedence, l),
            (t.instance = u)
          );
        case "stylesheet":
          e = _u(a.href);
          var n = l.querySelector(ve(e));
          if (n) return (t.state.loading |= 4), (t.instance = n), Hl(n), n;
          (u = ly(a)),
            (e = At.get(e)) && ti(u, e),
            (n = (l.ownerDocument || l).createElement("link")),
            Hl(n);
          var f = n;
          return (
            (f._p = new Promise(function (c, i) {
              (f.onload = c), (f.onerror = i);
            })),
            Gl(n, "link", u),
            (t.state.loading |= 4),
            Un(n, a.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = Ou(a.src)),
            (e = l.querySelector(he(n)))
              ? ((t.instance = e), Hl(e), e)
              : ((u = a),
                (e = At.get(n)) && ((u = H({}, a)), ai(u, e)),
                (l = l.ownerDocument || l),
                (e = l.createElement("script")),
                Hl(e),
                Gl(e, "link", u),
                l.head.appendChild(e),
                (t.instance = e))
          );
        case "void":
          return null;
        default:
          throw Error(h(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((u = t.instance), (t.state.loading |= 4), Un(u, a.precedence, l));
    return t.instance;
  }
  function Un(l, t, a) {
    for (
      var u = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        e = u.length ? u[u.length - 1] : null,
        n = e,
        f = 0;
      f < u.length;
      f++
    ) {
      var c = u[f];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(l, t.firstChild));
  }
  function ti(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title);
  }
  function ai(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity);
  }
  var Nn = null;
  function ay(l, t, a) {
    if (Nn === null) {
      var u = new Map(),
        e = (Nn = new Map());
      e.set(a, u);
    } else (e = Nn), (u = e.get(a)), u || ((u = new Map()), e.set(a, u));
    if (u.has(l)) return u;
    for (
      u.set(l, null), a = a.getElementsByTagName(l), e = 0;
      e < a.length;
      e++
    ) {
      var n = a[e];
      if (
        !(
          n[Hu] ||
          n[ql] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var c = u.get(f);
        c ? c.push(n) : u.set(f, [n]);
      }
    }
    return u;
  }
  function uy(l, t, a) {
    (l = l.ownerDocument || l),
      l.head.insertBefore(
        a,
        t === "title" ? l.querySelector("head > title") : null
      );
  }
  function Xm(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (l = t.disabled), typeof t.precedence == "string" && l == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function ey(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Zm(l, t, a, u) {
    if (
      a.type === "stylesheet" &&
      (typeof u.media != "string" || matchMedia(u.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var e = _u(u.href),
          n = t.querySelector(ve(e));
        if (n) {
          (t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = Hn.bind(l)), t.then(l, l)),
            (a.state.loading |= 4),
            (a.instance = n),
            Hl(n);
          return;
        }
        (n = t.ownerDocument || t),
          (u = ly(u)),
          (e = At.get(e)) && ti(u, e),
          (n = n.createElement("link")),
          Hl(n);
        var f = n;
        (f._p = new Promise(function (c, i) {
          (f.onload = c), (f.onerror = i);
        })),
          Gl(n, "link", u),
          (a.instance = n);
      }
      l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(a, t),
        (t = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (l.count++,
          (a = Hn.bind(l)),
          t.addEventListener("load", a),
          t.addEventListener("error", a));
    }
  }
  var ui = 0;
  function Vm(l, t) {
    return (
      l.stylesheets && l.count === 0 && Cn(l, l.stylesheets),
      0 < l.count || 0 < l.imgCount
        ? function (a) {
            var u = setTimeout(function () {
              if ((l.stylesheets && Cn(l, l.stylesheets), l.unsuspend)) {
                var n = l.unsuspend;
                (l.unsuspend = null), n();
              }
            }, 6e4 + t);
            0 < l.imgBytes && ui === 0 && (ui = 62500 * Am());
            var e = setTimeout(function () {
              if (
                ((l.waitingForImages = !1),
                l.count === 0 &&
                  (l.stylesheets && Cn(l, l.stylesheets), l.unsuspend))
              ) {
                var n = l.unsuspend;
                (l.unsuspend = null), n();
              }
            }, (l.imgBytes > ui ? 50 : 800) + t);
            return (
              (l.unsuspend = a),
              function () {
                (l.unsuspend = null), clearTimeout(u), clearTimeout(e);
              }
            );
          }
        : null
    );
  }
  function Hn() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Cn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        (this.unsuspend = null), l();
      }
    }
  }
  var jn = null;
  function Cn(l, t) {
    (l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (jn = new Map()),
        t.forEach(Lm, l),
        (jn = null),
        Hn.call(l));
  }
  function Lm(l, t) {
    if (!(t.state.loading & 4)) {
      var a = jn.get(l);
      if (a) var u = a.get(null);
      else {
        (a = new Map()), jn.set(l, a);
        for (
          var e = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            n = 0;
          n < e.length;
          n++
        ) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
            (a.set(f.dataset.precedence, f), (u = f));
        }
        u && a.set(null, u);
      }
      (e = t.instance),
        (f = e.getAttribute("data-precedence")),
        (n = a.get(f) || u),
        n === u && a.set(null, e),
        a.set(f, e),
        this.count++,
        (u = Hn.bind(this)),
        e.addEventListener("load", u),
        e.addEventListener("error", u),
        n
          ? n.parentNode.insertBefore(e, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(e, l.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var ge = {
    $$typeof: zl,
    Provider: null,
    Consumer: null,
    _currentValue: D,
    _currentValue2: D,
    _threadCount: 0,
  };
  function Km(l, t, a, u, e, n, f, c, i) {
    (this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Fn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Fn(0)),
      (this.hiddenUpdates = Fn(null)),
      (this.identifierPrefix = u),
      (this.onUncaughtError = e),
      (this.onCaughtError = n),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = i),
      (this.incompleteTransitions = new Map());
  }
  function ny(l, t, a, u, e, n, f, c, i, v, S, E) {
    return (
      (l = new Km(l, t, a, f, i, v, S, E, c)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = ct(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = Bf()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: u, isDehydrated: a, cache: t }),
      Qf(n),
      l
    );
  }
  function fy(l) {
    return l ? ((l = au), l) : au;
  }
  function cy(l, t, a, u, e, n) {
    (e = fy(e)),
      u.context === null ? (u.context = e) : (u.pendingContext = e),
      (u = fa(t)),
      (u.payload = { element: a }),
      (n = n === void 0 ? null : n),
      n !== null && (u.callback = n),
      (a = ca(l, u, t)),
      a !== null && (lt(a, l, t), $u(a, l, t));
  }
  function iy(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function ei(l, t) {
    iy(l, t), (l = l.alternate) && iy(l, t);
  }
  function sy(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Ua(l, 67108864);
      t !== null && lt(t, l, 67108864), ei(l, 67108864);
    }
  }
  function dy(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = ot();
      t = In(t);
      var a = Ua(l, t);
      a !== null && lt(a, l, t), ei(l, t);
    }
  }
  var Rn = !0;
  function Jm(l, t, a, u) {
    var e = o.T;
    o.T = null;
    var n = A.p;
    try {
      (A.p = 2), ni(l, t, a, u);
    } finally {
      (A.p = n), (o.T = e);
    }
  }
  function wm(l, t, a, u) {
    var e = o.T;
    o.T = null;
    var n = A.p;
    try {
      (A.p = 8), ni(l, t, a, u);
    } finally {
      (A.p = n), (o.T = e);
    }
  }
  function ni(l, t, a, u) {
    if (Rn) {
      var e = fi(u);
      if (e === null) Kc(l, t, u, qn, a), oy(l, u);
      else if (Wm(e, l, t, a, u)) u.stopPropagation();
      else if ((oy(l, u), t & 4 && -1 < $m.indexOf(l))) {
        for (; e !== null; ) {
          var n = Ka(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var f = _a(n.pendingLanes);
                  if (f !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                      var i = 1 << (31 - nt(f));
                      (c.entanglements[1] |= i), (f &= ~i);
                    }
                    jt(n), (nl & 6) === 0 && ((rn = ut() + 500), de(0));
                  }
                }
                break;
              case 31:
              case 13:
                (c = Ua(n, 2)), c !== null && lt(c, n, 2), bn(), ei(n, 2);
            }
          if (((n = fi(u)), n === null && Kc(l, t, u, qn, a), n === e)) break;
          e = n;
        }
        e !== null && u.stopPropagation();
      } else Kc(l, t, u, null, a);
    }
  }
  function fi(l) {
    return (l = cf(l)), ci(l);
  }
  var qn = null;
  function ci(l) {
    if (((qn = null), (l = La(l)), l !== null)) {
      var t = $(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((l = cl(t)), l !== null)) return l;
          l = null;
        } else if (a === 31) {
          if (((l = il(t)), l !== null)) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return (qn = l), null;
  }
  function yy(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (jy()) {
          case bi:
            return 2;
          case zi:
            return 8;
          case Ae:
          case Cy:
            return 32;
          case Ei:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ii = !1,
    Sa = null,
    ba = null,
    za = null,
    re = new Map(),
    Se = new Map(),
    Ea = [],
    $m =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function oy(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Sa = null;
        break;
      case "dragenter":
      case "dragleave":
        ba = null;
        break;
      case "mouseover":
      case "mouseout":
        za = null;
        break;
      case "pointerover":
      case "pointerout":
        re.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Se.delete(t.pointerId);
    }
  }
  function be(l, t, a, u, e, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: u,
          nativeEvent: n,
          targetContainers: [e],
        }),
        t !== null && ((t = Ka(t)), t !== null && sy(t)),
        l)
      : ((l.eventSystemFlags |= u),
        (t = l.targetContainers),
        e !== null && t.indexOf(e) === -1 && t.push(e),
        l);
  }
  function Wm(l, t, a, u, e) {
    switch (t) {
      case "focusin":
        return (Sa = be(Sa, l, t, a, u, e)), !0;
      case "dragenter":
        return (ba = be(ba, l, t, a, u, e)), !0;
      case "mouseover":
        return (za = be(za, l, t, a, u, e)), !0;
      case "pointerover":
        var n = e.pointerId;
        return re.set(n, be(re.get(n) || null, l, t, a, u, e)), !0;
      case "gotpointercapture":
        return (
          (n = e.pointerId), Se.set(n, be(Se.get(n) || null, l, t, a, u, e)), !0
        );
    }
    return !1;
  }
  function my(l) {
    var t = La(l.target);
    if (t !== null) {
      var a = $(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = cl(a)), t !== null)) {
            (l.blockedOn = t),
              pi(l.priority, function () {
                dy(a);
              });
            return;
          }
        } else if (t === 31) {
          if (((t = il(a)), t !== null)) {
            (l.blockedOn = t),
              pi(l.priority, function () {
                dy(a);
              });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Bn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = fi(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var u = new a.constructor(a.type, a);
        (ff = u), a.target.dispatchEvent(u), (ff = null);
      } else return (t = Ka(a)), t !== null && sy(t), (l.blockedOn = a), !1;
      t.shift();
    }
    return !0;
  }
  function vy(l, t, a) {
    Bn(l) && a.delete(t);
  }
  function km() {
    (ii = !1),
      Sa !== null && Bn(Sa) && (Sa = null),
      ba !== null && Bn(ba) && (ba = null),
      za !== null && Bn(za) && (za = null),
      re.forEach(vy),
      Se.forEach(vy);
  }
  function Yn(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      ii ||
        ((ii = !0),
        _.unstable_scheduleCallback(_.unstable_NormalPriority, km)));
  }
  var xn = null;
  function hy(l) {
    xn !== l &&
      ((xn = l),
      _.unstable_scheduleCallback(_.unstable_NormalPriority, function () {
        xn === l && (xn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t],
            u = l[t + 1],
            e = l[t + 2];
          if (typeof u != "function") {
            if (ci(u || a) === null) continue;
            break;
          }
          var n = Ka(a);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            fc(n, { pending: !0, data: e, method: a.method, action: u }, u, e));
        }
      }));
  }
  function Mu(l) {
    function t(i) {
      return Yn(i, l);
    }
    Sa !== null && Yn(Sa, l),
      ba !== null && Yn(ba, l),
      za !== null && Yn(za, l),
      re.forEach(t),
      Se.forEach(t);
    for (var a = 0; a < Ea.length; a++) {
      var u = Ea[a];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < Ea.length && ((a = Ea[0]), a.blockedOn === null); )
      my(a), a.blockedOn === null && Ea.shift();
    if (((a = (l.ownerDocument || l).$$reactFormReplay), a != null))
      for (u = 0; u < a.length; u += 3) {
        var e = a[u],
          n = a[u + 1],
          f = e[$l] || null;
        if (typeof n == "function") f || hy(a);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (((e = n), (f = n[$l] || null))) c = f.formAction;
            else if (ci(e) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? (a[u + 1] = c) : (a.splice(u, 3), (u -= 3)),
            hy(a);
        }
      }
  }
  function gy() {
    function l(n) {
      n.canIntercept &&
        n.info === "react-transition" &&
        n.intercept({
          handler: function () {
            return new Promise(function (f) {
              return (e = f);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      e !== null && (e(), (e = null)), u || setTimeout(a, 20);
    }
    function a() {
      if (!u && !navigation.transition) {
        var n = navigation.currentEntry;
        n &&
          n.url != null &&
          navigation.navigate(n.url, {
            state: n.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var u = !1,
        e = null;
      return (
        navigation.addEventListener("navigate", l),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(a, 100),
        function () {
          (u = !0),
            navigation.removeEventListener("navigate", l),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            e !== null && (e(), (e = null));
        }
      );
    }
  }
  function si(l) {
    this._internalRoot = l;
  }
  (Gn.prototype.render = si.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(h(409));
      var a = t.current,
        u = ot();
      cy(a, u, l, t, null, null);
    }),
    (Gn.prototype.unmount = si.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          cy(l.current, 2, null, l, null, null), bn(), (t[Va] = null);
        }
      });
  function Gn(l) {
    this._internalRoot = l;
  }
  Gn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = Mi();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < Ea.length && t !== 0 && t < Ea[a].priority; a++);
      Ea.splice(a, 0, l), a === 0 && my(l);
    }
  };
  var ry = Z.version;
  if (ry !== "19.2.0") throw Error(h(527, ry, "19.2.0"));
  A.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(h(188))
        : ((l = Object.keys(l).join(",")), Error(h(268, l)));
    return (
      (l = T(t)),
      (l = l !== null ? Q(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var Fm = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: o,
    reconcilerVersion: "19.2.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qn.isDisabled && Qn.supportsFiber)
      try {
        (Du = Qn.inject(Fm)), (et = Qn);
      } catch {}
  }
  return (
    (Ee.createRoot = function (l, t) {
      if (!B(l)) throw Error(h(299));
      var a = !1,
        u = "",
        e = _0,
        n = O0,
        f = M0;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (e = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (f = t.onRecoverableError)),
        (t = ny(l, 1, !1, null, null, a, u, null, e, n, f, gy)),
        (l[Va] = t.current),
        Lc(l),
        new si(t)
      );
    }),
    (Ee.hydrateRoot = function (l, t, a) {
      if (!B(l)) throw Error(h(299));
      var u = !1,
        e = "",
        n = _0,
        f = O0,
        c = M0,
        i = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (u = !0),
          a.identifierPrefix !== void 0 && (e = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
          a.onCaughtError !== void 0 && (f = a.onCaughtError),
          a.onRecoverableError !== void 0 && (c = a.onRecoverableError),
          a.formState !== void 0 && (i = a.formState)),
        (t = ny(l, 1, !0, t, a ?? null, u, e, i, n, f, c, gy)),
        (t.context = fy(null)),
        (a = t.current),
        (u = ot()),
        (u = In(u)),
        (e = fa(u)),
        (e.callback = null),
        ca(a, e, u),
        (a = u),
        (t.current.lanes = a),
        Nu(t, a),
        jt(t),
        (l[Va] = t.current),
        Lc(l),
        new Gn(t)
      );
    }),
    (Ee.version = "19.2.0"),
    Ee
  );
}
var py;
function cv() {
  if (py) return oi.exports;
  py = 1;
  function _() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_);
      } catch (Z) {
        console.error(Z);
      }
  }
  return _(), (oi.exports = fv()), oi.exports;
}
var iv = cv();
const Xn = "http://localhost:8080",
  Za = "couple".trim() || "couple",
  Zn = 5,
  sv = (_) => /^[A-Z]$/.test(_),
  Vn = (_) => {
    const Z = _?.trim().charAt(0).toUpperCase() ?? "";
    return sv(Z) ? Z : "#";
  };
function Ln(_) {
  if (!_) return "";
  const Z = new Date(_);
  return Number.isNaN(Z.getTime())
    ? ""
    : Z.toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
}
function dv() {
  const [_, Z] = Cl.useState([]),
    [x, h] = Cl.useState(!0),
    [B, $] = Cl.useState(null),
    [cl, il] = Cl.useState("agenda"),
    [p, T] = Cl.useState(!1),
    [Q, H] = Cl.useState(null),
    [R, sl] = Cl.useState({}),
    [al, hl] = Cl.useState({ title: "", note: "", userId: Za }),
    [Ll, Ql] = Cl.useState(!1),
    [_t, zl] = Cl.useState(null),
    [Kl, tt] = Cl.useState(new Set());
  Cl.useEffect(() => {
    let Y = !0;
    async function K() {
      h(!0), $(null);
      try {
        const o = await fetch(`${Xn}/api/entries`);
        if (!o.ok) throw new Error(`Unable to load entries (${o.status})`);
        const A = await o.json();
        Y && Z(A);
      } catch (o) {
        Y && $(o instanceof Error ? o.message : "Unexpected error");
      } finally {
        Y && h(!1);
      }
    }
    return (
      K(),
      () => {
        Y = !1;
      }
    );
  }, []),
    Cl.useEffect(() => {
      const Y = {};
      for (const K of _) {
        const o = Vn(K.title);
        Y[o] = (Y[o] ?? 0) + 1;
      }
      sl((K) => {
        let o = !1;
        const A = {};
        for (const [D, J] of Object.entries(Y)) {
          const W = Math.max(1, Math.ceil(J / Zn)),
            s = K[D] ?? 1,
            z = Math.min(Math.max(s, 1), W);
          (A[D] = z), z !== s && (o = !0);
        }
        for (const D of Object.keys(K)) D in Y || (o = !0);
        if (!o && Object.keys(K).length === Object.keys(A).length) {
          let D = !0;
          for (const J of Object.keys(A))
            if (K[J] !== A[J]) {
              D = !1;
              break;
            }
          if (D) return K;
        }
        return A;
      });
    }, [_]);
  const Xl = Cl.useMemo(() => {
      const Y = new Map();
      for (const K of _) {
        const o = Vn(K.title),
          A = Y.get(o) ?? [];
        A.push(K), Y.set(o, A);
      }
      return Array.from(Y.entries())
        .sort(([K], [o]) => K.localeCompare(o, void 0, { sensitivity: "base" }))
        .map(([K, o]) => {
          const A = [...o].sort((z, O) =>
              z.title.localeCompare(O.title, void 0, { sensitivity: "base" })
            ),
            D = Math.max(1, Math.ceil(A.length / Zn)),
            J = Math.min(Math.max(R[K] ?? 1, 1), D),
            W = (J - 1) * Zn,
            s = A.slice(W, W + Zn);
          return { letter: K, visible: s, totalPages: D, currentPage: J };
        });
    }, [_, R]),
    G = Q !== null,
    Zl = () => {
      il("agenda"),
        H(null),
        hl({ title: "", note: "", userId: Za }),
        zl(null),
        T(!0);
    },
    at = (Y) => {
      H(Y.id),
        hl({ title: Y.title, note: Y.note ?? "", userId: Y.userId ?? Za }),
        zl(null),
        T(!0);
    },
    Ot = () => {
      T(!1), zl(null), hl({ title: "", note: "", userId: Za }), H(null);
    },
    mt = async (Y) => {
      Y.preventDefault(), zl(null);
      const K = al.title.trim();
      if (!K) {
        zl("Every dream needs a name.");
        return;
      }
      const o = { title: K };
      if ((al.note.trim() && (o.note = al.note.trim()), !G)) {
        const A = al.userId.trim();
        o.userId = A || Za;
      }
      Ql(!0);
      try {
        const A = G ? `${Xn}/api/entries/${Q}` : `${Xn}/api/entries`,
          D = await fetch(A, {
            method: G ? "PUT" : "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(o),
          });
        if (!D.ok) throw new Error(`Unable to save entry (${D.status})`);
        const J = await D.json();
        if (
          (Z((W) => (G ? W.map((s) => (s.id === J.id ? J : s)) : [J, ...W])),
          !G)
        ) {
          const W = Vn(J.title);
          sl((s) => ({ ...s, [W]: 1 }));
        }
        Ot();
      } catch (A) {
        zl(A instanceof Error ? A.message : "Unable to save entry");
      } finally {
        Ql(!1);
      }
    },
    Rl = async (Y) => {
      if (window.confirm(`Erase "${Y.title}" from your shared chronicle?`)) {
        tt((o) => {
          const A = new Set(o);
          return A.add(Y.id), A;
        });
        try {
          const o = await fetch(`${Xn}/api/entries/${Y.id}`, {
            method: "DELETE",
          });
          if (!o.ok) throw new Error(`Unable to delete entry (${o.status})`);
          Z((A) => A.filter((D) => D.id !== Y.id));
        } catch (o) {
          alert(o instanceof Error ? o.message : "Unable to delete entry");
        } finally {
          tt((o) => {
            const A = new Set(o);
            return A.delete(Y.id), A;
          });
        }
      }
    },
    Ct = (Y, K) => {
      sl((o) => ({ ...o, [Y]: K }));
    };
  return M.jsxs("div", {
    className: "agenda-shell",
    children: [
      M.jsxs("header", {
        className: "agenda-header",
        children: [
          M.jsx("h1", { children: "GoMun" }),
          M.jsx("p", {
            children: "Every shared dream — one letter at a time.",
          }),
          M.jsxs("div", {
            className: "agenda-header-actions",
            children: [
              M.jsxs("nav", {
                className: "agenda-nav",
                "aria-label": "Primary navigation",
                children: [
                  M.jsx("button", {
                    type: "button",
                    className: `nav-link${cl === "agenda" ? " active" : ""}`,
                    onClick: () => il("agenda"),
                    children: "Library",
                  }),
                  M.jsx("button", {
                    type: "button",
                    className: `nav-link${cl === "search" ? " active" : ""}`,
                    onClick: () => il("search"),
                    children: "Search",
                  }),
                ],
              }),
              M.jsx("button", {
                className: "new-entry-button",
                type: "button",
                onClick: Zl,
                children: "+ New Dream",
              }),
            ],
          }),
        ],
      }),
      cl === "agenda"
        ? M.jsx(yv, {
            sections: Xl,
            loading: x,
            error: B,
            defaultUserId: Za,
            deletingIds: Kl,
            onEdit: at,
            onDelete: Rl,
            onPageChange: Ct,
          })
        : M.jsx(ov, {
            entries: _,
            loading: x,
            error: B,
            defaultUserId: Za,
            deletingIds: Kl,
            onEdit: at,
            onDelete: Rl,
          }),
      p &&
        M.jsx("div", {
          className: "entry-modal-backdrop",
          role: "presentation",
          onClick: Ot,
          children: M.jsxs("div", {
            className: "entry-modal",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "entry-modal-title",
            onClick: (Y) => Y.stopPropagation(),
            children: [
              M.jsxs("header", {
                className: "entry-modal-header",
                children: [
                  M.jsx("h2", {
                    id: "entry-modal-title",
                    children: G ? "Edit Dream" : "New Shared Dream",
                  }),
                  M.jsx("button", {
                    className: "modal-close",
                    type: "button",
                    onClick: Ot,
                    "aria-label": "Close",
                    children: "×",
                  }),
                ],
              }),
              M.jsxs("form", {
                className: "entry-form",
                onSubmit: mt,
                children: [
                  M.jsxs("label", {
                    className: "form-field",
                    children: [
                      M.jsx("span", { children: "Title *" }),
                      M.jsx("input", {
                        type: "text",
                        name: "title",
                        value: al.title,
                        onChange: (Y) =>
                          hl((K) => ({ ...K, title: Y.target.value })),
                        placeholder: "Visit London",
                        required: !0,
                      }),
                    ],
                  }),
                  !G &&
                    M.jsxs("label", {
                      className: "form-field",
                      children: [
                        M.jsx("span", { children: "User" }),
                        M.jsx("input", {
                          type: "text",
                          name: "userId",
                          value: al.userId,
                          onChange: (Y) =>
                            hl((K) => ({ ...K, userId: Y.target.value })),
                          placeholder: "couple",
                        }),
                      ],
                    }),
                  M.jsxs("label", {
                    className: "form-field",
                    children: [
                      M.jsx("span", { children: "Note" }),
                      M.jsx("textarea", {
                        name: "note",
                        value: al.note,
                        onChange: (Y) =>
                          hl((K) => ({ ...K, note: Y.target.value })),
                        placeholder:
                          "Wander the Thames at twilight, tea at Covent Garden…",
                        rows: 3,
                      }),
                    ],
                  }),
                  _t && M.jsx("p", { className: "form-error", children: _t }),
                  M.jsxs("footer", {
                    className: "form-actions",
                    children: [
                      M.jsx("button", {
                        type: "button",
                        className: "ghost-button",
                        onClick: Ot,
                        disabled: Ll,
                        children: "Cancel",
                      }),
                      M.jsx("button", {
                        type: "submit",
                        disabled: Ll,
                        children: Ll
                          ? G
                            ? "Updating…"
                            : "Inscribing…"
                          : G
                          ? "Update Dream"
                          : "Save Dream",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
function yv({
  sections: _,
  loading: Z,
  error: x,
  defaultUserId: h,
  deletingIds: B,
  onEdit: $,
  onDelete: cl,
  onPageChange: il,
}) {
  return Z
    ? M.jsx("p", {
        className: "agenda-status",
        children: "Summoning your shared adventures…",
      })
    : x
    ? M.jsx("p", { className: "agenda-status error", children: x })
    : _.length === 0
    ? M.jsx("p", {
        className: "agenda-status",
        children: "Our first dream together.",
      })
    : M.jsx("div", {
        className: "book-wrapper",
        children: _.map(
          ({ letter: p, visible: T, totalPages: Q, currentPage: H }) =>
            M.jsxs(
              "section",
              {
                className: "book-section",
                children: [
                  M.jsx("header", {
                    className: "section-header",
                    children: M.jsx("span", {
                      className: "section-letter",
                      children: p,
                    }),
                  }),
                  M.jsx("ul", {
                    className: "entries-list",
                    children: T.map((R) =>
                      M.jsx(
                        Dy,
                        {
                          entry: R,
                          defaultUserId: h,
                          isDeleting: B.has(R.id),
                          onEdit: $,
                          onDelete: cl,
                        },
                        R.id
                      )
                    ),
                  }),
                  Q > 1 &&
                    M.jsxs("nav", {
                      className: "letter-pagination",
                      "aria-label": `Pages for letter ${p}`,
                      children: [
                        M.jsx("button", {
                          type: "button",
                          className: "pagination-button",
                          onClick: () => il(p, H - 1),
                          disabled: H === 1,
                          children: "Previous",
                        }),
                        M.jsx("div", {
                          className: "pagination-pages",
                          children: Array.from(
                            { length: Q },
                            (R, sl) => sl + 1
                          ).map((R) =>
                            M.jsx(
                              "button",
                              {
                                type: "button",
                                className: `pagination-button${
                                  R === H ? " active" : ""
                                }`,
                                onClick: () => il(p, R),
                                "aria-current": R === H ? "page" : void 0,
                                children: R,
                              },
                              R
                            )
                          ),
                        }),
                        M.jsx("button", {
                          type: "button",
                          className: "pagination-button",
                          onClick: () => il(p, H + 1),
                          disabled: H === Q,
                          children: "Next",
                        }),
                      ],
                    }),
                ],
              },
              p
            )
        ),
      });
}
function ov({
  entries: _,
  loading: Z,
  error: x,
  defaultUserId: h,
  deletingIds: B,
  onEdit: $,
  onDelete: cl,
}) {
  const [il, p] = Cl.useState(""),
    T = il.trim().toLowerCase(),
    Q = Cl.useMemo(
      () =>
        T
          ? _.filter((R) =>
              [
                R.title,
                R.note ?? "",
                R.userId ?? "",
                Ln(R.date),
                Ln(R.createdAt),
              ]
                .join(" ")
                .toLowerCase()
                .includes(T)
            )
          : _,
      [_, T]
    ),
    H = Cl.useMemo(() => {
      const R = new Map();
      for (const sl of Q) {
        const al = Vn(sl.title),
          hl = R.get(al) ?? [];
        hl.push(sl), R.set(al, hl);
      }
      return Array.from(R.entries())
        .sort(([sl], [al]) =>
          sl.localeCompare(al, void 0, { sensitivity: "base" })
        )
        .map(([sl, al]) => ({
          letter: sl,
          visible: [...al].sort((hl, Ll) =>
            hl.title.localeCompare(Ll.title, void 0, { sensitivity: "base" })
          ),
          totalPages: 1,
          currentPage: 1,
        }));
    }, [Q]);
  return M.jsxs("div", {
    className: "book-wrapper search-wrapper",
    children: [
      M.jsxs("div", {
        className: "search-lead",
        children: [
          M.jsxs("div", {
            className: "search-controls",
            children: [
              M.jsx("input", {
                type: "search",
                className: "search-input",
                value: il,
                onChange: (R) => p(R.target.value),
                placeholder: "Search dreams by title, note, user, or date…",
                "aria-label": "Search dreams",
              }),
              il &&
                M.jsx("button", {
                  type: "button",
                  className: "search-clear",
                  onClick: () => p(""),
                  children: "Clear",
                }),
            ],
          }),
          Z &&
            M.jsx("p", {
              className: "agenda-status",
              children: "Summoning your shared adventures…",
            }),
          !Z &&
            x &&
            M.jsx("p", { className: "agenda-status error", children: x }),
          !Z &&
            !x &&
            _.length === 0 &&
            M.jsx("p", {
              className: "agenda-status",
              children: "Our first dream together.",
            }),
          !Z &&
            !x &&
            _.length > 0 &&
            M.jsx("p", {
              className: "search-summary",
              children: il
                ? `${Q.length} dream${Q.length === 1 ? "" : "s"} match “${il}”.`
                : `Browsing all ${_.length} dream${_.length === 1 ? "" : "s"}.`,
            }),
          !Z &&
            !x &&
            Q.length === 0 &&
            _.length > 0 &&
            M.jsx("p", {
              className: "agenda-status search-status",
              children: "No dreams match your incantation.",
            }),
        ],
      }),
      !Z &&
        !x &&
        Q.length > 0 &&
        H.map(({ letter: R, visible: sl }) =>
          M.jsxs(
            "section",
            {
              className: "book-section",
              children: [
                M.jsx("header", {
                  className: "section-header",
                  children: M.jsx("span", {
                    className: "section-letter",
                    children: R,
                  }),
                }),
                M.jsx("ul", {
                  className: "entries-list search-results",
                  children: sl.map((al) =>
                    M.jsx(
                      Dy,
                      {
                        entry: al,
                        defaultUserId: h,
                        isDeleting: B.has(al.id),
                        onEdit: $,
                        onDelete: cl,
                      },
                      al.id
                    )
                  ),
                }),
              ],
            },
            R
          )
        ),
    ],
  });
}
function Dy({
  entry: _,
  defaultUserId: Z,
  isDeleting: x,
  onEdit: h,
  onDelete: B,
}) {
  return M.jsxs("li", {
    className: "entry-card",
    children: [
      M.jsxs("div", {
        className: "entry-meta-row",
        children: [
          M.jsx("span", { className: "entry-tag", children: _.userId || Z }),
          M.jsxs("div", {
            className: "entry-actions",
            children: [
              M.jsx("button", {
                type: "button",
                className: "entry-edit-button",
                onClick: () => h(_),
                disabled: x,
                children: "Edit",
              }),
              M.jsx("button", {
                type: "button",
                className: "entry-delete-button",
                onClick: () => B(_),
                disabled: x,
                children: x ? "Deleting…" : "Delete",
              }),
            ],
          }),
        ],
      }),
      M.jsx("div", { className: "entry-title", children: _.title }),
      _.note && M.jsx("p", { className: "entry-note", children: _.note }),
      M.jsxs("footer", {
        className: "entry-meta",
        children: [
          _.date && M.jsx("span", { children: Ln(_.date) }),
          M.jsx("span", { children: Ln(_.createdAt) }),
        ],
      }),
    ],
  });
}
iv.createRoot(document.getElementById("root")).render(
  M.jsx(Cl.StrictMode, { children: M.jsx(dv, {}) })
);
