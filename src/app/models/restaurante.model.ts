

export class RestauranteModel {

  id: any;
  descripcionDetalle: string;
  nombre: string;
  descripcion: string;
  precio: string;
  valoracion: number;
  lat: number;
  lon: number;



  constructor(id: any, descripcionDetalle: string, descripcion: string, lat: number, lon: number, nombre: string, precio: string, valoracion: number) {

    this.id = id;
    this.descripcionDetalle = descripcionDetalle;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.valoracion = valoracion;
    this.lat = lat;
    this.lon = lon;

  }

}
