import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {

  constructor(private http: HttpClient) { }

  //Il metodo fa una chiamata Http al server
  getAnimals() {
    return this.http.get<VettAnimal>('/api/animals');
  }
  httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  sendNewAnimal(animal : Animal) : Observable<Animal>
  {
    return this.http.post<Animal>('/api/newAnimal',animal,this.httpOptions)
  }
}

/*
Definisco il tipo di dato che mi aspetto di ricevere dal server 
"animals": [
  {
    "id": 1,
    "name": "Lion",
    "type": "wild"
  },
  ....
  }
]*/

export interface VettAnimal {
  [animals: string]: Animal[]
}
export interface Animal {
  id: string;
  name: string;
  type: any;
}
