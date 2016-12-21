"use strict";
var tslib_1 = require("tslib");
var react_1 = require("react");
var helper_1 = require("../../helper");
var baseComponent = (function (_super) {
    tslib_1.__extends(baseComponent, _super);
    function baseComponent() {
        var _this = _super.apply(this, arguments) || this;
        _this.alwaysUpdate = false;
        _this.noUpdate = false;
        return _this;
    }
    baseComponent.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (this.alwaysUpdate)
            return true;
        if (this.noUpdate)
            return false;
        return !helper_1.objHp.isEqual(nextProps, this.props) || !helper_1.objHp.isEqual(nextState, this.state);
    };
    return baseComponent;
}(react_1.Component));
exports.baseComponent = baseComponent;
