import {Component, ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersListContainerComponent } from '@users/feature-users-list';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [CommonModule, UsersListContainerComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent {
}

