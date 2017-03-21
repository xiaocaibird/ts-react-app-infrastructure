"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var strHp;
(function (strHp) {
    strHp.isString = function (obj) {
        return (typeof obj === 'string');
    };
    strHp.toJson = function (str) {
        if (!str)
            return null;
        try {
            return JSON.parse(str);
        }
        catch (e) {
            return null;
        }
    };
    strHp.equalNoMatchCase = function (a, b) {
        return a.toLowerCase() === b.toLowerCase();
    };
    strHp.subText = function (s, maxLength, diffSBC, suffix) {
        if (diffSBC === void 0) { diffSBC = true; }
        if (suffix === void 0) { suffix = '..'; }
        if (diffSBC) {
            var l = 0;
            var a = '';
            for (var i = 0; i < s.length; i++) {
                if (s.charCodeAt(i) > 128) {
                    l += 2;
                }
                else {
                    l += 1;
                }
                if (l <= maxLength)
                    a += s[i];
                else {
                    a += suffix;
                    break;
                }
            }
            return a;
        }
        else {
            return s.length > maxLength ? s.slice(0, maxLength) + suffix : s;
        }
    };
})(strHp = exports.strHp || (exports.strHp = {}));
