import { errorHp } from '../../helper';

export abstract class AErrorHandler {
    constructor(customLogFun: tCommon.anyFun = defaultLogFun) {
        errorHp.setLogFun(customLogFun);
    }
    hasPendingGlobalError: boolean = false;
    log(error: tCommon.anyObject) {
        errorHp.log(error);
    }
}

const defaultLogFun = (_error: tCommon.anyObject) => {
    console.warn('There are some errors.Please set custom Error Log method.');
}

