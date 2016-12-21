export namespace strHp {
    export const isString = (obj: any) => {
        return (typeof obj === 'string')
    }

    export const toJson = <T>(str: tCommon.allowVoid<string>) => {
        if (!str) return null;
        try {
            return JSON.parse(str) as T;
        }
        catch (e) {
            return null;
        }
    }

    export const equalNoMatchCase = (a: string, b: string) => {
        return a.toLowerCase() === b.toLowerCase();
    }
}
