import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { MostrarClientes } from '../../../store/actions/clientes.actions';
import { State } from 'src/app/store/reducers/clientes.reducer';
import { Subscription, Observable } from 'rxjs';
import * as $ from 'jquery';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {
  
  storeSubscription: Subscription;
  clientes$: Observable<any>;

  constructor(private store: Store<State>, private router : Router) { }

  ngOnInit() {
    this.clientes$ = this.store.pipe(map(({clientes:{clientesList}}: any)  => clientesList));

    this.store.dispatch(MostrarClientes());
  }

  editar(id: number) {
    this.router.navigate(['app','clientes', 'editar', id]);
  }

}
