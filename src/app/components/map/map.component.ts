import { Component, Inject, Input, OnInit } from '@angular/core';
import {Icon, Map, marker, point, tileLayer} from 'leaflet';
import markers from './dataMarkers';

export const DEFAULT_LAT = 0;
export const DEFAULT_LON =  0;
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

    markers.map((point) => {
      marker([point.lat, point.lon],{icon: ResIcon}).addTo(map).bindPopup(point.name+'Descripción: '+point.description+'<br>Precio: '+point.price);
    });

    map.fitBounds([
      ...markers.map(point => [point.lat,point.lon] as [number, number])
    ]);

  }

}
