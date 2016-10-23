import { createStore } from 'redux';
export class ARedux {
    constructor(rootReducer) {
        this.rootReducer = rootReducer;
    }
    get Store() {
        if (!this._store) {
            this.storeCreater();
        }
        return this._store;
    }
    storeCreater(initState) {
        if (initState) {
            this._store = createStore(this.rootReducer, initState);
        }
        else {
            this._store = createStore(this.rootReducer);
        }
    }
    initStore(initState) {
        this.storeCreater(initState);
    }
    changeState(action) {
        this.Store.dispatch(action);
    }
    getState() {
        return this.Store.getState();
    }
}
