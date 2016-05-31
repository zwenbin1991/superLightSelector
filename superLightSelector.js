// 简洁DOM选择器，兼容chrome、ff、ie6-11
// author: 法克
// data:

'use strict';

;(function (root) {
    var isSupportQuerySelector = !!document.querySelector;
    var previous$ = root.$;
    var $ = {};

    // 解决命名冲突
    $.noConflict = function () {
        root.$ = previous$;
        return this;
    };

    /**
     * DOM选择器
     *
     * @param {String} selector 选择器
     * @return {Array} 元素数组
     */
    $.find = function (selector) {
        var ret = [], cssStyleSheets, firstCSSStyleSheet, allElements, element, i, length;

        if (isSupportQuerySelector) {
            ret = document.querySelectorAll(selector);
        } else {
            //ie6-8
            cssStyleSheets = document.styleSheets;
            firstCSSStyleSheet = cssStyleSheets.length ? cssStyleSheets[0] : document.createStyleSheet();
            selector = selector.split(',');

            // 将传入的选择器插入到CSS中
            for (i = 0, length = selector.length; i < length; i++) {
                firstCSSStyleSheet.addRule(selector[i], 'Test:zwb');
            }

            // 遍历页面DOM元素，是否存在为设置的样式，如果存在，则存入
            for (i = 0, allElements = document.all, length = allElements.length; i < length; i++) {
                (element = (allElements[i])).currentStyle.Test && ret.push(element);
            }

            firstCSSStyleSheet.removeRule(firstCSSStyleSheet.rules.length - 1);
        }

        return ret;
    };

    root.$ = $;
})(window);