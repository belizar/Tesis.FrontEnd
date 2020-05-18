
import { createAction, props } from '@ngrx/store';
import { ParametroCrediticio } from 'src/app/models/parametro-crediticio';

export const CrearParametro = createAction(
  'CREAR_PARAMETRO',
  props<{parametro: any}>()
);

export const CrearParametrosComplete = createAction(
  'CREAR_PARAMETRO_COMPLETE'
);

export const CrearParametrosFailure = createAction(
  'CREAR_PARAMETRO_FAILURE'
);

export const MostrarParametros = createAction(
  'MOSTRAR_PARAMETROS'
);

export const MostrarParametrosComplete = createAction(
  'MOSTRAR_PARAMETROS_COMPLETE',
  props<{parametros: any}>()
);