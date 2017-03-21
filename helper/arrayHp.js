"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _findIndex = require("lodash/findIndex");
var _find = require("lodash/find");
var _findLast = require("lodash/findLast");
var _groupBy = require("lodash/groupBy");
var _sum = require("lodash/sum");
var _filter = require("lodash/filter");
var _remove = require("lodash/remove");
var _pullAt = require("lodash/pullAt");
var _chunk = require("lodash/chunk");
var arrayHp;
(function (arrayHp) {
    arrayHp.isArray = function (obj) {
        return obj instanceof Array;
    };
    arrayHp.findIndex = _findIndex;
    arrayHp.find = _find;
    arrayHp.findLast = _findLast;
    arrayHp.groupBy = _groupBy;
    arrayHp.sum = _sum;
    arrayHp.filter = _filter;
    arrayHp.remove = _remove;
    arrayHp.pullAt = _pullAt;
    arrayHp.chunk = _chunk;
})(arrayHp = exports.arrayHp || (exports.arrayHp = {}));
