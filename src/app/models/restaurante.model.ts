

export class RestauranteModel {

  id: any;
  descripcionDetalle: string;
  nombre: string;
  descripcion: string;
  foto: string;
  precio: string;
  valoracion: number;
  lat: number;
  lon: number;



  constructor(id: any, descripcionDetalle: string, foto: string, descripcion: string, lat: number, lon: number, nombre: string, precio: string, valoracion: number) {

    this.id = id;
    this.descripcionDetalle = descripcionDetalle;
    this.foto = foto;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.valoracion = valoracion;
    this.lat = lat;
    this.lon = lon;

  }

}
