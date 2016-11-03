"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var react_1 = require('react');
var helper_1 = require('../../helper');
var baseComponent = (function (_super) {
    __extends(baseComponent, _super);
    function baseComponent() {
        _super.apply(this, arguments);
        this.alwaysUpdate = false;
        this.noUpdate = false;
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
