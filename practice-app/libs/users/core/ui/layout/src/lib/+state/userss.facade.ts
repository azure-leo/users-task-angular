import { Injectable, inject } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as UserssActions from './userss.actions';
import * as UserssFeature from './userss.reducer';
import * as UserssSelectors from './userss.selectors';

@Injectable()
export class UserssFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(UserssSelectors.selectUserssLoaded));
  allUserss$ = this.store.pipe(select(UserssSelectors.selectAllUserss));
  selectedUserss$ = this.store.pipe(select(UserssSelectors.selectEntity));

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(UserssActions.initUserss());
  }
}
