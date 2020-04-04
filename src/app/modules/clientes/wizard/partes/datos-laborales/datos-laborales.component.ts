import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { WizardService } from '../../wizard.service';

@Component({
  selector: 'app-datos-laborales',
  templateUrl: './datos-laborales.component.html',
  styleUrls: ['./datos-laborales.component.css']
})
export class DatosLaboralesComponent implements OnInit {

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

  get datosLaboralesForm()
  {
    return this.parentForm.get('datosLaborales');
  }

  get DatosLaboralesControl(): FormArray {
    return this.datosLaboralesForm.get('datosLaborales') as FormArray;
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


  private _siguiente() {
    this.siguiente.emit();
  }

  private _anterior() {
    this.anterior.emit();
  }

}
