import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.css'],
  providers:  [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioGroupComponent),
    multi: true
  }]
})
export class RadioGroupComponent implements OnInit, ControlValueAccessor {
 
  @Input()
  value: string;

  @Input()
  display: string;
  
  @Input()
  groupName: string;

  @Input()
  data: [];

  selected: any;
  
  disabled: boolean;
  
  onChange = (value: boolean) => {};

  onTouched = () => {};

  constructor() { }

  ngOnInit() {
  }

  writeValue(value: boolean): void {
    this.selected = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  select(item) {
    this.selected = item;
    this.onChange(this.selected);
  }


}
