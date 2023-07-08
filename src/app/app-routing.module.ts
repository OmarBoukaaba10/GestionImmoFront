import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllTemplateAdminComponent} from './backoffice/all-template-admin/all-template-admin.component';
import {BodyAdminComponent} from './backoffice/body-admin/body-admin.component';
import {AllTemplateUserComponent} from './frontoffice/all-template-user/all-template-user.component';
import {BodyUserComponent} from './frontoffice/body-user/body-user.component';

import { AfficherMesAnnoncesComponent } from './backoffice/afficher-mes-annonces/afficher-mes-annonces.component';
import { AjouterAnnoncesComponent } from './backoffice/ajouter-annonces/ajouter-annonces.component';
import { ModifierAnnoncesComponent } from './backoffice/modifier-annonces/modifier-annonces.component';
import { SupprimerAnnoncesComponent } from './backoffice/supprimer-annonces/supprimer-annonces.component';
import {AfficherbienImmobiliereComponent} from './backoffice/afficherbien-immobiliere/afficherbien-immobiliere.component';
import {AjouterbienImmobiliereComponent} from './backoffice/ajouterbien-immobiliere/ajouterbien-immobiliere.component';
import {ModifierbienImmobiliereComponent} from './backoffice/modifierbien-immobiliere/modifierbien-immobiliere.component';
import {SupprimerbienImmobiliereComponent} from './backoffice/supprimerbien-immobiliere/supprimerbien-immobiliere.component';
import {AfficherPromotionComponent} from './backoffice/afficher-promotion/afficher-promotion.component';
import {SupprimerPromotionComponent} from './backoffice/supprimer-promotion/supprimer-promotion.component';
import {AjouterPromotionComponent} from './backoffice/ajouter-promotion/ajouter-promotion.component';
import {CheckoutComponent} from './backoffice/checkout/checkout.component';
import {SubscriptionComponent} from './backoffice/subscription/subscription.component';
import {DetailAnnonceComponent} from './backoffice/detail-annonce/detail-annonce.component';
import {CancelComponent} from './backoffice/cancel/cancel.component';
import {SuccessComponent} from './backoffice/success/success.component';
import {FrontAnnonceComponent} from './frontoffice/front-annonce/front-annonce.component';
import {FrontAnnonceDetailsComponent} from './frontoffice/front-annonce-details/front-annonce-details.component';




const routes: Routes = [
  { path: 'cancel', component: CancelComponent },
  { path: 'success', component: SuccessComponent },

  {
    path: 'admin', component: AllTemplateAdminComponent,
    children: [
      {
        path: 'home', component: BodyAdminComponent,
      },
      {path: 'mesannonces', component: AfficherMesAnnoncesComponent, },
      {path: 'detailAnnonce/:id',
        component: DetailAnnonceComponent, },
      {path: 'ajouterannonce', component: AjouterAnnoncesComponent },
      {path: 'modifierannonce/:id', component: ModifierAnnoncesComponent },
      {path: 'supprimerannonce/:id', component: SupprimerAnnoncesComponent },
      {path: 'afficherannonce/:id', component: AfficherMesAnnoncesComponent },

      {path: 'mesbienimmo', component: AfficherbienImmobiliereComponent },
      {path: 'ajouterbienimmo', component: AjouterbienImmobiliereComponent },
      {path: 'modifierbienimmo/:id', component: ModifierbienImmobiliereComponent },
      {path: 'supprimerbienimmo/:id', component: SupprimerbienImmobiliereComponent },

      {path: 'mespromotions', component: AfficherPromotionComponent },
      {path: 'ajouterpromotion', component: AjouterPromotionComponent},
      {
        path: 'checkout',
        component: CheckoutComponent,
      },
      {
        path: 'subscription',
        component: SubscriptionComponent,
      },
       /* children: [

      {
        path: 'checkout',
        component: CheckoutComponent,
      },
      {
        path: 'subscription',
        component: SubscriptionComponent,
      }
        ]
      },*/
      {path: 'supprimerpromotion/:id', component: SupprimerPromotionComponent }
    ]
  },
  {
    path: '', component: AllTemplateUserComponent,
    children: [
      {
        path: 'annonces', component: FrontAnnonceComponent,

      },
      {
        path: 'detailAnnonce/:d', component: FrontAnnonceDetailsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
