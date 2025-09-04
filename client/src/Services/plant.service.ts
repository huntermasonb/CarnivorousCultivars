import {inject, Injectable, signal} from '@angular/core';
import {environment} from '../../Environments/environment.development';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Plant } from '../Models/Plant';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  //Inject httpClient to make http requests, get apiurl from environment.dev...ts, create empty signal of type Plants[]
  private http = inject(HttpClient);
  apiUrl: string = environment.apiUrl;
  plants = signal<Plant[]>([]);


  getAllPlants() {
    return this.http.get<Plant[]>(this.apiUrl).subscribe({
      next: plants => this.plants.set(plants),
      error: error => console.error('Error getting plants from getAllPlants()', error)
    });
  }

  getPlant(name: string){
    const plantName = this.plants().find(x => x.Name === name);
    if (plantName !== undefined) return of(plantName);
    return this.http.get<Plant>(this.apiUrl + name);
  }

  getRandomPlants(count: number){
    const params = new HttpParams().set('count', count);
    return this.http.get<Plant[]>(this.apiUrl + `random`, {params}).subscribe({
      next: plants => this.plants.set(plants),
      error: error => console.error("Error getting plants from getRandomPlants()", error)
    });
  }
}
