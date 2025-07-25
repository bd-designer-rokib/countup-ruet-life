(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [92888],
  {
    93539: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      var r = n(38193)._(n(32735)).default.createContext({});
    },
    47187: function (e, t) {
      "use strict";
      function n(e) {
        var t = void 0 === e ? {} : e,
          n = t.ampFirst,
          r = void 0 !== n && n,
          o = t.hybrid,
          u = void 0 !== o && o,
          a = t.hasQuery;
        return r || (u && void 0 !== a && a);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    62268: function (e, t, n) {
      "use strict";
      var r = n(930);
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          defaultHead: function () {
            return s;
          },
          default: function () {
            return b;
          },
        });
      var u = n(38193),
        a = n(23800)._(n(32735)),
        i = u._(n(88959)),
        c = n(93539),
        f = n(95963),
        d = n(47187);
      n(29067);
      function s(e) {
        void 0 === e && (e = !1);
        var t = [a.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              a.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function p(e, t) {
        return "string" === typeof t || "number" === typeof t
          ? e
          : t.type === a.default.Fragment
          ? e.concat(
              a.default.Children.toArray(t.props.children).reduce(function (
                e,
                t
              ) {
                return "string" === typeof t || "number" === typeof t
                  ? e
                  : e.concat(t);
              },
              [])
            )
          : e.concat(t);
      }
      var l = ["name", "httpEquiv", "charSet", "itemProp"];
      function y(e, t) {
        var n = t.inAmpMode;
        return e
          .reduce(p, [])
          .reverse()
          .concat(s(n).reverse())
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return function (o) {
                var u = !0,
                  a = !1;
                if (
                  o.key &&
                  "number" !== typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  a = !0;
                  var i = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(i) ? (u = !1) : e.add(i);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (u = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (var c = 0, f = l.length; c < f; c++) {
                      var d = l[c];
                      if (o.props.hasOwnProperty(d))
                        if ("charSet" === d) n.has(d) ? (u = !1) : n.add(d);
                        else {
                          var s = o.props[d],
                            p = r[d] || new Set();
                          ("name" === d && a) || !p.has(s)
                            ? (p.add(s), (r[d] = p))
                            : (u = !1);
                        }
                    }
                }
                return u;
              };
            })()
          )
          .reverse()
          .map(function (e, t) {
            var u = e.key || t;
            if (
              !n &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some(function (t) {
                return e.props.href.startsWith(t);
              })
            ) {
              var i = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? o(Object(n), !0).forEach(function (t) {
                        r(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : o(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
                }
                return e;
              })({}, e.props || {});
              return (
                (i["data-href"] = i.href),
                (i.href = void 0),
                (i["data-optimized-fonts"] = !0),
                a.default.cloneElement(e, i)
              );
            }
            return a.default.cloneElement(e, { key: u });
          });
      }
      var b = function (e) {
        var t = e.children,
          n = (0, a.useContext)(c.AmpStateContext),
          r = (0, a.useContext)(f.HeadManagerContext);
        return a.default.createElement(
          i.default,
          {
            reduceComponentsToState: y,
            headManager: r,
            inAmpMode: (0, d.isInAmpMode)(n),
          },
          t
        );
      };
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        "undefined" === typeof t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    88959: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      var r = n(32735),
        o = r.useLayoutEffect,
        u = r.useEffect;
      function a(e) {
        var t = e.headManager,
          n = e.reduceComponentsToState;
        function a() {
          if (t && t.mountedInstances) {
            var o = r.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(n(o, e));
          }
        }
        return (
          o(function () {
            var n;
            return (
              null == t ||
                null == (n = t.mountedInstances) ||
                n.add(e.children),
              function () {
                var n;
                null == t ||
                  null == (n = t.mountedInstances) ||
                  n.delete(e.children);
              }
            );
          }),
          o(function () {
            return (
              t && (t._pendingUpdate = a),
              function () {
                t && (t._pendingUpdate = a);
              }
            );
          }),
          u(function () {
            return (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              function () {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            );
          }),
          null
        );
      }
    },
    29067: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "warnOnce", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      var n = function (e) {};
    },
    91637: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var r = n(59499),
        o = n(9008),
        u = n.n(o),
        a = (n(32735), n(74512));
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function f(e) {
        var t = e.Component,
          n = e.pageProps;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(u(), {
              children: [
                (0, a.jsx)("title", {
                  children: "Widget Editor | Common Ninja",
                }),
                (0, a.jsx)("meta", { charSet: "utf-8" }),
                (0, a.jsx)("meta", {
                  httpEquiv: "X-UA-Compatible",
                  content: "IE=edge",
                }),
                (0, a.jsx)("meta", { name: "description", content: "" }),
                (0, a.jsx)("meta", {
                  name: "viewport",
                  content:
                    "width=device-width, initial-scale=1.0, user-scalable=0, maximum-scale=1.0",
                }),
              ],
            }),
            (0, a.jsx)(t, c({}, n)),
          ],
        });
      }
    },
    6840: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(91637);
        },
      ]);
    },
    9008: function (e, t, n) {
      e.exports = n(62268);
    },
    59499: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [49774, 40179], function () {
      return t(6840), t(27985);
    });
    var n = e.O();
    _N_E = n;
  },
]);
