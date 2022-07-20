import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FquestionsService {

  private url = 'https://restaurantes-app-27649-default-rtdb.firebaseio.com';

  constructor(private httpClient: HttpClient) { }

  cargarPreguntasFrecuentes() {
    return this.httpClient.get(`${this.url}//Preguntas.json`);
  }
}



