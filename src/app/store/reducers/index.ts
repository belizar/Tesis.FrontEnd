import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as clientesReducer from './clientes.reducer';

export interface AppState {
}

export const reducers: ActionReducerMap<AppState> = {
  clientes: clientesReducer.reducer
};

