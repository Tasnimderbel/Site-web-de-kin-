import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Kine } from '../kine';
import { KineService } from '../kine.service';
import { Seance } from '../seance';
import { SeanceService } from '../seance.service';
import { Consultation } from '../consultation';
import { ConsultationService } from '../consultation.service';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseOperation } from '@angular/fire/compat/database/interfaces';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {

  searchtext:any;

  patients: any[] = []; 
  sum: number = 0;

  displayUpdate: boolean = false;

  id: any
  errorMessage: string = '';
  errorMessage1: string = '';
  Id!: string
 

  id1: any;


  listkine: Kine[] = [];


  listpatient: Patient[] = [];

  listseance: Seance[] = [];

  listconsultation: Consultation[] = [];

  displayAdd: boolean = false;

  
  kineList: AngularFireList<any>

  patientList: AngularFireList<any>

  seanceList: AngularFireList<any>

  consultationList: AngularFireList<any>

  constructor(private router: Router, public dialog: MatDialog,private authservice: AuthService,
    private firebase: AngularFireDatabase, private kineService: KineService,  private patientService: PatientService,private seanceService:SeanceService,private consultationService:ConsultationService,
    private route: ActivatedRoute,
    private db: AngularFireDatabase) {
    
    this.kineList = db.list('kines');

    this.patientList = db.list('patients');

    this.seanceList = db.list('seances');

    
    this.consultationList = db.list('consultation');

  }


  ngOnInit(): void {
    this.kineService.getKine().subscribe((results) =>
      {this.listKine(results)})

    this.patientService.getpatient().subscribe((results) =>
      {this.listPatient(results)})

     this.seanceService.getseance().subscribe((results) =>
      {this.listSeance(results)})

     this.consultationService.getconsultation().subscribe((results) =>
      {this.listConsultation(results)})

  }

 

  listKine(entries: any[]) {
    this.listkine = [];
    entries.forEach(element => {
      let y = element.payload.toJSON()
      y["$key"] = element.key
      this.listkine.push(y as Kine);
    })
    console.log(this.listkine);
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

  listSeance(entries: any[]) {
    this.listseance = [];
    entries.forEach(element => {
      let y = element.payload.toJSON()
      y["$key"] = element.key
      this.listseance.push(y as Seance);
    })
    console.log(this.listseance);
  }


  listConsultation(entries: any[]) {
    this.listconsultation = [];
    entries.forEach(element => {
      let y = element.payload.toJSON()
      y["$key"] = element.key
      this.listconsultation.push(y as Consultation);
    })
    console.log(this.listconsultation);
  }

  
}













