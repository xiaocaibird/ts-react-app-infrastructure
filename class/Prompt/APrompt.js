"use strict";
var APrompt = (function () {
    function APrompt() {
    }
    APrompt.prototype.warningPopUp = function (msg, title, okCallBack) {
        if (title === void 0) { title = '警告'; }
        return this.createPopUp(title, msg, 0, okCallBack);
    };
    APrompt.prototype.successPopUp = function (msg, title, okCallBack) {
        if (title === void 0) { title = '操作成功'; }
        return this.createPopUp(title, msg, 3, okCallBack);
    };
    APrompt.prototype.promptPopUp = function (msg, title, okCallBack) {
        if (title === void 0) { title = '提示'; }
        return this.createPopUp(title, msg, 1, okCallBack);
    };
    APrompt.prototype.failPopUp = function (msg, title, okCallBack) {
        if (title === void 0) { title = '操作失败'; }
        return this.createPopUp(title, msg, 2, okCallBack);
    };
    APrompt.prototype.confirmPopUp = function (msg, title, okCallBack, cancelCallBack) {
        if (title === void 0) { title = '确认操作'; }
        return this.createPopUp(title, msg, 4, okCallBack, cancelCallBack);
    };
    APrompt.prototype.promptToast = function (msg, onShow, onHide) {
        return this.createToast(msg, onShow, onHide);
    };
    return APrompt;
}());
exports.APrompt = APrompt;
