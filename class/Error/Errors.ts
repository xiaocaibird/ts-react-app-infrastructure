export class requestError extends Error {
    constructor(
        name: string,
        message = '',
        public state = eCommon.requestErrorState.commomError,
        public postData?: tCommon.anyObject,
        public returnData?: tCommon.anyObject
    ) {
        super(message);
        this.name = name;
    }
}