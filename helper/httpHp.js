"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var httpHp;
(function (httpHp) {
    httpHp.contentType = {
        json: 'application/json',
        form: 'application/x-www-form-urlencoded'
    };
    httpHp.getUrlParams = function (url) {
        var result = {};
        if (!url)
            return result;
        try {
            url.trim().split('?')[1].split('&').forEach(function (v) {
                var s = v.split('=');
                if (s[0]) {
                    result[s[0]] = s[1] && decodeURIComponent(s[1]);
                }
            });
        }
        catch (e) {
        }
        return result;
    };
    httpHp.createUrlParamsStr = function (obj) {
        if (!obj)
            return '';
        return Object.keys(obj).map(function (v) {
            return v + "=" + encodeURIComponent(obj[v]);
        }).join('&');
    };
    httpHp.createFormData = function (obj) {
        if (!obj)
            return null;
        var formData = new FormData();
        Object.keys(obj).forEach(function (v) {
            formData.append(v, obj[v]);
        });
        return formData;
    };
    httpHp.httpType = {
        post: 'POST',
        get: 'GET'
    };
})(httpHp = exports.httpHp || (exports.httpHp = {}));
