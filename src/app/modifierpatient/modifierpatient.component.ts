import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-modifierpatient',
  templateUrl: './modifierpatient.component.html',
  styleUrls: ['./modifierpatient.component.css']
})
export class ModifierpatientComponent {
  id: any
  errorMessage: string = '';
  formGroup!: FormGroup;
  errorMessage1: string = '';

  Id!: string
  Nom!: string
  Prenom!: string
  DateNaissance!: string
  Sexe!: string
  Phone!: string
  Adresse!: string
  DateRdv!: string
  patientdetails: any = []

  patientforupdate: AngularFireList<any>

  data = {
    Id: '',
    Nom: '',
    Prenom: '',
    DateNaissance: '',
    Sexe: '',
    Phone: '',
    Adresse: '',
    DateRdv: '',
  }
  id1: any;

  constructor(private router: Router, private firebase: AngularFireDatabase,
    private route: ActivatedRoute, private patientService: PatientService, private changeDetectorRef: ChangeDetectorRef) {
    this.route.params.subscribe(params => {
      this.id = params
    });
    this.patientforupdate = this.firebase.list('patients');

    this.id1 = this.route.snapshot.paramMap.get('id');
    console.log(this.id1)
  }


  ngOnInit(): void {
    this.formGroup = new FormGroup({
      Id: new FormControl('', [
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
      ]),

    });
    this.patientService.getpatientById(this.id1).subscribe((results) => {

      this.getpatient(results)

    })

  }

  getpatient(entries: any[]) {

    this.patientdetails = [];

    entries.forEach(element => {


      let y = element.payload.toJSON()
      y["$key"] = element.key
      this.patientdetails.push(y as Patient);

      this.data.Id = this.patientdetails[0]['Id']
      this.data.Nom = this.patientdetails[0]['Nom']
      this.data.Prenom = this.patientdetails[0]['Prenom']
      this.data.DateNaissance = this.patientdetails[0]['DateNaissance']
      this.data.Sexe = this.patientdetails[0]['Sexe']
      this.data.Phone = this.patientdetails[0]['Phone']
      this.data.Adresse = this.patientdetails[0]['Adresse']
      this.data.DateRdv = this.patientdetails[0]['DateRdv']
  
    })
    console.log("res");
    console.log(this.data.Nom);
    console.log(this.patientdetails);
  }

  onSubmit1() {

    this.patientforupdate.update(this.id1, {
      Id: this.data.Id,
      Nom: this.data.Nom,
      Prenom: this.data.Prenom,
      DateNaissance: this.data.DateNaissance,
      Sexe: this.data.Sexe,
      Phone: this.data.Phone,
      Adresse: this.data.Adresse,
      DateRdv: this.data.DateRdv
   
     
    }).then(_added => {
      alert("Compte modifié avec sucées");
      this.patientService.getpatientById(this.id1).subscribe((results) => {
        this.getpatient(results);
        this.changeDetectorRef.detectChanges();
      });
      this.router.navigate(['/patients']);


    }).catch(error => {
      console.error(error)
      alert("Vérifier les champs saisies!");
      this.errorMessage1 = error.messaage
      console.log('error', error)
      console.log(error.message)

    })
  }


}
