import { Component, OnInit } from '@angular/core';
import { PreguntaFrecuenteModel } from '../../models/preguntaFrecuente.model';
import { Router } from '@angular/router';
import { RestaurantesService } from 'src/app/services/restaurantes.service';

@Component({
  selector: 'app-faquestions',
  templateUrl: './faquestions.component.html',
  styleUrls: ['./faquestions.component.css']
})
export class FaquestionsComponent implements OnInit {

  arrayPreguntaFrecuente: PreguntaFrecuenteModel[] = [];

  constructor(private restaurantesService: RestaurantesService, private router: Router) { }

  ngOnInit(): void {

    //Cargar restaurantes
    // this.arrayPreguntaFrecuente.cargarPreguntasFrecuentes().subscribe(misPreguntasFrecuentes=> {
    //   console.log(misPreguntasFrecuentes);
    //   this.arrayPreguntaFrecuente = Object.values(misPreguntasFrecuentes);
    //   this.setPreguntasFrecuentes(this.arrayPreguntaFrecuente);
    // });

  }


  //Metodo para arreglo version video
  setPreguntasFrecuentes(arrayPreguntaFrecuente: PreguntaFrecuenteModel[]) {
    this.arrayPreguntaFrecuente = arrayPreguntaFrecuente;
  }

}
