import { Component, inject, OnInit, } from '@angular/core';
import {PlantService} from '../../../Services/plant.service';
import {CardComponent} from '../card/card.component';
import {Plant} from '../../../Models/Plant';
import { DataView } from 'primeng/dataview';
import{ Tag } from 'primeng/tag';
import { Rating } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { SelectButton } from 'primeng/selectbutton';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flytrap',
  imports: [CardComponent, DataView, Tag, Rating, ButtonModule, CommonModule, SelectButton, FormsModule],
  templateUrl: './flytrap.html',
  styleUrl: './flytrap.css',
  standalone: true,
  providers: [PlantService],
})
export class FlytrapComponent implements OnInit {
  protected plantService = inject(PlantService);
  plants: Plant[] = [];
  options = ['list', 'grid'];
  layout: "list" | "grid"  = 'grid';

  ngOnInit() {
    //load venus flytrap, type = 1 in db
    this.loadPlantType(1)
  }

  loadPlantType(type: number){
    this.plantService.getPlantType(type).subscribe({
      next: p =>{
        this.plants = p;
      }
    });
  }
}
