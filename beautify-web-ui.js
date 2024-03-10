// ==UserScript==
// @name         Beautify Web UI
// @namespace    http://tampermonkey.net/
// @version      0.3
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
    
    div.GgZHQbhCPZYqXVil_nkc:nth-of-type(1){
        width: 50%;
    }
    div.GgZHQbhCPZYqXVil_nkc:nth-of-type(2){
        width: 50%;
        margin-left: -50%;
    }
    div.GgZHQbhCPZYqXVil_nkc:nth-of-type(3){
        margin-left: -93%;
    }
    .autboP_xS3EJZt4GoTeY {
        display: none !important;
    }
    .prompt-container, .el-aside {
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