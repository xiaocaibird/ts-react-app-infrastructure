"use strict";
var _ = require('lodash');
var objHp;
(function (objHp) {
    objHp.cloneDeep = _.cloneDeep;
    objHp.assign = _.assign;
    objHp.assignNewObj = function () {
        var objs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objs[_i - 0] = arguments[_i];
        }
        return objHp.assign.apply(void 0, [{}].concat(objs));
    };
    objHp.isEqual = _.isEqual;
    objHp.omit = _.omit;
    objHp.pick = _.pick;
})(objHp = exports.objHp || (exports.objHp = {}));
