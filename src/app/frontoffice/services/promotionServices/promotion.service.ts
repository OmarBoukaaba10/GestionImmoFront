import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient) { }

  getPromotions(){
    return this.http.get('http://localhost:8081/afficherPromotions/');
  }
  getPromotionByID(id: any){
    return this.http.get('http://localhost:8081/afficherPromotion/' + id);

  }
  addPromotion(a: any){
    return this.http.post('http://localhost:8081/ajouterPromotion', a);
  }
  deletePromotion(id: any){
    return this.http.delete('http://localhost:8081/deletePromotion/' + id);
  }
updatePromotion( data: any){
    return this.http.put('http://localhost:8081/modifierPromotion/', data);
  }
}
