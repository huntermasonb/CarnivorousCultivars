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
  selector: 'app-pitcher',
  imports: [CardComponent, DataView, Tag, Rating, ButtonModule, CommonModule, SelectButton, FormsModule],
  templateUrl: './pitcher.component.html',
  styleUrl: './pitcher.component.css',
  providers: [PlantService],
})
export class PitcherComponent {
  protected plantService = inject(PlantService);
  plants: Plant[] = [];
  options = ['list', 'grid'];
  layout: "list" | "grid"  = 'list';
  pitchers = ['Highland Pitcher', 'Lowland Pitcher']
  selectedPitcher: "Highland Pitcher" | "Lowland Pitcher" = 'Highland Pitcher';

  ngOnInit() {
    this.loadPlantType(this.getPitcherType())
  }

  loadPlantType(type: number){
    this.plantService.getPlantType(type).subscribe({
      next: p =>{
        this.plants = p;
      }
    });
  }

  reloadPitchers(){
    this.loadPlantType(this.getPitcherType())
  }

  private getPitcherType(){
    return this.selectedPitcher === "Highland Pitcher"
      ? PlantTypes.HighlandPitcher
      : PlantTypes.LowlandPitcher;
  }
}
