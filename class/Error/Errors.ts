export class requestError extends Error {
    public state: eCommon.requestErrorState;
    public postData?: tCommon.anyObject;
    public returnData?: tCommon.anyObject;

    constructor(params: {
        name: string,
        message?: string,
        state?: eCommon.requestErrorState,
        postData?: tCommon.anyObject,
        returnData?: tCommon.anyObject
    } | string
    ) {
        if (typeof params === 'string') {
            super('');
            this.name = params;
            this.state = eCommon.requestErrorState.commomError;
        }
        else {
            super(params.message || '');
            const { name, state = eCommon.requestErrorState.commomError, postData, returnData } = params;
            this.name = name;
            this.state = state;
            this.postData = postData;
            this.returnData = returnData;
        }
    }
}