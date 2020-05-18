import { Cliente } from './cliente';
import { ParametroCrediticio } from './parametro-crediticio';

export class Cuota {
  ID?: number;
  Numero?: number;
  Monto?: number;
  MontoPorMora?: number;
  Interes?: number;
  Vencimiento?: Date;
  Pagada?: boolean;
  DiasDeMora?: number;
}

export class Credito {
  ID?: number;
  Propietario?: Cliente;
  Garante?: Cliente;
  Cuotas?: Array<Cuota>;
  Parametros?: ParametroCrediticio;
  PropietarioID?: number;
  GaranteID?: number;
  ParametroID?: number;
  EstadoDeCreditoID?: number;
  EstadoActual?: EstadoDeCredito;
  FechaAlta?: Date;
  SituacionCrediticia?: number;
  MontoSolicitado?: number;
  GastosAdministrativos?: number;
  NroCredito?: number;
  Garantes?: Array<GaranteEnCredito>;
}

export class GaranteEnCredito {
  GaranteID?: number;
}

export class EstadoDeCredito {
  ID?: number;
  Nombre?: string;
}



