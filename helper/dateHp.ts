import * as _moment from 'moment';

export namespace dateHp {
    export const moment = _moment;
    export const format = (t: Date, fmt: string = 'YYYY-MM-DD') => {
        _moment(t).format(fmt);
    }
    export const diff = (beginDate: Date, endDate: Date, type: eCommon.dateTime = eCommon.dateTime.millisecond) => {
        let startTime: number, endTime: number, timespan: number = 0;
        try {
            startTime = beginDate.getTime();
            endTime = endDate.getTime();

            if (type === eCommon.dateTime.day) {
                timespan = (endTime - startTime) / (1000 * 60 * 60 * 24);
            }
            else if (type === eCommon.dateTime.hour) {
                timespan = (endTime - startTime) / (1000 * 60 * 60);
            }
            else if (type === eCommon.dateTime.minute) {
                timespan = (endTime - startTime) / (1000 * 60);
            }
            else if (type === eCommon.dateTime.second) {
                timespan = (endTime - startTime) / (1000);
            }
            else if (type === eCommon.dateTime.millisecond) {
                timespan = endTime - startTime;
            }
            return timespan
        }
        catch (e) {
            return NaN
        }
    }

    export const duration = _moment.duration;

    export const nowDateFormat = (fmt?: string) => {
        return format(new Date(), fmt);
    }

    export const getMaxDaysOfDate = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    }

    export enum weekDayTypeEnum {
        en, en_simple, cn_zhou, cn_xingQi
    }

    const weekData = [
        ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
        ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    ];

    export const getWeekDay = (date: Date, type: weekDayTypeEnum = 3) => {
        const weekDay = date.getDay();
        return weekData[type][weekDay];
    }
}
