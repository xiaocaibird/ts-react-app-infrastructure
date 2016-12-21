"use strict";
var funHp;
(function (funHp) {
    funHp.noop = function () { };
    funHp.isFun = function (fn) {
        return (typeof fn === 'function');
    };
    funHp.isExtendsClass = function (sonClass, fatherClass) {
        if (sonClass && fatherClass) {
            return fatherClass.prototype.isPrototypeOf(sonClass.prototype);
        }
        else {
            return false;
        }
    };
})(funHp = exports.funHp || (exports.funHp = {}));
