import { Component, Input, input } from '@angular/core';
import {Plant} from '../../../Models/Plant';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  standalone: true,
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({required:true}) plant!: Plant;
}
