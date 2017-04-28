"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promiseHp;
(function (promiseHp) {
    promiseHp.createPromise = function (fun) {
        return new Promise(fun);
    };
    promiseHp.getResolve = function (param) {
        return Promise.resolve(param);
    };
    promiseHp.getReject = function (param) {
        return Promise.reject(param);
    };
})(promiseHp = exports.promiseHp || (exports.promiseHp = {}));
