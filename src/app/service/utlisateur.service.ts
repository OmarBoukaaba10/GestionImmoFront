import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utilisateur} from '../model/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtlisateurService {
  constructor(private http: HttpClient) {
  }
  listUtilisateur(): Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>('http://localhost:8088/pidev/user/afficherUsers');
  }
  public createUser(user) {
    return this.http.post<Utilisateur>('http://localhost:8088/pidev/user/ajouterUser', user);
  }
  public updateUser(user) {
    return this.http.put<Utilisateur>('http://localhost:8088/pidev/user/modifierUser', user);
  }
  getUserbyid(id: any) {
    return this.http.get<Utilisateur>('http://localhost:8088/pidev/user/afficherUser/' + id);
  }
  archiverUser(id: any) {
    return this.http.post<Utilisateur>('http://localhost:8088/pidev/user/ArchiverUser/' + id , id);
  }
  activerUser(id: any) {
    return this.http.post<Utilisateur>('http://localhost:8088/pidev/user/ActiverUser/' + id , id);
  }
}
