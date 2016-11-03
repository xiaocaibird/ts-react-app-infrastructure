"use strict";
var helper_1 = require('../../helper');
var AApp = (function () {
    function AApp() {
        this.lastUnLoadInfoInStorageKey = "_my__App_storageLastUnLoadInfo";
        this.refreshStateInStorageHourSpan = 24;
        this.upgrade = this.upgrade.bind(this);
    }
    AApp.prototype.setRefreshStateInStorageHourSpan = function (hourSpan) {
        this.refreshStateInStorageHourSpan = hourSpan;
    };
    Object.defineProperty(AApp.prototype, "AppConfig", {
        get: function () { },
        enumerable: true,
        configurable: true
    });
    AApp.prototype.isRefreshStateInStroage = function (lastUnloadTime) {
        var lastUnloadDate = new Date(lastUnloadTime);
        var hourSpan = helper_1.dateHp.diff(lastUnloadDate, new Date(), 'h');
        if (hourSpan < this.refreshStateInStorageHourSpan) {
            return false;
        }
        return true;
    };
    return AApp;
}());
exports.AApp = AApp;
