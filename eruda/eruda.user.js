// ==UserScript==
// @name          eruda
// @namespace     https://eruda.liriliri.io/
// @description   Console for mobile browsers
// @copyright     2016-present, liriliri (https://github.com/liriliri)
// @license       MIT
// @version       1.0
// @homepageURL   https://eruda.liriliri.io/
// @require       https://cdn.jsdelivr.net/npm/eruda@latest/eruda.js
// @require       https://cdn.jsdelivr.net/npm/eruda-code@latest/eruda-code.min.js
// @require       https://raw.githack.com/uplusion23/eruda-dom/a5c4f12ef608f749effec2436e72ed5cc219df98/eruda-dom.min.js
// @run-at        document-idle
// @match         *://*/*
// @noframes
// ==/UserScript==

eruda.init({
    tool:'console,elements,network,resources,sources,info,snippets'.split(',')
});

eruda.add(erudaDom);
eruda.add(erudaCode)
