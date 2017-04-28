"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("../../helper");
var AErrorHandler = (function () {
    function AErrorHandler(customLogFun) {
        if (customLogFun === void 0) { customLogFun = defaultLogFun; }
        this.hasPendingGlobalError = false;
        helper_1.errorHp.setLogFun(customLogFun);
    }
    AErrorHandler.prototype.log = function (error) {
        helper_1.errorHp.log(error);
    };
    return AErrorHandler;
}());
exports.AErrorHandler = AErrorHandler;
var defaultLogFun = function (_error) {
    console.warn('There are some errors.Please set custom Error Log method.');
};
