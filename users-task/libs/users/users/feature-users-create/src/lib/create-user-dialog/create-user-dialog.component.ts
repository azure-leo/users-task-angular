import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'users-task-create-user-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-user-dialog.component.html',
  styleUrls: ['./create-user-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUserDialogComponent {}
