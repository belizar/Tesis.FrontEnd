import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { WizardService } from '../../wizard.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {

  @Input()
  parentForm: FormGroup;

  @Output()
  siguiente = new EventEmitter();


  constructor(private wizardService: WizardService) { }

  ngOnInit() {
  }

  get datosPersonalesForm() {
    return this.parentForm.get('datosPersonales');
  }

  get TelefonosControl(): FormArray {
    return this.datosPersonalesForm.get('Telefonos') as FormArray;
  }

   TelefonoControl(index): FormControl {
      return this.TelefonosControl.controls[index] as FormControl;
  }

  AgregarTelefono(numero, descripcion) {
    this.TelefonosControl.push(this.wizardService.NuevoTelefono(numero.value, descripcion.value));
    numero.value = '';
    descripcion.value = '';
  }

  QuitarTelefono(index) {
    this.TelefonosControl.removeAt(index);
  }

  private _siguiente() {

    if (this.datosPersonalesForm.valid) {
      this.siguiente.emit();
    }
  }

}
