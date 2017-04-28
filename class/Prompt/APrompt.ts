export abstract class APrompt {
    protected abstract createPopUp(title: string, msg: string, type: eCommon.popUp,
        okCallBack?: tCommon.anyFun,
        cancelCallBack?: tCommon.anyFun, ...p: any[]): any;

    warningPopUp(params: { msg: string, title?: string, callBack?: tCommon.anyFun } | string) {
        if (typeof params === 'string')
            return this.createPopUp('警告', params, eCommon.popUp.warning);

        const { msg, title = '警告', callBack } = params;
        return this.createPopUp(title, msg, eCommon.popUp.warning, callBack);
    }
    successPopUp(params: { msg: string, title?: string, callBack?: tCommon.anyFun } | string) {
        if (typeof params === 'string')
            return this.createPopUp('操作成功', params, eCommon.popUp.success,);

        const { msg, title = '操作成功', callBack } = params;
        return this.createPopUp(title, msg, eCommon.popUp.success, callBack);
    }
    infoPopUp(params: { msg: string, title?: string, callBack?: tCommon.anyFun } | string) {
        if (typeof params === 'string')
            return this.createPopUp('提示', params, eCommon.popUp.info);

        const { msg, title = '提示', callBack } = params;
        return this.createPopUp(title, msg, eCommon.popUp.info, callBack);
    }
    failPopUp(params: { msg: string, title?: string, callBack?: tCommon.anyFun } | string) {
        if (typeof params === 'string')
            return this.createPopUp('操作失败', params, eCommon.popUp.fail);

        const { msg, title = '操作失败', callBack } = params;
        return this.createPopUp(title, msg, eCommon.popUp.fail, callBack);
    }
    confirmPopUp(params: { msg: string, title?: string, okCallBack?: tCommon.anyFun, cancelCallBack?: tCommon.anyFun } | string) {
        if (typeof params === 'string')
            return this.createPopUp('确认操作', params, eCommon.popUp.confirm)

        const { msg, title = '确认操作', okCallBack, cancelCallBack } = params;
        return this.createPopUp(title, msg, eCommon.popUp.confirm, okCallBack, cancelCallBack)
    }

    protected abstract createToast(msg: string, onShow?: tCommon.anyFun, onHide?: tCommon.anyFun, ...p: any[]): any;

    promptToast(params: { msg: string, onShow?: tCommon.anyFun, onHide?: tCommon.anyFun } | string) {
        if (typeof params === 'string')
            return this.createToast(params);
            
        const { msg, onShow, onHide } = params;
        return this.createToast(msg, onShow, onHide);
    }
}
