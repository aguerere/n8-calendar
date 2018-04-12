import { CalendarDay } from './calendar-day';

export class CalendarMonth {
    private _monthName : string;
    private _year : string;
    private _days : CalendarDay[];

    get title() {
        return this._monthName + ' ' + this._year;
    }

    set monthName(newName : string) {
        this._monthName = newName;
    }

    set year(newYear : string) {
        this._year = newYear;
    }

    get days() {
        return this.days;
    }

    addDay(newDay : CalendarDay) {
        this.days.push(newDay);
    }

    clearDays() {
        this._days = [];
    }
}
