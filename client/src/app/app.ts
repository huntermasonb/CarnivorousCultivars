import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from '../header/header';
import {HttpClient} from '@angular/common/http';
import {HeaderCarouselComponent} from '../header/header-carousel/header-carousel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HeaderCarouselComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class AppComponent {
   title = 'client';
}
