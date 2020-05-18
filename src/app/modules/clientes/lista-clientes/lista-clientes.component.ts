import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { MostrarClientes } from '../../../store/actions/clientes.actions';
import { State } from 'src/app/store/reducers/clientes.reducer';
import { Subscription, Observable } from 'rxjs';
import * as $ from 'jquery';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FooterPagerService } from '../../appcommon/footer-pager/footer-pager.service';
import { ListaClientesService } from './lista-clientes.service';
import { ModalPreview } from 'src/app/models/preview-modal';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  storeSubscription: Subscription;
  clientes$: Observable<any>;
  showModal = false;
  modalModel: ModalPreview;
  clientId: number;

  constructor(private listaClientesService: ListaClientesService) { }

  ngOnInit() {
    this.clientes$ = this.listaClientesService.clientes$;
    this.listaClientesService.init();
  }

  editar() {
    this.listaClientesService.editar(this.clientId);
  }

  previewClient(id: number) {
    this.clientId = id;
    this.listaClientesService
        .getModalDataCliente(id)
        .subscribe(res => {
          this.modalModel = res;
          this.showModal = true;
        });
  }

  closeModal() {
    this.showModal = false;
  }

}
