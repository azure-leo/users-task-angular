import {ComponentStore} from "@ngrx/component-store";
import {inject, Injectable} from "@angular/core";
import {UsersEntity, UsersFacade} from "@users/users/data-access";
import {DeepReadonly} from "@users/core/utils";
import {UsersVM} from "../users-vm";
import {tap} from "rxjs";
import {usersVMAdapter} from "../users-vm.adapter";

type UsersListState = DeepReadonly<{
  users: UsersVM[],
}>

const initialState: UsersListState = {
  users: [],
}

@Injectable()
export class UsersListContainerStore extends ComponentStore<UsersListState> {
  public readonly users$ = this.select(({users}) => users)
  private readonly usersFacade = inject(UsersFacade);
  public readonly status$ = this.select(
    this.usersFacade.status$,
    status => status
  )

  constructor() {
    super(initialState);
    this.usersFacade.init();
    this.setUsersFromGlobalToLocalStore()
  }

  private setUsersFromGlobalToLocalStore() {
    this.effect(
      () => this.usersFacade.allUsers$.pipe(
        tap(
          (users) => {
            this.patchUsers(users)
          }
        )
      )
    )
  }

  private patchUsers(users: UsersEntity[]) {
    this.patchState({users: users.map(
        user => usersVMAdapter.entityToVM(user)
      )})
  }

  public deleteUser(user: UsersVM) {
    this.usersFacade.deleteUser(user.id);
  }
}
