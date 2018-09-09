'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// var startDate = new Date(2008, 07, 15);
// var daysToAdd = 30;
// var endDate = new Date(startDate.valueOf());
// endDate.setDate(endDate.getDate() + daysToAdd);

var Calendar = function () {
    function Calendar(initialDate, endDate) {
        _classCallCheck(this, Calendar);

        if (endDate < initialDate) throw new Error("The initial date most to be greater than end date");

        this.initialDate = initialDate;
        this.endDate = endDate;
        this.dates = [];
        this.getDates();
        this.getInvalidDays();

        this.dates.sort(function (a, b) {
            return a.date - b.date;
        });
    }

    _createClass(Calendar, [{
        key: 'getInvalidDays',
        value: function getInvalidDays() {
            var _this = this;

            var firstDate = this.initialDate.getDate();
            var lastDate = this.endDate.getDate();
            var diffFromFirstday = firstDate - 1;
            var lastDateOfMonth = new Date(this.endDate.getFullYear(), this.endDate.getMonth() + 1, 0);
            var diffToLastDate = lastDateOfMonth.getDate() - lastDate;

            diffFromFirstday.toArray().forEach(function (element) {
                _this.dates.push({
                    isValid: false,
                    date: new Date(_this.initialDate.getFullYear(), _this.initialDate.getMonth(), element)
                });
            });

            diffToLastDate.toArray(lastDate + 1, lastDateOfMonth.getDate()).forEach(function (element) {
                _this.dates.push({
                    isValid: false,
                    date: new Date(_this.endDate.getFullYear(), _this.endDate.getMonth(), element)
                });
            });
        }
    }, {
        key: 'getDates',
        value: function getDates() {
            var currentDate = new Date(this.initialDate.valueOf());
            do {
                this.dates.push({
                    isValid: true,
                    date: new Date(currentDate)
                });
                currentDate.setDate(currentDate.getDate() + 1);
            } while (currentDate <= this.endDate);
        }
    }, {
        key: 'getCalendar',
        value: function getCalendar() {
            var _this2 = this;

            if (!this.dates) throw new Error('El parámetro dates es requerido');

            if (this.dates.length === 0) throw new Error('El listado de fechas debe tener al menos un elemento');

            var firstDate = this.dates[0];
            var lastDate = this.dates[this.dates.length - 1];
            var firstYear = firstDate.date.getFullYear();
            var firstDay = firstDate.date.getDate();
            var lastYear = lastDate.date.getFullYear();
            var firstMonth = firstDate.date.getMonth();
            var lastMonth = lastDate.date.getMonth();
            var lastDay = lastDate.date.getDate();

            var calendar = [{ year: firstYear, months: [{ month: firstMonth, name: firstDate.date.getMonthName(), numberOfDays: firstDate.date.getNumberOfDays(), numberOfWeeks: firstDate.date.getNumberOfWeeks(), weeks: [], days: [] }] }];

            this.dates.reduce(function (oldValue, currentValue, currentIndex) {
                //Current values
                var currentValueYear = currentValue.date.getFullYear();
                var currentValueMonth = currentValue.date.getMonth();
                var currentValueDay = currentValue.date.getDate();
                //Old values
                var oldValueYear = oldValue.date.getFullYear();
                var oldValueMonth = oldValue.date.getMonth();
                var oldValueDay = oldValue.date.getDate();

                //Si inicia un nuevo año
                if (currentValueYear > oldValueYear) calendar.push({ year: currentValueYear, months: [] });

                var calendarOfCurrenteYear = calendar.findElementByProp('year', currentValueYear);

                //Si inicia un nuevo mes
                if (currentValueMonth > oldValueMonth || currentValueYear > oldValueYear) {
                    if (calendarOfCurrenteYear.length) {
                        var day = { number: currentValueDay, isWeekend: currentValue.date.isWeekend(), isHoliday: currentValue.date.isHoliday(), date: currentValue.date, isValid: currentValue.isValid };
                        var month = { month: currentValueMonth, name: currentValue.date.getMonthName(), numberOfDays: currentValue.date.getNumberOfDays(), numberOfWeeks: currentValue.date.getNumberOfWeeks(), weeks: [], days: [day] };
                        calendarOfCurrenteYear[0].months.push(month);
                        _this2.getDaysOfWeek(month, day);
                    }
                } else {
                    if (calendarOfCurrenteYear.length) {
                        var calendarOfCurrentMonth = calendarOfCurrenteYear[0].months.findElementByProp('month', currentValueMonth);
                        _this2.getDaysOfWeek(calendarOfCurrentMonth[0], { number: currentValueDay, isWeekend: currentValue.date.isWeekend(), isHoliday: currentValue.date.isHoliday(), date: currentValue.date, isValid: currentValue.isValid });
                        calendarOfCurrentMonth[0].days.push({ number: currentValueDay, isWeekend: currentValue.date.isWeekend(), isHoliday: currentValue.date.isHoliday(), date: currentValue.date, isValid: currentValue.isValid });
                    }
                }

                return currentValue;
            }, this.dates[0]);

            return calendar;
        }
    }, {
        key: 'getDaysOfWeek',
        value: function getDaysOfWeek(month, day) {
            var daysInAWeek = 7;
            var numberOfDay = day.date.getDay();
            if (month.weeks.length <= month.numberOfWeeks) {
                var lastWeek = month.weeks.length - 1;
                var currentWeek = Object.assign([], month.weeks[lastWeek]);

                var indexToInsert = 0;
                if (currentWeek.length < daysInAWeek) {
                    indexToInsert = month.weeks.length ? month.weeks.length - 1 : 0;
                } else {
                    currentWeek = [];
                    indexToInsert = month.weeks.length;
                }

                //Obtengo los primeros días para completar la semana
                for (var index = currentWeek.length; index < numberOfDay; index++) {
                    currentWeek.push(null);
                }

                currentWeek.push(day);

                //Obtengo los días restantes para llegar al final de la semana
                if (day.date.getDate() == day.date.getLastDateOfMonth().getDate()) {
                    for (var _index = currentWeek.length; _index < daysInAWeek; _index++) {
                        currentWeek.push(null);
                    }
                }

                month.weeks[indexToInsert] = currentWeek;
            }
        }
    }]);

    return Calendar;
}();

exports.default = Calendar;