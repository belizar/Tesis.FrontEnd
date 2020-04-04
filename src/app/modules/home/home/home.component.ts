import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MostrarClientes } from 'src/app/store/actions/clientes.actions';
import { AppState } from 'src/app/store/reducers';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courses : any;
  constructor() { }

  ngOnInit() {
  }

}
