import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Secretaire } from '../secretaire';
import { SecretaireService } from '../secretaire.service';
@Component({
  selector: 'app-addsecretaire',
  templateUrl: './addsecretaire.component.html',
  styleUrls: ['./addsecretaire.component.css']
})
export class AddsecretaireComponent {
  errorMessage1: string = '';
  errorMessage: string = '';
  addSecretaireForm!: FormGroup;

  Id!: string
  Nom!: string
  Prenom!: string
  DateNaissance!: string
  Phone!: string
  Genre!: string
  Email!: string
  Adresse!: string
  Experience!: string
  Role!: string
  DateRec!: string
  Pass!: string

 

  secretaireList: AngularFireList<any>
  constructor(private secretaireService: SecretaireService, public router: Router,
    private db: AngularFireDatabase, private fire: AngularFireAuth) {

    this.secretaireList = db.list('secretaire')
  }

  ngOnInit(): void {
    this.addSecretaireForm = new FormGroup({
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
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8),
        Validators.maxLength(13)
      ]),
      genre: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      adresse: new FormControl('', [
        Validators.required,
      ]),
      experience: new FormControl('', [
        Validators.required,
      ]),
      role: new FormControl('', [
        Validators.required,
      ]),
      dateRec: new FormControl('', [
        Validators.required,
      ]),
      pass: new FormControl('', [
        Validators.required,
      ])
     
     
    });
  }

  onSubmit() {

    let create = 'false';

    this.secretaireList.push({
      
      Id: this.Id,
      Nom: this.Nom,
      Prenom: this.Prenom,
      DateNaissance: this.DateNaissance,
      Phone: this.Phone,
      Genre: this.Genre,
      Email: this.Email,
      Adresse: this.Adresse,
      Experience: this.Experience,
      Role: this.Role,
      DateRec: this.DateRec,
      Pass: this.Pass
  

    }).then(added => {
      alert("Compte secretaire ajoutée avec sucées");
      this.router.navigate(['/secretaire'])




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

