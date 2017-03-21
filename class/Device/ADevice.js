"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ADevice = (function () {
    function ADevice() {
    }
    ADevice.prototype.getActualSize = function (px) {
        return this.PxRatio * px;
    };
    return ADevice;
}());
exports.ADevice = ADevice;
