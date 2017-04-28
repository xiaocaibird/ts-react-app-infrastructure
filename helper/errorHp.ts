export namespace errorHp {
    let logFun: tCommon.anyFun | undefined;
    export const setLogFun = (fun: tCommon.anyFun) => {
        logFun = fun;
    }
    export const log = (err: tCommon.anyObject) => {
        try {
            if (typeof logFun === 'function')
                logFun(err);
        }
        catch (e) {
            console.log(e);
        }
    }
}