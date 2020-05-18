import { Cliente } from 'src/app/graphql/types';
import { Action, createReducer, on } from '@ngrx/store';

import { ParametroCrediticio } from 'src/app/models/parametro-crediticio';
import * as CreditosActions from '../actions/creditos.actions';

export const clientesFeatureKey = 'clientes';

export interface State {
  parametros: ParametroCrediticio[];
  parametro: ParametroCrediticio;
}

export const initialState: State = {
  parametros: null,
  parametro: null
};

const clientesReducer = createReducer(
  initialState,
  on(CreditosActions.MostrarParametrosComplete, (state, {parametros}) => ({...state, parametrosList: parametros})),
  on(CreditosActions.CrearParametro, (state, {parametro}) => ({...state, parametro})),
)

export function reducer(state = initialState, action: Action): State {
    return clientesReducer(state, action);
}
