import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ServicesComponent } from './services/services.component';
import { AproposComponent } from './apropos/apropos.component';
import { ContactComponent } from './contact/contact.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { EquipeComponent } from './equipe/equipe.component';
import { AvisComponent } from './avis/avis.component';
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
import { EditdocteurComponent } from './editdocteur/editdocteur.component';
import { AdddocteurComponent } from './adddocteur/adddocteur.component';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { FilterPipe } from './filter.pipe';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { CarteRDVComponent } from './carte-rdv/carte-rdv.component';
import { CarteVSTComponent } from './carte-vst/carte-vst.component';
import { SeancesComponent } from './seances/seances.component';
import { AddseanceComponent } from './addseance/addseance.component';
import { EditseanceComponent } from './editseance/editseance.component';
import { AddconsultationComponent } from './addconsultation/addconsultation.component';
import { EditconsultationComponent } from './editconsultation/editconsultation.component';
import { ConsultationsComponent } from './consultations/consultations.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetpasswordComponent,
    AddUserComponent,
    UpdateUserComponent,
    AcceuilComponent,
    ServicesComponent,
    AproposComponent,
    ContactComponent,
    RendezVousComponent,
    EquipeComponent,
    AvisComponent,
    AddpatientComponent,
    ModifierpatientComponent,
    PatientsComponent,
    AddkineComponent,
    EditkineComponent,
    SecretaireComponent,
    NewsletterComponent,
    ProfilComponent,
    DocteurComponent,
    KinesComponent,
    FactureComponent,
    AddfactureComponent,
    EditfactureComponent,
    AddsecretaireComponent,
    EditsecretaireComponent,
    EditdocteurComponent,
    AdddocteurComponent,
    FilterPipe,
    PagenotfoundComponent,
    CarteRDVComponent,
    CarteVSTComponent,
    SeancesComponent,
    AddseanceComponent,
    EditseanceComponent,
    AddconsultationComponent,
    EditconsultationComponent,
    ConsultationsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    AngularFireModule,
    MatDialogModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
  


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
