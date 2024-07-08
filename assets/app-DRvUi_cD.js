var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var aos = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    return function(e) {
      function t(o) {
        if (n[o])
          return n[o].exports;
        var i = n[o] = { exports: {}, id: o, loaded: false };
        return e[o].call(i.exports, i, i.exports, t), i.loaded = true, i.exports;
      }
      var n = {};
      return t.m = e, t.c = n, t.p = "dist/", t(0);
    }([function(e, t, n) {
      function o(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }
      var i = Object.assign || function(e2) {
        for (var t2 = 1; t2 < arguments.length; t2++) {
          var n2 = arguments[t2];
          for (var o2 in n2)
            Object.prototype.hasOwnProperty.call(n2, o2) && (e2[o2] = n2[o2]);
        }
        return e2;
      }, r = n(1), a = (o(r), n(6)), u = o(a), c = n(7), s = o(c), f = n(8), d = o(f), l = n(9), p = o(l), m = n(10), b = o(m), v = n(11), y = o(v), g = n(14), h = o(g), w = [], k = false, x = { offset: 120, delay: 0, easing: "ease", duration: 400, disable: false, once: false, startEvent: "DOMContentLoaded", throttleDelay: 99, debounceDelay: 50, disableMutationObserver: false }, j = function() {
        var e2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (e2 && (k = true), k)
          return w = (0, y.default)(w, x), (0, b.default)(w, x.once), w;
      }, O = function() {
        w = (0, h.default)(), j();
      }, M = function() {
        w.forEach(function(e2, t2) {
          e2.node.removeAttribute("data-aos"), e2.node.removeAttribute("data-aos-easing"), e2.node.removeAttribute("data-aos-duration"), e2.node.removeAttribute("data-aos-delay");
        });
      }, S = function(e2) {
        return e2 === true || "mobile" === e2 && p.default.mobile() || "phone" === e2 && p.default.phone() || "tablet" === e2 && p.default.tablet() || "function" == typeof e2 && e2() === true;
      }, _ = function(e2) {
        x = i(x, e2), w = (0, h.default)();
        var t2 = document.all && !window.atob;
        return S(x.disable) || t2 ? M() : (x.disableMutationObserver || d.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), x.disableMutationObserver = true), document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? j(true) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function() {
          j(true);
        }) : document.addEventListener(x.startEvent, function() {
          j(true);
        }), window.addEventListener("resize", (0, s.default)(j, x.debounceDelay, true)), window.addEventListener("orientationchange", (0, s.default)(j, x.debounceDelay, true)), window.addEventListener("scroll", (0, u.default)(function() {
          (0, b.default)(w, x.once);
        }, x.throttleDelay)), x.disableMutationObserver || d.default.ready("[data-aos]", O), w);
      };
      e.exports = { init: _, refresh: j, refreshHard: O };
    }, function(e, t) {
    }, , , , , function(e, t) {
      (function(t2) {
        function n(e2, t3, n2) {
          function o2(t4) {
            var n3 = b2, o3 = v2;
            return b2 = v2 = void 0, k2 = t4, g2 = e2.apply(o3, n3);
          }
          function r2(e3) {
            return k2 = e3, h2 = setTimeout(f2, t3), M ? o2(e3) : g2;
          }
          function a2(e3) {
            var n3 = e3 - w2, o3 = e3 - k2, i2 = t3 - n3;
            return S ? j(i2, y2 - o3) : i2;
          }
          function c2(e3) {
            var n3 = e3 - w2, o3 = e3 - k2;
            return void 0 === w2 || n3 >= t3 || n3 < 0 || S && o3 >= y2;
          }
          function f2() {
            var e3 = O();
            return c2(e3) ? d2(e3) : void (h2 = setTimeout(f2, a2(e3)));
          }
          function d2(e3) {
            return h2 = void 0, _ && b2 ? o2(e3) : (b2 = v2 = void 0, g2);
          }
          function l2() {
            void 0 !== h2 && clearTimeout(h2), k2 = 0, b2 = w2 = v2 = h2 = void 0;
          }
          function p2() {
            return void 0 === h2 ? g2 : d2(O());
          }
          function m2() {
            var e3 = O(), n3 = c2(e3);
            if (b2 = arguments, v2 = this, w2 = e3, n3) {
              if (void 0 === h2)
                return r2(w2);
              if (S)
                return h2 = setTimeout(f2, t3), o2(w2);
            }
            return void 0 === h2 && (h2 = setTimeout(f2, t3)), g2;
          }
          var b2, v2, y2, g2, h2, w2, k2 = 0, M = false, S = false, _ = true;
          if ("function" != typeof e2)
            throw new TypeError(s);
          return t3 = u(t3) || 0, i(n2) && (M = !!n2.leading, S = "maxWait" in n2, y2 = S ? x(u(n2.maxWait) || 0, t3) : y2, _ = "trailing" in n2 ? !!n2.trailing : _), m2.cancel = l2, m2.flush = p2, m2;
        }
        function o(e2, t3, o2) {
          var r2 = true, a2 = true;
          if ("function" != typeof e2)
            throw new TypeError(s);
          return i(o2) && (r2 = "leading" in o2 ? !!o2.leading : r2, a2 = "trailing" in o2 ? !!o2.trailing : a2), n(e2, t3, { leading: r2, maxWait: t3, trailing: a2 });
        }
        function i(e2) {
          var t3 = "undefined" == typeof e2 ? "undefined" : c(e2);
          return !!e2 && ("object" == t3 || "function" == t3);
        }
        function r(e2) {
          return !!e2 && "object" == ("undefined" == typeof e2 ? "undefined" : c(e2));
        }
        function a(e2) {
          return "symbol" == ("undefined" == typeof e2 ? "undefined" : c(e2)) || r(e2) && k.call(e2) == d;
        }
        function u(e2) {
          if ("number" == typeof e2)
            return e2;
          if (a(e2))
            return f;
          if (i(e2)) {
            var t3 = "function" == typeof e2.valueOf ? e2.valueOf() : e2;
            e2 = i(t3) ? t3 + "" : t3;
          }
          if ("string" != typeof e2)
            return 0 === e2 ? e2 : +e2;
          e2 = e2.replace(l, "");
          var n2 = m.test(e2);
          return n2 || b.test(e2) ? v(e2.slice(2), n2 ? 2 : 8) : p.test(e2) ? f : +e2;
        }
        var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
          return typeof e2;
        } : function(e2) {
          return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
        }, s = "Expected a function", f = NaN, d = "[object Symbol]", l = /^\s+|\s+$/g, p = /^[-+]0x[0-9a-f]+$/i, m = /^0b[01]+$/i, b = /^0o[0-7]+$/i, v = parseInt, y = "object" == ("undefined" == typeof t2 ? "undefined" : c(t2)) && t2 && t2.Object === Object && t2, g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self, h = y || g || Function("return this")(), w = Object.prototype, k = w.toString, x = Math.max, j = Math.min, O = function() {
          return h.Date.now();
        };
        e.exports = o;
      }).call(t, /* @__PURE__ */ function() {
        return this;
      }());
    }, function(e, t) {
      (function(t2) {
        function n(e2, t3, n2) {
          function i2(t4) {
            var n3 = b2, o2 = v2;
            return b2 = v2 = void 0, O = t4, g2 = e2.apply(o2, n3);
          }
          function r2(e3) {
            return O = e3, h2 = setTimeout(f2, t3), M ? i2(e3) : g2;
          }
          function u2(e3) {
            var n3 = e3 - w2, o2 = e3 - O, i3 = t3 - n3;
            return S ? x(i3, y2 - o2) : i3;
          }
          function s2(e3) {
            var n3 = e3 - w2, o2 = e3 - O;
            return void 0 === w2 || n3 >= t3 || n3 < 0 || S && o2 >= y2;
          }
          function f2() {
            var e3 = j();
            return s2(e3) ? d2(e3) : void (h2 = setTimeout(f2, u2(e3)));
          }
          function d2(e3) {
            return h2 = void 0, _ && b2 ? i2(e3) : (b2 = v2 = void 0, g2);
          }
          function l2() {
            void 0 !== h2 && clearTimeout(h2), O = 0, b2 = w2 = v2 = h2 = void 0;
          }
          function p2() {
            return void 0 === h2 ? g2 : d2(j());
          }
          function m2() {
            var e3 = j(), n3 = s2(e3);
            if (b2 = arguments, v2 = this, w2 = e3, n3) {
              if (void 0 === h2)
                return r2(w2);
              if (S)
                return h2 = setTimeout(f2, t3), i2(w2);
            }
            return void 0 === h2 && (h2 = setTimeout(f2, t3)), g2;
          }
          var b2, v2, y2, g2, h2, w2, O = 0, M = false, S = false, _ = true;
          if ("function" != typeof e2)
            throw new TypeError(c);
          return t3 = a(t3) || 0, o(n2) && (M = !!n2.leading, S = "maxWait" in n2, y2 = S ? k(a(n2.maxWait) || 0, t3) : y2, _ = "trailing" in n2 ? !!n2.trailing : _), m2.cancel = l2, m2.flush = p2, m2;
        }
        function o(e2) {
          var t3 = "undefined" == typeof e2 ? "undefined" : u(e2);
          return !!e2 && ("object" == t3 || "function" == t3);
        }
        function i(e2) {
          return !!e2 && "object" == ("undefined" == typeof e2 ? "undefined" : u(e2));
        }
        function r(e2) {
          return "symbol" == ("undefined" == typeof e2 ? "undefined" : u(e2)) || i(e2) && w.call(e2) == f;
        }
        function a(e2) {
          if ("number" == typeof e2)
            return e2;
          if (r(e2))
            return s;
          if (o(e2)) {
            var t3 = "function" == typeof e2.valueOf ? e2.valueOf() : e2;
            e2 = o(t3) ? t3 + "" : t3;
          }
          if ("string" != typeof e2)
            return 0 === e2 ? e2 : +e2;
          e2 = e2.replace(d, "");
          var n2 = p.test(e2);
          return n2 || m.test(e2) ? b(e2.slice(2), n2 ? 2 : 8) : l.test(e2) ? s : +e2;
        }
        var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
          return typeof e2;
        } : function(e2) {
          return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
        }, c = "Expected a function", s = NaN, f = "[object Symbol]", d = /^\s+|\s+$/g, l = /^[-+]0x[0-9a-f]+$/i, p = /^0b[01]+$/i, m = /^0o[0-7]+$/i, b = parseInt, v = "object" == ("undefined" == typeof t2 ? "undefined" : u(t2)) && t2 && t2.Object === Object && t2, y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self, g = v || y || Function("return this")(), h = Object.prototype, w = h.toString, k = Math.max, x = Math.min, j = function() {
          return g.Date.now();
        };
        e.exports = n;
      }).call(t, /* @__PURE__ */ function() {
        return this;
      }());
    }, function(e, t) {
      function n(e2) {
        var t2 = void 0, o2 = void 0;
        for (t2 = 0; t2 < e2.length; t2 += 1) {
          if (o2 = e2[t2], o2.dataset && o2.dataset.aos)
            return true;
          if (o2.children && n(o2.children))
            return true;
        }
        return false;
      }
      function o() {
        return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
      }
      function i() {
        return !!o();
      }
      function r(e2, t2) {
        var n2 = window.document, i2 = o(), r2 = new i2(a);
        u = t2, r2.observe(n2.documentElement, { childList: true, subtree: true, removedNodes: true });
      }
      function a(e2) {
        e2 && e2.forEach(function(e3) {
          var t2 = Array.prototype.slice.call(e3.addedNodes), o2 = Array.prototype.slice.call(e3.removedNodes), i2 = t2.concat(o2);
          if (n(i2))
            return u();
        });
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var u = function() {
      };
      t.default = { isSupported: i, ready: r };
    }, function(e, t) {
      function n(e2, t2) {
        if (!(e2 instanceof t2))
          throw new TypeError("Cannot call a class as a function");
      }
      function o() {
        return navigator.userAgent || navigator.vendor || window.opera || "";
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var i = /* @__PURE__ */ function() {
        function e2(e3, t2) {
          for (var n2 = 0; n2 < t2.length; n2++) {
            var o2 = t2[n2];
            o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, o2.key, o2);
          }
        }
        return function(t2, n2, o2) {
          return n2 && e2(t2.prototype, n2), o2 && e2(t2, o2), t2;
        };
      }(), r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, s = function() {
        function e2() {
          n(this, e2);
        }
        return i(e2, [{ key: "phone", value: function() {
          var e3 = o();
          return !(!r.test(e3) && !a.test(e3.substr(0, 4)));
        } }, { key: "mobile", value: function() {
          var e3 = o();
          return !(!u.test(e3) && !c.test(e3.substr(0, 4)));
        } }, { key: "tablet", value: function() {
          return this.mobile() && !this.phone();
        } }]), e2;
      }();
      t.default = new s();
    }, function(e, t) {
      Object.defineProperty(t, "__esModule", { value: true });
      var n = function(e2, t2, n2) {
        var o2 = e2.node.getAttribute("data-aos-once");
        t2 > e2.position ? e2.node.classList.add("aos-animate") : "undefined" != typeof o2 && ("false" === o2 || !n2 && "true" !== o2) && e2.node.classList.remove("aos-animate");
      }, o = function(e2, t2) {
        var o2 = window.pageYOffset, i = window.innerHeight;
        e2.forEach(function(e3, r) {
          n(e3, i + o2, t2);
        });
      };
      t.default = o;
    }, function(e, t, n) {
      function o(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var i = n(12), r = o(i), a = function(e2, t2) {
        return e2.forEach(function(e3, n2) {
          e3.node.classList.add("aos-init"), e3.position = (0, r.default)(e3.node, t2.offset);
        }), e2;
      };
      t.default = a;
    }, function(e, t, n) {
      function o(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var i = n(13), r = o(i), a = function(e2, t2) {
        var n2 = 0, o2 = 0, i2 = window.innerHeight, a2 = { offset: e2.getAttribute("data-aos-offset"), anchor: e2.getAttribute("data-aos-anchor"), anchorPlacement: e2.getAttribute("data-aos-anchor-placement") };
        switch (a2.offset && !isNaN(a2.offset) && (o2 = parseInt(a2.offset)), a2.anchor && document.querySelectorAll(a2.anchor) && (e2 = document.querySelectorAll(a2.anchor)[0]), n2 = (0, r.default)(e2).top, a2.anchorPlacement) {
          case "top-bottom":
            break;
          case "center-bottom":
            n2 += e2.offsetHeight / 2;
            break;
          case "bottom-bottom":
            n2 += e2.offsetHeight;
            break;
          case "top-center":
            n2 += i2 / 2;
            break;
          case "bottom-center":
            n2 += i2 / 2 + e2.offsetHeight;
            break;
          case "center-center":
            n2 += i2 / 2 + e2.offsetHeight / 2;
            break;
          case "top-top":
            n2 += i2;
            break;
          case "bottom-top":
            n2 += e2.offsetHeight + i2;
            break;
          case "center-top":
            n2 += e2.offsetHeight / 2 + i2;
        }
        return a2.anchorPlacement || a2.offset || isNaN(t2) || (o2 = t2), n2 + o2;
      };
      t.default = a;
    }, function(e, t) {
      Object.defineProperty(t, "__esModule", { value: true });
      var n = function(e2) {
        for (var t2 = 0, n2 = 0; e2 && !isNaN(e2.offsetLeft) && !isNaN(e2.offsetTop); )
          t2 += e2.offsetLeft - ("BODY" != e2.tagName ? e2.scrollLeft : 0), n2 += e2.offsetTop - ("BODY" != e2.tagName ? e2.scrollTop : 0), e2 = e2.offsetParent;
        return { top: n2, left: t2 };
      };
      t.default = n;
    }, function(e, t) {
      Object.defineProperty(t, "__esModule", { value: true });
      var n = function(e2) {
        return e2 = e2 || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e2, function(e3) {
          return { node: e3 };
        });
      };
      t.default = n;
    }]);
  });
})(aos);
var aosExports = aos.exports;
const AOS = /* @__PURE__ */ getDefaultExportFromCjs(aosExports);
class EventCalendarModule {
  constructor() {
  }
  getItems() {
    const items = document.querySelectorAll(".calendar-event__item");
    return items;
  }
  removeSelectedForOtherItems(target) {
    const items = this.getItems();
    items.forEach((item) => {
      if (item !== target) {
        item.classList.remove("calendar-event__item_selected");
      }
    });
  }
  init() {
    const content = document.querySelector(".calendar-event__content");
    content == null ? void 0 : content.addEventListener("click", (e) => {
      const target = e.target;
      if (target.classList.contains("calendar-event__item") && target !== null) {
        target.classList.toggle("calendar-event__item_selected");
        this.removeSelectedForOtherItems(target);
      }
    });
  }
}
class AOSAnimations {
  constructor() {
  }
  init() {
    AOS.init({
      offset: 146,
      // delay: 50,
      duration: 1e3,
      easing: "ease"
    });
  }
}
class FormValidation {
  constructor() {
    __publicField(this, "form", document.getElementById("entry_form"));
    __publicField(this, "errorType", {
      isRequierd: "Поле є обовязковим!",
      wrongCharapter: "Недопустимі символи!",
      minMax(min, max) {
        if (min === null && max > 0)
          return `Максимальне значення ${max}`;
        if (max === null && min > 0)
          return `Мінімальне значення ${min}`;
        if (max === null && min === null)
          return;
        return `Мінімальне значення ${min} та максимальне значення ${max}`;
      },
      isntCorrectEmail: "Неправильний email!",
      isntCorrectPhoneNumber: "Неправильний формат номера телефону!",
      isntCorrectDate: "Неправильний формат дати!"
    });
    __publicField(this, "fields", [
      {
        id: "form-about-fullName-input",
        type: "text",
        required: true,
        minMax: [6, 12]
      },
      {
        id: "form-about-email-input",
        type: "email",
        required: true,
        minMax: [8, 14]
      },
      {
        id: "form-about-city-input",
        type: "text",
        required: true,
        minMax: [4, 8]
      },
      {
        id: "form-about-phone-input",
        type: "tel"
      },
      {
        id: "form-about-birthday-input",
        type: "birthday",
        minMax: [4, 8]
      },
      {
        id: "form-about-textarea-input",
        type: "textarea",
        minMax: [null, 256]
      }
    ]);
    __publicField(this, "errors", /* @__PURE__ */ new Map());
  }
  generateErrorElement(message) {
    if (!message)
      return;
    return `<div class="form__error">${message}</div>`;
  }
  isRequierdValidate(value) {
    if (!value) {
      return {
        message: this.errorType.isRequierd
      };
    }
  }
  wrongCharapterValidate(value) {
    const regex = /^[А-Яа-я0-9 _-]+$/g;
    if (!regex.test(value)) {
      return {
        message: this.errorType.wrongCharapter
      };
    }
  }
  minMaxValidate(value, minMax) {
    if (value < minMax[0] || value > minMax[1]) {
      return {
        message: this.errorType.minMax(minMax[0], minMax[1])
      };
    }
  }
  isCorrectEmailValidate(value) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) {
      return {
        message: this.errorType.isntCorrectEmail
      };
    }
  }
  phoneNumberValidation(value) {
    const regex = /^\+380?\d{10}$/;
    if (!regex.test(value) || value.length > 13) {
      return {
        message: this.errorType.isntCorrectPhoneNumber
      };
    }
  }
  birthdayValidation(value) {
    const regex = /^\d{2}\.\d{2}\.\d{4}$/;
    if (!regex.test(value)) {
      return {
        message: this.errorType.isntCorrectDate
      };
    }
  }
  validateOnChange() {
    this.fields.forEach((field) => {
      const target = document.getElementById(field.id);
      target.addEventListener("input", (e) => {
        this.errors.forEach((e2) => console.log("e", e2));
        const existingErrors = target.parentElement.querySelectorAll(".form__error");
        const currentValue = e.target.value;
        existingErrors.forEach((error) => error.remove());
        this.errors.clear();
        if (field.required) {
          const requiredError = this.isRequierdValidate(currentValue);
          if (requiredError) {
            this.errors.set("required", requiredError);
          }
        }
        if (field.type === "email") {
          const emailError = this.isCorrectEmailValidate(currentValue);
          if (emailError) {
            this.errors.set("email", emailError);
          }
        }
        if (field.type === "tel") {
          const phoneError = this.phoneNumberValidation(currentValue);
          if (phoneError) {
            this.errors.set("phone", phoneError);
          }
        }
        if (field.type === "birthday") {
          const birthdayError = this.birthdayValidation(currentValue);
          if (birthdayError) {
            this.errors.set("date", birthdayError);
          }
        }
        if (field.minMax) {
          const minMaxError = this.minMaxValidate(
            currentValue.length,
            field.minMax
          );
          if (minMaxError) {
            this.errors.set("minMax", minMaxError);
          }
        }
        if (field.type !== "email" && field.type !== "tel") {
          const wrongCharError = this.wrongCharapterValidate(currentValue);
          if (wrongCharError) {
            this.errors.set("wrongChar", wrongCharError);
          }
        }
        if (this.errors.size > 0) {
          const elem = Array.from(this.errors)[0];
          const errorTemplate = this.generateErrorElement(elem[1].message);
          target.parentElement.insertAdjacentHTML("beforeend", errorTemplate);
        }
      });
    });
  }
  validateOnSubmit() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      let hasErrors = this.errors.size > 0;
      if (!hasErrors) {
        this.form.submit();
      }
    });
  }
  clearErrors() {
    this.errors.clear();
    document.querySelectorAll(".form__error").forEach((error) => error.remove());
  }
  clearForm() {
    this.form.reset();
  }
  init() {
    if (!this.form)
      return;
    this.validateOnChange();
    this.validateOnSubmit();
  }
}
class Preloader {
  constructor() {
    this.preloader = document.querySelector(".preloader");
    this.body = document.querySelector("body");
    this.html = document.querySelector("html");
  }
  init() {
    if (!this.preloader)
      return;
    window.addEventListener("load", () => {
      this.body.classList.add("loaded");
      this.html.classList.add("lock");
      setTimeout(() => {
        if (this.body.classList.contains("loaded")) {
          this.preloader.classList.add("preloader_hidden");
        }
      }, 1e3);
      setTimeout(() => {
        this.html.classList.remove("lock");
      }, 1200);
    });
  }
}
const flsModules = {
  moduleEventCalendar: new EventCalendarModule(),
  moduleAOSAnimations: new AOSAnimations(),
  moduleFormValidation: new FormValidation(),
  modulePreloader: new Preloader()
};
function isWebp() {
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function() {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  testWebP(function(support) {
    let className = support === true ? "webp" : "no-webp";
    document.documentElement.classList.add(className);
  });
}
function addLoadedClass() {
  if (!document.documentElement.classList.contains("loading")) {
    window.addEventListener("load", function() {
      setTimeout(function() {
        document.documentElement.classList.add("loaded");
      }, 0);
    });
  }
}
let _slideUp = (target, duration = 500, showmore = 0) => {
  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = `${target.offsetHeight}px`;
    target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = showmore ? `${showmore}px` : `0px`;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.hidden = !showmore ? true : false;
      !showmore ? target.style.removeProperty("height") : null;
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      !showmore ? target.style.removeProperty("overflow") : null;
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("_slide");
      document.dispatchEvent(
        new CustomEvent("slideUpDone", {
          detail: {
            target
          }
        })
      );
    }, duration);
  }
};
let _slideDown = (target, duration = 500, showmore = 0) => {
  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");
    target.hidden = target.hidden ? false : null;
    showmore ? target.style.removeProperty("height") : null;
    let height = target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = showmore ? `${showmore}px` : `0px`;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = height + "px";
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    window.setTimeout(() => {
      target.style.removeProperty("height");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("_slide");
      document.dispatchEvent(
        new CustomEvent("slideDownDone", {
          detail: {
            target
          }
        })
      );
    }, duration);
  }
};
let _slideToggle = (target, duration = 500) => {
  if (target.hidden) {
    return _slideDown(target, duration);
  } else {
    return _slideUp(target, duration);
  }
};
let bodyLockStatus = true;
let bodyLockToggle = (delay = 500) => {
  if (document.documentElement.classList.contains("lock")) {
    bodyUnlock(delay);
  } else {
    bodyLock(delay);
  }
};
let bodyUnlock = (delay = 500) => {
  let body = document.querySelector("body");
  if (bodyLockStatus) {
    let lock_padding = document.querySelectorAll("[data-lp]");
    setTimeout(() => {
      for (let index = 0; index < lock_padding.length; index++) {
        const el = lock_padding[index];
        el.style.paddingRight = "0px";
      }
      body.style.paddingRight = "0px";
      document.documentElement.classList.remove("lock");
    }, delay);
    bodyLockStatus = false;
    setTimeout(function() {
      bodyLockStatus = true;
    }, delay);
  }
};
let bodyLock = (delay = 500) => {
  let body = document.querySelector("body");
  if (bodyLockStatus) {
    let lock_padding = document.querySelectorAll("[data-lp]");
    for (let index = 0; index < lock_padding.length; index++) {
      const el = lock_padding[index];
      el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
    }
    body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
    document.documentElement.classList.add("lock");
    bodyLockStatus = false;
    setTimeout(function() {
      bodyLockStatus = true;
    }, delay);
  }
};
function menuInit() {
  if (document.querySelector(".icon-menu")) {
    document.addEventListener("click", function(e) {
      if (bodyLockStatus && e.target.closest(".icon-menu")) {
        bodyLockToggle();
        document.documentElement.classList.toggle("menu-open");
      }
    });
  }
}
function FLS(message) {
  setTimeout(() => {
    if (window.FLS) {
      console.log(message);
    }
  }, 0);
}
class Popup {
  constructor(options) {
    let config = {
      logging: true,
      init: true,
      //Для кнопок
      attributeOpenButton: "data-popup",
      // Атрибут для кнопки, яка викликає попап
      attributeCloseButton: "data-close",
      // Атрибут для кнопки, що закриває попап
      // Для сторонніх об'єктів
      fixElementSelector: "[data-lp]",
      // Атрибут для елементів із лівим паддингом (які fixed)
      // Для об'єкту попапа
      youtubeAttribute: "data-popup-youtube",
      // Атрибут для коду youtube
      youtubePlaceAttribute: "data-popup-youtube-place",
      // Атрибут для вставки ролика youtube
      setAutoplayYoutube: true,
      // Зміна класів
      classes: {
        popup: "popup",
        // popupWrapper: 'popup__wrapper',
        popupContent: "popup__content",
        popupActive: "popup_show",
        // Додається для попапа, коли він відкривається
        bodyActive: "popup-show"
        // Додається для боді, коли попап відкритий
      },
      focusCatch: true,
      // Фокус усередині попапа зациклений
      closeEsc: true,
      // Закриття ESC
      bodyLock: true,
      // Блокування скролла
      hashSettings: {
        location: true,
        // Хеш в адресному рядку
        goHash: true
        // Перехід по наявності в адресному рядку
      },
      on: {
        // Події
        beforeOpen() {
        },
        afterOpen() {
        },
        beforeClose() {
        },
        afterClose() {
          flsModules.moduleFormValidation.clearErrors();
          flsModules.moduleFormValidation.clearForm();
        }
      }
    };
    this.youTubeCode;
    this.isOpen = false;
    this.targetOpen = {
      selector: false,
      element: false
    };
    this.previousOpen = {
      selector: false,
      element: false
    };
    this.lastClosed = {
      selector: false,
      element: false
    };
    this._dataValue = false;
    this.hash = false;
    this._reopen = false;
    this._selectorOpen = false;
    this.lastFocusEl = false;
    this._focusEl = [
      "a[href]",
      'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
      "button:not([disabled]):not([aria-hidden])",
      "select:not([disabled]):not([aria-hidden])",
      "textarea:not([disabled]):not([aria-hidden])",
      "area[href]",
      "iframe",
      "object",
      "embed",
      "[contenteditable]",
      '[tabindex]:not([tabindex^="-"])'
    ];
    this.options = {
      ...config,
      ...options,
      classes: {
        ...config.classes,
        ...options == null ? void 0 : options.classes
      },
      hashSettings: {
        ...config.hashSettings,
        ...options == null ? void 0 : options.hashSettings
      },
      on: {
        ...config.on,
        ...options == null ? void 0 : options.on
      }
    };
    this.bodyLock = false;
    this.options.init ? this.initPopups() : null;
  }
  initPopups() {
    this.eventsPopup();
  }
  eventsPopup() {
    document.addEventListener(
      "click",
      (function(e) {
        const buttonOpen = e.target.closest(
          `[${this.options.attributeOpenButton}]`
        );
        if (buttonOpen) {
          e.preventDefault();
          this._dataValue = buttonOpen.getAttribute(
            this.options.attributeOpenButton
          ) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
          this.youTubeCode = buttonOpen.getAttribute(
            this.options.youtubeAttribute
          ) ? buttonOpen.getAttribute(this.options.youtubeAttribute) : null;
          if (this._dataValue !== "error") {
            if (!this.isOpen)
              this.lastFocusEl = buttonOpen;
            this.targetOpen.selector = `${this._dataValue}`;
            this._selectorOpen = true;
            this.open();
            return;
          }
          return;
        }
        const buttonClose = e.target.closest(
          `[${this.options.attributeCloseButton}]`
        );
        if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
          e.preventDefault();
          this.close();
          return;
        }
      }).bind(this)
    );
    document.addEventListener(
      "keydown",
      (function(e) {
        if (this.options.closeEsc && e.which == 27 && e.code === "Escape" && this.isOpen) {
          e.preventDefault();
          this.close();
          return;
        }
        if (this.options.focusCatch && e.which == 9 && this.isOpen) {
          this._focusCatch(e);
          return;
        }
      }).bind(this)
    );
    if (this.options.hashSettings.goHash) {
      window.addEventListener(
        "hashchange",
        (function() {
          if (window.location.hash) {
            this._openToHash();
          } else {
            this.close(this.targetOpen.selector);
          }
        }).bind(this)
      );
      window.addEventListener(
        "load",
        (function() {
          if (window.location.hash) {
            this._openToHash();
          }
        }).bind(this)
      );
    }
  }
  open(selectorValue) {
    if (bodyLockStatus) {
      this.bodyLock = document.documentElement.classList.contains("lock") && !this.isOpen ? true : false;
      if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") {
        this.targetOpen.selector = selectorValue;
        this._selectorOpen = true;
      }
      if (this.isOpen) {
        this._reopen = true;
        this.close();
      }
      if (!this._selectorOpen)
        this.targetOpen.selector = this.lastClosed.selector;
      if (!this._reopen)
        this.previousActiveElement = document.activeElement;
      this.targetOpen.element = document.querySelector(
        this.targetOpen.selector
      );
      if (this.targetOpen.element) {
        if (this.youTubeCode) {
          const codeVideo = this.youTubeCode;
          const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`;
          const iframe = document.createElement("iframe");
          iframe.setAttribute("allowfullscreen", "");
          const autoplay = this.options.setAutoplayYoutube ? "autoplay;" : "";
          iframe.setAttribute("allow", `${autoplay}; encrypted-media`);
          iframe.setAttribute("src", urlVideo);
          if (!this.targetOpen.element.querySelector(
            `[${this.options.youtubePlaceAttribute}]`
          )) {
            this.targetOpen.element.querySelector(".popup__text").setAttribute(`${this.options.youtubePlaceAttribute}`, "");
          }
          this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
        }
        if (this.options.hashSettings.location) {
          this._getHash();
          this._setHash();
        }
        this.options.on.beforeOpen(this);
        document.dispatchEvent(
          new CustomEvent("beforePopupOpen", {
            detail: {
              popup: this
            }
          })
        );
        this.targetOpen.element.classList.add(this.options.classes.popupActive);
        document.documentElement.classList.add(this.options.classes.bodyActive);
        if (!this._reopen) {
          !this.bodyLock ? bodyLock() : null;
        } else
          this._reopen = false;
        this.targetOpen.element.setAttribute("aria-hidden", "false");
        this.previousOpen.selector = this.targetOpen.selector;
        this.previousOpen.element = this.targetOpen.element;
        this._selectorOpen = false;
        this.isOpen = true;
        setTimeout(() => {
          this._focusTrap();
        }, 50);
        this.options.on.afterOpen(this);
        document.dispatchEvent(
          new CustomEvent("afterPopupOpen", {
            detail: {
              popup: this
            }
          })
        );
      }
    }
  }
  close(selectorValue) {
    if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") {
      this.previousOpen.selector = selectorValue;
    }
    if (!this.isOpen || !bodyLockStatus) {
      return;
    }
    this.options.on.beforeClose(this);
    document.dispatchEvent(
      new CustomEvent("beforePopupClose", {
        detail: {
          popup: this
        }
      })
    );
    if (this.youTubeCode) {
      if (this.targetOpen.element.querySelector(
        `[${this.options.youtubePlaceAttribute}]`
      ))
        this.targetOpen.element.querySelector(
          `[${this.options.youtubePlaceAttribute}]`
        ).innerHTML = "";
    }
    this.previousOpen.element.classList.remove(
      this.options.classes.popupActive
    );
    this.previousOpen.element.setAttribute("aria-hidden", "true");
    if (!this._reopen) {
      document.documentElement.classList.remove(
        this.options.classes.bodyActive
      );
      !this.bodyLock ? bodyUnlock() : null;
      this.isOpen = false;
    }
    this._removeHash();
    if (this._selectorOpen) {
      this.lastClosed.selector = this.previousOpen.selector;
      this.lastClosed.element = this.previousOpen.element;
    }
    this.options.on.afterClose(this);
    document.dispatchEvent(
      new CustomEvent("afterPopupClose", {
        detail: {
          popup: this
        }
      })
    );
    setTimeout(() => {
      this._focusTrap();
    }, 50);
  }
  // Отримання хешу
  _getHash() {
    if (this.options.hashSettings.location) {
      this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
    }
  }
  _openToHash() {
    let classInHash = document.querySelector(
      `.${window.location.hash.replace("#", "")}`
    ) ? `.${window.location.hash.replace("#", "")}` : document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` : null;
    const buttons = document.querySelector(
      `[${this.options.attributeOpenButton} = "${classInHash}"]`
    ) ? document.querySelector(
      `[${this.options.attributeOpenButton} = "${classInHash}"]`
    ) : document.querySelector(
      `[${this.options.attributeOpenButton} = "${classInHash.replace(
        ".",
        "#"
      )}"]`
    );
    this.youTubeCode = buttons.getAttribute(this.options.youtubeAttribute) ? buttons.getAttribute(this.options.youtubeAttribute) : null;
    if (buttons && classInHash)
      this.open(classInHash);
  }
  // Встановлення хеша
  _setHash() {
    history.pushState("", "", this.hash);
  }
  _removeHash() {
    history.pushState("", "", window.location.href.split("#")[0]);
  }
  _focusCatch(e) {
    const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
    const focusArray = Array.prototype.slice.call(focusable);
    const focusedIndex = focusArray.indexOf(document.activeElement);
    if (e.shiftKey && focusedIndex === 0) {
      focusArray[focusArray.length - 1].focus();
      e.preventDefault();
    }
    if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
      focusArray[0].focus();
      e.preventDefault();
    }
  }
  _focusTrap() {
    const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
    if (!this.isOpen && this.lastFocusEl) {
      this.lastFocusEl.focus();
    } else {
      focusable[0].focus();
    }
  }
}
flsModules.popup = new Popup({});
let formValidate = {
  getErrors(form) {
    let error = 0;
    let formRequiredItems = form.querySelectorAll("*[data-required]");
    if (formRequiredItems.length) {
      formRequiredItems.forEach((formRequiredItem) => {
        if ((formRequiredItem.offsetParent !== null || formRequiredItem.tagName === "SELECT") && !formRequiredItem.disabled) {
          error += this.validateInput(formRequiredItem);
        }
      });
    }
    return error;
  },
  validateInput(formRequiredItem) {
    let error = 0;
    if (formRequiredItem.dataset.required === "email") {
      formRequiredItem.value = formRequiredItem.value.replace(" ", "");
      if (this.emailTest(formRequiredItem)) {
        this.addError(formRequiredItem);
        error++;
      } else {
        this.removeError(formRequiredItem);
      }
    } else if (formRequiredItem.type === "checkbox" && !formRequiredItem.checked) {
      this.addError(formRequiredItem);
      error++;
    } else {
      if (!formRequiredItem.value.trim()) {
        this.addError(formRequiredItem);
        error++;
      } else {
        this.removeError(formRequiredItem);
      }
    }
    return error;
  },
  addError(formRequiredItem) {
    formRequiredItem.classList.add("_form-error");
    formRequiredItem.parentElement.classList.add("_form-error");
    let inputError = formRequiredItem.parentElement.querySelector(".form__error");
    if (inputError)
      formRequiredItem.parentElement.removeChild(inputError);
    if (formRequiredItem.dataset.error) {
      formRequiredItem.parentElement.insertAdjacentHTML(
        "beforeend",
        `<div class="form__error">${formRequiredItem.dataset.error}</div>`
      );
    }
  },
  removeError(formRequiredItem) {
    formRequiredItem.classList.remove("_form-error");
    formRequiredItem.parentElement.classList.remove("_form-error");
    if (formRequiredItem.parentElement.querySelector(".form__error")) {
      formRequiredItem.parentElement.removeChild(
        formRequiredItem.parentElement.querySelector(".form__error")
      );
    }
  },
  formClean(form) {
    form.reset();
    setTimeout(() => {
      let inputs = form.querySelectorAll("input,textarea");
      for (let index = 0; index < inputs.length; index++) {
        const el = inputs[index];
        el.parentElement.classList.remove("_form-focus");
        el.classList.remove("_form-focus");
        formValidate.removeError(el);
      }
      let checkboxes = form.querySelectorAll(".checkbox__input");
      if (checkboxes.length > 0) {
        for (let index = 0; index < checkboxes.length; index++) {
          const checkbox = checkboxes[index];
          checkbox.checked = false;
        }
      }
      if (flsModules.select) {
        let selects = form.querySelectorAll(".select");
        if (selects.length) {
          for (let index = 0; index < selects.length; index++) {
            const select = selects[index].querySelector("select");
            flsModules.select.selectBuild(select);
          }
        }
      }
    }, 0);
  },
  emailTest(formRequiredItem) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(
      formRequiredItem.value
    );
  }
};
class SelectConstructor {
  constructor(props, data = null) {
    let defaultConfig = {
      init: true,
      logging: true,
      speed: 150
    };
    this.config = Object.assign(defaultConfig, props);
    this.selectClasses = {
      classSelect: "select",
      // Головний блок
      classSelectBody: "select__body",
      // Тіло селекту
      classSelectTitle: "select__title",
      // Заголовок
      classSelectValue: "select__value",
      // Значення у заголовку
      classSelectLabel: "select__label",
      // Лабел
      classSelectInput: "select__input",
      // Поле введення
      classSelectText: "select__text",
      // Оболонка текстових даних
      classSelectLink: "select__link",
      // Посилання в елементі
      classSelectOptions: "select__options",
      // Випадаючий список
      classSelectOptionsScroll: "select__scroll",
      // Оболонка при скролі
      classSelectOption: "select__option",
      // Пункт
      classSelectContent: "select__content",
      // Оболонка контенту в заголовку
      classSelectRow: "select__row",
      // Ряд
      classSelectData: "select__asset",
      // Додаткові дані
      classSelectDisabled: "_select-disabled",
      // Заборонено
      classSelectTag: "_select-tag",
      // Клас тега
      classSelectOpen: "_select-open",
      // Список відкритий
      classSelectActive: "_select-active",
      // Список вибрано
      classSelectFocus: "_select-focus",
      // Список у фокусі
      classSelectMultiple: "_select-multiple",
      // Мультивибір
      classSelectCheckBox: "_select-checkbox",
      // Стиль чекбоксу
      classSelectOptionSelected: "_select-selected",
      // Вибраний пункт
      classSelectPseudoLabel: "_select-pseudo-label"
      // Псевдолейбл
    };
    this._this = this;
    if (this.config.init) {
      const selectItems = data ? document.querySelectorAll(data) : document.querySelectorAll("select");
      if (selectItems.length) {
        this.selectsInit(selectItems);
        this.setLogging(`Прокинувся, построїв селектов: (${selectItems.length})`);
      } else {
        this.setLogging("Сплю, немає жодного select");
      }
    }
  }
  // Конструктор CSS класу
  getSelectClass(className) {
    return `.${className}`;
  }
  // Геттер елементів псевдоселекту
  getSelectElement(selectItem, className) {
    return {
      originalSelect: selectItem.querySelector("select"),
      selectElement: selectItem.querySelector(this.getSelectClass(className))
    };
  }
  // Функція ініціалізації всіх селектів
  selectsInit(selectItems) {
    selectItems.forEach((originalSelect, index) => {
      this.selectInit(originalSelect, index + 1);
    });
    document.addEventListener("click", (function(e) {
      this.selectsActions(e);
    }).bind(this));
    document.addEventListener("keydown", (function(e) {
      this.selectsActions(e);
    }).bind(this));
    document.addEventListener("focusin", (function(e) {
      this.selectsActions(e);
    }).bind(this));
    document.addEventListener("focusout", (function(e) {
      this.selectsActions(e);
    }).bind(this));
  }
  // Функція ініціалізації конкретного селекту
  selectInit(originalSelect, index) {
    const _this = this;
    let selectItem = document.createElement("div");
    selectItem.classList.add(this.selectClasses.classSelect);
    originalSelect.parentNode.insertBefore(selectItem, originalSelect);
    selectItem.appendChild(originalSelect);
    originalSelect.hidden = true;
    index ? originalSelect.dataset.id = index : null;
    if (this.getSelectPlaceholder(originalSelect)) {
      originalSelect.dataset.placeholder = this.getSelectPlaceholder(originalSelect).value;
      if (this.getSelectPlaceholder(originalSelect).label.show) {
        const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
        selectItemTitle.insertAdjacentHTML("afterbegin", `<span class="${this.selectClasses.classSelectLabel}">${this.getSelectPlaceholder(originalSelect).label.text ? this.getSelectPlaceholder(originalSelect).label.text : this.getSelectPlaceholder(originalSelect).value}</span>`);
      }
    }
    selectItem.insertAdjacentHTML("beforeend", `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`);
    this.selectBuild(originalSelect);
    originalSelect.dataset.speed = originalSelect.dataset.speed ? originalSelect.dataset.speed : this.config.speed;
    this.config.speed = +originalSelect.dataset.speed;
    originalSelect.addEventListener("change", function(e) {
      _this.selectChange(e);
    });
  }
  // Конструктор псевдоселекту
  selectBuild(originalSelect) {
    const selectItem = originalSelect.parentElement;
    selectItem.dataset.id = originalSelect.dataset.id;
    originalSelect.dataset.classModif ? selectItem.classList.add(`select_${originalSelect.dataset.classModif}`) : null;
    originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectMultiple) : selectItem.classList.remove(this.selectClasses.classSelectMultiple);
    originalSelect.hasAttribute("data-checkbox") && originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectCheckBox) : selectItem.classList.remove(this.selectClasses.classSelectCheckBox);
    this.setSelectTitleValue(selectItem, originalSelect);
    this.setOptions(selectItem, originalSelect);
    originalSelect.hasAttribute("data-search") ? this.searchActions(selectItem) : null;
    originalSelect.hasAttribute("data-open") ? this.selectAction(selectItem) : null;
    this.selectDisabled(selectItem, originalSelect);
  }
  // Функція реакцій на події
  selectsActions(e) {
    const targetElement = e.target;
    const targetType = e.type;
    if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect)) || targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
      const selectItem = targetElement.closest(".select") ? targetElement.closest(".select") : document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag)).dataset.selectId}"]`);
      const originalSelect = this.getSelectElement(selectItem).originalSelect;
      if (targetType === "click") {
        if (!originalSelect.disabled) {
          if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
            const targetTag = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag));
            const optionItem = document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetTag.dataset.selectId}"] .select__option[data-value="${targetTag.dataset.value}"]`);
            this.optionAction(selectItem, originalSelect, optionItem);
          } else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTitle))) {
            this.selectAction(selectItem);
          } else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption))) {
            const optionItem = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption));
            this.optionAction(selectItem, originalSelect, optionItem);
          }
        }
      } else if (targetType === "focusin" || targetType === "focusout") {
        if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect))) {
          targetType === "focusin" ? selectItem.classList.add(this.selectClasses.classSelectFocus) : selectItem.classList.remove(this.selectClasses.classSelectFocus);
        }
      } else if (targetType === "keydown" && e.code === "Escape") {
        this.selectsСlose();
      }
    } else {
      this.selectsСlose();
    }
  }
  // Функція закриття всіх селектів
  selectsСlose(selectOneGroup) {
    const selectsGroup = selectOneGroup ? selectOneGroup : document;
    const selectActiveItems = selectsGroup.querySelectorAll(`${this.getSelectClass(this.selectClasses.classSelect)}${this.getSelectClass(this.selectClasses.classSelectOpen)}`);
    if (selectActiveItems.length) {
      selectActiveItems.forEach((selectActiveItem) => {
        this.selectСlose(selectActiveItem);
      });
    }
  }
  // Функція закриття конкретного селекту
  selectСlose(selectItem) {
    const originalSelect = this.getSelectElement(selectItem).originalSelect;
    const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
    if (!selectOptions.classList.contains("_slide")) {
      selectItem.classList.remove(this.selectClasses.classSelectOpen);
      _slideUp(selectOptions, originalSelect.dataset.speed);
      setTimeout(() => {
        selectItem.style.zIndex = "";
      }, originalSelect.dataset.speed);
    }
  }
  // Функція відкриття/закриття конкретного селекту
  selectAction(selectItem) {
    const originalSelect = this.getSelectElement(selectItem).originalSelect;
    const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
    const selectOpenzIndex = originalSelect.dataset.zIndex ? originalSelect.dataset.zIndex : 3;
    this.setOptionsPosition(selectItem);
    if (originalSelect.closest("[data-one-select]")) {
      const selectOneGroup = originalSelect.closest("[data-one-select]");
      this.selectsСlose(selectOneGroup);
    }
    setTimeout(() => {
      if (!selectOptions.classList.contains("_slide")) {
        selectItem.classList.toggle(this.selectClasses.classSelectOpen);
        _slideToggle(selectOptions, originalSelect.dataset.speed);
        if (selectItem.classList.contains(this.selectClasses.classSelectOpen)) {
          selectItem.style.zIndex = selectOpenzIndex;
        } else {
          setTimeout(() => {
            selectItem.style.zIndex = "";
          }, originalSelect.dataset.speed);
        }
      }
    }, 0);
  }
  // Сеттер значення заголовка селекту
  setSelectTitleValue(selectItem, originalSelect) {
    const selectItemBody = this.getSelectElement(selectItem, this.selectClasses.classSelectBody).selectElement;
    const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
    if (selectItemTitle)
      selectItemTitle.remove();
    selectItemBody.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(selectItem, originalSelect));
    originalSelect.hasAttribute("data-search") ? this.searchActions(selectItem) : null;
  }
  // Конструктор значення заголовка
  getSelectTitleValue(selectItem, originalSelect) {
    let selectTitleValue = this.getSelectedOptionsData(originalSelect, 2).html;
    if (originalSelect.multiple && originalSelect.hasAttribute("data-tags")) {
      selectTitleValue = this.getSelectedOptionsData(originalSelect).elements.map((option) => `<span role="button" data-select-id="${selectItem.dataset.id}" data-value="${option.value}" class="_select-tag">${this.getSelectElementContent(option)}</span>`).join("");
      if (originalSelect.dataset.tags && document.querySelector(originalSelect.dataset.tags)) {
        document.querySelector(originalSelect.dataset.tags).innerHTML = selectTitleValue;
        if (originalSelect.hasAttribute("data-search"))
          selectTitleValue = false;
      }
    }
    selectTitleValue = selectTitleValue.length ? selectTitleValue : originalSelect.dataset.placeholder ? originalSelect.dataset.placeholder : "";
    let pseudoAttribute = "";
    let pseudoAttributeClass = "";
    if (originalSelect.hasAttribute("data-pseudo-label")) {
      pseudoAttribute = originalSelect.dataset.pseudoLabel ? ` data-pseudo-label="${originalSelect.dataset.pseudoLabel}"` : ` data-pseudo-label="Заповніть атрибут"`;
      pseudoAttributeClass = ` ${this.selectClasses.classSelectPseudoLabel}`;
    }
    this.getSelectedOptionsData(originalSelect).values.length ? selectItem.classList.add(this.selectClasses.classSelectActive) : selectItem.classList.remove(this.selectClasses.classSelectActive);
    if (originalSelect.hasAttribute("data-search")) {
      return `<div class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${selectTitleValue}" data-placeholder="${selectTitleValue}" class="${this.selectClasses.classSelectInput}"></span></div>`;
    } else {
      const customClass = this.getSelectedOptionsData(originalSelect).elements.length && this.getSelectedOptionsData(originalSelect).elements[0].dataset.class ? ` ${this.getSelectedOptionsData(originalSelect).elements[0].dataset.class}` : "";
      return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}${pseudoAttributeClass}"><span class="${this.selectClasses.classSelectContent}${customClass}">${selectTitleValue}</span></span></button>`;
    }
  }
  // Конструктор даних для значення заголовка
  getSelectElementContent(selectOption) {
    const selectOptionData = selectOption.dataset.asset ? `${selectOption.dataset.asset}` : "";
    const selectOptionDataHTML = selectOptionData.indexOf("img") >= 0 ? `<img src="${selectOptionData}" alt="">` : selectOptionData;
    let selectOptionContentHTML = ``;
    selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectRow}">` : "";
    selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectData}">` : "";
    selectOptionContentHTML += selectOptionData ? selectOptionDataHTML : "";
    selectOptionContentHTML += selectOptionData ? `</span>` : "";
    selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectText}">` : "";
    selectOptionContentHTML += selectOption.textContent;
    selectOptionContentHTML += selectOptionData ? `</span>` : "";
    selectOptionContentHTML += selectOptionData ? `</span>` : "";
    return selectOptionContentHTML;
  }
  // Отримання даних плейсхолдера
  getSelectPlaceholder(originalSelect) {
    const selectPlaceholder = Array.from(originalSelect.options).find((option) => !option.value);
    if (selectPlaceholder) {
      return {
        value: selectPlaceholder.textContent,
        show: selectPlaceholder.hasAttribute("data-show"),
        label: {
          show: selectPlaceholder.hasAttribute("data-label"),
          text: selectPlaceholder.dataset.label
        }
      };
    }
  }
  // Отримання даних із вибраних елементів
  getSelectedOptionsData(originalSelect, type) {
    let selectedOptions = [];
    if (originalSelect.multiple) {
      selectedOptions = Array.from(originalSelect.options).filter((option) => option.value).filter((option) => option.selected);
    } else {
      selectedOptions.push(originalSelect.options[originalSelect.selectedIndex]);
    }
    return {
      elements: selectedOptions.map((option) => option),
      values: selectedOptions.filter((option) => option.value).map((option) => option.value),
      html: selectedOptions.map((option) => this.getSelectElementContent(option))
    };
  }
  // Конструктор елементів списку
  getOptions(originalSelect) {
    const selectOptionsScroll = originalSelect.hasAttribute("data-scroll") ? `data-simplebar` : "";
    const customMaxHeightValue = +originalSelect.dataset.scroll ? +originalSelect.dataset.scroll : null;
    let selectOptions = Array.from(originalSelect.options);
    if (selectOptions.length > 0) {
      let selectOptionsHTML = ``;
      if (this.getSelectPlaceholder(originalSelect) && !this.getSelectPlaceholder(originalSelect).show || originalSelect.multiple) {
        selectOptions = selectOptions.filter((option) => option.value);
      }
      selectOptionsHTML += `<div ${selectOptionsScroll} ${selectOptionsScroll ? `style="max-height: ${customMaxHeightValue}px"` : ""} class="${this.selectClasses.classSelectOptionsScroll}">`;
      selectOptions.forEach((selectOption) => {
        selectOptionsHTML += this.getOption(selectOption, originalSelect);
      });
      selectOptionsHTML += `</div>`;
      return selectOptionsHTML;
    }
  }
  // Конструктор конкретного елемента списку
  getOption(selectOption, originalSelect) {
    const selectOptionSelected = selectOption.selected && originalSelect.multiple ? ` ${this.selectClasses.classSelectOptionSelected}` : "";
    const selectOptionHide = selectOption.selected && !originalSelect.hasAttribute("data-show-selected") && !originalSelect.multiple ? `hidden` : ``;
    const selectOptionClass = selectOption.dataset.class ? ` ${selectOption.dataset.class}` : "";
    const selectOptionLink = selectOption.dataset.href ? selectOption.dataset.href : false;
    const selectOptionLinkTarget = selectOption.hasAttribute("data-href-blank") ? `target="_blank"` : "";
    let selectOptionHTML = ``;
    selectOptionHTML += selectOptionLink ? `<a ${selectOptionLinkTarget} ${selectOptionHide} href="${selectOptionLink}" data-value="${selectOption.value}" class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}">` : `<button ${selectOptionHide} class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}" data-value="${selectOption.value}" type="button">`;
    selectOptionHTML += this.getSelectElementContent(selectOption);
    selectOptionHTML += selectOptionLink ? `</a>` : `</button>`;
    return selectOptionHTML;
  }
  // Сеттер елементів списку (options)
  setOptions(selectItem, originalSelect) {
    const selectItemOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
    selectItemOptions.innerHTML = this.getOptions(originalSelect);
  }
  // Визначаємо, де видобразити випадаючий список
  setOptionsPosition(selectItem) {
    const originalSelect = this.getSelectElement(selectItem).originalSelect;
    const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
    const selectItemScroll = this.getSelectElement(selectItem, this.selectClasses.classSelectOptionsScroll).selectElement;
    const customMaxHeightValue = +originalSelect.dataset.scroll ? `${+originalSelect.dataset.scroll}px` : ``;
    const selectOptionsPosMargin = +originalSelect.dataset.optionsMargin ? +originalSelect.dataset.optionsMargin : 10;
    if (!selectItem.classList.contains(this.selectClasses.classSelectOpen)) {
      selectOptions.hidden = false;
      const selectItemScrollHeight = selectItemScroll.offsetHeight ? selectItemScroll.offsetHeight : parseInt(window.getComputedStyle(selectItemScroll).getPropertyValue("max-height"));
      const selectOptionsHeight = selectOptions.offsetHeight > selectItemScrollHeight ? selectOptions.offsetHeight : selectItemScrollHeight + selectOptions.offsetHeight;
      const selectOptionsScrollHeight = selectOptionsHeight - selectItemScrollHeight;
      selectOptions.hidden = true;
      const selectItemHeight = selectItem.offsetHeight;
      const selectItemPos = selectItem.getBoundingClientRect().top;
      const selectItemTotal = selectItemPos + selectOptionsHeight + selectItemHeight + selectOptionsScrollHeight;
      const selectItemResult = window.innerHeight - (selectItemTotal + selectOptionsPosMargin);
      if (selectItemResult < 0) {
        const newMaxHeightValue = selectOptionsHeight + selectItemResult;
        if (newMaxHeightValue < 100) {
          selectItem.classList.add("select--show-top");
          selectItemScroll.style.maxHeight = selectItemPos < selectOptionsHeight ? `${selectItemPos - (selectOptionsHeight - selectItemPos)}px` : customMaxHeightValue;
        } else {
          selectItem.classList.remove("select--show-top");
          selectItemScroll.style.maxHeight = `${newMaxHeightValue}px`;
        }
      }
    } else {
      setTimeout(() => {
        selectItem.classList.remove("select--show-top");
        selectItemScroll.style.maxHeight = customMaxHeightValue;
      }, +originalSelect.dataset.speed);
    }
  }
  // Обробник кліку на пункт списку
  optionAction(selectItem, originalSelect, optionItem) {
    const selectOptions = selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOptions)}`);
    if (!selectOptions.classList.contains("_slide")) {
      if (originalSelect.multiple) {
        optionItem.classList.toggle(this.selectClasses.classSelectOptionSelected);
        const originalSelectSelectedItems = this.getSelectedOptionsData(originalSelect).elements;
        originalSelectSelectedItems.forEach((originalSelectSelectedItem) => {
          originalSelectSelectedItem.removeAttribute("selected");
        });
        const selectSelectedItems = selectItem.querySelectorAll(this.getSelectClass(this.selectClasses.classSelectOptionSelected));
        selectSelectedItems.forEach((selectSelectedItems2) => {
          originalSelect.querySelector(`option[value = "${selectSelectedItems2.dataset.value}"]`).setAttribute("selected", "selected");
        });
      } else {
        if (!originalSelect.hasAttribute("data-show-selected")) {
          setTimeout(() => {
            if (selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`)) {
              selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`).hidden = false;
            }
            optionItem.hidden = true;
          }, this.config.speed);
        }
        originalSelect.value = optionItem.hasAttribute("data-value") ? optionItem.dataset.value : optionItem.textContent;
        this.selectAction(selectItem);
      }
      this.setSelectTitleValue(selectItem, originalSelect);
      this.setSelectChange(originalSelect);
    }
  }
  // Реакція на зміну оригінального select
  selectChange(e) {
    const originalSelect = e.target;
    this.selectBuild(originalSelect);
    this.setSelectChange(originalSelect);
  }
  // Обробник зміни у селекті
  setSelectChange(originalSelect) {
    if (originalSelect.hasAttribute("data-validate")) {
      formValidate.validateInput(originalSelect);
    }
    if (originalSelect.hasAttribute("data-submit") && originalSelect.value) {
      let tempButton = document.createElement("button");
      tempButton.type = "submit";
      originalSelect.closest("form").append(tempButton);
      tempButton.click();
      tempButton.remove();
    }
    const selectItem = originalSelect.parentElement;
    this.selectCallback(selectItem, originalSelect);
  }
  // Обробник disabled
  selectDisabled(selectItem, originalSelect) {
    if (originalSelect.disabled) {
      selectItem.classList.add(this.selectClasses.classSelectDisabled);
      this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = true;
    } else {
      selectItem.classList.remove(this.selectClasses.classSelectDisabled);
      this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = false;
    }
  }
  // Обробник пошуку за елементами списку
  searchActions(selectItem) {
    this.getSelectElement(selectItem).originalSelect;
    const selectInput = this.getSelectElement(selectItem, this.selectClasses.classSelectInput).selectElement;
    const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
    const selectOptionsItems = selectOptions.querySelectorAll(`.${this.selectClasses.classSelectOption} `);
    const _this = this;
    selectInput.addEventListener("input", function() {
      selectOptionsItems.forEach((selectOptionsItem) => {
        if (selectOptionsItem.textContent.toUpperCase().includes(selectInput.value.toUpperCase())) {
          selectOptionsItem.hidden = false;
        } else {
          selectOptionsItem.hidden = true;
        }
      });
      selectOptions.hidden === true ? _this.selectAction(selectItem) : null;
    });
  }
  // Коллбек функція
  selectCallback(selectItem, originalSelect) {
    document.dispatchEvent(new CustomEvent("selectCallback", {
      detail: {
        select: originalSelect
      }
    }));
  }
  // Логінг у консоль
  setLogging(message) {
    this.config.logging ? FLS(`[select]: ${message} `) : null;
  }
}
flsModules.select = new SelectConstructor({});
var datepicker_min = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(window, function() {
    return function(e) {
      var t = {};
      function n(a) {
        if (t[a])
          return t[a].exports;
        var r = t[a] = { i: a, l: false, exports: {} };
        return e[a].call(r.exports, r, r.exports, n), r.l = true, r.exports;
      }
      return n.m = e, n.c = t, n.d = function(e2, t2, a) {
        n.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: a });
      }, n.r = function(e2) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      }, n.t = function(e2, t2) {
        if (1 & t2 && (e2 = n(e2)), 8 & t2)
          return e2;
        if (4 & t2 && "object" == typeof e2 && e2 && e2.__esModule)
          return e2;
        var a = /* @__PURE__ */ Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", { enumerable: true, value: e2 }), 2 & t2 && "string" != typeof e2)
          for (var r in e2)
            n.d(a, r, (function(t3) {
              return e2[t3];
            }).bind(null, r));
        return a;
      }, n.n = function(e2) {
        var t2 = e2 && e2.__esModule ? function() {
          return e2.default;
        } : function() {
          return e2;
        };
        return n.d(t2, "a", t2), t2;
      }, n.o = function(e2, t2) {
        return Object.prototype.hasOwnProperty.call(e2, t2);
      }, n.p = "", n(n.s = 0);
    }([function(e, t, n) {
      n.r(t);
      var a = [], r = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], i = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], o = { t: "top", r: "right", b: "bottom", l: "left", c: "centered" };
      function s() {
      }
      var l = ["click", "focusin", "keydown", "input"];
      function d(e2) {
        l.forEach(function(t2) {
          e2.addEventListener(t2, e2 === document ? L : Y);
        });
      }
      function c(e2) {
        return Array.isArray(e2) ? e2.map(c) : "[object Object]" === x(e2) ? Object.keys(e2).reduce(function(t2, n2) {
          return t2[n2] = c(e2[n2]), t2;
        }, {}) : e2;
      }
      function u(e2, t2) {
        var n2 = e2.calendar.querySelector(".qs-overlay"), a2 = n2 && !n2.classList.contains("qs-hidden");
        t2 = t2 || new Date(e2.currentYear, e2.currentMonth), e2.calendar.innerHTML = [h(t2, e2, a2), f(t2, e2, a2), v(e2, a2)].join(""), a2 && window.requestAnimationFrame(function() {
          M(true, e2);
        });
      }
      function h(e2, t2, n2) {
        return ['<div class="qs-controls' + (n2 ? " qs-blur" : "") + '">', '<div class="qs-arrow qs-left"></div>', '<div class="qs-month-year' + (t2.disableYearOverlay ? " qs-disabled-year-overlay" : "") + '">', '<span class="qs-month">' + t2.months[e2.getMonth()] + "</span>", '<span class="qs-year">' + e2.getFullYear() + "</span>", "</div>", '<div class="qs-arrow qs-right"></div>', "</div>"].join("");
      }
      function f(e2, t2, n2) {
        var a2 = t2.currentMonth, r2 = t2.currentYear, i2 = t2.dateSelected, o2 = t2.maxDate, s2 = t2.minDate, l2 = t2.showAllDates, d2 = t2.days, c2 = t2.disabledDates, u2 = t2.startDay, h2 = t2.weekendIndices, f2 = t2.events, v2 = t2.getRange ? t2.getRange() : {}, m2 = +v2.start, y2 = +v2.end, p2 = g(new Date(e2).setDate(1)), w2 = p2.getDay() - u2, D2 = w2 < 0 ? 7 : 0;
        p2.setMonth(p2.getMonth() + 1), p2.setDate(0);
        var b2 = p2.getDate(), q2 = [], S2 = D2 + 7 * ((w2 + b2) / 7 | 0);
        S2 += (w2 + b2) % 7 ? 7 : 0;
        for (var M2 = 1; M2 <= S2; M2++) {
          var E2 = (M2 - 1) % 7, x2 = d2[E2], C2 = M2 - (w2 >= 0 ? w2 : 7 + w2), L2 = new Date(r2, a2, C2), Y2 = f2[+L2], j2 = C2 < 1 || C2 > b2, O2 = j2 ? C2 < 1 ? -1 : 1 : 0, P2 = j2 && !l2, k2 = P2 ? "" : L2.getDate(), N2 = +L2 == +i2, _2 = E2 === h2[0] || E2 === h2[1], I2 = m2 !== y2, A2 = "qs-square " + x2;
          Y2 && !P2 && (A2 += " qs-event"), j2 && (A2 += " qs-outside-current-month"), !l2 && j2 || (A2 += " qs-num"), N2 && (A2 += " qs-active"), (c2[+L2] || t2.disabler(L2) || _2 && t2.noWeekends || s2 && +L2 < +s2 || o2 && +L2 > +o2) && !P2 && (A2 += " qs-disabled"), +g(/* @__PURE__ */ new Date()) == +L2 && (A2 += " qs-current"), +L2 === m2 && y2 && I2 && (A2 += " qs-range-start"), +L2 > m2 && +L2 < y2 && (A2 += " qs-range-middle"), +L2 === y2 && m2 && I2 && (A2 += " qs-range-end"), P2 && (A2 += " qs-empty", k2 = ""), q2.push('<div class="' + A2 + '" data-direction="' + O2 + '">' + k2 + "</div>");
        }
        var R2 = d2.map(function(e3) {
          return '<div class="qs-square qs-day">' + e3 + "</div>";
        }).concat(q2);
        return R2.unshift('<div class="qs-squares' + (n2 ? " qs-blur" : "") + '">'), R2.push("</div>"), R2.join("");
      }
      function v(e2, t2) {
        var n2 = e2.overlayPlaceholder, a2 = e2.overlayButton;
        return ['<div class="qs-overlay' + (t2 ? "" : " qs-hidden") + '">', "<div>", '<input class="qs-overlay-year" placeholder="' + n2 + '" inputmode="numeric" />', '<div class="qs-close">&#10005;</div>', "</div>", '<div class="qs-overlay-month-container">' + e2.overlayMonths.map(function(e3, t3) {
          return '<div class="qs-overlay-month" data-month-num="' + t3 + '">' + e3 + "</div>";
        }).join("") + "</div>", '<div class="qs-submit qs-disabled">' + a2 + "</div>", "</div>"].join("");
      }
      function m(e2, t2, n2) {
        var a2 = t2.el, r2 = t2.calendar.querySelector(".qs-active"), i2 = e2.textContent, o2 = t2.sibling;
        (a2.disabled || a2.readOnly) && t2.respectDisabledReadOnly || (t2.dateSelected = n2 ? void 0 : new Date(t2.currentYear, t2.currentMonth, i2), r2 && r2.classList.remove("qs-active"), n2 || e2.classList.add("qs-active"), p(a2, t2, n2), n2 || q(t2), o2 && (y({ instance: t2, deselect: n2 }), t2.first && !o2.dateSelected && (o2.currentYear = t2.currentYear, o2.currentMonth = t2.currentMonth, o2.currentMonthName = t2.currentMonthName), u(t2), u(o2)), t2.onSelect(t2, n2 ? void 0 : new Date(t2.dateSelected)));
      }
      function y(e2) {
        var t2 = e2.instance.first ? e2.instance : e2.instance.sibling, n2 = t2.sibling;
        t2 === e2.instance ? e2.deselect ? (t2.minDate = t2.originalMinDate, n2.minDate = n2.originalMinDate) : n2.minDate = t2.dateSelected : e2.deselect ? (n2.maxDate = n2.originalMaxDate, t2.maxDate = t2.originalMaxDate) : t2.maxDate = n2.dateSelected;
      }
      function p(e2, t2, n2) {
        if (!t2.nonInput)
          return n2 ? e2.value = "" : t2.formatter !== s ? t2.formatter(e2, t2.dateSelected, t2) : void (e2.value = t2.dateSelected.toDateString());
      }
      function w(e2, t2, n2, a2) {
        n2 || a2 ? (n2 && (t2.currentYear = +n2), a2 && (t2.currentMonth = +a2)) : (t2.currentMonth += e2.contains("qs-right") ? 1 : -1, 12 === t2.currentMonth ? (t2.currentMonth = 0, t2.currentYear++) : -1 === t2.currentMonth && (t2.currentMonth = 11, t2.currentYear--)), t2.currentMonthName = t2.months[t2.currentMonth], u(t2), t2.onMonthChange(t2);
      }
      function D(e2) {
        if (!e2.noPosition) {
          var t2 = e2.position.top, n2 = e2.position.right;
          if (e2.position.centered)
            return e2.calendarContainer.classList.add("qs-centered");
          var a2 = e2.positionedEl.getBoundingClientRect(), r2 = e2.el.getBoundingClientRect(), i2 = e2.calendarContainer.getBoundingClientRect(), o2 = r2.top - a2.top + (t2 ? -1 * i2.height : r2.height) + "px", s2 = r2.left - a2.left + (n2 ? r2.width - i2.width : 0) + "px";
          e2.calendarContainer.style.setProperty("top", o2), e2.calendarContainer.style.setProperty("left", s2);
        }
      }
      function b(e2) {
        return "[object Date]" === x(e2) && "Invalid Date" !== e2.toString();
      }
      function g(e2) {
        if (b(e2) || "number" == typeof e2 && !isNaN(e2)) {
          var t2 = /* @__PURE__ */ new Date(+e2);
          return new Date(t2.getFullYear(), t2.getMonth(), t2.getDate());
        }
      }
      function q(e2) {
        e2.disabled || !e2.calendarContainer.classList.contains("qs-hidden") && !e2.alwaysShow && ("overlay" !== e2.defaultView && M(true, e2), e2.calendarContainer.classList.add("qs-hidden"), e2.onHide(e2));
      }
      function S(e2) {
        e2.disabled || (e2.calendarContainer.classList.remove("qs-hidden"), "overlay" === e2.defaultView && M(false, e2), D(e2), e2.onShow(e2));
      }
      function M(e2, t2) {
        var n2 = t2.calendar, a2 = n2.querySelector(".qs-overlay"), r2 = a2.querySelector(".qs-overlay-year"), i2 = n2.querySelector(".qs-controls"), o2 = n2.querySelector(".qs-squares");
        e2 ? (a2.classList.add("qs-hidden"), i2.classList.remove("qs-blur"), o2.classList.remove("qs-blur"), r2.value = "") : (a2.classList.remove("qs-hidden"), i2.classList.add("qs-blur"), o2.classList.add("qs-blur"), r2.focus());
      }
      function E(e2, t2, n2, a2) {
        var r2 = isNaN(+(/* @__PURE__ */ new Date()).setFullYear(t2.value || void 0)), i2 = r2 ? null : t2.value;
        if (13 === e2.which || 13 === e2.keyCode || "click" === e2.type)
          a2 ? w(null, n2, i2, a2) : r2 || t2.classList.contains("qs-disabled") || w(null, n2, i2);
        else if (n2.calendar.contains(t2)) {
          n2.calendar.querySelector(".qs-submit").classList[r2 ? "add" : "remove"]("qs-disabled");
        }
      }
      function x(e2) {
        return {}.toString.call(e2);
      }
      function C(e2) {
        a.forEach(function(t2) {
          t2 !== e2 && q(t2);
        });
      }
      function L(e2) {
        if (!e2.__qs_shadow_dom) {
          var t2 = e2.which || e2.keyCode, n2 = e2.type, r2 = e2.target, o2 = r2.classList, s2 = a.filter(function(e3) {
            return e3.calendar.contains(r2) || e3.el === r2;
          })[0], l2 = s2 && s2.calendar.contains(r2);
          if (!(s2 && s2.isMobile && s2.disableMobile)) {
            if ("click" === n2) {
              if (!s2)
                return a.forEach(q);
              if (s2.disabled)
                return;
              var d2 = s2.calendar, c2 = s2.calendarContainer, h2 = s2.disableYearOverlay, f2 = s2.nonInput, v2 = d2.querySelector(".qs-overlay-year"), y2 = !!d2.querySelector(".qs-hidden"), p2 = d2.querySelector(".qs-month-year").contains(r2), D2 = r2.dataset.monthNum;
              if (s2.noPosition && !l2)
                (c2.classList.contains("qs-hidden") ? S : q)(s2);
              else if (o2.contains("qs-arrow"))
                w(o2, s2);
              else if (p2 || o2.contains("qs-close"))
                h2 || M(!y2, s2);
              else if (D2)
                E(e2, v2, s2, D2);
              else {
                if (o2.contains("qs-disabled"))
                  return;
                if (o2.contains("qs-num")) {
                  var b2 = r2.textContent, g2 = +r2.dataset.direction, x2 = new Date(s2.currentYear, s2.currentMonth + g2, b2);
                  if (g2) {
                    s2.currentYear = x2.getFullYear(), s2.currentMonth = x2.getMonth(), s2.currentMonthName = i[s2.currentMonth], u(s2);
                    for (var L2, Y2 = s2.calendar.querySelectorAll('[data-direction="0"]'), j2 = 0; !L2; ) {
                      var O2 = Y2[j2];
                      O2.textContent === b2 && (L2 = O2), j2++;
                    }
                    r2 = L2;
                  }
                  return void (+x2 == +s2.dateSelected ? m(r2, s2, true) : r2.classList.contains("qs-disabled") || m(r2, s2));
                }
                o2.contains("qs-submit") ? E(e2, v2, s2) : f2 && r2 === s2.el && (S(s2), C(s2));
              }
            } else if ("focusin" === n2 && s2)
              S(s2), C(s2);
            else if ("keydown" === n2 && 9 === t2 && s2)
              q(s2);
            else if ("keydown" === n2 && s2 && !s2.disabled) {
              var P2 = !s2.calendar.querySelector(".qs-overlay").classList.contains("qs-hidden");
              13 === t2 && P2 && l2 ? E(e2, r2, s2) : 27 === t2 && P2 && l2 && M(true, s2);
            } else if ("input" === n2) {
              if (!s2 || !s2.calendar.contains(r2))
                return;
              var k2 = s2.calendar.querySelector(".qs-submit"), N2 = r2.value.split("").reduce(function(e3, t3) {
                return e3 || "0" !== t3 ? e3 + (t3.match(/[0-9]/) ? t3 : "") : "";
              }, "").slice(0, 4);
              r2.value = N2, k2.classList[4 === N2.length ? "remove" : "add"]("qs-disabled");
            }
          }
        }
      }
      function Y(e2) {
        L(e2), e2.__qs_shadow_dom = true;
      }
      function j(e2, t2) {
        l.forEach(function(n2) {
          e2.removeEventListener(n2, t2);
        });
      }
      function O() {
        S(this);
      }
      function P() {
        q(this);
      }
      function k(e2, t2) {
        var n2 = g(e2), a2 = this.currentYear, r2 = this.currentMonth, i2 = this.sibling;
        if (null == e2)
          return this.dateSelected = void 0, p(this.el, this, true), i2 && (y({ instance: this, deselect: true }), u(i2)), u(this), this;
        if (!b(e2))
          throw new Error("`setDate` needs a JavaScript Date object.");
        if (this.disabledDates[+n2] || n2 < this.minDate || n2 > this.maxDate)
          throw new Error("You can't manually set a date that's disabled.");
        this.dateSelected = n2, t2 && (this.currentYear = n2.getFullYear(), this.currentMonth = n2.getMonth(), this.currentMonthName = this.months[n2.getMonth()]), p(this.el, this), i2 && (y({ instance: this }), u(i2));
        var o2 = a2 === n2.getFullYear() && r2 === n2.getMonth();
        return o2 || t2 ? u(this, n2) : o2 || u(this, new Date(a2, r2, 1)), this;
      }
      function N(e2) {
        return I(this, e2, true);
      }
      function _(e2) {
        return I(this, e2);
      }
      function I(e2, t2, n2) {
        var a2 = e2.dateSelected, r2 = e2.first, i2 = e2.sibling, o2 = e2.minDate, s2 = e2.maxDate, l2 = g(t2), d2 = n2 ? "Min" : "Max";
        function c2() {
          return "original" + d2 + "Date";
        }
        function h2() {
          return d2.toLowerCase() + "Date";
        }
        function f2() {
          return "set" + d2;
        }
        function v2() {
          throw new Error("Out-of-range date passed to " + f2());
        }
        if (null == t2)
          e2[c2()] = void 0, i2 ? (i2[c2()] = void 0, n2 ? (r2 && !a2 || !r2 && !i2.dateSelected) && (e2.minDate = void 0, i2.minDate = void 0) : (r2 && !i2.dateSelected || !r2 && !a2) && (e2.maxDate = void 0, i2.maxDate = void 0)) : e2[h2()] = void 0;
        else {
          if (!b(t2))
            throw new Error("Invalid date passed to " + f2());
          i2 ? ((r2 && n2 && l2 > (a2 || s2) || r2 && !n2 && l2 < (i2.dateSelected || o2) || !r2 && n2 && l2 > (i2.dateSelected || s2) || !r2 && !n2 && l2 < (a2 || o2)) && v2(), e2[c2()] = l2, i2[c2()] = l2, (n2 && (r2 && !a2 || !r2 && !i2.dateSelected) || !n2 && (r2 && !i2.dateSelected || !r2 && !a2)) && (e2[h2()] = l2, i2[h2()] = l2)) : ((n2 && l2 > (a2 || s2) || !n2 && l2 < (a2 || o2)) && v2(), e2[h2()] = l2);
        }
        return i2 && u(i2), u(e2), e2;
      }
      function A() {
        var e2 = this.first ? this : this.sibling, t2 = e2.sibling;
        return { start: e2.dateSelected, end: t2.dateSelected };
      }
      function R() {
        var e2 = this.shadowDom, t2 = this.positionedEl, n2 = this.calendarContainer, r2 = this.sibling, i2 = this;
        this.inlinePosition && (a.some(function(e3) {
          return e3 !== i2 && e3.positionedEl === t2;
        }) || t2.style.setProperty("position", null));
        n2.remove(), a = a.filter(function(e3) {
          return e3 !== i2;
        }), r2 && delete r2.sibling, a.length || j(document, L);
        var o2 = a.some(function(t3) {
          return t3.shadowDom === e2;
        });
        for (var s2 in e2 && !o2 && j(e2, Y), this)
          delete this[s2];
        a.length || l.forEach(function(e3) {
          document.removeEventListener(e3, L);
        });
      }
      function F(e2, t2) {
        var n2 = new Date(e2);
        if (!b(n2))
          throw new Error("Invalid date passed to `navigate`");
        this.currentYear = n2.getFullYear(), this.currentMonth = n2.getMonth(), u(this), t2 && this.onMonthChange(this);
      }
      function B() {
        var e2 = !this.calendarContainer.classList.contains("qs-hidden"), t2 = !this.calendarContainer.querySelector(".qs-overlay").classList.contains("qs-hidden");
        e2 && M(t2, this);
      }
      t.default = function(e2, t2) {
        var n2 = function(e3, t3) {
          var n3, l3, d2 = function(e4) {
            var t4 = c(e4);
            t4.events && (t4.events = t4.events.reduce(function(e5, t5) {
              if (!b(t5))
                throw new Error('"options.events" must only contain valid JavaScript Date objects.');
              return e5[+g(t5)] = true, e5;
            }, {}));
            ["startDate", "dateSelected", "minDate", "maxDate"].forEach(function(e5) {
              var n5 = t4[e5];
              if (n5 && !b(n5))
                throw new Error('"options.' + e5 + '" needs to be a valid JavaScript Date object.');
              t4[e5] = g(n5);
            });
            var n4 = t4.position, i2 = t4.maxDate, l4 = t4.minDate, d3 = t4.dateSelected, u3 = t4.overlayPlaceholder, h3 = t4.overlayButton, f3 = t4.startDay, v3 = t4.id;
            if (t4.startDate = g(t4.startDate || d3 || /* @__PURE__ */ new Date()), t4.disabledDates = (t4.disabledDates || []).reduce(function(e5, t5) {
              var n5 = +g(t5);
              if (!b(t5))
                throw new Error('You supplied an invalid date to "options.disabledDates".');
              if (n5 === +g(d3))
                throw new Error('"disabledDates" cannot contain the same date as "dateSelected".');
              return e5[n5] = 1, e5;
            }, {}), t4.hasOwnProperty("id") && null == v3)
              throw new Error("`id` cannot be `null` or `undefined`");
            if (null != v3) {
              var m3 = a.filter(function(e5) {
                return e5.id === v3;
              });
              if (m3.length > 1)
                throw new Error("Only two datepickers can share an id.");
              m3.length ? (t4.second = true, t4.sibling = m3[0]) : t4.first = true;
            }
            var y3 = ["tr", "tl", "br", "bl", "c"].some(function(e5) {
              return n4 === e5;
            });
            if (n4 && !y3)
              throw new Error('"options.position" must be one of the following: tl, tr, bl, br, or c.');
            function p2(e5) {
              throw new Error('"dateSelected" in options is ' + (e5 ? "less" : "greater") + ' than "' + (e5 || "max") + 'Date".');
            }
            if (t4.position = function(e5) {
              var t5 = e5[0], n5 = e5[1], a2 = {};
              a2[o[t5]] = 1, n5 && (a2[o[n5]] = 1);
              return a2;
            }(n4 || "bl"), i2 < l4)
              throw new Error('"maxDate" in options is less than "minDate".');
            d3 && (l4 > d3 && p2("min"), i2 < d3 && p2());
            if (["onSelect", "onShow", "onHide", "onMonthChange", "formatter", "disabler"].forEach(function(e5) {
              "function" != typeof t4[e5] && (t4[e5] = s);
            }), ["customDays", "customMonths", "customOverlayMonths"].forEach(function(e5, n5) {
              var a2 = t4[e5], r2 = n5 ? 12 : 7;
              if (a2) {
                if (!Array.isArray(a2) || a2.length !== r2 || a2.some(function(e6) {
                  return "string" != typeof e6;
                }))
                  throw new Error('"' + e5 + '" must be an array with ' + r2 + " strings.");
                t4[n5 ? n5 < 2 ? "months" : "overlayMonths" : "days"] = a2;
              }
            }), f3 && f3 > 0 && f3 < 7) {
              var w3 = (t4.customDays || r).slice(), D3 = w3.splice(0, f3);
              t4.customDays = w3.concat(D3), t4.startDay = +f3, t4.weekendIndices = [w3.length - 1, w3.length];
            } else
              t4.startDay = 0, t4.weekendIndices = [6, 0];
            "string" != typeof u3 && delete t4.overlayPlaceholder;
            "string" != typeof h3 && delete t4.overlayButton;
            var q3 = t4.defaultView;
            if (q3 && "calendar" !== q3 && "overlay" !== q3)
              throw new Error('options.defaultView must either be "calendar" or "overlay".');
            return t4.defaultView = q3 || "calendar", t4;
          }(t3 || { startDate: g(/* @__PURE__ */ new Date()), position: "bl", defaultView: "calendar" }), u2 = e3;
          if ("string" == typeof u2)
            u2 = "#" === u2[0] ? document.getElementById(u2.slice(1)) : document.querySelector(u2);
          else {
            if ("[object ShadowRoot]" === x(u2))
              throw new Error("Using a shadow DOM as your selector is not supported.");
            for (var h2, f2 = u2.parentNode; !h2; ) {
              var v2 = x(f2);
              "[object HTMLDocument]" === v2 ? h2 = true : "[object ShadowRoot]" === v2 ? (h2 = true, n3 = f2, l3 = f2.host) : f2 = f2.parentNode;
            }
          }
          if (!u2)
            throw new Error("No selector / element found.");
          if (a.some(function(e4) {
            return e4.el === u2;
          }))
            throw new Error("A datepicker already exists on that element.");
          var m2 = u2 === document.body, y2 = n3 ? u2.parentElement || n3 : m2 ? document.body : u2.parentElement, w2 = n3 ? u2.parentElement || l3 : y2, D2 = document.createElement("div"), q2 = document.createElement("div");
          D2.className = "qs-datepicker-container qs-hidden", q2.className = "qs-datepicker";
          var M2 = { shadowDom: n3, customElement: l3, positionedEl: w2, el: u2, parent: y2, nonInput: "INPUT" !== u2.nodeName, noPosition: m2, position: !m2 && d2.position, startDate: d2.startDate, dateSelected: d2.dateSelected, disabledDates: d2.disabledDates, minDate: d2.minDate, maxDate: d2.maxDate, noWeekends: !!d2.noWeekends, weekendIndices: d2.weekendIndices, calendarContainer: D2, calendar: q2, currentMonth: (d2.startDate || d2.dateSelected).getMonth(), currentMonthName: (d2.months || i)[(d2.startDate || d2.dateSelected).getMonth()], currentYear: (d2.startDate || d2.dateSelected).getFullYear(), events: d2.events || {}, defaultView: d2.defaultView, setDate: k, remove: R, setMin: N, setMax: _, show: O, hide: P, navigate: F, toggleOverlay: B, onSelect: d2.onSelect, onShow: d2.onShow, onHide: d2.onHide, onMonthChange: d2.onMonthChange, formatter: d2.formatter, disabler: d2.disabler, months: d2.months || i, days: d2.customDays || r, startDay: d2.startDay, overlayMonths: d2.overlayMonths || (d2.months || i).map(function(e4) {
            return e4.slice(0, 3);
          }), overlayPlaceholder: d2.overlayPlaceholder || "4-digit year", overlayButton: d2.overlayButton || "Submit", disableYearOverlay: !!d2.disableYearOverlay, disableMobile: !!d2.disableMobile, isMobile: "ontouchstart" in window, alwaysShow: !!d2.alwaysShow, id: d2.id, showAllDates: !!d2.showAllDates, respectDisabledReadOnly: !!d2.respectDisabledReadOnly, first: d2.first, second: d2.second };
          if (d2.sibling) {
            var E2 = d2.sibling, C2 = M2, L2 = E2.minDate || C2.minDate, Y2 = E2.maxDate || C2.maxDate;
            C2.sibling = E2, E2.sibling = C2, E2.minDate = L2, E2.maxDate = Y2, C2.minDate = L2, C2.maxDate = Y2, E2.originalMinDate = L2, E2.originalMaxDate = Y2, C2.originalMinDate = L2, C2.originalMaxDate = Y2, E2.getRange = A, C2.getRange = A;
          }
          d2.dateSelected && p(u2, M2);
          var j2 = getComputedStyle(w2).position;
          m2 || j2 && "static" !== j2 || (M2.inlinePosition = true, w2.style.setProperty("position", "relative"));
          var I2 = a.filter(function(e4) {
            return e4.positionedEl === M2.positionedEl;
          });
          I2.some(function(e4) {
            return e4.inlinePosition;
          }) && (M2.inlinePosition = true, I2.forEach(function(e4) {
            e4.inlinePosition = true;
          }));
          D2.appendChild(q2), y2.appendChild(D2), M2.alwaysShow && S(M2);
          return M2;
        }(e2, t2);
        if (a.length || d(document), n2.shadowDom && (a.some(function(e3) {
          return e3.shadowDom === n2.shadowDom;
        }) || d(n2.shadowDom)), a.push(n2), n2.second) {
          var l2 = n2.sibling;
          y({ instance: n2, deselect: !n2.dateSelected }), y({ instance: l2, deselect: !l2.dateSelected }), u(l2);
        }
        return u(n2, n2.startDate || n2.dateSelected), n2.alwaysShow && D(n2), n2;
      };
    }]).default;
  });
})(datepicker_min);
var datepicker_minExports = datepicker_min.exports;
const datepicker = /* @__PURE__ */ getDefaultExportFromCjs(datepicker_minExports);
if (document.querySelector("[data-datepicker]")) {
  const picker = datepicker("[data-datepicker]", {
    customDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
    customMonths: [
      "Січ",
      "Лют",
      "Берез",
      "Квіт",
      "Трав",
      "Черв",
      "Лип",
      "Серп",
      "Верес",
      "Жовт",
      "Листоп",
      "Груд"
    ],
    overlayButton: "Застосувати",
    overlayPlaceholder: "Рік (4 цифри)",
    startDay: 1,
    formatter: (input, date, instance) => {
      const value = date.toLocaleDateString();
      input.value = value;
    },
    onSelect: (input, instance, date) => {
    }
  });
  flsModules.datepicker = picker;
}
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function("return this")();
var Symbol$1 = root.Symbol;
var objectProto$1 = Object.prototype;
var hasOwnProperty = objectProto$1.hasOwnProperty;
var nativeObjectToString$1 = objectProto$1.toString;
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto = Object.prototype;
var nativeObjectToString = objectProto.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var now = function() {
  return root.Date.now();
};
var FUNC_ERROR_TEXT$1 = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var FUNC_ERROR_TEXT = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function getElementWindow$1(element) {
  if (!element || !element.ownerDocument || !element.ownerDocument.defaultView) {
    return window;
  }
  return element.ownerDocument.defaultView;
}
function getElementDocument$1(element) {
  if (!element || !element.ownerDocument) {
    return document;
  }
  return element.ownerDocument;
}
var getOptions$1 = function(obj) {
  var initialObj = {};
  var options = Array.prototype.reduce.call(obj, function(acc, attribute) {
    var option = attribute.name.match(/data-simplebar-(.+)/);
    if (option) {
      var key = option[1].replace(/\W+(.)/g, function(_, chr) {
        return chr.toUpperCase();
      });
      switch (attribute.value) {
        case "true":
          acc[key] = true;
          break;
        case "false":
          acc[key] = false;
          break;
        case void 0:
          acc[key] = true;
          break;
        default:
          acc[key] = attribute.value;
      }
    }
    return acc;
  }, initialObj);
  return options;
};
function addClasses$1(el, classes) {
  var _a2;
  if (!el)
    return;
  (_a2 = el.classList).add.apply(_a2, classes.split(" "));
}
function removeClasses$1(el, classes) {
  if (!el)
    return;
  classes.split(" ").forEach(function(className) {
    el.classList.remove(className);
  });
}
function classNamesToQuery$1(classNames) {
  return ".".concat(classNames.split(" ").join("."));
}
var canUseDOM$1 = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var helpers = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  addClasses: addClasses$1,
  canUseDOM: canUseDOM$1,
  classNamesToQuery: classNamesToQuery$1,
  getElementDocument: getElementDocument$1,
  getElementWindow: getElementWindow$1,
  getOptions: getOptions$1,
  removeClasses: removeClasses$1
});
var cachedScrollbarWidth = null;
var cachedDevicePixelRatio = null;
if (canUseDOM$1) {
  window.addEventListener("resize", function() {
    if (cachedDevicePixelRatio !== window.devicePixelRatio) {
      cachedDevicePixelRatio = window.devicePixelRatio;
      cachedScrollbarWidth = null;
    }
  });
}
function scrollbarWidth() {
  if (cachedScrollbarWidth === null) {
    if (typeof document === "undefined") {
      cachedScrollbarWidth = 0;
      return cachedScrollbarWidth;
    }
    var body = document.body;
    var box = document.createElement("div");
    box.classList.add("simplebar-hide-scrollbar");
    body.appendChild(box);
    var width = box.getBoundingClientRect().right;
    body.removeChild(box);
    cachedScrollbarWidth = width;
  }
  return cachedScrollbarWidth;
}
var getElementWindow = getElementWindow$1, getElementDocument = getElementDocument$1, getOptions$2 = getOptions$1, addClasses$2 = addClasses$1, removeClasses = removeClasses$1, classNamesToQuery = classNamesToQuery$1;
var SimpleBarCore = (
  /** @class */
  function() {
    function SimpleBarCore2(element, options) {
      if (options === void 0) {
        options = {};
      }
      var _this = this;
      this.removePreventClickId = null;
      this.minScrollbarWidth = 20;
      this.stopScrollDelay = 175;
      this.isScrolling = false;
      this.isMouseEntering = false;
      this.isDragging = false;
      this.scrollXTicking = false;
      this.scrollYTicking = false;
      this.wrapperEl = null;
      this.contentWrapperEl = null;
      this.contentEl = null;
      this.offsetEl = null;
      this.maskEl = null;
      this.placeholderEl = null;
      this.heightAutoObserverWrapperEl = null;
      this.heightAutoObserverEl = null;
      this.rtlHelpers = null;
      this.scrollbarWidth = 0;
      this.resizeObserver = null;
      this.mutationObserver = null;
      this.elStyles = null;
      this.isRtl = null;
      this.mouseX = 0;
      this.mouseY = 0;
      this.onMouseMove = function() {
      };
      this.onWindowResize = function() {
      };
      this.onStopScrolling = function() {
      };
      this.onMouseEntered = function() {
      };
      this.onScroll = function() {
        var elWindow = getElementWindow(_this.el);
        if (!_this.scrollXTicking) {
          elWindow.requestAnimationFrame(_this.scrollX);
          _this.scrollXTicking = true;
        }
        if (!_this.scrollYTicking) {
          elWindow.requestAnimationFrame(_this.scrollY);
          _this.scrollYTicking = true;
        }
        if (!_this.isScrolling) {
          _this.isScrolling = true;
          addClasses$2(_this.el, _this.classNames.scrolling);
        }
        _this.showScrollbar("x");
        _this.showScrollbar("y");
        _this.onStopScrolling();
      };
      this.scrollX = function() {
        if (_this.axis.x.isOverflowing) {
          _this.positionScrollbar("x");
        }
        _this.scrollXTicking = false;
      };
      this.scrollY = function() {
        if (_this.axis.y.isOverflowing) {
          _this.positionScrollbar("y");
        }
        _this.scrollYTicking = false;
      };
      this._onStopScrolling = function() {
        removeClasses(_this.el, _this.classNames.scrolling);
        if (_this.options.autoHide) {
          _this.hideScrollbar("x");
          _this.hideScrollbar("y");
        }
        _this.isScrolling = false;
      };
      this.onMouseEnter = function() {
        if (!_this.isMouseEntering) {
          addClasses$2(_this.el, _this.classNames.mouseEntered);
          _this.showScrollbar("x");
          _this.showScrollbar("y");
          _this.isMouseEntering = true;
        }
        _this.onMouseEntered();
      };
      this._onMouseEntered = function() {
        removeClasses(_this.el, _this.classNames.mouseEntered);
        if (_this.options.autoHide) {
          _this.hideScrollbar("x");
          _this.hideScrollbar("y");
        }
        _this.isMouseEntering = false;
      };
      this._onMouseMove = function(e) {
        _this.mouseX = e.clientX;
        _this.mouseY = e.clientY;
        if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
          _this.onMouseMoveForAxis("x");
        }
        if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
          _this.onMouseMoveForAxis("y");
        }
      };
      this.onMouseLeave = function() {
        _this.onMouseMove.cancel();
        if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
          _this.onMouseLeaveForAxis("x");
        }
        if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
          _this.onMouseLeaveForAxis("y");
        }
        _this.mouseX = -1;
        _this.mouseY = -1;
      };
      this._onWindowResize = function() {
        _this.scrollbarWidth = _this.getScrollbarWidth();
        _this.hideNativeScrollbar();
      };
      this.onPointerEvent = function(e) {
        if (!_this.axis.x.track.el || !_this.axis.y.track.el || !_this.axis.x.scrollbar.el || !_this.axis.y.scrollbar.el)
          return;
        var isWithinTrackXBounds, isWithinTrackYBounds;
        _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
        _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();
        if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
          isWithinTrackXBounds = _this.isWithinBounds(_this.axis.x.track.rect);
        }
        if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
          isWithinTrackYBounds = _this.isWithinBounds(_this.axis.y.track.rect);
        }
        if (isWithinTrackXBounds || isWithinTrackYBounds) {
          e.stopPropagation();
          if (e.type === "pointerdown" && e.pointerType !== "touch") {
            if (isWithinTrackXBounds) {
              _this.axis.x.scrollbar.rect = _this.axis.x.scrollbar.el.getBoundingClientRect();
              if (_this.isWithinBounds(_this.axis.x.scrollbar.rect)) {
                _this.onDragStart(e, "x");
              } else {
                _this.onTrackClick(e, "x");
              }
            }
            if (isWithinTrackYBounds) {
              _this.axis.y.scrollbar.rect = _this.axis.y.scrollbar.el.getBoundingClientRect();
              if (_this.isWithinBounds(_this.axis.y.scrollbar.rect)) {
                _this.onDragStart(e, "y");
              } else {
                _this.onTrackClick(e, "y");
              }
            }
          }
        }
      };
      this.drag = function(e) {
        var _a2, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        if (!_this.draggedAxis || !_this.contentWrapperEl)
          return;
        var eventOffset;
        var track = _this.axis[_this.draggedAxis].track;
        var trackSize = (_b = (_a2 = track.rect) === null || _a2 === void 0 ? void 0 : _a2[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _b !== void 0 ? _b : 0;
        var scrollbar = _this.axis[_this.draggedAxis].scrollbar;
        var contentSize = (_d = (_c = _this.contentWrapperEl) === null || _c === void 0 ? void 0 : _c[_this.axis[_this.draggedAxis].scrollSizeAttr]) !== null && _d !== void 0 ? _d : 0;
        var hostSize = parseInt((_f = (_e = _this.elStyles) === null || _e === void 0 ? void 0 : _e[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _f !== void 0 ? _f : "0px", 10);
        e.preventDefault();
        e.stopPropagation();
        if (_this.draggedAxis === "y") {
          eventOffset = e.pageY;
        } else {
          eventOffset = e.pageX;
        }
        var dragPos = eventOffset - ((_h = (_g = track.rect) === null || _g === void 0 ? void 0 : _g[_this.axis[_this.draggedAxis].offsetAttr]) !== null && _h !== void 0 ? _h : 0) - _this.axis[_this.draggedAxis].dragOffset;
        dragPos = _this.draggedAxis === "x" && _this.isRtl ? ((_k = (_j = track.rect) === null || _j === void 0 ? void 0 : _j[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _k !== void 0 ? _k : 0) - scrollbar.size - dragPos : dragPos;
        var dragPerc = dragPos / (trackSize - scrollbar.size);
        var scrollPos = dragPerc * (contentSize - hostSize);
        if (_this.draggedAxis === "x" && _this.isRtl) {
          scrollPos = ((_l = SimpleBarCore2.getRtlHelpers()) === null || _l === void 0 ? void 0 : _l.isScrollingToNegative) ? -scrollPos : scrollPos;
        }
        _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollOffsetAttr] = scrollPos;
      };
      this.onEndDrag = function(e) {
        _this.isDragging = false;
        var elDocument = getElementDocument(_this.el);
        var elWindow = getElementWindow(_this.el);
        e.preventDefault();
        e.stopPropagation();
        removeClasses(_this.el, _this.classNames.dragging);
        _this.onStopScrolling();
        elDocument.removeEventListener("mousemove", _this.drag, true);
        elDocument.removeEventListener("mouseup", _this.onEndDrag, true);
        _this.removePreventClickId = elWindow.setTimeout(function() {
          elDocument.removeEventListener("click", _this.preventClick, true);
          elDocument.removeEventListener("dblclick", _this.preventClick, true);
          _this.removePreventClickId = null;
        });
      };
      this.preventClick = function(e) {
        e.preventDefault();
        e.stopPropagation();
      };
      this.el = element;
      this.options = __assign(__assign({}, SimpleBarCore2.defaultOptions), options);
      this.classNames = __assign(__assign({}, SimpleBarCore2.defaultOptions.classNames), options.classNames);
      this.axis = {
        x: {
          scrollOffsetAttr: "scrollLeft",
          sizeAttr: "width",
          scrollSizeAttr: "scrollWidth",
          offsetSizeAttr: "offsetWidth",
          offsetAttr: "left",
          overflowAttr: "overflowX",
          dragOffset: 0,
          isOverflowing: true,
          forceVisible: false,
          track: { size: null, el: null, rect: null, isVisible: false },
          scrollbar: { size: null, el: null, rect: null, isVisible: false }
        },
        y: {
          scrollOffsetAttr: "scrollTop",
          sizeAttr: "height",
          scrollSizeAttr: "scrollHeight",
          offsetSizeAttr: "offsetHeight",
          offsetAttr: "top",
          overflowAttr: "overflowY",
          dragOffset: 0,
          isOverflowing: true,
          forceVisible: false,
          track: { size: null, el: null, rect: null, isVisible: false },
          scrollbar: { size: null, el: null, rect: null, isVisible: false }
        }
      };
      if (typeof this.el !== "object" || !this.el.nodeName) {
        throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));
      }
      this.onMouseMove = throttle(this._onMouseMove, 64);
      this.onWindowResize = debounce(this._onWindowResize, 64, { leading: true });
      this.onStopScrolling = debounce(this._onStopScrolling, this.stopScrollDelay);
      this.onMouseEntered = debounce(this._onMouseEntered, this.stopScrollDelay);
      this.init();
    }
    SimpleBarCore2.getRtlHelpers = function() {
      if (SimpleBarCore2.rtlHelpers) {
        return SimpleBarCore2.rtlHelpers;
      }
      var dummyDiv = document.createElement("div");
      dummyDiv.innerHTML = '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
      var scrollbarDummyEl = dummyDiv.firstElementChild;
      var dummyChild = scrollbarDummyEl === null || scrollbarDummyEl === void 0 ? void 0 : scrollbarDummyEl.firstElementChild;
      if (!dummyChild)
        return null;
      document.body.appendChild(scrollbarDummyEl);
      scrollbarDummyEl.scrollLeft = 0;
      var dummyContainerOffset = SimpleBarCore2.getOffset(scrollbarDummyEl);
      var dummyChildOffset = SimpleBarCore2.getOffset(dummyChild);
      scrollbarDummyEl.scrollLeft = -999;
      var dummyChildOffsetAfterScroll = SimpleBarCore2.getOffset(dummyChild);
      document.body.removeChild(scrollbarDummyEl);
      SimpleBarCore2.rtlHelpers = {
        // determines if the scrolling is responding with negative values
        isScrollOriginAtZero: dummyContainerOffset.left !== dummyChildOffset.left,
        // determines if the origin scrollbar position is inverted or not (positioned on left or right)
        isScrollingToNegative: dummyChildOffset.left !== dummyChildOffsetAfterScroll.left
      };
      return SimpleBarCore2.rtlHelpers;
    };
    SimpleBarCore2.prototype.getScrollbarWidth = function() {
      try {
        if (this.contentWrapperEl && getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display === "none" || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style) {
          return 0;
        } else {
          return scrollbarWidth();
        }
      } catch (e) {
        return scrollbarWidth();
      }
    };
    SimpleBarCore2.getOffset = function(el) {
      var rect = el.getBoundingClientRect();
      var elDocument = getElementDocument(el);
      var elWindow = getElementWindow(el);
      return {
        top: rect.top + (elWindow.pageYOffset || elDocument.documentElement.scrollTop),
        left: rect.left + (elWindow.pageXOffset || elDocument.documentElement.scrollLeft)
      };
    };
    SimpleBarCore2.prototype.init = function() {
      if (canUseDOM$1) {
        this.initDOM();
        this.rtlHelpers = SimpleBarCore2.getRtlHelpers();
        this.scrollbarWidth = this.getScrollbarWidth();
        this.recalculate();
        this.initListeners();
      }
    };
    SimpleBarCore2.prototype.initDOM = function() {
      var _a2, _b;
      this.wrapperEl = this.el.querySelector(classNamesToQuery(this.classNames.wrapper));
      this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector(classNamesToQuery(this.classNames.contentWrapper));
      this.contentEl = this.options.contentNode || this.el.querySelector(classNamesToQuery(this.classNames.contentEl));
      this.offsetEl = this.el.querySelector(classNamesToQuery(this.classNames.offset));
      this.maskEl = this.el.querySelector(classNamesToQuery(this.classNames.mask));
      this.placeholderEl = this.findChild(this.wrapperEl, classNamesToQuery(this.classNames.placeholder));
      this.heightAutoObserverWrapperEl = this.el.querySelector(classNamesToQuery(this.classNames.heightAutoObserverWrapperEl));
      this.heightAutoObserverEl = this.el.querySelector(classNamesToQuery(this.classNames.heightAutoObserverEl));
      this.axis.x.track.el = this.findChild(this.el, "".concat(classNamesToQuery(this.classNames.track)).concat(classNamesToQuery(this.classNames.horizontal)));
      this.axis.y.track.el = this.findChild(this.el, "".concat(classNamesToQuery(this.classNames.track)).concat(classNamesToQuery(this.classNames.vertical)));
      this.axis.x.scrollbar.el = ((_a2 = this.axis.x.track.el) === null || _a2 === void 0 ? void 0 : _a2.querySelector(classNamesToQuery(this.classNames.scrollbar))) || null;
      this.axis.y.scrollbar.el = ((_b = this.axis.y.track.el) === null || _b === void 0 ? void 0 : _b.querySelector(classNamesToQuery(this.classNames.scrollbar))) || null;
      if (!this.options.autoHide) {
        addClasses$2(this.axis.x.scrollbar.el, this.classNames.visible);
        addClasses$2(this.axis.y.scrollbar.el, this.classNames.visible);
      }
    };
    SimpleBarCore2.prototype.initListeners = function() {
      var _this = this;
      var _a2;
      var elWindow = getElementWindow(this.el);
      this.el.addEventListener("mouseenter", this.onMouseEnter);
      this.el.addEventListener("pointerdown", this.onPointerEvent, true);
      this.el.addEventListener("mousemove", this.onMouseMove);
      this.el.addEventListener("mouseleave", this.onMouseLeave);
      (_a2 = this.contentWrapperEl) === null || _a2 === void 0 ? void 0 : _a2.addEventListener("scroll", this.onScroll);
      elWindow.addEventListener("resize", this.onWindowResize);
      if (!this.contentEl)
        return;
      if (window.ResizeObserver) {
        var resizeObserverStarted_1 = false;
        var resizeObserver = elWindow.ResizeObserver || ResizeObserver;
        this.resizeObserver = new resizeObserver(function() {
          if (!resizeObserverStarted_1)
            return;
          elWindow.requestAnimationFrame(function() {
            _this.recalculate();
          });
        });
        this.resizeObserver.observe(this.el);
        this.resizeObserver.observe(this.contentEl);
        elWindow.requestAnimationFrame(function() {
          resizeObserverStarted_1 = true;
        });
      }
      this.mutationObserver = new elWindow.MutationObserver(function() {
        elWindow.requestAnimationFrame(function() {
          _this.recalculate();
        });
      });
      this.mutationObserver.observe(this.contentEl, {
        childList: true,
        subtree: true,
        characterData: true
      });
    };
    SimpleBarCore2.prototype.recalculate = function() {
      if (!this.heightAutoObserverEl || !this.contentEl || !this.contentWrapperEl || !this.wrapperEl || !this.placeholderEl)
        return;
      var elWindow = getElementWindow(this.el);
      this.elStyles = elWindow.getComputedStyle(this.el);
      this.isRtl = this.elStyles.direction === "rtl";
      var contentElOffsetWidth = this.contentEl.offsetWidth;
      var isHeightAuto = this.heightAutoObserverEl.offsetHeight <= 1;
      var isWidthAuto = this.heightAutoObserverEl.offsetWidth <= 1 || contentElOffsetWidth > 0;
      var contentWrapperElOffsetWidth = this.contentWrapperEl.offsetWidth;
      var elOverflowX = this.elStyles.overflowX;
      var elOverflowY = this.elStyles.overflowY;
      this.contentEl.style.padding = "".concat(this.elStyles.paddingTop, " ").concat(this.elStyles.paddingRight, " ").concat(this.elStyles.paddingBottom, " ").concat(this.elStyles.paddingLeft);
      this.wrapperEl.style.margin = "-".concat(this.elStyles.paddingTop, " -").concat(this.elStyles.paddingRight, " -").concat(this.elStyles.paddingBottom, " -").concat(this.elStyles.paddingLeft);
      var contentElScrollHeight = this.contentEl.scrollHeight;
      var contentElScrollWidth = this.contentEl.scrollWidth;
      this.contentWrapperEl.style.height = isHeightAuto ? "auto" : "100%";
      this.placeholderEl.style.width = isWidthAuto ? "".concat(contentElOffsetWidth || contentElScrollWidth, "px") : "auto";
      this.placeholderEl.style.height = "".concat(contentElScrollHeight, "px");
      var contentWrapperElOffsetHeight = this.contentWrapperEl.offsetHeight;
      this.axis.x.isOverflowing = contentElOffsetWidth !== 0 && contentElScrollWidth > contentElOffsetWidth;
      this.axis.y.isOverflowing = contentElScrollHeight > contentWrapperElOffsetHeight;
      this.axis.x.isOverflowing = elOverflowX === "hidden" ? false : this.axis.x.isOverflowing;
      this.axis.y.isOverflowing = elOverflowY === "hidden" ? false : this.axis.y.isOverflowing;
      this.axis.x.forceVisible = this.options.forceVisible === "x" || this.options.forceVisible === true;
      this.axis.y.forceVisible = this.options.forceVisible === "y" || this.options.forceVisible === true;
      this.hideNativeScrollbar();
      var offsetForXScrollbar = this.axis.x.isOverflowing ? this.scrollbarWidth : 0;
      var offsetForYScrollbar = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
      this.axis.x.isOverflowing = this.axis.x.isOverflowing && contentElScrollWidth > contentWrapperElOffsetWidth - offsetForYScrollbar;
      this.axis.y.isOverflowing = this.axis.y.isOverflowing && contentElScrollHeight > contentWrapperElOffsetHeight - offsetForXScrollbar;
      this.axis.x.scrollbar.size = this.getScrollbarSize("x");
      this.axis.y.scrollbar.size = this.getScrollbarSize("y");
      if (this.axis.x.scrollbar.el)
        this.axis.x.scrollbar.el.style.width = "".concat(this.axis.x.scrollbar.size, "px");
      if (this.axis.y.scrollbar.el)
        this.axis.y.scrollbar.el.style.height = "".concat(this.axis.y.scrollbar.size, "px");
      this.positionScrollbar("x");
      this.positionScrollbar("y");
      this.toggleTrackVisibility("x");
      this.toggleTrackVisibility("y");
    };
    SimpleBarCore2.prototype.getScrollbarSize = function(axis) {
      var _a2, _b;
      if (axis === void 0) {
        axis = "y";
      }
      if (!this.axis[axis].isOverflowing || !this.contentEl) {
        return 0;
      }
      var contentSize = this.contentEl[this.axis[axis].scrollSizeAttr];
      var trackSize = (_b = (_a2 = this.axis[axis].track.el) === null || _a2 === void 0 ? void 0 : _a2[this.axis[axis].offsetSizeAttr]) !== null && _b !== void 0 ? _b : 0;
      var scrollbarRatio = trackSize / contentSize;
      var scrollbarSize;
      scrollbarSize = Math.max(~~(scrollbarRatio * trackSize), this.options.scrollbarMinSize);
      if (this.options.scrollbarMaxSize) {
        scrollbarSize = Math.min(scrollbarSize, this.options.scrollbarMaxSize);
      }
      return scrollbarSize;
    };
    SimpleBarCore2.prototype.positionScrollbar = function(axis) {
      var _a2, _b, _c;
      if (axis === void 0) {
        axis = "y";
      }
      var scrollbar = this.axis[axis].scrollbar;
      if (!this.axis[axis].isOverflowing || !this.contentWrapperEl || !scrollbar.el || !this.elStyles) {
        return;
      }
      var contentSize = this.contentWrapperEl[this.axis[axis].scrollSizeAttr];
      var trackSize = ((_a2 = this.axis[axis].track.el) === null || _a2 === void 0 ? void 0 : _a2[this.axis[axis].offsetSizeAttr]) || 0;
      var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
      var scrollOffset = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
      scrollOffset = axis === "x" && this.isRtl && ((_b = SimpleBarCore2.getRtlHelpers()) === null || _b === void 0 ? void 0 : _b.isScrollOriginAtZero) ? -scrollOffset : scrollOffset;
      if (axis === "x" && this.isRtl) {
        scrollOffset = ((_c = SimpleBarCore2.getRtlHelpers()) === null || _c === void 0 ? void 0 : _c.isScrollingToNegative) ? scrollOffset : -scrollOffset;
      }
      var scrollPourcent = scrollOffset / (contentSize - hostSize);
      var handleOffset = ~~((trackSize - scrollbar.size) * scrollPourcent);
      handleOffset = axis === "x" && this.isRtl ? -handleOffset + (trackSize - scrollbar.size) : handleOffset;
      scrollbar.el.style.transform = axis === "x" ? "translate3d(".concat(handleOffset, "px, 0, 0)") : "translate3d(0, ".concat(handleOffset, "px, 0)");
    };
    SimpleBarCore2.prototype.toggleTrackVisibility = function(axis) {
      if (axis === void 0) {
        axis = "y";
      }
      var track = this.axis[axis].track.el;
      var scrollbar = this.axis[axis].scrollbar.el;
      if (!track || !scrollbar || !this.contentWrapperEl)
        return;
      if (this.axis[axis].isOverflowing || this.axis[axis].forceVisible) {
        track.style.visibility = "visible";
        this.contentWrapperEl.style[this.axis[axis].overflowAttr] = "scroll";
        this.el.classList.add("".concat(this.classNames.scrollable, "-").concat(axis));
      } else {
        track.style.visibility = "hidden";
        this.contentWrapperEl.style[this.axis[axis].overflowAttr] = "hidden";
        this.el.classList.remove("".concat(this.classNames.scrollable, "-").concat(axis));
      }
      if (this.axis[axis].isOverflowing) {
        scrollbar.style.display = "block";
      } else {
        scrollbar.style.display = "none";
      }
    };
    SimpleBarCore2.prototype.showScrollbar = function(axis) {
      if (axis === void 0) {
        axis = "y";
      }
      if (this.axis[axis].isOverflowing && !this.axis[axis].scrollbar.isVisible) {
        addClasses$2(this.axis[axis].scrollbar.el, this.classNames.visible);
        this.axis[axis].scrollbar.isVisible = true;
      }
    };
    SimpleBarCore2.prototype.hideScrollbar = function(axis) {
      if (axis === void 0) {
        axis = "y";
      }
      if (this.isDragging)
        return;
      if (this.axis[axis].isOverflowing && this.axis[axis].scrollbar.isVisible) {
        removeClasses(this.axis[axis].scrollbar.el, this.classNames.visible);
        this.axis[axis].scrollbar.isVisible = false;
      }
    };
    SimpleBarCore2.prototype.hideNativeScrollbar = function() {
      if (!this.offsetEl)
        return;
      this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px";
      this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px";
    };
    SimpleBarCore2.prototype.onMouseMoveForAxis = function(axis) {
      if (axis === void 0) {
        axis = "y";
      }
      var currentAxis = this.axis[axis];
      if (!currentAxis.track.el || !currentAxis.scrollbar.el)
        return;
      currentAxis.track.rect = currentAxis.track.el.getBoundingClientRect();
      currentAxis.scrollbar.rect = currentAxis.scrollbar.el.getBoundingClientRect();
      if (this.isWithinBounds(currentAxis.track.rect)) {
        this.showScrollbar(axis);
        addClasses$2(currentAxis.track.el, this.classNames.hover);
        if (this.isWithinBounds(currentAxis.scrollbar.rect)) {
          addClasses$2(currentAxis.scrollbar.el, this.classNames.hover);
        } else {
          removeClasses(currentAxis.scrollbar.el, this.classNames.hover);
        }
      } else {
        removeClasses(currentAxis.track.el, this.classNames.hover);
        if (this.options.autoHide) {
          this.hideScrollbar(axis);
        }
      }
    };
    SimpleBarCore2.prototype.onMouseLeaveForAxis = function(axis) {
      if (axis === void 0) {
        axis = "y";
      }
      removeClasses(this.axis[axis].track.el, this.classNames.hover);
      removeClasses(this.axis[axis].scrollbar.el, this.classNames.hover);
      if (this.options.autoHide) {
        this.hideScrollbar(axis);
      }
    };
    SimpleBarCore2.prototype.onDragStart = function(e, axis) {
      var _a2;
      if (axis === void 0) {
        axis = "y";
      }
      this.isDragging = true;
      var elDocument = getElementDocument(this.el);
      var elWindow = getElementWindow(this.el);
      var scrollbar = this.axis[axis].scrollbar;
      var eventOffset = axis === "y" ? e.pageY : e.pageX;
      this.axis[axis].dragOffset = eventOffset - (((_a2 = scrollbar.rect) === null || _a2 === void 0 ? void 0 : _a2[this.axis[axis].offsetAttr]) || 0);
      this.draggedAxis = axis;
      addClasses$2(this.el, this.classNames.dragging);
      elDocument.addEventListener("mousemove", this.drag, true);
      elDocument.addEventListener("mouseup", this.onEndDrag, true);
      if (this.removePreventClickId === null) {
        elDocument.addEventListener("click", this.preventClick, true);
        elDocument.addEventListener("dblclick", this.preventClick, true);
      } else {
        elWindow.clearTimeout(this.removePreventClickId);
        this.removePreventClickId = null;
      }
    };
    SimpleBarCore2.prototype.onTrackClick = function(e, axis) {
      var _this = this;
      var _a2, _b, _c, _d;
      if (axis === void 0) {
        axis = "y";
      }
      var currentAxis = this.axis[axis];
      if (!this.options.clickOnTrack || !currentAxis.scrollbar.el || !this.contentWrapperEl)
        return;
      e.preventDefault();
      var elWindow = getElementWindow(this.el);
      this.axis[axis].scrollbar.rect = currentAxis.scrollbar.el.getBoundingClientRect();
      var scrollbar = this.axis[axis].scrollbar;
      var scrollbarOffset = (_b = (_a2 = scrollbar.rect) === null || _a2 === void 0 ? void 0 : _a2[this.axis[axis].offsetAttr]) !== null && _b !== void 0 ? _b : 0;
      var hostSize = parseInt((_d = (_c = this.elStyles) === null || _c === void 0 ? void 0 : _c[this.axis[axis].sizeAttr]) !== null && _d !== void 0 ? _d : "0px", 10);
      var scrolled = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
      var t = axis === "y" ? this.mouseY - scrollbarOffset : this.mouseX - scrollbarOffset;
      var dir = t < 0 ? -1 : 1;
      var scrollSize = dir === -1 ? scrolled - hostSize : scrolled + hostSize;
      var speed = 40;
      var scrollTo = function() {
        if (!_this.contentWrapperEl)
          return;
        if (dir === -1) {
          if (scrolled > scrollSize) {
            scrolled -= speed;
            _this.contentWrapperEl[_this.axis[axis].scrollOffsetAttr] = scrolled;
            elWindow.requestAnimationFrame(scrollTo);
          }
        } else {
          if (scrolled < scrollSize) {
            scrolled += speed;
            _this.contentWrapperEl[_this.axis[axis].scrollOffsetAttr] = scrolled;
            elWindow.requestAnimationFrame(scrollTo);
          }
        }
      };
      scrollTo();
    };
    SimpleBarCore2.prototype.getContentElement = function() {
      return this.contentEl;
    };
    SimpleBarCore2.prototype.getScrollElement = function() {
      return this.contentWrapperEl;
    };
    SimpleBarCore2.prototype.removeListeners = function() {
      var elWindow = getElementWindow(this.el);
      this.el.removeEventListener("mouseenter", this.onMouseEnter);
      this.el.removeEventListener("pointerdown", this.onPointerEvent, true);
      this.el.removeEventListener("mousemove", this.onMouseMove);
      this.el.removeEventListener("mouseleave", this.onMouseLeave);
      if (this.contentWrapperEl) {
        this.contentWrapperEl.removeEventListener("scroll", this.onScroll);
      }
      elWindow.removeEventListener("resize", this.onWindowResize);
      if (this.mutationObserver) {
        this.mutationObserver.disconnect();
      }
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
      }
      this.onMouseMove.cancel();
      this.onWindowResize.cancel();
      this.onStopScrolling.cancel();
      this.onMouseEntered.cancel();
    };
    SimpleBarCore2.prototype.unMount = function() {
      this.removeListeners();
    };
    SimpleBarCore2.prototype.isWithinBounds = function(bbox) {
      return this.mouseX >= bbox.left && this.mouseX <= bbox.left + bbox.width && this.mouseY >= bbox.top && this.mouseY <= bbox.top + bbox.height;
    };
    SimpleBarCore2.prototype.findChild = function(el, query) {
      var matches = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
      return Array.prototype.filter.call(el.children, function(child) {
        return matches.call(child, query);
      })[0];
    };
    SimpleBarCore2.rtlHelpers = null;
    SimpleBarCore2.defaultOptions = {
      forceVisible: false,
      clickOnTrack: true,
      scrollbarMinSize: 25,
      scrollbarMaxSize: 0,
      ariaLabel: "scrollable content",
      tabIndex: 0,
      classNames: {
        contentEl: "simplebar-content",
        contentWrapper: "simplebar-content-wrapper",
        offset: "simplebar-offset",
        mask: "simplebar-mask",
        wrapper: "simplebar-wrapper",
        placeholder: "simplebar-placeholder",
        scrollbar: "simplebar-scrollbar",
        track: "simplebar-track",
        heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
        heightAutoObserverEl: "simplebar-height-auto-observer",
        visible: "simplebar-visible",
        horizontal: "simplebar-horizontal",
        vertical: "simplebar-vertical",
        hover: "simplebar-hover",
        dragging: "simplebar-dragging",
        scrolling: "simplebar-scrolling",
        scrollable: "simplebar-scrollable",
        mouseEntered: "simplebar-mouse-entered"
      },
      scrollableNode: null,
      contentNode: null,
      autoHide: true
    };
    SimpleBarCore2.getOptions = getOptions$2;
    SimpleBarCore2.helpers = helpers;
    return SimpleBarCore2;
  }()
);
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var _a = SimpleBarCore.helpers, getOptions = _a.getOptions, addClasses = _a.addClasses, canUseDOM = _a.canUseDOM;
var SimpleBar = (
  /** @class */
  function(_super) {
    __extends(SimpleBar2, _super);
    function SimpleBar2() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var _this = _super.apply(this, args) || this;
      SimpleBar2.instances.set(args[0], _this);
      return _this;
    }
    SimpleBar2.initDOMLoadedElements = function() {
      document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements);
      window.removeEventListener("load", this.initDOMLoadedElements);
      Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), function(el) {
        if (el.getAttribute("data-simplebar") !== "init" && !SimpleBar2.instances.has(el))
          new SimpleBar2(el, getOptions(el.attributes));
      });
    };
    SimpleBar2.removeObserver = function() {
      var _a2;
      (_a2 = SimpleBar2.globalObserver) === null || _a2 === void 0 ? void 0 : _a2.disconnect();
    };
    SimpleBar2.prototype.initDOM = function() {
      var _this = this;
      var _a2, _b, _c;
      if (!Array.prototype.filter.call(this.el.children, function(child) {
        return child.classList.contains(_this.classNames.wrapper);
      }).length) {
        this.wrapperEl = document.createElement("div");
        this.contentWrapperEl = document.createElement("div");
        this.offsetEl = document.createElement("div");
        this.maskEl = document.createElement("div");
        this.contentEl = document.createElement("div");
        this.placeholderEl = document.createElement("div");
        this.heightAutoObserverWrapperEl = document.createElement("div");
        this.heightAutoObserverEl = document.createElement("div");
        addClasses(this.wrapperEl, this.classNames.wrapper);
        addClasses(this.contentWrapperEl, this.classNames.contentWrapper);
        addClasses(this.offsetEl, this.classNames.offset);
        addClasses(this.maskEl, this.classNames.mask);
        addClasses(this.contentEl, this.classNames.contentEl);
        addClasses(this.placeholderEl, this.classNames.placeholder);
        addClasses(this.heightAutoObserverWrapperEl, this.classNames.heightAutoObserverWrapperEl);
        addClasses(this.heightAutoObserverEl, this.classNames.heightAutoObserverEl);
        while (this.el.firstChild) {
          this.contentEl.appendChild(this.el.firstChild);
        }
        this.contentWrapperEl.appendChild(this.contentEl);
        this.offsetEl.appendChild(this.contentWrapperEl);
        this.maskEl.appendChild(this.offsetEl);
        this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl);
        this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl);
        this.wrapperEl.appendChild(this.maskEl);
        this.wrapperEl.appendChild(this.placeholderEl);
        this.el.appendChild(this.wrapperEl);
        (_a2 = this.contentWrapperEl) === null || _a2 === void 0 ? void 0 : _a2.setAttribute("tabindex", this.options.tabIndex.toString());
        (_b = this.contentWrapperEl) === null || _b === void 0 ? void 0 : _b.setAttribute("role", "region");
        (_c = this.contentWrapperEl) === null || _c === void 0 ? void 0 : _c.setAttribute("aria-label", this.options.ariaLabel);
      }
      if (!this.axis.x.track.el || !this.axis.y.track.el) {
        var track = document.createElement("div");
        var scrollbar = document.createElement("div");
        addClasses(track, this.classNames.track);
        addClasses(scrollbar, this.classNames.scrollbar);
        track.appendChild(scrollbar);
        this.axis.x.track.el = track.cloneNode(true);
        addClasses(this.axis.x.track.el, this.classNames.horizontal);
        this.axis.y.track.el = track.cloneNode(true);
        addClasses(this.axis.y.track.el, this.classNames.vertical);
        this.el.appendChild(this.axis.x.track.el);
        this.el.appendChild(this.axis.y.track.el);
      }
      SimpleBarCore.prototype.initDOM.call(this);
      this.el.setAttribute("data-simplebar", "init");
    };
    SimpleBar2.prototype.unMount = function() {
      SimpleBarCore.prototype.unMount.call(this);
      SimpleBar2.instances["delete"](this.el);
    };
    SimpleBar2.initHtmlApi = function() {
      this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this);
      if (typeof MutationObserver !== "undefined") {
        this.globalObserver = new MutationObserver(SimpleBar2.handleMutations);
        this.globalObserver.observe(document, { childList: true, subtree: true });
      }
      if (document.readyState === "complete" || // @ts-ignore: IE specific
      document.readyState !== "loading" && !document.documentElement.doScroll) {
        window.setTimeout(this.initDOMLoadedElements);
      } else {
        document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements);
        window.addEventListener("load", this.initDOMLoadedElements);
      }
    };
    SimpleBar2.handleMutations = function(mutations) {
      mutations.forEach(function(mutation) {
        mutation.addedNodes.forEach(function(addedNode) {
          if (addedNode.nodeType === 1) {
            if (addedNode.hasAttribute("data-simplebar")) {
              !SimpleBar2.instances.has(addedNode) && document.documentElement.contains(addedNode) && new SimpleBar2(addedNode, getOptions(addedNode.attributes));
            } else {
              addedNode.querySelectorAll("[data-simplebar]").forEach(function(el) {
                if (el.getAttribute("data-simplebar") !== "init" && !SimpleBar2.instances.has(el) && document.documentElement.contains(el))
                  new SimpleBar2(el, getOptions(el.attributes));
              });
            }
          }
        });
        mutation.removedNodes.forEach(function(removedNode) {
          var _a2;
          if (removedNode.nodeType === 1) {
            if (removedNode.getAttribute("data-simplebar") === "init") {
              !document.documentElement.contains(removedNode) && ((_a2 = SimpleBar2.instances.get(removedNode)) === null || _a2 === void 0 ? void 0 : _a2.unMount());
            } else {
              Array.prototype.forEach.call(removedNode.querySelectorAll('[data-simplebar="init"]'), function(el) {
                var _a3;
                !document.documentElement.contains(el) && ((_a3 = SimpleBar2.instances.get(el)) === null || _a3 === void 0 ? void 0 : _a3.unMount());
              });
            }
          }
        });
      });
    };
    SimpleBar2.instances = /* @__PURE__ */ new WeakMap();
    return SimpleBar2;
  }(SimpleBarCore)
);
if (canUseDOM) {
  SimpleBar.initHtmlApi();
}
if (document.querySelectorAll("[data-simplebar]").length) {
  document.querySelectorAll("[data-simplebar]").forEach((scrollBlock) => {
    new SimpleBar(scrollBlock, {
      autoHide: true,
      forceVisible: "x"
      // Додаткові налаштування
      // autoHide: false, // Автоматичне приховування панелі прокрутки
      // forceVisible: "y", // Відображення панелі прокрутки по вертикалі
      // forceVisible: "x", // Відображення панелі прокрутки по горизонталі
      // forceVisible: "y", // Відображення панелі прокрутки по обох осях
      // scrollbarMaxSize: 28, // Максимальна ширина панелі прокрутки
      // scrollbarMinSize: 28, // Мінімальна ширина панелі прокрутки
      // scrollbarOpacity: 0.5, // Прозорість панелі прокрутки
      // scrollbarOffset: 0, // Відступ панелі прокрутки
      // trackClickBehavior: "jump", // Поведінка кліку по треку
      // trackClickBehavior: "drag", // Поведінка кліку по треку
      // trackClickBehavior: "none", // Поведінка кліку по треку
      // direction: "ltr", // Напрямок прокрутки
      // classNames: {
      //   content: "simplebar-content",
      //   scrollContent: "simplebar-scroll-content",
      //   scrollbar: "simplebar-scrollbar",
      //   track: "simplebar-track",
      //   heightAutoObserverWrapper: "simplebar-height-auto-observer-wrapper",
      //   heightAutoObserver: "simplebar-height-auto-observer",
      //   visible: "simplebar-visible",
      //   horizontal: "simplebar-horizontal",
      //   vertical: "simplebar-vertical",
      //   hover: "simplebar-hover",
      //   dragging: "simplebar-dragging",
      //   scrollbarX: "simplebar-scrollbar-x",
      //   scrollbarY: "simplebar-scrollbar-y",
      //   trackX: "simplebar-track-x",
      //   trackY: "simplebar-track-y",
      // },
    });
  });
}
flsModules.moduleEventCalendar.init();
flsModules.moduleAOSAnimations.init();
flsModules.moduleFormValidation.init();
document.addEventListener("DOMContentLoaded", () => {
  flsModules.modulePreloader.init();
});
isWebp();
addLoadedClass();
menuInit();
