import { Component, OnInit, forwardRef, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css'],
  providers:  [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ToggleButtonComponent),
    multi: true
  }]
})
export class ToggleButtonComponent implements OnInit, ControlValueAccessor {
 
  value: boolean = false;
  
  @ViewChild('someInput')
  inputRef: ElementRef;

  onChange = (value: boolean) => {};

  onTouched = () => {};
  disabled: boolean;

  constructor(private rendd:Renderer2) { }

  ngOnInit() {
  }

  writeValue(value: boolean): void {
    this.value = value;
    this.toggleSpan(this.value);
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

  toggle(event) {
    event.preventDefault();
    this.value = !this. value;
    this.toggleSpan(this.value);
    this.onChange(this.value);
  }

  private toggleSpan(value) {
    if(value)
    this.rendd.removeAttribute(this.inputRef.nativeElement, "checked");
  else 
    this.rendd.setAttribute(this.inputRef.nativeElement, "checked","");

  }

}
