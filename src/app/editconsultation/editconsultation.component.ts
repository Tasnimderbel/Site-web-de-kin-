import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Consultation } from '../consultation';
import { ConsultationService } from '../consultation.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-editconsultation',
  templateUrl: './editconsultation.component.html',
  styleUrls: ['./editconsultation.component.css']
})
export class EditconsultationComponent {
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
  Nbrseance!: string
  Etat!: string
  Service!: string
  Date!: string
  Heure!: string
  Prix!: string
  consultationdetails: any = []

  consultationforupdate: AngularFireList<any>

  data = {
    Id: '',
    Nom: '',
    Prenom: '',
    Sexe: '',
    Phone: '',
    Adresse: '',
    Nbrseance: '',
    Etat: '',
    Service: '',
    Date: '',
    Heure: '',
    Prix: ''
  }
  id1: any;

  constructor(private router: Router, private firebase: AngularFireDatabase,
    private route: ActivatedRoute, private consultationService: ConsultationService, private changeDetectorRef: ChangeDetectorRef) {
    this.route.params.subscribe(params => {
      this.id = params
    });
    this.consultationforupdate = this.firebase.list('consultations');

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
      nbrseance: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
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
    this.consultationService.getconsultationById(this.id1).subscribe((results) => {

      this.getconsultation(results)

    })

  }

  getconsultation(entries: any[]) {

    this.consultationdetails = [];

    entries.forEach(element => {


      let y = element.payload.toJSON()
      y["$key"] = element.key
      this.consultationdetails.push(y as Consultation);

      this.data.Id = this.consultationdetails[0]['Id']
      this.data.Nom = this.consultationdetails[0]['Nom']
      this.data.Prenom = this.consultationdetails[0]['Prenom']
      this.data.Sexe = this.consultationdetails[0]['Sexe']
      this.data.Phone = this.consultationdetails[0]['Phone']
      this.data.Adresse = this.consultationdetails[0]['Adresse']
      this.data.Nbrseance = this.consultationdetails[0]['Nbrseance']
      this.data.Etat = this.consultationdetails[0]['Etat']
      this.data.Service = this.consultationdetails[0]['Service']
      this.data.Date = this.consultationdetails[0]['Date']
      this.data.Heure = this.consultationdetails[0]['Heure']
      this.data.Prix = this.consultationdetails[0]['Prix']
  
    })
    console.log("res");
    console.log(this.data.Nom);
    console.log(this.consultationdetails);
  }

  onSubmit1() {

    this.consultationforupdate.update(this.id1, {
      Id: this.data.Id,
      Nom: this.data.Nom,
      Prenom: this.data.Prenom,
      Sexe: this.data.Sexe,
      Phone: this.data.Phone,
      Adresse: this.data.Adresse,
      Nbrseance: this.data.Nbrseance,
      Etat: this.data.Etat,
      Service: this.data.Service,
      Date: this.data.Date,
      Heure: this.data.Heure,
      Prix: this.data.Prix
     
    }).then(_added => {
      alert("Consultation modifiée avec sucées");
      this.consultationService.getconsultationById(this.id1).subscribe((results) => {
        this.getconsultation(results);
        this.changeDetectorRef.detectChanges();
      });
      this.router.navigate(['/consultations']);


    }).catch(error => {
      console.error(error)
      alert("Vérifier les champs saisies!");
      this.errorMessage1 = error.messaage
      console.log('error', error)
      console.log(error.message)

    })
  }

}
