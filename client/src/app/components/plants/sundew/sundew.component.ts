import { Component, inject, OnInit, } from '@angular/core';
import {PlantService} from '../../../Services/plant.service';
import {CardComponent} from '../../Shared/card/card.component';
import {Plant} from '../../../Models/Plant';
import {PlantTypes} from '../../../Enums/PlantTypes'
import { DataView } from 'primeng/dataview';
import{ Tag } from 'primeng/tag';
import { Rating } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { SelectButton } from 'primeng/selectbutton';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sundew',
  imports: [CardComponent, DataView, Tag, Rating, ButtonModule, CommonModule, SelectButton, FormsModule],
  templateUrl: './sundew.component.html',
  styleUrl: './sundew.component.css',
  providers: [PlantService],
})
export class SundewComponent {
  protected plantService = inject(PlantService);
  plants: Plant[] = [];
  options = ['list', 'grid'];
  layout: "list" | "grid"  = 'list';

  ngOnInit() {
    this.loadPlantType(PlantTypes.Sundew)
  }

  loadPlantType(type: number){
    this.plantService.getPlantType(type).subscribe({
      next: p =>{
        this.plants = p;
      }
    });
  }
}
