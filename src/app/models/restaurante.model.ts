

export class RestauranteModel {

  id: any;
  nombre: string;
  descripcion: string;
  precio: string;
  valoracion: number;
  lat: number;
  lon: number;



  constructor() {

    this.id = 0;
    this.nombre = "";
    this.descripcion = "";
    this.precio = "";
    this.valoracion = 0;
    this.lat = 0;
    this.lon = 0;

  }

}
