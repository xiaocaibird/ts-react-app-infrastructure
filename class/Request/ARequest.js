"use strict";
var Error_1 = require('../Error');
var Factory_1 = require('../Factory');
var ARequest = (function () {
    function ARequest() {
    }
    ARequest.prototype.request = function (type, url, postData) {
        var _this = this;
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
            postAjax.open(type, url, true);
            postAjax.send('data=' + encodeURIComponent(JSON.stringify(_this.sealPostData(postData))));
        });
        return p;
    };
    ARequest.prototype.post = function (url, postData) {
        return this.request('POST', url, postData);
    };
    ARequest.prototype.get = function (url, postData) {
        return this.request('GET', url, postData);
    };
    ARequest.prototype.createError = function () {
        return new Error_1.requestError(this.errorName);
    };
    ARequest.prototype.setHostUrl = function (url) {
        this.hostUrl = url;
    };
    ARequest.prototype.createFullUrl = function (url) {
        return this.hostUrl + url;
    };
    return ARequest;
}());
exports.ARequest = ARequest;
