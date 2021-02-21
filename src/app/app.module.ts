import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CalendarComponent } from './_share/components/calendar/calendar.component';
import { DemoPage } from './pages/demo/demo.page';
import { CalendarNavComponent } from './_share/components/calendar/calendar-nav/calendar-nav.component';
import { CalendarDayComponent } from './_share/components/calendar/calendar-day/calendar-day.component';
import { CalendarMonthComponent } from './_share/components/calendar/calendar-month/calendar-month.component';
import { CalendarYearComponent } from './_share/components/calendar/calendar-year/calendar-year.component';
import { MonthPipe } from './_share/pipes/month.pipe';
import { DayOfWeekPipe } from './_share/pipes/day-of-week.pipe';
import { DatepickerComponent } from './_share/components/datepicker/datepicker.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DemoPage,
    CalendarNavComponent,
    CalendarDayComponent,
    CalendarMonthComponent,
    CalendarYearComponent,
    MonthPipe,
    DayOfWeekPipe,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
