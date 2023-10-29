import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TuiButtonModule} from "@taiga-ui/core";

@Component({
  selector: 'users-task-create-user-button',
  standalone: true,
  imports: [CommonModule, TuiButtonModule],
  templateUrl: './create-user-button.component.html',
  styleUrls: ['./create-user-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUserButtonComponent {}
