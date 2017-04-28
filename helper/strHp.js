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
    strHp.subText = function (params) {
        var str = params.str, maxLength = params.maxLength, _a = params.diffSBC, diffSBC = _a === void 0 ? true : _a, _b = params.suffix, suffix = _b === void 0 ? '..' : _b;
        if (diffSBC) {
            var l = 0;
            var a = '';
            for (var i = 0; i < str.length; i++) {
                if (str.charCodeAt(i) > 128) {
                    l += 2;
                }
                else {
                    l += 1;
                }
                if (l <= maxLength)
                    a += str[i];
                else {
                    a += suffix;
                    break;
                }
            }
            return a;
        }
        else {
            return str.length > maxLength ? str.slice(0, maxLength) + suffix : str;
        }
    };
})(strHp = exports.strHp || (exports.strHp = {}));
