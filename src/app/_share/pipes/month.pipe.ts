import { Pipe, PipeTransform } from '@angular/core';
import { MONTH_NAMES } from '../components/calendar/constants';

@Pipe({
  name: 'month'
})
export class MonthPipe implements PipeTransform {

  transform(month: number): string {
    return MONTH_NAMES[month];
  }

}
