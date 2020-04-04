export class Movimiento {

  Fecha?: Date;
  Tipo?: TipoDeMovimiento;
  Monto?: number;
  Saldo?: number;
  Concepto?: string;
  TipoId?: number;
}

export class TipoDeMovimiento {
  ID?: number;
  Nombre: string;
}
