
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { queryGetParametros } from 'src/app/graphql/queries';
import { CommonService } from 'src/app/modules/home/home/common.service';
import { Router } from '@angular/router';
import { MostrarParametrosComplete, CrearParametrosComplete } from '../actions/creditos.actions';
import { ParametrosService } from 'src/app/modules/creditos/parametros.service';

@Injectable()
export class ParametrosEffects {

  constructor(private actions: Actions,
              private common: CommonService,
              private parametros: ParametrosService,
              private router: Router,
              // private notification: NotificationService
              ) {
  }

  @Effect()
  MostrarParametros: Observable<any> = this.actions
                                          .pipe(
                                            ofType('MOSTRAR_PARAMETROS'),
                                            switchMap( payload =>
                                              this.common.Apollo(queryGetParametros)
                                                  .valueChanges
                                                  .pipe(
                                                    map(result => {
                                                        console.log(result);
                                                        return MostrarParametrosComplete({parametros: result.data.Parametros});
                                                      })
                                                  )
                                            )
                                          );

  @Effect()
  CrearParametro: Observable<any> = this.actions
                                          .pipe(
                                            ofType('CREAR_PARAMETRO'),
                                            switchMap( (payload: any) =>
                                              this.parametros.Crear(payload.cliente)
                                                  .pipe(
                                                        map(res => {
                                                            // this.notification.Success('Guardado con Éxito');
                                                            return CrearParametrosComplete();
                                                          }
                                                        )
                                                  )
                                            ),
                                            catchError( (error, caught) => {
                                               CrearParametrosComplete();
                                               return caught;
                                              })
                                          );

@Effect({dispatch: false})
CrearParametrosComplete: Observable<any> = this.actions
                                        .pipe(
                                          ofType('CREAR_PARAMETROS_COMPLETE'),
                                          tap( () => {
                                            this.router.navigate(['app', 'creditos', 'ver-parametros']);
                                            }
                                          )
                                        );
}
