!function(){var e,t,n,i={};t=window,n=function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Link=t.markSwupElements=t.getCurrentUrl=t.transitionEnd=t.fetch=t.getDataFromHtml=t.createHistoryRecord=t.classify=void 0;var i=d(n(8)),o=d(n(9)),r=d(n(10)),a=d(n(11)),s=d(n(12)),u=d(n(13)),l=d(n(14)),c=d(n(15));function d(e){return e&&e.__esModule?e:{default:e}}t.classify=i.default,t.createHistoryRecord=o.default,t.getDataFromHtml=r.default,t.fetch=a.default,t.transitionEnd=s.default,t.getCurrentUrl=u.default,t.markSwupElements=l.default,t.Link=c.default},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.query=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"string"!=typeof e?e:t.querySelector(e)},t.queryAll=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"string"!=typeof e?e:Array.prototype.slice.call(t.querySelectorAll(e))}},function(e,t,n){var i=function(e){return e&&e.__esModule?e:{default:e}}(n(3));e.exports=i.default},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=y(n(4)),a=y(n(6)),s=y(n(7)),u=y(n(16)),l=y(n(17)),c=y(n(18)),d=y(n(19)),f=y(n(20)),h=y(n(21)),p=y(n(22)),g=n(23),m=n(1),v=n(0);function y(e){return e&&e.__esModule?e:{default:e}}var w=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n={animateHistoryBrowsing:!1,animationSelector:'[class*="transition-"]',linkSelector:'a[href^="'+window.location.origin+'"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',cache:!0,containers:["#swup"],requestHeaders:{"X-Requested-With":"swup",Accept:"text/html, application/xhtml+xml"},plugins:[],skipPopStateHandling:function(e){return!(e.state&&"swup"===e.state.source)}},o=i({},n,t);this._handlers={animationInDone:[],animationInStart:[],animationOutDone:[],animationOutStart:[],animationSkipped:[],clickLink:[],contentReplaced:[],disabled:[],enabled:[],openPageInNewTab:[],pageLoaded:[],pageRetrievedFromCache:[],pageView:[],popState:[],samePage:[],samePageWithHash:[],serverError:[],transitionStart:[],transitionEnd:[],willReplaceContent:[]},this.scrollToElement=null,this.preloadPromise=null,this.options=o,this.plugins=[],this.transition={},this.delegatedListeners={},this.boundPopStateHandler=this.popStateHandler.bind(this),this.cache=new a.default,this.cache.swup=this,this.loadPage=s.default,this.renderPage=u.default,this.triggerEvent=l.default,this.on=c.default,this.off=d.default,this.updateTransition=f.default,this.getAnimationPromises=h.default,this.getPageData=p.default,this.log=function(){},this.use=g.use,this.unuse=g.unuse,this.findPlugin=g.findPlugin,this.enable()}return o(e,[{key:"enable",value:function(){var e=this;if("undefined"!=typeof Promise){this.delegatedListeners.click=(0,r.default)(document,this.options.linkSelector,"click",this.linkClickHandler.bind(this)),window.addEventListener("popstate",this.boundPopStateHandler);var t=(0,v.getDataFromHtml)(document.documentElement.outerHTML,this.options.containers);t.url=t.responseURL=(0,v.getCurrentUrl)(),this.options.cache&&this.cache.cacheUrl(t),(0,v.markSwupElements)(document.documentElement,this.options.containers),this.options.plugins.forEach((function(t){e.use(t)})),window.history.replaceState(Object.assign({},window.history.state,{url:window.location.href,random:Math.random(),source:"swup"}),document.title,window.location.href),this.triggerEvent("enabled"),document.documentElement.classList.add("swup-enabled"),this.triggerEvent("pageView")}else console.warn("Promise is not supported")}},{key:"destroy",value:function(){var e=this;this.delegatedListeners.click.destroy(),window.removeEventListener("popstate",this.boundPopStateHandler),this.cache.empty(),this.options.plugins.forEach((function(t){e.unuse(t)})),(0,m.queryAll)("[data-swup]").forEach((function(e){e.removeAttribute("data-swup")})),this.off(),this.triggerEvent("disabled"),document.documentElement.classList.remove("swup-enabled")}},{key:"linkClickHandler",value:function(e){if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)this.triggerEvent("openPageInNewTab",e);else if(0===e.button){this.triggerEvent("clickLink",e),e.preventDefault();var t=new v.Link(e.delegateTarget);if(t.getAddress()==(0,v.getCurrentUrl)()||""==t.getAddress())""!=t.getHash()?(this.triggerEvent("samePageWithHash",e),null!=document.querySelector(t.getHash())?history.replaceState({url:t.getAddress()+t.getHash(),random:Math.random(),source:"swup"},document.title,t.getAddress()+t.getHash()):console.warn("Element for offset not found ("+t.getHash()+")")):this.triggerEvent("samePage",e);else{""!=t.getHash()&&(this.scrollToElement=t.getHash());var n=e.delegateTarget.getAttribute("data-swup-transition");this.loadPage({url:t.getAddress(),customTransition:n},!1)}}}},{key:"popStateHandler",value:function(e){if(!this.options.skipPopStateHandling(e)){var t=new v.Link(e.state?e.state.url:window.location.pathname);""!==t.getHash()?this.scrollToElement=t.getHash():e.preventDefault(),this.triggerEvent("popState",e),this.loadPage({url:t.getAddress()},e)}}}]),e}();t.default=w},function(e,t,n){var i=n(5);function o(e,t,n,o){return function(n){n.delegateTarget=i(n.target,t),n.delegateTarget&&o.call(e,n)}}e.exports=function(e,t,n,i,r){var a=o.apply(this,arguments);return e.addEventListener(n,a,r),{destroy:function(){e.removeEventListener(n,a,r)}}}},function(e,t){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=t.Cache=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.pages={},this.last=null}return i(e,[{key:"cacheUrl",value:function(e){e.url in this.pages==0&&(this.pages[e.url]=e),this.last=this.pages[e.url],this.swup.log("Cache ("+Object.keys(this.pages).length+")",this.pages)}},{key:"getPage",value:function(e){return this.pages[e]}},{key:"getCurrentPage",value:function(){return this.getPage(window.location.pathname+window.location.search)}},{key:"exists",value:function(e){return e in this.pages}},{key:"empty",value:function(){this.pages={},this.last=null,this.swup.log("Cache cleared")}},{key:"remove",value:function(e){delete this.pages[e]}}]),e}();t.default=o},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=n(0);t.default=function(e,t){var n=this,r=[],a=void 0;this.triggerEvent("transitionStart",t),null!=e.customTransition?(this.updateTransition(window.location.pathname,e.url,e.customTransition),document.documentElement.classList.add("to-"+(0,o.classify)(e.customTransition))):this.updateTransition(window.location.pathname,e.url),!t||this.options.animateHistoryBrowsing?function(){if(n.triggerEvent("animationOutStart"),document.documentElement.classList.add("is-changing"),document.documentElement.classList.add("is-leaving"),document.documentElement.classList.add("is-animating"),t&&document.documentElement.classList.add("is-popstate"),document.documentElement.classList.add("to-"+(0,o.classify)(e.url)),r=n.getAnimationPromises("out"),Promise.all(r).then((function(){n.triggerEvent("animationOutDone")})),!t){var i=void 0;i=null!=n.scrollToElement?e.url+n.scrollToElement:e.url,(0,o.createHistoryRecord)(i)}}():this.triggerEvent("animationSkipped"),this.cache.exists(e.url)?(a=new Promise((function(e){e()})),this.triggerEvent("pageRetrievedFromCache")):a=this.preloadPromise&&this.preloadPromise.route==e.url?this.preloadPromise:new Promise((function(t,r){(0,o.fetch)(i({},e,{headers:n.options.requestHeaders}),(function(i){if(500===i.status)return n.triggerEvent("serverError"),void r(e.url);var o=n.getPageData(i);null!=o?(o.url=e.url,n.cache.cacheUrl(o),n.triggerEvent("pageLoaded"),t()):r(e.url)}))})),Promise.all(r.concat([a])).then((function(){n.renderPage(n.cache.getPage(e.url),t),n.preloadPromise=null})).catch((function(e){n.options.skipPopStateHandling=function(){return window.location=e,!0},window.history.go(-1)}))}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.toString().toLowerCase().replace(/\s+/g,"-").replace(/\//g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"");return"/"===t[0]&&(t=t.splice(1)),""===t&&(t="homepage"),t}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){window.history.pushState({url:e||window.location.href.split(window.location.hostname)[1],random:Math.random(),source:"swup"},document.getElementsByTagName("title")[0].innerText,e||window.location.href.split(window.location.hostname)[1])}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(1);t.default=function(e,t){var n=document.createElement("html");n.innerHTML=e;for(var r=[],a=function(e){if(null==n.querySelector(t[e]))return{v:null};(0,o.queryAll)(t[e]).forEach((function(i,a){(0,o.queryAll)(t[e],n)[a].setAttribute("data-swup",r.length),r.push((0,o.queryAll)(t[e],n)[a].outerHTML)}))},s=0;s<t.length;s++){var u=a(s);if("object"===(void 0===u?"undefined":i(u)))return u.v}var l={title:n.querySelector("title").innerText,pageClass:n.querySelector("body").className,originalContent:e,blocks:r};return n.innerHTML="",n=null,l}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={url:window.location.pathname+window.location.search,method:"GET",data:null,headers:{}},o=i({},n,e),r=new XMLHttpRequest;return r.onreadystatechange=function(){4===r.readyState&&(r.status,t(r))},r.open(o.method,o.url,!0),Object.keys(o.headers).forEach((function(e){r.setRequestHeader(e,o.headers[e])})),r.send(o.data),r}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=document.createElement("div"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in t)if(void 0!==e.style[n])return t[n];return!1}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return window.location.pathname+window.location.search}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var i=n(1);t.default=function(e,t){for(var n=0,o=function(o){null==e.querySelector(t[o])?console.warn("Element "+t[o]+" is not in current page."):(0,i.queryAll)(t[o]).forEach((function(r,a){(0,i.queryAll)(t[o],e)[a].setAttribute("data-swup",n),n++}))},r=0;r<t.length;r++)o(r)}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t instanceof Element||t instanceof SVGElement?this.link=t:(this.link=document.createElement("a"),this.link.href=t)}return i(e,[{key:"getPath",value:function(){var e=this.link.pathname;return"/"!==e[0]&&(e="/"+e),e}},{key:"getAddress",value:function(){var e=this.link.pathname+this.link.search;return this.link.getAttribute("xlink:href")&&(e=this.link.getAttribute("xlink:href")),"/"!==e[0]&&(e="/"+e),e}},{key:"getHash",value:function(){return this.link.hash}}]),e}();t.default=o},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=(n(1),n(0));t.default=function(e,t){var n=this;document.documentElement.classList.remove("is-leaving");var r=new o.Link(e.responseURL);window.location.pathname!==r.getPath()&&(window.history.replaceState({url:r.getPath(),random:Math.random(),source:"swup"},document.title,r.getPath()),this.cache.cacheUrl(i({},e,{url:r.getPath()}))),t&&!this.options.animateHistoryBrowsing||document.documentElement.classList.add("is-rendering"),this.triggerEvent("willReplaceContent",t);for(var a=0;a<e.blocks.length;a++)document.body.querySelector('[data-swup="'+a+'"]').outerHTML=e.blocks[a];if(document.title=e.title,this.triggerEvent("contentReplaced",t),this.triggerEvent("pageView",t),this.options.cache||this.cache.empty(),setTimeout((function(){t&&!n.options.animateHistoryBrowsing||(n.triggerEvent("animationInStart"),document.documentElement.classList.remove("is-animating"))}),10),!t||this.options.animateHistoryBrowsing){var s=this.getAnimationPromises("in");Promise.all(s).then((function(){n.triggerEvent("animationInDone"),n.triggerEvent("transitionEnd",t),document.documentElement.className.split(" ").forEach((function(e){(new RegExp("^to-").test(e)||"is-changing"===e||"is-rendering"===e||"is-popstate"===e)&&document.documentElement.classList.remove(e)}))}))}else this.triggerEvent("transitionEnd",t);this.scrollToElement=null}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){this._handlers[e].forEach((function(e){try{e(t)}catch(e){console.error(e)}}));var n=new CustomEvent("swup:"+e,{detail:e});document.dispatchEvent(n)}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){this._handlers[e]?this._handlers[e].push(t):console.warn("Unsupported event "+e+".")}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=this;if(null!=e)if(null!=t)if(this._handlers[e]&&this._handlers[e].filter((function(e){return e===t})).length){var i=this._handlers[e].filter((function(e){return e===t}))[0],o=this._handlers[e].indexOf(i);o>-1&&this._handlers[e].splice(o,1)}else console.warn("Handler for event '"+e+"' no found.");else this._handlers[e]=[];else Object.keys(this._handlers).forEach((function(e){n._handlers[e]=[]}))}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){this.transition={from:e,to:t,custom:n}}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=n(0);t.default=function(){var e=[];return(0,i.queryAll)(this.options.animationSelector).forEach((function(t){var n=new Promise((function(e){t.addEventListener((0,o.transitionEnd)(),(function(n){t==n.target&&e()}))}));e.push(n)})),e}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var i=n(0);t.default=function(e){var t=e.responseText,n=(0,i.getDataFromHtml)(t,this.options.containers);return n?(n.responseURL=e.responseURL?e.responseURL:window.location.href,n):(console.warn("Received page is invalid."),null)}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.use=function(e){if(e.isSwupPlugin)return this.plugins.push(e),e.swup=this,"function"==typeof e._beforeMount&&e._beforeMount(),e.mount(),this.plugins;console.warn("Not swup plugin instance "+e+".")},t.unuse=function(e){var t=void 0;if(t="string"==typeof e?this.plugins.find((function(t){return e===t.name})):e){t.unmount(),"function"==typeof t._afterUnmount&&t._afterUnmount();var n=this.plugins.indexOf(t);return this.plugins.splice(n,1),this.plugins}console.warn("No such plugin.")},t.findPlugin=function(e){return this.plugins.find((function(t){return e===t.name}))}}])},"object"==typeof i?i=n():"object"==typeof i?(e=n(),i.Swup=e):t.Swup=n()}();
//# sourceMappingURL=index.5aa7b126.js.map