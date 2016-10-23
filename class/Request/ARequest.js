import { requestError } from '../Error';
import { InfrastructureFactory as f } from '../Factory';
export class ARequest {
    request(type, url, postData) {
        const p = f.AsyncOperation.createPromise((resolve, reject) => {
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
                        reject(postAjax);
                    }
                }
                else {
                    reject(postAjax);
                }
            };
            postAjax.open(type, url, true);
            postAjax.send('data=' + encodeURIComponent(JSON.stringify(this.sealPostData(postData))));
        });
        return p;
    }
    post(url, postData) {
        return this.request('POST', url, postData);
    }
    get(url, postData) {
        return this.request('GET', url, postData);
    }
    createError() {
        return new requestError(this.errorName);
    }
    setHostUrl(url) {
        this.hostUrl = url;
    }
    createFullUrl(url) {
        return this.hostUrl + url;
    }
}
