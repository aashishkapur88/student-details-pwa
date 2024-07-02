import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { StudentsService } from './services/students.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // providers:  [StudentsService]
})
export class AppComponent {
  title = 'student-details-pwa';
}
