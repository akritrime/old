require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({14:[function(require,module,exports) {

},{}],7:[function(require,module,exports) {
"use strict";require("normalize.css"),require("./index.scss"),require("./animation.css");var e=Date.now(),t=new Event("type"),i=function(){var t=window.performance&&performance.timing;return t?t.loadEventEnd-t.navigationStart:Date.now()-e};window.addEventListener("load",function(){setTimeout(function(){var e=document.querySelector("#footer_text");e.classList.add("slide-in-bottom"),e.textContent="Page loaded in "+i()/1e3+" secs."},0);var e=document.querySelector("header");e.classList.remove("hidden"),e.classList.add("slide-in-top");var n=document.querySelector("#name"),s=document.querySelector("#greet"),r=document.querySelector("h1");n.classList.remove("hidden"),s.classList.add("slide-in-left"),r.classList.add("text-focus-in"),tag.classList.add("slide-in-right"),tag.style.animationDelay="0.5s",s.style.animationDelay="0.5s",setTimeout(function(){return tag.dispatchEvent(t)},2e3),setTimeout(function(){var e=document.querySelector("#intro");e.classList.remove("hidden"),Array.from(e.querySelector("div").children).forEach(function(e,t){e.style.animationDelay=(.1*t+"s").toString(),e.classList.add("slide-in-top")});var t=document.querySelector("#skills");t.classList.remove("hidden"),Array.from(t.querySelector("div").children).forEach(function(e,t){e.style.animationDelay=(.12*t+"s").toString(),e.classList.add("slide-in-bottom")})},1500)});
},{"normalize.css":14,"./index.scss":14,"./animation.css":14}]},{},[7])