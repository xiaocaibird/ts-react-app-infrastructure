import * as _ from 'lodash';
export var objHp;
(function (objHp) {
    objHp.cloneDeep = _.cloneDeep;
    objHp.assign = _.assign;
    objHp.isEqual = _.isEqual;
    objHp.omit = _.omit;
    objHp.pick = _.pick;
})(objHp || (objHp = {}));
