import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RestaurantesService } from 'src/app/services/restaurantes.service';
import { RestauranteModel } from '../../models/restaurante.model';


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurantes: RestauranteModel[] = [];

  constructor(private restaurantesService: RestaurantesService, private router: Router) { }

  ngOnInit() {

    //Cargar Restaurante Video
    this.restaurantesService.cargarRestaurantes().subscribe(misRestaurantes => {
      console.log(misRestaurantes);
      this.restaurantes = Object.values(misRestaurantes);
      this.setRestaurantes(this.restaurantes);
    });
  }

  //Metodo para arreglo version video
  setRestaurantes(arrayRestaurantes: RestauranteModel[]) {

    this.restaurantes = arrayRestaurantes;

  }


  //Metodo que redirecciona a Restaurant-detail
  showDetails(){
    this.router.navigateByUrl("/RestaurantDetailComponent");
  }

}
