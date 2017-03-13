"use strict";
var AErrorHandler = (function () {
    function AErrorHandler() {
        this.logMixin = defaultLogError;
        this.hasPendingGlobalError = false;
    }
    AErrorHandler.prototype.setLogMixin = function (mixin) {
        this.logMixin = mixin;
    };
    AErrorHandler.prototype.log = function (error) {
        try {
            if (typeof this.logMixin === 'function')
                this.logMixin(error);
        }
        catch (e) {
        }
    };
    return AErrorHandler;
}());
exports.AErrorHandler = AErrorHandler;
var defaultLogError = function (_error) {
    console.warn('There are some errors.Please set custom Error Log method.');
};
