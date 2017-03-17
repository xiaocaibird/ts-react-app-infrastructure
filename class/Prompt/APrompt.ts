export abstract class APrompt {
    protected abstract createPopUp(title: string, msg: string, type: eCommon.popUp,
        okCallBack?: tCommon.anyFun,
        cancelCallBack?: tCommon.anyFun, ...p: any[]): any;

    warningPopUp(msg: string, title = '警告', callBack?: tCommon.anyFun) {
        return this.createPopUp(title, msg, eCommon.popUp.warning, callBack)
    }
    successPopUp(msg: string, title = '操作成功', callBack?: tCommon.anyFun) {
        return this.createPopUp(title, msg, eCommon.popUp.success, callBack)
    }
    infoPopUp(msg: string, title = '提示', callBack?: tCommon.anyFun) {
        return this.createPopUp(title, msg, eCommon.popUp.info, callBack)
    }
    failPopUp(msg: string, title = '操作失败', callBack?: tCommon.anyFun) {
        return this.createPopUp(title, msg, eCommon.popUp.fail, callBack)
    }
    confirmPopUp(msg: string, title = '确认操作', okCallBack?: tCommon.anyFun, cancelCallBack?: tCommon.anyFun) {
        return this.createPopUp(title, msg, eCommon.popUp.confirm, okCallBack, cancelCallBack)
    }

    protected abstract createToast(msg: string, onShow?: tCommon.anyFun, onHide?: tCommon.anyFun, ...p: any[]): any;

    promptToast(msg: string, onShow?: tCommon.anyFun, onHide?: tCommon.anyFun) {
        return this.createToast(msg, onShow, onHide);
    }
}
