Date.prototype.isWeekend = function () {
    const daysOfWeek = {
        Sunday: { name: 'Sunday', initial: 'S', index: 0, isWeekend: true },
        Monday: { name: 'Monday', initial: 'M', index: 1, isWeekend: false },
        Tuesday: { name: 'Tuesday', initial: 'T', index: 2, isWeekend: false },
        Wednesday: { name: 'Wednesday', initial: 'W', index: 3, isWeekend: false },
        Thursday: { name: 'Thursday', initial: 'T', index: 4, isWeekend: false },
        Friday: { name: 'Friday', initial: 'F', index: 5, isWeekend: false },
        Saturday: { name: 'Saturday', initial: 'S', index: 6, isWeekend: true }
    }
    let dayOfWeek = this.getDay();

    for (const key in daysOfWeek) {
        if (daysOfWeek.hasOwnProperty(key)) {
            const element = daysOfWeek[key];
            if (element.index === dayOfWeek)
                return element.isWeekend;
        }
    }

    return false;
}

Date.prototype.getMonthName = function () {
    var month = this.getMonth();

    switch (month) {
        case 0:
            return 'January';
        case 1:
            return 'February';
        case 2:
            return 'March';
        case 3:
            return 'April';
        case 4:
            return 'May';
        case 5:
            return 'June';
        case 6:
            return 'July';
        case 7:
            return 'August';
        case 8:
            return 'September';
        case 9:
            return 'October';
        case 10:
            return 'November';
        case 11:
            return 'December';
    }
}

Date.prototype.getNumberOfDays = function () {
    var month = this.getMonth();

    switch (month) {
        case 0:
            return 31;
        case 1:
            return 28;
        case 2:
            return 31;
        case 3:
            return 30;
        case 4:
            return 31;
        case 5:
            return 30;
        case 6:
            return 31;
        case 7:
            return 31;
        case 8:
            return 30;
        case 9:
            return 31;
        case 10:
            return 30;
        case 11:
            return 31;
    }
}

Date.prototype.getNumberOfWeeks = function (weekStartOnSunday = true) {
    var year = this.getFullYear();
    var month = this.getMonth();

    var firstDateOfMonth = new Date(year, month, 1);
    var lastDateOfMonth = new Date(year, month, 0);

    var used = firstDateOfMonth.getDay() + lastDateOfMonth.getDate();

    if (!weekStartOnSunday)
        used = used + 6;

    return Math.ceil(used / 7);
}

Date.prototype.getLastDateOfMonth = function () {
    return new Date(this.getFullYear(), this.getMonth() + 1, 0);
}