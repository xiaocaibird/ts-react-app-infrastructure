declare namespace tCommon {
    type anyObject = {
        [k: string]: any,
        [i: number]: any
    }

    type anyFun = (...param: any[]) => any;
    type anyPromiseFun = (...param: any[]) => Promise<any>;
    type promiseInitFun = (resolve: anyFun, reject: anyFun) => void;

    type reactProps = anyObject;
    type reactState = anyObject;

    type allowEmpty<T> = T | undefined | null;
}