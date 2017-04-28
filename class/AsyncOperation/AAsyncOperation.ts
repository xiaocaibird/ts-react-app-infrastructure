import { promiseHp } from '../../helper';

export abstract class AAsyncOperation {
    protected abstract prepare(...p: any[]): any;
    protected abstract final(...p: any[]): any;
    protected abstract success(...p: any[]): any;
    protected abstract fail(...p: any[]): any;

    createPromise = promiseHp.createPromise;
    getResolve = promiseHp.getResolve;
    getReject = promiseHp.getReject;

    run(params: {
        task: tCommon.anyPromiseFun,
        success?: tCommon.anyFun,
        fail?: tCommon.anyFun,
        prepare?: tCommon.anyFun,
        final?: tCommon.anyFun
    } | tCommon.anyPromiseFun) {
        if (typeof params === 'function') {
            this.prepare();
            return params().then(
                (data) => {
                    this.success(data);
                    this.final(data);

                },
                (err) => {
                    this.fail(err);
                    this.final(err);
                }
            )
        }
        else {
            const { task, success, fail, prepare, final } = params;
            if (typeof prepare === 'function') {
                prepare();
            }
            else {
                this.prepare();
            }
            return task().then(
                (data) => {
                    if (typeof success === 'function') {
                        success(data);
                    }
                    else {
                        this.success(data);
                    }

                    if (typeof final === 'function') {
                        final(data);
                    }
                    else {
                        this.final(data);
                    }
                },
                (err) => {
                    if (typeof fail === 'function') {
                        fail(err);
                    }
                    else {
                        this.fail(err);
                    }

                    if (typeof final === 'function') {
                        final(err);
                    }
                    else {
                        this.final(err);
                    }
                }
            );
        }
    }
}