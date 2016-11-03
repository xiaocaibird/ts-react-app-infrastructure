"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var requestError = (function (_super) {
    __extends(requestError, _super);
    function requestError(name, message, state, postData, returnData) {
        if (message === void 0) { message = ''; }
        if (state === void 0) { state = 0; }
        if (postData === void 0) { postData = {}; }
        if (returnData === void 0) { returnData = {}; }
        _super.call(this, message);
        this.state = state;
        this.postData = postData;
        this.returnData = returnData;
        this.name = name;
    }
    return requestError;
}(Error));
exports.requestError = requestError;
