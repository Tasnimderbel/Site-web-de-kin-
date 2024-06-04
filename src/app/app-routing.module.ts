import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ServicesComponent } from './services/services.component';
import { AproposComponent } from './apropos/apropos.component';
import { ContactComponent } from './contact/contact.component';
import { AvisComponent } from './avis/avis.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { EquipeComponent } from './equipe/equipe.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { ModifierpatientComponent } from './modifierpatient/modifierpatient.component';
import { PatientsComponent } from './patients/patients.component';
import { AddkineComponent } from './addkine/addkine.component';
import { EditkineComponent } from './editkine/editkine.component';
import { SecretaireComponent } from './secretaire/secretaire.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ProfilComponent } from './profil/profil.component';
import { DocteurComponent } from './docteur/docteur.component';
import { KinesComponent } from './kines/kines.component';
import { FactureComponent } from './facture/facture.component';
import { AddfactureComponent } from './addfacture/addfacture.component';
import { EditfactureComponent } from './editfacture/editfacture.component';
import { AddsecretaireComponent } from './addsecretaire/addsecretaire.component';
import { EditsecretaireComponent } from './editsecretaire/editsecretaire.component';
import { AdddocteurComponent } from './adddocteur/adddocteur.component';
import { EditdocteurComponent } from './editdocteur/editdocteur.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { CarteRDVComponent } from './carte-rdv/carte-rdv.component';
import { CarteVSTComponent } from './carte-vst/carte-vst.component';
import { SeancesComponent } from './seances/seances.component';
import { AddseanceComponent } from './addseance/addseance.component';
import { EditseanceComponent } from './editseance/editseance.component';
import { ConsultationsComponent } from './consultations/consultations.component';
import { AddconsultationComponent } from './addconsultation/addconsultation.component';
import { EditconsultationComponent } from './editconsultation/editconsultation.component';


const routes: Routes = [
  { path: '', component: AcceuilComponent },
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'apropos', component: AproposComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'avis', component: AvisComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'rendez-vous', component: RendezVousComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newsletter', component: NewsletterComponent },
  { path: 'secretaire', component:  SecretaireComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'register', component:  RegisterComponent },
  { path: 'resetpassword', component:  ResetpasswordComponent },
  { path: 'resetpassword', component:  ResetpasswordComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'adduser', component:  AddUserComponent },
  { path: 'addpatient', component:  AddpatientComponent },
  { path: 'addkine', component:  AddkineComponent },
  { path: 'modifier-patient/:id', component:  ModifierpatientComponent },
  { path: 'edit-kine/:id', component:  EditkineComponent },
  { path: 'docteur', component:   DocteurComponent },
  { path: 'kines', component:   KinesComponent },
  { path: 'update-user', component:   UpdateUserComponent },
  { path: 'facture', component:   FactureComponent },
  { path: 'addfacture', component:   AddfactureComponent },
  { path: 'adddocteur', component:   AdddocteurComponent },
  { path: 'edit-facture/:id', component:   EditfactureComponent },
  { path: 'addsecretaire', component:   AddsecretaireComponent },
  { path: 'edit-secretaire/:id', component:   EditsecretaireComponent },
  { path: 'edit-docteur/:id', component:   EditdocteurComponent },
  { path: 'carterdv', component:   CarteRDVComponent },
  { path: 'cartevst', component:   CarteVSTComponent },
  { path: 'seances', component:   SeancesComponent },
  { path: 'addseance', component:   AddseanceComponent },
  { path: 'edit-seance/:id', component:   EditseanceComponent },
  { path: 'consultations', component:   ConsultationsComponent },
  { path: 'addconsultation', component:   AddconsultationComponent },
  { path: 'edit-consultation/:id', component:   EditconsultationComponent },
  { path: '**', component:   PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
