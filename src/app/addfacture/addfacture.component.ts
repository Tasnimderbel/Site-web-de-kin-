import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Facture } from '../facture';
import { FactureService } from '../facture.service';

@Component({
  selector: 'app-addfacture',
  templateUrl: './addfacture.component.html',
  styleUrls: ['./addfacture.component.css']
})
export class AddfactureComponent {
  errorMessage1: string = '';
  errorMessage: string = '';
  addFactureForm!: FormGroup;


  
  Id!: string
  Nom!: string
  Date!: string
  Service!: string
  Quantite!: string
  Etat!: string
  Prix!: string
  Total!: string


 

  factureList: AngularFireList<any>
  constructor(private factureService: FactureService, public router: Router,
    private db: AngularFireDatabase, private fire: AngularFireAuth) {

    this.factureList = db.list('facture')
  }

  ngOnInit(): void {
    this.addFactureForm = new FormGroup({
      id: new FormControl('', [
        Validators.required,
      ]),
      nom: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z ]+"),
        Validators.minLength(3)
      ]),
      date: new FormControl('', [
        Validators.required,
      ]),
      service: new FormControl('', [
        Validators.required,
      ]),
      quantite: new FormControl('', [
        Validators.required,
      ]),
      etat: new FormControl('', [
        Validators.required,
      ]),
      prix: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
      total: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ])
     
    });
  }

  onSubmit() {

    let create = 'false';

    this.factureList.push({

      Id: this.Id,
      Nom: this.Nom,
      Date: this.Date,
      Service: this.Service,
      Quantite: this.Quantite,
      Etat: this.Etat,
      Prix: this.Prix,
      Total: this.Total
    
  

    }).then(added => {
      alert("Facture ajoutée avec sucées");
      this.router.navigate(['/facture'])




    }).catch(error => {
      console.error(error)
      alert("erreur ajoutée facture");
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

    


