import {ComponentStore} from "@ngrx/component-store";
import {inject, Injectable} from "@angular/core";
import {UsersFacade} from "@users/data-access";
// import {DeepReadonly} from "../../../../../core/utils/src";

import {DeepReadOnly} from "@users/core/utils";
import {DeepReadonly} from "../../../../../core/utils/src";
import {Store} from "@ngrx/store";
import {UsersVM} from "../users-list/users-list-view-model";

type UsersListState = DeepReadonly<{
  users: UsersVM[],
  status: 'init' | 'loading' | 'loaded' | 'error'
}>;

const initialState: UsersListState = {
  users: [],
  status: 'init'

}


@Injectable()
export class UsersListContainerStore extends ComponentStore<UsersListState> {
  private readonly usersFacade = inject(UsersFacade)

  private readonly users$ = this.select(this.usersFacade.allUsers$, users => users)
  constructor() {
    super(initialState);

  }
}
