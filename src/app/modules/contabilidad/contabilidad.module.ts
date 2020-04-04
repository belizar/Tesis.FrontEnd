import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContabilidadComponent } from './contabilidad/contabilidad.component';
import { ContabilidadRoutingModule } from './contabilidad-routing.module';
import { MovimientoItemComponent } from './movimiento-item/movimiento-item.component';
import { FormsModule } from '@angular/forms';
import { AppcommonModule } from '../appcommon/appcommon.module';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ContabilidadComponent, MovimientoItemComponent],
  imports: [
    CommonModule,
    ContabilidadRoutingModule,
    FormsModule,
    AppcommonModule,
    NgbPopoverModule,

  ]
})
export class ContabilidadModule { }
