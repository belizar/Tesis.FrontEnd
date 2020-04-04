import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './wizard/wizard.component';
import { DatosPersonalesComponent } from './wizard/partes/datos-personales/datos-personales.component';
import { DatosLaboralesComponent } from './wizard/partes/datos-laborales/datos-laborales.component';
import { ResumenComponent } from './wizard/partes/resumen/resumen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientesRoutingModule } from './clientes-routing.module';
import { AppcommonModule } from '../appcommon/appcommon.module';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { StoreModule } from '@ngrx/store';
import * as clientesReducer from 'src/app/store/reducers/clientes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ClientesEffects } from 'src/app/store/effects/clientes.effect';
import { HttpClientModule } from '@angular/common/http';
import { WizardService } from './wizard/wizard.service';
import { NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import { WizardEditComponent } from './wizard-edit/wizard-edit.component';
import { DatosPersonalesEditComponent } from './wizard-edit/partes/datos-personales/datos-personales-edit.component';
import { DatosLaboralesEditComponent } from './wizard-edit/partes/datos-laborales/datos-laborales-edit.component';
import { ResumenEditComponent } from './wizard-edit/partes/resumen/resumen-edit.component';


@NgModule({
  declarations: [WizardComponent, 
                 DatosPersonalesComponent, 
                 DatosLaboralesComponent, 
                 ResumenComponent,
                 ListaClientesComponent,
                  WizardEditComponent,
                  DatosPersonalesEditComponent,
                  DatosLaboralesEditComponent,
                  ResumenEditComponent],
  exports: [WizardComponent],
  providers: [WizardService],
  imports: [
    CommonModule,
    AppcommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClientesRoutingModule,
    HttpClientModule,
    StoreModule.forFeature(clientesReducer.clientesFeatureKey, clientesReducer.reducer),
    EffectsModule.forFeature([ClientesEffects]),
    NgbDatepickerModule
  ]
})
export class ClientesModule { }
