// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1PuWz":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "7adaf749b367b95bdef2c209649a5f11";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
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
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
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
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
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
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
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
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"4YwNL":[function(require,module,exports) {
var define;
(function e(t, n) {
  if (typeof exports === "object" && typeof module === "object") module.exports = n(); else if (typeof define === "function" && define.amd) define([], n); else if (typeof exports === "object") exports["Swup"] = n(); else t["Swup"] = n();
})(window, function () {
  return (function (e) {
    var t = {};
    function n(r) {
      if (t[r]) {
        return t[r].exports;
      }
      var i = t[r] = {
        i: r,
        l: false,
        exports: {}
      };
      e[r].call(i.exports, i, i.exports, n);
      i.l = true;
      return i.exports;
    }
    n.m = e;
    n.c = t;
    n.d = function (e, t, r) {
      if (!n.o(e, t)) {
        Object.defineProperty(e, t, {
          enumerable: true,
          get: r
        });
      }
    };
    n.r = function (e) {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        });
      }
      Object.defineProperty(e, "__esModule", {
        value: true
      });
    };
    n.t = function (e, t) {
      if (t & 1) e = n(e);
      if (t & 8) return e;
      if (t & 4 && typeof e === "object" && e && e.__esModule) return e;
      var r = Object.create(null);
      n.r(r);
      Object.defineProperty(r, "default", {
        enumerable: true,
        value: e
      });
      if (t & 2 && typeof e != "string") for (var i in e) n.d(r, i, (function (t) {
        return e[t];
      }).bind(null, i));
      return r;
    };
    n.n = function (e) {
      var t = e && e.__esModule ? function t() {
        return e["default"];
      } : function t() {
        return e;
      };
      n.d(t, "a", t);
      return t;
    };
    n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    };
    n.p = "";
    return n(n.s = 2);
  })([function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    t.Link = t.markSwupElements = t.getCurrentUrl = t.transitionEnd = t.fetch = t.getDataFromHtml = t.createHistoryRecord = t.classify = undefined;
    var r = n(8);
    var i = w(r);
    var a = n(9);
    var o = w(a);
    var s = n(10);
    var u = w(s);
    var l = n(11);
    var c = w(l);
    var f = n(12);
    var d = w(f);
    var h = n(13);
    var p = w(h);
    var v = n(14);
    var g = w(v);
    var m = n(15);
    var y = w(m);
    function w(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var b = t.classify = i.default;
    var E = t.createHistoryRecord = o.default;
    var P = t.getDataFromHtml = u.default;
    var _ = t.fetch = c.default;
    var k = t.transitionEnd = d.default;
    var S = t.getCurrentUrl = p.default;
    var O = t.markSwupElements = g.default;
    var j = t.Link = y.default;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var r = t.query = function e(t) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
      if (typeof t !== "string") {
        return t;
      }
      return n.querySelector(t);
    };
    var i = t.queryAll = function e(t) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
      if (typeof t !== "string") {
        return t;
      }
      return Array.prototype.slice.call(n.querySelectorAll(t));
    };
  }, function (e, t, n) {
    "use strict";
    var r = n(3);
    var i = a(r);
    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    e.exports = i.default;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var r = Object.assign || (function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) {
          if (Object.prototype.hasOwnProperty.call(n, r)) {
            e[r] = n[r];
          }
        }
      }
      return e;
    });
    var i = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false;
          r.configurable = true;
          if (("value" in r)) r.writable = true;
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        if (n) e(t.prototype, n);
        if (r) e(t, r);
        return t;
      };
    })();
    var a = n(4);
    var o = M(a);
    var s = n(6);
    var u = M(s);
    var l = n(7);
    var c = M(l);
    var f = n(16);
    var d = M(f);
    var h = n(17);
    var p = M(h);
    var v = n(18);
    var g = M(v);
    var m = n(19);
    var y = M(m);
    var w = n(20);
    var b = M(w);
    var E = n(21);
    var P = M(E);
    var _ = n(22);
    var k = M(_);
    var S = n(23);
    var O = n(1);
    var j = n(0);
    function M(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function H(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var L = (function () {
      function e(t) {
        H(this, e);
        var n = {
          animateHistoryBrowsing: false,
          animationSelector: '[class*="transition-"]',
          linkSelector: 'a[href^="' + window.location.origin + '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
          cache: true,
          containers: ["#swup"],
          requestHeaders: {
            "X-Requested-With": "swup",
            Accept: "text/html, application/xhtml+xml"
          },
          plugins: [],
          skipPopStateHandling: function e(t) {
            return !(t.state && t.state.source === "swup");
          }
        };
        var i = r({}, n, t);
        this._handlers = {
          animationInDone: [],
          animationInStart: [],
          animationOutDone: [],
          animationOutStart: [],
          animationSkipped: [],
          clickLink: [],
          contentReplaced: [],
          disabled: [],
          enabled: [],
          openPageInNewTab: [],
          pageLoaded: [],
          pageRetrievedFromCache: [],
          pageView: [],
          popState: [],
          samePage: [],
          samePageWithHash: [],
          serverError: [],
          transitionStart: [],
          transitionEnd: [],
          willReplaceContent: []
        };
        this.scrollToElement = null;
        this.preloadPromise = null;
        this.options = i;
        this.plugins = [];
        this.transition = {};
        this.delegatedListeners = {};
        this.boundPopStateHandler = this.popStateHandler.bind(this);
        this.cache = new u.default();
        this.cache.swup = this;
        this.loadPage = c.default;
        this.renderPage = d.default;
        this.triggerEvent = p.default;
        this.on = g.default;
        this.off = y.default;
        this.updateTransition = b.default;
        this.getAnimationPromises = P.default;
        this.getPageData = k.default;
        this.log = function () {};
        this.use = S.use;
        this.unuse = S.unuse;
        this.findPlugin = S.findPlugin;
        this.enable();
      }
      i(e, [{
        key: "enable",
        value: function e() {
          var t = this;
          if (typeof Promise === "undefined") {
            console.warn("Promise is not supported");
            return;
          }
          this.delegatedListeners.click = (0, o.default)(document, this.options.linkSelector, "click", this.linkClickHandler.bind(this));
          window.addEventListener("popstate", this.boundPopStateHandler);
          var n = (0, j.getDataFromHtml)(document.documentElement.outerHTML, this.options.containers);
          n.url = n.responseURL = (0, j.getCurrentUrl)();
          if (this.options.cache) {
            this.cache.cacheUrl(n);
          }
          (0, j.markSwupElements)(document.documentElement, this.options.containers);
          this.options.plugins.forEach(function (e) {
            t.use(e);
          });
          window.history.replaceState(Object.assign({}, window.history.state, {
            url: window.location.href,
            random: Math.random(),
            source: "swup"
          }), document.title, window.location.href);
          this.triggerEvent("enabled");
          document.documentElement.classList.add("swup-enabled");
          this.triggerEvent("pageView");
        }
      }, {
        key: "destroy",
        value: function e() {
          var t = this;
          this.delegatedListeners.click.destroy();
          window.removeEventListener("popstate", this.boundPopStateHandler);
          this.cache.empty();
          this.options.plugins.forEach(function (e) {
            t.unuse(e);
          });
          (0, O.queryAll)("[data-swup]").forEach(function (e) {
            e.removeAttribute("data-swup");
          });
          this.off();
          this.triggerEvent("disabled");
          document.documentElement.classList.remove("swup-enabled");
        }
      }, {
        key: "linkClickHandler",
        value: function e(t) {
          if (!t.metaKey && !t.ctrlKey && !t.shiftKey && !t.altKey) {
            if (t.button === 0) {
              this.triggerEvent("clickLink", t);
              t.preventDefault();
              var n = new j.Link(t.delegateTarget);
              if (n.getAddress() == (0, j.getCurrentUrl)() || n.getAddress() == "") {
                if (n.getHash() != "") {
                  this.triggerEvent("samePageWithHash", t);
                  var r = document.querySelector(n.getHash());
                  if (r != null) {
                    history.replaceState({
                      url: n.getAddress() + n.getHash(),
                      random: Math.random(),
                      source: "swup"
                    }, document.title, n.getAddress() + n.getHash());
                  } else {
                    console.warn("Element for offset not found (" + n.getHash() + ")");
                  }
                } else {
                  this.triggerEvent("samePage", t);
                }
              } else {
                if (n.getHash() != "") {
                  this.scrollToElement = n.getHash();
                }
                var i = t.delegateTarget.getAttribute("data-swup-transition");
                this.loadPage({
                  url: n.getAddress(),
                  customTransition: i
                }, false);
              }
            }
          } else {
            this.triggerEvent("openPageInNewTab", t);
          }
        }
      }, {
        key: "popStateHandler",
        value: function e(t) {
          if (this.options.skipPopStateHandling(t)) return;
          var n = new j.Link(t.state ? t.state.url : window.location.pathname);
          if (n.getHash() !== "") {
            this.scrollToElement = n.getHash();
          } else {
            t.preventDefault();
          }
          this.triggerEvent("popState", t);
          this.loadPage({
            url: n.getAddress()
          }, t);
        }
      }]);
      return e;
    })();
    t.default = L;
  }, function (e, t, n) {
    var r = n(5);
    function i(e, t, n, r, i) {
      var o = a.apply(this, arguments);
      e.addEventListener(n, o, i);
      return {
        destroy: function () {
          e.removeEventListener(n, o, i);
        }
      };
    }
    function a(e, t, n, i) {
      return function (n) {
        n.delegateTarget = r(n.target, t);
        if (n.delegateTarget) {
          i.call(e, n);
        }
      };
    }
    e.exports = i;
  }, function (e, t) {
    var n = 9;
    if (typeof Element !== "undefined" && !Element.prototype.matches) {
      var r = Element.prototype;
      r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector;
    }
    function i(e, t) {
      while (e && e.nodeType !== n) {
        if (typeof e.matches === "function" && e.matches(t)) {
          return e;
        }
        e = e.parentNode;
      }
    }
    e.exports = i;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var r = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false;
          r.configurable = true;
          if (("value" in r)) r.writable = true;
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        if (n) e(t.prototype, n);
        if (r) e(t, r);
        return t;
      };
    })();
    function i(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var a = t.Cache = (function () {
      function e() {
        i(this, e);
        this.pages = {};
        this.last = null;
      }
      r(e, [{
        key: "cacheUrl",
        value: function e(t) {
          if ((t.url in this.pages) === false) {
            this.pages[t.url] = t;
          }
          this.last = this.pages[t.url];
          this.swup.log("Cache (" + Object.keys(this.pages).length + ")", this.pages);
        }
      }, {
        key: "getPage",
        value: function e(t) {
          return this.pages[t];
        }
      }, {
        key: "getCurrentPage",
        value: function e() {
          return this.getPage(window.location.pathname + window.location.search);
        }
      }, {
        key: "exists",
        value: function e(t) {
          return (t in this.pages);
        }
      }, {
        key: "empty",
        value: function e() {
          this.pages = {};
          this.last = null;
          this.swup.log("Cache cleared");
        }
      }, {
        key: "remove",
        value: function e(t) {
          delete this.pages[t];
        }
      }]);
      return e;
    })();
    t.default = a;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var r = Object.assign || (function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) {
          if (Object.prototype.hasOwnProperty.call(n, r)) {
            e[r] = n[r];
          }
        }
      }
      return e;
    });
    var i = n(0);
    var a = function e(t, n) {
      var a = this;
      var o = [], s = void 0;
      var u = function e() {
        a.triggerEvent("animationOutStart");
        document.documentElement.classList.add("is-changing");
        document.documentElement.classList.add("is-leaving");
        document.documentElement.classList.add("is-animating");
        if (n) {
          document.documentElement.classList.add("is-popstate");
        }
        document.documentElement.classList.add("to-" + (0, i.classify)(t.url));
        o = a.getAnimationPromises("out");
        Promise.all(o).then(function () {
          a.triggerEvent("animationOutDone");
        });
        if (!n) {
          var r = void 0;
          if (a.scrollToElement != null) {
            r = t.url + a.scrollToElement;
          } else {
            r = t.url;
          }
          (0, i.createHistoryRecord)(r);
        }
      };
      this.triggerEvent("transitionStart", n);
      if (t.customTransition != null) {
        this.updateTransition(window.location.pathname, t.url, t.customTransition);
        document.documentElement.classList.add("to-" + (0, i.classify)(t.customTransition));
      } else {
        this.updateTransition(window.location.pathname, t.url);
      }
      if (!n || this.options.animateHistoryBrowsing) {
        u();
      } else {
        this.triggerEvent("animationSkipped");
      }
      if (this.cache.exists(t.url)) {
        s = new Promise(function (e) {
          e();
        });
        this.triggerEvent("pageRetrievedFromCache");
      } else {
        if (!this.preloadPromise || this.preloadPromise.route != t.url) {
          s = new Promise(function (e, n) {
            (0, i.fetch)(r({}, t, {
              headers: a.options.requestHeaders
            }), function (r) {
              if (r.status === 500) {
                a.triggerEvent("serverError");
                n(t.url);
                return;
              } else {
                var i = a.getPageData(r);
                if (i != null) {
                  i.url = t.url;
                } else {
                  n(t.url);
                  return;
                }
                a.cache.cacheUrl(i);
                a.triggerEvent("pageLoaded");
              }
              e();
            });
          });
        } else {
          s = this.preloadPromise;
        }
      }
      Promise.all(o.concat([s])).then(function () {
        a.renderPage(a.cache.getPage(t.url), n);
        a.preloadPromise = null;
      }).catch(function (e) {
        a.options.skipPopStateHandling = function () {
          window.location = e;
          return true;
        };
        window.history.go(-1);
      });
    };
    t.default = a;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var r = function e(t) {
      var n = t.toString().toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
      if (n[0] === "/") n = n.splice(1);
      if (n === "") n = "homepage";
      return n;
    };
    t.default = r;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var r = function e(t) {
      window.history.pushState({
        url: t || window.location.href.split(window.location.hostname)[1],
        random: Math.random(),
        source: "swup"
      }, document.getElementsByTagName("title")[0].innerText, t || window.location.href.split(window.location.hostname)[1]);
    };
    t.default = r;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var r = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (e) {
      return typeof e;
    } : function (e) {
      return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    var i = n(1);
    var a = function e(t, n) {
      var a = document.createElement("html");
      a.innerHTML = t;
      var o = [];
      var s = function e(t) {
        if (a.querySelector(n[t]) == null) {
          return {
            v: null
          };
        } else {
          (0, i.queryAll)(n[t]).forEach(function (e, r) {
            (0, i.queryAll)(n[t], a)[r].setAttribute("data-swup", o.length);
            o.push((0, i.queryAll)(n[t], a)[r].outerHTML);
          });
        }
      };
      for (var u = 0; u < n.length; u++) {
        var l = s(u);
        if ((typeof l === "undefined" ? "undefined" : r(l)) === "object") return l.v;
      }
      var c = {
        title: a.querySelector("title").innerText,
        pageClass: a.querySelector("body").className,
        originalContent: t,
        blocks: o
      };
      a.innerHTML = "";
      a = null;
      return c;
    };
    t.default = a;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var r = Object.assign || (function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) {
          if (Object.prototype.hasOwnProperty.call(n, r)) {
            e[r] = n[r];
          }
        }
      }
      return e;
    });
    var i = function e(t) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var i = {
        url: window.location.pathname + window.location.search,
        method: "GET",
        data: null,
        headers: {}
      };
      var a = r({}, i, t);
      var o = new XMLHttpRequest();
      o.onreadystatechange = function () {
        if (o.readyState === 4) {
          if (o.status !== 500) {
            n(o);
          } else {
            n(o);
          }
        }
      };
      o.open(a.method, a.url, true);
      Object.keys(a.headers).forEach(function (e) {
        o.setRequestHeader(e, a.headers[e]);
      });
      o.send(a.data);
      return o;
    };
    t.default = i;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var r = function e() {
      var t = document.createElement("div");
      var n = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
      };
      for (var r in n) {
        if (t.style[r] !== undefined) {
          return n[r];
        }
      }
      return false;
    };
    t.default = r;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var r = function e() {
      return window.location.pathname + window.location.search;
    };
    t.default = r;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var r = n(1);
    var i = function e(t, n) {
      var i = 0;
      var a = function e(a) {
        if (t.querySelector(n[a]) == null) {
          console.warn("Element " + n[a] + " is not in current page.");
        } else {
          (0, r.queryAll)(n[a]).forEach(function (e, o) {
            (0, r.queryAll)(n[a], t)[o].setAttribute("data-swup", i);
            i++;
          });
        }
      };
      for (var o = 0; o < n.length; o++) {
        a(o);
      }
    };
    t.default = i;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var r = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false;
          r.configurable = true;
          if (("value" in r)) r.writable = true;
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        if (n) e(t.prototype, n);
        if (r) e(t, r);
        return t;
      };
    })();
    function i(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var a = (function () {
      function e(t) {
        i(this, e);
        if (t instanceof Element || t instanceof SVGElement) {
          this.link = t;
        } else {
          this.link = document.createElement("a");
          this.link.href = t;
        }
      }
      r(e, [{
        key: "getPath",
        value: function e() {
          var t = this.link.pathname;
          if (t[0] !== "/") {
            t = "/" + t;
          }
          return t;
        }
      }, {
        key: "getAddress",
        value: function e() {
          var t = this.link.pathname + this.link.search;
          if (this.link.getAttribute("xlink:href")) {
            t = this.link.getAttribute("xlink:href");
          }
          if (t[0] !== "/") {
            t = "/" + t;
          }
          return t;
        }
      }, {
        key: "getHash",
        value: function e() {
          return this.link.hash;
        }
      }]);
      return e;
    })();
    t.default = a;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var r = Object.assign || (function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) {
          if (Object.prototype.hasOwnProperty.call(n, r)) {
            e[r] = n[r];
          }
        }
      }
      return e;
    });
    var i = n(1);
    var a = n(0);
    var o = function e(t, n) {
      var i = this;
      document.documentElement.classList.remove("is-leaving");
      var o = new a.Link(t.responseURL);
      if (window.location.pathname !== o.getPath()) {
        window.history.replaceState({
          url: o.getPath(),
          random: Math.random(),
          source: "swup"
        }, document.title, o.getPath());
        this.cache.cacheUrl(r({}, t, {
          url: o.getPath()
        }));
      }
      if (!n || this.options.animateHistoryBrowsing) {
        document.documentElement.classList.add("is-rendering");
      }
      this.triggerEvent("willReplaceContent", n);
      for (var s = 0; s < t.blocks.length; s++) {
        document.body.querySelector('[data-swup="' + s + '"]').outerHTML = t.blocks[s];
      }
      document.title = t.title;
      this.triggerEvent("contentReplaced", n);
      this.triggerEvent("pageView", n);
      if (!this.options.cache) {
        this.cache.empty();
      }
      setTimeout(function () {
        if (!n || i.options.animateHistoryBrowsing) {
          i.triggerEvent("animationInStart");
          document.documentElement.classList.remove("is-animating");
        }
      }, 10);
      if (!n || this.options.animateHistoryBrowsing) {
        var u = this.getAnimationPromises("in");
        Promise.all(u).then(function () {
          i.triggerEvent("animationInDone");
          i.triggerEvent("transitionEnd", n);
          document.documentElement.className.split(" ").forEach(function (e) {
            if (new RegExp("^to-").test(e) || e === "is-changing" || e === "is-rendering" || e === "is-popstate") {
              document.documentElement.classList.remove(e);
            }
          });
        });
      } else {
        this.triggerEvent("transitionEnd", n);
      }
      this.scrollToElement = null;
    };
    t.default = o;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var r = function e(t, n) {
      this._handlers[t].forEach(function (e) {
        try {
          e(n);
        } catch (e) {
          console.error(e);
        }
      });
      var r = new CustomEvent("swup:" + t, {
        detail: t
      });
      document.dispatchEvent(r);
    };
    t.default = r;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var r = function e(t, n) {
      if (this._handlers[t]) {
        this._handlers[t].push(n);
      } else {
        console.warn("Unsupported event " + t + ".");
      }
    };
    t.default = r;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var r = function e(t, n) {
      var r = this;
      if (t != null) {
        if (n != null) {
          if (this._handlers[t] && this._handlers[t].filter(function (e) {
            return e === n;
          }).length) {
            var i = this._handlers[t].filter(function (e) {
              return e === n;
            })[0];
            var a = this._handlers[t].indexOf(i);
            if (a > -1) {
              this._handlers[t].splice(a, 1);
            }
          } else {
            console.warn("Handler for event '" + t + "' no found.");
          }
        } else {
          this._handlers[t] = [];
        }
      } else {
        Object.keys(this._handlers).forEach(function (e) {
          r._handlers[e] = [];
        });
      }
    };
    t.default = r;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var r = function e(t, n, r) {
      this.transition = {
        from: t,
        to: n,
        custom: r
      };
    };
    t.default = r;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var r = n(1);
    var i = n(0);
    var a = function e() {
      var t = [];
      var n = (0, r.queryAll)(this.options.animationSelector);
      n.forEach(function (e) {
        var n = new Promise(function (t) {
          e.addEventListener((0, i.transitionEnd)(), function (n) {
            if (e == n.target) {
              t();
            }
          });
        });
        t.push(n);
      });
      return t;
    };
    t.default = a;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var r = n(0);
    var i = function e(t) {
      var n = t.responseText;
      var i = (0, r.getDataFromHtml)(n, this.options.containers);
      if (i) {
        i.responseURL = t.responseURL ? t.responseURL : window.location.href;
      } else {
        console.warn("Received page is invalid.");
        return null;
      }
      return i;
    };
    t.default = i;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var r = t.use = function e(t) {
      if (!t.isSwupPlugin) {
        console.warn("Not swup plugin instance " + t + ".");
        return;
      }
      this.plugins.push(t);
      t.swup = this;
      if (typeof t._beforeMount === "function") {
        t._beforeMount();
      }
      t.mount();
      return this.plugins;
    };
    var i = t.unuse = function e(t) {
      var n = void 0;
      if (typeof t === "string") {
        n = this.plugins.find(function (e) {
          return t === e.name;
        });
      } else {
        n = t;
      }
      if (!n) {
        console.warn("No such plugin.");
        return;
      }
      n.unmount();
      if (typeof n._afterUnmount === "function") {
        n._afterUnmount();
      }
      var r = this.plugins.indexOf(n);
      this.plugins.splice(r, 1);
      return this.plugins;
    };
    var a = t.findPlugin = function e(t) {
      return this.plugins.find(function (e) {
        return t === e.name;
      });
    };
  }]);
});

},{}]},["1PuWz","4YwNL"], "4YwNL", "parcelRequire29a8")

//# sourceMappingURL=arduino.649a5f11.js.map
