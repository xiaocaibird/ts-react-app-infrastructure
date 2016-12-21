/**
*在使用导航功能前，必需设置当前的navigator(调用this.setNavigator()或设置初始值)
*/
export abstract class ANavigation<TNavigator, TScene> {
    protected navigator: TNavigator;
    entryScene: TScene;
    loginScene: TScene;

    abstract toEntry(isReset?: boolean, ...p: any[]): any;
    abstract toLogin(isReset?: boolean, ...p: any[]): any;
    abstract pop(...p: any[]): any;
    abstract back(...p: any[]): any;
    abstract forward(...p: any[]): any;
    abstract push(...p: any[]): any;
    abstract resetTo(...p: any[]): any;
    abstract jumpTo(...p: any[]): any;
    abstract replace(...p: any[]): any;
    abstract openUrl(url: string, ...p: any[]): any;
    abstract reload(...p: any[]): any;
    abstract isEntry(...p: any[]): boolean;
    protected abstract checkPreChange(...p: any[]): boolean;

    setNavigator(nav: TNavigator) {
        this.navigator = nav;
    }
}
