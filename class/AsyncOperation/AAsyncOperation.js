"use strict";
var AAsyncOperation = (function () {
    function AAsyncOperation() {
    }
    AAsyncOperation.prototype.run = function (task, successCb, failCb, prepareCb, finallyCb) {
        var _this = this;
        if (typeof prepareCb === 'function') {
            prepareCb();
        }
        else {
            this.prepare();
        }
        return task().then(function () {
            if (typeof successCb === 'function') {
                successCb();
            }
            else {
                _this.success();
            }
            if (typeof finallyCb === 'function') {
                finallyCb();
            }
            else {
                _this.finally();
            }
        }, function () {
            if (typeof failCb === 'function') {
                failCb();
            }
            else {
                _this.fail();
            }
            if (typeof finallyCb === 'function') {
                finallyCb();
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
