import { Injectable } from '@angular/core';
import * as format from 'date-fns/format';
import * as parse from 'date-fns/parse';
import * as startOfToday from 'date-fns/start_of_today';

@Injectable()
export class DateService {
  format(date: string | number | Date, dateFormat = 'MM/DD/YYYY'): string {
    return format(date, dateFormat);
  }

  now(): string {
    return format(new Date());
  }

  parse(date: string): Date {
    return parse(date);
  }

  today(): string {
    return format(startOfToday());
  }
}
