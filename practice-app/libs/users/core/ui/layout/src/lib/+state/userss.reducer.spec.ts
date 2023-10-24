import { Action } from '@ngrx/store';

import * as UserssActions from './userss.actions';
import { UserssEntity } from './userss.models';
import {
  UserssState,
  initialUserssState,
  userssReducer,
} from './userss.reducer';

describe('Userss Reducer', () => {
  const createUserssEntity = (id: string, name = ''): UserssEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Userss actions', () => {
    it('loadUserssSuccess should return the list of known Userss', () => {
      const userss = [
        createUserssEntity('PRODUCT-AAA'),
        createUserssEntity('PRODUCT-zzz'),
      ];
      const action = UserssActions.loadUserssSuccess({ userss });

      const result: UserssState = userssReducer(initialUserssState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = userssReducer(initialUserssState, action);

      expect(result).toBe(initialUserssState);
    });
  });
});
