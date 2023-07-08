import { Component, OnInit } from '@angular/core';
import {Utilisateur} from '../../model/Utilisateur';
import {Router} from '@angular/router';
import {UtlisateurService} from '../../service/utlisateur.service';
import {Profil} from '../../model/Profil';
import {ProfilService} from '../../service/profil.service';

@Component({
  selector: 'app-liste-profile',
  templateUrl: './liste-profile.component.html',
  styleUrls: ['./liste-profile.component.scss']
})
export class ListeProfileComponent implements OnInit {

  profile: Profil[];

  constructor(private route: Router, private profileService: ProfilService) { }

  ngOnInit(): void {
    this.profileService.listProfile().subscribe((data: Profil[]) => {
      this.profile = data;
    });
  }
  archiveUser(profileId: number): void {
    this.profileService.archiverProfile(profileId).subscribe((data) => {
      this.profile = this.profile.filter((u) => u.idProfil !== profileId);
    });
    window.location.reload();
  }

}
