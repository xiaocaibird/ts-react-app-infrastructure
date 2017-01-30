import {
    findIndex as _findIndex,
    find as _find,
    findLast as _findLast,
    groupBy as _groupBy,
    sum as _sum,
    filter as _filter,
    remove as _remove,
    pullAt as _pullAt
} from 'lodash';
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

    export const pullAt = _pullAt
}