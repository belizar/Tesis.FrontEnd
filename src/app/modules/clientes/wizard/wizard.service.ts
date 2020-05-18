import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Cliente, Trabajos } from 'src/app/models/cliente';
import { CommonService } from '../../home/home/common.service';
import { queryGetCliente } from 'src/app/graphql/queries';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WizardService {

  constructor(private formBuilder: FormBuilder, private common: CommonService) {
  }

  CrearForm(cliente: Cliente = null) {

   return !cliente ? new FormGroup({

      datosPersonales: new FormGroup({
          Nombre: new FormControl(null, [Validators.required]),
          Apellido: new FormControl(null, [Validators.required]),
          CUIL: new FormControl(null, [Validators.required]),
          Email: new FormControl(null, [Validators.required]),
          FechaDeNacimiento: new FormControl(null, [Validators.required]),
          Telefonos: new FormArray([], [Validators.required]),

          DomicilioPersonal: new FormGroup({
            Localidad: new FormControl(null, [Validators.required]),
            Barrio: new FormControl(null, [Validators.required]),
            Calle: new FormControl(null, [Validators.required]),
            Lote: new FormControl(null, [Validators.required]),
            Numero: new FormControl(null, [Validators.required]),
            Piso: new FormControl(null, [Validators.required]),
            Depto: new FormControl(null, [Validators.required]),
            }),
          }),

      datosLaborales: new FormGroup({

        LugarDeTrabajo: new FormControl(null, [Validators.required]),
        Sueldo: new FormControl(null, [Validators.required]),
        Cargo: new FormControl(null, [Validators.required]),
        FechaDeIngreso: new FormControl(null, [Validators.required]),
        TelefonoLaboral: new FormControl(null, [Validators.required]),

        DomicilioLaboral: new FormGroup({
          Localidad: new FormControl(null, [Validators.required]),
          Barrio: new FormControl(null, [Validators.required]),
          Calle: new FormControl(null, [Validators.required]),
          Lote: new FormControl(null, [Validators.required]),
          Numero: new FormControl(null, [Validators.required]),
          Piso: new FormControl(null, [Validators.required]),
          Depto: new FormControl(null, [Validators.required]),
            })

          })
      }) :
      new FormGroup({

        datosPersonales: new FormGroup({
            ID: new FormControl(cliente.ID),
            Nombre: new FormControl(cliente.Nombre),
            Apellido: new FormControl(cliente.Apellido),
            CUIL: new FormControl(cliente.CUIL),
            Email: new FormControl(cliente.Email),
            FechaDeNacimiento: new FormControl(new Date(`${cliente.FechaDeNacimiento} 00:00:0000`)),
            Telefonos: new FormArray(
                      cliente.Telefonos.map( tel =>
                        this.NuevoTelefono(tel.Numero, tel.Descripcion, tel.ID))
                      ),

            DomicilioPersonal: new FormGroup({
              Localidad: new FormControl(cliente.DomicilioPersonal.Localidad),
              Barrio: new FormControl(cliente.DomicilioPersonal.Barrio),
              Calle: new FormControl(cliente.DomicilioPersonal.Calle),
              Lote: new FormControl(cliente.DomicilioPersonal.Localidad),
              Numero: new FormControl(cliente.DomicilioPersonal.Numero),
              Piso: new FormControl(cliente.DomicilioPersonal.Piso),
              Depto: new FormControl(cliente.DomicilioPersonal.Depto),
              }),
            }),

        datosLaborales: new FormArray(cliente.Trabajos.sort( (a, b) =>
                                      new Date(`${a.FechaDeIngreso} 00:00:0000`) < new Date(`${b.FechaDeIngreso} 00:00:0000`) ? 1 : 0)
              .map(trabajo => this.NuevoDatosLaborales(trabajo)))
      });
  }

  NuevoDatosLaborales(trabajo: Trabajos = null) {
    return trabajo ? new FormGroup({
      ID: new FormControl(trabajo.ID),
      LugarDeTrabajo: new FormControl(trabajo.LugarDeTrabajo),
      Sueldo: new FormControl(trabajo.sueldo),
      Cargo: new FormControl(trabajo.Cargo),
      FechaDeIngreso: new FormControl(new Date(`${trabajo.FechaDeIngreso} 00:00:0000`)),
      TelefonoLaboral: new FormControl(trabajo.TelefonoLaboral),
      DomicilioLaboral: new FormGroup({
        Localidad: new FormControl(trabajo.DomicilioLaboral.Localidad),
        Barrio: new FormControl(trabajo.DomicilioLaboral.Barrio),
        Calle: new FormControl(trabajo.DomicilioLaboral.Calle),
        Lote: new FormControl(trabajo.DomicilioLaboral.Lote),
        Numero: new FormControl(trabajo.DomicilioLaboral.Numero),
        Piso: new FormControl(trabajo.DomicilioLaboral.Piso),
        Depto: new FormControl(trabajo.DomicilioLaboral.Depto),
          })
        }) : new FormGroup({
          LugarDeTrabajo: new FormControl(null, Validators.required),
          Sueldo: new FormControl(null, Validators.required),
          Cargo: new FormControl(null, Validators.required),
          FechaDeIngreso: new FormControl(null, Validators.required),
          TelefonoLaboral: new FormControl(null, Validators.required),
          DomicilioLaboral: new FormGroup({
            Localidad: new FormControl(null, Validators.required),
            Barrio: new FormControl(null, Validators.required),
            Calle: new FormControl(null, Validators.required),
            Lote: new FormControl(),
            Numero: new FormControl(),
            Piso: new FormControl(),
            Depto: new FormControl(),
              })
            });
  }

  NuevoTelefono(numero, descripcion, id = null) {
    const form = new FormGroup({
      Numero: new FormControl(numero),
      Descripcion: new FormControl(descripcion)
    });

    if (id) { form.addControl('ID', new FormControl(id)); }

    return form;
  }

  GetClienteForm(id) {
    return this.common.Apollo(queryGetCliente, {Id: id})
    .valueChanges
    .pipe(
      map(({data: {Cliente} }) => {
          return this.CrearForm( Cliente[0]);
        }
      ));
  }

}
