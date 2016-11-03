"use strict";
var ADevice = (function () {
    function ADevice() {
    }
    Object.defineProperty(ADevice.prototype, "UniqueID", {
        get: function () { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ADevice.prototype, "SystemName", {
        get: function () { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ADevice.prototype, "AppVersion", {
        get: function () { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ADevice.prototype, "ReadableVersion", {
        get: function () { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ADevice.prototype, "DeviceModel", {
        get: function () { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ADevice.prototype, "Manufacturer", {
        get: function () { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ADevice.prototype, "DeviceBrand", {
        get: function () { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ADevice.prototype, "DeviceId", {
        get: function () { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ADevice.prototype, "SystemVersion", {
        get: function () { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ADevice.prototype, "BundleId", {
        get: function () { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ADevice.prototype, "BuildNumber", {
        get: function () { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ADevice.prototype, "DeviceName", {
        get: function () { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ADevice.prototype, "UserAgent", {
        get: function () { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ADevice.prototype, "DeviceLocale", {
        get: function () { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ADevice.prototype, "DeviceCountry", {
        get: function () { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ADevice.prototype, "Timezone", {
        get: function () { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ADevice.prototype, "InstanceID", {
        get: function () { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ADevice.prototype, "PxRatio", {
        get: function () { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ADevice.prototype, "IsIOS", {
        get: function () { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ADevice.prototype, "IsAndroid", {
        get: function () { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ADevice.prototype, "IsPC", {
        get: function () { },
        enumerable: true,
        configurable: true
    });
    ADevice.prototype.getActualSize = function (px) {
        return this.PxRatio * px;
    };
    return ADevice;
}());
exports.ADevice = ADevice;
