import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from '../header/header';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
   title = 'client';
}
