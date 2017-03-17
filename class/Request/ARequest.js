"use strict";
var Error_1 = require("../Error");
var Factory_1 = require("../Factory");
var helper_1 = require("../../helper");
var ARequest = (function () {
    function ARequest() {
        this.errorName = '___request__';
    }
    ARequest.prototype.request = function (type, url, postData, isFormData) {
        var p = Factory_1.InfrastructureFactory.AsyncOperation.createPromise(function (resolve, reject) {
            var postAjax = new XMLHttpRequest();
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
                var sendData = helper_1.httpHp.createUrlParamsStr(postData);
                postAjax.open(type, url + '?' + sendData, true);
                postAjax.send(null);
            }
            else {
                postAjax.open(type, url, true);
                if (!isFormData) {
                    postAjax.setRequestHeader('Content-Type', 'application/json');
                    postAjax.send(JSON.stringify(postData));
                }
                else {
                    try {
                        if (postData instanceof FormData) {
                            postAjax.send(postData);
                        }
                        else {
                            postAjax.send(helper_1.httpHp.createFormData(postData));
                        }
                    }
                    catch (e) {
                        Factory_1.InfrastructureFactory.ErrorHandler.log(e);
                    }
                }
            }
        });
        return p;
    };
    ARequest.prototype.post = function (url, postData) {
        return this.request(helper_1.httpHp.httpType.post, url, postData);
    };
    ARequest.prototype.get = function (url, postData) {
        return this.request(helper_1.httpHp.httpType.get, url, postData);
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
