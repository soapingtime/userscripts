// ==UserScript==
// @name          eruda
// @namespace     https://eruda.liriliri.io/
// @description   Console for mobile browsers
// @copyright     2016-present, liriliri (https://github.com/liriliri)
// @license       MIT
// @homepageURL   https://eruda.liriliri.io/
// @require       https://cdn.jsdelivr.net/npm/eruda@latest/eruda.js
// @run-at        document-idle
// @match         *://*/*
// @noframes
// ==/UserScript==

eruda.init
eruda.add(eruda.console);
