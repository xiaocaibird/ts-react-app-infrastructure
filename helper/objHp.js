"use strict";
var lodash_1 = require("lodash");
var objHp;
(function (objHp) {
    objHp.cloneDeep = lodash_1.cloneDeep;
    objHp.assignNewObj = function () {
        var objs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objs[_i] = arguments[_i];
        }
        return Object.assign.apply(Object, [{}].concat(objs));
    };
    objHp.isEqual = lodash_1.isEqual;
    objHp.omit = lodash_1.omit;
    objHp.pick = lodash_1.pick;
})(objHp = exports.objHp || (exports.objHp = {}));
