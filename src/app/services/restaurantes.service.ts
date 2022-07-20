import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestauranteModel } from '../models/restaurante.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {

  //Propiedad url para llamarlo en todos
  private url = 'https://restaurantes-app-27649-default-rtdb.firebaseio.com';



  constructor(private httpClient: HttpClient) { }


  //Ronny
  getRestaurantes() {
    return this.httpClient.get(`${this.url}//Restaurantes 2.json`);
  }

  //Video
  cargarRestaurantes() {
    return this.httpClient.get(`${this.url}//Restaurantes 2.json`);
  }

  //Video
  cargarPreguntasFrecuentes() {
    return this.httpClient.get(`${this.url}//Preguntas.json`);



  }

}
