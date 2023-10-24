import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as UserssActions from './userss.actions';
import * as UserssFeature from './userss.reducer';

@Injectable()
export class UserssEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserssActions.initUserss),
      switchMap(() => of(UserssActions.loadUserssSuccess({ userss: [] }))),
      catchError((error) => {
        console.error('Error', error);
        return of(UserssActions.loadUserssFailure({ error }));
      })
    )
  );
}
