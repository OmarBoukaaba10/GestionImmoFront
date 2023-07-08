import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllTemplateAdminComponent} from './backoffice/all-template-admin/all-template-admin.component';
import {BodyAdminComponent} from './backoffice/body-admin/body-admin.component';
import {AllTemplateUserComponent} from './frontoffice/all-template-user/all-template-user.component';
import {BodyUserComponent} from './frontoffice/body-user/body-user.component';
import {ListeUserComponent} from './frontoffice/liste-user/liste-user.component';
import {AjouterUserComponent} from './backoffice/ajouter-user/ajouter-user.component';
import {UpdateUserComponent} from './backoffice/update-user/update-user.component';
import {LoginComponent} from './frontoffice/login/login.component';
import {ListeProfileComponent} from './backoffice/liste-profile/liste-profile.component';


const routes: Routes = [
  {
    path: 'admin', component: AllTemplateAdminComponent,
    children: [
      {
        path: 'home', component: BodyAdminComponent,
      },
      {
        path: 'afficherUsers', component: ListeUserComponent,
      },
      {
        path: 'ajouterUser', component: AjouterUserComponent,
      },
      {
        path: 'afficherUsers/updateUser/:idUser', component: UpdateUserComponent,
      },
      {
        path: 'afficherProfile/updateUser/:idUser', component: UpdateUserComponent,
      },
      {
        path: 'afficherProfile', component: ListeProfileComponent,
      }
    ]
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: '', component: AllTemplateUserComponent,
    children: [
      {
        path: '', component: BodyUserComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
