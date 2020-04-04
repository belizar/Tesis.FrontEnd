import { Component, OnInit } from '@angular/core';
import { Movimiento } from 'src/app/models/contabilidad';

@Component({
  selector: 'app-contabilidad',
  templateUrl: './contabilidad.component.html',
  styleUrls: ['./contabilidad.component.css']
})
export class ContabilidadComponent implements OnInit {

 constructor() { }

  movimientos: Array<Movimiento>;
  esAjuste: boolean = false;
  isInputConceptoInvalid = false;
  isInputMontoInvalid = false;

  meses =  [
    {nro: 0, name: 'Enero'},
    {nro: 1, name: 'Febrero'},
    {nro: 2, name: 'Marzo'},
    {nro: 3, name: 'Abril'},
    {nro: 4, name: 'Mayo'},
    {nro: 5, name: 'Junio'},
    {nro: 6, name: 'Julio'},
    {nro: 7, name: 'Agosto'},
    {nro: 8, name: 'Septiembre'},
    {nro: 9, name: 'Octubre'},
    {nro: 10, name: 'Noviembre'},
    {nro: 11, name: 'Diciembre'}
  ];

  get totalDebe(): number {
    if (!this.movimientos.some(x => x.TipoId == 1)) return 0;

    return this.movimientos != null && this.movimientos.length > 0 ? this.movimientos
               .filter(x => x.TipoId == 1)
               .map(x => x.Monto)
               .reduce((a, b) => a + b) : 0;
  }

  get totalHaber(): number {
    if (!this.movimientos.some(x => x.TipoId == 2)) return 0;

    return this.movimientos != null && this.movimientos.length > 0 ? this.movimientos
               .filter(x => x.TipoId == 2)
               .map(x => x.Monto)
               .reduce((a, b) => a + b) : 0;
  }

  get mesActual(): number {
    // moment.months(1).
    return (new Date()).getMonth();
  }
  monto?: number;
  concepto?: string;
  mesActivo: number;
  add: boolean = false;
  debe: boolean = false;
  haber: boolean = false;

  get hoy() {
    return new Date();
  }



  ngOnInit() {
    // this.headerService.anunciarHeader('Libro Diario');
    this.mesActivo = this.mesActual;
    let date = new Date();
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    // this.contabilidadService
    //     .ObtenerMovimientos(firstDay, lastDay)
    //     .subscribe((x: any) => this.recibirMovimientos(x.Movimientos));
  }

  recibirMovimientos(value: Array<Movimiento>) {
    if (value == null || value.length == 0) return;
    value.forEach(x => x.Fecha = new Date(x.Fecha));
    this.movimientos = value;//.filter(x => (new Date(x.Fecha)).getMonth() === (this.mesActivo));
  }

  private getMonths() {
    let meses = Array.of([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

    meses.forEach(x => x);
  }

  buscar(mes) {
    this.mesActivo = mes.nro;
    let date = new Date();
    let firstDay = new Date(date.getFullYear(), mes.nro, 1);
    let lastDay = new Date(date.getFullYear(), mes.nro + 1, 0);
    // this.contabilidadService
    //     .ObtenerMovimientos(firstDay, lastDay)
    //     .subscribe((x: any) => this.recibirMovimientos(x.Movimientos));
  }

  agregarIngreso() {
    this.haber = false;
    this.debe = true;
    this.addRecord();
  }

  agregarEgreso() {
    this.haber = true;
    this.debe = false;
    this.addRecord();
  }

  addRecord() {
    this.add = true;
  }

  confirmAdd() {
    if(!(this.esConceptoValido() && this.esMontoValido()))
      return;

    let mov = new Movimiento();
    mov.Concepto = this.concepto;
    mov.Monto = this.monto;
    mov.TipoId = this.debe ? 1 : 2;
    this.esAjuste = false;
    // this.contabilidadService
    //      .Guardar(mov)
    //      .subscribe(x => this.guardadoConExito(x));
  }

  private esConceptoValido() {
    let resultado = true;
    if(this.concepto == null || this.concepto == '') resultado = false;

    this.isInputConceptoInvalid = !resultado;

    return resultado;
  }

  private esMontoValido() {
    let resultado = true;
    if(this.monto == null || this.monto == 0) resultado = false;

    this.isInputMontoInvalid = !resultado;

    return resultado;

  }

  private guardadoConExito(x: any) {
      this.concepto = null;
      this.monto = null;
      this.add = false;
      this.debe = false;
      this.haber = true;
      let date = new Date();
      let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
      let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      // this.contabilidadService
      // .ObtenerMovimientos(firstDay, lastDay)
      // .subscribe((x: any) => this.recibirMovimientos(x.Movimientos));
  }

  cancelAdd() {
    this.add = false;
    this.haber = false;
    this.debe = false;
    this.esAjuste = false;
  }

  crearAjuste(mov: Movimiento) {
    this.esAjuste = true;
    this.concepto = `Ajuste de ${mov.Concepto}`;
    this.monto = mov.Monto;

    if (mov.TipoId == 1) {
      this.agregarEgreso();
    }

    if (mov.TipoId == 2) {
      this.agregarIngreso();
    }

  }
  
}
