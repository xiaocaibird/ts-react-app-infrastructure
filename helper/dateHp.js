"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _moment = require("moment");
var dateHp;
(function (dateHp) {
    dateHp.moment = _moment;
    dateHp.format = function (t, fmt) {
        if (fmt === void 0) { fmt = 'YYYY-MM-DD'; }
        return _moment(t).format(fmt);
    };
    dateHp.diff = function (beginDate, endDate, type) {
        if (type === void 0) { type = 6; }
        var startTime, endTime, timespan = 0;
        try {
            startTime = beginDate.getTime();
            endTime = endDate.getTime();
            if (type === 2) {
                timespan = (endTime - startTime) / (1000 * 60 * 60 * 24);
            }
            else if (type === 3) {
                timespan = (endTime - startTime) / (1000 * 60 * 60);
            }
            else if (type === 4) {
                timespan = (endTime - startTime) / (1000 * 60);
            }
            else if (type === 5) {
                timespan = (endTime - startTime) / (1000);
            }
            else if (type === 6) {
                timespan = endTime - startTime;
            }
            return timespan;
        }
        catch (e) {
            return NaN;
        }
    };
    dateHp.duration = _moment.duration;
    dateHp.nowDateFormat = function (fmt) {
        return dateHp.format(new Date(), fmt);
    };
    dateHp.getMaxDaysOfDate = function (date) {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };
    var weekDayTypeEnum;
    (function (weekDayTypeEnum) {
        weekDayTypeEnum[weekDayTypeEnum["en"] = 0] = "en";
        weekDayTypeEnum[weekDayTypeEnum["en_simple"] = 1] = "en_simple";
        weekDayTypeEnum[weekDayTypeEnum["cn_zhou"] = 2] = "cn_zhou";
        weekDayTypeEnum[weekDayTypeEnum["cn_xingQi"] = 3] = "cn_xingQi";
    })(weekDayTypeEnum = dateHp.weekDayTypeEnum || (dateHp.weekDayTypeEnum = {}));
    var weekData = [
        ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
        ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    ];
    dateHp.getWeekDay = function (date, type) {
        if (type === void 0) { type = 3; }
        var weekDay = date.getDay();
        return weekData[type][weekDay];
    };
})(dateHp = exports.dateHp || (exports.dateHp = {}));
