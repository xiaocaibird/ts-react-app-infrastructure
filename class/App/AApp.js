import { dateHp } from '../../helper';
export class AApp {
    constructor() {
        this.lastUnLoadInfoInStorageKey = "_my__App_storageLastUnLoadInfo";
        this.refreshStateInStorageHourSpan = 24;
        this.upgrade = this.upgrade.bind(this);
    }
    setRefreshStateInStorageHourSpan(hourSpan) {
        this.refreshStateInStorageHourSpan = hourSpan;
    }
    get AppConfig() { }
    isRefreshStateInStroage(lastUnloadTime) {
        const lastUnloadDate = new Date(lastUnloadTime);
        const hourSpan = dateHp.diff(lastUnloadDate, new Date(), 'h');
        if (hourSpan < this.refreshStateInStorageHourSpan) {
            return false;
        }
        return true;
    }
}
