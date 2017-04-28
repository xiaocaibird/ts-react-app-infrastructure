"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorHp;
(function (errorHp) {
    var logFun;
    errorHp.setLogFun = function (fun) {
        logFun = fun;
    };
    errorHp.log = function (err) {
        try {
            if (typeof logFun === 'function')
                logFun(err);
        }
        catch (e) {
            console.log(e);
        }
    };
})(errorHp = exports.errorHp || (exports.errorHp = {}));
