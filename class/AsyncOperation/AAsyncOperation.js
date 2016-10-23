export class AAsyncOperation {
    run(task, successCallBack, failCallBack, prepareFun, finallyFun) {
        if (typeof prepareFun === 'function') {
            prepareFun();
        }
        else {
            this.prepare();
        }
        return task().then(() => {
            if (typeof successCallBack === 'function') {
                successCallBack();
            }
            else {
                this.success();
            }
            if (typeof finallyFun === 'function') {
                finallyFun();
            }
            else {
                this.finally();
            }
        }, () => {
            if (typeof failCallBack === 'function') {
                failCallBack();
            }
            else {
                this.fail();
            }
            if (typeof finallyFun === 'function') {
                finallyFun();
            }
            else {
                this.finally();
            }
        });
    }
    createPromise(fun) {
        return new Promise(fun);
    }
    getResolve(param) {
        return Promise.resolve(param);
    }
    getReject(param) {
        return Promise.reject(param);
    }
}
