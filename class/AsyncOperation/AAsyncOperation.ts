export abstract class AAsyncOperation {
    protected abstract prepare(...p: any[]): any;
    protected abstract finally(...p: any[]): any;
    protected abstract success(...p: any[]): any;
    protected abstract fail(...p: any[]): any;

    run(task: tCommon.anyPromiseFun, successCb?: tCommon.anyFun, failCb?: tCommon.anyFun, prepareCb?: tCommon.anyFun, finallyCb?: tCommon.anyFun) {
        if (typeof prepareCb === 'function') {
            prepareCb();
        }
        else {
            this.prepare();
        }
        return task().then(
            () => {
                if (typeof successCb === 'function') {
                    successCb();
                }
                else {
                    this.success();
                }

                if (typeof finallyCb === 'function') {
                    finallyCb();
                }
                else {
                    this.finally();
                }
            },
            () => {
                if (typeof failCb === 'function') {
                    failCb();
                }
                else {
                    this.fail();
                }

                if (typeof finallyCb === 'function') {
                    finallyCb();
                }
                else {
                    this.finally();
                }
            }
        );
    }

    createPromise<T>(fun: tCommon.promiseInitFun) {
        return new Promise<T>(fun);
    }
    getResolve<T>(param?: T) {
        return Promise.resolve(param);
    }
    getReject<T>(param?: T) {
        return Promise.reject(param);
    }
}