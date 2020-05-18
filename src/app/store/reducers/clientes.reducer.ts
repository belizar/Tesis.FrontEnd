import { Cliente } from 'src/app/graphql/types';

import { Action, createReducer, on } from '@ngrx/store';
import * as ClientesActions from '../actions/clientes.actions';

export const clientesFeatureKey = 'clientes';

export interface State {
  clientesList: Cliente[];
  cliente: Cliente;
}

export const initialState: State = {
  clientesList: null,
  cliente: null
};

const clientesReducer = createReducer(
  initialState,
  on(ClientesActions.MostrarClientesComplete, (state, {clientes}) => ({...state, clientesList: clientes})),
  on(ClientesActions.MostrarClienteComplete, (state, {cliente}) => ({...state, cliente})),
)

export function reducer(state = initialState, action: Action): State {
    return clientesReducer(state, action);
}
