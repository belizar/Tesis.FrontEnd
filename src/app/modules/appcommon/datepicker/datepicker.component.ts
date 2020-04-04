import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DatepickerComponent),
    multi: true
  }]
})
export class DatepickerComponent implements OnInit, ControlValueAccessor {

  value: Date;

  disable: boolean = false;
  
  @Input()
  title: string;

  onChange = (value: Date) => {};

  model;

  onTouched = () => {};

  constructor() { }

  ngOnInit() {
  }

  writeValue(value: Date): void {
    console.log(value);
    this.model = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
   this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disable = isDisabled;
  }

  onModelChange(event:any) {
    this.onChange(this.model);
  }

}
