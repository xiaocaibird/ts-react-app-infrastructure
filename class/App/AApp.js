"use strict";
var helper_1 = require("../../helper");
var AApp = (function () {
    function AApp(lastStateInStorageKey) {
        if (lastStateInStorageKey === void 0) { lastStateInStorageKey = "_my__App_lastState"; }
        this.lastStateInStorageKey = lastStateInStorageKey;
        this.upgrade = this.upgrade.bind(this);
    }
    AApp.prototype.isRefreshStateInStroage = function (lastUnloadTime, minHour) {
        if (minHour === void 0) { minHour = 24; }
        var lastUnloadDate = new Date(lastUnloadTime);
        var hourSpan = helper_1.dateHp.diff(lastUnloadDate, new Date(), 3);
        if (hourSpan < minHour) {
            return false;
        }
        return true;
    };
    return AApp;
}());
exports.AApp = AApp;
