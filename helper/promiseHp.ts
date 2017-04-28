export namespace promiseHp {
    export const createPromise = function <T>(fun: tCommon.promiseInitFun) {
        return new Promise<T>(fun);
    }
    export const getResolve = function <T>(param?: T) {
        return Promise.resolve(param);
    }
    export const getReject = function <T>(param?: T) {
        return Promise.reject(param);
    }
}