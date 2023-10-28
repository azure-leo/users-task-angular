import {DeepReadonly} from "@users/core/utils";
import {UsersVM} from "../users-vm";
import {UserStatus} from "@users/users/data-access";

export type UsersListVM = DeepReadonly<{
  users: UsersVM[],
  status: UserStatus
}>

