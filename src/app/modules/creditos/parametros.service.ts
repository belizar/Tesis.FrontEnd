import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParametroCrediticio } from 'src/app/models/parametro-crediticio';


@Injectable({
  providedIn: 'root'
})
export class ParametrosService {

  constructor(private http: HttpClient) { }

  Crear(parametro: ParametroCrediticio) {
    return this.http.post('parametros/create', parametro);
  }

}
