"use strict";
var AErrorHandler = (function () {
    function AErrorHandler() {
        this.logMixin = defaultLogError;
        this.isHasAppGlobalError = false;
    }
    AErrorHandler.prototype.setLogMixin = function (mixin) {
        if (mixin)
            this.logMixin = mixin;
    };
    AErrorHandler.prototype.log = function (error) {
        try {
            console.log('error log');
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
};
