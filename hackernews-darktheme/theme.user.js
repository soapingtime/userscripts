// ==UserScript==
// @name              Hacker News - Dark Theme
// @namespace         https://github.com/dparpyani
// @description       Dark theme for hacker news
// @match             https://news.ycombinator.com/*
// @require           https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js
// @icon              data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KICA8c3ZnIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJyZ2IoMjU1LCAxMDIsIDApIj48L3JlY3Q+CiAgICA8cGF0aCBkPSJNIDUwIDc3IEwgNTAgNTAgIiBmaWxsPSJub25lIiBzdHJva2U9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlLXdpZHRoPSIxMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiPgogICAgPC9wYXRoPgogICAgPHBhdGggZD0iTSA5NCAzNS42MjI3NDU1MTM5MTYwMTYgTCA3MS4yNDU0ODMzOTg0Mzc1IDcxLjI0NTQ4MzM5ODQzNzUgIiBmaWxsPSJub25lIiBzdHJva2U9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlLXdpZHRoPSIxMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgLTIxLjI0NTUgLTIxLjI0NTUpIj4KICAgIDwvcGF0aD4KICAgIDxwYXRoIGQ9Ik0gLTc4IDM2LjE3MDI4MDQ1NjU0Mjk3IEwgLTU1LjY3MTE4ODM1NDQ5MjE5IDcxLjc5MzAwNjg5Njk3MjY2ICIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1saW5lY2FwPSJidXR0IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDEwNS4zOTYgLTIxLjcyMTMpIj4KICAgIDwvcGF0aD4KICAgIDxyZWN0IHRyYW5zZm9ybT0iIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjIwIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZT0ibm9uZSIgZmlsbD0iI0ZGNjYwMCIgc3Ryb2tlLW9wYWNpdHk9IjEiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiID4KICAgIDwvcmVjdD4KICA8L3N2Zz4KICA=
// @version           1.2
// ==/UserScript==

var loadScript = function (src, callback) {
  var elem = document.createElement('script');
  elem.type = 'text/javascript';
  elem.onload = callback;
  elem.src = src;
  document.body.appendChild(elem);
};

function start() {
  var locationIs = function (regex) {
    return window.location.href.match(regex);
  };

  var config = {
    textAreaBg: '#E0E0E0',
    textAreaLeftBorder: '12px solid #CCCCCC',

// adblock, from https://github.com/brownie-in-motion/hn-adblock

const FIX_NUMBERING = false;

[...(document.querySelector('table.itemList')?.rows ?? [])]
  .reduce((a, _r, i, rows) => (i % 3 ? a : [...a, rows.slice(i, i + 3)]), [])
  .filter((row) => row.length === 3)
  .filter(([title]) => !title.querySelector('td.votelinks'))
  .forEach((rows) => rows.forEach((row) => row.remove()));

if (FIX_NUMBERING) {
  document
    .querySelectorAll('span.rank')
    .forEach?.((s, i) => s.textContent && (s.textContent = `${i + 1}.`));
}
