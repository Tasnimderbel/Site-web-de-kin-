import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Docteur } from '../docteur';
import { DocteurService } from '../docteur.service';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Secretaire } from '../secretaire';
import { SecretaireService } from '../secretaire.service';
import { Kine } from '../kine';
import { KineService } from '../kine.service';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseOperation } from '@angular/fire/compat/database/interfaces';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.css']
})
export class AproposComponent {

  patients: any[] = []; 
  sum: number = 0;

  displayUpdate: boolean = false;

  id: any
  errorMessage: string = '';
  errorMessage1: string = '';
  Id!: string
 

  id1: any;

  listdocteur: Docteur[] = [];

  listsecretaire: Secretaire[] = [];

  listkine: Kine[] = [];


  listpatient: Patient[] = [];

  displayAdd: boolean = false;



  docteurList: AngularFireList<any>

  secretaireList: AngularFireList<any>
  
  kineList: AngularFireList<any>

  patientList: AngularFireList<any>

  constructor(private router: Router, public dialog: MatDialog,private authservice: AuthService,
    private firebase: AngularFireDatabase,  private docteurService: DocteurService, private secretaireService: SecretaireService, private kineService: KineService,  private patientService: PatientService,
    private route: ActivatedRoute,
    private db: AngularFireDatabase) {

    this.docteurList = db.list('docteur');

    this.secretaireList = db.list('secretaire');
    
    this.kineList = db.list('kines');

    this.patientList = db.list('patients');

  }


  ngOnInit(): void {
    this.docteurService.getdocteur().subscribe((results) =>
      { this.listDocteur(results) })

    this.secretaireService.getsecretaire().subscribe((results) =>
      { this.listSecretaire(results) })

    this.kineService.getKine().subscribe((results) =>
      {this.listKine(results)})

    this.patientService.getpatient().subscribe((results) =>
      {this.listPatient(results)})

  }

 
  listDocteur(entries: any[]) {
    this.listdocteur = [];
    entries.forEach(element => {
      let y = element.payload.toJSON()
      y["$key"] = element.key
      this.listdocteur.push(y as Docteur);
    })
    console.log(this.listdocteur);
  }

  listSecretaire(entries: any[]) {
    this.listsecretaire = [];
    entries.forEach(element => {
      let y = element.payload.toJSON()
      y["$key"] = element.key
      this.listsecretaire.push(y as Secretaire);
    })
    console.log(this.listsecretaire);
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
      this.listpatient.push(y as Kine);
    })
    console.log(this.listpatient);
  }


  
  
}
