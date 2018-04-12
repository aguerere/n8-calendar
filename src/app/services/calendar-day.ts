export class CalendarDay {
    private _date : Date;
    private _tileColor : string;

    get date() : Date {
        return this._date;
    }

    set date(newDate : Date) {
        this._date = newDate;
    }

    get tileColor() : string {
        return this._tileColor;
    }

    set tileColor(newColor : string) {
        this._tileColor = newColor;
    }
}
