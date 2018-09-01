// var startDate = new Date(2008, 07, 15);
// var daysToAdd = 30;
// var endDate = new Date(startDate.valueOf());
// endDate.setDate(endDate.getDate() + daysToAdd);

export default class Calendar {
    constructor(initialDate, endDate) {
        this.initialDate = initialDate;
        this.endDate = endDate;
        this.dates = [];
        this.getDates();
    }

    getDates() {
        var currentDate = new Date(this.initialDate.valueOf());
        do {
            this.dates.push(new Date(this.initialDate));
            this.initialDate.setDate(this.initialDate.getDate() + 1);
        } while (currentDate < this.endDate);
    }

    getCalendar() {
        if (!this.dates)
            throw new Error('El parámetro dates es requerido');

        if (this.dates.length === 0)
            throw new Error('El listado de fechas debe tener al menos un elemento');

        var firstDate = this.dates[0];
        var lastDate = this.dates[this.dates.length - 1];
        var firstYear = firstDate.getFullYear();
        var firstDay = firstDate.getDate();
        var lastYear = lastDate.getFullYear();
        var firstMonth = firstDate.getMonth();
        var lastMonth = lastDate.getMonth();
        var lastDay = lastDate.getDate();

        var calendar = [{ year: firstYear, months: [{ month: firstMonth, name: firstDate.getMonthName(), days: [] }] }];

        this.dates.reduce((oldValue, currentValue, currentIndex) => {
            //Current values
            var currentValueYear = currentValue.getFullYear();
            var currentValueMonth = currentValue.getMonth();
            var currentValueDay = currentValue.getDate();
            //Old values
            var oldValueYear = oldValue.getFullYear();
            var oldValueMonth = oldValue.getMonth();
            var oldValueDay = oldValue.getDate();

            //Si inicia un nuevo año
            if (currentValueYear > oldValueYear)
                calendar.push({ year: currentValueYear, months: [] });

            var calendarOfCurrenteYear = calendar.findElementByProp('year', currentValueYear);

            //Si inicia un nuevo mes
            if (currentValueMonth > oldValueMonth) {
                if (calendarOfCurrenteYear.length)
                    calendarOfCurrenteYear[0].months.push({ month: currentValueMonth, name: currentValue.getMonthName(), days: [{ number: currentValueDay, isWeekend: currentValue.isWeekend(), date: currentValue }] });
            }
            else {
                if (calendarOfCurrenteYear.length)
                    var calendarOfCurrentMonth = calendarOfCurrenteYear[0].months.findElementByProp('month', currentValueMonth);
                calendarOfCurrentMonth[0].days.push({ number: currentValueDay, isWeekend: currentValue.isWeekend(), date: currentValue });
            }

            return currentValue;

        }, this.dates[0]);
    }
}