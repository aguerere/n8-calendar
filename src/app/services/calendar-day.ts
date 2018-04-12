import * as moment from 'moment';

export class CalendarDay {
    private _date : moment.Moment;
    private _tileColor : string;

    constructor(date) {
        this._date = date;
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
            //TODO: implement different color for holidays
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
