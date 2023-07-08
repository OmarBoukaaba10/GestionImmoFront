import { Component, OnInit } from '@angular/core';
import {AnnonceService} from '../services/annonceService/annonce.service';
import {BienimmoService} from '../services/bienimmoServices/bienimmo.service';
import {Annonce} from '../Annonce';
import {Bienimmo} from '../Bienimmo';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-ajouter-annonces',
  templateUrl: './ajouter-annonces.component.html',
  styleUrls: ['./ajouter-annonces.component.scss']
})
export class AjouterAnnoncesComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private a: AnnonceService, private b: BienimmoService,  private r: Router, private httpClient: HttpClient) { }

  // tslint:disable-next-line:max-line-length
  private objectId: any;
  id!: any;
  annonce: Annonce = new Annonce();
  annonces!: any;
  bienimmos!: any;
  bienimmo: Bienimmo = new Bienimmo();
  selectedItem: number;
  selectedImage: number;
  uploadedImage: File;
  dbImage: any;
  postResponse: any;
  successResponse: string;
  image: any;
myForm: any;
  random: number =  Math.floor(Math.random() * 99999);
  // random: string = this.randomm.toString();


  ngOnInit(): void {

     this.b.getBienimmos().subscribe(
        (data) => {
          console.log(data);
          this.bienimmos = data;
          console.log(data);
        });
      }



    onItemSelected(){
    console.log(this.selectedItem);
  }




  public onImageUpload(event) {
    this.uploadedImage = event.target.files[0];
  }


  imageUploadAction() {
    const imageFormData = new FormData();
    imageFormData.append('image', this.uploadedImage, this.uploadedImage.name);


    this.httpClient.post('http://localhost:8081/upload/image/', imageFormData, { observe: 'response' })
      .subscribe((response) => {
          if (response.status === 200) {
            this.postResponse = response;
            this.successResponse = this.postResponse.body.message;
            this.a.assignImageToAnnonce( this.id , this.annonce.src).subscribe(() => {
              console.log('image affected ! ');

            });

          } else {
            this.successResponse = 'Image not uploaded due to some error!';
          }
        }
      );
  }

  viewImage() {
    this.httpClient.get('http://localhost:8081/get/image/info/' + this.image)
      .subscribe(
        res => {
          this.postResponse = res;
          this.dbImage = 'data:image/jpeg;base64,' + this.postResponse.image;
        }
      );
  }



    save(){
      this.annonce.src = this.random;
      this.a.addAnnonce(this.annonce).subscribe(
      () => {
        // this.annonce.src = this.random;
        this.id = this.route.snapshot.paramMap.get('idAnnonce');
        console.log(this.selectedItem);
        console.log(this.annonce.src);
        console.log(this.annonce);

      }
    );
      this.a.assignBienimmoToAnnonce( this.selectedItem , this.annonce.src).subscribe(() => {
        console.log(' bien immo affected ! ');
        alert('Annonce Ajouter et BienImmo affecter Avec  succès !');
        this.r.navigate(['admin/mesannonces']);
      });
  }
  getRandomInt(max) {
  return Math.floor(Math.random() * max); }
  submitForm() {
    if (this.myForm.valid) {
      // Form is valid, perform actions here
    }}


  }
