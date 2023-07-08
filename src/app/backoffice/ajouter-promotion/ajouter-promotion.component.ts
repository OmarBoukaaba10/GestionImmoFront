import { Component, OnInit } from '@angular/core';
import {Promotion} from '../promotion';
import {PromotionService} from '../services/promotionServices/promotion.service';
import {Router} from '@angular/router';
import {AnnonceService} from '../services/annonceService/annonce.service';

@Component({
  selector: 'app-ajouter-promotion',
  templateUrl: './ajouter-promotion.component.html',
  styleUrls: ['./ajouter-promotion.component.scss']
})
export class AjouterPromotionComponent implements OnInit {
  constructor(private a: PromotionService, private aa: AnnonceService, private r: Router) { }
  annonces!: any;
  promorion: Promotion = new Promotion();
  myForm: any;
  ngOnInit(): void {
      this.aa.getAnnonces().subscribe(
        (data) => {
          console.log(data);
          this.annonces = data;
          console.log(data);
        }
      );
  }
  submitForm() {
    if (this.myForm.valid) {
      // Form is valid, perform actions here
    }}


  save(){
    this.a.addPromotion(this.promorion).subscribe(
      () => {


        // Assuming you have the date in the format "mm-dd-yyyy"
        const dateString = this.promorion.dateFin.toString();

// Split the date string into month, day, and year
        const [month, day, year] = dateString.split('-');

// Create a new Date object with the specified year, month (subtract 1 since months are zero-based), and day
        const dateObject = new Date(Number(year), Number(month) - 1, Number(day));

// Get the numeric representation of the date in milliseconds since January 1, 1970
        const numericDate = dateObject.getTime();

        const dateString1 = this.promorion.dateDebut.toString();

// Split the date string into month, day, and year
        const [month1, day1, year1] = dateString1.split('-');

// Create a new Date object with the specified year, month (subtract 1 since months are zero-based), and day
        const dateObject1 = new Date(Number(year1), Number(month1) - 1, Number(day1));

// Get the numeric representation of the date in milliseconds since January 1, 1970
        const numericDate1 = dateObject1.getTime();
        const pricefromdate = (numericDate / 10000000000) - (numericDate1 / 10000000000)  ;

        console.log(numericDate);
        console.log(console.log(numericDate1));


        /*
       console.log(this.promorion.dateFin);
       console.log(this.promorion.dateDebut);
       const date = new Date(this.promorion.dateFin);
       console.log(date.getTime());
       const date1 = new Date(this.promorion.dateDebut);
       console.log(date1.getTime());

       this.promorion.dateFin = +new Date().getTime();
       let d1 = this.promorion.dateFin;
       let d2: number = (this.promorion.dateDebut = +new Date().getTime());
       console.log(d1);
       console.log(d2);*/
        console.log(this.promorion);
        alert('All Done !');
        this.r.navigate(['admin/checkout']);
      }
    );
  }
}
