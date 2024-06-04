import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Facture } from '../facture';
import { FactureService } from '../facture.service';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseOperation } from '@angular/fire/compat/database/interfaces';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent {

  displayUpdate: boolean = false;

  id: any
  errorMessage: string = '';
  errorMessage1: string = '';
  DateFac!: string
  Id!: string
  Nom!: string
  Date!: string
  Service!: string
  Quantite!: string
  Etat!: string
  Prix!: string
  Total!: string
  factureforupdate: AngularFireList<any>
  data = {
    DateFac: '',
    Id: '',
    Nom: '',
    Date: '',
    Service: '',
    Quantite: '',
    Prix: '',
    Etat: '',
    Total: ''
  }
  id1: any;

  facturefordelete: AngularFireList<any>;
  listfacture: Facture[] = [];

  displayAdd: boolean = false;




  factureList: AngularFireList<any>

  constructor(private router: Router, public dialog: MatDialog,
    private firebase: AngularFireDatabase, private factureService: FactureService,
    private route: ActivatedRoute,
    private db: AngularFireDatabase) {

    this.factureList = db.list('facture');

    this.facturefordelete = this.firebase.list('facture');
    this.route.params.subscribe(params => {
      this.id = params
    });
    this.factureforupdate = this.firebase.list('facture');
    this.id1 = this.route.snapshot.paramMap.get('id');
    console.log(this.id1)
  }


  ngOnInit(): void {
    this.factureService.getfacture().subscribe((results) => {

      this.listFacture(results)

    })




  }

  listFacture(entries: any[]) {
    this.listfacture = [];
    entries.forEach(element => {
      let y = element.payload.toJSON()
      y["$key"] = element.key
      this.listfacture.push(y as Facture);
    })
    console.log(this.listfacture);
  }

      
  edit(key: string) {

    this.router.navigate(['edit-facture/' + key])

  }

  print() {
    window.print();

}

}


