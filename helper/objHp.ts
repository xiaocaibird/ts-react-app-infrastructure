import _cloneDeep = require('lodash/cloneDeep');
import _isEqual = require('lodash/isEqual');
import _omit = require('lodash/omit');
import _pick = require('lodash/pick');

export namespace objHp {
    export const cloneDeep = _cloneDeep;

    export const assignNewObj = (...objs: tCommon.allowVoid<Object>[]) => {
        return Object.assign({}, ...objs);
    }

    export const isEqual = _isEqual;

    export const omit = _omit;

    export const pick = _pick;
}
