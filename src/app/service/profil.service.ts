  import { Injectable } from '@angular/core';
  import {Observable} from 'rxjs';
  import {HttpClient} from '@angular/common/http';
  import {Profil} from '../model/Profil';

  @Injectable({
    providedIn: 'root'
  })
  export class ProfilService {

    constructor(private http: HttpClient) { }
    listProfile(): Observable<Profil[]>{
      return this.http.get<Profil[]>('http://localhost:8088/pidev/profil/afficherProfils');
    }
    public createProfile(profil) {
      return this.http.post<Profil>('http://localhost:8088/pidev/profil/ajouterProfil', profil);
    }
    public updateProfile(profil) {
      return this.http.put<Profil>('http://localhost:8088/pidev/profil/modifierProfil', profil);
    }
    getProfilebyid(id: any) {
      return this.http.get<Profil>('http://localhost:8088/pidev/profil/afficherProfil/' + id);
    }
    public archiverProfile(id: any) {
      return this.http.post<Profil>('http://localhost:8088/pidev/profil/ArchiverProfil/' + id , id);
    }
    getProfilebyEmail(email: any) {
      return this.http.get<Profil>('http://localhost:8088/pidev/profil/getProfilByEmail/' + email);
    }
    public sendEmail(profil) {
      return this.http.post<Profil>('http://localhost:8088/pidev/profil/send-email', profil);
    }
  }
