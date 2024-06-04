import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Secretaire } from '../secretaire';
import { SecretaireService } from '../secretaire.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-editsecretaire',
  templateUrl: './editsecretaire.component.html',
  styleUrls: ['./editsecretaire.component.css']
})
export class EditsecretaireComponent {
  id: any
  errorMessage: string = '';
  formGroup!: FormGroup;
  errorMessage1: string = '';

  Id!: string
  Nom!: string
  Prenom!: string
  DateNaissance!: string
  Phone!: string
  Genre!: string
  Adresse!: string
  Email!: string
  Experience!: string
  Role!: string
  DateRec!: string
  Pass!: string
  secretairedetails: any = []

  secretaireforupdate: AngularFireList<any>

  data = {
    Id: '',
    Nom: '',
    Prenom: '',
    DateNaissance: '',
    Phone: '',
    Genre: '',
    Adresse: '',
    Email: '',
    Experience: '',
    Role: '',
    DateRec: '',
    Pass: ''
  }
  id1: any;

  constructor(private router: Router, private firebase: AngularFireDatabase,
    private route: ActivatedRoute, private secretaireService: SecretaireService, private changeDetectorRef: ChangeDetectorRef) {
    this.route.params.subscribe(params => {
      this.id = params
    });
    this.secretaireforupdate = this.firebase.list('secretaire');

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
      genre: new FormControl('', [
        Validators.required,
      ]),
   
      adresse: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      experience: new FormControl('', [
        Validators.required,
      ]),
      role: new FormControl('', [
        Validators.required,
      ]),
      dateRec: new FormControl('', [
        Validators.required,
      ]),
      pass: new FormControl('', [
        Validators.required,
      ])

    });
    this.secretaireService.getsecretaireById(this.id1).subscribe((results) => {

      this.getsecretaire(results)

    })

  }

  getsecretaire(entries: any[]) {

    this.secretairedetails = [];

    entries.forEach(element => {


      let y = element.payload.toJSON()
      y["$key"] = element.key
      this.secretairedetails.push(y as Secretaire);

      this.data.Id = this.secretairedetails[0]['Id']
      this.data.Nom = this.secretairedetails[0]['Nom']
      this.data.Prenom = this.secretairedetails[0]['Prenom']
      this.data.DateNaissance = this.secretairedetails[0]['DateNaissance']
      this.data.Phone = this.secretairedetails[0]['Phone']
      this.data.Genre = this.secretairedetails[0]['Genre']
      this.data.Email = this.secretairedetails[0]['Email']
      this.data.Adresse = this.secretairedetails[0]['Adresse']
      this.data.Experience = this.secretairedetails[0]['Experience']
      this.data.Role = this.secretairedetails[0]['Role']
      this.data.DateRec = this.secretairedetails[0]['DateRec']
      this.data.Pass = this.secretairedetails[0]['Pass']

    })
    console.log("res");
    console.log(this.data.Nom);
    console.log(this.secretairedetails);
  }

  onSubmit1() {

    this.secretaireforupdate.update(this.id1, {
      Id: this.data.Id,
      Nom: this.data.Nom,
      Prenom: this.data.Prenom,
      DateNaissance: this.data.DateNaissance,
      Phone: this.data.Phone,
      Genre: this.data.Genre,
      Adresse: this.data.Adresse,
      Experience: this.data.Experience,
      Role: this.data.Role,
      DateRec: this.data.DateRec,
      Pass: this.data.Pass
   
     
    }).then(_added => {
      alert("Compte secretaire modifiée avec sucées");
      this.secretaireService.getsecretaireById(this.id1).subscribe((results) => {
        this.getsecretaire(results);
        this.changeDetectorRef.detectChanges();
      });
      this.router.navigate(['/secretaire']);
    }).catch(error => {
      alert("Vérifier les champs!");
      this.errorMessage1 = error.message;
    });
  }


}


