"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _cloneDeep = require("lodash/cloneDeep");
var _isEqual = require("lodash/isEqual");
var _omit = require("lodash/omit");
var _pick = require("lodash/pick");
var objHp;
(function (objHp) {
    objHp.cloneDeep = _cloneDeep;
    objHp.assignNewObj = function () {
        var objs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objs[_i] = arguments[_i];
        }
        return Object.assign.apply(Object, [{}].concat(objs));
    };
    objHp.isEqual = _isEqual;
    objHp.omit = _omit;
    objHp.pick = _pick;
})(objHp = exports.objHp || (exports.objHp = {}));
