// Angular
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// Routing
import { AppRoutingModule } from './app-routing.module';
// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// ngx-highlightjs
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
// Angular Material
import { MatTabsModule } from '@angular/material/tabs';

// Pages
import { DemoPage } from './pages/demo/demo.page';
// Components
import { AppComponent } from './app.component';
import { CalendarComponent } from './_share/components/calendar/calendar.component';
import { CalendarNavComponent } from './_share/components/calendar/calendar-nav/calendar-nav.component';
import { CalendarDayComponent } from './_share/components/calendar/calendar-day/calendar-day.component';
import { CalendarMonthComponent } from './_share/components/calendar/calendar-month/calendar-month.component';
import { CalendarYearComponent } from './_share/components/calendar/calendar-year/calendar-year.component';
import { DatepickerComponent } from './_share/components/datepicker/datepicker.component';
// Pipes
import { MonthPipe } from './_share/pipes/month.pipe';
import { DayOfWeekPipe } from './_share/pipes/day-of-week.pipe';

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
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HighlightModule,
    MatTabsModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
