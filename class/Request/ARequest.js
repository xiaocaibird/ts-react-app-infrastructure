"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Error_1 = require("../Error");
var helper_1 = require("../../helper");
var ARequest = (function () {
    function ARequest(contentType) {
        if (contentType === void 0) { contentType = 'application/json'; }
        this.contentType = contentType;
        this.errorName = '___request__';
    }
    ARequest.prototype.request = function (type, url, postData, timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = 10000; }
        var p = helper_1.promiseHp.createPromise(function (resolve, reject) {
            var postAjax = new XMLHttpRequest();
            setTimeout(function () {
                reject({ msg: '请求超时！' });
                postAjax.abort();
            }, timeout);
            postAjax.onreadystatechange = function () {
                if (postAjax.readyState !== 4) {
                    return;
                }
                if (postAjax.status === 200) {
                    try {
                        var data = JSON.parse(postAjax.responseText);
                        resolve(data);
                    }
                    catch (e) {
                        reject({ err: e, postAjax: postAjax });
                    }
                }
                else {
                    reject(postAjax);
                }
            };
            if (helper_1.strHp.equalNoMatchCase(type, helper_1.httpHp.httpType.get)) {
                postAjax.open(type, url + '?' + helper_1.httpHp.createUrlParamsStr(postData), true);
                postAjax.send(null);
            }
            else {
                postAjax.open(type, url, true);
                var isFormData = false;
                if (typeof FormData !== 'undefined' && postData instanceof FormData) {
                    isFormData = true;
                }
                if (!isFormData) {
                    postAjax.setRequestHeader('Content-Type', _this.contentType);
                    if (_this.contentType === helper_1.httpHp.contentType.json)
                        postAjax.send(JSON.stringify(postData));
                    else if (_this.contentType === helper_1.httpHp.contentType.form)
                        postAjax.send(helper_1.httpHp.createUrlParamsStr(postData));
                }
                else {
                    postAjax.send(postData);
                }
            }
        });
        return p;
    };
    ARequest.prototype.post = function (url, postData, timeout) {
        return this.request(helper_1.httpHp.httpType.post, url, postData, timeout);
    };
    ARequest.prototype.get = function (url, postData, timeout) {
        return this.request(helper_1.httpHp.httpType.get, url, postData, timeout);
    };
    ARequest.prototype.createError = function () {
        return new Error_1.requestError(this.errorName);
    };
    ARequest.prototype.setHostUrl = function (url) {
        this.defaultHost = url;
    };
    ARequest.prototype.createFullUrl = function (url, host) {
        if (host)
            return host + url;
        return this.defaultHost + url;
    };
    return ARequest;
}());
exports.ARequest = ARequest;
