import {Component} from '@angular/core';
import { RouterLink, RouterLinkActive ,RouterOutlet} from '@angular/router';
import {HeaderComponent} from './Layout/header/header';



@Component({
  selector: 'app-root',
  imports: [ RouterLink, RouterLinkActive, RouterOutlet, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class AppComponent {
   title = 'client';
}
