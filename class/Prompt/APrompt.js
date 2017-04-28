"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var APrompt = (function () {
    function APrompt() {
    }
    APrompt.prototype.warningPopUp = function (params) {
        if (typeof params === 'string')
            return this.createPopUp('警告', params, 0);
        var msg = params.msg, _a = params.title, title = _a === void 0 ? '警告' : _a, callBack = params.callBack;
        return this.createPopUp(title, msg, 0, callBack);
    };
    APrompt.prototype.successPopUp = function (params) {
        if (typeof params === 'string')
            return this.createPopUp('操作成功', params, 3);
        var msg = params.msg, _a = params.title, title = _a === void 0 ? '操作成功' : _a, callBack = params.callBack;
        return this.createPopUp(title, msg, 3, callBack);
    };
    APrompt.prototype.infoPopUp = function (params) {
        if (typeof params === 'string')
            return this.createPopUp('提示', params, 1);
        var msg = params.msg, _a = params.title, title = _a === void 0 ? '提示' : _a, callBack = params.callBack;
        return this.createPopUp(title, msg, 1, callBack);
    };
    APrompt.prototype.failPopUp = function (params) {
        if (typeof params === 'string')
            return this.createPopUp('操作失败', params, 2);
        var msg = params.msg, _a = params.title, title = _a === void 0 ? '操作失败' : _a, callBack = params.callBack;
        return this.createPopUp(title, msg, 2, callBack);
    };
    APrompt.prototype.confirmPopUp = function (params) {
        if (typeof params === 'string')
            return this.createPopUp('确认操作', params, 4);
        var msg = params.msg, _a = params.title, title = _a === void 0 ? '确认操作' : _a, okCallBack = params.okCallBack, cancelCallBack = params.cancelCallBack;
        return this.createPopUp(title, msg, 4, okCallBack, cancelCallBack);
    };
    APrompt.prototype.promptToast = function (params) {
        if (typeof params === 'string')
            return this.createToast(params);
        var msg = params.msg, onShow = params.onShow, onHide = params.onHide;
        return this.createToast(msg, onShow, onHide);
    };
    return APrompt;
}());
exports.APrompt = APrompt;
