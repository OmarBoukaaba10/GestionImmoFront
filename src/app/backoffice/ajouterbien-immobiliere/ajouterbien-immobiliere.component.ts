import {Component, Input, OnInit} from '@angular/core';
import {Bienimmo} from '../Bienimmo';
import {BienimmoService} from '../services/bienimmoServices/bienimmo.service';
import {Router} from '@angular/router';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';

import * as L from 'leaflet';
import 'leaflet-routing-machine';

export const DEFAULT_LAT = 48.20807;
export const DEFAULT_LON =  16.37320;
export const TITULO = 'Proyecto';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';


@Component({
  selector: 'app-ajouterbien-immobiliere',
  templateUrl: './ajouterbien-immobiliere.component.html',
  styleUrls: ['./ajouterbien-immobiliere.component.scss']
})
export class AjouterbienImmobiliereComponent implements OnInit {

  map: any;
  @Input() lat: number = DEFAULT_LAT;
  @Input() lon: number = DEFAULT_LON;
  @Input() titulo: string = TITULO ;

  bienimmo: Bienimmo = new Bienimmo();
myForm: any;
  constructor(private a: BienimmoService, private r: Router) { }


  position: any;


  ngOnInit() {
    this.initializeMap();
  }

  private initializeMap() {
    this.map = new Map('map').setView([40.712776, -74.005974], 12); // Set the initial coordinates and zoom level

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    marker([40.712776, -74.005974]).addTo(this.map) // Add a marker to the map
      .bindPopup('New York City'); // Add a popup to the marker

    this.map.on('click', (event) => {
      this.position = event.latlng;
    });
  }

  getPosition() {
    if (this.position) {
      console.log('Latitude:', this.position.lat);
      console.log('Longitude:', this.position.lng);
    } else {
      console.log('Position not available.');
    }
  }


  /*ngOnInit(): void {
    // tslint:disable-next-line:prefer-const
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('A pretty CSS popup.<br> Easily customizable.')
      .openPopup();
  }




  private initMap(): void {
    // configuración del mapa
    this.map = L.map('map', {
      center: [this.lat, this.lon],
      attributionControl: true,
      closePopupOnClick: true,
      zoom: 14
    });

    // iconos personalizados
    L.Marker.prototype.options.icon = L.icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 10]
    });

    // titulo
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://1938.com.es">Yassine Integration</a>'
    });

    // marca con pop up
    const lon = this.lon + 0.009;
    const lat = this.lat + 0.009;
    /!* const marker = L.marker([lat + 0.005, lon + 0.005]).bindPopup(this.titulo);
   marker.addTo(this.map);*!/

    // marca forma de circulo
    const mark = L.circleMarker([this.lat, this.lon]).addTo(this.map);
    mark.addTo(this.map);


    // ruta
    L.Routing.control({
      router: L.Routing.osrmv1({
        serviceUrl: `https://router.project-osrm.org/route/v1/`
      }),
      showAlternatives: true,
      fitSelectedRoutes: false,
      show: false,
      routeWhileDragging: true,
      waypoints: [
        L.latLng(this.lat, this.lon),
        L.latLng(lat, lon)
      ]
    }).addTo(this.map);
    tiles.addTo(this.map);
  }




*/


  save(){
    this.bienimmo.localisation = this.position.toString();
    this.a.addBienimmo(this.bienimmo).subscribe(
      () => {
        console.log(this.bienimmo);
        alert('All Done !');
        this.r.navigate(['admin/mesbienimmo']);
      }
    );
  }
  submitForm() {
    if (this.myForm.valid) {
      // Form is valid, perform actions here
    }}
}
