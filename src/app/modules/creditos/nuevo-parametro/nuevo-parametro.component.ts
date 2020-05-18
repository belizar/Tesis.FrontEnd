import { Component, OnInit } from '@angular/core';
import { ParametroCrediticio } from 'src/app/models/parametro-crediticio';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers/creditos.reducer';
import { CrearParametro } from 'src/app/store/actions/creditos.actions';

@Component({
  selector: 'app-nuevo-parametro',
  templateUrl: './nuevo-parametro.component.html',
  styleUrls: ['./nuevo-parametro.component.css']
})
export class NuevoParametroComponent implements OnInit {

  parametro: ParametroCrediticio;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.parametro = new ParametroCrediticio();
  }

  guardar() {
    this.store.dispatch(CrearParametro({parametro: this.parametro}));

  }

  limpiar() {
    this.parametro = new ParametroCrediticio();
  }

}
