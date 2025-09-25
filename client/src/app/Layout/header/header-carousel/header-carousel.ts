import {Component, inject, OnInit} from '@angular/core';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {Tag} from 'primeng/tag';
import {PlantService} from '../../../Services/plant.service';
import {Plant} from '../../../Models/Plant';

@Component({
  selector: 'app-header-carousel',
  imports: [CarouselModule, ButtonModule, Tag],
  templateUrl: './header-carousel.html',
  styleUrl: './header-carousel.css',
  providers: [PlantService],
  standalone: true,
})
export class HeaderCarouselComponent implements OnInit{
  plantService = inject(PlantService);
  plants: Plant[] = [];
  public responsiveOptions: any[] | undefined;

  ngOnInit() {
    this.loadRandomPlants(6)

    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 2
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 2
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
    this.plantService.getRandomPlants(count).subscribe({
      next: p =>{
        this.plants = p;
      }
    });
  };
}
