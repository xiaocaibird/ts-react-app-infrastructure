export abstract class AErrorHandler {
    private customLogFun: tCommon.anyFun = defaultLogFun;

    hasPendingGlobalError: boolean = false;

    setLogFun(fun: tCommon.anyFun) {
        this.customLogFun = fun;
    }
    log(error: tCommon.anyObject) {
        try {
            if (typeof this.customLogFun === 'function')
                this.customLogFun(error);
        }
        catch (e) {

        }
    }
}

const defaultLogFun = (_error: tCommon.anyObject) => {
    console.warn('There are some errors.Please set custom Error Log method.');
}

