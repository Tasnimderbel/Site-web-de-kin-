import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';


@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent {

  errorMessage1: string = '';
  errorMessage: string = '';
  addPatientForm!: FormGroup;

  Id!: string
  Nom!: string
  Prenom!: string
  DateNaissance!: string
  Sexe!: string
  Phone!: string
  Adresse!: string
  DateRdv!: string



 

  patientList: AngularFireList<any>
  constructor(private patientService: PatientService, public router: Router,
    private db: AngularFireDatabase, private fire: AngularFireAuth) {

    this.patientList = db.list('patients')
  }

  ngOnInit(): void {
    this.addPatientForm = new FormGroup({
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
      dateNaissance: new FormControl('', [
        Validators.required,
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
      dateRdv: new FormControl('', [
        Validators.required,
      ])
     
    });
  }

  onSubmit() {

    let create = 'false';

    this.patientList.push({

      Id: this.Id,
      Nom: this.Nom,
      Prenom: this.Prenom,
      DateNaissance: this.DateNaissance,
      Sexe: this.Sexe,
      Phone: this.Phone,
      Adresse: this.Adresse,
      DateRdv: this.DateRdv
    

    }).then(added => {
      alert("Compte ajouté avec sucées");
      this.router.navigate(['/patients'])




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
