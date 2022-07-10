import { Component, Inject, Input, OnInit } from '@angular/core';
import {Icon, Map, Marker, tileLayer} from 'leaflet';

export const DEFAULT_LAT = 10.0755368;
export const DEFAULT_LON =  -84.3222142;
export const TITULO = 'Proyecto';
export const ResIcon = new Icon({
  iconUrl: 'assets/PIN2.png',
  iconSize: [50,65]
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

  constructor() {
  }

  ngOnInit(): void {
    const map = new Map('map').setView([DEFAULT_LAT, DEFAULT_LON], 13);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(map);

    var marker = new Marker([10.07462,-84.31006],{icon: ResIcon}).addTo(map)
    .bindPopup('<h6>Los Barriles</h6>Restaurante familiar, cocina de enfoque mixta.<br>Precio: $');
    var marker2 = new Marker([10.07492,-84.31156],{icon: ResIcon}).addTo(map)
    .bindPopup('<h6>5/20 Grill</h6>Restaurante familiar, cocina de enfoque tradicional venezolana-mixta.<br>Precio: $$');

  }

}
