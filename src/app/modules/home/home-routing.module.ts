import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from '../../guards/auth-guard.service';

const routes: Routes = [
  {
    path: 'app',
    component: HomeComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: 'clientes', loadChildren: () => import('../clientes/clientes.module').then(m => m.ClientesModule)},
      { path: 'creditos', loadChildren: () => import('../creditos/creditos.module').then(m => m.CreditosModule)},
      { path: 'contabilidad', loadChildren: () => import('../contabilidad/contabilidad.module').then(m => m.ContabilidadModule)},
    ],
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
