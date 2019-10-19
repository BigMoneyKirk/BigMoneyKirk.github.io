import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateFormatterService {

  constructor() { }

  public monthDayYear(date: Date): string{
    let returnDate = moment(date).format('LL');
    return returnDate;
  }

  public shortMonthDayYear(date: Date): string{
    let returnDate = moment(date).format('ll');
    return returnDate;
  }
}
