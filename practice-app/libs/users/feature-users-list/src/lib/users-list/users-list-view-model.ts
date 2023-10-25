import {DeepReadonly} from "../../../../../core/utils/src";

export type UsersListVM = DeepReadonly<{
  users: UsersVM[]
}>

export type UsersVM = DeepReadonly<{
  id:       number;
  name:     string;
  username: string;
  email:    string;
}>
