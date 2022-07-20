import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommentsModel } from './comments.services';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private url = 'https://restaurantes-app-27649-default-rtdb.firebaseio.com';

  constructor(private httpClient: HttpClient) { }

  comentarios: CommentsModel[]= [
    new CommentsModel ("Muy buena comida", "12/07/2022", 1, "Kq2pJLeQbjgCwMvL6WlGrgyOu4j2"),
  ];

  cargarComentarios() {
    return this.httpClient.get(`${this.url}//Comentarios.json`);
  }

  guardarComentarios(cometario: CommentsModel[]){
    this.httpClient.put(`${this.url}//Comentarios.json`, cometario).subscribe(
      response=>console.log("Se han guardado los comentarios: " + response),
      error=> console.log("Error: "+error),
    );
  }







}
