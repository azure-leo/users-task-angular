import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersVM} from "../users-vm";
import {TuiAvatarModule, TuiIslandModule} from "@taiga-ui/kit";
import {TuiButtonModule} from "@taiga-ui/core";

@Component({
  selector: 'users-task-users-card',
  standalone: true,
  imports: [CommonModule, TuiIslandModule, TuiButtonModule, TuiAvatarModule],
  templateUrl: './users-card.component.html',
  styleUrls: ['./users-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersCardComponent {
  @Input({required: true})
  user!: UsersVM;

  @Output() deleteUser = new EventEmitter()

  onDeleteUser(event: Event) {
    this.deleteUser.emit()
  }
}
