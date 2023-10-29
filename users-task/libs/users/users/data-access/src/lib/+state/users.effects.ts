import { inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';
import * as UsersActions from './users.actions';
import { ApiService } from '@users/core/http';
import {UsersEntity} from "./users.models";
import {UserDTO} from "../user-dto.model";
import {userDTOAdapter} from "../user-dto.adapter";

export const userEffects = createEffect(() => {
  const actions$ = inject(Actions);
  const apiService = inject(ApiService);
  actions$.subscribe(console.log);
  return actions$.pipe(
    ofType(UsersActions.initUsers),
    switchMap(
      () => apiService.get<UserDTO[]>('/users').pipe(
        map(
          (users) => UsersActions.loadUsersSuccess({
            users: users.map(
              user => userDTOAdapter.DTOtoEntity(user)
            )
          })
          ),
          catchError((error) => {
            console.error('Error', error);
            return of(UsersActions.loadUsersFailure({ error }));
          })
        )
      ),
    ) }, { functional: true})

export const deleteUser = createEffect(
  () => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);
    return actions$.pipe(
      ofType(UsersActions.deleteUser),
      // delay(1500),
      switchMap(
        ({ id }) => apiService.delete<void>(`/users/${id}`).pipe(
          map(() => UsersActions.deleteUserSuccess({ id })),
          catchError((error) => {
            console.error('Error', error);
            return of(UsersActions.deleteUserFailed({ error }))
          })
        )
      ),
    )
  }, { functional: true }
)
