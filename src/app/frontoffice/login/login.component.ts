import { Component, OnInit } from '@angular/core';
import {ProfilService} from '../../service/profil.service';
import {Profil} from '../../model/Profil';
import {Utilisateur} from '../../model/Utilisateur';
import {UtlisateurService} from '../../service/utlisateur.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
profile = new Profil();
  user = new Utilisateur();
  login = new Profil();
  userlogin = new Utilisateur();
  profileTest = new Profil();
  loginTest: string;
  passwordTest: string;

  constructor( private profileService: ProfilService , private userService: UtlisateurService ,   private router: Router) { }

  ngOnInit(): void {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  });
  }
  createUser(): void {
    this.profileService.getProfilebyEmail(this.profile.email).subscribe(comp => {
      this.profileTest = comp;
      console.log(this.profileTest);
      if (this.profileTest === null) {
      this.profileService.createProfile(this.profile)
        .subscribe(data => {
          console.log(data);
          alert("profile created successfully.");

        });
      this.user.login = this.profile.email;
      this.user.password = this.profile.newPassword;
      this.user.type = 'Simple';
      this.userService.createUser(this.user)
        .subscribe(data => {
          alert("User created successfully.");

        });
    }
    else {
      alert("email used");
    }
    });
  }
  checkMail() {
    console.log(this.loginTest);
    this.profileService.getProfilebyEmail(this.loginTest).subscribe(comp => {
      this.login = comp;
      console.log(this.login.archived);

      if (this.login === null) {
        alert('Invalid email 1');
      } else if (this.login.email === undefined) {
        alert('Invalid email 2');
      } else {
        if (this.login.email === this.loginTest && this.login.newPassword !== this.passwordTest){
          alert('Invalid password');
        } else if (this.login.archived === false){
          alert('account diabled');
        } else {
          this.userService.getUserbyid(this.login.idProfil).subscribe(compr => {
            this.userlogin = compr;
            console.log(this.userlogin);
            if (this.userlogin.type === 'Admin') {
              this.router.navigate(['/admin/home']);
            } else {
              this.router.navigate(['/']);
            }
          });
        }
      }
    });
  }
  sendmail(){
    console.log(this.loginTest);
    this.profileService.getProfilebyEmail(this.loginTest).subscribe(comp => {
      this.login = comp;

      if (this.login === null) {
        alert('enter votre mail');
      } else if (this.login.email === undefined) {
        alert('mail n"existe pas');
      } else {
         if (this.login.archived === false){
          alert('account diabled');
        } else {
          this.profileService.sendEmail(this.login).subscribe(data => {
            console.log(data);
            alert("un mail a été envoyer a votre mail");

          });
        }
      }
    });
  }
}
