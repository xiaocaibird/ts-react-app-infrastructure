import { dateHp } from '../../helper';

export abstract class AApp<TInitData, TAppConfig> {
    constructor(protected lastStateInStorageKey = "___my_App_lastState__") {

    }
    protected initData: TInitData;

    protected _appConfig: TAppConfig;
    abstract get AppConfig(): TAppConfig;

    protected abstract clearState(...p: any[]): any;
    protected abstract setInitData<T>(...p: any[]): Promise<T>;

    abstract init<T>(...p: any[]): Promise<T>;
    abstract reset(...p: any[]): any;
    abstract spinnerShow(show: boolean, ...p: any[]): any;
    abstract isDebug(): boolean;

    protected isRefreshStateInStroage(lastUnloadTime: number, minHour = 24) {
        const lastUnloadDate = new Date(lastUnloadTime);
        const hourSpan = dateHp.diff(lastUnloadDate, new Date(), eCommon.dateTime.hour);

        if (hourSpan < minHour) {
            return false;
        }
        return true;
    }
}

