import {Component, inject} from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {UsersApiService} from "../../../../libs/users/data-access/src/lib/UsersApiService.service";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'practice-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersApiService]
})
export class AppComponent {
  title = 'practice-app';
  private readonly usersApiService = inject(UsersApiService)
}
