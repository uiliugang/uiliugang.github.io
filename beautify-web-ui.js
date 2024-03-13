// ==UserScript==
// @name         Beautify Web UI
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Inject your custom CSS into a web page, iframe will also be impacted
// @author       Newgun
// @match        https://www.coze.com/space/*
// @match        https://chatglm.cn/main/alltoolsdetail
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

    .qMCHnhlnIcaAB1FfqxZm .NttQtYaOU4vI4AbDJgBb {
        min-height: 140px;
    }

    .KgJROcZ2QnNmfyxhsZvI .WOldSMY37_Moixx1AljK {
        padding-bottom: 0px !important;
    }

    div.GgZHQbhCPZYqXVil_nkc:nth-of-type(1){
        width: 280px;
        height: 250px;
        margin-left: 2px;
    }

    div.GgZHQbhCPZYqXVil_nkc:nth-of-type(2){
        width: 280px;
        position: absolute;
        margin-top: 250px;
    }

    div.GgZHQbhCPZYqXVil_nkc:nth-of-type(3){
        margin-left: 285px;
        position: absolute;
        width: calc(100% - 280px);
    }

    .z3k7GsdSO10mm3zerSMk {
        position: fixed;
        margin-top: -51px;
        margin-left: 92px;
        border-radius: 12px;
        box-shadow: 0 0 1px 0 rgba(0,0,0,.3), 0 4px 14px 0 rgba(0,0,0,.1);
    }

    .autboP_xS3EJZt4GoTeY {
        display: none !important;
    }
    .prompt-container, .el-aside, .semi-modal-mask {
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
