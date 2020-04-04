import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ClientesModule } from '../clientes/clientes.module';
import { AppcommonModule } from '../appcommon/appcommon.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppcommonModule,
    RouterModule,
    ClientesModule
  ]
})
export class HomeModule { }
