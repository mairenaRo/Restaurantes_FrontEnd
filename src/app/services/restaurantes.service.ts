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



  //crearRestaurante
  // crearRestaurante(restaurante: RestauranteModel) {

  //   return this.http.post(`${this.url} /restaurantes.json`, restaurante);

  // }


  //actualizarRestaurante (Observable)

  //obtenerRestaurante
  getRestaurante() {
    return this.http.get(`${this.url}/Restaurantes.json`)
      .pipe(
        map( this.crearArreglo)
      );
  }

  private crearArreglo( restauranteObj: object) {

    const restaurantes: RestauranteModel[] = [];

    console.log(restauranteObj);

    if (restauranteObj == null) { return []; }



    //ESTO DE AQUI ES PARA VERLO COMO UN ARREGLO
    // Object.keys(restauranteObj).forEach(key => {
    // const restaurante: RestauranteModel = restauranteObj[key];
    //   restaurante.id = key;
    //   heroes.push(restaurante);
    // });

    return 'Hola Mundo';
  }



}


