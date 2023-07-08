import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BienimmoService {

  constructor(private http: HttpClient) { }

  getBienimmos(){
    return this.http.get('http://localhost:8081/afficherBienImmobiliere/');
  }
  getBienimmoByID(id: any){
    return this.http.get('http://localhost:8081/afficherBienImmobiliere/' + id);

  }
  addBienimmo(a: any){
    return this.http.post('http://localhost:8081/ajouterBienImmobiliere', a);
  }
  deleteBienimmo(id: any){
    return this.http.delete('http://localhost:8081/ArchiverBienImmobiliere/' + id);
  }
  updateBienimmo( data: any){
    return this.http.put('http://localhost:8081/modifierBienImmobiliere/', data);
  }
}
