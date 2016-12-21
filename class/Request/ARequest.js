"use strict";
var Error_1 = require("../Error");
var Factory_1 = require("../Factory");
var helper_1 = require("../../helper");
var ARequest = (function () {
    function ARequest() {
    }
    ARequest.prototype.request = function (type, url, postData) {
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
                        reject(postAjax);
                    }
                }
                else {
                    reject(postAjax);
                }
            };
            var sendData = helper_1.httpHp.createUrlParamsStr(postData);
            if (helper_1.strHp.equalNoMatchCase(type, helper_1.httpHp.httpType.get)) {
                postAjax.open(type, url + '?' + sendData, true);
                postAjax.send(null);
            }
            else {
                postAjax.open(type, url, true);
                postAjax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                postAjax.send(sendData);
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
