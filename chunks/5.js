(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2549, 56222],
  {
    56222: function (t, e, n) {
      var o;
      "undefined" != typeof self && self,
        (t.exports =
          ((o = n(32735)),
          (function (t) {
            var e = {};
            function n(o) {
              if (e[o]) return e[o].exports;
              var r = (e[o] = { i: o, l: !1, exports: {} });
              return (
                t[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
              );
            }
            return (
              (n.m = t),
              (n.c = e),
              (n.d = function (t, e, o) {
                n.o(t, e) ||
                  Object.defineProperty(t, e, { enumerable: !0, get: o });
              }),
              (n.r = function (t) {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(t, "__esModule", { value: !0 });
              }),
              (n.t = function (t, e) {
                if ((1 & e && (t = n(t)), 8 & e)) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule)
                  return t;
                var o = Object.create(null);
                if (
                  (n.r(o),
                  Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: t,
                  }),
                  2 & e && "string" != typeof t)
                )
                  for (var r in t)
                    n.d(
                      o,
                      r,
                      function (e) {
                        return t[e];
                      }.bind(null, r)
                    );
                return o;
              }),
              (n.n = function (t) {
                var e =
                  t && t.__esModule
                    ? function () {
                        return t.default;
                      }
                    : function () {
                        return t;
                      };
                return n.d(e, "a", e), e;
              }),
              (n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
              }),
              (n.p = ""),
              n((n.s = 2))
            );
          })([
            function (t, e) {
              t.exports = o;
            },
            function (t, e, n) {
              "use strict";
              var o = {
                linear: function (t, e, n, o) {
                  return ((n - e) * t) / o + e;
                },
                easeInQuad: function (t, e, n, o) {
                  return (n - e) * (t /= o) * t + e;
                },
                easeOutQuad: function (t, e, n, o) {
                  return -(n - e) * (t /= o) * (t - 2) + e;
                },
                easeInOutQuad: function (t, e, n, o) {
                  var r = n - e;
                  return (t /= o / 2) < 1
                    ? (r / 2) * t * t + e
                    : (-r / 2) * (--t * (t - 2) - 1) + e;
                },
                easeInCubic: function (t, e, n, o) {
                  return (n - e) * (t /= o) * t * t + e;
                },
                easeOutCubic: function (t, e, n, o) {
                  return (n - e) * ((t = t / o - 1) * t * t + 1) + e;
                },
                easeInOutCubic: function (t, e, n, o) {
                  var r = n - e;
                  return (t /= o / 2) < 1
                    ? (r / 2) * t * t * t + e
                    : (r / 2) * ((t -= 2) * t * t + 2) + e;
                },
                easeInQuart: function (t, e, n, o) {
                  return (n - e) * (t /= o) * t * t * t + e;
                },
                easeOutQuart: function (t, e, n, o) {
                  return -(n - e) * ((t = t / o - 1) * t * t * t - 1) + e;
                },
                easeInOutQuart: function (t, e, n, o) {
                  var r = n - e;
                  return (t /= o / 2) < 1
                    ? (r / 2) * t * t * t * t + e
                    : (-r / 2) * ((t -= 2) * t * t * t - 2) + e;
                },
                easeInQuint: function (t, e, n, o) {
                  return (n - e) * (t /= o) * t * t * t * t + e;
                },
                easeOutQuint: function (t, e, n, o) {
                  return (n - e) * ((t = t / o - 1) * t * t * t * t + 1) + e;
                },
                easeInOutQuint: function (t, e, n, o) {
                  var r = n - e;
                  return (t /= o / 2) < 1
                    ? (r / 2) * t * t * t * t * t + e
                    : (r / 2) * ((t -= 2) * t * t * t * t + 2) + e;
                },
                easeInSine: function (t, e, n, o) {
                  var r = n - e;
                  return -r * Math.cos((t / o) * (Math.PI / 2)) + r + e;
                },
                easeOutSine: function (t, e, n, o) {
                  return (n - e) * Math.sin((t / o) * (Math.PI / 2)) + e;
                },
                easeInOutSine: function (t, e, n, o) {
                  return (-(n - e) / 2) * (Math.cos((Math.PI * t) / o) - 1) + e;
                },
                easeInExpo: function (t, e, n, o) {
                  return 0 == t
                    ? e
                    : (n - e) * Math.pow(2, 10 * (t / o - 1)) + e;
                },
                easeOutExpo: function (t, e, n, o) {
                  var r = n - e;
                  return t == o
                    ? e + r
                    : r * (1 - Math.pow(2, (-10 * t) / o)) + e;
                },
                easeInOutExpo: function (t, e, n, o) {
                  var r = n - e;
                  return 0 === t
                    ? e
                    : t === o
                    ? e + r
                    : (t /= o / 2) < 1
                    ? (r / 2) * Math.pow(2, 10 * (t - 1)) + e
                    : (r / 2) * (2 - Math.pow(2, -10 * --t)) + e;
                },
                easeInCirc: function (t, e, n, o) {
                  return -(n - e) * (Math.sqrt(1 - (t /= o) * t) - 1) + e;
                },
                easeOutCirc: function (t, e, n, o) {
                  return (n - e) * Math.sqrt(1 - (t = t / o - 1) * t) + e;
                },
                easeInOutCirc: function (t, e, n, o) {
                  var r = n - e;
                  return (t /= o / 2) < 1
                    ? (-r / 2) * (Math.sqrt(1 - t * t) - 1) + e
                    : (r / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
                },
                easeInElastic: function (t, e, n, o) {
                  var r,
                    i,
                    s,
                    c = n - e;
                  return (
                    (s = 1.70158),
                    0 === t
                      ? e
                      : 1 == (t /= o)
                      ? e + c
                      : ((i = 0) || (i = 0.3 * o),
                        (r = c) < Math.abs(c)
                          ? ((r = c), (s = i / 4))
                          : (s = (i / (2 * Math.PI)) * Math.asin(c / r)),
                        -r *
                          Math.pow(2, 10 * (t -= 1)) *
                          Math.sin(((t * o - s) * (2 * Math.PI)) / i) +
                          e)
                  );
                },
                easeOutElastic: function (t, e, n, o) {
                  var r,
                    i,
                    s,
                    c = n - e;
                  return (
                    (s = 1.70158),
                    0 === t
                      ? e
                      : 1 == (t /= o)
                      ? e + c
                      : ((i = 0) || (i = 0.3 * o),
                        (r = c) < Math.abs(c)
                          ? ((r = c), (s = i / 4))
                          : (s = (i / (2 * Math.PI)) * Math.asin(c / r)),
                        r *
                          Math.pow(2, -10 * t) *
                          Math.sin(((t * o - s) * (2 * Math.PI)) / i) +
                          c +
                          e)
                  );
                },
                easeInOutElastic: function (t, e, n, o) {
                  var r,
                    i,
                    s,
                    c = n - e;
                  return (
                    (s = 1.70158),
                    0 === t
                      ? e
                      : 2 == (t /= o / 2)
                      ? e + c
                      : ((i = 0) || (i = o * (0.3 * 1.5)),
                        (r = c) < Math.abs(c)
                          ? ((r = c), (s = i / 4))
                          : (s = (i / (2 * Math.PI)) * Math.asin(c / r)),
                        t < 1
                          ? r *
                              Math.pow(2, 10 * (t -= 1)) *
                              Math.sin(((t * o - s) * (2 * Math.PI)) / i) *
                              -0.5 +
                            e
                          : r *
                              Math.pow(2, -10 * (t -= 1)) *
                              Math.sin(((t * o - s) * (2 * Math.PI)) / i) *
                              0.5 +
                            c +
                            e)
                  );
                },
                easeInBack: function (t, e, n, o, r) {
                  return (
                    void 0 === r && (r = 1.70158),
                    (n - e) * (t /= o) * t * ((r + 1) * t - r) + e
                  );
                },
                easeOutBack: function (t, e, n, o, r) {
                  return (
                    void 0 === r && (r = 1.70158),
                    (n - e) * ((t = t / o - 1) * t * ((r + 1) * t + r) + 1) + e
                  );
                },
                easeInOutBack: function (t, e, n, o, r) {
                  var i = n - e;
                  return (
                    void 0 === r && (r = 1.70158),
                    (t /= o / 2) < 1
                      ? (i / 2) * (t * t * ((1 + (r *= 1.525)) * t - r)) + e
                      : (i / 2) *
                          ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) +
                        e
                  );
                },
                easeInBounce: function (t, e, n, r) {
                  var i = n - e;
                  return i - o.easeOutBounce(r - t, 0, i, r) + e;
                },
                easeOutBounce: function (t, e, n, o) {
                  var r = n - e;
                  return (t /= o) < 1 / 2.75
                    ? r * (7.5625 * t * t) + e
                    : t < 2 / 2.75
                    ? r * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + e
                    : t < 2.5 / 2.75
                    ? r * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + e
                    : r * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + e;
                },
                easeInOutBounce: function (t, e, n, r) {
                  var i = n - e;
                  return t < r / 2
                    ? 0.5 * o.easeInBounce(2 * t, 0, i, r) + e
                    : 0.5 * o.easeOutBounce(2 * t - r, 0, i, r) + 0.5 * i + e;
                },
              };
              t.exports = o;
            },
            function (t, e, n) {
              t.exports = n(3);
            },
            function (t, e, n) {
              "use strict";
              n.r(e),
                n.d(e, "ReactConfetti", function () {
                  return Z;
                });
              var o,
                r,
                i = n(0),
                s = n.n(i),
                c = n(1),
                a = n.n(c);
              function l(t, e) {
                return t + Math.random() * (e - t);
              }
              function u(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var o = e[n];
                  (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o);
                }
              }
              function d(t, e, n) {
                return (
                  e in t
                    ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[e] = n),
                  t
                );
              }
              !(function (t) {
                (t[(t.Circle = 0)] = "Circle"),
                  (t[(t.Square = 1)] = "Square"),
                  (t[(t.Strip = 2)] = "Strip");
              })(o || (o = {})),
                (function (t) {
                  (t[(t.Positive = 1)] = "Positive"),
                    (t[(t.Negative = -1)] = "Negative");
                })(r || (r = {}));
              var p = (function () {
                function t(e, n, o, i) {
                  !(function (t, e) {
                    if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, t),
                    d(this, "context", void 0),
                    d(this, "radius", void 0),
                    d(this, "x", void 0),
                    d(this, "y", void 0),
                    d(this, "w", void 0),
                    d(this, "h", void 0),
                    d(this, "vx", void 0),
                    d(this, "vy", void 0),
                    d(this, "shape", void 0),
                    d(this, "angle", void 0),
                    d(this, "angularSpin", void 0),
                    d(this, "color", void 0),
                    d(this, "rotateY", void 0),
                    d(this, "rotationDirection", void 0),
                    d(this, "getOptions", void 0),
                    (this.getOptions = n);
                  var s,
                    c,
                    a = this.getOptions(),
                    u = a.colors,
                    p = a.initialVelocityX,
                    f = a.initialVelocityY;
                  (this.context = e),
                    (this.x = o),
                    (this.y = i),
                    (this.w = l(5, 20)),
                    (this.h = l(5, 20)),
                    (this.radius = l(5, 10)),
                    (this.vx =
                      "number" == typeof p ? l(-p, p) : l(p.min, p.max)),
                    (this.vy =
                      "number" == typeof f ? l(-f, 0) : l(f.min, f.max)),
                    (this.shape =
                      ((s = 0),
                      (c = 2),
                      Math.floor(s + Math.random() * (c - s + 1)))),
                    (this.angle = (l(0, 360) * Math.PI) / 180),
                    (this.angularSpin = l(-0.2, 0.2)),
                    (this.color = u[Math.floor(Math.random() * u.length)]),
                    (this.rotateY = l(0, 1)),
                    (this.rotationDirection = l(0, 1)
                      ? r.Positive
                      : r.Negative);
                }
                var e, n, i;
                return (
                  (e = t),
                  (n = [
                    {
                      key: "update",
                      value: function () {
                        var t = this.getOptions(),
                          e = t.gravity,
                          n = t.wind,
                          i = t.friction,
                          s = t.opacity,
                          c = t.drawShape;
                        (this.x += this.vx),
                          (this.y += this.vy),
                          (this.vy += e),
                          (this.vx += n),
                          (this.vx *= i),
                          (this.vy *= i),
                          this.rotateY >= 1 &&
                          this.rotationDirection === r.Positive
                            ? (this.rotationDirection = r.Negative)
                            : this.rotateY <= -1 &&
                              this.rotationDirection === r.Negative &&
                              (this.rotationDirection = r.Positive);
                        var a = 0.1 * this.rotationDirection;
                        if (
                          ((this.rotateY += a),
                          (this.angle += this.angularSpin),
                          this.context.save(),
                          this.context.translate(this.x, this.y),
                          this.context.rotate(this.angle),
                          this.context.scale(1, this.rotateY),
                          this.context.rotate(this.angle),
                          this.context.beginPath(),
                          (this.context.fillStyle = this.color),
                          (this.context.strokeStyle = this.color),
                          (this.context.globalAlpha = s),
                          (this.context.lineCap = "round"),
                          (this.context.lineWidth = 2),
                          c && "function" == typeof c)
                        )
                          c.call(this, this.context);
                        else
                          switch (this.shape) {
                            case o.Circle:
                              this.context.beginPath(),
                                this.context.arc(
                                  0,
                                  0,
                                  this.radius,
                                  0,
                                  2 * Math.PI
                                ),
                                this.context.fill();
                              break;
                            case o.Square:
                              this.context.fillRect(
                                -this.w / 2,
                                -this.h / 2,
                                this.w,
                                this.h
                              );
                              break;
                            case o.Strip:
                              this.context.fillRect(
                                -this.w / 6,
                                -this.h / 2,
                                this.w / 3,
                                this.h
                              );
                          }
                        this.context.closePath(), this.context.restore();
                      },
                    },
                  ]) && u(e.prototype, n),
                  i && u(e, i),
                  t
                );
              })();
              function f(t, e, n) {
                return (
                  e in t
                    ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[e] = n),
                  t
                );
              }
              var h = function t(e, n) {
                var o = this;
                !(function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  f(this, "canvas", void 0),
                  f(this, "context", void 0),
                  f(this, "getOptions", void 0),
                  f(this, "x", 0),
                  f(this, "y", 0),
                  f(this, "w", 0),
                  f(this, "h", 0),
                  f(this, "lastNumberOfPieces", 0),
                  f(this, "tweenInitTime", Date.now()),
                  f(this, "particles", []),
                  f(this, "particlesGenerated", 0),
                  f(this, "removeParticleAt", function (t) {
                    o.particles.splice(t, 1);
                  }),
                  f(this, "getParticle", function () {
                    var t = l(o.x, o.w + o.x),
                      e = l(o.y, o.h + o.y);
                    return new p(o.context, o.getOptions, t, e);
                  }),
                  f(this, "animate", function () {
                    var t = o.canvas,
                      e = o.context,
                      n = o.particlesGenerated,
                      r = o.lastNumberOfPieces,
                      i = o.getOptions(),
                      s = i.run,
                      c = i.recycle,
                      a = i.numberOfPieces,
                      l = i.debug,
                      u = i.tweenFunction,
                      d = i.tweenDuration;
                    if (!s) return !1;
                    var p = o.particles.length,
                      f = c ? p : n,
                      h = Date.now();
                    if (f < a) {
                      r !== a &&
                        ((o.tweenInitTime = h), (o.lastNumberOfPieces = a));
                      for (
                        var b = o.tweenInitTime,
                          m = u(h - b > d ? d : Math.max(0, h - b), f, a, d),
                          x = Math.round(m - f),
                          y = 0;
                        y < x;
                        y++
                      )
                        o.particles.push(o.getParticle());
                      o.particlesGenerated += x;
                    }
                    return (
                      l &&
                        ((e.font = "12px sans-serif"),
                        (e.fillStyle = "#333"),
                        (e.textAlign = "right"),
                        e.fillText(
                          "Particles: ".concat(p),
                          t.width - 10,
                          t.height - 20
                        )),
                      o.particles.forEach(function (e, n) {
                        e.update(),
                          (e.y > t.height ||
                            e.y < -100 ||
                            e.x > t.width + 100 ||
                            e.x < -100) &&
                            (c && f <= a
                              ? (o.particles[n] = o.getParticle())
                              : o.removeParticleAt(n));
                      }),
                      p > 0 || f < a
                    );
                  }),
                  (this.canvas = e);
                var r = this.canvas.getContext("2d");
                if (!r) throw new Error("Could not get canvas context");
                (this.context = r), (this.getOptions = n);
              };
              function b(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                  var o = Object.getOwnPropertySymbols(t);
                  e &&
                    (o = o.filter(function (e) {
                      return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })),
                    n.push.apply(n, o);
                }
                return n;
              }
              function m(t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = null != arguments[e] ? arguments[e] : {};
                  e % 2
                    ? b(Object(n), !0).forEach(function (e) {
                        y(t, e, n[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        t,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : b(Object(n)).forEach(function (e) {
                        Object.defineProperty(
                          t,
                          e,
                          Object.getOwnPropertyDescriptor(n, e)
                        );
                      });
                }
                return t;
              }
              function x(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var o = e[n];
                  (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o);
                }
              }
              function y(t, e, n) {
                return (
                  e in t
                    ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[e] = n),
                  t
                );
              }
              var g = {
                  width: "undefined" != typeof window ? window.innerWidth : 300,
                  height:
                    "undefined" != typeof window ? window.innerHeight : 200,
                  numberOfPieces: 200,
                  friction: 0.99,
                  wind: 0,
                  gravity: 0.1,
                  initialVelocityX: 4,
                  initialVelocityY: 10,
                  colors: [
                    "#f44336",
                    "#e91e63",
                    "#9c27b0",
                    "#673ab7",
                    "#3f51b5",
                    "#2196f3",
                    "#03a9f4",
                    "#00bcd4",
                    "#009688",
                    "#4CAF50",
                    "#8BC34A",
                    "#CDDC39",
                    "#FFEB3B",
                    "#FFC107",
                    "#FF9800",
                    "#FF5722",
                    "#795548",
                  ],
                  opacity: 1,
                  debug: !1,
                  tweenFunction: a.a.easeInOutQuad,
                  tweenDuration: 5e3,
                  recycle: !0,
                  run: !0,
                },
                w = (function () {
                  function t(e, n) {
                    var o = this;
                    !(function (t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, t),
                      y(this, "canvas", void 0),
                      y(this, "context", void 0),
                      y(this, "_options", void 0),
                      y(this, "generator", void 0),
                      y(this, "rafId", void 0),
                      y(this, "setOptionsWithDefaults", function (t) {
                        var e = {
                          confettiSource: {
                            x: 0,
                            y: 0,
                            w: o.canvas.width,
                            h: 0,
                          },
                        };
                        (o._options = m(m(m({}, e), g), t)),
                          Object.assign(o, t.confettiSource);
                      }),
                      y(this, "update", function () {
                        var t = o.options,
                          e = t.run,
                          n = t.onConfettiComplete,
                          r = o.canvas,
                          i = o.context;
                        e &&
                          ((i.fillStyle = "white"),
                          i.clearRect(0, 0, r.width, r.height)),
                          o.generator.animate()
                            ? (o.rafId = requestAnimationFrame(o.update))
                            : (n &&
                                "function" == typeof n &&
                                o.generator.particlesGenerated > 0 &&
                                n.call(o, o),
                              (o._options.run = !1));
                      }),
                      y(this, "reset", function () {
                        o.generator &&
                          o.generator.particlesGenerated > 0 &&
                          ((o.generator.particlesGenerated = 0),
                          (o.generator.particles = []),
                          (o.generator.lastNumberOfPieces = 0));
                      }),
                      y(this, "stop", function () {
                        (o.options = { run: !1 }),
                          o.rafId &&
                            (cancelAnimationFrame(o.rafId), (o.rafId = void 0));
                      }),
                      (this.canvas = e);
                    var r = this.canvas.getContext("2d");
                    if (!r) throw new Error("Could not get canvas context");
                    (this.context = r),
                      (this.generator = new h(this.canvas, function () {
                        return o.options;
                      })),
                      (this.options = n),
                      this.update();
                  }
                  var e, n, o;
                  return (
                    (e = t),
                    (n = [
                      {
                        key: "options",
                        get: function () {
                          return this._options;
                        },
                        set: function (t) {
                          var e = this._options && this._options.run,
                            n = this._options && this._options.recycle;
                          this.setOptionsWithDefaults(t),
                            this.generator &&
                              (Object.assign(
                                this.generator,
                                this.options.confettiSource
                              ),
                              "boolean" == typeof t.recycle &&
                                t.recycle &&
                                !1 === n &&
                                (this.generator.lastNumberOfPieces =
                                  this.generator.particles.length)),
                            "boolean" == typeof t.run &&
                              t.run &&
                              !1 === e &&
                              this.update();
                        },
                      },
                    ]) && x(e.prototype, n),
                    o && x(e, o),
                    t
                  );
                })();
              function v(t) {
                return (
                  (function (t) {
                    if (Array.isArray(t)) return k(t);
                  })(t) ||
                  (function (t) {
                    if (
                      "undefined" != typeof Symbol &&
                      Symbol.iterator in Object(t)
                    )
                      return Array.from(t);
                  })(t) ||
                  D(t) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()
                );
              }
              function j(t) {
                return (j =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (t) {
                        return typeof t;
                      }
                    : function (t) {
                        return t &&
                          "function" == typeof Symbol &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? "symbol"
                          : typeof t;
                      })(t);
              }
              function O() {
                return (O =
                  Object.assign ||
                  function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var n = arguments[e];
                      for (var o in n)
                        Object.prototype.hasOwnProperty.call(n, o) &&
                          (t[o] = n[o]);
                    }
                    return t;
                  }).apply(this, arguments);
              }
              function C(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                  var o = Object.getOwnPropertySymbols(t);
                  e &&
                    (o = o.filter(function (e) {
                      return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })),
                    n.push.apply(n, o);
                }
                return n;
              }
              function S(t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = null != arguments[e] ? arguments[e] : {};
                  e % 2
                    ? C(Object(n), !0).forEach(function (e) {
                        R(t, e, n[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        t,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : C(Object(n)).forEach(function (e) {
                        Object.defineProperty(
                          t,
                          e,
                          Object.getOwnPropertyDescriptor(n, e)
                        );
                      });
                }
                return t;
              }
              function P(t, e) {
                return (
                  (function (t) {
                    if (Array.isArray(t)) return t;
                  })(t) ||
                  (function (t, e) {
                    if (
                      "undefined" != typeof Symbol &&
                      Symbol.iterator in Object(t)
                    ) {
                      var n = [],
                        o = !0,
                        r = !1,
                        i = void 0;
                      try {
                        for (
                          var s, c = t[Symbol.iterator]();
                          !(o = (s = c.next()).done) &&
                          (n.push(s.value), !e || n.length !== e);
                          o = !0
                        );
                      } catch (t) {
                        (r = !0), (i = t);
                      } finally {
                        try {
                          o || null == c.return || c.return();
                        } finally {
                          if (r) throw i;
                        }
                      }
                      return n;
                    }
                  })(t, e) ||
                  D(t, e) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()
                );
              }
              function D(t, e) {
                if (t) {
                  if ("string" == typeof t) return k(t, e);
                  var n = Object.prototype.toString.call(t).slice(8, -1);
                  return (
                    "Object" === n && t.constructor && (n = t.constructor.name),
                    "Map" === n || "Set" === n
                      ? Array.from(t)
                      : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? k(t, e)
                      : void 0
                  );
                }
              }
              function k(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
                return o;
              }
              function _(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              }
              function T(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var o = e[n];
                  (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o);
                }
              }
              function M(t, e) {
                return (M =
                  Object.setPrototypeOf ||
                  function (t, e) {
                    return (t.__proto__ = e), t;
                  })(t, e);
              }
              function B(t) {
                var e = (function () {
                  if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                  if (Reflect.construct.sham) return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return (
                      Date.prototype.toString.call(
                        Reflect.construct(Date, [], function () {})
                      ),
                      !0
                    );
                  } catch (t) {
                    return !1;
                  }
                })();
                return function () {
                  var n,
                    o = z(t);
                  if (e) {
                    var r = z(this).constructor;
                    n = Reflect.construct(o, arguments, r);
                  } else n = o.apply(this, arguments);
                  return E(this, n);
                };
              }
              function E(t, e) {
                return !e || ("object" !== j(e) && "function" != typeof e)
                  ? I(t)
                  : e;
              }
              function I(t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              }
              function z(t) {
                return (z = Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                    })(t);
              }
              function R(t, e, n) {
                return (
                  e in t
                    ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[e] = n),
                  t
                );
              }
              var L = s.a.createRef(),
                N = (function (t) {
                  !(function (t, e) {
                    if ("function" != typeof e && null !== e)
                      throw new TypeError(
                        "Super expression must either be null or a function"
                      );
                    (t.prototype = Object.create(e && e.prototype, {
                      constructor: { value: t, writable: !0, configurable: !0 },
                    })),
                      e && M(t, e);
                  })(i, t);
                  var e,
                    n,
                    o,
                    r = B(i);
                  function i(t) {
                    var e;
                    _(this, i);
                    for (
                      var n = arguments.length,
                        o = new Array(n > 1 ? n - 1 : 0),
                        c = 1;
                      c < n;
                      c++
                    )
                      o[c - 1] = arguments[c];
                    return (
                      R(
                        I((e = r.call.apply(r, [this, t].concat(o)))),
                        "canvas",
                        s.a.createRef()
                      ),
                      R(I(e), "confetti", void 0),
                      (e.canvas = t.canvasRef || L),
                      e
                    );
                  }
                  return (
                    (e = i),
                    (n = [
                      {
                        key: "componentDidMount",
                        value: function () {
                          if (this.canvas.current) {
                            var t = F(this.props)[0];
                            this.confetti = new w(this.canvas.current, t);
                          }
                        },
                      },
                      {
                        key: "componentDidUpdate",
                        value: function () {
                          var t = F(this.props)[0];
                          this.confetti && (this.confetti.options = t);
                        },
                      },
                      {
                        key: "componentWillUnmount",
                        value: function () {
                          this.confetti && this.confetti.stop(),
                            (this.confetti = void 0);
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var t = P(F(this.props), 2),
                            e = t[0],
                            n = t[1],
                            o = S(
                              {
                                zIndex: 2,
                                position: "absolute",
                                pointerEvents: "none",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                              },
                              n.style
                            );
                          return s.a.createElement(
                            "canvas",
                            O(
                              {
                                width: e.width,
                                height: e.height,
                                ref: this.canvas,
                              },
                              n,
                              { style: o }
                            )
                          );
                        },
                      },
                    ]) && T(e.prototype, n),
                    o && T(e, o),
                    i
                  );
                })(i.Component);
              function F(t) {
                var e = {},
                  n = {},
                  o = [].concat(v(Object.keys(g)), [
                    "confettiSource",
                    "drawShape",
                    "onConfettiComplete",
                  ]),
                  r = ["canvasRef"];
                for (var i in t) {
                  var s = t[i];
                  o.includes(i)
                    ? (e[i] = s)
                    : r.includes(i)
                    ? (r[i] = s)
                    : (n[i] = s);
                }
                return [e, n, {}];
              }
              R(N, "defaultProps", S({}, g)),
                R(N, "displayName", "ReactConfetti");
              var Z = s.a.forwardRef(function (t, e) {
                return s.a.createElement(N, O({ canvasRef: e }, t));
              });
              e.default = Z;
            },
          ]).default));
    },
    2549: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          SSRWrapper: function () {
            return Le;
          },
          appConfig: function () {
            return ze;
          },
          appMeta: function () {
            return Re;
          },
          defaultData: function () {
            return Ie;
          },
        });
      var o = n(59499),
        r = n(9080),
        i = n(76715),
        s = n(29359),
        c = n(19039),
        a = {
          days: "Days",
          hours: "Hours",
          minutes: "Minutes",
          seconds: "Seconds",
        },
        l = n(17674),
        u = n(79853),
        d = n(2879),
        p = n(52426),
        f = n(87517),
        h = n(34137),
        b = n(58926),
        m = n(39423),
        x = n(11474),
        y = n(96355),
        g = n(60813),
        w = n(59714),
        v = n(85958),
        j = n(64864),
        O = n(16870),
        C = n(99875),
        S = n(75853),
        P = n(45353),
        D = P.default.div.withConfig({
          displayName: "countdownContentstyles__StyledTimerInputWrapper",
          componentId: "sc-1mxqqt6-0",
        })([
          "display:flex;justify-content:flex-start;.form-input{display:flex;flex-direction:row;margin-left:10px;input{max-width:80px;gap:0;}}",
        ]),
        k = n(74512);
      function _(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function T(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? _(Object(n), !0).forEach(function (e) {
                (0, o.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : _(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var M = n(87530),
        B = n(79014),
        E = n(80079);
      M.extend(B), M.extend(E);
      var I = function () {
        var t = (0, f.O)(),
          e = (0, l.Z)(t, 2),
          n = e[0],
          r = e[1],
          i = n.content;
        n.settings;
        function s(t, e) {
          r({ content: T(T({}, i), {}, (0, o.Z)({}, t, e)) });
        }
        var c = "countup" === (0, d.M)().meta.slug;
        return (0, k.jsx)(k.Fragment, {
          children: (0, k.jsxs)(O.s, {
            children: [
              (0, k.jsx)(C.S, { children: "Timer" }),
              (0, k.jsxs)(m.p, {
                flow: "column",
                children: [
                  (0, k.jsx)(x.l, { children: "Timer Title" }),
                  (0, k.jsx)(g.y, {
                    children: (0, k.jsx)(b.hJ, {
                      localeKey: "title",
                      value: i.timerTitle,
                      type: "text",
                      placeholder: "Enter text...",
                      onChange: function (t) {
                        return s("timerTitle", t.target.value);
                      },
                    }),
                  }),
                ],
              }),
              (0, k.jsxs)(m.p, {
                flow: "column",
                children: [
                  (0, k.jsx)(x.l, { children: "Timer Description" }),
                  (0, k.jsx)(g.y, {
                    children: (0, k.jsx)(b.R5, {
                      localeKey: "description",
                      value: i.timerDescription,
                      type: "text",
                      placeholder: "Enter text...",
                      onChange: function (t) {
                        return s("timerDescription", t.target.value);
                      },
                    }),
                  }),
                ],
              }),
              (0, k.jsxs)(m.p, {
                flow: "column",
                children: [
                  (0, k.jsx)(x.l, { children: "Countdown Button Text" }),
                  (0, k.jsx)(g.y, {
                    children: (0, k.jsx)(b.hJ, {
                      localeKey: "button",
                      type: "text",
                      value: i.timerButtonText,
                      placeholder: "Enter text...",
                      onChange: function (t) {
                        return s("timerButtonText", t.target.value);
                      },
                    }),
                  }),
                ],
              }),
              (0, k.jsxs)(m.p, {
                flow: "column",
                children: [
                  (0, k.jsx)(x.l, { children: "Countdown Button Link" }),
                  (0, k.jsx)(g.y, {
                    children: (0, k.jsx)(b.hJ, {
                      localeKey: "button-link",
                      type: "url",
                      value: i.timerButtonLink,
                      placeholder: "Enter URL...",
                      onChange: function (t) {
                        return s("timerButtonLink", t.target.value);
                      },
                    }),
                  }),
                ],
              }),
              !c &&
                (0, k.jsxs)(m.p, {
                  flow: "row",
                  children: [
                    (0, k.jsx)(x.l, { children: "Timer type" }),
                    (0, k.jsx)(g.y, {
                      children: (0, k.jsx)(S.P, {
                        value: i.countdownType || "count-to-date",
                        onChange: function (t) {
                          return s("countdownType", t);
                        },
                        options: [
                          { value: "count-to-date", label: "Count To Date" },
                          { value: "count-time-by-user", label: "Evergreen" },
                        ],
                      }),
                    }),
                  ],
                }),
              "count-time-by-user" === i.countdownType
                ? (function () {
                    var t, e, n;
                    return (0, k.jsxs)(k.Fragment, {
                      children: [
                        (0, k.jsxs)(m.p, {
                          children: [
                            (0, k.jsxs)(x.l, {
                              children: [
                                "Countdown Timer",
                                (0, k.jsx)(y.u, {
                                  content:
                                    "Amount of time the countdown will count for each site visitor.",
                                }),
                              ],
                            }),
                            (0, k.jsxs)(D, {
                              children: [
                                (0, k.jsxs)(g.y, {
                                  className: "form-input",
                                  children: [
                                    (0, k.jsx)("label", {
                                      htmlFor: "",
                                      children: "days",
                                    }),
                                    (0, k.jsx)(w.I, {
                                      type: "number",
                                      min: 0,
                                      value: i.timerDays,
                                      onChange: function (t) {
                                        s(
                                          "timerDays",
                                          parseFloat(t.target.value || "0")
                                        );
                                      },
                                    }),
                                  ],
                                }),
                                (0, k.jsxs)(g.y, {
                                  className: "form-input",
                                  children: [
                                    (0, k.jsx)("label", {
                                      htmlFor: "",
                                      children: "hours",
                                    }),
                                    (0, k.jsx)(w.I, {
                                      type: "number",
                                      min: 0,
                                      max: 24,
                                      value: i.timerHours,
                                      onChange: function (t) {
                                        s(
                                          "timerHours",
                                          parseFloat(t.target.value || "0")
                                        );
                                      },
                                    }),
                                  ],
                                }),
                                (0, k.jsxs)(g.y, {
                                  className: "form-input",
                                  children: [
                                    (0, k.jsx)("label", {
                                      htmlFor: "",
                                      children: "minutes",
                                    }),
                                    (0, k.jsx)(w.I, {
                                      type: "number",
                                      min: 0,
                                      max: 59,
                                      value: i.timerMinutes,
                                      onChange: function (t) {
                                        s(
                                          "timerMinutes",
                                          parseFloat(t.target.value || "0")
                                        );
                                      },
                                    }),
                                  ],
                                }),
                                (0, k.jsxs)(g.y, {
                                  className: "form-input",
                                  children: [
                                    (0, k.jsx)("label", {
                                      htmlFor: "",
                                      children: "seconds",
                                    }),
                                    (0, k.jsx)(w.I, {
                                      type: "number",
                                      min: 0,
                                      max: 59,
                                      value: i.timerSeconds,
                                      onChange: function (t) {
                                        s(
                                          "timerSeconds",
                                          parseFloat(t.target.value || "0")
                                        );
                                      },
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, h.J)({
                          label: "Countdown Expires",
                          inputElm: (0, k.jsx)(v.r, {
                            isChecked:
                              !0 ===
                              (null === (t = i.evergreenExpDate) || void 0 === t
                                ? void 0
                                : t.expires),
                            onChange: function (t, e) {
                              return s(
                                "evergreenExpDate",
                                T(T({}, i.evergreenExpDate), {}, { expires: e })
                              );
                            },
                          }),
                        }),
                        (null === (e = i.evergreenExpDate) || void 0 === e
                          ? void 0
                          : e.expires) &&
                          (0, k.jsx)(k.Fragment, {
                            children: (0, h.J)({
                              label: "Countdown Expiration Date",
                              flow: "row",
                              inputElm: (0, k.jsx)(j.M, {
                                onChange: function (t) {
                                  s(
                                    "evergreenExpDate",
                                    T(
                                      T({}, i.evergreenExpDate),
                                      {},
                                      { date: M(t).valueOf() }
                                    )
                                  );
                                },
                                showTimeSelect: !0,
                                placeholderText: "Click to select a date",
                                dateFormat: "MMMM d, yyyy h:mm aa",
                                selected: M(
                                  null === (n = i.evergreenExpDate) ||
                                    void 0 === n
                                    ? void 0
                                    : n.date
                                ).toDate(),
                              }),
                            }),
                          }),
                      ],
                    });
                  })()
                : (0, k.jsx)(k.Fragment, {
                    children: (0, k.jsxs)(m.p, {
                      flow: "row",
                      children: [
                        (0, k.jsx)(x.l, {
                          children: c
                            ? "Countup starts at"
                            : "Countdown ends at",
                        }),
                        (0, k.jsx)(g.y, {
                          children: (0, k.jsx)(j.M, {
                            onChange: function (t) {
                              s("expDate", M(t).valueOf());
                            },
                            showTimeSelect: !0,
                            placeholderText: "Click to select a date",
                            dateFormat: "MMMM d, yyyy h:mm aa",
                            selected: M(i.expDate).toDate(),
                          }),
                        }),
                      ],
                    }),
                  }),
            ],
          }),
        });
      };
      function z(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function R(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? z(Object(n), !0).forEach(function (e) {
                (0, o.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : z(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var L,
        N = function () {
          var t = (0, f.O)(),
            e = (0, l.Z)(t, 2),
            n = e[0],
            r = e[1],
            i = n.content;
          function s(t, e) {
            r({ content: R(R({}, i), {}, (0, o.Z)({}, t, e)) });
          }
          return (0, k.jsx)(k.Fragment, {
            children: (0, k.jsxs)(O.s, {
              children: [
                (0, k.jsx)(C.S, { children: "Post Countdown" }),
                (0, k.jsxs)(m.p, {
                  flow: "row",
                  children: [
                    (0, k.jsx)(x.l, { children: "Timer type" }),
                    (0, k.jsx)(g.y, {
                      children: (0, k.jsx)(S.P, {
                        value: i.postCountdownType,
                        onChange: function (t) {
                          return s("postCountdownType", t);
                        },
                        options: [
                          { value: "message", label: "Show Message" },
                          { value: "hide", label: "Hide The Countdown " },
                        ],
                      }),
                    }),
                  ],
                }),
                "message" === i.postCountdownType &&
                  (0, k.jsxs)(k.Fragment, {
                    children: [
                      (0, k.jsxs)(m.p, {
                        flow: "row",
                        children: [
                          (0, k.jsx)(x.l, { children: "Title" }),
                          (0, k.jsx)(g.y, {
                            children: (0, k.jsx)(b.hJ, {
                              localeKey: "post-title",
                              type: "text",
                              value: i.postTitle,
                              placeholder: "Enter text...",
                              onChange: function (t) {
                                return s("postTitle", t.target.value);
                              },
                            }),
                          }),
                        ],
                      }),
                      (0, k.jsxs)(m.p, {
                        children: [
                          (0, k.jsx)(x.l, { children: "Description" }),
                          (0, k.jsx)(g.y, {
                            children: (0, k.jsx)(b.R5, {
                              localeKey: "post-description",
                              type: "text",
                              value: i.postDescription,
                              placeholder: "Enter text...",
                              onChange: function (t) {
                                return s("postDescription", t.target.value);
                              },
                            }),
                          }),
                        ],
                      }),
                      (0, k.jsxs)(m.p, {
                        flow: "row",
                        children: [
                          (0, k.jsx)(x.l, { children: "Button Text" }),
                          (0, k.jsx)(g.y, {
                            children: (0, k.jsx)(b.hJ, {
                              localeKey: "post-button",
                              type: "text",
                              value: i.postButtonText,
                              placeholder: "Enter text...",
                              onChange: function (t) {
                                return s("postButtonText", t.target.value);
                              },
                            }),
                          }),
                        ],
                      }),
                      (0, k.jsxs)(m.p, {
                        flow: "row",
                        children: [
                          (0, k.jsx)(x.l, { children: "Button Link" }),
                          (0, k.jsx)(g.y, {
                            children: (0, k.jsx)(b.hJ, {
                              localeKey: "post-button-link",
                              type: "url",
                              value: i.postButtonLink,
                              placeholder: "Enter URL...",
                              onChange: function (t) {
                                return s("postButtonLink", t.target.value);
                              },
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                "hide" !== i.postCountdownType &&
                  (0, k.jsxs)(k.Fragment, {
                    children: [
                      (0, k.jsxs)(m.p, {
                        flow: "row",
                        children: [
                          (0, k.jsx)(x.l, { children: "Show Confetti" }),
                          (0, k.jsx)(g.y, {
                            children: (0, k.jsx)(v.r, {
                              isChecked: i.showPostConfetti,
                              onChange: function (t, e) {
                                return s("showPostConfetti", e);
                              },
                            }),
                          }),
                        ],
                      }),
                      (0, k.jsxs)(m.p, {
                        flow: "row",
                        children: [
                          (0, k.jsx)(x.l, { children: "Show Countdown" }),
                          (0, k.jsx)(g.y, {
                            children: (0, k.jsx)(v.r, {
                              isChecked: i.showPostCountdown,
                              onChange: function (t, e) {
                                return s("showPostCountdown", e);
                              },
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, k.jsxs)(m.p, {
                  flow: "row",
                  children: [
                    (0, k.jsx)(x.l, { children: "Redirect" }),
                    (0, k.jsx)(g.y, {
                      children: (0, k.jsx)(v.r, {
                        isChecked: !!i.postRedirect,
                        onChange: function (t, e) {
                          return s("postRedirect", e);
                        },
                      }),
                    }),
                  ],
                }),
                i.postRedirect &&
                  (0, k.jsxs)(k.Fragment, {
                    children: [
                      (0, k.jsxs)(m.p, {
                        flow: "row",
                        children: [
                          (0, k.jsx)(x.l, { children: "Redirect URL" }),
                          (0, k.jsx)(g.y, {
                            children: (0, k.jsx)(b.hJ, {
                              localeKey: "post-redirect-url",
                              type: "url",
                              value: i.postRedirectUrl,
                              placeholder: "Enter URL...",
                              onChange: function (t) {
                                return s("postRedirectUrl", t.target.value);
                              },
                            }),
                          }),
                        ],
                      }),
                      (0, k.jsxs)(m.p, {
                        flow: "row",
                        children: [
                          (0, k.jsx)(x.l, { children: "Open in new tab" }),
                          (0, k.jsx)(g.y, {
                            children: (0, k.jsx)(v.r, {
                              isChecked: !!i.postRedirectNewTab,
                              onChange: function (t, e) {
                                return s("postRedirectNewTab", e);
                              },
                            }),
                          }),
                        ],
                      }),
                      (0, k.jsxs)(m.p, {
                        flow: "row",
                        children: [
                          (0, k.jsx)(x.l, {
                            children: "Redirect Delay (seconds)",
                          }),
                          (0, k.jsx)(g.y, {
                            children: (0, k.jsx)(w.Y, {
                              value: i.postRedirectDelayInSeconds,
                              onChange: function (t) {
                                return s("postRedirectDelayInSeconds", t);
                              },
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          });
        },
        F = function () {
          var t = (0, u.j)(),
            e = (0, l.Z)(t, 2),
            n = e[0],
            o = e[1],
            r = (0, d.M)().meta.slug,
            i = [
              {
                id: "countdown",
                name: "countup" !== r ? "Countdown" : "Countup",
                component: (0, k.jsx)(I, {}),
              },
            ];
          return (
            "countup" !== r &&
              i.push({
                id: "post-countdown",
                name: "Post Countdown",
                component: (0, k.jsx)(N, {}),
              }),
            (0, k.jsx)(p.m, {
              watchActiveTabId: !0,
              activeTabId: n.content,
              onChange: function (t) {
                o({ content: t });
              },
              items: i,
            })
          );
        },
        Z = n(61620),
        A = n(93704),
        U = n(68478),
        W = n(5649),
        H = function () {
          var t = (0, f.O)(),
            e = ((0, l.Z)(t, 1)[0], (0, Z.q)({ defaultWidgetSettings: {} })),
            n = (e.emailSettings, e.getRedirectLink),
            o = (0, e.getColorScheme)();
          o.background, o.accent, o.text;
          return (0, k.jsx)(W.P, {
            widget: (0, k.jsx)(A.n.Container, {
              style: {
                margin: "0 auto",
                fontFamily:
                  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
                maxWidth: "520px",
                width: "100%",
                borderRadius: "10px",
              },
              children: (0, k.jsx)(A.n.Section, {
                style: { textAlign: "center" },
                children: (0, k.jsx)(A.n.Link, {
                  href: n("email-link-click"),
                  children: (0, k.jsx)(U.P, {}),
                }),
              }),
            }),
            settings: (0, k.jsx)(k.Fragment, {}),
          });
        },
        Y = n(94191);
      !(function (t) {
        t.BUTTON_CLICK = "button-click";
      })(L || (L = {}));
      var K = [
          {
            name: L.BUTTON_CLICK,
            label: "Button Click",
            eventType: "conversion",
          },
        ],
        q = function () {
          var t = [
            {
              group: "analytics",
              props: {
                fields: K.map(function (t) {
                  return { name: t.name, label: t.label };
                }),
              },
            },
          ];
          return (0, k.jsx)(Y.B, { integrations: t });
        },
        G = n(22477),
        J = n(48380),
        Q = n(1571),
        V = n(62084);
      function X(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function $(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? X(Object(n), !0).forEach(function (e) {
                (0, o.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : X(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var tt = n(87530),
        et = n(79014),
        nt = n(80079);
      tt.extend(et), tt.extend(nt);
      var ot = function () {
          var t = (0, G.k)(),
            e = (0, f.O)(),
            n = (0, l.Z)(e, 2),
            r = n[0],
            i = n[1],
            s = r.settings,
            c = (0, J.J)();
          function a(e, n, r) {
            t.getFeatureValue(e)
              ? i({ settings: $($({}, s), {}, (0, o.Z)({}, e, n)) })
              : c("Your current plan doesn't support this feature.");
          }
          return (0, k.jsxs)(k.Fragment, {
            children: [
              (0, k.jsx)(Q.F, {}),
              (0, k.jsxs)(O.s, {
                children: [
                  (0, k.jsx)(C.S, { children: "General" }),
                  (0, k.jsxs)(m.p, {
                    flow: "row",
                    children: [
                      (0, k.jsx)(x.l, { children: "Timezone" }),
                      (0, k.jsx)(g.y, {
                        children: (0, k.jsx)(V.$, {
                          value: s.timezone || tt.tz.guess(),
                          onChange: function (t) {
                            return i({
                              settings: $($({}, s), {}, { timezone: t }),
                            });
                          },
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, k.jsxs)(O.s, {
                children: [
                  (0, k.jsx)(C.S, { children: "Visibility" }),
                  (0, k.jsxs)(m.p, {
                    flow: "row",
                    children: [
                      (0, k.jsx)(x.l, { children: "Show Title" }),
                      (0, k.jsx)(g.y, {
                        children: (0, k.jsx)(v.r, {
                          isChecked: s.showTitle,
                          onChange: function (t, e) {
                            return a("showTitle", e);
                          },
                        }),
                      }),
                    ],
                  }),
                  (0, k.jsxs)(m.p, {
                    flow: "row",
                    children: [
                      (0, k.jsx)(x.l, { children: "Show Container" }),
                      (0, k.jsx)(g.y, {
                        children: (0, k.jsx)(v.r, {
                          isChecked: s.showContainer,
                          onChange: function (t, e) {
                            return a("showContainer", e);
                          },
                        }),
                      }),
                    ],
                  }),
                  (0, k.jsxs)(m.p, {
                    flow: "row",
                    children: [
                      (0, k.jsx)(x.l, { children: "Show Digit Box" }),
                      (0, k.jsx)(g.y, {
                        children: (0, k.jsx)(v.r, {
                          isChecked: s.showCards,
                          onChange: function (t, e) {
                            return a("showCards", e);
                          },
                        }),
                      }),
                    ],
                  }),
                  (0, k.jsxs)(m.p, {
                    flow: "row",
                    children: [
                      (0, k.jsx)(x.l, { children: "Show Colon" }),
                      (0, k.jsx)(g.y, {
                        children: (0, k.jsx)(v.r, {
                          isChecked: s.showColon,
                          onChange: function (t, e) {
                            return a("showColon", e);
                          },
                        }),
                      }),
                    ],
                  }),
                  (0, k.jsxs)(m.p, {
                    flow: "row",
                    children: [
                      (0, k.jsx)(x.l, { children: "Show Labels" }),
                      (0, k.jsx)(g.y, {
                        children: (0, k.jsx)(v.r, {
                          isChecked: s.showLabels,
                          onChange: function (t, e) {
                            return a("showLabels", e);
                          },
                        }),
                      }),
                    ],
                  }),
                  (0, k.jsxs)(m.p, {
                    flow: "row",
                    children: [
                      (0, k.jsx)(x.l, { children: "Show Days" }),
                      (0, k.jsx)(g.y, {
                        children: (0, k.jsx)(v.r, {
                          isChecked: s.showDays,
                          onChange: function (t, e) {
                            return a("showDays", e);
                          },
                        }),
                      }),
                    ],
                  }),
                  (0, k.jsxs)(m.p, {
                    flow: "row",
                    children: [
                      (0, k.jsx)(x.l, { children: "Show Hours" }),
                      (0, k.jsx)(g.y, {
                        children: (0, k.jsx)(v.r, {
                          isChecked: s.showHours,
                          onChange: function (t, e) {
                            return a("showHours", e);
                          },
                        }),
                      }),
                    ],
                  }),
                  (0, k.jsxs)(m.p, {
                    flow: "row",
                    children: [
                      (0, k.jsx)(x.l, { children: "Show Minutes" }),
                      (0, k.jsx)(g.y, {
                        children: (0, k.jsx)(v.r, {
                          isChecked: s.showMinutes,
                          onChange: function (t, e) {
                            return a("showMinutes", e);
                          },
                        }),
                      }),
                    ],
                  }),
                  (0, k.jsxs)(m.p, {
                    flow: "row",
                    children: [
                      (0, k.jsx)(x.l, { children: "Show Seconds" }),
                      (0, k.jsx)(g.y, {
                        children: (0, k.jsx)(v.r, {
                          isChecked: s.showSeconds,
                          onChange: function (t, e) {
                            return a("showSeconds", e);
                          },
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        rt = n(21687),
        it = n(47674),
        st = n(56025),
        ct = n(45831),
        at = n(53097);
      function lt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function ut(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? lt(Object(n), !0).forEach(function (e) {
                (0, o.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : lt(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var dt = function () {
          var t,
            e,
            n = (0, f.O)(),
            r = (0, l.Z)(n, 2),
            i = r[0],
            s = r[1],
            c = i.styles,
            a = (0, d.M)().meta.slug,
            u = (0, rt.o)(c),
            p = u.setDeviceStyle,
            h = u.getDeviceStyle;
          function b(t, e) {
            p(t, e, function () {
              s({ styles: ut(ut({}, c), {}, (0, o.Z)({}, t, e)) });
            });
          }
          var y = "countup" === a;
          return (0, k.jsxs)(k.Fragment, {
            children: [
              (0, k.jsxs)(O.s, {
                children: [
                  (0, k.jsx)(C.S, { children: "General" }),
                  (0, k.jsx)(it._, {
                    selectedFontId: h("fontId") || "font_lato",
                    updateFont: function (t) {
                      b("fontId", t);
                    },
                  }),
                ],
              }),
              (0, k.jsxs)(O.s, {
                children: [
                  (0, k.jsx)(C.S, { children: y ? "Countup" : "Countdown" }),
                  (0, k.jsxs)(m.p, {
                    flow: "row",
                    children: [
                      (0, k.jsx)(x.l, { children: "Size" }),
                      (0, k.jsx)(g.y, {
                        children: (0, k.jsx)(S.P, {
                          value: h("countdownSize"),
                          onChange: function (t) {
                            return b("countdownSize", t);
                          },
                          options: [
                            { value: "big", label: "Big" },
                            { value: "medium", label: "Medium" },
                            { value: "small", label: "Small" },
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, k.jsxs)(m.p, {
                    flow: "row",
                    children: [
                      (0, k.jsx)(x.l, { children: "Container Background" }),
                      (0, k.jsx)(g.y, {
                        children: (0, k.jsx)(ct.e, {
                          colors: h("containerBg"),
                          onChange: function (t) {
                            return b("containerBg", t);
                          },
                          max: 4,
                        }),
                      }),
                    ],
                  }),
                  (0, k.jsxs)(m.p, {
                    flow: "row",
                    children: [
                      (0, k.jsx)(x.l, { children: "Container Border Radius" }),
                      (0, k.jsx)(g.y, {
                        children: (0, k.jsx)(at.i, {
                          min: 0,
                          max: 50,
                          value: h("containerBorderRadius"),
                          onChange: function (t) {
                            return b("containerBorderRadius", t);
                          },
                          tooltipFormatter: function (t) {
                            return "".concat(t, "px");
                          },
                        }),
                      }),
                    ],
                  }),
                  (0, k.jsxs)(m.p, {
                    flow: "row",
                    children: [
                      (0, k.jsx)(x.l, { children: "Digit Block Background" }),
                      (0, k.jsx)(g.y, {
                        children: (0, k.jsx)(ct.e, {
                          colors: h("cardsBg"),
                          onChange: function (t) {
                            return b("cardsBg", t);
                          },
                          max: 4,
                        }),
                      }),
                    ],
                  }),
                  "layout-4" !== h("layout") &&
                    (0, k.jsxs)(m.p, {
                      flow: "row",
                      children: [
                        (0, k.jsx)(x.l, {
                          children: "Digit Block Border Radius",
                        }),
                        (0, k.jsx)(g.y, {
                          children: (0, k.jsx)(at.i, {
                            min: 0,
                            max: 50,
                            value: h("cardsBorderRadius"),
                            onChange: function (t) {
                              return b("cardsBorderRadius", t);
                            },
                            tooltipFormatter: function (t) {
                              return "".concat(t, "px");
                            },
                          }),
                        }),
                      ],
                    }),
                  (0, k.jsxs)(m.p, {
                    flow: "row",
                    children: [
                      (0, k.jsx)(x.l, { children: "Digit Block Border Width" }),
                      (0, k.jsx)(g.y, {
                        children: (0, k.jsx)(at.i, {
                          min: 0,
                          max: 10,
                          value: h("cardsBorderWidth"),
                          onChange: function (t) {
                            return b("cardsBorderWidth", t);
                          },
                          tooltipFormatter: function (t) {
                            return "".concat(t, "px");
                          },
                        }),
                      }),
                    ],
                  }),
                  (0, k.jsxs)(m.p, {
                    flow: "row",
                    children: [
                      (0, k.jsx)(x.l, { children: "Digit Block Border Color" }),
                      (0, k.jsx)(g.y, {
                        children: (0, k.jsx)(st.Rc, {
                          showUndo: !0,
                          selectedColor: h("cardsBorderColor"),
                          onChange: function (t) {
                            return b("cardsBorderColor", t);
                          },
                        }),
                      }),
                    ],
                  }),
                  (0, k.jsxs)(m.p, {
                    flow: "row",
                    children: [
                      (0, k.jsx)(x.l, { children: "Digits Color" }),
                      (0, k.jsx)(g.y, {
                        children: (0, k.jsx)(st.Rc, {
                          showUndo: !0,
                          selectedColor: h("numbers").color,
                          onChange: function (t) {
                            return b(
                              "numbers",
                              ut(ut({}, h("numbers") || {}), {}, { color: t })
                            );
                          },
                        }),
                      }),
                    ],
                  }),
                  "flip" === h("animationType") ||
                  ("layout-1" !== h("layout") &&
                    "layout-4" !== h("layout") &&
                    "layout-3" !== h("layout"))
                    ? (0, k.jsxs)(k.Fragment, {
                        children: [
                          (0, k.jsxs)(m.p, {
                            flow: "row",
                            children: [
                              (0, k.jsx)(x.l, { children: "Labels Color" }),
                              (0, k.jsx)(g.y, {
                                children: (0, k.jsx)(st.Rc, {
                                  showUndo: !0,
                                  selectedColor: h("labels2").color,
                                  onChange: function (t) {
                                    return b(
                                      "labels2",
                                      ut(
                                        ut({}, h("labels2") || {}),
                                        {},
                                        { color: t }
                                      )
                                    );
                                  },
                                }),
                              }),
                            ],
                          }),
                          (0, k.jsxs)(m.p, {
                            flow: "row",
                            children: [
                              (0, k.jsx)(x.l, {
                                children: "Labels Background Color",
                              }),
                              (0, k.jsx)(g.y, {
                                children: (0, k.jsx)(st.Rc, {
                                  showUndo: !0,
                                  selectedColor: h("labels2").backgroundColor,
                                  onChange: function (t) {
                                    return b(
                                      "labels2",
                                      ut(
                                        ut({}, h("labels2") || {}),
                                        {},
                                        { backgroundColor: t }
                                      )
                                    );
                                  },
                                }),
                              }),
                            ],
                          }),
                        ],
                      })
                    : (0, k.jsxs)(m.p, {
                        flow: "row",
                        children: [
                          (0, k.jsx)(x.l, { children: "Labels Color" }),
                          (0, k.jsx)(g.y, {
                            children: (0, k.jsx)(st.Rc, {
                              showUndo: !0,
                              selectedColor: h("labels").color,
                              onChange: function (t) {
                                return b(
                                  "labels",
                                  ut(
                                    ut({}, h("labels") || {}),
                                    {},
                                    { color: t }
                                  )
                                );
                              },
                            }),
                          }),
                        ],
                      }),
                  (0, k.jsxs)(m.p, {
                    flow: "row",
                    children: [
                      (0, k.jsx)(x.l, { children: "Colon Color" }),
                      (0, k.jsx)(g.y, {
                        children: (0, k.jsx)(st.Rc, {
                          showUndo: !0,
                          selectedColor: h("colonColor"),
                          onChange: function (t) {
                            return b("colonColor", t);
                          },
                        }),
                      }),
                    ],
                  }),
                  (0, k.jsxs)(m.p, {
                    flow: "row",
                    children: [
                      (0, k.jsx)(x.l, { children: "Button Color" }),
                      (0, k.jsx)(g.y, {
                        children: (0, k.jsx)(st.I7, {
                          onChange: function (t) {
                            return b("button", t);
                          },
                          cssProps: h("button"),
                        }),
                      }),
                    ],
                  }),
                  (0, k.jsxs)(m.p, {
                    flow: "row",
                    children: [
                      (0, k.jsx)(x.l, { children: "Button Text Color" }),
                      (0, k.jsx)(g.y, {
                        children: (0, k.jsx)(st.Rc, {
                          showUndo: !0,
                          selectedColor:
                            null === (t = h("button")) || void 0 === t
                              ? void 0
                              : t.color,
                          onChange: function (t) {
                            return b(
                              "button",
                              ut(ut({}, h("button") || {}), {}, { color: t })
                            );
                          },
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, k.jsxs)(O.s, {
                children: [
                  (0, k.jsx)(C.S, { children: "Post Countdown Section" }),
                  (0, k.jsxs)(m.p, {
                    flow: "row",
                    children: [
                      (0, k.jsx)(x.l, { children: "Container Background" }),
                      (0, k.jsx)(g.y, {
                        children: (0, k.jsx)(ct.e, {
                          colors: h("postContainerBg"),
                          onChange: function (t) {
                            return b("postContainerBg", t);
                          },
                          max: 4,
                        }),
                      }),
                    ],
                  }),
                  (0, k.jsxs)(m.p, {
                    flow: "row",
                    children: [
                      (0, k.jsx)(x.l, { children: "Title Color" }),
                      (0, k.jsx)(g.y, {
                        children: (0, k.jsx)(st.Rc, {
                          showUndo: !0,
                          selectedColor: h("postTitle").color,
                          onChange: function (t) {
                            return b(
                              "postTitle",
                              ut(ut({}, h("postTitle") || {}), {}, { color: t })
                            );
                          },
                        }),
                      }),
                    ],
                  }),
                  (0, k.jsxs)(m.p, {
                    flow: "row",
                    children: [
                      (0, k.jsx)(x.l, { children: "Description Color" }),
                      (0, k.jsx)(g.y, {
                        children: (0, k.jsx)(st.Rc, {
                          showUndo: !0,
                          selectedColor: h("postDescription").color,
                          onChange: function (t) {
                            return b(
                              "postDescription",
                              ut(
                                ut({}, h("postDescription") || {}),
                                {},
                                { color: t }
                              )
                            );
                          },
                        }),
                      }),
                    ],
                  }),
                  (0, k.jsxs)(m.p, {
                    flow: "row",
                    children: [
                      (0, k.jsx)(x.l, { children: "Button Color" }),
                      (0, k.jsx)(g.y, {
                        children: (0, k.jsx)(st.I7, {
                          onChange: function (t) {
                            return b("postButton", t);
                          },
                          cssProps: h("postButton"),
                        }),
                      }),
                    ],
                  }),
                  (0, k.jsxs)(m.p, {
                    flow: "row",
                    children: [
                      (0, k.jsx)(x.l, { children: "Button Text Color" }),
                      (0, k.jsx)(g.y, {
                        children: (0, k.jsx)(st.Rc, {
                          showUndo: !0,
                          selectedColor:
                            null === (e = h("postButton")) || void 0 === e
                              ? void 0
                              : e.color,
                          onChange: function (t) {
                            return b(
                              "postButton",
                              ut(
                                ut({}, h("postButton") || {}),
                                {},
                                { color: t }
                              )
                            );
                          },
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        pt = n(87082),
        ft = n(29700),
        ht = function (t) {
          var e = t.onSelect,
            n = (0, f.O)(),
            o = (0, l.Z)(n, 1)[0].styles,
            r = (0, rt.o)(o).getDeviceStyle;
          function i(t) {
            e("layout", t);
          }
          function s(t) {
            e("animationType", t);
          }
          return (0, k.jsxs)(k.Fragment, {
            children: [
              (0, k.jsxs)(O.s, {
                children: [
                  (0, k.jsx)(C.S, { children: "Animation Types" }),
                  (0, k.jsx)(ft.m, {
                    skins: mt,
                    onSelect: function (t) {
                      s(t.layout);
                    },
                    selectedIdx: mt.findIndex(function (t) {
                      return t.name === r("animationType");
                    }),
                  }),
                ],
              }),
              "flip" !== o.animationType &&
                (0, k.jsxs)(O.s, {
                  children: [
                    (0, k.jsx)(C.S, { children: "Layouts" }),
                    (0, k.jsx)(ft.m, {
                      skins: bt,
                      onSelect: function (t) {
                        i(t.layout);
                      },
                      selectedIdx: bt.findIndex(function (t) {
                        return t.name === r("layout");
                      }),
                    }),
                  ],
                }),
            ],
          });
        },
        bt = [
          {
            id: 0,
            name: "layout-1",
            skinStyles: { layout: "layout-1" },
            thumbnail:
              "https://website-assets.commoninja.com/editor/Layouts+Component/countdown/layout+1.svg",
          },
          {
            id: 1,
            name: "layout-2",
            skinStyles: { layout: "layout-2" },
            thumbnail:
              "https://website-assets.commoninja.com/editor/Layouts+Component/countdown/layout+2.svg",
          },
          {
            id: 2,
            name: "layout-3",
            skinStyles: { layout: "layout-3" },
            thumbnail:
              "https://website-assets.commoninja.com/editor/Layouts+Component/countdown/layout+3.svg",
          },
          {
            id: 3,
            name: "layout-4",
            skinStyles: { layout: "layout-4" },
            thumbnail:
              "https://website-assets.commoninja.com/editor/Layouts+Component/countdown/layout+4.svg",
          },
          {
            id: 4,
            name: "layout-5",
            skinStyles: { layout: "layout-5" },
            thumbnail:
              "https://website-assets.commoninja.com/editor/Layouts+Component/countdown/layout+5.svg",
          },
          {
            id: 5,
            name: "layout-6",
            skinStyles: { layout: "layout-6" },
            thumbnail:
              "https://website-assets.commoninja.com/editor/Layouts+Component/countdown/layout+6.svg",
          },
        ],
        mt = [
          {
            id: 0,
            name: "flip",
            skinStyles: { layout: "flip" },
            thumbnail:
              "https://website-assets.commoninja.com/editor/Layouts+Component/countdown/animation+flip.svg",
          },
          {
            id: 1,
            name: "tick",
            skinStyles: { layout: "tick" },
            thumbnail:
              "https://website-assets.commoninja.com/editor/Layouts+Component/countdown/countdown-layout-1.svg",
          },
          {
            id: 2,
            name: "dissolve",
            skinStyles: { layout: "dissolve" },
            thumbnail:
              "https://website-assets.commoninja.com/editor/Layouts+Component/countdown/animation+dissolve.svg",
          },
          {
            id: 3,
            name: "normal",
            skinStyles: { layout: "normal" },
            thumbnail:
              "https://website-assets.commoninja.com/editor/Layouts+Component/countdown/animation+normal.svg",
          },
        ];
      function xt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function yt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? xt(Object(n), !0).forEach(function (e) {
                (0, o.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : xt(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var gt = function () {
          var t = (0, f.O)(),
            e = (0, l.Z)(t, 2),
            n = e[0],
            r = e[1],
            i = n.styles,
            s = (0, rt.o)(i).setDeviceStyle;
          return (0, k.jsxs)(k.Fragment, {
            children: [
              (0, k.jsx)(ht, {
                onSelect: function (t, e) {
                  s(t, e, function () {
                    r({ styles: yt(yt({}, i), {}, (0, o.Z)({}, t, e)) });
                  });
                },
              }),
              (0, k.jsx)(pt.k, {}),
            ],
          });
        },
        wt = n(60362),
        vt = n(96333);
      function jt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function Ot(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? jt(Object(n), !0).forEach(function (e) {
                (0, o.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : jt(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var Ct = function () {
          var t = (0, G.k)(),
            e = (0, f.O)(),
            n = (0, l.Z)(e, 2),
            r = n[0],
            i = n[1],
            s = r.styles,
            c = (0, d.M)().meta.slug,
            a = (0, rt.o)(s),
            u = a.setDeviceStyle,
            p = a.getDeviceStyle;
          function h(t, e) {
            u(t, e, function () {
              i({ styles: Ot(Ot({}, s), {}, (0, o.Z)({}, t, e)) });
            });
          }
          var b = [
            {
              value: p("mainWrapper"),
              propName: "mainWrapper",
              label: "Main Wrapper",
            },
            {
              value: p("container"),
              propName: "container",
              label: "Countdown Container",
            },
            { value: p("title"), propName: "title", label: "Title" },
            {
              value: p("description"),
              propName: "description",
              label: "Description",
            },
            { value: p("button"), propName: "button", label: "Button" },
            { value: p("cards"), propName: "cards", label: "Digit Box" },
            { value: p("title"), propName: "title", label: "Title" },
            { value: p("numbers"), propName: "numbers", label: "Numbers" },
            { value: p("labels"), propName: "labels", label: "Labels" },
          ];
          return (
            "countup" !== c &&
              b.push(
                {
                  value: p("postContainer"),
                  propName: "postContainer",
                  label: "Post Countdown Container",
                },
                {
                  value: p("postTitle"),
                  propName: "postTitle",
                  label: "Post Countdown Title",
                },
                {
                  value: p("postDescription"),
                  propName: "postDescription",
                  label: "Post Countdown Description",
                },
                {
                  value: p("postButton"),
                  propName: "postButton",
                  label: "Post Countdown Button",
                }
              ),
            (0, k.jsxs)(k.Fragment, {
              children: [
                (0, k.jsx)(wt.v8, {
                  onChange: function (t, e) {
                    return (function (t, e) {
                      h(t, Ot({}, e));
                    })(t, e);
                  },
                  items: b,
                }),
                (0, k.jsx)(vt.k, {
                  onUpdate: function (t) {
                    h("customCSS", t);
                  },
                  customCSS: p("customCSS"),
                  defaultStyles: "",
                  enabled: t.getFeatureValue("customCSS"),
                  snippets: [
                    {
                      name: "Countdown Container",
                      code: ".countdown-container",
                    },
                    {
                      name: "Countdown Title",
                      code: ".countdown-container h2",
                    },
                    {
                      name: "Countdown Time Labels",
                      code: ".fcc__digit_block_label",
                    },
                    {
                      name: "Countdown Time Numbers",
                      code: ".fcc__digit_block",
                    },
                    {
                      name: "Post Countdown Container",
                      code: ".post-container",
                    },
                    {
                      name: "Post Countdown Digits",
                      code: ".post-container .digits",
                    },
                    {
                      name: "Post Countdown Title",
                      code: ".post-container h2",
                    },
                    {
                      name: "Post Countdown Description",
                      code: ".post-container p:not(.digits)",
                    },
                  ],
                }),
              ],
            })
          );
        },
        St = function () {
          return (0, k.jsx)(p.m, {
            items: [
              { id: "basic", name: "Basic", component: (0, k.jsx)(gt, {}) },
              {
                id: "advanced",
                name: "Advanced",
                component: (0, k.jsx)(dt, {}),
              },
              { id: "custom", name: "Custom", component: (0, k.jsx)(Ct, {}) },
            ],
          });
        };
      function Pt(t) {
        return {
          sections: [
            {
              id: "content",
              component: (0, k.jsx)(F, {}),
              name: "Content",
              icon: s.x.content,
            },
            {
              id: "styles",
              component: (0, k.jsx)(St, {}),
              name: "Look & Feel",
              icon: s.x.styles,
            },
            {
              id: "settings",
              component: (0, k.jsx)(ot, {}),
              name: "Settings",
              icon: s.x.settings,
            },
            {
              id: "localization",
              component: (0, k.jsx)(c.Z, { propsList: a }),
              name: "Localization",
              icon: s.x.localization,
            },
            {
              id: "email",
              context: "main",
              component: (0, k.jsx)(H, {}),
              name: "Email",
              icon: s.x.email,
            },
            {
              id: "integrations",
              component: (0, k.jsx)(q, {}),
              name: "Integrations",
              icon: s.x.integrations,
            },
          ],
          contextTabs:
            "countup" === t
              ? void 0
              : {
                  activeTabIdKey: "content",
                  items: [
                    {
                      id: "countdown",
                      name: "Countdown",
                      globalStateData: { content: "countdown" },
                    },
                    {
                      id: "post-countdown",
                      name: "Post Countdown",
                      globalStateData: { content: "post-countdown" },
                    },
                  ],
                },
          analyticsSettings: { engagementEvents: K },
          loadTemplates: !0,
          deviceRewrites: !0,
          customStyles:
            "\n\t\t\t.resolution-wrapper > .plugin-wrapper:not(.mobile) {\n\t\t\t\tmargin: 40px;\n\t\t\t}\n\t\t",
        };
      }
      function Dt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function kt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Dt(Object(n), !0).forEach(function (e) {
                (0, o.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Dt(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var _t = function (t) {
          var e = t.colors,
            n = e.background,
            o = e.text,
            r = e.accent,
            i = t.styles,
            s = n.background100,
            c = n.background200,
            a = n.background300,
            l = o.text100,
            u = o.text200,
            d = r.accent100;
          return kt(
            kt({}, i),
            {},
            {
              skinId: 0,
              containerBg: [],
              title: kt(kt({}, i.title), {}, { color: l }),
              description: kt(kt({}, i.description), {}, { color: u }),
              button: kt(
                kt({}, i.button),
                {},
                { color: s, backgroundColor: d }
              ),
              cardsBg: [a, c],
              colonColor: c,
              numbers: kt(kt({}, i.numbers), {}, { color: d }),
              labels: kt(kt({}, i.labels), {}, { color: l }),
              labels2: kt(
                kt({}, i.labels2),
                {},
                { color: l, backgroundColor: s }
              ),
              postContainerBg: [s, a],
              postTitle: kt(kt({}, i.postTitle), {}, { color: l }),
              postDescription: kt(kt({}, i.postDescription), {}, { color: u }),
              postButton: kt(
                kt({}, i.button),
                {},
                { color: s, backgroundColor: d }
              ),
            }
          );
        },
        Tt = n(50029),
        Mt = n(87794),
        Bt = n.n(Mt),
        Et = n(34231),
        It = n(96916),
        zt = n(20963),
        Rt = n(48914),
        Lt = n(87388),
        Nt = n(24641),
        Ft = n(32735),
        Zt = n(34596),
        At = n(4409),
        Ut = n(15876),
        Wt = n(34758),
        Ht = n(56222),
        Yt = n.n(Ht);
      function Kt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function qt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Kt(Object(n), !0).forEach(function (e) {
                (0, o.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Kt(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var Gt = function () {
        var t = (0, Wt.Y)().reportEvent,
          e = (0, f.O)(),
          n = (0, l.Z)(e, 1)[0],
          o = n.styles,
          r = n.content,
          i = (0, rt.o)(o).getDeviceStyle,
          s = (0, It.x)().getLocaleValue,
          c = (0, Et.b)().mode;
        return (
          (0, Ft.useEffect)(function () {
            "editor" !== c &&
              "preview" !== c &&
              r.postRedirect &&
              r.postRedirectUrl &&
              window.setTimeout(function () {
                window.open(
                  (0, Lt.D)(r.postRedirectUrl),
                  r.postRedirectNewTab ? "_blank" : "_self"
                );
              }, 1e3 * (r.postRedirectDelayInSeconds || 3));
          }, []),
          "hide" === r.postCountdownType
            ? (0, k.jsx)(k.Fragment, {})
            : (0, k.jsxs)(k.Fragment, {
                children: [
                  (0, k.jsxs)("div", {
                    style: qt(
                      qt({}, i("postContainer")),
                      {},
                      { background: (0, Rt.eZ)(i("postContainerBg")) },
                      i("postContainer").backgroundImage
                        ? {
                            backgroundImage: i("postContainer").backgroundImage,
                          }
                        : {}
                    ),
                    className: "post-container",
                    children: [
                      r.showPostCountdown &&
                        (0, k.jsx)("p", {
                          className: "digits",
                          style: { color: i("numbers").color },
                          children: "00 : 00 : 00 : 00",
                        }),
                      s("post-title", r.postTitle) &&
                        (0, k.jsx)("h2", {
                          style: i("postTitle"),
                          children: s("post-title", r.postTitle),
                        }),
                      s("post-description", r.postDescription) &&
                        (0, k.jsx)("p", {
                          style: i("postDescription"),
                          children: s("post-description", r.postDescription),
                        }),
                      s("post-button", r.postButtonText) &&
                        r.postButtonLink &&
                        (0, k.jsx)("div", {
                          className: "btn-container",
                          children: (0, k.jsx)("a", {
                            style: qt(
                              {},
                              i("postButton") ? i("postButton") : i("labels2")
                            ),
                            href: (0, Lt.D)(r.postButtonLink),
                            target: "_blank",
                            onClick: function () {
                              t(L.BUTTON_CLICK, !0);
                            },
                            children: s("post-button", r.postButtonText),
                          }),
                        }),
                    ],
                  }),
                  r.showPostConfetti &&
                    (0, k.jsx)(Yt(), {
                      recycle: !1,
                      numberOfPieces: 600,
                      gravity: 0.05,
                      style: { maxWidth: "100%", margin: "0 auto" },
                    }),
                ],
              })
        );
      };
      function Jt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function Qt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Jt(Object(n), !0).forEach(function (e) {
                (0, o.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Jt(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var Vt = function (t) {
          var e = t.expDate,
            n = t.onComplete,
            o = (0, f.O)(),
            r = (0, l.Z)(o, 1)[0],
            i = r.styles,
            s = r.settings,
            c = r.content,
            p = (0, rt.o)(i),
            h = p.getDeviceStyle,
            b = (p.getDeviceStyles, p.setDeviceStyles, (0, u.j)()),
            m = (0, l.Z)(b, 1)[0],
            x = (0, d.M)().meta.slug,
            y = (0, It.x)().getLocaleValue,
            g = (0, Ft.useState)(!1),
            w = g[0],
            v = g[1],
            j = Math.floor((Date.now() - new Date(e).getTime()) / 1e3),
            O = (0, Ft.useState)(j),
            C = O[0],
            S = O[1];
          function P() {
            "visible" === document.visibilityState &&
              (v(!0),
              setTimeout(function () {
                v(!1);
              }, 10));
          }
          function D(t) {
            var e = t.days,
              n = t.hours,
              o = t.minutes,
              r = t.seconds,
              i = t.completed,
              l = {},
              u = {
                style: Qt(
                  Qt({}, h("cards")),
                  {},
                  {
                    background: s.showCards
                      ? (0, Rt.eZ)(h("cardsBg"))
                      : "transparent",
                    borderRadius:
                      "layout-4" === h("layout")
                        ? "50em"
                        : "".concat(h("cardsBorderRadius"), "px"),
                    border: ""
                      .concat(h("cardsBorderWidth"), "px solid ")
                      .concat(h("cardsBorderColor")),
                  }
                ),
                className: "box "
                  .concat(s.showColon ? "show-colon" : "", " ")
                  .concat(h("layout"), " ")
                  .concat(h("countdownSize")),
              },
              d = {
                style: Qt(
                  Qt({}, h("labels")),
                  {},
                  { display: s.showLabels ? "" : "none" }
                ),
              };
            switch (
              (("flip" === h("animationType") ||
                ("layout-1" !== h("layout") &&
                  "layout-4" !== h("layout") &&
                  "layout-3" !== h("layout"))) &&
                (d = {
                  style: Qt(
                    Qt({}, h("labels2")),
                    {},
                    { display: s.showLabels ? "" : "none" }
                  ),
                }),
              h("animationType"))
            ) {
              case "dissolve":
              default:
                l = {
                  initial: { y: "0", opacity: 0, position: "absolute" },
                  animate: { y: "0", opacity: 1, position: "static" },
                  exit: { opacity: 0, position: "absolute", width: "100%" },
                };
                break;
              case "tick":
                l = {
                  initial: { y: "-150%", opacity: 0, position: "absolute" },
                  animate: { y: "0", opacity: 1, position: "static" },
                  exit: {
                    y: "100%",
                    opacity: 0,
                    position: "absolute",
                    width: "100%",
                  },
                };
            }
            return (
              (l.transition = {
                duration: "normal" === h("animationType") ? 0 : 0.5,
                ease: "easeOut",
              }),
              (l.className = "time"),
              (l.style = h("numbers")),
              i || "post-countdown" === m.content
                ? (0, k.jsx)(Gt, {})
                : (0, k.jsxs)(k.Fragment, {
                    children: [
                      s.showDays &&
                        (0, k.jsxs)(
                          "div",
                          Qt(
                            Qt({}, u),
                            {},
                            {
                              children: [
                                (0, k.jsx)(Zt.M, {
                                  children: (0, k.jsxs)(
                                    At.E.p,
                                    Qt(
                                      Qt({}, l),
                                      {},
                                      { children: [e < 10 ? "0" : "", e] }
                                    ),
                                    e
                                  ),
                                }),
                                (0, k.jsx)(
                                  "p",
                                  Qt(
                                    Qt({}, d),
                                    {},
                                    {
                                      className: "label",
                                      children: y(
                                        "days",
                                        c.daysLabel || a.days
                                      ),
                                    }
                                  )
                                ),
                              ],
                            }
                          )
                        ),
                      s.showHours &&
                        (0, k.jsxs)(
                          "div",
                          Qt(
                            Qt({}, u),
                            {},
                            {
                              children: [
                                (0, k.jsx)(Zt.M, {
                                  children: (0, k.jsxs)(
                                    At.E.p,
                                    Qt(
                                      Qt({}, l),
                                      {},
                                      { children: [n < 10 ? "0" : "", n] }
                                    ),
                                    n
                                  ),
                                }),
                                (0, k.jsx)(
                                  "p",
                                  Qt(
                                    Qt({}, d),
                                    {},
                                    {
                                      className: "label",
                                      children: y(
                                        "hours",
                                        c.hoursLabel || a.hours
                                      ),
                                    }
                                  )
                                ),
                              ],
                            }
                          )
                        ),
                      s.showMinutes &&
                        (0, k.jsxs)(
                          "div",
                          Qt(
                            Qt({}, u),
                            {},
                            {
                              children: [
                                (0, k.jsx)(Zt.M, {
                                  children: (0, k.jsxs)(
                                    At.E.p,
                                    Qt(
                                      Qt({}, l),
                                      {},
                                      { children: [o < 10 ? "0" : "", o] }
                                    ),
                                    o
                                  ),
                                }),
                                (0, k.jsx)(
                                  "p",
                                  Qt(
                                    Qt({}, d),
                                    {},
                                    {
                                      className: "label",
                                      children: y(
                                        "minutes",
                                        c.minutesLabel || a.minutes
                                      ),
                                    }
                                  )
                                ),
                              ],
                            }
                          )
                        ),
                      s.showSeconds &&
                        (0, k.jsxs)(
                          "div",
                          Qt(
                            Qt({}, u),
                            {},
                            {
                              children: [
                                (0, k.jsx)(Zt.M, {
                                  children: (0, k.jsxs)(
                                    At.E.p,
                                    Qt(
                                      Qt({}, l),
                                      {},
                                      { children: [r < 10 ? "0" : "", r] }
                                    ),
                                    r
                                  ),
                                }),
                                (0, k.jsx)(
                                  "p",
                                  Qt(
                                    Qt({}, d),
                                    {},
                                    {
                                      className: "label",
                                      children: y(
                                        "seconds",
                                        c.secondsLabel || a.seconds
                                      ),
                                    }
                                  )
                                ),
                              ],
                            }
                          )
                        ),
                    ],
                  })
            );
          }
          if (
            ((0, Ft.useEffect)(function () {
              if ("countup" === x) {
                var t = setInterval(function () {
                  S(function (t) {
                    return t + 1;
                  });
                }, 1e3);
                return function () {
                  return clearInterval(t);
                };
              }
            }, []),
            (0, Ft.useEffect)(
              function () {
                if ("countup" === x) {
                  var t = Math.floor(
                    (Date.now() - new Date(e).getTime()) / 1e3
                  );
                  S(t);
                }
                "countdown" === x &&
                  (v(!0),
                  setTimeout(function () {
                    v(!1);
                  }, 10));
              },
              [e]
            ),
            (0, Ft.useEffect)(function () {
              return (
                document.addEventListener("visibilitychange", P),
                function () {
                  document.removeEventListener("visibilitychange", P);
                }
              );
            }, []),
            "countup" === x)
          ) {
            var _ = C < 0;
            return (0, k.jsx)(k.Fragment, {
              children: D(
                _
                  ? { days: 0, hours: 0, minutes: 0, seconds: 0 }
                  : {
                      days: Math.floor(C / 86400),
                      hours: Math.floor((C / 3600) % 24),
                      minutes: Math.floor((C / 60) % 60),
                      seconds: Math.floor(C % 60),
                    }
              ),
            });
          }
          return (0, k.jsx)(k.Fragment, {
            children: w
              ? null
              : (0, k.jsx)(Ut.ZP, {
                  date: e,
                  renderer: D,
                  daysInHours: !1,
                  onComplete: function () {
                    return n();
                  },
                  now: function () {
                    return Date.now();
                  },
                }),
          });
        },
        Xt = n(4730),
        $t = P.default.div.withConfig({
          displayName: "flipClockCountDownstyles__StyledCountdown",
          componentId: "sc-gf50o1-0",
        })([
          "&.fcc__container{--fcc-flip-duration:0.7s;--fcc-digit-block-width:46px;--fcc-digit-block-height:80px;--fcc-digit-font-size:50px;--fcc-label-font-size:16px;--fcc-label-color:#ffffff;--fcc-background:#0f181a;--fcc-digit-color:#ffffff;--fcc-divider-color:#ffffff66;--fcc-divider-height:1px;--fcc-shadow:0 0 2px 1px rgba(0,0,0,0.1);--fcc-separator-size:5px;--fcc-separator-color:var(--fcc-digit-color);}&.fcc__container{font-family:inherit;font-size:var(--fcc-digit-font-size);color:var(--fcc-digit-color);line-height:0;font-weight:500;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:default;display:flex;align-items:center;flex-wrap:wrap;}.fcc__label_show .fcc__digit_block_container{margin-bottom:calc(2 * var(--fcc-label-font-size));}.fcc__digit_block_container .fcc__digit_block:not(:last-child){margin-right:4px;}.fcc__digit_block_container{position:relative;display:flex;align-items:center;margin-bottom:35px;}.fcc__digit_block_label{color:var(--fcc-label-color);line-height:1;font-weight:400;font-size:var(--fcc-label-font-size);position:absolute;bottom:0;left:50%;transform:translate(-50%,150%);}.fcc__digit_block{perspective:200px;position:relative;width:var(--fcc-digit-block-width);height:var(--fcc-digit-block-height);box-shadow:var(--fcc-shadow);border-radius:4px;}.fcc__current_below,.fcc__next_above{position:absolute;width:100%;height:50%;overflow:hidden;display:flex;justify-content:center;background:var(--fcc-background);}.fcc__next_above{align-items:flex-end;top:0;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom:var(--fcc-divider-height) solid var(--fcc-divider-color);}.fcc__current_below{align-items:flex-start;bottom:0;border-bottom-left-radius:4px;border-bottom-right-radius:4px;}.fcc__card{position:relative;z-index:2;width:100%;height:50%;transform-style:preserve-3d;transform-origin:bottom;transform:rotateX(0);}.fcc__card.fcc__flipped{transition:transform var(--fcc-flip-duration) ease-in-out;transform:rotateX(-180deg);}.fcc__card_face{position:absolute;width:100%;height:100%;display:flex;justify-content:center;overflow:hidden;backface-visibility:hidden;background:var(--fcc-background);}.fcc__card_face_front{align-items:flex-end;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom:var(--fcc-divider-height) solid var(--fcc-divider-color);}.fcc__card_face_back{align-items:flex-start;transform:rotateX(-180deg);border-bottom-left-radius:4px;border-bottom-right-radius:4px;}.fcc__colon{margin-left:8px;margin-right:8px;height:var(--fcc-digit-block-height);display:flex;flex-direction:column;justify-content:center;align-items:center;transform:translateY(-17.5px);}.fcc__label_show .fcc__colon{margin-bottom:calc(2 * var(--fcc-label-font-size));}.fcc__colon::before,.fcc__colon::after{content:'';width:var(--fcc-separator-size);height:var(--fcc-separator-size);border-radius:50%;background-color:var(--fcc-separator-color);}.fcc__colon::before{margin-bottom:var(--fcc-separator-size);}",
        ]);
      function te(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function ee(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? te(Object(n), !0).forEach(function (e) {
                (0, o.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : te(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function ne(t) {
        var e = t.current,
          n = t.next,
          o = t.className,
          r = t.style,
          i = Ft.useState({ current: e, next: n }),
          s = (0, l.Z)(i, 2),
          c = s[0],
          a = s[1],
          u = Ft.useState(!1),
          d = (0, l.Z)(u, 2),
          p = d[0],
          f = d[1];
        Ft.useEffect(
          function () {
            c.current !== e
              ? (c.current === c.next && a(ee(ee({}, c), {}, { next: n })),
                f(!0))
              : f(!1);
          },
          [e, n]
        );
        return (0, k.jsxs)("div", {
          className: "fcc__digit_block ".concat(o),
          style: r,
          children: [
            (0, k.jsx)("div", {
              className: "fcc__next_above",
              children: c.next,
            }),
            (0, k.jsx)("div", {
              className: "fcc__current_below",
              children: c.current,
            }),
            (0, k.jsxs)("div", {
              className: "fcc__card ".concat(p ? "fcc__flipped" : ""),
              onTransitionEnd: function () {
                a({ current: e, next: n }), f(!1);
              },
              children: [
                (0, k.jsx)("div", {
                  className: "fcc__card_face fcc__card_face_front",
                  children: c.current,
                }),
                (0, k.jsx)("div", {
                  className: "fcc__card_face fcc__card_face_back",
                  children: c.next,
                }),
              ],
            }),
          ],
        });
      }
      function oe(t) {
        var e = new Date(t);
        if (isNaN(e.getTime())) throw Error("Invalid date");
        var n = new Date(),
          o = Math.max(0, Math.round((n.getTime() - e.getTime()) / 1e3));
        return {
          total: o,
          days: Math.floor(o / 86400),
          hours: Math.floor((o / 3600) % 24),
          minutes: Math.floor((o / 60) % 60),
          seconds: Math.floor(o % 60),
        };
      }
      function re(t) {
        var e = new Date(t);
        if (isNaN(e.getTime())) throw Error("Invalid date");
        var n = new Date(),
          o = Math.round((e.getTime() - n.getTime()) / 1e3);
        return (
          o < 0 && (o = 0),
          {
            total: o,
            days: Math.floor(o / 86400),
            hours: Math.floor((o / 3600) % 24),
            minutes: Math.floor((o / 60) % 60),
            seconds: Math.floor(o % 60),
          }
        );
      }
      function ie(t) {
        return (
          "0".repeat(Math.max(0, 2 - String(t).length)) + String(t)
        ).split("");
      }
      function se(t) {
        if (void 0 !== t) return "string" === typeof t ? t : "".concat(t, "px");
      }
      var ce = [
        "to",
        "className",
        "style",
        "children",
        "onComplete",
        "onTick",
        "showLabels",
        "showSeparators",
        "labels",
        "labelStyle",
        "digitBlockStyle",
        "separatorStyle",
        "dividerStyle",
        "duration",
        "renderMap",
      ];
      function ae(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function le(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ae(Object(n), !0).forEach(function (e) {
                (0, o.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : ae(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function ue(t) {
        var e = t.to,
          n = (t.className, t.style),
          o = t.children,
          r = t.onComplete,
          i = t.onTick,
          s = t.showLabels,
          c = t.showSeparators,
          a = t.labels,
          u = t.labelStyle,
          p = t.digitBlockStyle,
          h = t.separatorStyle,
          b = t.dividerStyle,
          m = t.duration,
          x = (t.renderMap, (0, Xt.Z)(t, ce)),
          y = Ft.useState(),
          g = (0, l.Z)(y, 2),
          w = g[0],
          v = g[1],
          j = Ft.useRef(0),
          O = (0, f.O)(),
          C = (0, l.Z)(O, 1)[0],
          S = C.settings,
          P = C.content,
          D = (0, d.M)().meta.slug;
        function _() {
          window.clearInterval(j.current);
        }
        function T() {
          var t = re(e),
            n = 0 === t.total;
          return (
            "countup" === D && ((t = oe(e)), (n = !1)),
            { timeDelta: t, completed: n }
          );
        }
        function M() {
          var t = T();
          v(t), i(t), t.completed && (_(), r());
        }
        Ft.useEffect(
          function () {
            return (
              v(T()),
              _(),
              (j.current = window.setInterval(M, 1e3)),
              function () {
                return _();
              }
            );
          },
          [e]
        );
        var B = Ft.useMemo(
            function () {
              return le(
                {
                  "--fcc-flip-duration":
                    void 0 === m || m < 0 || m > 1 ? void 0 : "".concat(m, "s"),
                  "--fcc-digit-block-width": se(
                    null === p || void 0 === p ? void 0 : p.width
                  ),
                  "--fcc-digit-block-height": se(
                    null === p || void 0 === p ? void 0 : p.height
                  ),
                  "--fcc-shadow":
                    null === p || void 0 === p ? void 0 : p.boxShadow,
                  "--fcc-digit-font-size": se(
                    null === p || void 0 === p ? void 0 : p.fontSize
                  ),
                  "--fcc-digit-color":
                    null === p || void 0 === p ? void 0 : p.color,
                  "--fcc-label-font-size": se(
                    null === u || void 0 === u ? void 0 : u.fontSize
                  ),
                  "--fcc-label-color":
                    null === u || void 0 === u ? void 0 : u.color,
                  "--fcc-divider-color":
                    null === b || void 0 === b ? void 0 : b.color,
                  "--fcc-divider-height": se(
                    null === b || void 0 === b ? void 0 : b.height
                  ),
                  "--fcc-background":
                    (null === p || void 0 === p ? void 0 : p.background) ||
                    (null === p || void 0 === p ? void 0 : p.backgroundColor),
                  "--fcc-separator-size": se(
                    null === h || void 0 === h ? void 0 : h.size
                  ),
                  "--fcc-separator-color": c
                    ? null === h || void 0 === h
                      ? void 0
                      : h.color
                    : "transparent",
                },
                n
              );
            },
            [n, p, u, m, b, h, c]
          ),
          E = Ft.useMemo(
            function () {
              if (p)
                return le(
                  le({}, p),
                  {},
                  {
                    background: void 0,
                    backgroundColor: void 0,
                    width: void 0,
                    height: void 0,
                    boxShadow: void 0,
                    fontSize: void 0,
                    color: void 0,
                  }
                );
            },
            [p]
          );
        var I = (function () {
          if (void 0 === w) return [];
          var t = (function (t, e) {
              var n = re(Date.now() + 1e3 * (t.total - 1));
              return (
                e && (n = oe(Date.now() + 1e3 * (t.total - 1))),
                {
                  days: { current: ie(t.days), next: ie(n.days) },
                  hours: { current: ie(t.hours), next: ie(n.hours) },
                  minutes: { current: ie(t.minutes), next: ie(n.minutes) },
                  seconds: { current: ie(t.seconds), next: ie(n.seconds) },
                }
              );
            })(w.timeDelta, "countup" === D ? "countup" : ""),
            e = [
              Boolean(S.showDays),
              Boolean(S.showHours),
              Boolean(S.showMinutes),
              Boolean(S.showSeconds),
            ],
            n =
              a.length >= 4
                ? a.slice(0, 4)
                : ["Days", "Hours", "Minutes", "Seconds"],
            o = Object.values(t),
            r = [];
          return (
            e.forEach(function (t, e) {
              var i = n[e];
              t && i && r.push([o[e], i]);
            }),
            r
          );
        })();
        if (void 0 === w || void 0 === I) return (0, k.jsx)(Ft.Fragment, {});
        if (null !== w && void 0 !== w && w.completed)
          return (0, k.jsx)(Ft.Fragment, { children: o });
        var z = 0;
        return (
          [S.showDays, S.showHours, S.showMinutes, S.showSeconds].forEach(
            function (t) {
              t && (z += 1);
            }
          ),
          (0, k.jsx)(
            $t,
            le(
              le({}, x),
              {},
              {
                className: "fcc__container ".concat(s ? "fcc__label_show" : ""),
                style: B,
                "data-testid": "fcc-container",
                children: I.map(function (t, e) {
                  var n = (0, l.Z)(t, 2),
                    o = n[0],
                    r = n[1];
                  return (!S.showDays && r === P.daysLabel) ||
                    (!S.showHours && r === P.hoursLabel) ||
                    (!S.showMinutes && r === P.minutesLabel) ||
                    (!S.showSeconds && r === P.secondsLabel)
                    ? (0, k.jsx)(k.Fragment, {})
                    : (0, k.jsxs)(
                        Ft.Fragment,
                        {
                          children: [
                            (0, k.jsxs)("div", {
                              className: "fcc__digit_block_container",
                              children: [
                                s &&
                                  (0, k.jsx)("div", {
                                    className: "fcc__digit_block_label",
                                    style: u,
                                    children: r,
                                  }),
                                o.current.map(function (t, e) {
                                  return (0,
                                  k.jsx)(ne, { current: t, next: "countup" !== D ? o.next[e] : t, style: E }, e);
                                }),
                              ],
                            }),
                            z > 1 &&
                              e < I.length - 1 &&
                              (0, k.jsx)("div", { className: "fcc__colon" }),
                          ],
                        },
                        "digit-block-".concat(e)
                      );
                }),
              }
            )
          )
        );
      }
      ue.defaultProps = {
        onComplete: function () {},
        onTick: function () {},
        labels: ["Days", "Hours", "Minutes", "Seconds"],
        renderMap: [!0, !0, !0, !0],
        showLabels: !0,
        showSeparators: !0,
      };
      var de = ue,
        pe = n(76598),
        fe = n(13158),
        he = "".concat(
          fe.env.REACT_APP_APPS_API_URL || "https://www.commoninja.com",
          "/api/apps/countdown"
        ),
        be = P.default.div.withConfig({
          displayName: "pluginstyles__StyledPlugin",
          componentId: "sc-9noc86-0",
        })([
          "p{margin:0;}.countdown-container{padding:30px 10px;width:fit-content;margin:0 auto;h2{text-align:center;font-size:22px;font-weight:600;color:inherit;}> p{text-align:center;font-size:16px;font-weight:300;line-height:1.5;color:inherit;margin:10px 0 30px;}.time-wrapper{display:flex;gap:30px;width:fit-content;flex-wrap:wrap;margin:20px auto 0;@media screen and (max-width:768px){gap:10px;}.fcc__digit_block{@media screen and (max-width:768px){font-size:22px !important;width:30px !important;height:45px !important;}}.flip-clock{display:flex;flex-wrap:wrap;._3cpN7{}}.box{text-align:center;display:flex;flex-direction:column;padding:22px;min-width:110px;position:relative;&.big{min-width:125px;p.time{font-size:46px;}p.label{font-size:18px;}&:after{font-size:46px;}}&.medium{p.time{font-size:32px;}p.label{font-size:16px;}&:after{font-size:32px;}}&.small{min-width:75px;padding:15px;p.time{font-size:22px;}p.label{font-size:12px;}&:after{font-size:22px;}}@media screen and (max-width:768px){&.big,&.medium,&.small{min-width:75px;padding:15px;p.time{font-size:22px;}p.label{font-size:12px;}&:after{font-size:22px;}}}&.layout-3{flex-direction:row;align-items:center;gap:10px;.time{width:60px;@media screen and (max-width:768px){width:30px;}}}&.layout-2{&.box{@media screen and (max-width:768px){margin-bottom:25px;}}.label{padding:7px;border-radius:5px;margin-bottom:-40px;background-color:#fff;}}&.layout-6{border-radius:var(--box-border-radius) var(--box-border-radius) 0 0 !important;padding-bottom:10px;margin-bottom:30px;.label{border-radius:0 0 var(--box-border-radius) var(--box-border-radius);padding:7px;width:100%;position:absolute;top:100%;left:0;right:0;outline:var(--label-border);border-top:none;}}&.layout-5{border-radius:0 0 var(--box-border-radius) var(--box-border-radius) !important;margin-top:30px;padding-top:10px;.label{border-radius:var(--box-border-radius) var(--box-border-radius) 0 0;padding:7px;width:100%;position:absolute;bottom:100%;left:0;right:0;outline:var(--label-border);border-top:none;}}&.show-colon{&:not(:last-child){&::after{content:':';position:absolute;right:-15px;top:50%;transform:translate(50%,-50%);z-index:5;color:var(--colon-color);@media screen and (max-width:768px){right:-5px;}}}}p.time{font-weight:600;text-wrap:nowrap;}p.label{font-size:16px;font-weight:500;}}}.countdown-footer{margin-top:30px;text-align:center;a{padding:10px 20px;border-radius:5px;font-size:16px;}}}.post-container{background-color:transparent;padding:30px 50px 50px;width:fit-content;margin:0 auto;text-align:center;border-radius:10px;.digits{margin-bottom:10px;font-size:16px;font-weight:300;}h2{text-align:center;font-size:22px;font-weight:600;margin-bottom:20px;}p{max-width:600px;font-size:16px;}.btn-container{margin-top:40px;a{padding:10px 20px;border-radius:5px;font-size:16px;}}}",
        ]);
      function me(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function xe(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? me(Object(n), !0).forEach(function (e) {
                (0, o.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : me(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var ye = n(87530),
        ge = n(79014),
        we = n(80079);
      ye.extend(ge), ye.extend(we);
      var ve = function () {
          var t,
            e = (0, u.j)(),
            n = (0, l.Z)(e, 1)[0],
            o = (0, d.M)().meta.slug,
            r = (0, Et.b)(),
            i = r.mode,
            s = r.widgetId,
            c = void 0 === s ? "" : s,
            p = (0, f.O)(),
            h = (0, l.Z)(p, 1)[0],
            b = h.styles,
            m = h.settings,
            x = h.content,
            y = (0, rt.o)(b).getDeviceStyle,
            g = (0, Ft.useState)(!1),
            w = g[0],
            v = g[1],
            j = "count-to-date" !== x.countdownType && "countup" !== o,
            O = (0, Ft.useState)(Date.now()),
            C = O[0],
            S = O[1],
            P = (0, Ft.useState)(!1),
            D = P[0],
            _ = P[1],
            T = (0, Ft.useState)(),
            M = T[0],
            B = T[1],
            E = (0, It.x)().getLocaleValue,
            I = (0, Ft.useState)(),
            z = I[0],
            R = I[1],
            L = window.location.search,
            N = new URLSearchParams(L),
            F = pe.Z.create({ baseURL: he }),
            Z = "user-countdown",
            A = new zt.n(c),
            U = A.get(Z);
          function W() {
            return (W = (0, Tt.Z)(
              Bt().mark(function t() {
                var e, n, o, r, i, s, a, l, u, d, p, f, h;
                return Bt().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            (_(!0), (t.prev = 1), (e = N.get("recipientId")))
                          ) {
                            t.next = 5;
                            break;
                          }
                          throw new Error();
                        case 5:
                          return (
                            (t.next = 7),
                            F.get(
                              "/get?widgetId="
                                .concat(c, "&email=")
                                .concat(e || "", "&userTimezone=")
                                .concat(ye.tz.guess())
                            )
                          );
                        case 7:
                          if (((n = t.sent), (o = n.data).success)) {
                            t.next = 11;
                            break;
                          }
                          throw new Error();
                        case 11:
                          (r = o.data), B(r), A.set(Z, r), (t.next = 24);
                          break;
                        case 16:
                          (t.prev = 16),
                            (t.t0 = t.catch(1)),
                            (a =
                              null === (i = x.evergreenExpDate) || void 0 === i
                                ? void 0
                                : i.date),
                            (l =
                              null === (s = x.evergreenExpDate) || void 0 === s
                                ? void 0
                                : s.expires),
                            (u = !1),
                            (d = ye(C)
                              .add(x.timerDays || 0, "days")
                              .add(x.timerHours || 0, "hours")
                              .add(x.timerMinutes || 0, "minutes")
                              .add(x.timerSeconds || 0, "seconds")
                              .valueOf()),
                            l &&
                              a &&
                              ((p = ye.tz.guess()),
                              (f = ye().tz(p)),
                              (h = ye.tz(a, m.timezone).tz(p)),
                              f.isAfter(h) && ((d = f.valueOf()), (u = !0))),
                            U && !u ? B(U) : (A.set(Z, d), B(d));
                        case 24:
                          _(!1);
                        case 25:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 16]]
                );
              })
            )).apply(this, arguments);
          }
          function H() {
            if (void 0 === z) return (0, k.jsx)(k.Fragment, {});
            if (w || "post-countdown" === n.content) return (0, k.jsx)(Gt, {});
            var t = { fontSize: "46px", width: "60px", height: "100px" };
            switch (y("countdownSize")) {
              case "medium":
                t = { fontSize: "32px", width: "45px", height: "80px" };
                break;
              case "small":
                t = { fontSize: "22px", width: "30px", height: "45px" };
            }
            return (0, k.jsx)(de, {
              className: "flip-clock",
              labelStyle: xe(
                xe({}, y("labels2")),
                {},
                { backgroundColor: "transparent" }
              ),
              digitBlockStyle: xe(
                xe(xe({}, y("cards")), y("numbers")),
                {},
                {
                  borderRadius: "".concat(y("cardsBorderRadius"), "px"),
                  border: ""
                    .concat(y("cardsBorderWidth"), "px solid ")
                    .concat(y("cardsBorderColor")),
                  background: m.showCards
                    ? (0, Rt.eZ)(y("cardsBg"))
                    : "transparent",
                },
                t
              ),
              dividerStyle: { color: y("separatorColor"), height: 1 },
              separatorStyle: { color: y("colonColor"), size: 6 },
              duration: 0.5,
              to: M || z,
              labels: [
                E("days", x.daysLabel || a.days),
                E("hours", x.hoursLabel || a.hours),
                E("minutes", x.minutesLabel || a.minutes),
                E("seconds", x.secondsLabel || a.seconds),
              ],
              showLabels: m.showLabels,
              showSeparators: m.showColon,
              onComplete: function () {
                return v(!0);
              },
            });
          }
          return (
            (0, Ft.useEffect)(
              function () {
                "count-time-by-user" === x.countdownType &&
                  "editor" !== i &&
                  (function () {
                    W.apply(this, arguments);
                  })();
              },
              [x.countdownType, c]
            ),
            (0, Ft.useEffect)(
              function () {
                "editor" === i && v(!1);
              },
              [x]
            ),
            (0, Ft.useEffect)(
              function () {
                "editor" === i && S(Date.now());
              },
              [x.timerDays, x.timerHours, x.timerMinutes, x.timerSeconds]
            ),
            (0, Ft.useEffect)(
              function () {
                var t = ye(x.expDate).format("YYYY-MM-DD HH:mm:ss"),
                  e = ye.tz(t, m.timezone).valueOf();
                if (j) {
                  var n,
                    o,
                    r =
                      null === (n = x.evergreenExpDate) || void 0 === n
                        ? void 0
                        : n.date,
                    s =
                      null === (o = x.evergreenExpDate) || void 0 === o
                        ? void 0
                        : o.expires;
                  if (
                    ((e = ye(C)
                      .add(x.timerDays || 0, "days")
                      .add(x.timerHours || 0, "hours")
                      .add(x.timerMinutes || 0, "minutes")
                      .add(x.timerSeconds || 0, "seconds")
                      .valueOf()),
                    s && r)
                  ) {
                    var c = ye.tz.guess(),
                      a = ye().tz(c),
                      l = ye.tz(r, m.timezone).tz(c);
                    a.isAfter(l) && (e = a.valueOf());
                  }
                  "editor" !== i && "preview" !== i && M && (e = M);
                }
                R(e);
              },
              [x.expDate, M, x.evergreenExpDate]
            ),
            z
              ? (0, k.jsx)(be, {
                  style: {
                    "--colon-color": y("colonColor"),
                    "--box-border-radius": "".concat(
                      y("cardsBorderRadius"),
                      "px"
                    ),
                    "--label-border-color": "".concat(y("cardsBg")[0]),
                    "--label-border": ""
                      .concat(y("cardsBorderWidth"), "px solid ")
                      .concat(y("cardsBorderColor")),
                  },
                  children: (0, k.jsxs)("div", {
                    style: xe(
                      xe({}, y("container")),
                      {},
                      {
                        borderRadius: "".concat(
                          y("containerBorderRadius"),
                          "px"
                        ),
                        background: m.showContainer
                          ? (0, Rt.eZ)(y("containerBg")) ||
                            y("container").backgroundColor
                          : "",
                      },
                      y("container").backgroundImage
                        ? { backgroundImage: y("container").backgroundImage }
                        : {}
                    ),
                    className: "countdown-container",
                    children: [
                      m.showTitle &&
                        x.timerTitle &&
                        !w &&
                        "countdown" === n.content &&
                        (0, k.jsx)("h2", {
                          style: y("title"),
                          children: E("title", x.timerTitle),
                        }),
                      x.timerDescription &&
                        !w &&
                        "countdown" === n.content &&
                        (0, k.jsx)("p", {
                          style: y("description"),
                          dangerouslySetInnerHTML: {
                            __html:
                              null ===
                                (t = E("description", x.timerDescription)) ||
                              void 0 === t
                                ? void 0
                                : t.replace(/\n/g, "<br />"),
                          },
                        }),
                      D && "count-time-by-user" === x.countdownType
                        ? (0, k.jsx)(Nt.a, {
                            style: { margin: "0 auto", display: "flex" },
                            color: y("numbers").color,
                          })
                        : z
                        ? (0, k.jsxs)(k.Fragment, {
                            children: [
                              (0, k.jsx)("div", {
                                className: "time-wrapper",
                                children:
                                  "flip" === y("animationType")
                                    ? H()
                                    : (0, k.jsx)(Vt, {
                                        expDate: M || z,
                                        onComplete: function () {
                                          return v(!0);
                                        },
                                      }),
                              }),
                              !w &&
                                "post-countdown" !== n.content &&
                                x.timerButtonText &&
                                (0, k.jsx)("div", {
                                  className: "countdown-footer",
                                  children: (0, k.jsx)("a", {
                                    href: (0, Lt.D)(
                                      E(
                                        "button-link",
                                        x.timerButtonLink ||
                                          "https://www.commoninja.com"
                                      )
                                    ),
                                    target: "_blank",
                                    style: y("button"),
                                    children: E(
                                      "button-text",
                                      x.timerButtonText || "Learn More"
                                    ),
                                  }),
                                }),
                            ],
                          })
                        : (0, k.jsx)(k.Fragment, {}),
                    ],
                  }),
                })
              : (0, k.jsx)(k.Fragment, {})
          );
        },
        je = n(87719);
      function Oe(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function Ce(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Oe(Object(n), !0).forEach(function (e) {
                (0, o.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Oe(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var Se = ["countdown", "countup"],
        Pe = function (t) {
          return "countup" === t
            ? "https://website-assets.commoninja.com/distribution/1700143197287_count-up-clock-icon.png"
            : "https://website-assets.commoninja.com/distribution/1680187251761_countdown-icon.png";
        },
        De = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Se[0],
            e = (0, je.p)(t, Se),
            n = e.finalType,
            o = e.meta;
          return Ce(Ce({}, o), {}, { icon: Pe(n) });
        },
        ke = n(87530),
        _e = n(79014),
        Te = n(80079);
      ke.extend(_e), ke.extend(Te);
      var Me = function (t) {
        var e = "My Countdown",
          n = new Date(Date.now() + 864e6).getTime(),
          o = "flip",
          r = "layout-1",
          i = 0;
        return (
          "countup" === t &&
            ((n = new Date(Date.now() - 863964e3).getTime()),
            (e = "Time Gone By Since The Event"),
            (o = "tick"),
            (r = "layout-6"),
            (i = 1)),
          {
            settings: {
              showTitle: !0,
              showCards: !0,
              showColon: !0,
              showContainer: !0,
              showDays: !0,
              showHours: !0,
              showLabels: !0,
              showMinutes: !0,
              showSeconds: !0,
              showPostContainer: !0,
              timezone: ke.tz.guess(),
            },
            styles: {
              mainWrapper: {},
              title: {},
              fontId: "default",
              layoutId: "default",
              customCSS: "",
              layout: r,
              skinId: i,
              animationType: o,
              container: {},
              containerBorderRadius: 10,
              cards: {},
              cardsBg: [],
              cardsBorderColor: "",
              cardsBorderRadius: 10,
              cardsBorderWidth: 0,
              colonColor: "",
              labels: {},
              labels2: {},
              numbers: {},
              separatorColor: "",
              containerBg: [],
              postContainer: {},
              postContainerBg: [],
              postDescription: {},
              postTitle: {},
              countdownSize: "big",
            },
            content: {
              countdownType: "count-to-date",
              timerTitle: e,
              daysLabel: "",
              hoursLabel: "",
              minutesLabel: "",
              secondsLabel: "",
              expDate: n,
              evergreenExpDate: { expires: !1, date: n },
              timerDays: 1,
              timerHours: 1,
              timerMinutes: 30,
              timerSeconds: 59,
              postCountdownType: "message",
              showPostConfetti: !0,
              showPostCountdown: !0,
              postTitle: "Countdown Complete!",
              postDescription:
                "The wait is over! Our countdown timer has reached zero, and it's time to get started. Let the excitement begin!",
              postButtonLink: "",
              postButtonText: "",
            },
          }
        );
      };
      function Be(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function Ee(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Be(Object(n), !0).forEach(function (e) {
                (0, o.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Be(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var Ie = function (t) {
          return (0, r.a)({
            data: Me(t),
            meta: De(t),
            name: ((e = t), "countup" === e ? "My Countup" : "My Countdown"),
            skinToStyles: _t,
          });
          var e;
        },
        ze = function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return {
            meta: De(t),
            globalState: { content: "countdown" },
            editor: { config: Pt(t) },
            plugin: {
              defaultData: Ie(t),
              pluginComponent: (0, k.jsx)(ve, {}),
              skinToStyles: _t,
              supportIframe: !0,
            },
            app: { defaultRoutePath: "/editor/styles" },
          };
        },
        Re = function (t) {
          return De(t);
        },
        Le = function (t) {
          var e,
            n = ze(null === (e = t.ssrMeta) || void 0 === e ? void 0 : e.slug);
          return (0, i.s)(Ee(Ee({}, t), {}, { appConfig: n }));
        };
    },
    87719: function (t, e, n) {
      "use strict";
      function o(t) {
        var e, n;
        return (
          (null === (e = window.location.pathname.split("/")[1]) ||
          void 0 === e ||
          null === (n = e.split("/")) ||
          void 0 === n
            ? void 0
            : n[0]) || t[0]
        );
      }
      function r(t, e) {
        if ((t || (t = o(e)), !e.includes(t) && !e.includes("".concat(t, "s"))))
          throw new Error("Invalid plugin type: ".concat(t));
        var n = String(t);
        return {
          finalType: t,
          meta: {
            name: ((null === n || void 0 === n ? void 0 : n.split("-")) || [])
              .map(function (t) {
                return t[0].toUpperCase() + t.slice(1);
              })
              .join(" "),
            icon: "https://website-assets.commoninja.com/general/default-icon.png",
            type: n.replaceAll("-", "_"),
            slug: n,
            serviceName: "".concat(n.replaceAll("-", ""), "ninja"),
          },
        };
      }
      n.d(e, {
        R: function () {
          return o;
        },
        p: function () {
          return r;
        },
      });
    },
    87388: function (t, e, n) {
      "use strict";
      function o() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          e = null === t || void 0 === t ? void 0 : t.trim();
        return e
          ? e.startsWith("/") ||
            e.startsWith("#") ||
            e.startsWith("mailto:") ||
            e.startsWith("tel:") ||
            e.startsWith("sms:") ||
            e.startsWith("http://") ||
            e.startsWith("https://")
            ? e
            : "https://".concat(e)
          : e;
      }
      n.d(e, {
        D: function () {
          return o;
        },
      });
    },
    79853: function (t, e, n) {
      "use strict";
      n.d(e, {
        j: function () {
          return i;
        },
      });
      var o = n(32735),
        r = n(91168);
      function i() {
        var t = (0, o.useContext)(r.I),
          e = t.globalState,
          n = t.setGlobalState;
        return [
          e,
          function (t) {
            n(t);
          },
        ];
      }
    },
  },
]);
