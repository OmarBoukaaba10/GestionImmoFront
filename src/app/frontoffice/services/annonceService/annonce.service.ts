import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private http: HttpClient) { }

    getAnnonces(){
    return this.http.get('http://localhost:8081/afficherAnnonces/');
  }
  getAnnonceByID(id: any){
    return this.http.get('http://localhost:8081/afficherAnnonce/' + id);

  }
  addAnnonce(a: any){
    return this.http.post('http://localhost:8081/ajouterAnnonce', a);
  }
  deleteAnnonce(id: any){
    return this.http.delete('http://localhost:8081/deleteAnnonce/' + id);
  }
  updateAnnonce( data: any){
    return this.http.put('http://localhost:8081/modifierAnnonce/', data);
  }
  assignBienimmoToAnnonce( src: any , idAnnonce: any){
    return this.http.put('http://localhost:8081/assignBienimmotToannonce/' + src + '/' + idAnnonce, null);
  }
  assignImageToAnnonce (id: any , src: any){
    return this.http.put('http://localhost:8081/assignPromotiontoToannonce/' + id + '/' + src, null);
  }
}
