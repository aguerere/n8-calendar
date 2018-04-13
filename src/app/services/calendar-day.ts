import * as moment from 'moment';

export class CalendarDay {
    private _date : moment.Moment;
    private _tileColor : string;
    private _isHoliday : boolean;

    constructor(date : moment.Moment, isHoliday : boolean = false) {
        if (date) {
            this._date = moment(date);
            this._isHoliday = isHoliday;
        }
        this.setTileColor();
    }

    private setTileColor() {
        if (this._date) {
            switch(this._date.day()) {
                case 0:
                case 6:
                    this._tileColor = "yellow";
                    break;
                default:
                    this._tileColor = "white";
            }

            this._isHoliday ? this._tileColor = "pink" : null;
            
        } else {
            this._tileColor = "gray";
        }
    }

    get date() : moment.Moment {
        return this._date;
    }

    get tileColor() : string {
        return this._tileColor;
    }

}
