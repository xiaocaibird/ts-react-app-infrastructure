export var httpHp;
(function (httpHp) {
    httpHp.getUrlParams = (url) => {
        const result = {};
        if (!url)
            return result;
        const s = url.split('?');
        if (!s[1])
            return result;
        const params = s[1].split('&');
        if (!params || params.length <= 0)
            return result;
        params.forEach((v) => {
            const str = v.split('=');
            if (str[0]) {
                result[str[0]] = decodeURIComponent(str[1]);
            }
        });
        return result;
    };
})(httpHp || (httpHp = {}));
