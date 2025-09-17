import {Component, inject, OnInit, } from '@angular/core';
import {PlantService} from '../../../Services/plant.service';
import {CardComponent} from '../card/card.component';

@Component({
  selector: 'app-flytrap',
  imports: [CardComponent],
  templateUrl: './flytrap.html',
  styleUrl: './flytrap.css',
  standalone: true,
  providers: [PlantService],
})
export class FlytrapComponent implements OnInit {
  protected plantService = inject(PlantService);

  ngOnInit() {
    //load venus flytrap, type = 1 in db
    this.loadPlantType(1)
  }

  loadPlantType(type: number){
    this.plantService.getPlantType(type).subscribe({
    /* next: (plants) => {
       console.log('Plants loaded successfully:', plants);
     },*/
    });
  }
}
