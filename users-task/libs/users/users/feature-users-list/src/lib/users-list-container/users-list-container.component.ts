import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from '../users-list/users-list.component';
import { UsersEntity, UsersFacade } from '@users/users/data-access';
import { map } from 'rxjs';
import { UsersListVM } from '../users-list/users-list-view-model';
import {UsersListContainerStore} from "./users-list-container.store";

@Component({
  selector: 'users-task-users-list-container',
  standalone: true,
  imports: [CommonModule, UsersListComponent],
  templateUrl: './users-list-container.component.html',
  styleUrls: ['./users-list-container.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UsersListContainerStore]
})
export class UsersListContainerComponent {
  private readonly componentStore = inject(UsersListContainerStore)
  public readonly users$ = this.componentStore.users$
  public readonly status$ = this.componentStore.status$
}
