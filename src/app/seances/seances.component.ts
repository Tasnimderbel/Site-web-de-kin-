import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Seance } from '../seance';
import { SeanceService } from '../seance.service';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseOperation } from '@angular/fire/compat/database/interfaces';

@Component({
  selector: 'app-seances',
  templateUrl: './seances.component.html',
  styleUrls: ['./seances.component.css']
})
export class SeancesComponent {
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
  Date!: string
  Heure!: string

  seanceforupdate: AngularFireList<any>
  data = {
    Id: '',
    Nom: '',
    Prenom: '',
    Sexe: '',
    Phone: '',
    Adresse: '',
    Date: '',
    Heure: ''
  }
  id1: any;

  seancefordelete: AngularFireList<any>;
  listseance: Seance[] = [];

  displayAdd: boolean = false;


  seanceList: AngularFireList<any>

  constructor(private router: Router, public dialog: MatDialog,
    private firebase: AngularFireDatabase, private seanceService: SeanceService,
    private route: ActivatedRoute,
    private db: AngularFireDatabase) {

    this.seanceList = db.list('seances');

    this.seancefordelete = this.firebase.list('seances');
    this.route.params.subscribe(params => {
      this.id = params
    });
    this.seanceforupdate = this.firebase.list('seances');
    this.id1 = this.route.snapshot.paramMap.get('id');
    console.log(this.id1)
  }


  ngOnInit(): void {
    this.seanceService.getseance().subscribe((results) => {

      this.listSeance(results)

    })


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

      
  edit(key: string) {

    this.router.navigate(['edit-seance/' + key])

  }

  

}

