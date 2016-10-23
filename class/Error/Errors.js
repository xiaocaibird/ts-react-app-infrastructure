export class requestError extends Error {
    constructor(name, message = '', state = 0, postData = {}, returnData = {}) {
        super(message);
        this.state = state;
        this.postData = postData;
        this.returnData = returnData;
        this.name = name;
    }
}
