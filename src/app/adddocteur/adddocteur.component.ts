import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Docteur } from '../docteur';
import { DocteurService } from '../docteur.service';

@Component({
  selector: 'app-adddocteur',
  templateUrl: './adddocteur.component.html',
  styleUrls: ['./adddocteur.component.css']
})
export class AdddocteurComponent {
  errorMessage1: string = '';
  errorMessage: string = '';
  addDocteurForm!: FormGroup;

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
  Specialite!: string
  Pass!: string


 

  docteurList: AngularFireList<any>
  constructor(private docteurService: DocteurService, public router: Router,
    private db: AngularFireDatabase, private fire: AngularFireAuth) {

    this.docteurList = db.list('docteur')
  }

  ngOnInit(): void {
    this.addDocteurForm = new FormGroup({
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
      specialite: new FormControl('', [
        Validators.required,
      ]),
      pass: new FormControl('', [
        Validators.required,
      ])
    
     
    });
  }

  onSubmit() {

    let create = 'false';

    this.docteurList.push({

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
      Specialite: this.Specialite,
      Pass: this.Pass
     
    }).then(added => {
      alert("Compte docteur ajoutée avec sucées");
      this.router.navigate(['/docteur'])




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
