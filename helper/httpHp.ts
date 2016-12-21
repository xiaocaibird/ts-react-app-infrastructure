export namespace httpHp {
    export const getUrlParams = (url: tCommon.allowVoid<string>) => {
        const result: {
            [k: string]: string
        } = {};
        if (!url) return result;
        try {
            url.trim().split('?')[1].split('&').forEach(
                (v) => {
                    const s = v.split('=');
                    if (s[0]) {
                        result[s[0]] = s[1] && decodeURIComponent(s[1]);
                    }
                }
            )
        }
        catch (e) {
        }
        return result;
    }

    export const createUrlParamsStr = (obj: tCommon.allowVoid<tCommon.anyObject>) => {
        if (!obj) return '';
        return Object.keys(obj).map(
            (v) => {
                return `${v}=${encodeURIComponent(obj[v])}`;
            }
        ).join('&');
    }

    export const httpType = {
        post: 'POST',
        get: 'GET'
    }
}