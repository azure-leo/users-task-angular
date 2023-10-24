import { createAction, props } from '@ngrx/store';
import { UserssEntity } from './userss.models';

export const initUserss = createAction('[Userss Page] Init');

export const loadUserssSuccess = createAction(
  '[Userss/API] Load Userss Success',
  props<{ userss: UserssEntity[] }>()
);

export const loadUserssFailure = createAction(
  '[Userss/API] Load Userss Failure',
  props<{ error: any }>()
);
