import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.services';
import { RestaurantesService } from 'src/app/services/restaurantes.service';
import { RestauranteModel } from '../../models/restaurante.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CommentsModel } from 'src/app/models/comments.modele';
import { CommentsService } from 'src/app/services/comments.service';
import { NgForm } from '@angular/forms';
import * as Notiflix from 'notiflix';


@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  userLogged = this.userService.getCurrentUser();

  restaurantesDetallado: RestauranteModel[] = [];
  historialComentarios: CommentsModel[] = [];
  comentariosActual: CommentsModel[] = [];
  newComentario: CommentsModel[] = [];
  email: any;

  restauranteDetallado: any;

  constructor(private location: Location, private router: Router, private restaurantesService: RestaurantesService, private userService: UserService, private comentariosService: CommentsService) { }

  async ngOnInit() {

    let restaurante: any = this.location.getState();
    this.restauranteDetallado = restaurante.data.restaurante;




    this.email = await this.userService.getUid();


    //Cargar restaurantes
    this.restaurantesService.cargarRestaurantes().subscribe(misRestaurantes => {
      this.restaurantesDetallado = Object.values(misRestaurantes);
      this.setRestaurantes(this.restaurantesDetallado);
    });

    this.comentariosService.cargarComentarios().subscribe(misComentarios => {
      this.historialComentarios = Object.values(misComentarios);

      this.setComentarios(this.historialComentarios);
    });






  }

  //Metodo para arreglo version video
  setRestaurantes(arrayRestaurantes: RestauranteModel[]) {
    this.restaurantesDetallado = arrayRestaurantes;
  }


  setComentarios(arrayComentarios: CommentsModel[]) {
    for (let i = 0; i < arrayComentarios.length; i++) {
      if (arrayComentarios[i].idRestaurante.toString() == this.restauranteDetallado.nombre.toString()) {
        this.comentariosActual.push(arrayComentarios[i]);
      }
    }
  }


  guardarComentario(messageForm: NgForm) {
    const form = messageForm.value;
    if (form.message == "") {
      Notiflix.Notify.failure('Error al comentar!');
    } else {
      const currentDate = new Date();

      const comment = new CommentsModel(form.message, currentDate.getDate().toString()
      +"/"+currentDate.getMonth().toString()
      +"/"+currentDate.getFullYear().toString(),
      this.restauranteDetallado.nombre, this.email);
      this.comentariosActual.push(comment);
      
      this.newComentario = this.historialComentarios;
      this.newComentario.push(comment);
      this.comentariosService.guardarComentarios(this.newComentario);
      messageForm.reset(); 
      Notiflix.Notify.success('Comentario Publicado!');
    }
  }




}
