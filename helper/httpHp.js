"use strict";
var httpHp;
(function (httpHp) {
    httpHp.getUrlParams = function (url) {
        var result = {};
        if (!url)
            return result;
        var s = url.split('?');
        if (!s[1])
            return result;
        var params = s[1].split('&');
        if (!params || params.length <= 0)
            return result;
        params.forEach(function (v) {
            var str = v.split('=');
            if (str[0]) {
                result[str[0]] = decodeURIComponent(str[1]);
            }
        });
        return result;
    };
})(httpHp = exports.httpHp || (exports.httpHp = {}));
