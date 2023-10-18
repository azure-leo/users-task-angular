import {Component, inject} from '@angular/core';
import { RouterModule } from '@angular/router';
import {UsersApiService} from "@users/data-access";
import {FooterComponent, HeaderComponent} from "@users/core/ui/layout";


@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  selector: 'practice-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersApiService]
})
export class AppComponent {
  title = 'practice-app';
  private readonly usersApiService = inject(UsersApiService)
}

