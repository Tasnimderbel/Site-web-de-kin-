import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseOperation } from '@angular/fire/compat/database/interfaces';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent {
  searchtext:any;
  displayUpdate: boolean = false;

  id: any
  errorMessage: string = '';
  errorMessage1: string = '';
  Id!: string
  Nom!: string
  Prenom!: string
  DateNaissance!: string
  Sexe!: string
  Phone!: string
  Adresse!: string
  DateRdv!: string

  patientforupdate: AngularFireList<any>
  data = {
    Id:'',
    Nom: '',
    Prenom: '',
    DateNaissance: '',
    Sexe: '',
    Phone: '',
    Adresse: '',
    DateRdv: ''
  }
  id1: any;

  patientfordelete: AngularFireList<any>;
  listpatient: Patient[] = [];

  displayAdd: boolean = false;


  patientList: AngularFireList<any>

  constructor(private router: Router, public dialog: MatDialog,
    private firebase: AngularFireDatabase, private patientService: PatientService,
    private route: ActivatedRoute,
    private db: AngularFireDatabase) {

    this.patientList = db.list('patients');

    this.patientfordelete = this.firebase.list('patients');
    this.route.params.subscribe(params => {
      this.id = params
    });
    this.patientforupdate = this.firebase.list('patients');
    this.id1 = this.route.snapshot.paramMap.get('id');
    console.log(this.id1)
  }


  ngOnInit(): void {
    this.patientService.getpatient().subscribe((results) => {

      this.listPatient(results)

    })


  }


  listPatient(entries: any[]) {
    this.listpatient = [];
    entries.forEach(element => {
      let y = element.payload.toJSON()
      y["$key"] = element.key
      this.listpatient.push(y as Patient);
    })
    console.log(this.listpatient);
  }

      
  edit(key: string) {

    this.router.navigate(['modifier-patient/' + key])

  }

  

}

