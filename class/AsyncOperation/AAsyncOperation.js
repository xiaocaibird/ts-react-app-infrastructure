"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("../../helper");
var AAsyncOperation = (function () {
    function AAsyncOperation() {
        this.createPromise = helper_1.promiseHp.createPromise;
        this.getResolve = helper_1.promiseHp.getResolve;
        this.getReject = helper_1.promiseHp.getReject;
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
    return AAsyncOperation;
}());
exports.AAsyncOperation = AAsyncOperation;
