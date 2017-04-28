export namespace strHp {
    export const isString = (obj: any) => {
        return (typeof obj === 'string')
    }

    export const toJson = <T>(str: tCommon.allowEmpty<string>) => {
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

    export const subText = (s: string, maxLength: number, diffSBC = true, suffix: string = '..') => {
        if (diffSBC) {
            let l = 0;
            let a = '';
            for (let i = 0; i < s.length; i++) {
                if (s.charCodeAt(i) > 128) {
                    l += 2;
                }
                else {
                    l += 1;
                }
                if (l <= maxLength)
                    a += s[i]
                else {
                    a += suffix;
                    break;
                }
            }
            return a;
        }
        else {
            return s.length > maxLength ? s.slice(0, maxLength) + suffix : s;
        }
    }
}
