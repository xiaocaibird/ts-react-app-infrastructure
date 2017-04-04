import _findIndex = require('lodash/findIndex');
import _find = require('lodash/find');
import _findLast = require('lodash/findLast');
import _groupBy = require('lodash/groupBy');
import _sum = require('lodash/sum');
import _filter = require('lodash/filter');
import _remove = require('lodash/remove');
import _pullAt = require('lodash/pullAt');
import _chunk = require('lodash/chunk');
import _uniq = require('lodash/uniq');
import _uniqBy = require('lodash/uniqBy');

export namespace arrayHp {
    export const isArray = (obj: any) => {
        return obj instanceof Array;
    }
    export const findIndex = _findIndex;

    export const find = _find;

    export const findLast = _findLast;

    export const groupBy = _groupBy;

    export const sum = _sum;

    export const filter = _filter;

    export const remove = _remove;

    export const pullAt = _pullAt;
    
    export const chunk = _chunk;

    export const uniq = _uniq;

    export const uniqBy = _uniqBy;
}