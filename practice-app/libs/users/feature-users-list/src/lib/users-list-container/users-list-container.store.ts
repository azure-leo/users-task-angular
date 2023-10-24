import {ComponentStore} from "@ngrx/component-store";
import {Injectable} from "@angular/core";
import {UsersEntity} from "@users/data-access";

type UsersListState = Readonly<{
  users: UsersEntity[],
}>

@Injectable()
export class UsersListContainerStore extends ComponentStore<{}> {

}
