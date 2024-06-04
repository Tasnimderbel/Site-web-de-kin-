import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Kine } from '../kine';
import { KineService } from '../kine.service';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseOperation } from '@angular/fire/compat/database/interfaces';

@Component({
  selector: 'app-kines',
  templateUrl: './kines.component.html',
  styleUrls: ['./kines.component.css']
})
export class KinesComponent {
  searchtext:any;
  displayUpdate: boolean = false;

  id: any
  errorMessage: string = '';
  errorMessage1: string = '';
  Id!: string
  Nom!: string
  Prenom!: string
  DateNaissance!: string
  Phone!: string
  Sexe!: string
  Adresse!: string
  Service!: string
  DateRec!: string
  
  kineforupdate: AngularFireList<any>
  data = {
   
    Id: '',
    Prenom: '',
    Nom: '',
    DateNaissance: '',
    Phone: '',
    Adresse: '',
    Sexe: '',
    Service: '',
    DateRec: ''
   
  }
  id1: any;

  kinefordelete: AngularFireList<any>;
  listkine: Kine[] = [];

  displayAdd: boolean = false;




  kineList: AngularFireList<any>

  constructor(private router: Router, public dialog: MatDialog,
    private firebase: AngularFireDatabase, private kineService: KineService,
    private route: ActivatedRoute,
    private db: AngularFireDatabase) {

    this.kineList = db.list('kines');

    this.kinefordelete = this.firebase.list('kines');
    this.route.params.subscribe(params => {
      this.id = params
    });
    this.kineforupdate = this.firebase.list('kines');
    this.id1 = this.route.snapshot.paramMap.get('id');
    console.log(this.id1)
  }


  ngOnInit(): void {
    this.kineService.getKine().subscribe((results) => {

      this.listKine(results)

    })


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
      
  edit(key: string) {

    this.router.navigate(['edit-kine/' + key])

  }

}

