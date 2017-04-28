"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var requestError = (function (_super) {
    tslib_1.__extends(requestError, _super);
    function requestError(params) {
        var _this = this;
        if (typeof params === 'string') {
            _this = _super.call(this, '') || this;
            _this.name = params;
            _this.state = 0;
        }
        else {
            _this = _super.call(this, params.message || '') || this;
            var name_1 = params.name, _a = params.state, state = _a === void 0 ? 0 : _a, postData = params.postData, returnData = params.returnData;
            _this.name = name_1;
            _this.state = state;
            _this.postData = postData;
            _this.returnData = returnData;
        }
        return _this;
    }
    return requestError;
}(Error));
exports.requestError = requestError;
