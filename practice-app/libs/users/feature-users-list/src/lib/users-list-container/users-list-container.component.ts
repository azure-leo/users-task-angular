import {Component, inject, ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersListComponent} from "../users-list/users-list.component";
import { UsersFacade } from '@users/data-access';
import { UsersEntity } from '@users/data-access';
import {map} from "rxjs";
import {UsersListVM} from "../users-list/users-list-view-model";

@Component({
  selector: 'lib-users-list-container',
  standalone: true,
  imports: [CommonModule, UsersListComponent],
  templateUrl: './users-list-container.component.html',
  styleUrls: ['./users-list-container.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class UsersListContainerComponent {

  private readonly userFacade = inject(UsersFacade)
  public readonly users$ = this.userFacade.allUsers$.pipe(
    map<UsersEntity[], UsersListVM>((users) => ({
  users
    }))
  )

  constructor() {
    this.userFacade.init();
  }
}
