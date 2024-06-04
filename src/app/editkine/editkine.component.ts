import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Kine } from '../kine';
import { KineService } from '../kine.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-editkine',
  templateUrl: './editkine.component.html',
  styleUrls: ['./editkine.component.css']
})
export class EditkineComponent {
  id: any
  errorMessage: string = '';
  formGroup!: FormGroup;
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
  kinedetails: any = []

  kineforupdate: AngularFireList<any>

  data = {
    Id: '',
    Nom: '',
    Prenom: '',
    DateNaissance: '',
    Phone: '',
    Sexe: '',
    Adresse: '',
    Service: '',
    DateRec: ''
  }
  id1: any;

  constructor(private router: Router, private firebase: AngularFireDatabase,
    private route: ActivatedRoute, private kineService: KineService, private changeDetectorRef: ChangeDetectorRef) {
    this.route.params.subscribe(params => {
      this.id = params
    });
    this.kineforupdate = this.firebase.list('kines');

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
      dateNaissance: new FormControl('', [
        Validators.required,
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8),
        Validators.maxLength(13)
      ]),
      sexe: new FormControl('', [
        Validators.required,
      ]),
      adresse: new FormControl('', [
        Validators.required,
      ]),
      service: new FormControl('', [
        Validators.required,
      ]),
      dateRec: new FormControl('', [
        Validators.required,
      ])
   

    });
    this.kineService.getKinetById(this.id1).subscribe((results) => {

      this.getkine(results)

    })

  }

  getkine(entries: any[]) {

    this.kinedetails = [];

    entries.forEach(element => {


      let y = element.payload.toJSON()
      y["$key"] = element.key
      this.kinedetails.push(y as Kine);

      this.data.Id = this.kinedetails[0]['Id']
      this.data.Nom = this.kinedetails[0]['Nom']
      this.data.Prenom = this.kinedetails[0]['Prenom']
      this.data.DateNaissance = this.kinedetails[0]['DateNaissance']
      this.data.Phone = this.kinedetails[0]['Phone']
      this.data.Sexe = this.kinedetails[0]['Sexe']
      this.data.Adresse = this.kinedetails[0]['Adresse']
      this.data.Service = this.kinedetails[0]['Service']
      this.data.DateRec = this.kinedetails[0]['DateRec']
   

    })
    console.log("res");
    console.log(this.data.Nom);
    console.log(this.kinedetails);
  }

  onSubmit1() {

    this.kineforupdate.update(this.id1, {
      Id: this.data.Id,
      Nom: this.data.Nom,
      Prenom: this.data.Prenom,
      DateNaissance: this.data.DateNaissance,
      Phone: this.data.Phone,
      Sexe: this.data.Sexe,
      Adresse: this.data.Adresse,
      Service: this.data.Service,
      DateRec: this.data.DateRec
   
     
    }).then(_added => {
      alert("Compte modifié avec sucées");
      this.kineService.getKinetById(this.id1).subscribe((results) => {
        this.getkine(results);
        this.changeDetectorRef.detectChanges();
      });
      this.router.navigate(['/kines']);
    }).catch(error => {
      alert("Vérifier les champs saisies");
      this.errorMessage1 = error.message;
    });
  }


}
