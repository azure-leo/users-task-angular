import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as UserssActions from './userss.actions';
import { UserssEntity } from './userss.models';

export const USERSS_FEATURE_KEY = 'userss';

export interface UserssState extends EntityState<UserssEntity> {
  selectedId?: string | number; // which Userss record has been selected
  loaded: boolean; // has the Userss list been loaded
  error?: string | null; // last known error (if any)
}

export interface UserssPartialState {
  readonly [USERSS_FEATURE_KEY]: UserssState;
}

export const userssAdapter: EntityAdapter<UserssEntity> =
  createEntityAdapter<UserssEntity>();

export const initialUserssState: UserssState = userssAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const reducer = createReducer(
  initialUserssState,
  on(UserssActions.initUserss, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(UserssActions.loadUserssSuccess, (state, { userss }) =>
    userssAdapter.setAll(userss, { ...state, loaded: true })
  ),
  on(UserssActions.loadUserssFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function userssReducer(state: UserssState | undefined, action: Action) {
  return reducer(state, action);
}
