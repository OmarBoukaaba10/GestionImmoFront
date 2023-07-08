import {Component, OnInit, Pipe} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AnnonceService} from '../services/annonceService/annonce.service';


@Component({
  selector: 'app-afficher-mes-annonces',
  templateUrl: './afficher-mes-annonces.component.html',
  styleUrls: ['./afficher-mes-annonces.component.scss']
})
export class AfficherMesAnnoncesComponent implements OnInit {
  searchText;

  annonces!: any;
  constructor(private s: AnnonceService) { }

  ngOnInit(): void {
    this.s.getAnnonces().subscribe(
      (data) => {
         console.log(data);
         this.annonces = data;
         console.log(data);
      }
    );
  }





}
