export abstract class AErrorHandler {
    private logMixin: tCommon.anyFun = defaultLogError;

    hasPendingGlobalError: boolean = false;

    setLogMixin(mixin: tCommon.anyFun) {
        this.logMixin = mixin;
    }
    log(error: tCommon.anyObject) {
        try {
            if (typeof this.logMixin === 'function')
                this.logMixin(error);
        }
        catch (e) {

        }
    }
}

const defaultLogError = (_error: tCommon.anyObject) => {
    console.warn('There are some errors.Please set custom Error Log method.');
}

