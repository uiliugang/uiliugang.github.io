// ==UserScript==
// @name         Beautify Web UI
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Inject your custom CSS into a web page, iframe will also be impacted
// @author       Newgun
// @match        https://www.coze.com/space/*
// @match        https://chatglm.cn/main/alltoolsdetail
// @match        https://www.freeok.vip
// @match        https://www.freeok.pro
// @match        https://feedly.com/*
// @downloadURL  https://raw.githubusercontent.com/uiliugang/uiliugang.github.io/main/beautify-web-ui.js
// @updateURL    https://raw.githubusercontent.com/uiliugang/uiliugang.github.io/main/beautify-web-ui.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const css = `
    body, html {
     min-height: unset !important;
     min-width: unset !important;
    }

    .LayerBuilderInResults__entries > div:nth-child(2), .LayerBuilderBeyondResults__entries > div:nth-child(2){
        display: none;
    }

    .LeftnavList {
        margin-left: 50px;
    }
    .LeftnavDock {
        width: 50px;
    }

    ._y05dJu0HEE4KDXQl_02 {
        margin-bottom: 30px;
    }

    .GgZHQbhCPZYqXVil_nkc {
     margin-left: 24px;
    }
    .GgZHQbhCPZYqXVil_nkc.yXFrvezYn_4mi6bhSzMN {
    width: 300%;
    }
    div.GgZHQbhCPZYqXVil_nkc:nth-of-type(1),
    div.GgZHQbhCPZYqXVil_nkc:nth-of-type(2),
    .autboP_xS3EJZt4GoTeY {
        display: none !important;
    }
    .aside .logo-wrap[data-v-37c807ee], .aside[data-v-37c807ee], .popupShow,
    .popup, .semi-portal, .aside .logo-wrap[data-v-a3a1df90], .aside[data-v-a3a1df90]{
        display: none !important;
    }
    `;

    // Create a style element
    const style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));

    // Append the style element to head
    document.head.appendChild(style);
})();