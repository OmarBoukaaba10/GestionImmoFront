import {Component, OnInit, Pipe} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AnnonceService} from '../services/annonceService/annonce.service';


@Component({
  selector: 'app-front-annonce',
  templateUrl: './front-annonce.component.html',
  styleUrls: ['./front-annonce.component.scss']
})
export class FrontAnnonceComponent implements OnInit {
  searchText2;

  annoncess!: any;
  constructor(private s: AnnonceService) { }

  ngOnInit(): void {
    this.s.getAnnonces().subscribe(
      (data) => {
        console.log(data);
        this.annoncess = data;
        console.log(data);
      }
    );
  }





}
