import { Component, OnInit } from '@angular/core';
import { PreguntaFrecuenteModel } from '../../models/preguntaFrecuente.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FquestionsService } from 'src/app/services/fquestions.service';

@Component({
  selector: 'app-faquestions',
  templateUrl: './faquestions.component.html',
  styleUrls: ['./faquestions.component.css']
})
export class FaquestionsComponent implements OnInit {

  arrayPreguntaFrecuente: PreguntaFrecuenteModel[] = [];

  constructor(private frecuentesService: FquestionsService, private router: Router, private location: Location) { }

  ngOnInit(): void {


    this.frecuentesService.cargarPreguntasFrecuentes().subscribe(misPreguntas => {
      this.arrayPreguntaFrecuente = Object.values(misPreguntas);
      console.log(this.arrayPreguntaFrecuente);
      this.setPreguntasFrecuentes(this.arrayPreguntaFrecuente);

    });
  }

  setPreguntasFrecuentes(arrayPreguntaFrecuente: PreguntaFrecuenteModel[]) {
    this.arrayPreguntaFrecuente = arrayPreguntaFrecuente;
  }

}
