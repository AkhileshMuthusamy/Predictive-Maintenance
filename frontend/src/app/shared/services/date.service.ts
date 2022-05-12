import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  convertEpochToDate(epoch: number): Date {
    return new Date(epoch);
  }

  convertDateToString(date: Date): string | null {
    if (date) {
      const strDate = `${date.getFullYear()}-` +
        `${(date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}-` +
        `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`;
      return strDate;
    }
    return null;
  }

  getDateString(epoch: number): string | null {
    if (epoch) {
      const date = this.convertEpochToDate(epoch);
      return `${date.toDateString()} ${date.toLocaleTimeString()}`;
    }

    return null;
  }
}
