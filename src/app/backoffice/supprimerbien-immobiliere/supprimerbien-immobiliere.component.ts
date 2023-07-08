import { Component, OnInit } from '@angular/core';
import {BienimmoService} from '../services/bienimmoServices/bienimmo.service';

import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-supprimerbien-immobiliere',
  templateUrl: './supprimerbien-immobiliere.component.html',
  styleUrls: ['./supprimerbien-immobiliere.component.scss']
})
export class SupprimerbienImmobiliereComponent implements OnInit {

  id!: any;
  constructor(private service: BienimmoService,
              private acr: ActivatedRoute,
              private r: Router) { }

  ngOnInit(): void {
    this.id = this.acr.snapshot.params.id;

    this.service.deleteBienimmo(this.id).subscribe(
      () => {
        alert('deleted');
        this.r.navigate(['admin/mesbienimmo']);
      },
      (error) => {
        alert('error');
      }
    );
  }


}
