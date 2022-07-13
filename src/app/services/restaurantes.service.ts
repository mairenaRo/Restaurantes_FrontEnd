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

  constructor(private http: HttpClient) { }

  //obtenerRestaurante
  getRestaurante() {
    return this.http.get(`${this.url}//Restaurantes 2.json`)
      .pipe(
        map( this.crearArreglo )
      );
  }


    //Crear arreglo
    private crearArreglo( restaurantesObj: any) {

    const restaurantes: RestauranteModel[] = [];

    //ESTAS 2 FUNCIONAN
      console.log(restaurantesObj);

    if (restaurantesObj == null) { return []; }

    //ESTO DE AQUI ES PARA VERLO COMO UN ARREGLO
   /*  Object.keys(restaurantesObj).forEach(key => {
      const restaurante: RestauranteModel = restaurantesObj[key];
      restaurante.id = key;
      restaurantes.push(restaurante);
    }); */

    return restaurantes;
    //return 'hola mundo';
  }



}


