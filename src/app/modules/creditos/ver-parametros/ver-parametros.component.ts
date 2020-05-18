import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers/creditos.reducer';

@Component({
  selector: 'app-ver-parametros',
  templateUrl: './ver-parametros.component.html',
  styleUrls: ['./ver-parametros.component.css']
})
export class VerParametrosComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

}
