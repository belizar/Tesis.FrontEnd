import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers/clientes.reducer';
import { Cliente, Trabajos } from 'src/app/models/cliente';
import { CrearCliente, MostrarCliente } from 'src/app/store/actions/clientes.actions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { WizardService } from '../wizard/wizard.service';

@Component({
  selector: 'app-wizard-edit',
  templateUrl: './wizard-edit.component.html',
  styleUrls: ['./wizard-edit.component.css']
})
export class WizardEditComponent implements OnInit {

  nuevoClienteForm: FormGroup;
  cliente$: Observable<Cliente>;

  steps = {
    datosPersonalesActivo: true,
    datosLaboralesActivo: false,
    resumen: false
  };

  constructor(private store: Store<State>, 
              private wizardService: WizardService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(paramMap => paramMap.get('id'))
    ).subscribe( id => {
      this.store.dispatch(MostrarCliente({id}));
    });

    this.store
        .pipe(map( ({clientes: {cliente}}: any) => cliente))
        .subscribe(cliente => this.CrearForm(cliente));
}

  CrearForm(cliente: Cliente) {
    this.nuevoClienteForm = this.wizardService.CrearForm(cliente);
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
    cliente.ID = clienteForm.datosPersonales.ID;
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
