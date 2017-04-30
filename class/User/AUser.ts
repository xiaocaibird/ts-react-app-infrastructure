export abstract class AUser<T> {
    protected userNameKey = '___user_name__';
    abstract getUser(...p: any[]): tCommon.allowEmpty<T>;
    abstract isLogin(...p: any[]): boolean;
    abstract checkLogin(...p: any[]): void | boolean;
    abstract clearUser(...p: any[]): void;
    abstract logout(...p: any[]): void;
}
