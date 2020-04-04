
import gql from 'graphql-tag';

export const getClientes =  gql`
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


export const getCliente  =  gql`
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
