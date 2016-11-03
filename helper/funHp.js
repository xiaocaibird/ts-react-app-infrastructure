"use strict";
var funHp;
(function (funHp) {
    funHp.noop = function () { };
    funHp.isFun = function (fn) {
        return (typeof fn === 'function');
    };
    funHp.isExtendsClass = function (sonClass, fatherClass) {
        try {
            return fatherClass.prototype.isPrototypeOf(sonClass.prototype);
        }
        catch (e) {
            return false;
        }
    };
})(funHp = exports.funHp || (exports.funHp = {}));
