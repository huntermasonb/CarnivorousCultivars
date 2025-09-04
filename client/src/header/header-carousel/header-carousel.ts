import {Component, inject, OnInit} from '@angular/core';
import {PlantService} from '../../Services/plant.service';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {Tag} from 'primeng/tag';

@Component({
  selector: 'app-header-carousel',
  imports: [CarouselModule, ButtonModule, Tag],
  standalone: true,
  templateUrl: './header-carousel.html',
  styleUrl: './header-carousel.css',
  providers: [PlantService]
})
export class HeaderCarouselComponent implements OnInit{
  plantService = inject(PlantService);
  public responsiveOptions: any[] | undefined;

  ngOnInit() {
    this.loadRandomPlants(2)

    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
      }
    ]
  }

  loadRandomPlants(count: number){
    this.plantService.getRandomPlants(count);
  }

  getSeverity(stock: number){
    if(stock > 10){
      return 'success';
    }
    else if (stock >= 4 ){
      return 'warn'
    }
    else{
      return 'danger'
    }
  }
}
