import {
    cloneDeep as _cloneDeep,
    isEqual as _isEqual,
    omit as _omit,
    pick as _pick
} from 'lodash';

export namespace objHp {
    export const cloneDeep = _cloneDeep;

    export const assignNewObj = (...objs: tCommon.allowVoid<Object>[]) => {
        return Object.assign({}, ...objs);
    }

    export const isEqual = _isEqual;

    export const omit = _omit;

    export const pick = _pick;
}
