import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'users-task-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {}
