import { TuiRootModule, TuiDialogModule, TuiAlertModule } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent, HeaderComponent } from '@users-task/layout';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, TuiRootModule, TuiDialogModule, TuiAlertModule],
  selector: 'users-task-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'users-app';
}
