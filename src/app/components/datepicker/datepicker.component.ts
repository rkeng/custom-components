import { DatePipe } from '@angular/common';
import { Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'rk-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [
    DatePipe,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true
    }
  ]
})
export class DatepickerComponent implements ControlValueAccessor {

  @Input() placeholder = 'yyyy-MM-dd';

  @ViewChild('inputEl') inputElement: ElementRef;

  input = new FormControl('');
  date: Date;
  disabled = false;
  showContainer = false;

  faCalendarAlt = faCalendarAlt;
  iconClass: string[] = [];

  constructor(
    private datePipe: DatePipe
  ) {
  }

  onChange = (value: any) => { };
  onTouched = () => { };

  writeValue(date: Date): void {
    this.date = date;
    this.formatInput(date);
    this.onChange(date);
    // close calendar with subtle delay
    setTimeout(() => {
      this.showContainer = false;
    }, 100);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  handleInput() {
    this.showContainer = false;
  }

  handleFocus() {
    this.showContainer = true;
    this.iconClass = ['text-blue-400'];
    this.inputElement.nativeElement.select();
  }

  handleBlur() {
    this.showContainer = false;
    this.iconClass = [];
    this.formatInput(this.input.value);
    if (this.input.value) {
      this.date = new Date(this.input.value);
    } else {
      this.date = null;
    }
    this.onChange(this.date);
    this.onTouched();
  }

  toggleContainer() {
    if (!this.showContainer) {
      this.inputElement.nativeElement.focus();
    }
  }

  private formatInput(date: Date) {
    let value;
    try {
      value = this.datePipe.transform(date, 'yyyy-MM-dd');
    } catch (error) {
      value = this.datePipe.transform(this.date, 'yyyy-MM-dd');
    }
    this.input.setValue(value);
  }
}
