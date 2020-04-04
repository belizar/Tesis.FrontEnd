import { Action } from '@ngrx/store';

export enum GlobalActionTypes {
  SHOW_ERROR = '[Global] Show Error',
  SHOW_SUCCESS = '[Global] Show Success'
}

export class ShowError implements Action {
  readonly type = GlobalActionTypes.SHOW_ERROR;
  constructor(public payload: any) {}
}

export class ShowSuccess implements Action {
  readonly type = GlobalActionTypes.SHOW_SUCCESS;
  constructor(public payload: any) {}
}

export type All =
  | ShowError
  | ShowSuccess;

