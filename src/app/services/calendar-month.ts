import { CalendarDay } from './calendar-day';

export class CalendarMonth {
    private _monthName : string;
    private _year : string;
    private _days : CalendarDay[];
    private _daysCount : number;

    constructor() {
        this._days = [];
    }

    get title() {
        return this._monthName + ' ' + this._year;
    }

    set monthName(newName : string) {
        this._monthName = newName;
    }

    set year(newYear : string) {
        this._year = newYear;
    }

    get daysCount() : number {
        return this._daysCount;
    }

    set daysCount(newCount : number) {
        this._daysCount = newCount;
    }

    get days() {
        return this._days;
    }

    addDay(newDay : CalendarDay) {
        this._days.push(newDay);
    }

    clearDays() {
        this._days = [];
    }
}
