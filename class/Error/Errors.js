"use strict";
var tslib_1 = require("tslib");
var requestError = (function (_super) {
    tslib_1.__extends(requestError, _super);
    function requestError(name, message, state, postData, returnData) {
        if (message === void 0) { message = ''; }
        if (state === void 0) { state = 0; }
        if (postData === void 0) { postData = {}; }
        if (returnData === void 0) { returnData = {}; }
        var _this = _super.call(this, message) || this;
        _this.state = state;
        _this.postData = postData;
        _this.returnData = returnData;
        _this.name = name;
        return _this;
    }
    return requestError;
}(Error));
exports.requestError = requestError;
