import { Component, Inject, Input, OnInit } from '@angular/core';
import { Icon, Map, marker, point, tileLayer } from 'leaflet';
import markers from './dataMarkers';
import { RestaurantesService } from 'src/app/services/restaurantes.service';
import { RestauranteModel } from 'src/app/models/restaurante.model';

export const DEFAULT_LAT = 10.0756213;
export const DEFAULT_LON = -84.3098116;
export const TITULO = 'Proyecto';
export const ResIcon = new Icon({
  iconUrl: 'assets/PIN2.png',
  iconSize: [50, 65]
});

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() lat: number = DEFAULT_LAT;
  @Input() lon: number = DEFAULT_LON;
  @Input() titulo: string = TITULO;

  restaurants: RestauranteModel[] = [];

  constructor(private restaurantesMarkers: RestaurantesService) {
  }

  ngOnInit(): void {
    const map = new Map('map').setView([DEFAULT_LAT, DEFAULT_LON], 15);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(map);

    // markers.map((point) => {
    //   marker([point.lat, point.lon],{icon: ResIcon}).addTo(map).bindPopup(point.name+'Descripción: '+point.description+'<br>Precio: '+point.price);
    // });

    this.restaurantesMarkers.getRestaurantes().subscribe(restaurant => {
      console.log(restaurant);
      this.restaurants = Object.values(restaurant);
      this.restaurants.map((point) => {
        if (point != null) {
          marker([point.lat, point.lon], { icon: ResIcon }).addTo(map).bindPopup('<h4>'+point.nombre+'</h4>'+ 'Descripción: ' + point.descripcion + '<br>Precio: ' + point.precio);
        }
      });
    });

  }

}
