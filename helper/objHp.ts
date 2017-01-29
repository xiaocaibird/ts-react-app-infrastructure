import * as _ from 'lodash';

export namespace objHp {
    export const cloneDeep = _.cloneDeep;

    export const assignNewObj = (...objs: tCommon.allowVoid<Object>[]) => {
        return Object.assign({}, ...objs);
    }

    export const isEqual = _.isEqual;

    export const omit = _.omit;

    export const pick = _.pick;
}
