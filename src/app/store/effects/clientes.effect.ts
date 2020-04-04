import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { getClientes, getCliente } from 'src/app/graphql/queries';
import { MostrarClientesComplete, CrearClienteComplete, MostrarClienteComplete } from '../actions/clientes.actions';
import { ClientesService } from 'src/app/modules/clientes/clientes.service';
import { CommonService } from 'src/app/modules/home/home/common.service';
import { Router } from '@angular/router';

@Injectable()
export class ClientesEffects {

  constructor(private actions: Actions,
              private common: CommonService,
              private clientes: ClientesService,
              private router: Router,
              // private notification: NotificationService
              ) {
  }

  @Effect()
  MostrarClientes: Observable<any> = this.actions
                                          .pipe(
                                            ofType('MOSTRAR_CLIENTES'),
                                            switchMap( payload =>
                                              this.common.Apollo(getClientes)
                                                  .valueChanges
                                                  .pipe(
                                                    map(result => 
                                                      {
                                                        console.log(result);
                                                        return MostrarClientesComplete({clientes: result.data.Clientes})
                                                      })
                                                  )
                                            )
                                          )

  @Effect()
  CrearCliente: Observable<any> = this.actions
                                          .pipe(
                                            ofType('CREAR_CLIENTE'),
                                            switchMap( (payload: any) =>
                                              this.clientes.Crear(payload.cliente)
                                                  .pipe(
                                                        map(res => { 
                                                            // this.notification.Success('Guardado con Éxito');
                                                            return CrearClienteComplete();
                                                          }
                                                        )
                                                  )
                                            ),
                                            catchError( (error, caught) => {
                                               CrearClienteComplete();
                                               return caught;
                                              })
                                          );

@Effect()
MostrarCliente: Observable<any> = this.actions
                                        .pipe(
                                          ofType('MOSTRAR_CLIENTE'),
                                          switchMap( ({id}) =>
                                          {
                                            return this.common.Apollo(getCliente, {Id: id})
                                              .valueChanges
                                              .pipe(
                                                map(({data: {Cliente} }) => { 
                                                    return MostrarClienteComplete({cliente: Cliente[0]});
                                                  }
                                                )
                                              )
                                            }
                                          )
                                        );


@Effect({dispatch: false})
CrearClienteComplete: Observable<any> = this.actions
                                        .pipe(
                                          ofType('CREAR_CLIENTE_COMPLETE'),
                                          tap( () =>
                                          {
                                            this.router.navigate(['app', 'clientes', 'ver']);
                                            }
                                          )
                                        );

                                        

}