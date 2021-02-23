// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// Routing
import { AppRoutingModule } from './app-routing.module';
// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// ngx-highlightjs
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

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
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HighlightModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/scss'),
          xml: () => import('highlight.js/lib/languages/xml')
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
