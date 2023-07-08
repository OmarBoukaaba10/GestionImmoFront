import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AnnonceService} from '../../backoffice/services/annonceService/annonce.service';
import {BienimmoService} from '../../backoffice/services/bienimmoServices/bienimmo.service';

@Component({
  selector: 'app-front-annonce-details',
  templateUrl: './front-annonce-details.component.html',
  styleUrls: ['./front-annonce-details.component.scss']
})
export class FrontAnnonceDetailsComponent implements OnInit {
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
