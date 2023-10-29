import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListContainerComponent } from '@users/feature-users-list';

@Component({
  selector: 'users-task-home',
  standalone: true,
  imports: [CommonModule, UsersListContainerComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
}
