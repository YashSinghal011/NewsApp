/*! For license information please see main.fec9a5ed.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      730: (e, t, n) => {
        var r = n(43),
          a = n(853);
        function l(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var o = new Set(),
          i = {};
        function u(e, t) {
          s(e, t), s(e + "Capture", t);
        }
        function s(e, t) {
          for (i[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, a, l, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = l),
            (this.removeEmptyString = o);
        }
        var v = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            v[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            v[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            v[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            v[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            v[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            v[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = v.hasOwnProperty(t) ? v[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(g, y);
              v[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (v.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = Symbol.for("react.element"),
          S = Symbol.for("react.portal"),
          x = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          _ = Symbol.for("react.provider"),
          N = Symbol.for("react.context"),
          P = Symbol.for("react.forward_ref"),
          T = Symbol.for("react.suspense"),
          L = Symbol.for("react.suspense_list"),
          z = Symbol.for("react.memo"),
          R = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var O = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var M = Symbol.iterator;
        function D(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (M && e[M]) || e["@@iterator"])
            ? e
            : null;
        }
        var j,
          F = Object.assign;
        function I(e) {
          if (void 0 === j)
            try {
              throw Error();
            } catch (We) {
              var t = We.stack.trim().match(/\n( *(at )?)/);
              j = (t && t[1]) || "";
            }
          return "\n" + j + e;
        }
        var U = !1;
        function B(e, t) {
          if (!e || U) return "";
          U = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (Qe) {
                  var r = Qe;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (Qe) {
                  r = Qe;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (Qe) {
                r = Qe;
              }
              e();
            }
          } catch (Qe) {
            if (Qe && r && "string" === typeof Qe.stack) {
              for (
                var a = Qe.stack.split("\n"),
                  l = r.stack.split("\n"),
                  o = a.length - 1,
                  i = l.length - 1;
                1 <= o && 0 <= i && a[o] !== l[i];

              )
                i--;
              for (; 1 <= o && 0 <= i; o--, i--)
                if (a[o] !== l[i]) {
                  if (1 !== o || 1 !== i)
                    do {
                      if ((o--, 0 > --i || a[o] !== l[i])) {
                        var u = "\n" + a[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    } while (1 <= o && 0 <= i);
                  break;
                }
            }
          } finally {
            (U = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? I(e) : "";
        }
        function A(e) {
          switch (e.tag) {
            case 5:
              return I(e.type);
            case 16:
              return I("Lazy");
            case 13:
              return I("Suspense");
            case 19:
              return I("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = B(e.type, !1));
            case 11:
              return (e = B(e.type.render, !1));
            case 1:
              return (e = B(e.type, !0));
            default:
              return "";
          }
        }
        function $(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case x:
              return "Fragment";
            case S:
              return "Portal";
            case C:
              return "Profiler";
            case E:
              return "StrictMode";
            case T:
              return "Suspense";
            case L:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case N:
                return (e.displayName || "Context") + ".Consumer";
              case _:
                return (e._context.displayName || "Context") + ".Provider";
              case P:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case z:
                return null !== (t = e.displayName || null)
                  ? t
                  : $(e.type) || "Memo";
              case R:
                (t = e._payload), (e = e._init);
                try {
                  return $(e(t));
                } catch (We) {}
            }
          return null;
        }
        function H(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return $(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function V(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function W(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  l = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), l.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function K(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = W(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Y(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function q(e, t) {
          var n = t.checked;
          return F({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function X(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = V(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function G(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function J(e, t) {
          G(e, t);
          var n = V(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, V(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && Y(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + V(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(l(91));
          return F({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(l(92));
              if (te(n)) {
                if (1 < n.length) throw Error(l(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: V(n) };
        }
        function le(e, t) {
          var n = V(t.value),
            r = V(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function oe(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function ie(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ue(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? ie(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var se,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (se = se || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = se.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ve(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ge = F(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ge[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(l(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(l(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(l(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(l(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
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
        var we = null;
        function ke(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Se = null,
          xe = null,
          Ee = null;
        function Ce(e) {
          if ((e = ka(e))) {
            if ("function" !== typeof Se) throw Error(l(280));
            var t = e.stateNode;
            t && ((t = xa(t)), Se(e.stateNode, e.type, t));
          }
        }
        function _e(e) {
          xe ? (Ee ? Ee.push(e) : (Ee = [e])) : (xe = e);
        }
        function Ne() {
          if (xe) {
            var e = xe,
              t = Ee;
            if (((Ee = xe = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function Pe(e, t) {
          return e(t);
        }
        function Te() {}
        var Le = !1;
        function ze(e, t, n) {
          if (Le) return e(t, n);
          Le = !0;
          try {
            return Pe(e, t, n);
          } finally {
            (Le = !1), (null !== xe || null !== Ee) && (Te(), Ne());
          }
        }
        function Re(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = xa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
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
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(l(231, t, typeof n));
          return n;
        }
        var Oe = !1;
        if (c)
          try {
            var Me = {};
            Object.defineProperty(Me, "passive", {
              get: function () {
                Oe = !0;
              },
            }),
              window.addEventListener("test", Me, Me),
              window.removeEventListener("test", Me, Me);
          } catch (ce) {
            Oe = !1;
          }
        function De(e, t, n, r, a, l, o, i, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (c) {
            this.onError(c);
          }
        }
        var je = !1,
          Fe = null,
          Ie = !1,
          Ue = null,
          Be = {
            onError: function (e) {
              (je = !0), (Fe = e);
            },
          };
        function Ae(e, t, n, r, a, l, o, i, u) {
          (je = !1), (Fe = null), De.apply(Be, arguments);
        }
        function $e(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function He(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ve(e) {
          if ($e(e) !== e) throw Error(l(188));
        }
        function Ke(e) {
          return (
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = $e(e))) throw Error(l(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var o = a.alternate;
                if (null === o) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === o.child) {
                  for (o = a.child; o; ) {
                    if (o === n) return Ve(a), e;
                    if (o === r) return Ve(a), t;
                    o = o.sibling;
                  }
                  throw Error(l(188));
                }
                if (n.return !== r.return) (n = a), (r = o);
                else {
                  for (var i = !1, u = a.child; u; ) {
                    if (u === n) {
                      (i = !0), (n = a), (r = o);
                      break;
                    }
                    if (u === r) {
                      (i = !0), (r = a), (n = o);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!i) {
                    for (u = o.child; u; ) {
                      if (u === n) {
                        (i = !0), (n = o), (r = a);
                        break;
                      }
                      if (u === r) {
                        (i = !0), (r = o), (n = a);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!i) throw Error(l(189));
                  }
                }
                if (n.alternate !== r) throw Error(l(190));
              }
              if (3 !== n.tag) throw Error(l(188));
              return n.stateNode.current === n ? e : t;
            })(e)),
            null !== e ? Ye(e) : null
          );
        }
        function Ye(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ye(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = a.unstable_scheduleCallback,
          Xe = a.unstable_cancelCallback,
          Ge = a.unstable_shouldYield,
          Je = a.unstable_requestPaint,
          Ze = a.unstable_now,
          et = a.unstable_getCurrentPriorityLevel,
          tt = a.unstable_ImmediatePriority,
          nt = a.unstable_UserBlockingPriority,
          rt = a.unstable_NormalPriority,
          at = a.unstable_LowPriority,
          lt = a.unstable_IdlePriority,
          ot = null,
          it = null;
        var ut = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((st(e) / ct) | 0)) | 0;
              },
          st = Math.log,
          ct = Math.LN2;
        var ft = 64,
          dt = 4194304;
        function pt(e) {
          switch (e & -e) {
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
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ht(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            l = e.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var i = o & ~a;
            0 !== i ? (r = pt(i)) : 0 !== (l &= o) && (r = pt(l));
          } else 0 !== (o = n & ~a) ? (r = pt(o)) : 0 !== l && (r = pt(l));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (l = t & -t) || (16 === a && 0 !== (4194240 & l)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - ut(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function mt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
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
            default:
              return -1;
          }
        }
        function vt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function gt() {
          var e = ft;
          return 0 === (4194240 & (ft <<= 1)) && (ft = 64), e;
        }
        function yt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function bt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ut(t))] = n);
        }
        function wt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ut(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var kt = 0;
        function St(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var xt,
          Et,
          Ct,
          _t,
          Nt,
          Pt = !1,
          Tt = [],
          Lt = null,
          zt = null,
          Rt = null,
          Ot = new Map(),
          Mt = new Map(),
          Dt = [],
          jt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Ft(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Lt = null;
              break;
            case "dragenter":
            case "dragleave":
              zt = null;
              break;
            case "mouseover":
            case "mouseout":
              Rt = null;
              break;
            case "pointerover":
            case "pointerout":
              Ot.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Mt.delete(t.pointerId);
          }
        }
        function It(e, t, n, r, a, l) {
          return null === e || e.nativeEvent !== l
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: l,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ka(t)) && Et(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Ut(e) {
          var t = wa(e.target);
          if (null !== t) {
            var n = $e(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = He(n)))
                  return (
                    (e.blockedOn = t),
                    void Nt(e.priority, function () {
                      Ct(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Bt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ka(n)) && Et(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function At(e, t, n) {
          Bt(e) && n.delete(t);
        }
        function $t() {
          (Pt = !1),
            null !== Lt && Bt(Lt) && (Lt = null),
            null !== zt && Bt(zt) && (zt = null),
            null !== Rt && Bt(Rt) && (Rt = null),
            Ot.forEach(At),
            Mt.forEach(At);
        }
        function Ht(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Pt ||
              ((Pt = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, $t)));
        }
        function Vt(e) {
          function t(t) {
            return Ht(t, e);
          }
          if (0 < Tt.length) {
            Ht(Tt[0], e);
            for (var n = 1; n < Tt.length; n++) {
              var r = Tt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Lt && Ht(Lt, e),
              null !== zt && Ht(zt, e),
              null !== Rt && Ht(Rt, e),
              Ot.forEach(t),
              Mt.forEach(t),
              n = 0;
            n < Dt.length;
            n++
          )
            (r = Dt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Dt.length && null === (n = Dt[0]).blockedOn; )
            Ut(n), null === n.blockedOn && Dt.shift();
        }
        var Wt = w.ReactCurrentBatchConfig,
          Qt = !0;
        function Kt(e, t, n, r) {
          var a = kt,
            l = Wt.transition;
          Wt.transition = null;
          try {
            (kt = 1), qt(e, t, n, r);
          } finally {
            (kt = a), (Wt.transition = l);
          }
        }
        function Yt(e, t, n, r) {
          var a = kt,
            l = Wt.transition;
          Wt.transition = null;
          try {
            (kt = 4), qt(e, t, n, r);
          } finally {
            (kt = a), (Wt.transition = l);
          }
        }
        function qt(e, t, n, r) {
          if (Qt) {
            var a = Gt(e, t, n, r);
            if (null === a) Qr(e, t, r, Xt, n), Ft(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Lt = It(Lt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (zt = It(zt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Rt = It(Rt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var l = a.pointerId;
                    return Ot.set(l, It(Ot.get(l) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (l = a.pointerId),
                      Mt.set(l, It(Mt.get(l) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Ft(e, r), 4 & t && -1 < jt.indexOf(e))) {
              for (; null !== a; ) {
                var l = ka(a);
                if (
                  (null !== l && xt(l),
                  null === (l = Gt(e, t, n, r)) && Qr(e, t, r, Xt, n),
                  l === a)
                )
                  break;
                a = l;
              }
              null !== a && r.stopPropagation();
            } else Qr(e, t, r, null, n);
          }
        }
        var Xt = null;
        function Gt(e, t, n, r) {
          if (((Xt = null), null !== (e = wa((e = ke(r))))))
            if (null === (t = $e(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = He(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Xt = e), null;
        }
        function Jt(e) {
          switch (e) {
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
              return 1;
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
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (et()) {
                case tt:
                  return 1;
                case nt:
                  return 4;
                case rt:
                case at:
                  return 16;
                case lt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Zt = null,
          en = null,
          tn = null;
        function nn() {
          if (tn) return tn;
          var e,
            t,
            n = en,
            r = n.length,
            a = "value" in Zt ? Zt.value : Zt.textContent,
            l = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === a[l - t]; t++);
          return (tn = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function rn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function an() {
          return !0;
        }
        function ln() {
          return !1;
        }
        function on(e) {
          function t(t, n, r, a, l) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = l),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? an
                : ln),
              (this.isPropagationStopped = ln),
              this
            );
          }
          return (
            F(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = an));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = an));
              },
              persist: function () {},
              isPersistent: an,
            }),
            t
          );
        }
        var un,
          sn,
          cn,
          fn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          dn = on(fn),
          pn = F({}, fn, { view: 0, detail: 0 }),
          hn = on(pn),
          mn = F({}, pn, {
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
            getModifierState: Nn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== cn &&
                    (cn && "mousemove" === e.type
                      ? ((un = e.screenX - cn.screenX),
                        (sn = e.screenY - cn.screenY))
                      : (sn = un = 0),
                    (cn = e)),
                  un);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : sn;
            },
          }),
          vn = on(mn),
          gn = on(F({}, mn, { dataTransfer: 0 })),
          yn = on(F({}, pn, { relatedTarget: 0 })),
          bn = on(
            F({}, fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          wn = F({}, fn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          kn = on(wn),
          Sn = on(F({}, fn, { data: 0 })),
          xn = {
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
          En = {
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
          Cn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function _n(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Cn[e]) && !!t[e];
        }
        function Nn() {
          return _n;
        }
        var Pn = F({}, pn, {
            key: function (e) {
              if (e.key) {
                var t = xn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = rn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? En[e.keyCode] || "Unidentified"
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
            getModifierState: Nn,
            charCode: function (e) {
              return "keypress" === e.type ? rn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? rn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Tn = on(Pn),
          Ln = on(
            F({}, mn, {
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
            })
          ),
          zn = on(
            F({}, pn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Nn,
            })
          ),
          Rn = on(
            F({}, fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          On = F({}, mn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Mn = on(On),
          Dn = [9, 13, 27, 32],
          jn = c && "CompositionEvent" in window,
          Fn = null;
        c && "documentMode" in document && (Fn = document.documentMode);
        var In = c && "TextEvent" in window && !Fn,
          Un = c && (!jn || (Fn && 8 < Fn && 11 >= Fn)),
          Bn = String.fromCharCode(32),
          An = !1;
        function $n(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Dn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Hn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Vn = !1;
        var Wn = {
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
        function Qn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Wn[e.type] : "textarea" === t;
        }
        function Kn(e, t, n, r) {
          _e(r),
            0 < (t = Yr(t, "onChange")).length &&
              ((n = new dn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Yn = null,
          qn = null;
        function Xn(e) {
          Br(e, 0);
        }
        function Gn(e) {
          if (K(Sa(e))) return e;
        }
        function Jn(e, t) {
          if ("change" === e) return t;
        }
        var Zn = !1;
        if (c) {
          var er;
          if (c) {
            var tr = "oninput" in document;
            if (!tr) {
              var nr = document.createElement("div");
              nr.setAttribute("oninput", "return;"),
                (tr = "function" === typeof nr.oninput);
            }
            er = tr;
          } else er = !1;
          Zn = er && (!document.documentMode || 9 < document.documentMode);
        }
        function rr() {
          Yn && (Yn.detachEvent("onpropertychange", ar), (qn = Yn = null));
        }
        function ar(e) {
          if ("value" === e.propertyName && Gn(qn)) {
            var t = [];
            Kn(t, qn, e, ke(e)), ze(Xn, t);
          }
        }
        function lr(e, t, n) {
          "focusin" === e
            ? (rr(), (qn = n), (Yn = t).attachEvent("onpropertychange", ar))
            : "focusout" === e && rr();
        }
        function or(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Gn(qn);
        }
        function ir(e, t) {
          if ("click" === e) return Gn(t);
        }
        function ur(e, t) {
          if ("input" === e || "change" === e) return Gn(t);
        }
        var sr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function cr(e, t) {
          if (sr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !sr(e[a], t[a])) return !1;
          }
          return !0;
        }
        function fr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function dr(e, t) {
          var n,
            r = fr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = fr(r);
          }
        }
        function pr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? pr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function hr() {
          for (var e = window, t = Y(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = Y((e = t.contentWindow).document);
          }
          return t;
        }
        function mr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function vr(e) {
          var t = hr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            pr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && mr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  l = Math.min(r.start, a);
                (r = void 0 === r.end ? l : Math.min(r.end, a)),
                  !e.extend && l > r && ((a = r), (r = l), (l = a)),
                  (a = dr(n, l));
                var o = dr(n, r);
                a &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  l > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var gr = c && "documentMode" in document && 11 >= document.documentMode,
          yr = null,
          br = null,
          wr = null,
          kr = !1;
        function Sr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          kr ||
            null == yr ||
            yr !== Y(r) ||
            ("selectionStart" in (r = yr) && mr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (wr && cr(wr, r)) ||
              ((wr = r),
              0 < (r = Yr(br, "onSelect")).length &&
                ((t = new dn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = yr))));
        }
        function xr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var Er = {
            animationend: xr("Animation", "AnimationEnd"),
            animationiteration: xr("Animation", "AnimationIteration"),
            animationstart: xr("Animation", "AnimationStart"),
            transitionend: xr("Transition", "TransitionEnd"),
          },
          Cr = {},
          _r = {};
        function Nr(e) {
          if (Cr[e]) return Cr[e];
          if (!Er[e]) return e;
          var t,
            n = Er[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in _r) return (Cr[e] = n[t]);
          return e;
        }
        c &&
          ((_r = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete Er.animationend.animation,
            delete Er.animationiteration.animation,
            delete Er.animationstart.animation),
          "TransitionEvent" in window || delete Er.transitionend.transition);
        var Pr = Nr("animationend"),
          Tr = Nr("animationiteration"),
          Lr = Nr("animationstart"),
          zr = Nr("transitionend"),
          Rr = new Map(),
          Or =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Mr(e, t) {
          Rr.set(e, t), u(t, [e]);
        }
        for (var Dr = 0; Dr < Or.length; Dr++) {
          var jr = Or[Dr];
          Mr(jr.toLowerCase(), "on" + (jr[0].toUpperCase() + jr.slice(1)));
        }
        Mr(Pr, "onAnimationEnd"),
          Mr(Tr, "onAnimationIteration"),
          Mr(Lr, "onAnimationStart"),
          Mr("dblclick", "onDoubleClick"),
          Mr("focusin", "onFocus"),
          Mr("focusout", "onBlur"),
          Mr(zr, "onTransitionEnd"),
          s("onMouseEnter", ["mouseout", "mouseover"]),
          s("onMouseLeave", ["mouseout", "mouseover"]),
          s("onPointerEnter", ["pointerout", "pointerover"]),
          s("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Fr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Ir = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Fr)
          );
        function Ur(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, o, i, u, s) {
              if ((Ae.apply(this, arguments), je)) {
                if (!je) throw Error(l(198));
                var c = Fe;
                (je = !1), (Fe = null), Ie || ((Ie = !0), (Ue = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Br(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var l = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var i = r[o],
                    u = i.instance,
                    s = i.currentTarget;
                  if (((i = i.listener), u !== l && a.isPropagationStopped()))
                    break e;
                  Ur(a, i, s), (l = u);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((u = (i = r[o]).instance),
                    (s = i.currentTarget),
                    (i = i.listener),
                    u !== l && a.isPropagationStopped())
                  )
                    break e;
                  Ur(a, i, s), (l = u);
                }
            }
          }
          if (Ie) throw ((e = Ue), (Ie = !1), (Ue = null), e);
        }
        function Ar(e, t) {
          var n = t[ga];
          void 0 === n && (n = t[ga] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Wr(t, e, 2, !1), n.add(r));
        }
        function $r(e, t, n) {
          var r = 0;
          t && (r |= 4), Wr(n, e, r, t);
        }
        var Hr = "_reactListening" + Math.random().toString(36).slice(2);
        function Vr(e) {
          if (!e[Hr]) {
            (e[Hr] = !0),
              o.forEach(function (t) {
                "selectionchange" !== t &&
                  (Ir.has(t) || $r(t, !1, e), $r(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Hr] || ((t[Hr] = !0), $r("selectionchange", !1, t));
          }
        }
        function Wr(e, t, n, r) {
          switch (Jt(t)) {
            case 1:
              var a = Kt;
              break;
            case 4:
              a = Yt;
              break;
            default:
              a = qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Oe ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Qr(e, t, n, r, a) {
          var l = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var i = r.stateNode.containerInfo;
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var u = o.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = o.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== i; ) {
                  if (null === (o = wa(i))) return;
                  if (5 === (u = o.tag) || 6 === u) {
                    r = l = o;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          ze(function () {
            var r = l,
              a = ke(n),
              o = [];
            e: {
              var i = Rr.get(e);
              if (void 0 !== i) {
                var u = dn,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === rn(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = Tn;
                    break;
                  case "focusin":
                    (s = "focus"), (u = yn);
                    break;
                  case "focusout":
                    (s = "blur"), (u = yn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = yn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = vn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = gn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = zn;
                    break;
                  case Pr:
                  case Tr:
                  case Lr:
                    u = bn;
                    break;
                  case zr:
                    u = Rn;
                    break;
                  case "scroll":
                    u = hn;
                    break;
                  case "wheel":
                    u = Mn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = kn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = Ln;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== i ? i + "Capture" : null) : i;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== d &&
                        null != (m = Re(h, d)) &&
                        c.push(Kr(h, m, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((i = new u(i, s, null, n, a)),
                  o.push({ event: i, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(i = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!wa(s) && !s[va])) &&
                  (u || i) &&
                  ((i =
                    a.window === a
                      ? a
                      : (i = a.ownerDocument)
                      ? i.defaultView || i.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? wa(s)
                          : null) &&
                        (s !== (f = $e(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = vn),
                  (m = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Ln),
                    (m = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == u ? i : Sa(u)),
                  (p = null == s ? i : Sa(s)),
                  ((i = new c(m, h + "leave", u, n, a)).target = f),
                  (i.relatedTarget = p),
                  (m = null),
                  wa(a) === r &&
                    (((c = new c(d, h + "enter", s, n, a)).target = p),
                    (c.relatedTarget = f),
                    (m = c)),
                  (f = m),
                  u && s)
                )
                  e: {
                    for (d = s, h = 0, p = c = u; p; p = qr(p)) h++;
                    for (p = 0, m = d; m; m = qr(m)) p++;
                    for (; 0 < h - p; ) (c = qr(c)), h--;
                    for (; 0 < p - h; ) (d = qr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = qr(c)), (d = qr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && Xr(o, i, u, c, !1),
                  null !== s && null !== f && Xr(o, f, s, c, !0);
              }
              if (
                "select" ===
                  (u =
                    (i = r ? Sa(r) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ("input" === u && "file" === i.type)
              )
                var v = Jn;
              else if (Qn(i))
                if (Zn) v = ur;
                else {
                  v = or;
                  var g = lr;
                }
              else
                (u = i.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === i.type || "radio" === i.type) &&
                  (v = ir);
              switch (
                (v && (v = v(e, r))
                  ? Kn(o, v, n, a)
                  : (g && g(e, i, r),
                    "focusout" === e &&
                      (g = i._wrapperState) &&
                      g.controlled &&
                      "number" === i.type &&
                      ee(i, "number", i.value)),
                (g = r ? Sa(r) : window),
                e)
              ) {
                case "focusin":
                  (Qn(g) || "true" === g.contentEditable) &&
                    ((yr = g), (br = r), (wr = null));
                  break;
                case "focusout":
                  wr = br = yr = null;
                  break;
                case "mousedown":
                  kr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (kr = !1), Sr(o, n, a);
                  break;
                case "selectionchange":
                  if (gr) break;
                case "keydown":
                case "keyup":
                  Sr(o, n, a);
              }
              var y;
              if (jn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Vn
                  ? $n(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Un &&
                  "ko" !== n.locale &&
                  (Vn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Vn && (y = nn())
                    : ((en = "value" in (Zt = a) ? Zt.value : Zt.textContent),
                      (Vn = !0))),
                0 < (g = Yr(r, b)).length &&
                  ((b = new Sn(b, e, null, n, a)),
                  o.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Hn(n)) && (b.data = y))),
                (y = In
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Hn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((An = !0), Bn);
                        case "textInput":
                          return (e = t.data) === Bn && An ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Vn)
                        return "compositionend" === e || (!jn && $n(e, t))
                          ? ((e = nn()), (tn = en = Zt = null), (Vn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Un && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Yr(r, "onBeforeInput")).length &&
                  ((a = new Sn("onBeforeInput", "beforeinput", null, n, a)),
                  o.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Br(o, t);
          });
        }
        function Kr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Yr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              l = a.stateNode;
            5 === a.tag &&
              null !== l &&
              ((a = l),
              null != (l = Re(e, n)) && r.unshift(Kr(e, l, a)),
              null != (l = Re(e, t)) && r.push(Kr(e, l, a))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Xr(e, t, n, r, a) {
          for (var l = t._reactName, o = []; null !== n && n !== r; ) {
            var i = n,
              u = i.alternate,
              s = i.stateNode;
            if (null !== u && u === r) break;
            5 === i.tag &&
              null !== s &&
              ((i = s),
              a
                ? null != (u = Re(n, l)) && o.unshift(Kr(n, u, i))
                : a || (null != (u = Re(n, l)) && o.push(Kr(n, u, i)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var Gr = /\r\n?/g,
          Jr = /\u0000|\uFFFD/g;
        function Zr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Gr, "\n")
            .replace(Jr, "");
        }
        function ea(e, t, n) {
          if (((t = Zr(t)), Zr(e) !== t && n)) throw Error(l(425));
        }
        function ta() {}
        var na = null,
          ra = null;
        function aa(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var la = "function" === typeof setTimeout ? setTimeout : void 0,
          oa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ia = "function" === typeof Promise ? Promise : void 0,
          ua =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ia
              ? function (e) {
                  return ia.resolve(null).then(e).catch(sa);
                }
              : la;
        function sa(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ca(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Vt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Vt(t);
        }
        function fa(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function da(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var pa = Math.random().toString(36).slice(2),
          ha = "__reactFiber$" + pa,
          ma = "__reactProps$" + pa,
          va = "__reactContainer$" + pa,
          ga = "__reactEvents$" + pa,
          ya = "__reactListeners$" + pa,
          ba = "__reactHandles$" + pa;
        function wa(e) {
          var t = e[ha];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[va] || n[ha])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = da(e); null !== e; ) {
                  if ((n = e[ha])) return n;
                  e = da(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ka(e) {
          return !(e = e[ha] || e[va]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function Sa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(l(33));
        }
        function xa(e) {
          return e[ma] || null;
        }
        var Ea = [],
          Ca = -1;
        function _a(e) {
          return { current: e };
        }
        function Na(e) {
          0 > Ca || ((e.current = Ea[Ca]), (Ea[Ca] = null), Ca--);
        }
        function Pa(e, t) {
          Ca++, (Ea[Ca] = e.current), (e.current = t);
        }
        var Ta = {},
          La = _a(Ta),
          za = _a(!1),
          Ra = Ta;
        function Oa(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ta;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            l = {};
          for (a in n) l[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            l
          );
        }
        function Ma(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Da() {
          Na(za), Na(La);
        }
        function ja(e, t, n) {
          if (La.current !== Ta) throw Error(l(168));
          Pa(La, t), Pa(za, n);
        }
        function Fa(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(l(108, H(e) || "Unknown", a));
          return F({}, n, r);
        }
        function Ia(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ta),
            (Ra = La.current),
            Pa(La, e),
            Pa(za, za.current),
            !0
          );
        }
        function Ua(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(l(169));
          n
            ? ((e = Fa(e, t, Ra)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Na(za),
              Na(La),
              Pa(La, e))
            : Na(za),
            Pa(za, n);
        }
        var Ba = null,
          Aa = !1,
          $a = !1;
        function Ha(e) {
          null === Ba ? (Ba = [e]) : Ba.push(e);
        }
        function Va() {
          if (!$a && null !== Ba) {
            $a = !0;
            var e = 0,
              t = kt;
            try {
              var n = Ba;
              for (kt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Ba = null), (Aa = !1);
            } catch (a) {
              throw (null !== Ba && (Ba = Ba.slice(e + 1)), qe(tt, Va), a);
            } finally {
              (kt = t), ($a = !1);
            }
          }
          return null;
        }
        var Wa = [],
          Qa = 0,
          Ka = null,
          Ya = 0,
          qa = [],
          Xa = 0,
          Ga = null,
          Ja = 1,
          Za = "";
        function el(e, t) {
          (Wa[Qa++] = Ya), (Wa[Qa++] = Ka), (Ka = e), (Ya = t);
        }
        function tl(e, t, n) {
          (qa[Xa++] = Ja), (qa[Xa++] = Za), (qa[Xa++] = Ga), (Ga = e);
          var r = Ja;
          e = Za;
          var a = 32 - ut(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var l = 32 - ut(t) + a;
          if (30 < l) {
            var o = a - (a % 5);
            (l = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              (Ja = (1 << (32 - ut(t) + a)) | (n << a) | r),
              (Za = l + e);
          } else (Ja = (1 << l) | (n << a) | r), (Za = e);
        }
        function nl(e) {
          null !== e.return && (el(e, 1), tl(e, 1, 0));
        }
        function rl(e) {
          for (; e === Ka; )
            (Ka = Wa[--Qa]), (Wa[Qa] = null), (Ya = Wa[--Qa]), (Wa[Qa] = null);
          for (; e === Ga; )
            (Ga = qa[--Xa]),
              (qa[Xa] = null),
              (Za = qa[--Xa]),
              (qa[Xa] = null),
              (Ja = qa[--Xa]),
              (qa[Xa] = null);
        }
        var al = null,
          ll = null,
          ol = !1,
          il = null;
        function ul(e, t) {
          var n = Os(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function sl(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (al = e), (ll = fa(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (al = e), (ll = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ga ? { id: Ja, overflow: Za } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Os(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (al = e),
                (ll = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function cl(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function fl(e) {
          if (ol) {
            var t = ll;
            if (t) {
              var n = t;
              if (!sl(e, t)) {
                if (cl(e)) throw Error(l(418));
                t = fa(n.nextSibling);
                var r = al;
                t && sl(e, t)
                  ? ul(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ol = !1), (al = e));
              }
            } else {
              if (cl(e)) throw Error(l(418));
              (e.flags = (-4097 & e.flags) | 2), (ol = !1), (al = e);
            }
          }
        }
        function dl(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          al = e;
        }
        function pl(e) {
          if (e !== al) return !1;
          if (!ol) return dl(e), (ol = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !aa(e.type, e.memoizedProps)),
            t && (t = ll))
          ) {
            if (cl(e)) throw (hl(), Error(l(418)));
            for (; t; ) ul(e, t), (t = fa(t.nextSibling));
          }
          if ((dl(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(l(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ll = fa(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ll = null;
            }
          } else ll = al ? fa(e.stateNode.nextSibling) : null;
          return !0;
        }
        function hl() {
          for (var e = ll; e; ) e = fa(e.nextSibling);
        }
        function ml() {
          (ll = al = null), (ol = !1);
        }
        function vl(e) {
          null === il ? (il = [e]) : il.push(e);
        }
        var gl = w.ReactCurrentBatchConfig;
        function yl(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(l(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(l(147, e));
              var a = r,
                o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(l(284));
            if (!n._owner) throw Error(l(290, e));
          }
          return e;
        }
        function bl(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              l(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function wl(e) {
          return (0, e._init)(e._payload);
        }
        function kl(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Ds(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function i(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Us(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            var l = n.type;
            return l === x
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === l ||
                  ("object" === typeof l &&
                    null !== l &&
                    l.$$typeof === R &&
                    wl(l) === t.type))
              ? (((r = a(t, n.props)).ref = yl(e, t, n)), (r.return = e), r)
              : (((r = js(n.type, n.key, n.props, null, e.mode, r)).ref = yl(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Bs(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, l) {
            return null === t || 7 !== t.tag
              ? (((t = Fs(n, e.mode, r, l)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Us("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return (
                    ((n = js(t.type, t.key, t.props, null, e.mode, n)).ref = yl(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case S:
                  return ((t = Bs(t, e.mode, n)).return = e), t;
                case R:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || D(t))
                return ((t = Fs(t, e.mode, n, null)).return = e), t;
              bl(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return n.key === a ? s(e, t, n, r) : null;
                case S:
                  return n.key === a ? c(e, t, n, r) : null;
                case R:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || D(n)) return null !== a ? null : f(e, t, n, r, null);
              bl(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return u(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case S:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case R:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || D(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              bl(t, r);
            }
            return null;
          }
          function m(a, l, i, u) {
            for (
              var s = null, c = null, f = l, m = (l = 0), v = null;
              null !== f && m < i.length;
              m++
            ) {
              f.index > m ? ((v = f), (f = null)) : (v = f.sibling);
              var g = p(a, f, i[m], u);
              if (null === g) {
                null === f && (f = v);
                break;
              }
              e && f && null === g.alternate && t(a, f),
                (l = o(g, l, m)),
                null === c ? (s = g) : (c.sibling = g),
                (c = g),
                (f = v);
            }
            if (m === i.length) return n(a, f), ol && el(a, m), s;
            if (null === f) {
              for (; m < i.length; m++)
                null !== (f = d(a, i[m], u)) &&
                  ((l = o(f, l, m)),
                  null === c ? (s = f) : (c.sibling = f),
                  (c = f));
              return ol && el(a, m), s;
            }
            for (f = r(a, f); m < i.length; m++)
              null !== (v = h(f, a, m, i[m], u)) &&
                (e &&
                  null !== v.alternate &&
                  f.delete(null === v.key ? m : v.key),
                (l = o(v, l, m)),
                null === c ? (s = v) : (c.sibling = v),
                (c = v));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              ol && el(a, m),
              s
            );
          }
          function v(a, i, u, s) {
            var c = D(u);
            if ("function" !== typeof c) throw Error(l(150));
            if (null == (u = c.call(u))) throw Error(l(151));
            for (
              var f = (c = null), m = i, v = (i = 0), g = null, y = u.next();
              null !== m && !y.done;
              v++, y = u.next()
            ) {
              m.index > v ? ((g = m), (m = null)) : (g = m.sibling);
              var b = p(a, m, y.value, s);
              if (null === b) {
                null === m && (m = g);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (i = o(b, i, v)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (m = g);
            }
            if (y.done) return n(a, m), ol && el(a, v), c;
            if (null === m) {
              for (; !y.done; v++, y = u.next())
                null !== (y = d(a, y.value, s)) &&
                  ((i = o(y, i, v)),
                  null === f ? (c = y) : (f.sibling = y),
                  (f = y));
              return ol && el(a, v), c;
            }
            for (m = r(a, m); !y.done; v++, y = u.next())
              null !== (y = h(m, a, v, y.value, s)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? v : y.key),
                (i = o(y, i, v)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              ol && el(a, v),
              c
            );
          }
          return function e(r, l, o, u) {
            if (
              ("object" === typeof o &&
                null !== o &&
                o.type === x &&
                null === o.key &&
                (o = o.props.children),
              "object" === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case k:
                  e: {
                    for (var s = o.key, c = l; null !== c; ) {
                      if (c.key === s) {
                        if ((s = o.type) === x) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((l = a(c, o.props.children)).return = r),
                              (r = l);
                            break e;
                          }
                        } else if (
                          c.elementType === s ||
                          ("object" === typeof s &&
                            null !== s &&
                            s.$$typeof === R &&
                            wl(s) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((l = a(c, o.props)).ref = yl(r, c, o)),
                            (l.return = r),
                            (r = l);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    o.type === x
                      ? (((l = Fs(o.props.children, r.mode, u, o.key)).return =
                          r),
                        (r = l))
                      : (((u = js(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          u
                        )).ref = yl(r, l, o)),
                        (u.return = r),
                        (r = u));
                  }
                  return i(r);
                case S:
                  e: {
                    for (c = o.key; null !== l; ) {
                      if (l.key === c) {
                        if (
                          4 === l.tag &&
                          l.stateNode.containerInfo === o.containerInfo &&
                          l.stateNode.implementation === o.implementation
                        ) {
                          n(r, l.sibling),
                            ((l = a(l, o.children || [])).return = r),
                            (r = l);
                          break e;
                        }
                        n(r, l);
                        break;
                      }
                      t(r, l), (l = l.sibling);
                    }
                    ((l = Bs(o, r.mode, u)).return = r), (r = l);
                  }
                  return i(r);
                case R:
                  return e(r, l, (c = o._init)(o._payload), u);
              }
              if (te(o)) return m(r, l, o, u);
              if (D(o)) return v(r, l, o, u);
              bl(r, o);
            }
            return ("string" === typeof o && "" !== o) || "number" === typeof o
              ? ((o = "" + o),
                null !== l && 6 === l.tag
                  ? (n(r, l.sibling), ((l = a(l, o)).return = r), (r = l))
                  : (n(r, l), ((l = Us(o, r.mode, u)).return = r), (r = l)),
                i(r))
              : n(r, l);
          };
        }
        var Sl = kl(!0),
          xl = kl(!1),
          El = _a(null),
          Cl = null,
          _l = null,
          Nl = null;
        function Pl() {
          Nl = _l = Cl = null;
        }
        function Tl(e) {
          var t = El.current;
          Na(El), (e._currentValue = t);
        }
        function Ll(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function zl(e, t) {
          (Cl = e),
            (Nl = _l = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (ki = !0), (e.firstContext = null));
        }
        function Rl(e) {
          var t = e._currentValue;
          if (Nl !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === _l)
            ) {
              if (null === Cl) throw Error(l(308));
              (_l = e), (Cl.dependencies = { lanes: 0, firstContext: e });
            } else _l = _l.next = e;
          return t;
        }
        var Ol = null;
        function Ml(e) {
          null === Ol ? (Ol = [e]) : Ol.push(e);
        }
        function Dl(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Ml(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            jl(e, r)
          );
        }
        function jl(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Fl = !1;
        function Il(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Ul(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Bl(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Al(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Lu))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              jl(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Ml(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            jl(e, n)
          );
        }
        function $l(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), wt(e, n);
          }
        }
        function Hl(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              l = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === l ? (a = l = o) : (l = l.next = o), (n = n.next);
              } while (null !== n);
              null === l ? (a = l = t) : (l = l.next = t);
            } else a = l = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: l,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Vl(e, t, n, r) {
          var a = e.updateQueue;
          Fl = !1;
          var l = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            i = a.shared.pending;
          if (null !== i) {
            a.shared.pending = null;
            var u = i,
              s = u.next;
            (u.next = null), null === o ? (l = s) : (o.next = s), (o = u);
            var c = e.alternate;
            null !== c &&
              (i = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === i ? (c.firstBaseUpdate = s) : (i.next = s),
              (c.lastBaseUpdate = u));
          }
          if (null !== l) {
            var f = a.baseState;
            for (o = 0, c = s = u = null, i = l; ; ) {
              var d = i.lane,
                p = i.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = i;
                  switch (((d = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = F({}, f, d);
                      break e;
                    case 2:
                      Fl = !0;
                  }
                }
                null !== i.callback &&
                  0 !== i.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [i]) : d.push(i));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
                  (o |= d);
              if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break;
                (i = (d = i).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (u = f),
              (a.baseState = u),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (o |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === l && (a.shared.lanes = 0);
            (Iu |= o), (e.lanes = o), (e.memoizedState = f);
          }
        }
        function Wl(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(l(191, a));
                a.call(r);
              }
            }
        }
        var Ql = {},
          Kl = _a(Ql),
          Yl = _a(Ql),
          ql = _a(Ql);
        function Xl(e) {
          if (e === Ql) throw Error(l(174));
          return e;
        }
        function Gl(e, t) {
          switch ((Pa(ql, t), Pa(Yl, e), Pa(Kl, Ql), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
              break;
            default:
              t = ue(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Na(Kl), Pa(Kl, t);
        }
        function Jl() {
          Na(Kl), Na(Yl), Na(ql);
        }
        function Zl(e) {
          Xl(ql.current);
          var t = Xl(Kl.current),
            n = ue(t, e.type);
          t !== n && (Pa(Yl, e), Pa(Kl, n));
        }
        function eo(e) {
          Yl.current === e && (Na(Kl), Na(Yl));
        }
        var to = _a(0);
        function no(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ro = [];
        function ao() {
          for (var e = 0; e < ro.length; e++)
            ro[e]._workInProgressVersionPrimary = null;
          ro.length = 0;
        }
        var lo = w.ReactCurrentDispatcher,
          oo = w.ReactCurrentBatchConfig,
          io = 0,
          uo = null,
          so = null,
          co = null,
          fo = !1,
          po = !1,
          ho = 0,
          mo = 0;
        function vo() {
          throw Error(l(321));
        }
        function go(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!sr(e[n], t[n])) return !1;
          return !0;
        }
        function yo(e, t, n, r, a, o) {
          if (
            ((io = o),
            (uo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (lo.current = null === e || null === e.memoizedState ? ti : ni),
            (e = n(r, a)),
            po)
          ) {
            o = 0;
            do {
              if (((po = !1), (ho = 0), 25 <= o)) throw Error(l(301));
              (o += 1),
                (co = so = null),
                (t.updateQueue = null),
                (lo.current = ri),
                (e = n(r, a));
            } while (po);
          }
          if (
            ((lo.current = ei),
            (t = null !== so && null !== so.next),
            (io = 0),
            (co = so = uo = null),
            (fo = !1),
            t)
          )
            throw Error(l(300));
          return e;
        }
        function bo() {
          var e = 0 !== ho;
          return (ho = 0), e;
        }
        function wo() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === co ? (uo.memoizedState = co = e) : (co = co.next = e), co
          );
        }
        function ko() {
          if (null === so) {
            var e = uo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = so.next;
          var t = null === co ? uo.memoizedState : co.next;
          if (null !== t) (co = t), (so = e);
          else {
            if (null === e) throw Error(l(310));
            (e = {
              memoizedState: (so = e).memoizedState,
              baseState: so.baseState,
              baseQueue: so.baseQueue,
              queue: so.queue,
              next: null,
            }),
              null === co ? (uo.memoizedState = co = e) : (co = co.next = e);
          }
          return co;
        }
        function So(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function xo(e) {
          var t = ko(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = so,
            a = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== a) {
              var i = a.next;
              (a.next = o.next), (o.next = i);
            }
            (r.baseQueue = a = o), (n.pending = null);
          }
          if (null !== a) {
            (o = a.next), (r = r.baseState);
            var u = (i = null),
              s = null,
              c = o;
            do {
              var f = c.lane;
              if ((io & f) === f)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === s ? ((u = s = d), (i = r)) : (s = s.next = d),
                  (uo.lanes |= f),
                  (Iu |= f);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === s ? (i = r) : (s.next = u),
              sr(r, t.memoizedState) || (ki = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = s),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (o = a.lane), (uo.lanes |= o), (Iu |= o), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Eo(e) {
          var t = ko(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var i = (a = a.next);
            do {
              (o = e(o, i.action)), (i = i.next);
            } while (i !== a);
            sr(o, t.memoizedState) || (ki = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function Co() {}
        function _o(e, t) {
          var n = uo,
            r = ko(),
            a = t(),
            o = !sr(r.memoizedState, a);
          if (
            (o && ((r.memoizedState = a), (ki = !0)),
            (r = r.queue),
            Io(To.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== co && 1 & co.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Oo(9, Po.bind(null, n, r, a, t), void 0, null),
              null === zu)
            )
              throw Error(l(349));
            0 !== (30 & io) || No(n, t, a);
          }
          return a;
        }
        function No(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = uo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (uo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Po(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Lo(t) && zo(e);
        }
        function To(e, t, n) {
          return n(function () {
            Lo(t) && zo(e);
          });
        }
        function Lo(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !sr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function zo(e) {
          var t = jl(e, 1);
          null !== t && as(t, e, 1, -1);
        }
        function Ro(e) {
          var t = wo();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: So,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = Xo.bind(null, uo, e)),
            [t.memoizedState, e]
          );
        }
        function Oo(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = uo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (uo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Mo() {
          return ko().memoizedState;
        }
        function Do(e, t, n, r) {
          var a = wo();
          (uo.flags |= e),
            (a.memoizedState = Oo(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function jo(e, t, n, r) {
          var a = ko();
          r = void 0 === r ? null : r;
          var l = void 0;
          if (null !== so) {
            var o = so.memoizedState;
            if (((l = o.destroy), null !== r && go(r, o.deps)))
              return void (a.memoizedState = Oo(t, n, l, r));
          }
          (uo.flags |= e), (a.memoizedState = Oo(1 | t, n, l, r));
        }
        function Fo(e, t) {
          return Do(8390656, 8, e, t);
        }
        function Io(e, t) {
          return jo(2048, 8, e, t);
        }
        function Uo(e, t) {
          return jo(4, 2, e, t);
        }
        function Bo(e, t) {
          return jo(4, 4, e, t);
        }
        function Ao(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function $o(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            jo(4, 4, Ao.bind(null, t, e), n)
          );
        }
        function Ho() {}
        function Vo(e, t) {
          var n = ko();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && go(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Wo(e, t) {
          var n = ko();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && go(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Qo(e, t, n) {
          return 0 === (21 & io)
            ? (e.baseState && ((e.baseState = !1), (ki = !0)),
              (e.memoizedState = n))
            : (sr(n, t) ||
                ((n = gt()), (uo.lanes |= n), (Iu |= n), (e.baseState = !0)),
              t);
        }
        function Ko(e, t) {
          var n = kt;
          (kt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = oo.transition;
          oo.transition = {};
          try {
            e(!1), t();
          } finally {
            (kt = n), (oo.transition = r);
          }
        }
        function Yo() {
          return ko().memoizedState;
        }
        function qo(e, t, n) {
          var r = rs(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            Go(e))
          )
            Jo(t, n);
          else if (null !== (n = Dl(e, t, n, r))) {
            as(n, e, r, ns()), Zo(n, t, r);
          }
        }
        function Xo(e, t, n) {
          var r = rs(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (Go(e)) Jo(t, a);
          else {
            var l = e.alternate;
            if (
              0 === e.lanes &&
              (null === l || 0 === l.lanes) &&
              null !== (l = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  i = l(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = i), sr(i, o))) {
                  var u = t.interleaved;
                  return (
                    null === u
                      ? ((a.next = a), Ml(t))
                      : ((a.next = u.next), (u.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (Qe) {}
            null !== (n = Dl(e, t, a, r)) &&
              (as(n, e, r, (a = ns())), Zo(n, t, r));
          }
        }
        function Go(e) {
          var t = e.alternate;
          return e === uo || (null !== t && t === uo);
        }
        function Jo(e, t) {
          po = fo = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function Zo(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), wt(e, n);
          }
        }
        var ei = {
            readContext: Rl,
            useCallback: vo,
            useContext: vo,
            useEffect: vo,
            useImperativeHandle: vo,
            useInsertionEffect: vo,
            useLayoutEffect: vo,
            useMemo: vo,
            useReducer: vo,
            useRef: vo,
            useState: vo,
            useDebugValue: vo,
            useDeferredValue: vo,
            useTransition: vo,
            useMutableSource: vo,
            useSyncExternalStore: vo,
            useId: vo,
            unstable_isNewReconciler: !1,
          },
          ti = {
            readContext: Rl,
            useCallback: function (e, t) {
              return (wo().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Rl,
            useEffect: Fo,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Do(4194308, 4, Ao.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Do(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Do(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = wo();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = wo();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = qo.bind(null, uo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (wo().memoizedState = e);
            },
            useState: Ro,
            useDebugValue: Ho,
            useDeferredValue: function (e) {
              return (wo().memoizedState = e);
            },
            useTransition: function () {
              var e = Ro(!1),
                t = e[0];
              return (
                (e = Ko.bind(null, e[1])), (wo().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = uo,
                a = wo();
              if (ol) {
                if (void 0 === n) throw Error(l(407));
                n = n();
              } else {
                if (((n = t()), null === zu)) throw Error(l(349));
                0 !== (30 & io) || No(r, t, n);
              }
              a.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (a.queue = o),
                Fo(To.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                Oo(9, Po.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = wo(),
                t = zu.identifierPrefix;
              if (ol) {
                var n = Za;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ja & ~(1 << (32 - ut(Ja) - 1))).toString(32) + n)),
                  0 < (n = ho++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = mo++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ni = {
            readContext: Rl,
            useCallback: Vo,
            useContext: Rl,
            useEffect: Io,
            useImperativeHandle: $o,
            useInsertionEffect: Uo,
            useLayoutEffect: Bo,
            useMemo: Wo,
            useReducer: xo,
            useRef: Mo,
            useState: function () {
              return xo(So);
            },
            useDebugValue: Ho,
            useDeferredValue: function (e) {
              return Qo(ko(), so.memoizedState, e);
            },
            useTransition: function () {
              return [xo(So)[0], ko().memoizedState];
            },
            useMutableSource: Co,
            useSyncExternalStore: _o,
            useId: Yo,
            unstable_isNewReconciler: !1,
          },
          ri = {
            readContext: Rl,
            useCallback: Vo,
            useContext: Rl,
            useEffect: Io,
            useImperativeHandle: $o,
            useInsertionEffect: Uo,
            useLayoutEffect: Bo,
            useMemo: Wo,
            useReducer: Eo,
            useRef: Mo,
            useState: function () {
              return Eo(So);
            },
            useDebugValue: Ho,
            useDeferredValue: function (e) {
              var t = ko();
              return null === so
                ? (t.memoizedState = e)
                : Qo(t, so.memoizedState, e);
            },
            useTransition: function () {
              return [Eo(So)[0], ko().memoizedState];
            },
            useMutableSource: Co,
            useSyncExternalStore: _o,
            useId: Yo,
            unstable_isNewReconciler: !1,
          };
        function ai(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = F({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        function li(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : F({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var oi = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && $e(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = ns(),
              a = rs(e),
              l = Bl(r, a);
            (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Al(e, l, a)) && (as(t, e, a, r), $l(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = ns(),
              a = rs(e),
              l = Bl(r, a);
            (l.tag = 1),
              (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Al(e, l, a)) && (as(t, e, a, r), $l(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ns(),
              r = rs(e),
              a = Bl(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Al(e, a, r)) && (as(t, e, r, n), $l(t, e, r));
          },
        };
        function ii(e, t, n, r, a, l, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, l, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !cr(n, r) ||
                !cr(a, l);
        }
        function ui(e, t, n) {
          var r = !1,
            a = Ta,
            l = t.contextType;
          return (
            "object" === typeof l && null !== l
              ? (l = Rl(l))
              : ((a = Ma(t) ? Ra : La.current),
                (l = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Oa(e, a)
                  : Ta)),
            (t = new t(n, l)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = oi),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            t
          );
        }
        function si(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && oi.enqueueReplaceState(t, t.state, null);
        }
        function ci(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = {}), Il(e);
          var l = t.contextType;
          "object" === typeof l && null !== l
            ? (a.context = Rl(l))
            : ((l = Ma(t) ? Ra : La.current), (a.context = Oa(e, l))),
            (a.state = e.memoizedState),
            "function" === typeof (l = t.getDerivedStateFromProps) &&
              (li(e, t, l, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && oi.enqueueReplaceState(a, a.state, null),
              Vl(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function fi(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += A(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (l) {
            a = "\nError generating stack: " + l.message + "\n" + l.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function di(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function pi(e, t) {
          try {
            console.error(t.value);
          } catch (We) {
            setTimeout(function () {
              throw We;
            });
          }
        }
        var hi = "function" === typeof WeakMap ? WeakMap : Map;
        function mi(e, t, n) {
          ((n = Bl(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Qu || ((Qu = !0), (Ku = r)), pi(0, t);
            }),
            n
          );
        }
        function vi(e, t, n) {
          (n = Bl(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                pi(0, t);
              });
          }
          var l = e.stateNode;
          return (
            null !== l &&
              "function" === typeof l.componentDidCatch &&
              (n.callback = function () {
                pi(0, t),
                  "function" !== typeof r &&
                    (null === Yu ? (Yu = new Set([this])) : Yu.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function gi(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new hi();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Ns.bind(null, e, t, n)), t.then(e, e));
        }
        function yi(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function bi(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Bl(-1, 1)).tag = 2), Al(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var wi = w.ReactCurrentOwner,
          ki = !1;
        function Si(e, t, n, r) {
          t.child = null === e ? xl(t, null, n, r) : Sl(t, e.child, n, r);
        }
        function xi(e, t, n, r, a) {
          n = n.render;
          var l = t.ref;
          return (
            zl(t, a),
            (r = yo(e, t, n, r, l, a)),
            (n = bo()),
            null === e || ki
              ? (ol && n && nl(t), (t.flags |= 1), Si(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Qi(e, t, a))
          );
        }
        function Ei(e, t, n, r, a) {
          if (null === e) {
            var l = n.type;
            return "function" !== typeof l ||
              Ms(l) ||
              void 0 !== l.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = js(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = l), Ci(e, t, l, r, a));
          }
          if (((l = e.child), 0 === (e.lanes & a))) {
            var o = l.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : cr)(o, r) &&
              e.ref === t.ref
            )
              return Qi(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Ds(l, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Ci(e, t, n, r, a) {
          if (null !== e) {
            var l = e.memoizedProps;
            if (cr(l, r) && e.ref === t.ref) {
              if (((ki = !1), (t.pendingProps = r = l), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Qi(e, t, a);
              0 !== (131072 & e.flags) && (ki = !0);
            }
          }
          return Pi(e, t, n, r, a);
        }
        function _i(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            l = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Pa(Du, Mu),
                (Mu |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== l ? l.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Pa(Du, Mu),
                  (Mu |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== l ? l.baseLanes : n),
                Pa(Du, Mu),
                (Mu |= r);
            }
          else
            null !== l
              ? ((r = l.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Pa(Du, Mu),
              (Mu |= r);
          return Si(e, t, a, n), t.child;
        }
        function Ni(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Pi(e, t, n, r, a) {
          var l = Ma(n) ? Ra : La.current;
          return (
            (l = Oa(t, l)),
            zl(t, a),
            (n = yo(e, t, n, r, l, a)),
            (r = bo()),
            null === e || ki
              ? (ol && r && nl(t), (t.flags |= 1), Si(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Qi(e, t, a))
          );
        }
        function Ti(e, t, n, r, a) {
          if (Ma(n)) {
            var l = !0;
            Ia(t);
          } else l = !1;
          if ((zl(t, a), null === t.stateNode))
            Wi(e, t), ui(t, n, r), ci(t, n, r, a), (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              i = t.memoizedProps;
            o.props = i;
            var u = o.context,
              s = n.contextType;
            "object" === typeof s && null !== s
              ? (s = Rl(s))
              : (s = Oa(t, (s = Ma(n) ? Ra : La.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((i !== r || u !== s) && si(t, o, r, s)),
              (Fl = !1);
            var d = t.memoizedState;
            (o.state = d),
              Vl(t, r, o, a),
              (u = t.memoizedState),
              i !== r || d !== u || za.current || Fl
                ? ("function" === typeof c &&
                    (li(t, n, c, r), (u = t.memoizedState)),
                  (i = Fl || ii(t, n, i, r, d, u, s))
                    ? (f ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (o.props = r),
                  (o.state = u),
                  (o.context = s),
                  (r = i))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (o = t.stateNode),
              Ul(e, t),
              (i = t.memoizedProps),
              (s = t.type === t.elementType ? i : ai(t.type, i)),
              (o.props = s),
              (f = t.pendingProps),
              (d = o.context),
              "object" === typeof (u = n.contextType) && null !== u
                ? (u = Rl(u))
                : (u = Oa(t, (u = Ma(n) ? Ra : La.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((i !== f || d !== u) && si(t, o, r, u)),
              (Fl = !1),
              (d = t.memoizedState),
              (o.state = d),
              Vl(t, r, o, a);
            var h = t.memoizedState;
            i !== f || d !== h || za.current || Fl
              ? ("function" === typeof p &&
                  (li(t, n, p, r), (h = t.memoizedState)),
                (s = Fl || ii(t, n, s, r, d, h, u) || !1)
                  ? (c ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, h, u),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, h, u)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (o.props = r),
                (o.state = h),
                (o.context = u),
                (r = s))
              : ("function" !== typeof o.componentDidUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Li(e, t, n, r, l, a);
        }
        function Li(e, t, n, r, a, l) {
          Ni(e, t);
          var o = 0 !== (128 & t.flags);
          if (!r && !o) return a && Ua(t, n, !1), Qi(e, t, l);
          (r = t.stateNode), (wi.current = t);
          var i =
            o && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = Sl(t, e.child, null, l)),
                (t.child = Sl(t, null, i, l)))
              : Si(e, t, i, l),
            (t.memoizedState = r.state),
            a && Ua(t, n, !0),
            t.child
          );
        }
        function zi(e) {
          var t = e.stateNode;
          t.pendingContext
            ? ja(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && ja(0, t.context, !1),
            Gl(e, t.containerInfo);
        }
        function Ri(e, t, n, r, a) {
          return ml(), vl(a), (t.flags |= 256), Si(e, t, n, r), t.child;
        }
        var Oi,
          Mi,
          Di,
          ji,
          Fi = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Ii(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ui(e, t, n) {
          var r,
            a = t.pendingProps,
            o = to.current,
            i = !1,
            u = 0 !== (128 & t.flags);
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((i = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Pa(to, 1 & o),
            null === e)
          )
            return (
              fl(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((u = a.children),
                  (e = a.fallback),
                  i
                    ? ((a = t.mode),
                      (i = t.child),
                      (u = { mode: "hidden", children: u }),
                      0 === (1 & a) && null !== i
                        ? ((i.childLanes = 0), (i.pendingProps = u))
                        : (i = Is(u, a, 0, null)),
                      (e = Fs(e, a, n, null)),
                      (i.return = t),
                      (e.return = t),
                      (i.sibling = e),
                      (t.child = i),
                      (t.child.memoizedState = Ii(n)),
                      (t.memoizedState = Fi),
                      e)
                    : Bi(t, u))
            );
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, t, n, r, a, o, i) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Ai(e, t, i, (r = di(Error(l(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((o = r.fallback),
                    (a = t.mode),
                    (r = Is(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((o = Fs(o, a, i, null)).flags |= 2),
                    (r.return = t),
                    (o.return = t),
                    (r.sibling = o),
                    (t.child = r),
                    0 !== (1 & t.mode) && Sl(t, e.child, null, i),
                    (t.child.memoizedState = Ii(i)),
                    (t.memoizedState = Fi),
                    o);
              if (0 === (1 & t.mode)) return Ai(e, t, i, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var u = r.dgst;
                return (
                  (r = u), Ai(e, t, i, (r = di((o = Error(l(419))), r, void 0)))
                );
              }
              if (((u = 0 !== (i & e.childLanes)), ki || u)) {
                if (null !== (r = zu)) {
                  switch (i & -i) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
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
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | i)) ? 0 : a) &&
                    a !== o.retryLane &&
                    ((o.retryLane = a), jl(e, a), as(r, e, a, -1));
                }
                return gs(), Ai(e, t, i, (r = di(Error(l(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Ts.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (ll = fa(a.nextSibling)),
                  (al = t),
                  (ol = !0),
                  (il = null),
                  null !== e &&
                    ((qa[Xa++] = Ja),
                    (qa[Xa++] = Za),
                    (qa[Xa++] = Ga),
                    (Ja = e.id),
                    (Za = e.overflow),
                    (Ga = t)),
                  (t = Bi(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, u, a, r, o, n);
          if (i) {
            (i = a.fallback), (u = t.mode), (r = (o = e.child).sibling);
            var s = { mode: "hidden", children: a.children };
            return (
              0 === (1 & u) && t.child !== o
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = s),
                  (t.deletions = null))
                : ((a = Ds(o, s)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (i = Ds(r, i))
                : ((i = Fs(i, u, n, null)).flags |= 2),
              (i.return = t),
              (a.return = t),
              (a.sibling = i),
              (t.child = a),
              (a = i),
              (i = t.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Ii(n)
                  : {
                      baseLanes: u.baseLanes | n,
                      cachePool: null,
                      transitions: u.transitions,
                    }),
              (i.memoizedState = u),
              (i.childLanes = e.childLanes & ~n),
              (t.memoizedState = Fi),
              a
            );
          }
          return (
            (e = (i = e.child).sibling),
            (a = Ds(i, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Bi(e, t) {
          return (
            ((t = Is(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Ai(e, t, n, r) {
          return (
            null !== r && vl(r),
            Sl(t, e.child, null, n),
            ((e = Bi(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function $i(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Ll(e.return, t, n);
        }
        function Hi(e, t, n, r, a) {
          var l = e.memoizedState;
          null === l
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((l.isBackwards = t),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = r),
              (l.tail = n),
              (l.tailMode = a));
        }
        function Vi(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            l = r.tail;
          if ((Si(e, t, r.children, n), 0 !== (2 & (r = to.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && $i(e, n, t);
                else if (19 === e.tag) $i(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Pa(to, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === no(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Hi(t, !1, a, n, l);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === no(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Hi(t, !0, n, null, l);
                break;
              case "together":
                Hi(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Wi(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Qi(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Iu |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(l(153));
          if (null !== t.child) {
            for (
              n = Ds((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Ds(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Ki(e, t) {
          if (!ol)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Yi(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function qi(e, t, n) {
          var r = t.pendingProps;
          switch ((rl(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Yi(t), null;
            case 1:
            case 17:
              return Ma(t.type) && Da(), Yi(t), null;
            case 3:
              return (
                (r = t.stateNode),
                Jl(),
                Na(za),
                Na(La),
                ao(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (pl(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== il && (us(il), (il = null)))),
                Mi(e, t),
                Yi(t),
                null
              );
            case 5:
              eo(t);
              var a = Xl(ql.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Di(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return Yi(t), null;
                }
                if (((e = Xl(Kl.current)), pl(t))) {
                  (r = t.stateNode), (n = t.type);
                  var o = t.memoizedProps;
                  switch (
                    ((r[ha] = t), (r[ma] = o), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Ar("cancel", r), Ar("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ar("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Fr.length; a++) Ar(Fr[a], r);
                      break;
                    case "source":
                      Ar("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ar("error", r), Ar("load", r);
                      break;
                    case "details":
                      Ar("toggle", r);
                      break;
                    case "input":
                      X(r, o), Ar("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        Ar("invalid", r);
                      break;
                    case "textarea":
                      ae(r, o), Ar("invalid", r);
                  }
                  for (var u in (ye(n, o), (a = null), o))
                    if (o.hasOwnProperty(u)) {
                      var s = o[u];
                      "children" === u
                        ? "string" === typeof s
                          ? r.textContent !== s &&
                            (!0 !== o.suppressHydrationWarning &&
                              ea(r.textContent, s, e),
                            (a = ["children", s]))
                          : "number" === typeof s &&
                            r.textContent !== "" + s &&
                            (!0 !== o.suppressHydrationWarning &&
                              ea(r.textContent, s, e),
                            (a = ["children", "" + s]))
                        : i.hasOwnProperty(u) &&
                          null != s &&
                          "onScroll" === u &&
                          Ar("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      Q(r), Z(r, o, !0);
                      break;
                    case "textarea":
                      Q(r), oe(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof o.onClick && (r.onclick = ta);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (u = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = ie(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          "select" === n &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[ha] = t),
                    (e[ma] = r),
                    Oi(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((u = be(n, r)), n)) {
                      case "dialog":
                        Ar("cancel", e), Ar("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ar("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Fr.length; a++) Ar(Fr[a], e);
                        a = r;
                        break;
                      case "source":
                        Ar("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ar("error", e), Ar("load", e), (a = r);
                        break;
                      case "details":
                        Ar("toggle", e), (a = r);
                        break;
                      case "input":
                        X(e, r), (a = q(e, r)), Ar("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = F({}, r, { value: void 0 })),
                          Ar("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Ar("invalid", e);
                    }
                    for (o in (ye(n, a), (s = a)))
                      if (s.hasOwnProperty(o)) {
                        var c = s[o];
                        "style" === o
                          ? ve(e, c)
                          : "dangerouslySetInnerHTML" === o
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === o
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && de(e, c)
                            : "number" === typeof c && de(e, "" + c)
                          : "suppressContentEditableWarning" !== o &&
                            "suppressHydrationWarning" !== o &&
                            "autoFocus" !== o &&
                            (i.hasOwnProperty(o)
                              ? null != c && "onScroll" === o && Ar("scroll", e)
                              : null != c && b(e, o, c, u));
                      }
                    switch (n) {
                      case "input":
                        Q(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        Q(e), oe(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + V(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = ta);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Yi(t), null;
            case 6:
              if (e && null != t.stateNode) ji(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(l(166));
                if (((n = Xl(ql.current)), Xl(Kl.current), pl(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[ha] = t),
                    (o = r.nodeValue !== n) && null !== (e = al))
                  )
                    switch (e.tag) {
                      case 3:
                        ea(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          ea(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[ha] = t),
                    (t.stateNode = r);
              }
              return Yi(t), null;
            case 13:
              if (
                (Na(to),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ol &&
                  null !== ll &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  hl(), ml(), (t.flags |= 98560), (o = !1);
                else if (((o = pl(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(l(318));
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(l(317));
                    o[ha] = t;
                  } else
                    ml(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Yi(t), (o = !1);
                } else null !== il && (us(il), (il = null)), (o = !0);
                if (!o) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & to.current)
                        ? 0 === ju && (ju = 3)
                        : gs())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Yi(t),
                  null);
            case 4:
              return (
                Jl(),
                Mi(e, t),
                null === e && Vr(t.stateNode.containerInfo),
                Yi(t),
                null
              );
            case 10:
              return Tl(t.type._context), Yi(t), null;
            case 19:
              if ((Na(to), null === (o = t.memoizedState))) return Yi(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (u = o.rendering)))
                if (r) Ki(o, !1);
                else {
                  if (0 !== ju || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = no(e))) {
                        for (
                          t.flags |= 128,
                            Ki(o, !1),
                            null !== (r = u.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (u = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = u.childLanes),
                                (o.lanes = u.lanes),
                                (o.child = u.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = u.memoizedProps),
                                (o.memoizedState = u.memoizedState),
                                (o.updateQueue = u.updateQueue),
                                (o.type = u.type),
                                (e = u.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Pa(to, (1 & to.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Ze() > Vu &&
                    ((t.flags |= 128),
                    (r = !0),
                    Ki(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = no(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Ki(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !u.alternate &&
                        !ol)
                    )
                      return Yi(t), null;
                  } else
                    2 * Ze() - o.renderingStartTime > Vu &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Ki(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = o.last) ? (n.sibling = u) : (t.child = u),
                    (o.last = u));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Ze()),
                  (t.sibling = null),
                  (n = to.current),
                  Pa(to, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Yi(t), null);
            case 22:
            case 23:
              return (
                ps(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Mu) &&
                    (Yi(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Yi(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(l(156, t.tag));
        }
        function Xi(e, t) {
          switch ((rl(t), t.tag)) {
            case 1:
              return (
                Ma(t.type) && Da(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                Jl(),
                Na(za),
                Na(La),
                ao(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return eo(t), null;
            case 13:
              if (
                (Na(to),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(l(340));
                ml();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Na(to), null;
            case 4:
              return Jl(), null;
            case 10:
              return Tl(t.type._context), null;
            case 22:
            case 23:
              return ps(), null;
            default:
              return null;
          }
        }
        (Oi = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Mi = function () {}),
          (Di = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), Xl(Kl.current);
              var l,
                o = null;
              switch (n) {
                case "input":
                  (a = q(e, a)), (r = q(e, r)), (o = []);
                  break;
                case "select":
                  (a = F({}, a, { value: void 0 })),
                    (r = F({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (o = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = ta);
              }
              for (c in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var u = a[c];
                    for (l in u)
                      u.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (i.hasOwnProperty(c)
                        ? o || (o = [])
                        : (o = o || []).push(c, null));
              for (c in r) {
                var s = r[c];
                if (
                  ((u = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                )
                  if ("style" === c)
                    if (u) {
                      for (l in u)
                        !u.hasOwnProperty(l) ||
                          (s && s.hasOwnProperty(l)) ||
                          (n || (n = {}), (n[l] = ""));
                      for (l in s)
                        s.hasOwnProperty(l) &&
                          u[l] !== s[l] &&
                          (n || (n = {}), (n[l] = s[l]));
                    } else n || (o || (o = []), o.push(c, n)), (n = s);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((s = s ? s.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != s && u !== s && (o = o || []).push(c, s))
                      : "children" === c
                      ? ("string" !== typeof s && "number" !== typeof s) ||
                        (o = o || []).push(c, "" + s)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (i.hasOwnProperty(c)
                          ? (null != s && "onScroll" === c && Ar("scroll", e),
                            o || u === s || (o = []))
                          : (o = o || []).push(c, s));
              }
              n && (o = o || []).push("style", n);
              var c = o;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (ji = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Gi = !1,
          Ji = !1,
          Zi = "function" === typeof WeakSet ? WeakSet : Set,
          eu = null;
        function tu(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                _s(e, t, r);
              }
            else n.current = null;
        }
        function nu(e, t, n) {
          try {
            n();
          } catch (r) {
            _s(e, t, r);
          }
        }
        var ru = !1;
        function au(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var l = a.destroy;
                (a.destroy = void 0), void 0 !== l && nu(t, n, l);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function lu(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function ou(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function iu(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), iu(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[ha],
              delete t[ma],
              delete t[ga],
              delete t[ya],
              delete t[ba]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function uu(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function su(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || uu(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function cu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = ta));
          else if (4 !== r && null !== (e = e.child))
            for (cu(e, t, n), e = e.sibling; null !== e; )
              cu(e, t, n), (e = e.sibling);
        }
        function fu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (fu(e, t, n), e = e.sibling; null !== e; )
              fu(e, t, n), (e = e.sibling);
        }
        var du = null,
          pu = !1;
        function hu(e, t, n) {
          for (n = n.child; null !== n; ) mu(e, t, n), (n = n.sibling);
        }
        function mu(e, t, n) {
          if (it && "function" === typeof it.onCommitFiberUnmount)
            try {
              it.onCommitFiberUnmount(ot, n);
            } catch (i) {}
          switch (n.tag) {
            case 5:
              Ji || tu(n, t);
            case 6:
              var r = du,
                a = pu;
              (du = null),
                hu(e, t, n),
                (pu = a),
                null !== (du = r) &&
                  (pu
                    ? ((e = du),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : du.removeChild(n.stateNode));
              break;
            case 18:
              null !== du &&
                (pu
                  ? ((e = du),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? ca(e.parentNode, n)
                      : 1 === e.nodeType && ca(e, n),
                    Vt(e))
                  : ca(du, n.stateNode));
              break;
            case 4:
              (r = du),
                (a = pu),
                (du = n.stateNode.containerInfo),
                (pu = !0),
                hu(e, t, n),
                (du = r),
                (pu = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Ji &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var l = a,
                    o = l.destroy;
                  (l = l.tag),
                    void 0 !== o &&
                      (0 !== (2 & l) || 0 !== (4 & l)) &&
                      nu(n, t, o),
                    (a = a.next);
                } while (a !== r);
              }
              hu(e, t, n);
              break;
            case 1:
              if (
                !Ji &&
                (tu(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (i) {
                  _s(n, t, i);
                }
              hu(e, t, n);
              break;
            case 21:
              hu(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Ji = (r = Ji) || null !== n.memoizedState),
                  hu(e, t, n),
                  (Ji = r))
                : hu(e, t, n);
              break;
            default:
              hu(e, t, n);
          }
        }
        function vu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Zi()),
              t.forEach(function (t) {
                var r = Ls.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function gu(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var o = e,
                  i = t,
                  u = i;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (du = u.stateNode), (pu = !1);
                      break e;
                    case 3:
                    case 4:
                      (du = u.stateNode.containerInfo), (pu = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === du) throw Error(l(160));
                mu(o, i, a), (du = null), (pu = !1);
                var s = a.alternate;
                null !== s && (s.return = null), (a.return = null);
              } catch (Qe) {
                _s(a, t, Qe);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) yu(t, e), (t = t.sibling);
        }
        function yu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((gu(t, e), bu(e), 4 & r)) {
                try {
                  au(3, e, e.return), lu(3, e);
                } catch (v) {
                  _s(e, e.return, v);
                }
                try {
                  au(5, e, e.return);
                } catch (v) {
                  _s(e, e.return, v);
                }
              }
              break;
            case 1:
              gu(t, e), bu(e), 512 & r && null !== n && tu(n, n.return);
              break;
            case 5:
              if (
                (gu(t, e),
                bu(e),
                512 & r && null !== n && tu(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (v) {
                  _s(e, e.return, v);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var o = e.memoizedProps,
                  i = null !== n ? n.memoizedProps : o,
                  u = e.type,
                  s = e.updateQueue;
                if (((e.updateQueue = null), null !== s))
                  try {
                    "input" === u &&
                      "radio" === o.type &&
                      null != o.name &&
                      G(a, o),
                      be(u, i);
                    var c = be(u, o);
                    for (i = 0; i < s.length; i += 2) {
                      var f = s[i],
                        d = s[i + 1];
                      "style" === f
                        ? ve(a, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(a, d)
                        : "children" === f
                        ? de(a, d)
                        : b(a, f, d, c);
                    }
                    switch (u) {
                      case "input":
                        J(a, o);
                        break;
                      case "textarea":
                        le(a, o);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!o.multiple;
                        var h = o.value;
                        null != h
                          ? ne(a, !!o.multiple, h, !1)
                          : p !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(a, !!o.multiple, o.defaultValue, !0)
                              : ne(a, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    a[ma] = o;
                  } catch (v) {
                    _s(e, e.return, v);
                  }
              }
              break;
            case 6:
              if ((gu(t, e), bu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162));
                (a = e.stateNode), (o = e.memoizedProps);
                try {
                  a.nodeValue = o;
                } catch (v) {
                  _s(e, e.return, v);
                }
              }
              break;
            case 3:
              if (
                (gu(t, e),
                bu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Vt(t.containerInfo);
                } catch (v) {
                  _s(e, e.return, v);
                }
              break;
            case 4:
            default:
              gu(t, e), bu(e);
              break;
            case 13:
              gu(t, e),
                bu(e),
                8192 & (a = e.child).flags &&
                  ((o = null !== a.memoizedState),
                  (a.stateNode.isHidden = o),
                  !o ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Hu = Ze())),
                4 & r && vu(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Ji = (c = Ji) || f), gu(t, e), (Ji = c))
                  : gu(t, e),
                bu(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (eu = e, f = e.child; null !== f; ) {
                    for (d = eu = f; null !== eu; ) {
                      switch (((h = (p = eu).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          au(4, p, p.return);
                          break;
                        case 1:
                          tu(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (v) {
                              _s(r, n, v);
                            }
                          }
                          break;
                        case 5:
                          tu(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            xu(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (eu = h)) : xu(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (a = d.stateNode),
                          c
                            ? "function" === typeof (o = a.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
                            : ((u = d.stateNode),
                              (i =
                                void 0 !== (s = d.memoizedProps.style) &&
                                null !== s &&
                                s.hasOwnProperty("display")
                                  ? s.display
                                  : null),
                              (u.style.display = me("display", i)));
                      } catch (v) {
                        _s(e, e.return, v);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (v) {
                        _s(e, e.return, v);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              gu(t, e), bu(e), 4 & r && vu(e);
            case 21:
          }
        }
        function bu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (uu(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(l(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (de(a, ""), (r.flags &= -33)),
                    fu(e, su(e), a);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  cu(e, su(e), o);
                  break;
                default:
                  throw Error(l(161));
              }
            } catch (i) {
              _s(e, e.return, i);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function wu(e, t, n) {
          (eu = e), ku(e, t, n);
        }
        function ku(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== eu; ) {
            var a = eu,
              l = a.child;
            if (22 === a.tag && r) {
              var o = null !== a.memoizedState || Gi;
              if (!o) {
                var i = a.alternate,
                  u = (null !== i && null !== i.memoizedState) || Ji;
                i = Gi;
                var s = Ji;
                if (((Gi = o), (Ji = u) && !s))
                  for (eu = a; null !== eu; )
                    (u = (o = eu).child),
                      22 === o.tag && null !== o.memoizedState
                        ? Eu(a)
                        : null !== u
                        ? ((u.return = o), (eu = u))
                        : Eu(a);
                for (; null !== l; ) (eu = l), ku(l, t, n), (l = l.sibling);
                (eu = a), (Gi = i), (Ji = s);
              }
              Su(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== l
                ? ((l.return = a), (eu = l))
                : Su(e);
          }
        }
        function Su(e) {
          for (; null !== eu; ) {
            var t = eu;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ji || lu(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Ji)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : ai(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && Wl(t, o, r);
                      break;
                    case 3:
                      var i = t.updateQueue;
                      if (null !== i) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Wl(t, i, n);
                      }
                      break;
                    case 5:
                      var u = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = u;
                        var s = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            s.autoFocus && n.focus();
                            break;
                          case "img":
                            s.src && (n.src = s.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Vt(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(l(163));
                  }
                Ji || (512 & t.flags && ou(t));
              } catch (p) {
                _s(t, t.return, p);
              }
            }
            if (t === e) {
              eu = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (eu = n);
              break;
            }
            eu = t.return;
          }
        }
        function xu(e) {
          for (; null !== eu; ) {
            var t = eu;
            if (t === e) {
              eu = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (eu = n);
              break;
            }
            eu = t.return;
          }
        }
        function Eu(e) {
          for (; null !== eu; ) {
            var t = eu;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    lu(4, t);
                  } catch (u) {
                    _s(t, n, u);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (u) {
                      _s(t, a, u);
                    }
                  }
                  var l = t.return;
                  try {
                    ou(t);
                  } catch (u) {
                    _s(t, l, u);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    ou(t);
                  } catch (u) {
                    _s(t, o, u);
                  }
              }
            } catch (u) {
              _s(t, t.return, u);
            }
            if (t === e) {
              eu = null;
              break;
            }
            var i = t.sibling;
            if (null !== i) {
              (i.return = t.return), (eu = i);
              break;
            }
            eu = t.return;
          }
        }
        var Cu,
          _u = Math.ceil,
          Nu = w.ReactCurrentDispatcher,
          Pu = w.ReactCurrentOwner,
          Tu = w.ReactCurrentBatchConfig,
          Lu = 0,
          zu = null,
          Ru = null,
          Ou = 0,
          Mu = 0,
          Du = _a(0),
          ju = 0,
          Fu = null,
          Iu = 0,
          Uu = 0,
          Bu = 0,
          Au = null,
          $u = null,
          Hu = 0,
          Vu = 1 / 0,
          Wu = null,
          Qu = !1,
          Ku = null,
          Yu = null,
          qu = !1,
          Xu = null,
          Gu = 0,
          Ju = 0,
          Zu = null,
          es = -1,
          ts = 0;
        function ns() {
          return 0 !== (6 & Lu) ? Ze() : -1 !== es ? es : (es = Ze());
        }
        function rs(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Lu) && 0 !== Ou
            ? Ou & -Ou
            : null !== gl.transition
            ? (0 === ts && (ts = gt()), ts)
            : 0 !== (e = kt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Jt(e.type));
        }
        function as(e, t, n, r) {
          if (50 < Ju) throw ((Ju = 0), (Zu = null), Error(l(185)));
          bt(e, n, r),
            (0 !== (2 & Lu) && e === zu) ||
              (e === zu && (0 === (2 & Lu) && (Uu |= n), 4 === ju && ss(e, Ou)),
              ls(e, r),
              1 === n &&
                0 === Lu &&
                0 === (1 & t.mode) &&
                ((Vu = Ze() + 500), Aa && Va()));
        }
        function ls(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                l = e.pendingLanes;
              0 < l;

            ) {
              var o = 31 - ut(l),
                i = 1 << o,
                u = a[o];
              -1 === u
                ? (0 !== (i & n) && 0 === (i & r)) || (a[o] = mt(i, t))
                : u <= t && (e.expiredLanes |= i),
                (l &= ~i);
            }
          })(e, t);
          var r = ht(e, e === zu ? Ou : 0);
          if (0 === r)
            null !== n && Xe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Xe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Aa = !0), Ha(e);
                  })(cs.bind(null, e))
                : Ha(cs.bind(null, e)),
                ua(function () {
                  0 === (6 & Lu) && Va();
                }),
                (n = null);
            else {
              switch (St(r)) {
                case 1:
                  n = tt;
                  break;
                case 4:
                  n = nt;
                  break;
                case 16:
                default:
                  n = rt;
                  break;
                case 536870912:
                  n = lt;
              }
              n = zs(n, os.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function os(e, t) {
          if (((es = -1), (ts = 0), 0 !== (6 & Lu))) throw Error(l(327));
          var n = e.callbackNode;
          if (Es() && e.callbackNode !== n) return null;
          var r = ht(e, e === zu ? Ou : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = ys(e, r);
          else {
            t = r;
            var a = Lu;
            Lu |= 2;
            var o = vs();
            for (
              (zu === e && Ou === t) ||
              ((Wu = null), (Vu = Ze() + 500), hs(e, t));
              ;

            )
              try {
                ws();
                break;
              } catch (u) {
                ms(e, u);
              }
            Pl(),
              (Nu.current = o),
              (Lu = a),
              null !== Ru ? (t = 0) : ((zu = null), (Ou = 0), (t = ju));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = vt(e)) && ((r = a), (t = is(e, a))),
              1 === t)
            )
              throw ((n = Fu), hs(e, 0), ss(e, r), ls(e, Ze()), n);
            if (6 === t) ss(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              l = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!sr(l(), a)) return !1;
                            } catch (i) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = ys(e, r)) &&
                    0 !== (o = vt(e)) &&
                    ((r = o), (t = is(e, o))),
                  1 === t))
              )
                throw ((n = Fu), hs(e, 0), ss(e, r), ls(e, Ze()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(l(345));
                case 2:
                case 5:
                  xs(e, $u, Wu);
                  break;
                case 3:
                  if (
                    (ss(e, r),
                    (130023424 & r) === r && 10 < (t = Hu + 500 - Ze()))
                  ) {
                    if (0 !== ht(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      ns(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = la(xs.bind(null, e, $u, Wu), t);
                    break;
                  }
                  xs(e, $u, Wu);
                  break;
                case 4:
                  if ((ss(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var i = 31 - ut(r);
                    (o = 1 << i), (i = t[i]) > a && (a = i), (r &= ~o);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ze() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * _u(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = la(xs.bind(null, e, $u, Wu), r);
                    break;
                  }
                  xs(e, $u, Wu);
                  break;
                default:
                  throw Error(l(329));
              }
            }
          }
          return ls(e, Ze()), e.callbackNode === n ? os.bind(null, e) : null;
        }
        function is(e, t) {
          var n = Au;
          return (
            e.current.memoizedState.isDehydrated && (hs(e, t).flags |= 256),
            2 !== (e = ys(e, t)) && ((t = $u), ($u = n), null !== t && us(t)),
            e
          );
        }
        function us(e) {
          null === $u ? ($u = e) : $u.push.apply($u, e);
        }
        function ss(e, t) {
          for (
            t &= ~Bu,
              t &= ~Uu,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - ut(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function cs(e) {
          if (0 !== (6 & Lu)) throw Error(l(327));
          Es();
          var t = ht(e, 0);
          if (0 === (1 & t)) return ls(e, Ze()), null;
          var n = ys(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = vt(e);
            0 !== r && ((t = r), (n = is(e, r)));
          }
          if (1 === n) throw ((n = Fu), hs(e, 0), ss(e, t), ls(e, Ze()), n);
          if (6 === n) throw Error(l(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            xs(e, $u, Wu),
            ls(e, Ze()),
            null
          );
        }
        function fs(e, t) {
          var n = Lu;
          Lu |= 1;
          try {
            return e(t);
          } finally {
            0 === (Lu = n) && ((Vu = Ze() + 500), Aa && Va());
          }
        }
        function ds(e) {
          null !== Xu && 0 === Xu.tag && 0 === (6 & Lu) && Es();
          var t = Lu;
          Lu |= 1;
          var n = Tu.transition,
            r = kt;
          try {
            if (((Tu.transition = null), (kt = 1), e)) return e();
          } finally {
            (kt = r), (Tu.transition = n), 0 === (6 & (Lu = t)) && Va();
          }
        }
        function ps() {
          (Mu = Du.current), Na(Du);
        }
        function hs(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), oa(n)), null !== Ru))
            for (n = Ru.return; null !== n; ) {
              var r = n;
              switch ((rl(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Da();
                  break;
                case 3:
                  Jl(), Na(za), Na(La), ao();
                  break;
                case 5:
                  eo(r);
                  break;
                case 4:
                  Jl();
                  break;
                case 13:
                case 19:
                  Na(to);
                  break;
                case 10:
                  Tl(r.type._context);
                  break;
                case 22:
                case 23:
                  ps();
              }
              n = n.return;
            }
          if (
            ((zu = e),
            (Ru = e = Ds(e.current, null)),
            (Ou = Mu = t),
            (ju = 0),
            (Fu = null),
            (Bu = Uu = Iu = 0),
            ($u = Au = null),
            null !== Ol)
          ) {
            for (t = 0; t < Ol.length; t++)
              if (null !== (r = (n = Ol[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  l = n.pending;
                if (null !== l) {
                  var o = l.next;
                  (l.next = a), (r.next = o);
                }
                n.pending = r;
              }
            Ol = null;
          }
          return e;
        }
        function ms(e, t) {
          for (;;) {
            var n = Ru;
            try {
              if ((Pl(), (lo.current = ei), fo)) {
                for (var r = uo.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                fo = !1;
              }
              if (
                ((io = 0),
                (co = so = uo = null),
                (po = !1),
                (ho = 0),
                (Pu.current = null),
                null === n || null === n.return)
              ) {
                (ju = 1), (Fu = t), (Ru = null);
                break;
              }
              e: {
                var o = e,
                  i = n.return,
                  u = n,
                  s = t;
                if (
                  ((t = Ou),
                  (u.flags |= 32768),
                  null !== s &&
                    "object" === typeof s &&
                    "function" === typeof s.then)
                ) {
                  var c = s,
                    f = u,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = yi(i);
                  if (null !== h) {
                    (h.flags &= -257),
                      bi(h, i, u, 0, t),
                      1 & h.mode && gi(o, c, t),
                      (s = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var v = new Set();
                      v.add(s), (t.updateQueue = v);
                    } else m.add(s);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    gi(o, c, t), gs();
                    break e;
                  }
                  s = Error(l(426));
                } else if (ol && 1 & u.mode) {
                  var g = yi(i);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      bi(g, i, u, 0, t),
                      vl(fi(s, u));
                    break e;
                  }
                }
                (o = s = fi(s, u)),
                  4 !== ju && (ju = 2),
                  null === Au ? (Au = [o]) : Au.push(o),
                  (o = i);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (t &= -t),
                        (o.lanes |= t),
                        Hl(o, mi(0, s, t));
                      break e;
                    case 1:
                      u = s;
                      var y = o.type,
                        b = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Yu || !Yu.has(b))))
                      ) {
                        (o.flags |= 65536),
                          (t &= -t),
                          (o.lanes |= t),
                          Hl(o, vi(o, u, t));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              Ss(n);
            } catch (w) {
              (t = w), Ru === n && null !== n && (Ru = n = n.return);
              continue;
            }
            break;
          }
        }
        function vs() {
          var e = Nu.current;
          return (Nu.current = ei), null === e ? ei : e;
        }
        function gs() {
          (0 !== ju && 3 !== ju && 2 !== ju) || (ju = 4),
            null === zu ||
              (0 === (268435455 & Iu) && 0 === (268435455 & Uu)) ||
              ss(zu, Ou);
        }
        function ys(e, t) {
          var n = Lu;
          Lu |= 2;
          var r = vs();
          for ((zu === e && Ou === t) || ((Wu = null), hs(e, t)); ; )
            try {
              bs();
              break;
            } catch (a) {
              ms(e, a);
            }
          if ((Pl(), (Lu = n), (Nu.current = r), null !== Ru))
            throw Error(l(261));
          return (zu = null), (Ou = 0), ju;
        }
        function bs() {
          for (; null !== Ru; ) ks(Ru);
        }
        function ws() {
          for (; null !== Ru && !Ge(); ) ks(Ru);
        }
        function ks(e) {
          var t = Cu(e.alternate, e, Mu);
          (e.memoizedProps = e.pendingProps),
            null === t ? Ss(e) : (Ru = t),
            (Pu.current = null);
        }
        function Ss(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = qi(n, t, Mu))) return void (Ru = n);
            } else {
              if (null !== (n = Xi(n, t)))
                return (n.flags &= 32767), void (Ru = n);
              if (null === e) return (ju = 6), void (Ru = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ru = t);
            Ru = t = e;
          } while (null !== t);
          0 === ju && (ju = 5);
        }
        function xs(e, t, n) {
          var r = kt,
            a = Tu.transition;
          try {
            (Tu.transition = null),
              (kt = 1),
              (function (e, t, n, r) {
                do {
                  Es();
                } while (null !== Xu);
                if (0 !== (6 & Lu)) throw Error(l(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(l(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - ut(n),
                        l = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l);
                    }
                  })(e, o),
                  e === zu && ((Ru = zu = null), (Ou = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    qu ||
                    ((qu = !0),
                    zs(rt, function () {
                      return Es(), null;
                    })),
                  (o = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || o)
                ) {
                  (o = Tu.transition), (Tu.transition = null);
                  var i = kt;
                  kt = 1;
                  var u = Lu;
                  (Lu |= 4),
                    (Pu.current = null),
                    (function (e, t) {
                      if (((na = Qt), mr((e = hr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (k) {
                                n = null;
                                break e;
                              }
                              var i = 0,
                                u = -1,
                                s = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (u = i + a),
                                    d !== o ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (s = i + r),
                                    3 === d.nodeType &&
                                      (i += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === a && (u = i),
                                    p === o && ++f === r && (s = i),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === u || -1 === s
                                  ? null
                                  : { start: u, end: s };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ra = { focusedElem: e, selectionRange: n },
                          Qt = !1,
                          eu = t;
                        null !== eu;

                      )
                        if (
                          ((e = (t = eu).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (eu = e);
                        else
                          for (; null !== eu; ) {
                            t = eu;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var v = m.memoizedProps,
                                        g = m.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? v
                                            : ai(t.type, v),
                                          g
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(l(163));
                                }
                            } catch (k) {
                              _s(t, t.return, k);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (eu = e);
                              break;
                            }
                            eu = t.return;
                          }
                      (m = ru), (ru = !1);
                    })(e, n),
                    yu(n, e),
                    vr(ra),
                    (Qt = !!na),
                    (ra = na = null),
                    (e.current = n),
                    wu(n, e, a),
                    Je(),
                    (Lu = u),
                    (kt = i),
                    (Tu.transition = o);
                } else e.current = n;
                if (
                  (qu && ((qu = !1), (Xu = e), (Gu = a)),
                  (o = e.pendingLanes),
                  0 === o && (Yu = null),
                  (function (e) {
                    if (it && "function" === typeof it.onCommitFiberRoot)
                      try {
                        it.onCommitFiberRoot(
                          ot,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ls(e, Ze()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Qu) throw ((Qu = !1), (e = Ku), (Ku = null), e);
                0 !== (1 & Gu) && 0 !== e.tag && Es(),
                  (o = e.pendingLanes),
                  0 !== (1 & o)
                    ? e === Zu
                      ? Ju++
                      : ((Ju = 0), (Zu = e))
                    : (Ju = 0),
                  Va();
              })(e, t, n, r);
          } finally {
            (Tu.transition = a), (kt = r);
          }
          return null;
        }
        function Es() {
          if (null !== Xu) {
            var e = St(Gu),
              t = Tu.transition,
              n = kt;
            try {
              if (((Tu.transition = null), (kt = 16 > e ? 16 : e), null === Xu))
                var r = !1;
              else {
                if (((e = Xu), (Xu = null), (Gu = 0), 0 !== (6 & Lu)))
                  throw Error(l(331));
                var a = Lu;
                for (Lu |= 4, eu = e.current; null !== eu; ) {
                  var o = eu,
                    i = o.child;
                  if (0 !== (16 & eu.flags)) {
                    var u = o.deletions;
                    if (null !== u) {
                      for (var s = 0; s < u.length; s++) {
                        var c = u[s];
                        for (eu = c; null !== eu; ) {
                          var f = eu;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              au(8, f, o);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (eu = d);
                          else
                            for (; null !== eu; ) {
                              var p = (f = eu).sibling,
                                h = f.return;
                              if ((iu(f), f === c)) {
                                eu = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (eu = p);
                                break;
                              }
                              eu = h;
                            }
                        }
                      }
                      var m = o.alternate;
                      if (null !== m) {
                        var v = m.child;
                        if (null !== v) {
                          m.child = null;
                          do {
                            var g = v.sibling;
                            (v.sibling = null), (v = g);
                          } while (null !== v);
                        }
                      }
                      eu = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== i)
                    (i.return = o), (eu = i);
                  else
                    e: for (; null !== eu; ) {
                      if (0 !== (2048 & (o = eu).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            au(9, o, o.return);
                        }
                      var y = o.sibling;
                      if (null !== y) {
                        (y.return = o.return), (eu = y);
                        break e;
                      }
                      eu = o.return;
                    }
                }
                var b = e.current;
                for (eu = b; null !== eu; ) {
                  var w = (i = eu).child;
                  if (0 !== (2064 & i.subtreeFlags) && null !== w)
                    (w.return = i), (eu = w);
                  else
                    e: for (i = b; null !== eu; ) {
                      if (0 !== (2048 & (u = eu).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              lu(9, u);
                          }
                        } catch (S) {
                          _s(u, u.return, S);
                        }
                      if (u === i) {
                        eu = null;
                        break e;
                      }
                      var k = u.sibling;
                      if (null !== k) {
                        (k.return = u.return), (eu = k);
                        break e;
                      }
                      eu = u.return;
                    }
                }
                if (
                  ((Lu = a),
                  Va(),
                  it && "function" === typeof it.onPostCommitFiberRoot)
                )
                  try {
                    it.onPostCommitFiberRoot(ot, e);
                  } catch (S) {}
                r = !0;
              }
              return r;
            } finally {
              (kt = n), (Tu.transition = t);
            }
          }
          return !1;
        }
        function Cs(e, t, n) {
          (e = Al(e, (t = mi(0, (t = fi(n, t)), 1)), 1)),
            (t = ns()),
            null !== e && (bt(e, 1, t), ls(e, t));
        }
        function _s(e, t, n) {
          if (3 === e.tag) Cs(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Cs(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Yu || !Yu.has(r)))
                ) {
                  (t = Al(t, (e = vi(t, (e = fi(n, e)), 1)), 1)),
                    (e = ns()),
                    null !== t && (bt(t, 1, e), ls(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Ns(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = ns()),
            (e.pingedLanes |= e.suspendedLanes & n),
            zu === e &&
              (Ou & n) === n &&
              (4 === ju ||
              (3 === ju && (130023424 & Ou) === Ou && 500 > Ze() - Hu)
                ? hs(e, 0)
                : (Bu |= n)),
            ls(e, t);
        }
        function Ps(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = dt), 0 === (130023424 & (dt <<= 1)) && (dt = 4194304)));
          var n = ns();
          null !== (e = jl(e, t)) && (bt(e, t, n), ls(e, n));
        }
        function Ts(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Ps(e, n);
        }
        function Ls(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(l(314));
          }
          null !== r && r.delete(t), Ps(e, n);
        }
        function zs(e, t) {
          return qe(e, t);
        }
        function Rs(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Os(e, t, n, r) {
          return new Rs(e, t, n, r);
        }
        function Ms(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ds(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Os(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function js(e, t, n, r, a, o) {
          var i = 2;
          if (((r = e), "function" === typeof e)) Ms(e) && (i = 1);
          else if ("string" === typeof e) i = 5;
          else
            e: switch (e) {
              case x:
                return Fs(n.children, a, o, t);
              case E:
                (i = 8), (a |= 8);
                break;
              case C:
                return (
                  ((e = Os(12, n, t, 2 | a)).elementType = C), (e.lanes = o), e
                );
              case T:
                return (
                  ((e = Os(13, n, t, a)).elementType = T), (e.lanes = o), e
                );
              case L:
                return (
                  ((e = Os(19, n, t, a)).elementType = L), (e.lanes = o), e
                );
              case O:
                return Is(n, a, o, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case _:
                      i = 10;
                      break e;
                    case N:
                      i = 9;
                      break e;
                    case P:
                      i = 11;
                      break e;
                    case z:
                      i = 14;
                      break e;
                    case R:
                      (i = 16), (r = null);
                      break e;
                  }
                throw Error(l(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Os(i, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Fs(e, t, n, r) {
          return ((e = Os(7, e, r, t)).lanes = n), e;
        }
        function Is(e, t, n, r) {
          return (
            ((e = Os(22, e, r, t)).elementType = O),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Us(e, t, n) {
          return ((e = Os(6, e, null, t)).lanes = n), e;
        }
        function Bs(e, t, n) {
          return (
            ((t = Os(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function As(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = yt(0)),
            (this.expirationTimes = yt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = yt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function $s(e, t, n, r, a, l, o, i, u) {
          return (
            (e = new As(e, t, n, i, u)),
            1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
            (l = Os(3, null, null, t)),
            (e.current = l),
            (l.stateNode = e),
            (l.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Il(l),
            e
          );
        }
        function Hs(e) {
          if (!e) return Ta;
          e: {
            if ($e((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(l(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ma(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(l(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ma(n)) return Fa(e, n, t);
          }
          return t;
        }
        function Vs(e, t, n, r, a, l, o, i, u) {
          return (
            ((e = $s(n, r, !0, e, 0, l, 0, i, u)).context = Hs(null)),
            (n = e.current),
            ((l = Bl((r = ns()), (a = rs(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Al(n, l, a),
            (e.current.lanes = a),
            bt(e, a, r),
            ls(e, r),
            e
          );
        }
        function Ws(e, t, n, r) {
          var a = t.current,
            l = ns(),
            o = rs(a);
          return (
            (n = Hs(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Bl(l, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Al(a, t, o)) && (as(e, a, o, l), $l(e, a, o)),
            o
          );
        }
        function Qs(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Ks(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Ys(e, t) {
          Ks(e, t), (e = e.alternate) && Ks(e, t);
        }
        Cu = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || za.current) ki = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (ki = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        zi(t), ml();
                        break;
                      case 5:
                        Zl(t);
                        break;
                      case 1:
                        Ma(t.type) && Ia(t);
                        break;
                      case 4:
                        Gl(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Pa(El, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Pa(to, 1 & to.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Ui(e, t, n)
                            : (Pa(to, 1 & to.current),
                              null !== (e = Qi(e, t, n)) ? e.sibling : null);
                        Pa(to, 1 & to.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Vi(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Pa(to, to.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), _i(e, t, n);
                    }
                    return Qi(e, t, n);
                  })(e, t, n)
                );
              ki = 0 !== (131072 & e.flags);
            }
          else (ki = !1), ol && 0 !== (1048576 & t.flags) && tl(t, Ya, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Wi(e, t), (e = t.pendingProps);
              var a = Oa(t, La.current);
              zl(t, n), (a = yo(null, t, r, e, a, n));
              var o = bo();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ma(r) ? ((o = !0), Ia(t)) : (o = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Il(t),
                    (a.updater = oi),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    ci(t, r, e, n),
                    (t = Li(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    ol && o && nl(t),
                    Si(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Wi(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Ms(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === P) return 11;
                        if (e === z) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = ai(r, e)),
                  a)
                ) {
                  case 0:
                    t = Pi(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Ti(null, t, r, e, n);
                    break e;
                  case 11:
                    t = xi(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Ei(null, t, r, ai(r.type, e), n);
                    break e;
                }
                throw Error(l(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Pi(e, t, r, (a = t.elementType === r ? a : ai(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ti(e, t, r, (a = t.elementType === r ? a : ai(r, a)), n)
              );
            case 3:
              e: {
                if ((zi(t), null === e)) throw Error(l(387));
                (r = t.pendingProps),
                  (a = (o = t.memoizedState).element),
                  Ul(e, t),
                  Vl(t, r, null, n);
                var i = t.memoizedState;
                if (((r = i.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: i.cache,
                      pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                      transitions: i.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Ri(e, t, r, n, (a = fi(Error(l(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Ri(e, t, r, n, (a = fi(Error(l(424)), t)));
                    break e;
                  }
                  for (
                    ll = fa(t.stateNode.containerInfo.firstChild),
                      al = t,
                      ol = !0,
                      il = null,
                      n = xl(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ml(), r === a)) {
                    t = Qi(e, t, n);
                    break e;
                  }
                  Si(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                Zl(t),
                null === e && fl(t),
                (r = t.type),
                (a = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (i = a.children),
                aa(r, a)
                  ? (i = null)
                  : null !== o && aa(r, o) && (t.flags |= 32),
                Ni(e, t),
                Si(e, t, i, n),
                t.child
              );
            case 6:
              return null === e && fl(t), null;
            case 13:
              return Ui(e, t, n);
            case 4:
              return (
                Gl(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Sl(t, null, r, n)) : Si(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                xi(e, t, r, (a = t.elementType === r ? a : ai(r, a)), n)
              );
            case 7:
              return Si(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Si(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (o = t.memoizedProps),
                  (i = a.value),
                  Pa(El, r._currentValue),
                  (r._currentValue = i),
                  null !== o)
                )
                  if (sr(o.value, i)) {
                    if (o.children === a.children && !za.current) {
                      t = Qi(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var u = o.dependencies;
                      if (null !== u) {
                        i = o.child;
                        for (var s = u.firstContext; null !== s; ) {
                          if (s.context === r) {
                            if (1 === o.tag) {
                              (s = Bl(-1, n & -n)).tag = 2;
                              var c = o.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (s.next = s)
                                  : ((s.next = f.next), (f.next = s)),
                                  (c.pending = s);
                              }
                            }
                            (o.lanes |= n),
                              null !== (s = o.alternate) && (s.lanes |= n),
                              Ll(o.return, n, t),
                              (u.lanes |= n);
                            break;
                          }
                          s = s.next;
                        }
                      } else if (10 === o.tag)
                        i = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (i = o.return)) throw Error(l(341));
                        (i.lanes |= n),
                          null !== (u = i.alternate) && (u.lanes |= n),
                          Ll(i, n, t),
                          (i = o.sibling);
                      } else i = o.child;
                      if (null !== i) i.return = o;
                      else
                        for (i = o; null !== i; ) {
                          if (i === t) {
                            i = null;
                            break;
                          }
                          if (null !== (o = i.sibling)) {
                            (o.return = i.return), (i = o);
                            break;
                          }
                          i = i.return;
                        }
                      o = i;
                    }
                Si(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                zl(t, n),
                (r = r((a = Rl(a)))),
                (t.flags |= 1),
                Si(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = ai((r = t.type), t.pendingProps)),
                Ei(e, t, r, (a = ai(r.type, a)), n)
              );
            case 15:
              return Ci(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : ai(r, a)),
                Wi(e, t),
                (t.tag = 1),
                Ma(r) ? ((e = !0), Ia(t)) : (e = !1),
                zl(t, n),
                ui(t, r, a),
                ci(t, r, a, n),
                Li(null, t, r, !0, e, n)
              );
            case 19:
              return Vi(e, t, n);
            case 22:
              return _i(e, t, n);
          }
          throw Error(l(156, t.tag));
        };
        var qs =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Xs(e) {
          this._internalRoot = e;
        }
        function Gs(e) {
          this._internalRoot = e;
        }
        function Js(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Zs(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function ec() {}
        function tc(e, t, n, r, a) {
          var l = n._reactRootContainer;
          if (l) {
            var o = l;
            if ("function" === typeof a) {
              var i = a;
              a = function () {
                var e = Qs(o);
                i.call(e);
              };
            }
            Ws(t, o, e, a);
          } else
            o = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var l = r;
                  r = function () {
                    var e = Qs(o);
                    l.call(e);
                  };
                }
                var o = Vs(t, r, e, 0, null, !1, 0, "", ec);
                return (
                  (e._reactRootContainer = o),
                  (e[va] = o.current),
                  Vr(8 === e.nodeType ? e.parentNode : e),
                  ds(),
                  o
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var i = r;
                r = function () {
                  var e = Qs(u);
                  i.call(e);
                };
              }
              var u = $s(e, 0, !1, null, 0, !1, 0, "", ec);
              return (
                (e._reactRootContainer = u),
                (e[va] = u.current),
                Vr(8 === e.nodeType ? e.parentNode : e),
                ds(function () {
                  Ws(t, u, n, r);
                }),
                u
              );
            })(n, t, e, a, r);
          return Qs(o);
        }
        (Gs.prototype.render = Xs.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(l(409));
            Ws(e, t, null, null);
          }),
          (Gs.prototype.unmount = Xs.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                ds(function () {
                  Ws(null, e, null, null);
                }),
                  (t[va] = null);
              }
            }),
          (Gs.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = _t();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Dt.length && 0 !== t && t < Dt[n].priority;
                n++
              );
              Dt.splice(n, 0, e), 0 === n && Ut(e);
            }
          }),
          (xt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = pt(t.pendingLanes);
                  0 !== n &&
                    (wt(t, 1 | n),
                    ls(t, Ze()),
                    0 === (6 & Lu) && ((Vu = Ze() + 500), Va()));
                }
                break;
              case 13:
                ds(function () {
                  var t = jl(e, 1);
                  if (null !== t) {
                    var n = ns();
                    as(t, e, 1, n);
                  }
                }),
                  Ys(e, 1);
            }
          }),
          (Et = function (e) {
            if (13 === e.tag) {
              var t = jl(e, 134217728);
              if (null !== t) as(t, e, 134217728, ns());
              Ys(e, 134217728);
            }
          }),
          (Ct = function (e) {
            if (13 === e.tag) {
              var t = rs(e),
                n = jl(e, t);
              if (null !== n) as(n, e, t, ns());
              Ys(e, t);
            }
          }),
          (_t = function () {
            return kt;
          }),
          (Nt = function (e, t) {
            var n = kt;
            try {
              return (kt = e), t();
            } finally {
              kt = n;
            }
          }),
          (Se = function (e, t, n) {
            switch (t) {
              case "input":
                if ((J(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = xa(r);
                      if (!a) throw Error(l(90));
                      K(r), J(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                le(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Pe = fs),
          (Te = ds);
        var nc = {
            usingClientEntryPoint: !1,
            Events: [ka, Sa, xa, _e, Ne, fs],
          },
          rc = {
            findFiberByHostInstance: wa,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
          },
          ac = {
            bundleType: rc.bundleType,
            version: rc.version,
            rendererPackageName: rc.rendererPackageName,
            rendererConfig: rc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Ke(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              rc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var lc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!lc.isDisabled && lc.supportsFiber)
            try {
              (ot = lc.inject(ac)), (it = lc);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Js(t)) throw Error(l(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: S,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Js(e)) throw Error(l(299));
            var n = !1,
              r = "",
              a = qs;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = $s(e, 1, !1, null, 0, n, 0, r, a)),
              (e[va] = t.current),
              Vr(8 === e.nodeType ? e.parentNode : e),
              new Xs(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(l(188));
              throw ((e = Object.keys(e).join(",")), Error(l(268, e)));
            }
            return (e = null === (e = Ke(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return ds(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Zs(t)) throw Error(l(200));
            return tc(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Js(e)) throw Error(l(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              o = "",
              i = qs;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (i = n.onRecoverableError)),
              (t = Vs(t, null, e, 1, null != n ? n : null, a, 0, o, i)),
              (e[va] = t.current),
              Vr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Gs(t);
          }),
          (t.render = function (e, t, n) {
            if (!Zs(t)) throw Error(l(200));
            return tc(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Zs(e)) throw Error(l(40));
            return (
              !!e._reactRootContainer &&
              (ds(function () {
                tc(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[va] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = fs),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Zs(n)) throw Error(l(200));
            if (null == e || void 0 === e._reactInternals) throw Error(l(38));
            return tc(e, t, n, !1, r);
          }),
          (t.version = "18.3.1-next-f1338f8080-20240426");
      },
      391: (e, t, n) => {
        var r = n(950);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      950: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(730));
      },
      153: (e, t, n) => {
        var r = n(43),
          a = Symbol.for("react.element"),
          l = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          i =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, t, n) {
          var r,
            l = {},
            s = null,
            c = null;
          for (r in (void 0 !== n && (s = "" + n),
          void 0 !== t.key && (s = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            o.call(t, r) && !u.hasOwnProperty(r) && (l[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === l[r] && (l[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: s,
            ref: c,
            props: l,
            _owner: i.current,
          };
        }
        (t.Fragment = l), (t.jsx = s), (t.jsxs = s);
      },
      202: (e, t) => {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          l = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          i = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          v = {};
        function g(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = g.prototype);
        var w = (b.prototype = new y());
        (w.constructor = b), m(w, g.prototype), (w.isPureReactComponent = !0);
        var k = Array.isArray,
          S = Object.prototype.hasOwnProperty,
          x = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var a,
            l = {},
            o = null,
            i = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (i = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              S.call(t, a) && !E.hasOwnProperty(a) && (l[a] = t[a]);
          var u = arguments.length - 2;
          if (1 === u) l.children = r;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            l.children = s;
          }
          if (e && e.defaultProps)
            for (a in (u = e.defaultProps)) void 0 === l[a] && (l[a] = u[a]);
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: i,
            props: l,
            _owner: x.current,
          };
        }
        function _(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var N = /\/+/g;
        function P(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function T(e, t, a, l, o) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (i) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (o = o((u = e))),
              (e = "" === l ? "." + P(u, 0) : l),
              k(o)
                ? ((a = ""),
                  null != e && (a = e.replace(N, "$&/") + "/"),
                  T(o, t, a, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (_(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      a +
                        (!o.key || (u && u.key === o.key)
                          ? ""
                          : ("" + o.key).replace(N, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((u = 0), (l = "" === l ? "." : l + ":"), k(e)))
            for (var s = 0; s < e.length; s++) {
              var c = l + P((i = e[s]), s);
              u += T(i, t, a, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), s = 0; !(i = e.next()).done; )
              u += T((i = i.value), t, a, (c = l + P(i, s++)), o);
          else if ("object" === i)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return u;
        }
        function L(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            T(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function z(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var R = { current: null },
          O = { transition: null },
          M = {
            ReactCurrentDispatcher: R,
            ReactCurrentBatchConfig: O,
            ReactCurrentOwner: x,
          };
        function D() {
          throw Error(
            "act(...) is not supported in production builds of React."
          );
        }
        (t.Children = {
          map: L,
          forEach: function (e, t, n) {
            L(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              L(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              L(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!_(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = a),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = l),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M),
          (t.act = D),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = m({}, e.props),
              l = e.key,
              o = e.ref,
              i = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (i = x.current)),
                void 0 !== t.key && (l = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (s in t)
                S.call(t, s) &&
                  !E.hasOwnProperty(s) &&
                  (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) a.children = r;
            else if (1 < s) {
              u = Array(s);
              for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
              a.children = u;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: l,
              ref: o,
              props: a,
              _owner: i,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = _),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: z,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = O.transition;
            O.transition = {};
            try {
              e();
            } finally {
              O.transition = t;
            }
          }),
          (t.unstable_act = D),
          (t.useCallback = function (e, t) {
            return R.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return R.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return R.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return R.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return R.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return R.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return R.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return R.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return R.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return R.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return R.current.useRef(e);
          }),
          (t.useState = function (e) {
            return R.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return R.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return R.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      43: (e, t, n) => {
        e.exports = n(202);
      },
      579: (e, t, n) => {
        e.exports = n(153);
      },
      234: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < l(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
              var i = 2 * (r + 1) - 1,
                u = e[i],
                s = i + 1,
                c = e[s];
              if (0 > l(u, n))
                s < a && 0 > l(c, u)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = u), (e[i] = n), (r = i));
              else {
                if (!(s < a && 0 > l(c, n))) break e;
                (e[r] = c), (e[s] = n), (r = s);
              }
            }
          }
          return t;
        }
        function l(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var i = Date,
            u = i.now();
          t.unstable_now = function () {
            return i.now() - u;
          };
        }
        var s = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          m = !1,
          v = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(s, t);
            }
            t = r(c);
          }
        }
        function k(e) {
          if (((v = !1), w(e), !m))
            if (null !== r(s)) (m = !0), O(S);
            else {
              var t = r(c);
              null !== t && M(k, t.startTime - e);
            }
        }
        function S(e, n) {
          (m = !1), v && ((v = !1), y(_), (_ = -1)), (h = !0);
          var l = p;
          try {
            for (
              w(n), d = r(s);
              null !== d && (!(d.expirationTime > n) || (e && !T()));

            ) {
              var o = d.callback;
              if ("function" === typeof o) {
                (d.callback = null), (p = d.priorityLevel);
                var i = o(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof i
                    ? (d.callback = i)
                    : d === r(s) && a(s),
                  w(n);
              } else a(s);
              d = r(s);
            }
            if (null !== d) var u = !0;
            else {
              var f = r(c);
              null !== f && M(k, f.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (d = null), (p = l), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var x,
          E = !1,
          C = null,
          _ = -1,
          N = 5,
          P = -1;
        function T() {
          return !(t.unstable_now() - P < N);
        }
        function L() {
          if (null !== C) {
            var e = t.unstable_now();
            P = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? x() : ((E = !1), (C = null));
            }
          } else E = !1;
        }
        if ("function" === typeof b)
          x = function () {
            b(L);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var z = new MessageChannel(),
            R = z.port2;
          (z.port1.onmessage = L),
            (x = function () {
              R.postMessage(null);
            });
        } else
          x = function () {
            g(L, 0);
          };
        function O(e) {
          (C = e), E || ((E = !0), x());
        }
        function M(e, n) {
          _ = g(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), O(S));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (N = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(s);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, l) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof l && null !== l
                ? (l = "number" === typeof (l = l.delay) && 0 < l ? o + l : o)
                : (l = o),
              e)
            ) {
              case 1:
                var i = -1;
                break;
              case 2:
                i = 250;
                break;
              case 5:
                i = 1073741823;
                break;
              case 4:
                i = 1e4;
                break;
              default:
                i = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: l,
                expirationTime: (i = l + i),
                sortIndex: -1,
              }),
              l > o
                ? ((e.sortIndex = l),
                  n(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (v ? (y(_), (_ = -1)) : (v = !0), M(k, l - o)))
                : ((e.sortIndex = i), n(s, e), m || h || ((m = !0), O(S))),
              e
            );
          }),
          (t.unstable_shouldYield = T),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      853: (e, t, n) => {
        e.exports = n(234);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var l = (t[r] = { exports: {} });
    return e[r](l, l.exports, n), l.exports;
  }
  (n.m = e),
    (() => {
      var e,
        t = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__;
      n.t = function (r, a) {
        if ((1 & a && (r = this(r)), 8 & a)) return r;
        if ("object" === typeof r && r) {
          if (4 & a && r.__esModule) return r;
          if (16 & a && "function" === typeof r.then) return r;
        }
        var l = Object.create(null);
        n.r(l);
        var o = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var i = 2 & a && r;
          "object" == typeof i && !~e.indexOf(i);
          i = t(i)
        )
          Object.getOwnPropertyNames(i).forEach((e) => (o[e] = () => r[e]));
        return (o.default = () => r), n.d(l, o), l;
      };
    })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = (e) =>
      Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []))),
    (n.u = (e) => "static/js/" + e + ".b2157c12.chunk.js"),
    (n.miniCssF = (e) => {}),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = "newsapp:";
      n.l = (r, a, l, o) => {
        if (e[r]) e[r].push(a);
        else {
          var i, u;
          if (void 0 !== l)
            for (
              var s = document.getElementsByTagName("script"), c = 0;
              c < s.length;
              c++
            ) {
              var f = s[c];
              if (
                f.getAttribute("src") == r ||
                f.getAttribute("data-webpack") == t + l
              ) {
                i = f;
                break;
              }
            }
          i ||
            ((u = !0),
            ((i = document.createElement("script")).charset = "utf-8"),
            (i.timeout = 120),
            n.nc && i.setAttribute("nonce", n.nc),
            i.setAttribute("data-webpack", t + l),
            (i.src = r)),
            (e[r] = [a]);
          var d = (t, n) => {
              (i.onerror = i.onload = null), clearTimeout(p);
              var a = e[r];
              if (
                (delete e[r],
                i.parentNode && i.parentNode.removeChild(i),
                a && a.forEach((e) => e(n)),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              d.bind(null, void 0, { type: "timeout", target: i }),
              12e4
            );
          (i.onerror = d.bind(null, i.onerror)),
            (i.onload = d.bind(null, i.onload)),
            u && document.head.appendChild(i);
        }
      };
    })(),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (() => {
      var e = { 792: 0 };
      n.f.j = (t, r) => {
        var a = n.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) r.push(a[2]);
          else {
            var l = new Promise((n, r) => (a = e[t] = [n, r]));
            r.push((a[2] = l));
            var o = n.p + n.u(t),
              i = new Error();
            n.l(
              o,
              (r) => {
                if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var l = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  (i.message =
                    "Loading chunk " + t + " failed.\n(" + l + ": " + o + ")"),
                    (i.name = "ChunkLoadError"),
                    (i.type = l),
                    (i.request = o),
                    a[1](i);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, r) => {
          var a,
            l,
            o = r[0],
            i = r[1],
            u = r[2],
            s = 0;
          if (o.some((t) => 0 !== e[t])) {
            for (a in i) n.o(i, a) && (n.m[a] = i[a]);
            if (u) u(n);
          }
          for (t && t(r); s < o.length; s++)
            (l = o[s]), n.o(e, l) && e[l] && e[l][0](), (e[l] = 0);
        },
        r = (self.webpackChunknewsapp = self.webpackChunknewsapp || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var r,
    a = n(43),
    l = n.t(a, 2),
    o = n(391),
    i = n(950),
    u = n.t(i, 2);
  function s() {
    return (
      (s = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      s.apply(this, arguments)
    );
  }
  !(function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
  })(r || (r = {}));
  const c = "popstate";
  function f(e, t) {
    if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t);
  }
  function d(e, t) {
    if (!e) {
      "undefined" !== typeof console && console.warn(t);
      try {
        throw new Error(t);
      } catch (n) {}
    }
  }
  function p(e, t) {
    return { usr: e.state, key: e.key, idx: t };
  }
  function h(e, t, n, r) {
    return (
      void 0 === n && (n = null),
      s(
        {
          pathname: "string" === typeof e ? e : e.pathname,
          search: "",
          hash: "",
        },
        "string" === typeof t ? v(t) : t,
        {
          state: n,
          key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
        }
      )
    );
  }
  function m(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
      n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
      r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
      t
    );
  }
  function v(e) {
    let t = {};
    if (e) {
      let n = e.indexOf("#");
      n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
      let r = e.indexOf("?");
      r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
        e && (t.pathname = e);
    }
    return t;
  }
  function g(e, t, n, a) {
    void 0 === a && (a = {});
    let { window: l = document.defaultView, v5Compat: o = !1 } = a,
      i = l.history,
      u = r.Pop,
      d = null,
      v = g();
    function g() {
      return (i.state || { idx: null }).idx;
    }
    function y() {
      u = r.Pop;
      let e = g(),
        t = null == e ? null : e - v;
      (v = e), d && d({ action: u, location: w.location, delta: t });
    }
    function b(e) {
      let t =
          "null" !== l.location.origin ? l.location.origin : l.location.href,
        n = "string" === typeof e ? e : m(e);
      return (
        (n = n.replace(/ $/, "%20")),
        f(
          t,
          "No window.location.(origin|href) available to create URL for href: " +
            n
        ),
        new URL(n, t)
      );
    }
    null == v && ((v = 0), i.replaceState(s({}, i.state, { idx: v }), ""));
    let w = {
      get action() {
        return u;
      },
      get location() {
        return e(l, i);
      },
      listen(e) {
        if (d) throw new Error("A history only accepts one active listener");
        return (
          l.addEventListener(c, y),
          (d = e),
          () => {
            l.removeEventListener(c, y), (d = null);
          }
        );
      },
      createHref: (e) => t(l, e),
      createURL: b,
      encodeLocation(e) {
        let t = b(e);
        return { pathname: t.pathname, search: t.search, hash: t.hash };
      },
      push: function (e, t) {
        u = r.Push;
        let a = h(w.location, e, t);
        n && n(a, e), (v = g() + 1);
        let s = p(a, v),
          c = w.createHref(a);
        try {
          i.pushState(s, "", c);
        } catch (f) {
          if (f instanceof DOMException && "DataCloneError" === f.name) throw f;
          l.location.assign(c);
        }
        o && d && d({ action: u, location: w.location, delta: 1 });
      },
      replace: function (e, t) {
        u = r.Replace;
        let a = h(w.location, e, t);
        n && n(a, e), (v = g());
        let l = p(a, v),
          s = w.createHref(a);
        i.replaceState(l, "", s),
          o && d && d({ action: u, location: w.location, delta: 0 });
      },
      go: (e) => i.go(e),
    };
    return w;
  }
  var y;
  !(function (e) {
    (e.data = "data"),
      (e.deferred = "deferred"),
      (e.redirect = "redirect"),
      (e.error = "error");
  })(y || (y = {}));
  new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
  function b(e, t, n) {
    return void 0 === n && (n = "/"), w(e, t, n, !1);
  }
  function w(e, t, n, r) {
    let a = M(("string" === typeof t ? v(t) : t).pathname || "/", n);
    if (null == a) return null;
    let l = k(e);
    !(function (e) {
      e.sort((e, t) =>
        e.score !== t.score
          ? t.score - e.score
          : (function (e, t) {
              let n =
                e.length === t.length &&
                e.slice(0, -1).every((e, n) => e === t[n]);
              return n ? e[e.length - 1] - t[t.length - 1] : 0;
            })(
              e.routesMeta.map((e) => e.childrenIndex),
              t.routesMeta.map((e) => e.childrenIndex)
            )
      );
    })(l);
    let o = null;
    for (let i = 0; null == o && i < l.length; ++i) {
      let e = O(a);
      o = z(l[i], e, r);
    }
    return o;
  }
  function k(e, t, n, r) {
    void 0 === t && (t = []),
      void 0 === n && (n = []),
      void 0 === r && (r = "");
    let a = (e, a, l) => {
      let o = {
        relativePath: void 0 === l ? e.path || "" : l,
        caseSensitive: !0 === e.caseSensitive,
        childrenIndex: a,
        route: e,
      };
      o.relativePath.startsWith("/") &&
        (f(
          o.relativePath.startsWith(r),
          'Absolute route path "' +
            o.relativePath +
            '" nested under path "' +
            r +
            '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
        ),
        (o.relativePath = o.relativePath.slice(r.length)));
      let i = U([r, o.relativePath]),
        u = n.concat(o);
      e.children &&
        e.children.length > 0 &&
        (f(
          !0 !== e.index,
          'Index routes must not have child routes. Please remove all child routes from route path "' +
            i +
            '".'
        ),
        k(e.children, t, u, i)),
        (null != e.path || e.index) &&
          t.push({ path: i, score: L(i, e.index), routesMeta: u });
    };
    return (
      e.forEach((e, t) => {
        var n;
        if ("" !== e.path && null != (n = e.path) && n.includes("?"))
          for (let r of S(e.path)) a(e, t, r);
        else a(e, t);
      }),
      t
    );
  }
  function S(e) {
    let t = e.split("/");
    if (0 === t.length) return [];
    let [n, ...r] = t,
      a = n.endsWith("?"),
      l = n.replace(/\?$/, "");
    if (0 === r.length) return a ? [l, ""] : [l];
    let o = S(r.join("/")),
      i = [];
    return (
      i.push(...o.map((e) => ("" === e ? l : [l, e].join("/")))),
      a && i.push(...o),
      i.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
    );
  }
  const x = /^:[\w-]+$/,
    E = 3,
    C = 2,
    _ = 1,
    N = 10,
    P = -2,
    T = (e) => "*" === e;
  function L(e, t) {
    let n = e.split("/"),
      r = n.length;
    return (
      n.some(T) && (r += P),
      t && (r += C),
      n
        .filter((e) => !T(e))
        .reduce((e, t) => e + (x.test(t) ? E : "" === t ? _ : N), r)
    );
  }
  function z(e, t, n) {
    void 0 === n && (n = !1);
    let { routesMeta: r } = e,
      a = {},
      l = "/",
      o = [];
    for (let i = 0; i < r.length; ++i) {
      let e = r[i],
        u = i === r.length - 1,
        s = "/" === l ? t : t.slice(l.length) || "/",
        c = R(
          { path: e.relativePath, caseSensitive: e.caseSensitive, end: u },
          s
        ),
        f = e.route;
      if (
        (!c &&
          u &&
          n &&
          !r[r.length - 1].route.index &&
          (c = R(
            { path: e.relativePath, caseSensitive: e.caseSensitive, end: !1 },
            s
          )),
        !c)
      )
        return null;
      Object.assign(a, c.params),
        o.push({
          params: a,
          pathname: U([l, c.pathname]),
          pathnameBase: B(U([l, c.pathnameBase])),
          route: f,
        }),
        "/" !== c.pathnameBase && (l = U([l, c.pathnameBase]));
    }
    return o;
  }
  function R(e, t) {
    "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = (function (e, t, n) {
        void 0 === t && (t = !1);
        void 0 === n && (n = !0);
        d(
          "*" === e || !e.endsWith("*") || e.endsWith("/*"),
          'Route path "' +
            e +
            '" will be treated as if it were "' +
            e.replace(/\*$/, "/*") +
            '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
            e.replace(/\*$/, "/*") +
            '".'
        );
        let r = [],
          a =
            "^" +
            e
              .replace(/\/*\*?$/, "")
              .replace(/^\/*/, "/")
              .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
              .replace(
                /\/:([\w-]+)(\?)?/g,
                (e, t, n) => (
                  r.push({ paramName: t, isOptional: null != n }),
                  n ? "/?([^\\/]+)?" : "/([^\\/]+)"
                )
              );
        e.endsWith("*")
          ? (r.push({ paramName: "*" }),
            (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
          : n
          ? (a += "\\/*$")
          : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
        let l = new RegExp(a, t ? void 0 : "i");
        return [l, r];
      })(e.path, e.caseSensitive, e.end),
      a = t.match(n);
    if (!a) return null;
    let l = a[0],
      o = l.replace(/(.)\/+$/, "$1"),
      i = a.slice(1);
    return {
      params: r.reduce((e, t, n) => {
        let { paramName: r, isOptional: a } = t;
        if ("*" === r) {
          let e = i[n] || "";
          o = l.slice(0, l.length - e.length).replace(/(.)\/+$/, "$1");
        }
        const u = i[n];
        return (e[r] = a && !u ? void 0 : (u || "").replace(/%2F/g, "/")), e;
      }, {}),
      pathname: l,
      pathnameBase: o,
      pattern: e,
    };
  }
  function O(e) {
    try {
      return e
        .split("/")
        .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
        .join("/");
    } catch (t) {
      return (
        d(
          !1,
          'The URL path "' +
            e +
            '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
            t +
            ")."
        ),
        e
      );
    }
  }
  function M(e, t) {
    if ("/" === t) return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
      r = e.charAt(n);
    return r && "/" !== r ? null : e.slice(n) || "/";
  }
  function D(e, t, n, r) {
    return (
      "Cannot include a '" +
      e +
      "' character in a manually specified `to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the `to." +
      n +
      '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
    );
  }
  function j(e) {
    return e.filter(
      (e, t) => 0 === t || (e.route.path && e.route.path.length > 0)
    );
  }
  function F(e, t) {
    let n = j(e);
    return t
      ? n.map((t, n) => (n === e.length - 1 ? t.pathname : t.pathnameBase))
      : n.map((e) => e.pathnameBase);
  }
  function I(e, t, n, r) {
    let a;
    void 0 === r && (r = !1),
      "string" === typeof e
        ? (a = v(e))
        : ((a = s({}, e)),
          f(
            !a.pathname || !a.pathname.includes("?"),
            D("?", "pathname", "search", a)
          ),
          f(
            !a.pathname || !a.pathname.includes("#"),
            D("#", "pathname", "hash", a)
          ),
          f(!a.search || !a.search.includes("#"), D("#", "search", "hash", a)));
    let l,
      o = "" === e || "" === a.pathname,
      i = o ? "/" : a.pathname;
    if (null == i) l = n;
    else {
      let e = t.length - 1;
      if (!r && i.startsWith("..")) {
        let t = i.split("/");
        for (; ".." === t[0]; ) t.shift(), (e -= 1);
        a.pathname = t.join("/");
      }
      l = e >= 0 ? t[e] : "/";
    }
    let u = (function (e, t) {
        void 0 === t && (t = "/");
        let {
            pathname: n,
            search: r = "",
            hash: a = "",
          } = "string" === typeof e ? v(e) : e,
          l = n
            ? n.startsWith("/")
              ? n
              : (function (e, t) {
                  let n = t.replace(/\/+$/, "").split("/");
                  return (
                    e.split("/").forEach((e) => {
                      ".." === e
                        ? n.length > 1 && n.pop()
                        : "." !== e && n.push(e);
                    }),
                    n.length > 1 ? n.join("/") : "/"
                  );
                })(n, t)
            : t;
        return { pathname: l, search: A(r), hash: $(a) };
      })(a, l),
      c = i && "/" !== i && i.endsWith("/"),
      d = (o || "." === i) && n.endsWith("/");
    return u.pathname.endsWith("/") || (!c && !d) || (u.pathname += "/"), u;
  }
  const U = (e) => e.join("/").replace(/\/\/+/g, "/"),
    B = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    A = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
    $ = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
  Error;
  function H(e) {
    return (
      null != e &&
      "number" === typeof e.status &&
      "string" === typeof e.statusText &&
      "boolean" === typeof e.internal &&
      "data" in e
    );
  }
  const V = ["post", "put", "patch", "delete"],
    W = (new Set(V), ["get", ...V]);
  new Set(W), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
  Symbol("deferred");
  function Q() {
    return (
      (Q = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      Q.apply(this, arguments)
    );
  }
  const K = a.createContext(null);
  const Y = a.createContext(null);
  const q = a.createContext(null);
  const X = a.createContext(null);
  const G = a.createContext({ outlet: null, matches: [], isDataRoute: !1 });
  const J = a.createContext(null);
  function Z() {
    return null != a.useContext(X);
  }
  function ee() {
    return Z() || f(!1), a.useContext(X).location;
  }
  function te(e) {
    a.useContext(q).static || a.useLayoutEffect(e);
  }
  function ne() {
    let { isDataRoute: e } = a.useContext(G);
    return e
      ? (function () {
          let { router: e } = de(ce.UseNavigateStable),
            t = he(fe.UseNavigateStable),
            n = a.useRef(!1);
          return (
            te(() => {
              n.current = !0;
            }),
            a.useCallback(
              function (r, a) {
                void 0 === a && (a = {}),
                  n.current &&
                    ("number" === typeof r
                      ? e.navigate(r)
                      : e.navigate(r, Q({ fromRouteId: t }, a)));
              },
              [e, t]
            )
          );
        })()
      : (function () {
          Z() || f(!1);
          let e = a.useContext(K),
            { basename: t, future: n, navigator: r } = a.useContext(q),
            { matches: l } = a.useContext(G),
            { pathname: o } = ee(),
            i = JSON.stringify(F(l, n.v7_relativeSplatPath)),
            u = a.useRef(!1);
          return (
            te(() => {
              u.current = !0;
            }),
            a.useCallback(
              function (n, a) {
                if ((void 0 === a && (a = {}), !u.current)) return;
                if ("number" === typeof n) return void r.go(n);
                let l = I(n, JSON.parse(i), o, "path" === a.relative);
                null == e &&
                  "/" !== t &&
                  (l.pathname = "/" === l.pathname ? t : U([t, l.pathname])),
                  (a.replace ? r.replace : r.push)(l, a.state, a);
              },
              [t, r, i, o, e]
            )
          );
        })();
  }
  function re(e, t) {
    let { relative: n } = void 0 === t ? {} : t,
      { future: r } = a.useContext(q),
      { matches: l } = a.useContext(G),
      { pathname: o } = ee(),
      i = JSON.stringify(F(l, r.v7_relativeSplatPath));
    return a.useMemo(() => I(e, JSON.parse(i), o, "path" === n), [e, i, o, n]);
  }
  function ae(e, t, n, l) {
    Z() || f(!1);
    let { navigator: o } = a.useContext(q),
      { matches: i } = a.useContext(G),
      u = i[i.length - 1],
      s = u ? u.params : {},
      c = (u && u.pathname, u ? u.pathnameBase : "/");
    u && u.route;
    let d,
      p = ee();
    if (t) {
      var h;
      let e = "string" === typeof t ? v(t) : t;
      "/" === c ||
        (null == (h = e.pathname) ? void 0 : h.startsWith(c)) ||
        f(!1),
        (d = e);
    } else d = p;
    let m = d.pathname || "/",
      g = m;
    if ("/" !== c) {
      let e = c.replace(/^\//, "").split("/");
      g = "/" + m.replace(/^\//, "").split("/").slice(e.length).join("/");
    }
    let y = b(e, { pathname: g });
    let w = se(
      y &&
        y.map((e) =>
          Object.assign({}, e, {
            params: Object.assign({}, s, e.params),
            pathname: U([
              c,
              o.encodeLocation
                ? o.encodeLocation(e.pathname).pathname
                : e.pathname,
            ]),
            pathnameBase:
              "/" === e.pathnameBase
                ? c
                : U([
                    c,
                    o.encodeLocation
                      ? o.encodeLocation(e.pathnameBase).pathname
                      : e.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      l
    );
    return t && w
      ? a.createElement(
          X.Provider,
          {
            value: {
              location: Q(
                {
                  pathname: "/",
                  search: "",
                  hash: "",
                  state: null,
                  key: "default",
                },
                d
              ),
              navigationType: r.Pop,
            },
          },
          w
        )
      : w;
  }
  function le() {
    let e = (function () {
        var e;
        let t = a.useContext(J),
          n = pe(fe.UseRouteError),
          r = he(fe.UseRouteError);
        if (void 0 !== t) return t;
        return null == (e = n.errors) ? void 0 : e[r];
      })(),
      t = H(e)
        ? e.status + " " + e.statusText
        : e instanceof Error
        ? e.message
        : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      r = "rgba(200,200,200, 0.5)",
      l = { padding: "0.5rem", backgroundColor: r };
    return a.createElement(
      a.Fragment,
      null,
      a.createElement("h2", null, "Unexpected Application Error!"),
      a.createElement("h3", { style: { fontStyle: "italic" } }, t),
      n ? a.createElement("pre", { style: l }, n) : null,
      null
    );
  }
  const oe = a.createElement(le, null);
  class ie extends a.Component {
    constructor(e) {
      super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        ("idle" !== t.revalidation && "idle" === e.revalidation)
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: void 0 !== e.error ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error(
        "React Router caught the following error during render",
        e,
        t
      );
    }
    render() {
      return void 0 !== this.state.error
        ? a.createElement(
            G.Provider,
            { value: this.props.routeContext },
            a.createElement(J.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  }
  function ue(e) {
    let { routeContext: t, match: n, children: r } = e,
      l = a.useContext(K);
    return (
      l &&
        l.static &&
        l.staticContext &&
        (n.route.errorElement || n.route.ErrorBoundary) &&
        (l.staticContext._deepestRenderedBoundaryId = n.route.id),
      a.createElement(G.Provider, { value: t }, r)
    );
  }
  function se(e, t, n, r) {
    var l;
    if (
      (void 0 === t && (t = []),
      void 0 === n && (n = null),
      void 0 === r && (r = null),
      null == e)
    ) {
      var o;
      if (null == (o = n) || !o.errors) return null;
      e = n.matches;
    }
    let i = e,
      u = null == (l = n) ? void 0 : l.errors;
    if (null != u) {
      let e = i.findIndex(
        (e) => e.route.id && void 0 !== (null == u ? void 0 : u[e.route.id])
      );
      e >= 0 || f(!1), (i = i.slice(0, Math.min(i.length, e + 1)));
    }
    let s = !1,
      c = -1;
    if (n && r && r.v7_partialHydration)
      for (let a = 0; a < i.length; a++) {
        let e = i[a];
        if (
          ((e.route.HydrateFallback || e.route.hydrateFallbackElement) &&
            (c = a),
          e.route.id)
        ) {
          let { loaderData: t, errors: r } = n,
            a =
              e.route.loader &&
              void 0 === t[e.route.id] &&
              (!r || void 0 === r[e.route.id]);
          if (e.route.lazy || a) {
            (s = !0), (i = c >= 0 ? i.slice(0, c + 1) : [i[0]]);
            break;
          }
        }
      }
    return i.reduceRight((e, r, l) => {
      let o,
        f = !1,
        d = null,
        p = null;
      var h;
      n &&
        ((o = u && r.route.id ? u[r.route.id] : void 0),
        (d = r.route.errorElement || oe),
        s &&
          (c < 0 && 0 === l
            ? ((h = "route-fallback"),
              !1 || me[h] || (me[h] = !0),
              (f = !0),
              (p = null))
            : c === l &&
              ((f = !0), (p = r.route.hydrateFallbackElement || null))));
      let m = t.concat(i.slice(0, l + 1)),
        v = () => {
          let t;
          return (
            (t = o
              ? d
              : f
              ? p
              : r.route.Component
              ? a.createElement(r.route.Component, null)
              : r.route.element
              ? r.route.element
              : e),
            a.createElement(ue, {
              match: r,
              routeContext: { outlet: e, matches: m, isDataRoute: null != n },
              children: t,
            })
          );
        };
      return n && (r.route.ErrorBoundary || r.route.errorElement || 0 === l)
        ? a.createElement(ie, {
            location: n.location,
            revalidation: n.revalidation,
            component: d,
            error: o,
            children: v(),
            routeContext: { outlet: null, matches: m, isDataRoute: !0 },
          })
        : v();
    }, null);
  }
  var ce = (function (e) {
      return (
        (e.UseBlocker = "useBlocker"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate"),
        e
      );
    })(ce || {}),
    fe = (function (e) {
      return (
        (e.UseBlocker = "useBlocker"),
        (e.UseLoaderData = "useLoaderData"),
        (e.UseActionData = "useActionData"),
        (e.UseRouteError = "useRouteError"),
        (e.UseNavigation = "useNavigation"),
        (e.UseRouteLoaderData = "useRouteLoaderData"),
        (e.UseMatches = "useMatches"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate"),
        (e.UseRouteId = "useRouteId"),
        e
      );
    })(fe || {});
  function de(e) {
    let t = a.useContext(K);
    return t || f(!1), t;
  }
  function pe(e) {
    let t = a.useContext(Y);
    return t || f(!1), t;
  }
  function he(e) {
    let t = (function (e) {
        let t = a.useContext(G);
        return t || f(!1), t;
      })(),
      n = t.matches[t.matches.length - 1];
    return n.route.id || f(!1), n.route.id;
  }
  const me = {};
  l.startTransition;
  function ve(e) {
    f(!1);
  }
  function ge(e) {
    let {
      basename: t = "/",
      children: n = null,
      location: l,
      navigationType: o = r.Pop,
      navigator: i,
      static: u = !1,
      future: s,
    } = e;
    Z() && f(!1);
    let c = t.replace(/^\/*/, "/"),
      d = a.useMemo(
        () => ({
          basename: c,
          navigator: i,
          static: u,
          future: Q({ v7_relativeSplatPath: !1 }, s),
        }),
        [c, s, i, u]
      );
    "string" === typeof l && (l = v(l));
    let {
        pathname: p = "/",
        search: h = "",
        hash: m = "",
        state: g = null,
        key: y = "default",
      } = l,
      b = a.useMemo(() => {
        let e = M(p, c);
        return null == e
          ? null
          : {
              location: { pathname: e, search: h, hash: m, state: g, key: y },
              navigationType: o,
            };
      }, [c, p, h, m, g, y, o]);
    return null == b
      ? null
      : a.createElement(
          q.Provider,
          { value: d },
          a.createElement(X.Provider, { children: n, value: b })
        );
  }
  function ye(e) {
    let { children: t, location: n } = e;
    return ae(be(t), n);
  }
  new Promise(() => {});
  a.Component;
  function be(e, t) {
    void 0 === t && (t = []);
    let n = [];
    return (
      a.Children.forEach(e, (e, r) => {
        if (!a.isValidElement(e)) return;
        let l = [...t, r];
        if (e.type === a.Fragment)
          return void n.push.apply(n, be(e.props.children, l));
        e.type !== ve && f(!1), e.props.index && e.props.children && f(!1);
        let o = {
          id: e.props.id || l.join("-"),
          caseSensitive: e.props.caseSensitive,
          element: e.props.element,
          Component: e.props.Component,
          index: e.props.index,
          path: e.props.path,
          loader: e.props.loader,
          action: e.props.action,
          errorElement: e.props.errorElement,
          ErrorBoundary: e.props.ErrorBoundary,
          hasErrorBoundary:
            null != e.props.ErrorBoundary || null != e.props.errorElement,
          shouldRevalidate: e.props.shouldRevalidate,
          handle: e.props.handle,
          lazy: e.props.lazy,
        };
        e.props.children && (o.children = be(e.props.children, l)), n.push(o);
      }),
      n
    );
  }
  function we() {
    return (
      (we = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      we.apply(this, arguments)
    );
  }
  function ke(e, t) {
    if (null == e) return {};
    var n,
      r,
      a = {},
      l = Object.keys(e);
    for (r = 0; r < l.length; r++)
      (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
    return a;
  }
  new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain",
  ]);
  const Se = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ];
  try {
    window.__reactRouterVersion = "6";
  } catch (Ge) {}
  new Map();
  const xe = l.startTransition;
  u.flushSync, l.useId;
  function Ee(e) {
    let { basename: t, children: n, future: r, window: l } = e,
      o = a.useRef();
    var i;
    null == o.current &&
      (o.current =
        (void 0 === (i = { window: l, v5Compat: !0 }) && (i = {}),
        g(
          function (e, t) {
            let { pathname: n, search: r, hash: a } = e.location;
            return h(
              "",
              { pathname: n, search: r, hash: a },
              (t.state && t.state.usr) || null,
              (t.state && t.state.key) || "default"
            );
          },
          function (e, t) {
            return "string" === typeof t ? t : m(t);
          },
          null,
          i
        )));
    let u = o.current,
      [s, c] = a.useState({ action: u.action, location: u.location }),
      { v7_startTransition: f } = r || {},
      d = a.useCallback(
        (e) => {
          f && xe ? xe(() => c(e)) : c(e);
        },
        [c, f]
      );
    return (
      a.useLayoutEffect(() => u.listen(d), [u, d]),
      a.createElement(ge, {
        basename: t,
        children: n,
        location: s.location,
        navigationType: s.action,
        navigator: u,
        future: r,
      })
    );
  }
  const Ce =
      "undefined" !== typeof window &&
      "undefined" !== typeof window.document &&
      "undefined" !== typeof window.document.createElement,
    _e = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Ne = a.forwardRef(function (e, t) {
      let n,
        {
          onClick: r,
          relative: l,
          reloadDocument: o,
          replace: i,
          state: u,
          target: s,
          to: c,
          preventScrollReset: d,
          unstable_viewTransition: p,
        } = e,
        h = ke(e, Se),
        { basename: v } = a.useContext(q),
        g = !1;
      if ("string" === typeof c && _e.test(c) && ((n = c), Ce))
        try {
          let e = new URL(window.location.href),
            t = c.startsWith("//") ? new URL(e.protocol + c) : new URL(c),
            n = M(t.pathname, v);
          t.origin === e.origin && null != n
            ? (c = n + t.search + t.hash)
            : (g = !0);
        } catch (Ge) {}
      let y = (function (e, t) {
          let { relative: n } = void 0 === t ? {} : t;
          Z() || f(!1);
          let { basename: r, navigator: l } = a.useContext(q),
            { hash: o, pathname: i, search: u } = re(e, { relative: n }),
            s = i;
          return (
            "/" !== r && (s = "/" === i ? r : U([r, i])),
            l.createHref({ pathname: s, search: u, hash: o })
          );
        })(c, { relative: l }),
        b = (function (e, t) {
          let {
              target: n,
              replace: r,
              state: l,
              preventScrollReset: o,
              relative: i,
              unstable_viewTransition: u,
            } = void 0 === t ? {} : t,
            s = ne(),
            c = ee(),
            f = re(e, { relative: i });
          return a.useCallback(
            (t) => {
              if (
                (function (e, t) {
                  return (
                    0 === e.button &&
                    (!t || "_self" === t) &&
                    !(function (e) {
                      return !!(
                        e.metaKey ||
                        e.altKey ||
                        e.ctrlKey ||
                        e.shiftKey
                      );
                    })(e)
                  );
                })(t, n)
              ) {
                t.preventDefault();
                let n = void 0 !== r ? r : m(c) === m(f);
                s(e, {
                  replace: n,
                  state: l,
                  preventScrollReset: o,
                  relative: i,
                  unstable_viewTransition: u,
                });
              }
            },
            [c, s, f, r, l, n, e, o, i, u]
          );
        })(c, {
          replace: i,
          state: u,
          target: s,
          preventScrollReset: d,
          relative: l,
          unstable_viewTransition: p,
        });
      return a.createElement(
        "a",
        we({}, h, {
          href: n || y,
          onClick:
            g || o
              ? r
              : function (e) {
                  r && r(e), e.defaultPrevented || b(e);
                },
          ref: t,
          target: s,
        })
      );
    });
  var Pe, Te;
  (function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"),
      (e.UseSubmit = "useSubmit"),
      (e.UseSubmitFetcher = "useSubmitFetcher"),
      (e.UseFetcher = "useFetcher"),
      (e.useViewTransitionState = "useViewTransitionState");
  })(Pe || (Pe = {})),
    (function (e) {
      (e.UseFetcher = "useFetcher"),
        (e.UseFetchers = "useFetchers"),
        (e.UseScrollRestoration = "useScrollRestoration");
    })(Te || (Te = {}));
  var Le = n(579);
  const ze = () =>
      (0, Le.jsx)("div", {
        children: (0, Le.jsx)("nav", {
          className: "navbar navbar-expand-lg bg-dark navbar-dark ",
          children: (0, Le.jsxs)("div", {
            className: "container-fluid",
            children: [
              (0, Le.jsx)(Ne, {
                className: "navbar-brand",
                to: "/",
                children: "NewsMonkey",
              }),
              (0, Le.jsx)("button", {
                className: "navbar-toggler",
                type: "button",
                "data-bs-toggle": "collapse",
                "data-bs-target": "#navbarSupportedContent",
                "aria-controls": "navbarSupportedContent",
                "aria-expanded": "false",
                "aria-label": "Toggle navigation",
                children: (0, Le.jsx)("span", {
                  className: "navbar-toggler-icon",
                }),
              }),
              (0, Le.jsx)("div", {
                className: "collapse navbar-collapse",
                id: "navbarSupportedContent",
                children: (0, Le.jsxs)("ul", {
                  className: "navbar-nav me-auto mb-2 mb-lg-0",
                  children: [
                    (0, Le.jsx)("li", {
                      className: "nav-item",
                      children: (0, Le.jsx)("a", {
                        className: "nav-link ",
                        "aria-current": "page",
                        to: "/general",
                        children: "Home",
                      }),
                    }),
                    (0, Le.jsx)("li", {
                      className: "nav-item",
                      children: (0, Le.jsx)(Ne, {
                        className: "nav-link",
                        to: "/business",
                        children: "Business",
                      }),
                    }),
                    (0, Le.jsx)("li", {
                      className: "nav-item",
                      children: (0, Le.jsx)(Ne, {
                        className: "nav-link",
                        to: "/entertainment",
                        children: "Entertainment",
                      }),
                    }),
                    (0, Le.jsx)("li", {
                      className: "nav-item",
                      children: (0, Le.jsx)(Ne, {
                        className: "nav-link",
                        to: "/general",
                        children: "General",
                      }),
                    }),
                    (0, Le.jsx)("li", {
                      className: "nav-item",
                      children: (0, Le.jsx)(Ne, {
                        className: "nav-link",
                        to: "/health",
                        children: "Health",
                      }),
                    }),
                    (0, Le.jsx)("li", {
                      className: "nav-item",
                      children: (0, Le.jsx)(Ne, {
                        className: "nav-link",
                        to: "/science",
                        children: "Science",
                      }),
                    }),
                    (0, Le.jsx)("li", {
                      className: "nav-item",
                      children: (0, Le.jsx)(Ne, {
                        className: "nav-link",
                        to: "/sports",
                        children: "Sports",
                      }),
                    }),
                    (0, Le.jsx)("li", {
                      className: "nav-item",
                      children: (0, Le.jsx)(Ne, {
                        className: "nav-link",
                        to: "/technology",
                        children: "Technology",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
    Re = (e) => {
      let {
        title: t,
        description: n,
        imageUrl: r,
        newsUrl: a,
        author: l,
        date: o,
        source: i,
      } = e;
      return (0, Le.jsx)("div", {
        className: "my-3",
        children: (0, Le.jsxs)("div", {
          className: "card",
          children: [
            (0, Le.jsx)("img", {
              src:
                r ||
                "https://images.moneycontrol.com/static-mcnews/2024/06/20240623045055_market_stocks_sensex_Nifty.jpg",
              className: "card-img-top",
              alt: "...",
            }),
            (0, Le.jsxs)("div", {
              className: "card-body",
              children: [
                (0, Le.jsx)("h5", { className: "card-title", children: t }),
                (0, Le.jsx)("span", {
                  className: "badge text-bg-danger",
                  children: i,
                }),
                (0, Le.jsx)("p", { className: "card-text", children: n }),
                (0, Le.jsx)("p", {
                  className: "card-text",
                  children: (0, Le.jsxs)("small", {
                    className: "text-danger",
                    children: [
                      "By ",
                      l || "Unkown Author",
                      " on ",
                      new Date(o).toGMTString(),
                      " Last updated 3 mins ago",
                    ],
                  }),
                }),
                (0, Le.jsx)("a", {
                  href: a,
                  target: "_blank",
                  className: "btn btn-sm btn-dark",
                  children: "Read More",
                }),
              ],
            }),
          ],
        }),
      });
    },
    Oe = n.p + "static/media/loading.20a21d3c5d14bc614403.gif",
    Me = () =>
      (0, Le.jsx)("div", {
        className: "text-center",
        children: (0, Le.jsx)("img", { className: "my-3", src: Oe, alt: "" }),
      });
  var De = function (e, t) {
    return (
      (De =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        }),
      De(e, t)
    );
  };
  var je = function () {
    return (
      (je =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var a in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
          return e;
        }),
      je.apply(this, arguments)
    );
  };
  var Fe = "Pixel",
    Ie = "Percent",
    Ue = { unit: Ie, value: 0.8 };
  function Be(e) {
    return "number" === typeof e
      ? { unit: Ie, value: 100 * e }
      : "string" === typeof e
      ? e.match(/^(\d*(\.\d+)?)px$/)
        ? { unit: Fe, value: parseFloat(e) }
        : e.match(/^(\d*(\.\d+)?)%$/)
        ? { unit: Ie, value: parseFloat(e) }
        : (console.warn(
            'scrollThreshold format is invalid. Valid formats: "120px", "50%"...'
          ),
          Ue)
      : (console.warn("scrollThreshold should be string or number"), Ue);
  }
  const Ae = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this;
        return (
          (n.lastScrollTop = 0),
          (n.actionTriggered = !1),
          (n.startY = 0),
          (n.currentY = 0),
          (n.dragging = !1),
          (n.maxPullDownDistance = 0),
          (n.getScrollableTarget = function () {
            return n.props.scrollableTarget instanceof HTMLElement
              ? n.props.scrollableTarget
              : "string" === typeof n.props.scrollableTarget
              ? document.getElementById(n.props.scrollableTarget)
              : (null === n.props.scrollableTarget &&
                  console.warn(
                    "You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "
                  ),
                null);
          }),
          (n.onStart = function (e) {
            n.lastScrollTop ||
              ((n.dragging = !0),
              e instanceof MouseEvent
                ? (n.startY = e.pageY)
                : e instanceof TouchEvent && (n.startY = e.touches[0].pageY),
              (n.currentY = n.startY),
              n._infScroll &&
                ((n._infScroll.style.willChange = "transform"),
                (n._infScroll.style.transition =
                  "transform 0.2s cubic-bezier(0,0,0.31,1)")));
          }),
          (n.onMove = function (e) {
            n.dragging &&
              (e instanceof MouseEvent
                ? (n.currentY = e.pageY)
                : e instanceof TouchEvent && (n.currentY = e.touches[0].pageY),
              n.currentY < n.startY ||
                (n.currentY - n.startY >=
                  Number(n.props.pullDownToRefreshThreshold) &&
                  n.setState({ pullToRefreshThresholdBreached: !0 }),
                n.currentY - n.startY > 1.5 * n.maxPullDownDistance ||
                  (n._infScroll &&
                    ((n._infScroll.style.overflow = "visible"),
                    (n._infScroll.style.transform =
                      "translate3d(0px, " +
                      (n.currentY - n.startY) +
                      "px, 0px)")))));
          }),
          (n.onEnd = function () {
            (n.startY = 0),
              (n.currentY = 0),
              (n.dragging = !1),
              n.state.pullToRefreshThresholdBreached &&
                (n.props.refreshFunction && n.props.refreshFunction(),
                n.setState({ pullToRefreshThresholdBreached: !1 })),
              requestAnimationFrame(function () {
                n._infScroll &&
                  ((n._infScroll.style.overflow = "auto"),
                  (n._infScroll.style.transform = "none"),
                  (n._infScroll.style.willChange = "unset"));
              });
          }),
          (n.onScrollListener = function (e) {
            "function" === typeof n.props.onScroll &&
              setTimeout(function () {
                return n.props.onScroll && n.props.onScroll(e);
              }, 0);
            var t =
              n.props.height || n._scrollableNode
                ? e.target
                : document.documentElement.scrollTop
                ? document.documentElement
                : document.body;
            n.actionTriggered ||
              ((n.props.inverse
                ? n.isElementAtTop(t, n.props.scrollThreshold)
                : n.isElementAtBottom(t, n.props.scrollThreshold)) &&
                n.props.hasMore &&
                ((n.actionTriggered = !0),
                n.setState({ showLoader: !0 }),
                n.props.next && n.props.next()),
              (n.lastScrollTop = t.scrollTop));
          }),
          (n.state = {
            showLoader: !1,
            pullToRefreshThresholdBreached: !1,
            prevDataLength: t.dataLength,
          }),
          (n.throttledOnScrollListener = (function (e, t, n, r) {
            var a,
              l = !1,
              o = 0;
            function i() {
              a && clearTimeout(a);
            }
            function u() {
              var u = this,
                s = Date.now() - o,
                c = arguments;
              function f() {
                (o = Date.now()), n.apply(u, c);
              }
              l ||
                (r && !a && f(),
                i(),
                void 0 === r && s > e
                  ? f()
                  : !0 !== t &&
                    (a = setTimeout(
                      r
                        ? function () {
                            a = void 0;
                          }
                        : f,
                      void 0 === r ? e - s : e
                    )));
            }
            return (
              "boolean" !== typeof t && ((r = n), (n = t), (t = void 0)),
              (u.cancel = function () {
                i(), (l = !0);
              }),
              u
            );
          })(150, n.onScrollListener).bind(n)),
          (n.onStart = n.onStart.bind(n)),
          (n.onMove = n.onMove.bind(n)),
          (n.onEnd = n.onEnd.bind(n)),
          n
        );
      }
      return (
        (function (e, t) {
          function n() {
            this.constructor = e;
          }
          De(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        })(t, e),
        (t.prototype.componentDidMount = function () {
          if ("undefined" === typeof this.props.dataLength)
            throw new Error(
              'mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage'
            );
          if (
            ((this._scrollableNode = this.getScrollableTarget()),
            (this.el = this.props.height
              ? this._infScroll
              : this._scrollableNode || window),
            this.el &&
              this.el.addEventListener(
                "scroll",
                this.throttledOnScrollListener
              ),
            "number" === typeof this.props.initialScrollY &&
              this.el &&
              this.el instanceof HTMLElement &&
              this.el.scrollHeight > this.props.initialScrollY &&
              this.el.scrollTo(0, this.props.initialScrollY),
            this.props.pullDownToRefresh &&
              this.el &&
              (this.el.addEventListener("touchstart", this.onStart),
              this.el.addEventListener("touchmove", this.onMove),
              this.el.addEventListener("touchend", this.onEnd),
              this.el.addEventListener("mousedown", this.onStart),
              this.el.addEventListener("mousemove", this.onMove),
              this.el.addEventListener("mouseup", this.onEnd),
              (this.maxPullDownDistance =
                (this._pullDown &&
                  this._pullDown.firstChild &&
                  this._pullDown.firstChild.getBoundingClientRect().height) ||
                0),
              this.forceUpdate(),
              "function" !== typeof this.props.refreshFunction))
          )
            throw new Error(
              'Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\''
            );
        }),
        (t.prototype.componentWillUnmount = function () {
          this.el &&
            (this.el.removeEventListener(
              "scroll",
              this.throttledOnScrollListener
            ),
            this.props.pullDownToRefresh &&
              (this.el.removeEventListener("touchstart", this.onStart),
              this.el.removeEventListener("touchmove", this.onMove),
              this.el.removeEventListener("touchend", this.onEnd),
              this.el.removeEventListener("mousedown", this.onStart),
              this.el.removeEventListener("mousemove", this.onMove),
              this.el.removeEventListener("mouseup", this.onEnd)));
        }),
        (t.prototype.componentDidUpdate = function (e) {
          this.props.dataLength !== e.dataLength &&
            ((this.actionTriggered = !1), this.setState({ showLoader: !1 }));
        }),
        (t.getDerivedStateFromProps = function (e, t) {
          return e.dataLength !== t.prevDataLength
            ? je(je({}, t), { prevDataLength: e.dataLength })
            : null;
        }),
        (t.prototype.isElementAtTop = function (e, t) {
          void 0 === t && (t = 0.8);
          var n =
              e === document.body || e === document.documentElement
                ? window.screen.availHeight
                : e.clientHeight,
            r = Be(t);
          return r.unit === Fe
            ? e.scrollTop <= r.value + n - e.scrollHeight + 1
            : e.scrollTop <= r.value / 100 + n - e.scrollHeight + 1;
        }),
        (t.prototype.isElementAtBottom = function (e, t) {
          void 0 === t && (t = 0.8);
          var n =
              e === document.body || e === document.documentElement
                ? window.screen.availHeight
                : e.clientHeight,
            r = Be(t);
          return r.unit === Fe
            ? e.scrollTop + n >= e.scrollHeight - r.value
            : e.scrollTop + n >= (r.value / 100) * e.scrollHeight;
        }),
        (t.prototype.render = function () {
          var e = this,
            t = je(
              {
                height: this.props.height || "auto",
                overflow: "auto",
                WebkitOverflowScrolling: "touch",
              },
              this.props.style
            ),
            n =
              this.props.hasChildren ||
              !!(
                this.props.children &&
                this.props.children instanceof Array &&
                this.props.children.length
              ),
            r =
              this.props.pullDownToRefresh && this.props.height
                ? { overflow: "auto" }
                : {};
          return a.createElement(
            "div",
            { style: r, className: "infinite-scroll-component__outerdiv" },
            a.createElement(
              "div",
              {
                className:
                  "infinite-scroll-component " + (this.props.className || ""),
                ref: function (t) {
                  return (e._infScroll = t);
                },
                style: t,
              },
              this.props.pullDownToRefresh &&
                a.createElement(
                  "div",
                  {
                    style: { position: "relative" },
                    ref: function (t) {
                      return (e._pullDown = t);
                    },
                  },
                  a.createElement(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: -1 * this.maxPullDownDistance,
                      },
                    },
                    this.state.pullToRefreshThresholdBreached
                      ? this.props.releaseToRefreshContent
                      : this.props.pullDownToRefreshContent
                  )
                ),
              this.props.children,
              !this.state.showLoader &&
                !n &&
                this.props.hasMore &&
                this.props.loader,
              this.state.showLoader && this.props.hasMore && this.props.loader,
              !this.props.hasMore && this.props.endMessage
            )
          );
        }),
        t
      );
    })(a.Component),
    $e = (e) => {
      const [t, n] = (0, a.useState)([]),
        [r, l] = (0, a.useState)(!0),
        [o, i] = (0, a.useState)(1),
        [u, s] = (0, a.useState)(0),
        c = (e) => e.charAt(0).toUpperCase() + e.slice(1);
      (0, a.useEffect)(() => {
        (document.title = "".concat(c(e.category), " - NewsMonkey")),
          (async () => {
            try {
              e.setprogress(10);
              const t = "https://newsapi.org/v2/top-headlines?country="
                .concat(e.country, "&category=")
                .concat(e.category, "&apiKey=")
                .concat(e.apiKey, "&page=")
                .concat(o, "&pageSize=")
                .concat(e.pageSize);
              l(!0);
              let r = await fetch(t);
              e.setprogress(30);
              let a = await r.json();
              e.setprogress(70),
                n(a.articles || []),
                s(a.totalResults),
                l(!1),
                e.setprogress(100);
            } catch (t) {
              console.error("Failed to fetch news:", t), l(!1);
            }
          })();
      }, []);
      return (0, Le.jsxs)(Le.Fragment, {
        children: [
          (0, Le.jsxs)("h1", {
            className: "text-center",
            style: { margin: "35px 0px", marginTop: "90px" },
            children: ["NewsMonkey - Top ", c(e.category), " Headlines"],
          }),
          r && (0, Le.jsx)(Me, {}),
          (0, Le.jsx)(Ae, {
            dataLength: t.length || 0,
            next: async () => {
              try {
                const r = "https://newsapi.org/v2/top-headlines?country="
                  .concat(e.country, "&category=")
                  .concat(e.category, "&apiKey=")
                  .concat(e.apiKey, "&page=")
                  .concat(o + 1, "&pageSize=")
                  .concat(e.pageSize);
                i(o + 1);
                let a = await fetch(r),
                  l = await a.json();
                n(t.concat(l.articles || [])), s(l.totalResults);
              } catch (r) {
                console.error("Failed to fetch more news:", r);
              }
            },
            hasMore: t.length !== u,
            loader: (0, Le.jsx)(Me, {}),
            children: (0, Le.jsx)("div", {
              className: "container",
              children: (0, Le.jsx)("div", {
                className: "row",
                children: t.map((e) =>
                  (0, Le.jsx)(
                    "div",
                    {
                      className: "col-md-4",
                      children: (0, Le.jsx)(Re, {
                        title: e.title ? e.title : "",
                        description: e.description ? e.description : "",
                        imageUrl: e.urlToImage,
                        newsUrl: e.url,
                        author: e.author,
                        date: e.publishedAt,
                        source: e.source.name,
                      }),
                    },
                    e.url
                  )
                ),
              }),
            }),
          }),
        ],
      });
    };
  $e.defaultProps = { country: "in", pageSize: 8, category: "general" };
  const He = $e;
  function Ve() {
    return (Ve =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
  }
  var We = function () {};
  function Qe(e, t) {
    return Math.random() * (t - e + 1) + e;
  }
  function Ke(e, t) {
    return Math.floor(Qe(e, t));
  }
  const Ye = (0, a.forwardRef)(function (e, t) {
    var n = e.progress,
      r = e.height,
      l = void 0 === r ? 2 : r,
      o = e.className,
      i = void 0 === o ? "" : o,
      u = e.color,
      s = void 0 === u ? "red" : u,
      c = e.background,
      f = void 0 === c ? "transparent" : c,
      d = e.onLoaderFinished,
      p = e.transitionTime,
      h = void 0 === p ? 300 : p,
      m = e.loaderSpeed,
      v = void 0 === m ? 500 : m,
      g = e.waitingTime,
      y = void 0 === g ? 1e3 : g,
      b = e.shadow,
      w = void 0 === b || b,
      k = e.containerStyle,
      S = void 0 === k ? {} : k,
      x = e.style,
      E = void 0 === x ? {} : x,
      C = e.shadowStyle,
      _ = void 0 === C ? {} : C,
      N = e.containerClassName,
      P = void 0 === N ? "" : N,
      T = (0, a.useRef)(!1),
      L = (0, a.useState)(0),
      z = L[0],
      R = L[1],
      O = (0, a.useRef)({ active: !1, refreshRate: 1e3 }),
      M = (0, a.useState)(!1),
      D = M[0],
      j = M[1],
      F = (0, a.useState)({ active: !1, value: 20 }),
      I = F[0],
      U = F[1],
      B = {
        position: "fixed",
        top: 0,
        left: 0,
        height: l,
        background: f,
        zIndex: 99999999999,
        width: "100%",
      },
      A = {
        boxShadow: "0 0 10px " + s + ", 0 0 10px " + s,
        width: "5%",
        opacity: 1,
        position: "absolute",
        height: "100%",
        transition: "all " + v + "ms ease",
        transform: "rotate(3deg) translate(0px, -4px)",
        left: "-10rem",
      },
      $ = (0, a.useState)({
        height: "100%",
        background: s,
        transition: "all " + v + "ms ease",
        width: "0%",
      }),
      H = $[0],
      V = $[1],
      W = (0, a.useState)(A),
      Q = W[0],
      K = W[1];
    (0, a.useEffect)(function () {
      return (
        (T.current = !0),
        function () {
          T.current = !1;
        }
      );
    }, []),
      (0, a.useImperativeHandle)(t, function () {
        return {
          continuousStart: function (e, t) {
            if ((void 0 === t && (t = 1e3), !I.active))
              if (D)
                console.warn(
                  "react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!"
                );
              else {
                var n = e || Ke(10, 20);
                (O.current = { active: !0, refreshRate: t }), R(n), G(n);
              }
          },
          staticStart: function (e) {
            if (!O.current.active)
              if (D)
                console.warn(
                  "react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!"
                );
              else {
                var t = e || Ke(30, 50);
                U({ active: !0, value: t }), R(t), G(t);
              }
          },
          complete: function () {
            D
              ? console.warn(
                  "react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!"
                )
              : (R(100), G(100));
          },
        };
      }),
      (0, a.useEffect)(
        function () {
          V(Ve({}, H, { background: s })),
            K(Ve({}, Q, { boxShadow: "0 0 10px " + s + ", 0 0 5px " + s }));
        },
        [s]
      ),
      (0, a.useEffect)(
        function () {
          if (t) {
            if (t && void 0 !== n)
              return void console.warn(
                'react-top-loading-bar: You can\'t use both controlling by props and ref methods to control the bar! Please use only props or only ref methods! Ref methods will override props if "ref" property is available.'
              );
            G(z), j(!1);
          } else n && G(n), j(!0);
        },
        [n]
      );
    var Y,
      q,
      X,
      G = function e(t) {
        t >= 100
          ? (V(Ve({}, H, { width: "100%" })),
            w && K(Ve({}, Q, { left: t - 10 + "%" })),
            setTimeout(function () {
              T.current &&
                (V(
                  Ve({}, H, {
                    opacity: 0,
                    width: "100%",
                    transition: "all " + h + "ms ease-out",
                    color: s,
                  })
                ),
                setTimeout(function () {
                  T.current &&
                    (O.current.active &&
                      ((O.current = Ve({}, O.current, { active: !1 })),
                      R(0),
                      e(0)),
                    I.active && (U(Ve({}, I, { active: !1 })), R(0), e(0)),
                    d && d(),
                    R(0),
                    e(0));
                }, h));
            }, y))
          : (V(function (e) {
              return Ve({}, e, {
                width: t + "%",
                opacity: 1,
                transition: t > 0 ? "all " + v + "ms ease" : "",
              });
            }),
            w &&
              K(
                Ve({}, Q, {
                  left: t - 5.5 + "%",
                  transition: t > 0 ? "all " + v + "ms ease" : "",
                })
              ));
      };
    return (
      (Y = function () {
        var e = Qe(Math.min(10, (100 - z) / 5), Math.min(20, (100 - z) / 3));
        z + e < 95 && (R(z + e), G(z + e));
      }),
      (q = O.current.active ? O.current.refreshRate : null),
      (X = (0, a.useRef)(We)),
      (0, a.useEffect)(function () {
        X.current = Y;
      }),
      (0, a.useEffect)(function () {}, [void 0]),
      (0, a.useEffect)(
        function () {
          if (null !== q && !1 !== q) {
            var e = setInterval(function () {
              return X.current();
            }, q);
            return function () {
              return clearInterval(e);
            };
          }
        },
        [q]
      ),
      (0, a.createElement)(
        "div",
        { className: P, style: Ve({}, B, S) },
        (0, a.createElement)(
          "div",
          { className: i, style: Ve({}, H, E) },
          w ? (0, a.createElement)("div", { style: Ve({}, Q, _) }) : null
        )
      )
    );
  });
  class qe extends a.Component {
    constructor() {
      super(...arguments),
        (this.pageSize = 15),
        (this.apiKey = "644383f15433456fb9eb60e6541982d7"),
        (this.state = { progress: 0 }),
        (this.setprogress = (e) => {
          this.setState({ progress: e });
        });
    }
    render() {
      return (0, Le.jsx)("div", {
        children: (0, Le.jsxs)(Ee, {
          children: [
            (0, Le.jsx)(ze, {}),
            (0, Le.jsx)(Ye, {
              height: 3,
              color: "#f11946",
              progress: this.state.progress,
            }),
            (0, Le.jsxs)(ye, {
              children: [
                (0, Le.jsx)(ve, {
                  exact: !0,
                  path: "/general",
                  element: (0, Le.jsx)(
                    He,
                    {
                      setprogress: this.setprogress,
                      apiKey: this.apiKey,
                      pageSize: this.pageSize,
                      country: "in",
                      category: "general",
                    },
                    "general"
                  ),
                }),
                (0, Le.jsx)(ve, {
                  exact: !0,
                  path: "/business",
                  element: (0, Le.jsx)(
                    He,
                    {
                      setprogress: this.setprogress,
                      apiKey: this.apiKey,
                      pageSize: this.pageSize,
                      country: "in",
                      category: "business",
                    },
                    "business"
                  ),
                }),
                (0, Le.jsx)(ve, {
                  exact: !0,
                  path: "/entertainment",
                  element: (0, Le.jsx)(
                    He,
                    {
                      setprogress: this.setprogress,
                      apiKey: this.apiKey,
                      pageSize: this.pageSize,
                      country: "in",
                      category: "entertainment",
                    },
                    "entertainment"
                  ),
                }),
                (0, Le.jsx)(ve, {
                  exact: !0,
                  path: "/general",
                  element: (0, Le.jsx)(
                    He,
                    {
                      setprogress: this.setprogress,
                      apiKey: this.apiKey,
                      pageSize: this.pageSize,
                      country: "in",
                      category: "sports",
                    },
                    "general"
                  ),
                }),
                (0, Le.jsx)(ve, {
                  exact: !0,
                  path: "/health",
                  element: (0, Le.jsx)(
                    He,
                    {
                      setprogress: this.setprogress,
                      apiKey: this.apiKey,
                      pageSize: this.pageSize,
                      country: "in",
                      category: "health",
                    },
                    "health"
                  ),
                }),
                (0, Le.jsx)(ve, {
                  exact: !0,
                  path: "/science",
                  element: (0, Le.jsx)(
                    He,
                    {
                      setprogress: this.setprogress,
                      apiKey: this.apiKey,
                      pageSize: this.pageSize,
                      country: "in",
                      category: "science",
                    },
                    "science"
                  ),
                }),
                (0, Le.jsx)(ve, {
                  exact: !0,
                  path: "/sports",
                  element: (0, Le.jsx)(
                    He,
                    {
                      setprogress: this.setprogress,
                      apiKey: this.apiKey,
                      pageSize: this.pageSize,
                      country: "in",
                      category: "sports",
                    },
                    "sports"
                  ),
                }),
                (0, Le.jsx)(ve, {
                  exact: !0,
                  path: "/technology",
                  element: (0, Le.jsx)(
                    He,
                    {
                      setprogress: this.setprogress,
                      apiKey: this.apiKey,
                      pageSize: this.pageSize,
                      country: "in",
                      category: "technology",
                    },
                    "technology"
                  ),
                }),
              ],
            }),
          ],
        }),
      });
    }
  }
  const Xe = (e) => {
    e &&
      e instanceof Function &&
      n
        .e(453)
        .then(n.bind(n, 453))
        .then((t) => {
          let { getCLS: n, getFID: r, getFCP: a, getLCP: l, getTTFB: o } = t;
          n(e), r(e), a(e), l(e), o(e);
        });
  };
  o
    .createRoot(document.getElementById("root"))
    .render((0, Le.jsx)(a.StrictMode, { children: (0, Le.jsx)(qe, {}) })),
    Xe();
})();
//# sourceMappingURL=main.fec9a5ed.js.map
