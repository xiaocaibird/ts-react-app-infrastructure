declare namespace eCommon {
    const enum checkUpgrade {
        noNew, haveNew, necessary
    }
    const enum requestErrorState {
        commomError,
        requestFail,
        dataError,
        globalError,
        logicError,
    }

    const enum popUp {
        warning, info, fail, success, confirm
    }
    const enum dateTime {
        year, month, day, hour, minute, second, millisecond
    }
}