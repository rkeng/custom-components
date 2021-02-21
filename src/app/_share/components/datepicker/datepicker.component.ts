import { DatePipe, formatDate } from '@angular/common';
import { Component, forwardRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

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

  input = new FormControl('');
  date: Date;
  disabled = false;
  showContainer = false;

  constructor(
    private datePipe: DatePipe
  ) {
  }

  onChange = (value: any) => { };
  onTouched = () => { };

  writeValue(date: Date): void {
    this.showContainer = false;
    this.date = date;
    this.formatInput(date);
    this.onChange(date);
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
  }

  handleBlur() {
    this.showContainer = false;
    this.formatInput(this.input.value);
    this.date = new Date(this.input.value);
    this.onChange(this.date);
    this.onTouched();
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
