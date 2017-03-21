"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _InfrastructureFactory = (function () {
    function _InfrastructureFactory() {
    }
    return _InfrastructureFactory;
}());
exports.setInfrastructureFactory = function (f) {
    exports.InfrastructureFactory.App = f.App;
    exports.InfrastructureFactory.Storage = f.Storage;
    exports.InfrastructureFactory.Redux = f.Redux;
    exports.InfrastructureFactory.Request = f.Request;
    exports.InfrastructureFactory.Prompt = f.Prompt;
    exports.InfrastructureFactory.Navigation = f.Navigation;
    exports.InfrastructureFactory.ErrorHandler = f.ErrorHandler;
    exports.InfrastructureFactory.AsyncOperation = f.AsyncOperation;
    exports.InfrastructureFactory.Device = f.Device;
    exports.InfrastructureFactory.User = f.User;
};
exports.InfrastructureFactory = new _InfrastructureFactory();
