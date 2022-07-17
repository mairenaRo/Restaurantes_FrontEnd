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

  // //obtenerRestaurante Funcional
  // getRestaurante() {
  //   return this.httpClient.get(`${this.url}//Restaurantes 2.json`)
  //     .pipe(
  //       map(this.crearArreglo)
  //     );
  // }


  //Ronny
  getRestaurantes() {
    return this.httpClient.get(`${this.url}//Restaurantes 2.json`);
  }

  //Video
  cargarRestaurantes() {
    return this.httpClient.get(`${this.url}//Restaurantes 2.json`);
  }



  //Crear arreglo
  // private crearArreglo(restaurantesObj: any) {

  //   const restaurantes: RestauranteModel[] = [];

  //   //ESTAS 2 FUNCIONAN
  //   console.log(restaurantesObj);

  //   if (restaurantesObj == null) { return []; }

  //   //ESTO DE AQUI ES PARA VERLO COMO UN ARREGLO
  //   /*  Object.keys(restaurantesObj).forEach(key => {
  //      const restaurante: RestauranteModel = restaurantesObj[key];
  //      restaurante.id = key;
  //      restaurantes.push(restaurante);
  //    }); */

  //   return restaurantes;
  //   //return 'hola mundo';
  // }



}


