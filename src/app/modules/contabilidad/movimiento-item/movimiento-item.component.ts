import { Component, OnInit, Input, ViewChild, HostBinding, Output, EventEmitter } from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { Movimiento } from 'src/app/models/contabilidad';

@Component({
  selector: 'tr[app-movimiento-item]',
  templateUrl: './movimiento-item.component.html',
  styleUrls: ['./movimiento-item.component.css']
})
export class MovimientoItemComponent implements OnInit {

  @Input() movimiento: Movimiento;
  @Input() mostrarMenu: boolean;
  @ViewChild('popOver') contextualMenu: NgbPopover;
  @Input() @HostBinding('class.table-primary') esAnterior = false;
  @Output() crearAjuste = new EventEmitter<Movimiento>();

  isOpen = false;
  constructor() { }

  ngOnInit() {
    // this.esActual = !this.mostrarMenu;
  }

  openContextualMenu(popOver, mov: Movimiento) {
    if (this.contextualMenu.isOpen()) {
      this.contextualMenu.close();
      this.isOpen = false;
    }else {
      this.contextualMenu.open();
      this.isOpen = true;
    }
  }

  cerrarMenuContextual() {
    if(this.isOpen) {
      this.isOpen = false; return;
    }
    this.contextualMenu.close();
  }

  opcionCrearAjuste() {
    this.crearAjuste.emit(this.movimiento);
    this.contextualMenu.close();
  }

}
