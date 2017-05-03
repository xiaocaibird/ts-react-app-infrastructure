import { requestError } from '../Error';
import { httpHp, strHp, promiseHp } from '../../helper';

export abstract class ARequest {
    constructor(protected contentType = 'application/json') {

    }
    readonly errorName = '___request__';
    private defaultHost: string;

    protected abstract sealPostData(postData?: tCommon.anyObject, ...p: any[]): any;
    abstract postGlobalHandler(url: string, postData?: tCommon.anyObject, preHandle?: boolean, ...p: any[]): Promise<any>;

    protected request<T>(type: string, url: string, postData?: tCommon.anyObject | FormData, timeout: number = 10000) {
        const p = promiseHp.createPromise<T>((resolve, reject) => {
            const postAjax = new XMLHttpRequest();
            setTimeout(() => {
                reject({ msg: '请求超时！' });
                postAjax.abort();
            }, timeout);
            postAjax.onreadystatechange = () => {
                if (postAjax.readyState !== 4) {
                    return;
                }

                if (postAjax.status === 200) {
                    try {
                        const data = JSON.parse(postAjax.responseText);
                        resolve(data);
                    }
                    catch (e) {
                        reject({ err: e, postAjax: postAjax });
                    }
                } else {
                    reject(postAjax);
                }
            };

            if (strHp.equalNoMatchCase(type, httpHp.httpType.get)) {
                postAjax.open(type, url + '?' + httpHp.createUrlParamsStr(postData), true);
                postAjax.send(null);
            }
            else {
                postAjax.open(type, url, true);
                let isFormData = false;

                if (typeof FormData !== 'undefined' && postData instanceof FormData) {
                    isFormData = true;
                }

                if (!isFormData) {
                    postAjax.setRequestHeader('Content-Type', this.contentType);
                    if (this.contentType === httpHp.contentType.json)
                        postAjax.send(JSON.stringify(postData));
                    else if (this.contentType === httpHp.contentType.form)
                        postAjax.send(httpHp.createUrlParamsStr(postData));
                }
                else {
                    postAjax.send(postData);
                }
            }
        });

        return p;
    }
    protected post<T>(url: string, postData?: tCommon.anyObject | FormData, timeout?: number) {
        return this.request<T>(httpHp.httpType.post, url, postData, timeout)
    }
    protected get<T>(url: string, postData?: tCommon.anyObject, timeout?: number) {
        return this.request<T>(httpHp.httpType.get, url, postData, timeout)
    }
    createError() {
        return new requestError(this.errorName);
    }
    setHostUrl(url: string) {
        this.defaultHost = url;
    }
    createFullUrl(url: string, host?: string) {
        if (host) return host + url;
        return this.defaultHost + url;
    }
}

