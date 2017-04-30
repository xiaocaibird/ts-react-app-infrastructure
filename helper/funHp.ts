export namespace funHp {
    export const noop = () => { };
    export const isFun = (fn: any) => {
        return (typeof fn === 'function')
    }

    export const isExtendsClass = (sonClass: tCommon.allowVoid<Function>, fatherClass: tCommon.allowVoid<Function>) => {
        if (sonClass && fatherClass) {
            return fatherClass.prototype.isPrototypeOf(sonClass.prototype);
        }
        else {
            return false
        }
    }
}