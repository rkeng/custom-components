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
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';

// Pages
import { DemoPage } from './pages/demo/demo.page';
// Containers
import { NavbarContainer } from './containers/navbar/navbar.container';
import { FooterContainer } from './containers/footer/footer.container';
import { DemoCalendarContainer } from './containers/demo/demo-calendar/demo-calendar.container';
import { DemoDatepickerContainer } from './containers/demo/demo-datepicker/demo-datepicker.container';
// Components
import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarNavComponent } from './components/calendar/calendar-nav/calendar-nav.component';
import { CalendarDayComponent } from './components/calendar/calendar-day/calendar-day.component';
import { CalendarMonthComponent } from './components/calendar/calendar-month/calendar-month.component';
import { CalendarYearComponent } from './components/calendar/calendar-year/calendar-year.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
// Pipes
import { MonthPipe } from './pipes/month.pipe';
import { DayOfWeekPipe } from './pipes/day-of-week.pipe';

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
    DatepickerComponent,
    DemoCalendarContainer,
    DemoDatepickerContainer,
    NavbarContainer,
    FooterContainer,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HighlightModule,
    MatCardModule,
    MatExpansionModule,
    MatTabsModule,
    MatTableModule,
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
