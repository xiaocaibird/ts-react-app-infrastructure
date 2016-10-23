export class AErrorHandler {
    constructor() {
        this.logMixin = defaultLogError;
    }
    setLogMixin(mixin) {
        if (mixin)
            this.logMixin = mixin;
    }
    log(error) {
        try {
            console.log('error log');
            if (typeof this.logMixin === 'function')
                this.logMixin(error);
        }
        catch (e) {
        }
    }
}
const defaultLogError = (_error) => {
};
