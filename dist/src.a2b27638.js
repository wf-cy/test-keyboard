// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/simple-keyboard/build/index.js":[function(require,module,exports) {
var define;
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * 
 *   simple-keyboard v2.23.2
 *   https://github.com/hodgef/simple-keyboard
 * 
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *   
 */
!function (t, e) {
  "object" === (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" === (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = e() : "function" === typeof define && define.amd ? define("SimpleKeyboard", [], e) : "object" === (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.SimpleKeyboard = e() : t.SimpleKeyboard = e();
}(window, function () {
  return function (t) {
    var e = {};

    function n(o) {
      if (e[o]) return e[o].exports;
      var i = e[o] = {
        i: o,
        l: !1,
        exports: {}
      };
      return t[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }

    return n.m = t, n.c = e, n.d = function (t, e, o) {
      n.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: o
      });
    }, n.r = function (t) {
      "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, n.t = function (t, e) {
      if (1 & e && (t = n(t)), 8 & e) return t;
      if (4 & e && "object" === _typeof(t) && t && t.__esModule) return t;
      var o = Object.create(null);
      if (n.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var i in t) {
        n.d(o, i, function (e) {
          return t[e];
        }.bind(null, i));
      }
      return o;
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return n.d(e, "a", e), e;
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "", n(n.s = 0);
  }([function (t, e, n) {
    t.exports = n(2);
  }, function (t, e, n) {}, function (t, e, n) {
    "use strict";

    n.r(e);
    n(1);

    function o(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }

    var i = function () {
      function t(e) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.simpleKeyboardInstance = e, this.initKeyboardListener = this.initKeyboardListener.bind(this), this.getSimpleKeyboardLayoutKey = this.getSimpleKeyboardLayoutKey.bind(this), this.initKeyboardListener();
      }

      var e, n, i;
      return e = t, (n = [{
        key: "initKeyboardListener",
        value: function value() {
          var t = this;
          document.addEventListener("keydown", function (e) {
            if (t.simpleKeyboardInstance.options.physicalKeyboardHighlight) {
              var n = t.getSimpleKeyboardLayoutKey(e);
              t.simpleKeyboardInstance.dispatch(function (e) {
                var o = e.getButtonElement(n) || e.getButtonElement("{".concat(n, "}"));
                o && (o.style.backgroundColor = t.simpleKeyboardInstance.options.physicalKeyboardHighlightBgColor || "#9ab4d0", o.style.color = t.simpleKeyboardInstance.options.physicalKeyboardHighlightTextColor || "white");
              });
            }
          }), document.addEventListener("keyup", function (e) {
            if (t.simpleKeyboardInstance.options.physicalKeyboardHighlight) {
              var n = t.getSimpleKeyboardLayoutKey(e);
              t.simpleKeyboardInstance.dispatch(function (t) {
                var e = t.getButtonElement(n) || t.getButtonElement("{".concat(n, "}"));
                e && e.removeAttribute && e.removeAttribute("style");
              });
            }
          });
        }
      }, {
        key: "getSimpleKeyboardLayoutKey",
        value: function value(t) {
          var e;
          return ((e = t.code.includes("Numpad") || t.code.includes("Shift") || t.code.includes("Space") || t.code.includes("Backspace") || t.code.includes("Control") || t.code.includes("Alt") || t.code.includes("Meta") ? t.code : t.key) !== e.toUpperCase() || "F" === t.code[0] && Number.isInteger(Number(t.code[1])) && t.code.length <= 3) && (e = e.toLowerCase()), e;
        }
      }]) && o(e.prototype, n), i && o(e, i), t;
    }();

    function s(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }

    var a = function () {
      function t() {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t);
      }

      var e, n, o;
      return e = t, o = [{
        key: "getDefaultLayout",
        value: function value() {
          return {
            default: ["` 1 2 3 4 5 6 7 8 9 0 - = {bksp}", "{tab} q w e r t y u i o p [ ] \\", "{lock} a s d f g h j k l ; ' {enter}", "{shift} z x c v b n m , . / {shift}", ".com @ {space}"],
            shift: ["~ ! @ # $ % ^ & * ( ) _ + {bksp}", "{tab} Q W E R T Y U I O P { } |", '{lock} A S D F G H J K L : " {enter}', "{shift} Z X C V B N M < > ? {shift}", ".com @ {space}"]
          };
        }
      }], (n = null) && s(e.prototype, n), o && s(e, o), t;
    }();

    function u(t) {
      return (u = "function" === typeof Symbol && "symbol" === _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }

    function r(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }

    var c = function () {
      function t(e) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.simpleKeyboardInstance = e, t.bindMethods(t, this);
      }

      var e, n, o;
      return e = t, o = [{
        key: "bindMethods",
        value: function value(t, e) {
          var n = !0,
              o = !1,
              i = void 0;

          try {
            for (var s, a = Object.getOwnPropertyNames(t.prototype)[Symbol.iterator](); !(n = (s = a.next()).done); n = !0) {
              var u = s.value;
              "constructor" === u || "bindMethods" === u || (e[u] = e[u].bind(e));
            }
          } catch (r) {
            o = !0, i = r;
          } finally {
            try {
              n || null == a.return || a.return();
            } finally {
              if (o) throw i;
            }
          }
        }
      }], (n = [{
        key: "getButtonClass",
        value: function value(t) {
          var e = t.includes("{") && t.includes("}") && "{//}" !== t ? "functionBtn" : "standardBtn",
              n = t.replace("{", "").replace("}", ""),
              o = "";
          return "standardBtn" !== e && (o = " hg-button-".concat(n)), "hg-".concat(e).concat(o);
        }
      }, {
        key: "getDefaultDiplay",
        value: function value() {
          return {
            "{bksp}": "backspace",
            "{backspace}": "backspace",
            "{enter}": "< enter",
            "{shift}": "shift",
            "{shiftleft}": "shift",
            "{shiftright}": "shift",
            "{alt}": "alt",
            "{s}": "shift",
            "{tab}": "tab",
            "{lock}": "caps",
            "{capslock}": "caps",
            "{accept}": "Submit",
            "{space}": " ",
            "{//}": " ",
            "{esc}": "esc",
            "{escape}": "esc",
            "{f1}": "f1",
            "{f2}": "f2",
            "{f3}": "f3",
            "{f4}": "f4",
            "{f5}": "f5",
            "{f6}": "f6",
            "{f7}": "f7",
            "{f8}": "f8",
            "{f9}": "f9",
            "{f10}": "f10",
            "{f11}": "f11",
            "{f12}": "f12",
            "{numpaddivide}": "/",
            "{numlock}": "lock",
            "{arrowup}": "\u2191",
            "{arrowleft}": "\u2190",
            "{arrowdown}": "\u2193",
            "{arrowright}": "\u2192",
            "{prtscr}": "print",
            "{scrolllock}": "scroll",
            "{pause}": "pause",
            "{insert}": "ins",
            "{home}": "home",
            "{pageup}": "up",
            "{delete}": "del",
            "{end}": "end",
            "{pagedown}": "down",
            "{numpadmultiply}": "*",
            "{numpadsubtract}": "-",
            "{numpadadd}": "+",
            "{numpadenter}": "enter",
            "{period}": ".",
            "{numpaddecimal}": ".",
            "{numpad0}": "0",
            "{numpad1}": "1",
            "{numpad2}": "2",
            "{numpad3}": "3",
            "{numpad4}": "4",
            "{numpad5}": "5",
            "{numpad6}": "6",
            "{numpad7}": "7",
            "{numpad8}": "8",
            "{numpad9}": "9"
          };
        }
      }, {
        key: "getButtonDisplayName",
        value: function value(t, e, n) {
          return (e = n ? Object.assign({}, this.getDefaultDiplay(), e) : e || this.getDefaultDiplay())[t] || t;
        }
      }, {
        key: "getUpdatedInput",
        value: function value(t, e, n, o, i) {
          var s = e;
          return ("{bksp}" === t || "{backspace}" === t) && s.length > 0 ? s = this.removeAt(s, o, i) : "{space}" === t ? s = this.addStringAt(s, " ", o, i) : "{tab}" !== t || "boolean" === typeof n.tabCharOnTab && !1 === n.tabCharOnTab ? "{enter}" !== t && "{numpadenter}" !== t || !n.newLineOnEnter ? t.includes("numpad") && Number.isInteger(Number(t[t.length - 2])) ? s = this.addStringAt(s, t[t.length - 2], o, i) : "{numpaddivide}" === t ? s = this.addStringAt(s, "/", o, i) : "{numpadmultiply}" === t ? s = this.addStringAt(s, "*", o, i) : "{numpadsubtract}" === t ? s = this.addStringAt(s, "-", o, i) : "{numpadadd}" === t ? s = this.addStringAt(s, "+", o, i) : "{numpaddecimal}" === t ? s = this.addStringAt(s, ".", o, i) : "{" === t || "}" === t ? s = this.addStringAt(s, t, o, i) : t.includes("{") || t.includes("}") || (s = this.addStringAt(s, t, o, i)) : s = this.addStringAt(s, "\n", o, i) : s = this.addStringAt(s, "\t", o, i), s;
        }
      }, {
        key: "updateCaretPos",
        value: function value(t, e) {
          var n = this.updateCaretPosAction(this.simpleKeyboardInstance, t, e);
          this.simpleKeyboardInstance.options.syncInstanceInputs && this.simpleKeyboardInstance.dispatch(function (t) {
            t.caretPosition = n;
          });
        }
      }, {
        key: "updateCaretPosAction",
        value: function value(t, e, n) {
          return n ? t.caretPosition > 0 && (t.caretPosition = t.caretPosition - e) : t.caretPosition = t.caretPosition + e, this.simpleKeyboardInstance.options.debug && console.log("Caret at:", t.caretPosition, "(".concat(t.keyboardDOMClass, ")")), t.caretPosition;
        }
      }, {
        key: "addStringAt",
        value: function value(t, e, n, o) {
          var i;
          return n || 0 === n ? (i = [t.slice(0, n), e, t.slice(n)].join(""), this.isMaxLengthReached() || o && this.updateCaretPos(e.length)) : i = t + e, i;
        }
      }, {
        key: "removeAt",
        value: function value(t, e, n) {
          if (0 === this.simpleKeyboardInstance.caretPosition) return t;
          var o,
              i = /([\uD800-\uDBFF][\uDC00-\uDFFF])/g;
          return e && e >= 0 ? t.substring(e - 2, e).match(i) ? (o = t.substr(0, e - 2) + t.substr(e), n && this.updateCaretPos(2, !0)) : (o = t.substr(0, e - 1) + t.substr(e), n && this.updateCaretPos(1, !0)) : t.slice(-2).match(i) ? (o = t.slice(0, -2), n && this.updateCaretPos(2, !0)) : (o = t.slice(0, -1), n && this.updateCaretPos(1, !0)), o;
        }
      }, {
        key: "handleMaxLength",
        value: function value(t, e, n) {
          var o = e.maxLength,
              i = t[e.inputName],
              s = i.length === o;
          if (n.length <= i.length) return !1;
          if (Number.isInteger(o)) return e.debug && console.log("maxLength (num) reached:", s), s ? (this.maxLengthReached = !0, !0) : (this.maxLengthReached = !1, !1);

          if ("object" === u(o)) {
            var a = i.length === o[e.inputName];
            return e.debug && console.log("maxLength (obj) reached:", a), a ? (this.maxLengthReached = !0, !0) : (this.maxLengthReached = !1, !1);
          }
        }
      }, {
        key: "isMaxLengthReached",
        value: function value() {
          return Boolean(this.maxLengthReached);
        }
      }, {
        key: "isTouchDevice",
        value: function value() {
          return "ontouchstart" in window || navigator.maxTouchPoints;
        }
      }, {
        key: "pointerEventsSupported",
        value: function value() {
          return window.PointerEvent;
        }
      }, {
        key: "camelCase",
        value: function value(t) {
          return t.toLowerCase().trim().split(/[.\-_\s]/g).reduce(function (t, e) {
            return e.length ? t + e[0].toUpperCase() + e.slice(1) : t;
          });
        }
      }, {
        key: "countInArray",
        value: function value(t, e) {
          return t.reduce(function (t, n) {
            return t + (n === e);
          }, 0);
        }
      }]) && r(e.prototype, n), o && r(e, o), t;
    }();

    function l(t) {
      return (l = "function" === typeof Symbol && "symbol" === _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }

    function h(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }

    var d = function () {
      function t() {
        var e = this;
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.registerModule = function (t, n) {
          e.modules[t] || (e.modules[t] = {}), n(e.modules[t]);
        };
        var n = "string" === typeof (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : ".simple-keyboard",
            o = "object" === l(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1];
        if (o || (o = {}), this.utilities = new c(this), this.keyboardDOM = document.querySelector(n), this.options = o, this.options.layoutName = this.options.layoutName || "default", this.options.theme = this.options.theme || "hg-theme-default", this.options.inputName = this.options.inputName || "default", this.options.preventMouseDownDefault = this.options.preventMouseDownDefault || !1, this.keyboardPluginClasses = "", c.bindMethods(t, this), this.input = {}, this.input[this.options.inputName] = "", this.keyboardDOMClass = n.split(".").join(""), this.buttonElements = {}, !this.keyboardDOM) throw console.warn('"'.concat(n, '" was not found in the DOM.')), new Error("KEYBOARD_DOM_ERROR");
        this.render(), window.SimpleKeyboardInstances || (window.SimpleKeyboardInstances = {}), window.SimpleKeyboardInstances[this.utilities.camelCase(this.keyboardDOMClass)] = this, this.physicalKeyboardInterface = new i(this), this.modules = {}, this.loadModules();
      }

      var e, n, o;
      return e = t, (n = [{
        key: "handleButtonClicked",
        value: function value(t) {
          var e = this.options.debug;
          if ("{//}" === t) return !1;
          "function" === typeof this.options.onKeyPress && this.options.onKeyPress(t), this.input[this.options.inputName] || (this.input[this.options.inputName] = "");
          var n = this.utilities.getUpdatedInput(t, this.input[this.options.inputName], this.options, this.caretPosition);

          if (this.input[this.options.inputName] !== n && (!this.options.inputPattern || this.options.inputPattern && this.inputPatternIsValid(n))) {
            if (this.options.maxLength && this.utilities.handleMaxLength(this.input, this.options, n)) return !1;
            this.input[this.options.inputName] = this.utilities.getUpdatedInput(t, this.input[this.options.inputName], this.options, this.caretPosition, !0), e && console.log("Input changed:", this.input), this.options.syncInstanceInputs && this.syncInstanceInputs(this.input), "function" === typeof this.options.onChange && this.options.onChange(this.input[this.options.inputName]), "function" === typeof this.options.onChangeAll && this.options.onChangeAll(this.input);
          }

          e && console.log("Key pressed:", t);
        }
      }, {
        key: "handleButtonMouseDown",
        value: function value(t, e) {
          var n = this;
          this.options.preventMouseDownDefault && e.preventDefault(), this.options.stopMouseDownPropagation && e.stopPropagation(), this.isMouseHold = !0, this.holdInteractionTimeout && clearTimeout(this.holdInteractionTimeout), this.holdTimeout && clearTimeout(this.holdTimeout), this.options.disableButtonHold || (this.holdTimeout = setTimeout(function () {
            !n.isMouseHold || (t.includes("{") || t.includes("}")) && "{delete}" !== t && "{backspace}" !== t && "{bksp}" !== t && "{space}" !== t && "{tab}" !== t || (n.options.debug && console.log("Button held:", t), n.handleButtonHold(t, e)), clearTimeout(n.holdTimeout);
          }, 500));
        }
      }, {
        key: "handleButtonMouseUp",
        value: function value() {
          this.isMouseHold = !1, this.holdInteractionTimeout && clearTimeout(this.holdInteractionTimeout);
        }
      }, {
        key: "handleButtonHold",
        value: function value(t) {
          var e = this;
          this.holdInteractionTimeout && clearTimeout(this.holdInteractionTimeout), this.holdInteractionTimeout = setTimeout(function () {
            e.isMouseHold ? (e.handleButtonClicked(t), e.handleButtonHold(t)) : clearTimeout(e.holdInteractionTimeout);
          }, 100);
        }
      }, {
        key: "syncInstanceInputs",
        value: function value() {
          var t = this;
          this.dispatch(function (e) {
            e.replaceInput(t.input), e.caretPosition = t.caretPosition;
          });
        }
      }, {
        key: "clearInput",
        value: function value(t) {
          t = t || this.options.inputName, this.input[t] = "", this.caretPosition = 0, this.options.syncInstanceInputs && this.syncInstanceInputs(this.input);
        }
      }, {
        key: "getInput",
        value: function value(t) {
          return t = t || this.options.inputName, this.options.syncInstanceInputs && this.syncInstanceInputs(this.input), this.input[t];
        }
      }, {
        key: "setInput",
        value: function value(t, e) {
          e = e || this.options.inputName, this.input[e] = t, this.options.syncInstanceInputs && this.syncInstanceInputs(this.input);
        }
      }, {
        key: "replaceInput",
        value: function value(t) {
          this.input = t;
        }
      }, {
        key: "setOptions",
        value: function value(t) {
          t = t || {}, this.options = Object.assign(this.options, t), this.onSetOptions(t), this.render();
        }
      }, {
        key: "onSetOptions",
        value: function value(t) {
          t.inputName && (this.options.debug && console.log("inputName changed. caretPosition reset."), this.caretPosition = null);
        }
      }, {
        key: "clear",
        value: function value() {
          this.keyboardDOM.innerHTML = "", this.keyboardDOM.className = this.keyboardDOMClass, this.buttonElements = {};
        }
      }, {
        key: "dispatch",
        value: function value(t) {
          if (!window.SimpleKeyboardInstances) throw console.warn("SimpleKeyboardInstances is not defined. Dispatch cannot be called."), new Error("INSTANCES_VAR_ERROR");
          return Object.keys(window.SimpleKeyboardInstances).forEach(function (e) {
            t(window.SimpleKeyboardInstances[e], e);
          });
        }
      }, {
        key: "addButtonTheme",
        value: function value(t, e) {
          var n = this;
          if (!e || !t) return !1;
          t.split(" ").forEach(function (o) {
            e.split(" ").forEach(function (e) {
              n.options.buttonTheme || (n.options.buttonTheme = []);
              var i = !1;
              n.options.buttonTheme.map(function (t) {
                if (t.class.split(" ").includes(e)) {
                  i = !0;
                  var n = t.buttons.split(" ");
                  n.includes(o) || (i = !0, n.push(o), t.buttons = n.join(" "));
                }

                return t;
              }), i || n.options.buttonTheme.push({
                class: e,
                buttons: t
              });
            });
          }), this.render();
        }
      }, {
        key: "removeButtonTheme",
        value: function value(t, e) {
          var n = this;
          if (!t && !e) return this.options.buttonTheme = [], this.render(), !1;
          t && Array.isArray(this.options.buttonTheme) && this.options.buttonTheme.length && (t.split(" ").forEach(function (t, o) {
            n.options.buttonTheme.map(function (o, i) {
              if (e && e.includes(o.class) || !e) {
                var s = o.buttons.split(" ").filter(function (e) {
                  return e !== t;
                });
                s.length ? o.buttons = s.join(" ") : (n.options.buttonTheme.splice(i, 1), o = null);
              }

              return o;
            });
          }), this.render());
        }
      }, {
        key: "getButtonElement",
        value: function value(t) {
          var e,
              n = this.buttonElements[t];
          return n && (e = n.length > 1 ? n : n[0]), e;
        }
      }, {
        key: "inputPatternIsValid",
        value: function value(t) {
          var e,
              n = this.options.inputPattern;

          if ((e = n instanceof RegExp ? n : n[this.options.inputName]) && t) {
            var o = e.test(t);
            return this.options.debug && console.log('inputPattern ("'.concat(e, '"): ').concat(o ? "passed" : "did not pass!")), o;
          }

          return !0;
        }
      }, {
        key: "handleCaret",
        value: function value() {
          this.caretPosition = null;
          var t = window.SimpleKeyboardInstances;
          (t && Object.keys(t)[0] === this.utilities.camelCase(this.keyboardDOMClass) || !t) && (this.options.debug && console.log("Caret handling started (".concat(this.keyboardDOMClass, ")")), document.addEventListener("keyup", this.caretEventHandler), document.addEventListener("mouseup", this.caretEventHandler), document.addEventListener("touchend", this.caretEventHandler));
        }
      }, {
        key: "caretEventHandler",
        value: function value(t) {
          var e;
          t.target.tagName && (e = t.target.tagName.toLowerCase()), this.dispatch(function (n) {
            n.isMouseHold && (n.isMouseHold = !1), "textarea" !== e && "input" !== e || n.options.disableCaretPositioning ? n.options.disableCaretPositioning && (n.caretPosition = null) : (n.caretPosition = t.target.selectionStart, n.options.debug && console.log("Caret at: ", t.target.selectionStart, t.target.tagName.toLowerCase(), "(".concat(n.keyboardDOMClass, ")")));
          });
        }
      }, {
        key: "destroy",
        value: function value() {
          document.removeEventListener("keyup", this.caretEventHandler), document.removeEventListener("mouseup", this.caretEventHandler), document.removeEventListener("touchend", this.caretEventHandler), this.clear();
        }
      }, {
        key: "getButtonTheme",
        value: function value() {
          var t = this,
              e = {};
          return this.options.buttonTheme.forEach(function (n) {
            var o;
            n.buttons && n.class ? ("string" === typeof n.buttons && (o = n.buttons.split(" ")), o && o.forEach(function (o) {
              var i = e[o];
              i ? t.utilities.countInArray(i.split(" "), n.class) || (e[o] = "".concat(i, " ").concat(n.class)) : e[o] = n.class;
            })) : console.warn('buttonTheme row is missing the "buttons" or the "class". Please check the documentation.');
          }), e;
        }
      }, {
        key: "onTouchDeviceDetected",
        value: function value() {
          this.processAutoTouchEvents(), this.disableContextualWindow();
        }
      }, {
        key: "disableContextualWindow",
        value: function value() {
          window.oncontextmenu = function (t) {
            if (t.target.classList.contains("hg-button")) return t.preventDefault(), t.stopPropagation(), !1;
          };
        }
      }, {
        key: "processAutoTouchEvents",
        value: function value() {
          this.options.autoUseTouchEvents && (this.options.useTouchEvents = !0, this.options.debug && console.log("autoUseTouchEvents: Touch device detected, useTouchEvents enabled."));
        }
      }, {
        key: "onInit",
        value: function value() {
          this.options.debug && console.log("".concat(this.keyboardDOMClass, " Initialized")), this.handleCaret(), "function" === typeof this.options.onInit && this.options.onInit();
        }
      }, {
        key: "beforeFirstRender",
        value: function value() {
          this.utilities.isTouchDevice() && this.onTouchDeviceDetected(), "function" === typeof this.options.beforeFirstRender && this.options.beforeFirstRender(), !this.utilities.pointerEventsSupported() || this.options.useTouchEvents || this.options.useMouseEvents || this.options.debug && console.log("Using PointerEvents as it is supported by this browser"), this.options.useTouchEvents && this.options.debug && console.log("useTouchEvents has been enabled. Only touch events will be used.");
        }
      }, {
        key: "beforeRender",
        value: function value() {
          "function" === typeof this.options.beforeRender && this.options.beforeRender();
        }
      }, {
        key: "onRender",
        value: function value() {
          "function" === typeof this.options.onRender && this.options.onRender();
        }
      }, {
        key: "onModulesLoaded",
        value: function value() {
          "function" === typeof this.options.onModulesLoaded && this.options.onModulesLoaded();
        }
      }, {
        key: "loadModules",
        value: function value() {
          var t = this;
          Array.isArray(this.options.modules) && (this.options.modules.forEach(function (e) {
            var n = new e();

            if (n.constructor.name && "Function" !== n.constructor.name) {
              var o = "module-".concat(t.utilities.camelCase(n.constructor.name));
              t.keyboardPluginClasses = t.keyboardPluginClasses + " ".concat(o);
            }

            n.init(t);
          }), this.keyboardPluginClasses = this.keyboardPluginClasses + " modules-loaded", this.render(), this.onModulesLoaded());
        }
      }, {
        key: "getModuleProp",
        value: function value(t, e) {
          return !!this.modules[t] && this.modules[t][e];
        }
      }, {
        key: "getModulesList",
        value: function value() {
          return Object.keys(this.modules);
        }
      }, {
        key: "parseRowDOMContainers",
        value: function value(t, e, n, o) {
          var i = this,
              s = Array.from(t.children),
              a = 0;
          return s.length && n.forEach(function (n, u) {
            var r = o[u];
            if (!r || !(r > n)) return !1;
            var c = n - a,
                l = r - a,
                h = document.createElement("div");
            h.className += "hg-button-container";
            var d = "".concat(i.options.layoutName, "-r").concat(e, "c").concat(u);
            h.setAttribute("data-skUID", d);
            var p = s.splice(c, l - c + 1);
            a = l - c, p.forEach(function (t) {
              return h.appendChild(t);
            }), s.splice(c, 0, h), t.innerHTML = "", s.forEach(function (e) {
              return t.appendChild(e);
            }), i.options.debug && console.log("rowDOMContainer", p, c, l, a + 1);
          }), t;
        }
      }, {
        key: "render",
        value: function value() {
          var t = this;
          this.clear(), this.initialized || this.beforeFirstRender(), this.beforeRender();
          var e = "hg-layout-".concat(this.options.layoutName),
              n = this.options.layout || a.getDefaultLayout(),
              o = this.options.useTouchEvents || !1,
              i = o ? "hg-touch-events" : "",
              s = this.options.useMouseEvents || !1,
              u = this.options.disableRowButtonContainers,
              r = Array.isArray(this.options.buttonTheme) ? this.getButtonTheme() : {};
          this.keyboardDOM.className += " ".concat(this.options.theme, " ").concat(e, " ").concat(this.keyboardPluginClasses, " ").concat(i), n[this.options.layoutName].forEach(function (e, n) {
            var i = e.split(" "),
                a = document.createElement("div");
            a.className += "hg-row";
            var c = [],
                l = [];
            i.forEach(function (e, i) {
              var h = !u && e.includes("[") && e.length > 1,
                  d = !u && e.includes("]") && e.length > 1;
              h && (c.push(i), e = e.replace(/\[/g, "")), d && (l.push(i), e = e.replace(/\]/g, ""));
              var p = t.utilities.getButtonClass(e),
                  f = r[e],
                  m = t.utilities.getButtonDisplayName(e, t.options.display, t.options.mergeDisplay),
                  y = t.options.useButtonTag ? "button" : "div",
                  b = document.createElement(y);
              b.className += "hg-button ".concat(p).concat(f ? " " + f : ""), !t.utilities.pointerEventsSupported() || o || s ? o ? (b.ontouchstart = function (n) {
                t.handleButtonClicked(e), t.handleButtonMouseDown(e, n);
              }, b.ontouchend = function (e) {
                return t.handleButtonMouseUp();
              }, b.ontouchcancel = function (e) {
                return t.handleButtonMouseUp();
              }) : (b.onclick = function () {
                t.isMouseHold = !1, t.handleButtonClicked(e);
              }, b.onmousedown = function (n) {
                t.handleButtonMouseDown(e, n);
              }) : (b.onpointerdown = function (n) {
                t.handleButtonClicked(e), t.handleButtonMouseDown(e, n);
              }, b.onpointerup = function (e) {
                t.handleButtonMouseUp();
              }, b.onpointercancel = function (e) {
                return t.handleButtonMouseUp();
              }), b.setAttribute("data-skBtn", e);
              var v = "".concat(t.options.layoutName, "-r").concat(n, "b").concat(i);
              b.setAttribute("data-skBtnUID", v), b.setAttribute("data-displayLabel", m);
              var g = document.createElement("span");
              g.innerHTML = m, b.appendChild(g), t.buttonElements[e] || (t.buttonElements[e] = []), t.buttonElements[e].push(b), a.appendChild(b);
            }), a = t.parseRowDOMContainers(a, n, c, l), t.keyboardDOM.appendChild(a);
          }), this.onRender(), this.initialized || (this.initialized = !0, !this.utilities.pointerEventsSupported() || o || s ? o ? (document.ontouchend = function (e) {
            return t.handleButtonMouseUp();
          }, document.ontouchcancel = function (e) {
            return t.handleButtonMouseUp();
          }) : o || (document.onmouseup = function () {
            return t.handleButtonMouseUp();
          }) : document.onpointerup = function () {
            return t.handleButtonMouseUp();
          }, this.onInit());
        }
      }]) && h(e.prototype, n), o && h(e, o), t;
    }();

    e.default = d;
  }]);
});
},{}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"node_modules/simple-keyboard/build/css/index.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/index.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _simpleKeyboard = _interopRequireDefault(require("simple-keyboard"));

require("simple-keyboard/build/css/index.css");

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var keyboard = new _simpleKeyboard.default({
  onChange: function onChange(input) {
    return _onChange(input);
  },
  onKeyPress: function onKeyPress(button) {
    return _onKeyPress(button);
  }
});
/**
 * Update simple-keyboard when input is changed directly
 */

document.querySelector(".input").addEventListener("input", function (event) {
  keyboard.setInput(event.target.value);
});
console.log(keyboard);

function _onChange(input) {
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}

function _onKeyPress(button) {
  console.log("Button pressed", button);
  /**
   * If you want to handle the shift and caps lock buttons
   */

  if (button === "{shift}" || button === "{lock}") handleShift();
}

function handleShift() {
  var currentLayout = keyboard.options.layoutName;
  var shiftToggle = currentLayout === "default" ? "shift" : "default";
  keyboard.setOptions({
    layoutName: shiftToggle
  });
}
},{"simple-keyboard":"node_modules/simple-keyboard/build/index.js","simple-keyboard/build/css/index.css":"node_modules/simple-keyboard/build/css/index.css","./index.css":"src/index.css"}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63377" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map