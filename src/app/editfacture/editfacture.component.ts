import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Facture } from '../facture';
import { FactureService } from '../facture.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-editfacture',
  templateUrl: './editfacture.component.html',
  styleUrls: ['./editfacture.component.css']
})
export class EditfactureComponent {
  id: any
  errorMessage: string = '';
  formGroup!: FormGroup;
  errorMessage1: string = '';

  Id!: string
  Nom!: string
  Date!: string
  Service!: string
  Quantite!: string
  Etat!: string
  Prix!: string
  Total!: string
  facturedetails: any = []

  factureforupdate: AngularFireList<any>

  data = {
    Id: '',
    Nom: '',
    Date: '',
    Service: '',
    Quantite: '',
    Etat: '',
    Prix: '',
    Total: ''
  }
  id1: any;

  constructor(private router: Router, private firebase: AngularFireDatabase,
    private route: ActivatedRoute, private factureService: FactureService, private changeDetectorRef: ChangeDetectorRef) {
    this.route.params.subscribe(params => {
      this.id = params
    });
    this.factureforupdate = this.firebase.list('facture');

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
      date: new FormControl('', [
        Validators.required,
      ]),
      service: new FormControl('', [
        Validators.required,
      ]),
      quantite: new FormControl('', [
        Validators.required,
      ]),
      etat: new FormControl('', [
        Validators.required,
      ]),
      prix: new FormControl('', [
        Validators.required,
      ]),
      total: new FormControl('', [
        Validators.required,
      ])

    });
    this.factureService.getfactureById(this.id1).subscribe((results) => {

      this.getfacture(results)

    })

  }

  getfacture(entries: any[]) {

    this.facturedetails = [];

    entries.forEach(element => {


      let y = element.payload.toJSON()
      y["$key"] = element.key
      this.facturedetails.push(y as Facture);

      this.data.Id = this.facturedetails[0]['Id']
      this.data.Nom = this.facturedetails[0]['Nom']
      this.data.Date = this.facturedetails[0]['Date']
      this.data.Service = this.facturedetails[0]['Service']
      this.data.Quantite = this.facturedetails[0]['Quantite']
      this.data.Etat = this.facturedetails[0]['Etat']
      this.data.Prix = this.facturedetails[0]['Prix']
      this.data.Total = this.facturedetails[0]['Total']
   

    })
    console.log("res");
    console.log(this.data.Nom);
    console.log(this.facturedetails);
  }

  onSubmit1() {

    this.factureforupdate.update(this.id1, {
      Id: this.data.Id,
      Nom: this.data.Nom,
      Date: this.data.Date,
      Service: this.data.Service,
      Quantite: this.data.Quantite,
      Etat: this.data.Etat,
      Prix: this.data.Prix,
      Total: this.data.Total
   
     
    }).then(_added => {
      alert("Facture modifiée avec sucées");
      this.factureService.getfactureById(this.id1).subscribe((results) => {
        this.getfacture(results);
        this.changeDetectorRef.detectChanges();
      });
      this.router.navigate(['/facture']);
    }).catch(error => {
      alert("erreur modifiée facture");
      this.errorMessage1 = error.message;
    });
  }


}

