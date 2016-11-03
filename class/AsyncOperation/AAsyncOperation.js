"use strict";
var AAsyncOperation = (function () {
    function AAsyncOperation() {
    }
    AAsyncOperation.prototype.run = function (task, successCallBack, failCallBack, prepareFun, finallyFun) {
        var _this = this;
        if (typeof prepareFun === 'function') {
            prepareFun();
        }
        else {
            this.prepare();
        }
        return task().then(function () {
            if (typeof successCallBack === 'function') {
                successCallBack();
            }
            else {
                _this.success();
            }
            if (typeof finallyFun === 'function') {
                finallyFun();
            }
            else {
                _this.finally();
            }
        }, function () {
            if (typeof failCallBack === 'function') {
                failCallBack();
            }
            else {
                _this.fail();
            }
            if (typeof finallyFun === 'function') {
                finallyFun();
            }
            else {
                _this.finally();
            }
        });
    };
    AAsyncOperation.prototype.createPromise = function (fun) {
        return new Promise(fun);
    };
    AAsyncOperation.prototype.getResolve = function (param) {
        return Promise.resolve(param);
    };
    AAsyncOperation.prototype.getReject = function (param) {
        return Promise.reject(param);
    };
    return AAsyncOperation;
}());
exports.AAsyncOperation = AAsyncOperation;
