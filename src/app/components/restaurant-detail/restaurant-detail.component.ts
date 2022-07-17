import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.services';
import { RestaurantesService } from 'src/app/services/restaurantes.service';
import { RestauranteModel } from '../../models/restaurante.model';


@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  userLogged = this.userService.getCurrentUser();

  restaurantesDetallado: RestauranteModel[] = [];


  constructor(private restaurantesService: RestaurantesService,private userService: UserService) { }

  ngOnInit(): void {

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


  definirRestaurante(arrayRestaurantes: RestauranteModel[]) {




  }


}
