import {Component, Input, ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersListVM} from "./users-list-view-model";

@Component({
  selector: 'lib-users-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class UsersListComponent {
  @Input({required: true})
  vm!: UsersListVM;

}
