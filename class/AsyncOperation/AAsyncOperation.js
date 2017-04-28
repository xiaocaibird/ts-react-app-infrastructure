"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("../../helper");
var AAsyncOperation = (function () {
    function AAsyncOperation() {
        this.createPromise = helper_1.promiseHp.createPromise;
        this.getResolve = helper_1.promiseHp.getResolve;
        this.getReject = helper_1.promiseHp.getReject;
    }
    AAsyncOperation.prototype.run = function (params) {
        var _this = this;
        if (typeof params === 'function') {
            this.prepare();
            return params().then(function (data) {
                _this.success(data);
                _this.final(data);
            }, function (err) {
                _this.fail(err);
                _this.final(err);
            });
        }
        else {
            var task = params.task, success_1 = params.success, fail_1 = params.fail, prepare = params.prepare, final_1 = params.final;
            if (typeof prepare === 'function') {
                prepare();
            }
            else {
                this.prepare();
            }
            return task().then(function (data) {
                if (typeof success_1 === 'function') {
                    success_1(data);
                }
                else {
                    _this.success(data);
                }
                if (typeof final_1 === 'function') {
                    final_1(data);
                }
                else {
                    _this.final(data);
                }
            }, function (err) {
                if (typeof fail_1 === 'function') {
                    fail_1(err);
                }
                else {
                    _this.fail(err);
                }
                if (typeof final_1 === 'function') {
                    final_1(err);
                }
                else {
                    _this.final(err);
                }
            });
        }
    };
    return AAsyncOperation;
}());
exports.AAsyncOperation = AAsyncOperation;
