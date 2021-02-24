import { Pipe, PipeTransform } from '@angular/core';
import { DAY_OF_WEEK_NAMES } from '../components/calendar/constants';

@Pipe({
  name: 'dayOfWeek'
})
export class DayOfWeekPipe implements PipeTransform {

  transform(dayOfWeek: number): string {
    return DAY_OF_WEEK_NAMES[dayOfWeek];
  }

}
