import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateAdminComponent } from './backoffice/all-template-admin/all-template-admin.component';
import { FooterAdminComponent } from './backoffice/footer-admin/footer-admin.component';
import { BodyAdminComponent } from './backoffice/body-admin/body-admin.component';
import { SidebarAdminComponent } from './backoffice/sidebar-admin/sidebar-admin.component';
import { HeaderAdminComponent } from './backoffice/header-admin/header-admin.component';
import { BodyUserComponent } from './frontoffice/body-user/body-user.component';
import { HeaderUserComponent } from './frontoffice/header-user/header-user.component';
import { FooterUserComponent } from './frontoffice/footer-user/footer-user.component';
import { AllTemplateUserComponent } from './frontoffice/all-template-user/all-template-user.component';
import { ListeUserComponent } from './frontoffice/liste-user/liste-user.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AjouterUserComponent } from './backoffice/ajouter-user/ajouter-user.component';
import { UpdateUserComponent } from './backoffice/update-user/update-user.component';
import { ListeProfileComponent } from './backoffice/liste-profile/liste-profile.component';
import { AddProfileComponent } from './backoffice/add-profile/add-profile.component';
import { UpdateProfileComponent } from './backoffice/update-profile/update-profile.component';
import { LoginComponent } from './frontoffice/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    AllTemplateAdminComponent,
    FooterAdminComponent,
    BodyAdminComponent,
    SidebarAdminComponent,
    HeaderAdminComponent,
    BodyUserComponent,
    HeaderUserComponent,
    FooterUserComponent,
    AllTemplateUserComponent,
    ListeUserComponent,
    AjouterUserComponent,
    UpdateUserComponent,
    ListeProfileComponent,
    AddProfileComponent,
    UpdateProfileComponent,
    LoginComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
