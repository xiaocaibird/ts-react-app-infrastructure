"use strict";
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
})(strHp = exports.strHp || (exports.strHp = {}));
