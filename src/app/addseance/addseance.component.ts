import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Seance } from '../seance';
import { SeanceService } from '../seance.service';

@Component({
  selector: 'app-addseance',
  templateUrl: './addseance.component.html',
  styleUrls: ['./addseance.component.css']
})
export class AddseanceComponent {

  errorMessage1: string = '';
  errorMessage: string = '';
  addSeanceForm!: FormGroup;

  Id!: string
  Nom!: string
  Prenom!: string
  Sexe!: string
  Phone!: string
  Adresse!: string
  Date!: string
  Heure!: string
  Nature!: string
  Etat!: string
  Prix!: string



 

  seanceList: AngularFireList<any>
  constructor(private seanceService: SeanceService, public router: Router,
    private db: AngularFireDatabase, private fire: AngularFireAuth) {

    this.seanceList = db.list('seances')
  }

  ngOnInit(): void {
    this.addSeanceForm = new FormGroup({
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
      date: new FormControl('', [
        Validators.required,
      ]),
      heure: new FormControl('', [
        Validators.required,
      ]),
      nature: new FormControl('', [
        Validators.required,
      ]),
      etat: new FormControl('', [
        Validators.required,
      ]),
      prix: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
      ])
     
    });
  }

  onSubmit() {

    let create = 'false';

    this.seanceList.push({

      Id: this.Id,
      Nom: this.Nom,
      Prenom: this.Prenom,
      Sexe: this.Sexe,
      Phone: this.Phone,
      Adresse: this.Adresse,
      Date: this.Date,
      Heure: this.Heure,
      Nature: this.Nature,
      Etat: this.Etat,
      Prix: this.Prix
    

    }).then(added => {
      alert("Séance ajoutée avec sucées");
      this.router.navigate(['/seances'])




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

