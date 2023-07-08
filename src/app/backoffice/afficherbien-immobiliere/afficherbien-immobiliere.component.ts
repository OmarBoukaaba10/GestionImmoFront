import { Component, OnInit } from '@angular/core';
import {BienimmoService} from '../services/bienimmoServices/bienimmo.service';

@Component({
  selector: 'app-afficherbien-immobiliere',
  templateUrl: './afficherbien-immobiliere.component.html',
  styleUrls: ['./afficherbien-immobiliere.component.scss']
})
export class AfficherbienImmobiliereComponent implements OnInit {

  bienimmos!: any;
  map: any;
  constructor(private s: BienimmoService) { }

  ngOnInit(): void {

    this.s.getBienimmos().subscribe(
      (data) => {
        console.log(data);
        this.bienimmos = data;
        console.log(data);
      }
    );
  }




}
