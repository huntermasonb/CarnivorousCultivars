import { Component } from '@angular/core';
import {HeaderCarouselComponent} from '../../Layout/header/header-carousel/header-carousel';


@Component({
  selector: 'app-home',
  imports: [
    HeaderCarouselComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
