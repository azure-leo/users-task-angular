import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersListComponent} from "../users-list/users-list.component";

@Component({
  selector: 'lib-users-list-container',
  standalone: true,
  imports: [CommonModule, UsersListComponent],
  templateUrl: './users-list-container.component.html',
  styleUrls: ['./users-list-container.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class UsersListContainerComponent {

}
