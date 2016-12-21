"use strict";
var _ = require("lodash");
var arrayHp;
(function (arrayHp) {
    arrayHp.isArray = function (obj) {
        return obj instanceof Array;
    };
    arrayHp.findIndex = _.findIndex;
    arrayHp.find = _.find;
    arrayHp.findLast = _.findLast;
    arrayHp.groupBy = _.groupBy;
    arrayHp.sum = _.sum;
    arrayHp.filter = _.filter;
    arrayHp.remove = _.remove;
    arrayHp.pullAt = _.pullAt;
})(arrayHp = exports.arrayHp || (exports.arrayHp = {}));
