import { Component, OnInit } from '@angular/core';
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
  showDetails(restaurante: any) {
    //Estamos sampandole el objeto estado en la sesion de chrome
    this.router.navigate(['/RestaurantDetailComponent'], {state: {data: {restaurante}}});
    // this.router.navigateByUrl("/RestaurantDetailComponent");
  }

}
