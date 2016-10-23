export class APrompt {
    warningPopUp(msg, title = '警告', okCallBack) {
        return this.createPopUp(title, msg, 0, okCallBack);
    }
    successPopUp(msg, title = '操作成功', okCallBack) {
        return this.createPopUp(title, msg, 3, okCallBack);
    }
    promptPopUp(msg, title = '提示', okCallBack) {
        return this.createPopUp(title, msg, 1, okCallBack);
    }
    failPopUp(msg, title = '操作失败', okCallBack) {
        return this.createPopUp(title, msg, 2, okCallBack);
    }
    confirmPopUp(msg, title = '确认操作', okCallBack, cancelCallBack) {
        return this.createPopUp(title, msg, 4, okCallBack, cancelCallBack);
    }
    promptToast(msg, onShow, onHide) {
        return this.createToast(msg, onShow, onHide);
    }
}
