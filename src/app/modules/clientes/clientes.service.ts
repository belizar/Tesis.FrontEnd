import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from 'src/app/models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) {
  }

  Crear(cliente: Cliente) {
    return this.http.post('clientes/create', cliente);
  }

  Actualizar(cliente: Cliente) {
    return this.http.post('clientes/create', cliente);
  }

}
