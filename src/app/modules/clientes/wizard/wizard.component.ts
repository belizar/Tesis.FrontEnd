import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers/clientes.reducer';
import { Cliente, ClienteForm, Trabajos } from 'src/app/models/cliente';
import { CrearCliente } from 'src/app/store/actions/clientes.actions';
import { WizardService } from './wizard.service';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {

  nuevoClienteForm: FormGroup;

  steps = {
    datosPersonalesActivo: true,
    datosLaboralesActivo: false,
    resumen: false
  };

  constructor(private store: Store<State>, private wizardService: WizardService) { }

  ngOnInit() {
    this.CrearForm();
}

  CrearForm() {
    this.nuevoClienteForm = this.wizardService.CrearForm();
  }

  DatosPersonales() {
      this.steps = {
        datosPersonalesActivo: true,
        datosLaboralesActivo: false,
        resumen: false
      };
  }

  DatosLaborales() {
    this.steps = {
      datosPersonalesActivo: false,
      datosLaboralesActivo: true,
      resumen: false
    };
  }

  Resumen() {
    this.steps = {
      datosPersonalesActivo: false,
      datosLaboralesActivo: false,
      resumen: true
    };
  }

  Guardar() {
    const clienteForm = this.nuevoClienteForm.value;
    const cliente = new Cliente();
    cliente.Nombre = clienteForm.datosPersonales.Nombre;
    cliente.Apellido = clienteForm.datosPersonales.Apellido;
    cliente.CUIL = clienteForm.datosPersonales.CUIL;
    cliente.Email = clienteForm.datosPersonales.Email;
    cliente.FechaDeNacimiento = clienteForm.datosPersonales.FechaDeNacimiento;
    cliente.DomicilioPersonal = clienteForm.datosPersonales.DomicilioPersonal;
    cliente.Telefonos = clienteForm.datosPersonales.Telefonos;
    cliente.Trabajos = new Array<Trabajos>();
    cliente.Trabajos.push(clienteForm.datosLaborales);

    this.store.dispatch(CrearCliente({cliente}));
  }

}
