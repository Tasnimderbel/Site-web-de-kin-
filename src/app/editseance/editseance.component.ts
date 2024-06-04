import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Seance } from '../seance';
import { SeanceService } from '../seance.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-editseance',
  templateUrl: './editseance.component.html',
  styleUrls: ['./editseance.component.css']
})
export class EditseanceComponent {
  id: any
  errorMessage: string = '';
  formGroup!: FormGroup;
  errorMessage1: string = '';

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
  seancedetails: any = []

  seanceforupdate: AngularFireList<any>

  data = {
    Id: '',
    Nom: '',
    Prenom: '',
    Sexe: '',
    Phone: '',
    Adresse: '',
    Date: '',
    Heure: '',
    Nature: '',
    Etat: '',
    Prix: '',
  }
  id1: any;

  constructor(private router: Router, private firebase: AngularFireDatabase,
    private route: ActivatedRoute, private seanceService: SeanceService, private changeDetectorRef: ChangeDetectorRef) {
    this.route.params.subscribe(params => {
      this.id = params
    });
    this.seanceforupdate = this.firebase.list('seances');

    this.id1 = this.route.snapshot.paramMap.get('id');
    console.log(this.id1)
  }


  ngOnInit(): void {
    this.formGroup = new FormGroup({
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
      ]),

    });
    this.seanceService.getseanceById(this.id1).subscribe((results) => {

      this.getseance(results)

    })

  }

  getseance(entries: any[]) {

    this.seancedetails = [];

    entries.forEach(element => {


      let y = element.payload.toJSON()
      y["$key"] = element.key
      this.seancedetails.push(y as Seance);

      this.data.Id = this.seancedetails[0]['Id']
      this.data.Nom = this.seancedetails[0]['Nom']
      this.data.Prenom = this.seancedetails[0]['Prenom']
      this.data.Sexe = this.seancedetails[0]['Sexe']
      this.data.Phone = this.seancedetails[0]['Phone']
      this.data.Adresse = this.seancedetails[0]['Adresse']
      this.data.Date = this.seancedetails[0]['Date']
      this.data.Heure = this.seancedetails[0]['Heure']
      this.data.Nature = this.seancedetails[0]['Nature']
      this.data.Etat = this.seancedetails[0]['Etat']
      this.data.Prix = this.seancedetails[0]['Prix']
  
    })
    console.log("res");
    console.log(this.data.Nom);
    console.log(this.seancedetails);
  }

  onSubmit1() {

    this.seanceforupdate.update(this.id1, {
      Id: this.data.Id,
      Nom: this.data.Nom,
      Prenom: this.data.Prenom,
      Sexe: this.data.Sexe,
      Phone: this.data.Phone,
      Adresse: this.data.Adresse,
      Date: this.data.Date,
      Heure: this.data.Heure,
      Nature: this.data.Nature,
      Etat: this.data.Etat,
      Prix: this.data.Prix,
     
    }).then(_added => {
      alert("Séance modifiée avec sucées");
      this.seanceService.getseanceById(this.id1).subscribe((results) => {
        this.getseance(results);
        this.changeDetectorRef.detectChanges();
      });
      this.router.navigate(['/seances']);


    }).catch(error => {
      console.error(error)
      alert("Vérifier les champs saisies!");
      this.errorMessage1 = error.messaage
      console.log('error', error)
      console.log(error.message)

    })
  }


}

