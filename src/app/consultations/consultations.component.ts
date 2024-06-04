import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Consultation } from '../consultation';
import { ConsultationService } from '../consultation.service';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseOperation } from '@angular/fire/compat/database/interfaces';

@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.css']
})
export class ConsultationsComponent {
  searchtext:any;
  displayUpdate: boolean = false;

  id: any
  errorMessage: string = '';
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

  consultationfordelete: AngularFireList<any>;
  listconsultation: Consultation[] = [];

  displayAdd: boolean = false;


  consultationList: AngularFireList<any>

  constructor(private router: Router, public dialog: MatDialog,
    private firebase: AngularFireDatabase, private consultationService: ConsultationService,
    private route: ActivatedRoute,
    private db: AngularFireDatabase) {

    this.consultationList = db.list('consultations');

    this.consultationfordelete = this.firebase.list('consultations');
    this.route.params.subscribe(params => {
      this.id = params
    });
    this.consultationforupdate = this.firebase.list('consultations');
    this.id1 = this.route.snapshot.paramMap.get('id');
    console.log(this.id1)
  }


  ngOnInit(): void {
    this.consultationService.getconsultation().subscribe((results) => {

      this.listConsultation(results)

    })


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

      
  edit(key: string) {

    this.router.navigate(['edit-consultation/' + key])

  }

  

}


