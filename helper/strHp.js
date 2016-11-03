"use strict";
var _ = require('lodash');
var strHp;
(function (strHp) {
    strHp.isstring = function (obj) {
        return (typeof obj === 'string');
    };
    strHp.toJson = function (str) {
        try {
            return JSON.parse(str);
        }
        catch (e) {
            return null;
        }
    };
    strHp.trim = function (str) {
        try {
            return _.trim(str.toString());
        }
        catch (e) {
            return '';
        }
    };
})(strHp = exports.strHp || (exports.strHp = {}));
