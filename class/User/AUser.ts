export abstract class AUser<T> {
    abstract getUser(...p: any[]): T | undefined;
    abstract isLogin(...p: any[]): boolean;
    abstract checkLogin(...p: any[]): void | boolean;
    abstract clearUser(...p: any[]): void;
    abstract logout(...p: any[]): void;
}
