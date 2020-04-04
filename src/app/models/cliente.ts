import { NotificationComponent } from '../modules/appcommon/notification/notification.component';

export class Cliente {
  public ID?: number;
  public NroCliente?: number;
  public Nombre?: String;
  public Apellido?: String;
  public CUIL?: number;
  public Email?: string;
  public FechaDeNacimiento?: Date;
  public DomicilioPersonal?: Domicilio;
  public Trabajos?: Array<Trabajos>;
  public Telefonos?: Array<Telefono>;
}


export class ClienteForm {
  public ID?: number;
  public NroCliente?: number;
  public Nombre?: String;
  public Apellido?: String;
  public CUIL?: number;
  public Email?: string;
  public FechaDeNacimiento?: Date;
  public DomicilioPersonal?: Domicilio;
  public Trabajos?: Trabajos;
  public Telefonos?: Array<Telefono>;
}

export class Telefono {
  ID?:  number;
  Numero?: number;
  Descripcion: string;
}

export class TipoDeTelefono {


  constructor({ID = null, Nombre = null}) {
    this.ID = ID;
    this.Nombre = Nombre;
  }

  ID?: number;
  Nombre?: number;
}

export class EstadoCliente {
  ID?: Estado;
  Nombre?: String;
}

export enum Estado {
  // badge-info
  ActivoSinCredito = 1,

  // badge-warning
  EnMora = 2,

  // badge-success
  CreditoActivoAlDia = 3
}

export class Domicilio {
  public Localidad?: String;
  public Barrio?: String;
  public Calle?: String;
  public Numero?: number;
  public Lote?: number;
  public Manzana?: number;
  public Piso?: number;
  public Depto?: string;

  
  get textoDireccion() {
    return `${this.Localidad}, ${this.Barrio}, ${this.Calle} ${this.Numero}`;
  }
}

export class Trabajos {
  public ID?: number;
  public LugarDeTrabajo: String;
  public Sueldo: number;

  private _sueldo: number;
  public get sueldo(): number {
    return this._sueldo as number;
  }
  public set sueldo(v: number) {
    this._sueldo = v;
  }

  public Cargo: String;
  public FechaDeIngreso: Date;
  public DomicilioLaboral: Domicilio;
  public esActual?: boolean;
  public TelefonoLaboral?: number;

  public get FechaDeIngresoAsDate(): Date {
    let fecha: Date;

    if ( typeof this.FechaDeIngreso === 'string') {
     fecha = new Date(this.FechaDeIngreso);
    }
    return fecha;
  }
}
