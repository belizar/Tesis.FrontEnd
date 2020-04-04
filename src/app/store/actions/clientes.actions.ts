import { createAction, props } from '@ngrx/store';
import { Cliente, TipoDeTelefono } from 'src/app/models/cliente';

export const CrearCliente = createAction(
  'CREAR_CLIENTE',
  props<{cliente: Cliente}>()
);

export const CrearClienteComplete = createAction(
  'CREAR_CLIENTE_COMPLETE'
);

export const CrearClienteFailure = createAction(
  'CREAR_CLIENTE_FAILURE'
);

export const MostrarClientes = createAction(
  'MOSTRAR_CLIENTES'
);

export const MostrarClientesComplete = createAction(
  'MOSTRAR_CLIENTES_COMPLETE',
  props<{clientes: any}>()
);

export const MostrarCliente = createAction(
  'MOSTRAR_CLIENTE',
  props<{id: string}>()
);

export const MostrarClienteComplete = createAction(
  'MOSTRAR_CLIENTE_COMPLETE',
  props<{cliente: any}>()
);

export const ActualizarCliente = createAction(
  'ACTUALIZAR_CLIENTE'
);

export const ActualizarClienteComplete = createAction(
  'ACTUALIZAR_CLIENTE_COMPLETE'
);

export const ActualizarClienteFailure = createAction(
  'ACTUALIZAR_CLIENTE_FAILURE'
);

