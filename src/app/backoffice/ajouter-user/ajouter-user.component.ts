import { Component, OnInit } from '@angular/core';
import {Utilisateur} from '../../model/Utilisateur';
import {UtlisateurService} from '../../service/utlisateur.service';
import {ProfilService} from '../../service/profil.service';
import {Profil} from '../../model/Profil';

@Component({
  selector: 'app-ajouter-user',
  templateUrl: './ajouter-user.component.html',
  styleUrls: ['./ajouter-user.component.scss']
})
export class AjouterUserComponent implements OnInit {
  user = new Utilisateur();
  profile = new Profil();
  constructor(
    private userService: UtlisateurService , private profileService: ProfilService
  ) { }

  ngOnInit(): void {
  }
  createUser(): void {
    this.profileService.createProfile(this.profile)
      .subscribe(data => {
        console.log(data);
        alert("profile created successfully.");

      });
    this.user.login = this.profile.email;
    this.user.password = this.profile.newPassword;
    this.userService.createUser(this.user)
      .subscribe(data => {
        alert("User created successfully.");

      });
  }
}
