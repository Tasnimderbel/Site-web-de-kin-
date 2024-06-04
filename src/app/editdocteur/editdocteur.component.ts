import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Docteur } from '../docteur';
import { DocteurService } from '../docteur.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-editdocteur',
  templateUrl: './editdocteur.component.html',
  styleUrls: ['./editdocteur.component.css']
})
export class EditdocteurComponent {
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
  Specialite!: string
  Pass!: string
  docteurdetails: any = []

  docteurforupdate: AngularFireList<any>

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
    Specialite: '',
    Pass: ''
  }
  id1: any;

  constructor(private router: Router, private firebase: AngularFireDatabase,
    private route: ActivatedRoute, private docteurService: DocteurService, private changeDetectorRef: ChangeDetectorRef) {
    this.route.params.subscribe(params => {
      this.id = params
    });
    this.docteurforupdate = this.firebase.list('docteur');

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
      specialite: new FormControl('', [
        Validators.required,
      ]),
      pass: new FormControl('', [
        Validators.required,
      ])

    });
    this.docteurService.getdocteurById(this.id1).subscribe((results) => {

      this.getdocteur(results)

    })

  }

  getdocteur(entries: any[]) {

    this.docteurdetails = [];

    entries.forEach(element => {


      let y = element.payload.toJSON()
      y["$key"] = element.key
      this.docteurdetails.push(y as Docteur);

      this.data.Id = this.docteurdetails[0]['Id']
      this.data.Nom = this.docteurdetails[0]['Nom']
      this.data.Prenom = this.docteurdetails[0]['Prenom']
      this.data.DateNaissance = this.docteurdetails[0]['DateNaissance']
      this.data.Phone = this.docteurdetails[0]['Phone']
      this.data.Genre = this.docteurdetails[0]['Genre']
      this.data.Email = this.docteurdetails[0]['Email']
      this.data.Adresse = this.docteurdetails[0]['Adresse']
      this.data.Experience = this.docteurdetails[0]['Experience']
      this.data.Role = this.docteurdetails[0]['Role']
      this.data.DateRec = this.docteurdetails[0]['DateRec']
      this.data.Specialite = this.docteurdetails[0]['Specialite']
      this.data.Pass = this.docteurdetails[0]['Pass']

    })
    console.log("res");
    console.log(this.data.Nom);
    console.log(this.docteurdetails);
  }

  onSubmit1() {

    this.docteurforupdate.update(this.id1, {
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
      Specialite: this.data.Specialite,
      Pass: this.data.Pass
   
     
    }).then(_added => {
      alert("Compte docteur modifiée avec sucées");
      this.docteurService.getdocteurById(this.id1).subscribe((results) => {
        this.getdocteur(results);
        this.changeDetectorRef.detectChanges();
      });
      this.router.navigate(['/docteur']);
    }).catch(error => {
      alert("Vérifier les champs!");
      this.errorMessage1 = error.message;
    });
  }


}


