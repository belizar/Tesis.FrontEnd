import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { WizardService } from '../../../wizard/wizard.service';

@Component({
  selector: 'app-datos-laborales-edit',
  templateUrl: './datos-laborales-edit.component.html',
  styleUrls: ['./datos-laborales-edit.component.css']
})
export class DatosLaboralesEditComponent implements OnInit {

  @Input()
  parentForm: FormGroup;

  @Output()
  anterior = new EventEmitter();

  @Output()
  siguiente = new EventEmitter();

  fecha = new Date();

  constructor(private wizardService: WizardService) { }

  ngOnInit() {
  }

  get datosLaboralesForm() {
    return this.parentForm.get('datosLaborales');
  }

  get DatosLaboralesControl(): FormArray {
    return this.parentForm.get('datosLaborales') as FormArray;
  }

  get TelefonosControl(): FormArray {
    return this.datosLaboralesForm.get('Telefonos') as FormArray;
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

  getTitle(index) {
    return this.DatosLaboralesControl.controls[index].value.LugarDeTrabajo;
  }
  tieneId(index) {
    return this.DatosLaboralesControl.controls[index].value.ID ? true : false;
  }

  nuevoTrabajo() {
    this.DatosLaboralesControl.controls.unshift(this.wizardService.NuevoDatosLaborales());
  }

}
