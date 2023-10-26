import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '@users/core/http';

@Component({
  selector: 'users-task-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

  private readonly apiService = inject(ApiService);

  constructor() {
    this.apiService.get('/users').subscribe(res => console.log('HOME ', res));
  }
}
