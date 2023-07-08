import { Component, OnInit } from '@angular/core';
import {Utilisateur} from '../../model/Utilisateur';
import {Router} from '@angular/router';
import {UtlisateurService} from '../../service/utlisateur.service';
import {Profil} from '../../model/Profil';
import {ProfilService} from '../../service/profil.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.scss']
})
export class ListeUserComponent implements OnInit {
  utilisateur: Utilisateur[];
  profile: Profil[];
  test: boolean;

  // tslint:disable-next-line:max-line-length
  constructor(private location: Location, private route: Router, private userService: UtlisateurService, private profileService: ProfilService) { }

  ngOnInit(): void {
    this.userService.listUtilisateur().subscribe((data: Utilisateur[]) => {
      this.utilisateur = data;
      this.mergeLists();
    });
    this.profileService.listProfile().subscribe((data1: Profil[]) => {
      this.profile = data1;
      this.mergeLists();
    });
  }
  mergeLists(): void {

      for (const utilisateur of this.utilisateur) {
        for (const profile of this.profile) {
        if (profile.email === utilisateur.login) {
          utilisateur.archived = profile.archived;
        }
      }
    }
  }
  archiveUser(userId: number): void {
    this.userService.archiverUser(userId).subscribe((data) => {
      this.utilisateur = this.utilisateur.filter((u) => u.idUser !== userId);
    });
    window.location.reload();
  }
  activerUser(userId: number): void {
    this.userService.activerUser(userId).subscribe((data) => {
      this.utilisateur = this.utilisateur.filter((u) => u.idUser !== userId);
    });
    window.location.reload();
  }
}
