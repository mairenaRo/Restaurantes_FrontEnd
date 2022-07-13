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

  // restaurante: RestauranteModel = new RestauranteModel();

  constructor(private restaurantesService: RestaurantesService, private router: Router) { }

  ngOnInit() {

    this.restaurantesService.getRestaurante()
      .subscribe(resp => {
        console.log(resp);
        this.restaurantes = resp;
      })

  }


  //para comprobar si un formulario es valido
  guadar( form: NgForm ) {

    // if (form.invalid) {
    //     console.log('Formulario no valido');
    //     return;
    // }




  }

  showDetails(){
    this.router.navigateByUrl("/RestaurantDetailComponent");
  }

}
