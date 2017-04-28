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

    export const subText = (params: {
        str: string,
        maxLength: number,
        diffSBC?: boolean,
        suffix?: string
    }) => {
        const { str, maxLength, diffSBC = true, suffix = '..' } = params;
        if (diffSBC) {
            let l = 0;
            let a = '';
            for (let i = 0; i < str.length; i++) {
                if (str.charCodeAt(i) > 128) {
                    l += 2;
                }
                else {
                    l += 1;
                }
                if (l <= maxLength)
                    a += str[i]
                else {
                    a += suffix;
                    break;
                }
            }
            return a;
        }
        else {
            return str.length > maxLength ? str.slice(0, maxLength) + suffix : str;
        }
    }
}
