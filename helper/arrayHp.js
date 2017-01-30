"use strict";
var lodash_1 = require("lodash");
var arrayHp;
(function (arrayHp) {
    arrayHp.isArray = function (obj) {
        return obj instanceof Array;
    };
    arrayHp.findIndex = lodash_1.findIndex;
    arrayHp.find = lodash_1.find;
    arrayHp.findLast = lodash_1.findLast;
    arrayHp.groupBy = lodash_1.groupBy;
    arrayHp.sum = lodash_1.sum;
    arrayHp.filter = lodash_1.filter;
    arrayHp.remove = lodash_1.remove;
    arrayHp.pullAt = lodash_1.pullAt;
})(arrayHp = exports.arrayHp || (exports.arrayHp = {}));
