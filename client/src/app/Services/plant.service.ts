import {inject, Injectable, signal} from '@angular/core';
import {environment} from '../../Environments/environment.development';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Plant } from '../Models/Plant';
import { of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  //Inject httpClient to make http requests, get apiurl from environment.dev...ts, create empty signal of type Plants[]
  private http = inject(HttpClient);
  apiUrl: string = environment.apiUrl;
  public plants = signal<Plant[]>([]);


  getAllPlants() {
    return this.http.get<Plant[]>(this.apiUrl).pipe(
      tap(p => this.plants.set(p))
    );
  }

  getPlant(name: string){
    const params = new HttpParams().set('name', name);
    const plantName = this.plants().find(x => x.name === params.get('name'));
    if (plantName !== undefined) return of(plantName);
    return this.http.get<Plant>(this.apiUrl + params);
  }

  getRandomPlants(count: number){
    const params = new HttpParams().set('count', count);
    return this.http.get<Plant[]>(this.apiUrl + 'random', {params}).pipe(
      tap(plants => this.plants.set(plants))
    );
  }

  getPlantType(type: number){
    const params = new HttpParams().set('type', type);
    return this.http.get<Plant[]>(this.apiUrl + `type`, {params}).pipe(
      tap(plants => { this.plants.set(plants); })
    );
  }


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
