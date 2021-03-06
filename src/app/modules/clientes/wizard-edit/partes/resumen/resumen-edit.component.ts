import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-resumen-edit',
  templateUrl: './resumen-edit.component.html',
  styleUrls: ['./resumen-edit.component.css']
})
export class ResumenEditComponent implements OnInit {

  @Input()
  parentForm: FormGroup;

  @Output()
  anterior = new EventEmitter();

  @Output()
  siguiente = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  get datosLaboralesForm() {
    return this.parentForm.get('datosLaborales');
  }

  get datosPersonalesForm() {
    return this.parentForm.get('datosPersonales');
  }

  get TelefonosPersonalesControl(): FormArray {
    return this.datosPersonalesForm.get('Telefonos') as FormArray;
  }

  get TelefonosLaboralesControl(): FormArray {
    return this.datosLaboralesForm.get('Telefonos') as FormArray;
  }

  private _siguiente() {
    this.siguiente.emit();
  }

  private _anterior() {
    this.anterior.emit();
  }

}
