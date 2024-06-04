import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Consultation } from '../consultation';
import { ConsultationService } from '../consultation.service';

@Component({
  selector: 'app-addconsultation',
  templateUrl: './addconsultation.component.html',
  styleUrls: ['./addconsultation.component.css']
})
export class AddconsultationComponent {
  errorMessage1: string = '';
  errorMessage: string = '';
  addConsultationForm!: FormGroup;

  Id!: string
  Nom!: string
  Prenom!: string
  Sexe!: string
  Phone!: string
  Adresse!: string
  Nbrseance!: string
  Etat!: string
  Service!: string
  Date!: string
  Heure!: string
  Prix!: string




 

  consultationList: AngularFireList<any>
  constructor(private consultationService: ConsultationService, public router: Router,
    private db: AngularFireDatabase, private fire: AngularFireAuth) {

    this.consultationList = db.list('consultations')
  }

  ngOnInit(): void {
    this.addConsultationForm = new FormGroup({
      id: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
      nom: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z ]+"),
        Validators.minLength(3)
      ]),
      prenom: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z ]+"),
        Validators.minLength(3)
      ]),
      sexe: new FormControl('', [
        Validators.required,
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8),
        Validators.maxLength(13)
      ]),
      adresse: new FormControl('', [
        Validators.required,
      ]),
      nbrseance: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
      etat: new FormControl('', [
        Validators.required,
      ]),
      service: new FormControl('', [
        Validators.required,
      ]),
      date: new FormControl('', [
        Validators.required,
      ]),
      heure: new FormControl('', [
        Validators.required,
      ]),
      prix: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ])
     
    });
  }

  onSubmit() {

    let create = 'false';

    this.consultationList.push({

      Id: this.Id,
      Nom: this.Nom,
      Prenom: this.Prenom,
      Sexe: this.Sexe,
      Phone: this.Phone,
      Adresse: this.Adresse,
      Nbrseance: this.Nbrseance,
      Etat: this.Etat,
      Service: this.Service,
      Date: this.Date,
      Heure: this.Heure,
      Prix: this.Prix
    

    }).then(added => {
      alert("Consultation ajoutée avec sucées");
      this.router.navigate(['/consultations'])




    }).catch(error => {
      console.error(error)
      alert("Vérifier les champs");
      this.errorMessage1 = error.messaage
      console.log('error', error)
      console.log(error.message)

    })

    /*
     this.condactor = new Conductor(this.lastname,this.firstname,this.phone,this.address);
    
     console.log(this.condactor)
     this.conductorservice.createConductor(this.condactor)
     */

  }

}

