import { requestError } from '../Error';
import { InfrastructureFactory as f } from '../Factory';
import { httpHp, strHp } from '../../helper';

export abstract class ARequest {
    readonly errorName = '___request__';
    private defaultHost: string;

    protected abstract sealPostData(postData?: tCommon.anyObject, ...p: any[]): any;
    abstract postGlobalHandler(url: string, postData?: tCommon.anyObject, ...p: any[]): Promise<any>;

    protected request<T>(type: string, url: string, postData?: tCommon.anyObject) {
        const p = f.AsyncOperation.createPromise<T>((resolve, reject) => {
            const postAjax = new XMLHttpRequest();
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
                const sendData = httpHp.createUrlParamsStr(postData);
                postAjax.open(type, url + '?' + sendData, true);
                postAjax.send(null);
            }
            else {
                postAjax.open(type, url, true);
                postAjax.setRequestHeader('Content-Type', 'application/json');
                postAjax.send(JSON.stringify(postData));
            }
        });

        return p;
    }
    protected post<T>(url: string, postData?: tCommon.anyObject) {
        return this.request<T>(httpHp.httpType.post, url, postData)
    }
    protected get<T>(url: string, postData?: tCommon.anyObject) {
        return this.request<T>(httpHp.httpType.get, url, postData)
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

