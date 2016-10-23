import * as _ from 'lodash';
export var strHp;
(function (strHp) {
    strHp.isstring = (obj) => {
        return (typeof obj === 'string');
    };
    strHp.toJson = (str) => {
        try {
            return JSON.parse(str);
        }
        catch (e) {
            return null;
        }
    };
    strHp.trim = (str) => {
        try {
            return _.trim(str.toString());
        }
        catch (e) {
            return '';
        }
    };
})(strHp || (strHp = {}));
