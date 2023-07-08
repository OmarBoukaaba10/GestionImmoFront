import { Component, OnInit } from '@angular/core';
import {AnnonceService} from '../services/annonceService/annonce.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BienimmoService} from '../services/bienimmoServices/bienimmo.service';

@Component({
  selector: 'app-detail-annonce',
  templateUrl: './detail-annonce.component.html',
  styleUrls: ['./detail-annonce.component.scss']
})
export class DetailAnnonceComponent implements OnInit {
  id!: any;
  annonce!: any;
benimmo!: any;
  constructor(private route: ActivatedRoute, private s: AnnonceService, private b: BienimmoService,  private r: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.s.getAnnonceByID(this.id).subscribe(
      (data) => {
        console.log(data);
        this.annonce = data;
        this.b.getBienimmoByID(this.annonce.bienImmobiliere.id).subscribe(
          (data2) => {
            console.log(data);
            this.benimmo = data2;
          });
      });

  }

}
