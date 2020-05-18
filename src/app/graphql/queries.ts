
import gql from 'graphql-tag';


export const queryGetParametros = gql`
    query {
            Parametros {
              ID
              CFT
              TasaMora
              TEM
            }
          }
`;

export const queryGet = gql`
  query {
    clientes {
      Apellido
      Nombre
      CUIL
      Email
      FechaDeNacimiento
    }
  }`;

export const queryGetClientes = gql`
                              query {
                                Clientes {
                                  ID
                                  Nombre
                                  Apellido
                                  DomicilioPersonal {
                                    Barrio
                                    Calle
                                    Depto
                                    Localidad
                                    Lote
                                    Manzana
                                    Numero
                                    Piso
                                  }
                                  Trabajos {
                                    Cargo
                                    ClienteID
                                    FechaDeIngreso
                                    ID
                                    LugarDeTrabajo
                                  }
                                }
                              }
                              `;


export const queryGetCliente = gql`
                                query Cliente($Id: Int!) {
                                  Cliente(Id: $Id) {
                                    Apellido
                                    FechaDeNacimiento
                                    ID
                                    Nombre
                                    Email
                                    CUIL
                                    Telefonos {
                                      ClienteID
                                      Descripcion
                                      ID
                                      Numero
                                    }
                                    DomicilioPersonal {
                                      Barrio
                                      Calle
                                      Depto
                                      Localidad
                                      Lote
                                      Manzana
                                      Numero
                                      Piso
                                    }
                                    Trabajos {
                                      Cargo
                                      ClienteID
                                      FechaDeIngreso
                                      ID
                                      LugarDeTrabajo
                                      DomicilioLaboral {
                                        Barrio
                                        Calle
                                        Depto
                                        Localidad
                                        Lote
                                        Manzana
                                        Numero
                                        Piso
                                      }
                                    }
                                  }
                                }
                              `;





export const queryGetPageCliente = gql`
query Cliente($Take: Int!, $Skip: Int!) {
  PageCliente(Take: $Take, Skip: $Skip) {
    Data {
      ID
      Nombre
      Apellido
    }
    Total
    HasNextPage
  }
}
`;


export const queryGetPage = (page) => {
  switch (page) {
    case 'PageCliente': return queryGetPageCliente;
  }
};
