import { Component, OnInit } from '@angular/core';
import {Utilisateur} from '../../model/Utilisateur';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UtlisateurService} from '../../service/utlisateur.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Profil} from '../../model/Profil';
import {ProfilService} from '../../service/profil.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  user = new Utilisateur();
  userUpdate = new Utilisateur();
  profil = new Profil();
  profilUpdate = new Profil();
  formUser: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private userService: UtlisateurService, private formBuilder: FormBuilder, private profileService: ProfilService) {
  }

  ngOnInit(): void {
    this.formUser = this.formBuilder.group({
      email: [null, Validators.required],
      newPassword: [null, Validators.required],
      type: [null, Validators.required],
      nom: [null, Validators.required],
      prenom: [null, Validators.required],
      numTel: [null, Validators.required],
    });

    this.route.paramMap.subscribe(
      params => {
        const selectedId = params.get('idUser');
        if (selectedId) {
          this.userService.getUserbyid(selectedId).subscribe(comp => {
            this.user = comp;
            console.log(this.user);
          });
          this.profileService.getProfilebyid(selectedId).subscribe(comp => {
            this.profil = comp;
            console.log(this.profil);
          });

        }
      }
    );
    console.log(this.user);
  }
  updateUser(data: any){
    console.log(data);
    console.log(this.formUser.value.type);
    console.log(this.user.type);
    this.profilUpdate = this.formUser.value;
    this.profilUpdate.idProfil = this.profil.idProfil;
    this.userUpdate.idUser = this.user.idUser;
    this.userUpdate.login = this.profilUpdate.email;
    this.userUpdate.password = this.profilUpdate.newPassword;
    this.userUpdate.type = this.user.type;
    this.userService.updateUser(this.userUpdate).subscribe(
      () => {
        console.log('updated');
        console.log(this.user);
      }
    );
    this.profileService.updateProfile(this.profilUpdate).subscribe(
      () => {
        alert('updated');
      }
    );
    this.router.navigate(['/admin/home']);
  }
}
