import { Component, OnInit, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers:  [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }]
})
export class InputComponent implements OnInit, ControlValueAccessor {

  @Input()
  name: string;

  @Input()
  label = 'floating-label';

  value: string;

  disable = false;

  @Input()
  readonly = false;

  @Output()
  blur = new EventEmitter<any>();

  onChange = (value: string) => {};

  onTouched = () => {};

  constructor() { }

  ngOnInit() {
  }

  onBlur() {
    this.blur.emit();
  }

  writeValue(value: any): void {
    this.value = value;
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
    this.onChange(this.value);
  }

}
