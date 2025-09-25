import { Component, Input, input } from '@angular/core';
import {Plant} from '../../../Models/Plant';
import {Tag} from 'primeng/tag'
import {Button} from 'primeng/button'

@Component({
  selector: 'app-card',
  imports: [Tag, Button],
  templateUrl: './card.component.html',
  standalone: true,
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({required:true}) plant!: Plant;

  getSeverity(stock: number){
    if(stock > 6){
      return 'success';
    }
    else if (stock >= 3 ){
      return 'warn'
    }
    else{
      return 'danger'
    }
  }
}
