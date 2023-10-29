import {
  ChangeDetectionStrategy,
  Component, EventEmitter,
  Input, Output,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListVM } from './users-list-view-model';
import {TuiIslandModule} from "@taiga-ui/kit";
import {TuiButtonModule} from "@taiga-ui/core";
import {UsersCardComponent} from "../users-card/users-card.component";
import {UsersVM} from "../users-vm";

@Component({
  selector: 'users-task-users-list',
  standalone: true,
  imports: [CommonModule, TuiIslandModule, TuiButtonModule, UsersCardComponent],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  @Input({required: true})
  vm!: UsersListVM;

  @Output() deleteUser = new EventEmitter()

  onDeleteUser(user: UsersVM) {
    this.deleteUser.emit(user)
  }
}
