export class CommentsModel {


    descripcion: string;
    fecha: string;
    idRestaurante: any;
    idUsuario: any;
  
  
  
    constructor( descripcion: string, fecha: string, idRestaurante: any, idUsuario: any) {
      this.descripcion= descripcion;
      this.fecha= fecha;
      this.idRestaurante= idRestaurante;
      this.idUsuario= idUsuario;
    }
  
  }