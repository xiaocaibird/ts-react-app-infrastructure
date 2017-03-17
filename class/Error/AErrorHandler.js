"use strict";
var AErrorHandler = (function () {
    function AErrorHandler() {
        this.customLogFun = defaultLogFun;
        this.hasPendingGlobalError = false;
    }
    AErrorHandler.prototype.setLogFun = function (fun) {
        this.customLogFun = fun;
    };
    AErrorHandler.prototype.log = function (error) {
        try {
            if (typeof this.customLogFun === 'function')
                this.customLogFun(error);
        }
        catch (e) {
        }
    };
    return AErrorHandler;
}());
exports.AErrorHandler = AErrorHandler;
var defaultLogFun = function (_error) {
    console.warn('There are some errors.Please set custom Error Log method.');
};
