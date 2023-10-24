import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as UserssActions from './userss.actions';
import { UserssEffects } from './userss.effects';

describe('UserssEffects', () => {
  let actions: Observable<Action>;
  let effects: UserssEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        UserssEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(UserssEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: UserssActions.initUserss() });

      const expected = hot('-a-|', {
        a: UserssActions.loadUserssSuccess({ userss: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
