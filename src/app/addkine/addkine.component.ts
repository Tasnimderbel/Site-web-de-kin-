import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Kine } from '../kine';
import { KineService } from '../kine.service';

@Component({
  selector: 'app-addkine',
  templateUrl: './addkine.component.html',
  styleUrls: ['./addkine.component.css']
})
export class AddkineComponent {
  errorMessage1: string = '';
  errorMessage: string = '';
  addKineForm!: FormGroup;

  Id!: string
  Nom!: string
  Prenom!: string
  DateNaissance!: string
  Phone!: string
  Sexe!: string
  Adresse!: string
  Service!: string
  DateRec!: string

 

  kineList: AngularFireList<any>
  constructor(private kineService: KineService, public router: Router,
    private db: AngularFireDatabase, private fire: AngularFireAuth) {

    this.kineList = db.list('kines')
  }

  ngOnInit(): void {
    this.addKineForm = new FormGroup({
      id: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
      nom: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z ].*"),
        Validators.minLength(2),
    
      ]),
      prenom: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z ]+"),
        Validators.minLength(3)
      ]),
      dateNaissance: new FormControl('', [
        Validators.required,
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8),
        Validators.maxLength(13)
      ]),
      sexe: new FormControl('', [
        Validators.required
      ]),
      adresse: new FormControl('', [
        Validators.required,
      ]),
      service: new FormControl('', [
        Validators.required,
      ]),
      dateRec: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)
      ])
     
    });
  }

  onSubmit() {

    let create = 'false';

    this.kineList.push({

      Id: this.Id,
      Nom: this.Nom,
      Prenom: this.Prenom,
      DateNaissance: this.DateNaissance,
      Phone: this.Phone,
      Sexe: this.Sexe,
      Adresse: this.Adresse,
      Service: this.Service,
      DateRec: this.DateRec
  

    }).then(added => {
      alert("Compte ajouté avec sucées");
      this.router.navigate(['/kines'])




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
