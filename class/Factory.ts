import { AApp } from './App';
import { AStorage } from './Storage';
import { ARedux } from './Redux';
import { ARequest } from './Request';
import { APrompt } from './Prompt';
import { ANavigation } from './Navigation';
import { AErrorHandler } from './Error';
import { AAsyncOperation } from './AsyncOperation';
import { ADevice } from './Device';
import { AUser } from './User';

class _InfrastructureFactory {
    App: AApp<any, any>;

    Storage: AStorage;

    Redux: ARedux<any, any>;

    Request: ARequest;

    Prompt: APrompt;

    Navigation: ANavigation<any, any>;

    ErrorHandler: AErrorHandler;

    AsyncOperation: AAsyncOperation;

    Device: ADevice;

    User: AUser<any>;
}

export const setInfrastructureFactory = (f: _InfrastructureFactory) => {
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
}

export let InfrastructureFactory = new _InfrastructureFactory();

