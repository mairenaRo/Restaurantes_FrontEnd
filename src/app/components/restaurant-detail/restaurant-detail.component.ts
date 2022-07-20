import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.services';
import { RestaurantesService } from 'src/app/services/restaurantes.service';
import { RestauranteModel } from '../../models/restaurante.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  userLogged = this.userService.getCurrentUser();

  restaurantesDetallado: RestauranteModel[] = [];

  restauranteDetallado: any;

  constructor(private location: Location, private router: Router, private restaurantesService: RestaurantesService, private userService: UserService) { }

  ngOnInit(): void {

    let restaurante: any = this.location.getState();
    this.restauranteDetallado = restaurante.data.restaurante;


    //Cargar restaurantes
    this.restaurantesService.cargarRestaurantes().subscribe(misRestaurantes => {
      console.log(misRestaurantes);
      this.restaurantesDetallado = Object.values(misRestaurantes);
      this.setRestaurantes(this.restaurantesDetallado);
    });

  }

  //Metodo para arreglo version video
  setRestaurantes(arrayRestaurantes: RestauranteModel[]) {
    this.restaurantesDetallado = arrayRestaurantes;
  }





}
