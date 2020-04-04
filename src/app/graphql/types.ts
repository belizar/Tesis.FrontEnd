export type Query = {
    Clientes: Cliente[];
}

export type Cliente = {
  ID: number;
  Apellido: string;
  Nombre: string;
  
}

export type Trabajo = {
  Cargo: string;
  ClienteID: number;
  DomicilioLaboral: Domicilio;
  FechaDeIngreso: Date;
  ID: number;
  LugarDeTrabajo: string;
}

export type Domicilio = {
  Barrio: string;
  Calle: string;
  Depto: string;
  Localidad: string;
  Lote: number;
  Manzana: number;
  Numero: number;
  Piso: number;
}


export type TipoDeTelefono = {
  ID: number;
  Nombre: string;
}