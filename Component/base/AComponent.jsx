"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var helper_1 = require("../../helper");
var AComponent = (function (_super) {
    tslib_1.__extends(AComponent, _super);
    function AComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.alwaysUpdate = false;
        _this.noUpdate = false;
        return _this;
    }
    AComponent.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (this.alwaysUpdate)
            return true;
        if (this.noUpdate)
            return false;
        return !helper_1.objHp.isEqual(nextProps, this.props) || !helper_1.objHp.isEqual(nextState, this.state);
    };
    return AComponent;
}(react_1.Component));
exports.AComponent = AComponent;
