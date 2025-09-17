import {Component} from '@angular/core';
import { RouterOutlet} from '@angular/router';
import {HeaderComponent} from './Layout/header/header';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class AppComponent {
   title = 'client';
}
