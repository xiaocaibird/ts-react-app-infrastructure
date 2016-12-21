"use strict";
var ADevice = (function () {
    function ADevice() {
    }
    ADevice.prototype.getActualSize = function (px) {
        return this.PxRatio * px;
    };
    return ADevice;
}());
exports.ADevice = ADevice;
