"use strict";
var redux_1 = require('redux');
var ARedux = (function () {
    function ARedux(rootReducer) {
        this.rootReducer = rootReducer;
    }
    Object.defineProperty(ARedux.prototype, "Store", {
        get: function () {
            if (!this._store) {
                this.storeCreater();
            }
            return this._store;
        },
        enumerable: true,
        configurable: true
    });
    ARedux.prototype.storeCreater = function (initState) {
        if (initState) {
            this._store = redux_1.createStore(this.rootReducer, initState);
        }
        else {
            this._store = redux_1.createStore(this.rootReducer);
        }
    };
    ARedux.prototype.initStore = function (initState) {
        this.storeCreater(initState);
    };
    ARedux.prototype.changeState = function (action) {
        this.Store.dispatch(action);
    };
    ARedux.prototype.getState = function () {
        return this.Store.getState();
    };
    return ARedux;
}());
exports.ARedux = ARedux;
