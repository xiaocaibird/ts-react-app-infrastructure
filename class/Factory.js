class _InfrastructureFactory {
}
export const setInfrastructureFactory = (f) => {
    InfrastructureFactory.App = f.App;
    InfrastructureFactory.Storage = f.Storage;
    InfrastructureFactory.Redux = f.Redux;
    InfrastructureFactory.Request = f.Request;
    InfrastructureFactory.Prompt = f.Prompt;
    InfrastructureFactory.Navigation = f.Navigation;
    InfrastructureFactory.ErrorHandler = f.ErrorHandler;
    InfrastructureFactory.AsyncOperation = f.AsyncOperation;
    InfrastructureFactory.Device = f.Device;
    InfrastructureFactory.User = f.User;
};
export let InfrastructureFactory = new _InfrastructureFactory();
