import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers:  [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DropdownComponent),
    multi: true
  }]
})
export class DropdownComponent implements OnInit, ControlValueAccessor {

  show = false;
  
  @Input()
  label: string;

  @Input() 
  data = [];

  @Input() 
  display: string;
  
  selected: any; 
  
  @Input() 
  textoSeleccion: string = 'Seleccione';

  onChange = (value: string) => {};

  onTouched = () => {};
  disabled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    if(this.disabled) {this.show = false; return} 
    this.show = !this.show;
  }

  select(item) {
    this.selected = item;
    this.show = false;
    this.onChange(this.selected);
  }

  
  writeValue(value: any): void {
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

  onClickedOutside($event) {
    if(this.show)
      this.show = false;
  }

}
