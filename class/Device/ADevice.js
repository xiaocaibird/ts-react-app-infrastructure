export class ADevice {
    get UniqueID() { }
    get SystemName() { }
    get AppVersion() { }
    get ReadableVersion() { }
    get DeviceModel() { }
    get Manufacturer() { }
    get DeviceBrand() { }
    get DeviceId() { }
    get SystemVersion() { }
    get BundleId() { }
    get BuildNumber() { }
    get DeviceName() { }
    get UserAgent() { }
    get DeviceLocale() { }
    get DeviceCountry() { }
    get Timezone() { }
    get InstanceID() { }
    get PxRatio() { }
    get IsIOS() { }
    get IsAndroid() { }
    get IsPC() { }
    getActualSize(px) {
        return this.PxRatio * px;
    }
}
