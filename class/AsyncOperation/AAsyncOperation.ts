import { promiseHp } from '../../helper';

export abstract class AAsyncOperation {
    protected abstract prepare(...p: any[]): any;
    protected abstract finally(...p: any[]): any;
    protected abstract success(...p: any[]): any;
    protected abstract fail(...p: any[]): any;
    
    createPromise = promiseHp.createPromise;
    getResolve = promiseHp.getResolve;
    getReject = promiseHp.getReject;

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
}