import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Secretaire } from '../secretaire';
import { SecretaireService } from '../secretaire.service';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseOperation } from '@angular/fire/compat/database/interfaces';




@Component({
  selector: 'app-secretaire',
  templateUrl: './secretaire.component.html',
  styleUrls: ['./secretaire.component.css']
})
export class SecretaireComponent {

  url: string = "../assets/images/secrétaire.jpg";

  onSelect(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
    }
  }
  
  displayUpdate: boolean = false;

  id: any
  errorMessage: string = '';
  errorMessage1: string = '';
  Id!: string
  Nom!: string
  Prenom!: string
  DateNaissance!: string
  Phone!: string
  Genre!: string
  Email!: string
  Adresse!: string
  Experience!: string
  Role!: string
  DateRec!: string
  Pass!: string
 
  secretaireforupdate: AngularFireList<any>
  data = {
    Id:'',
    Nom: '',
    Prenom: '',
    DateNaissance: '',
    Phone: '',
    Genre: '',
    Email: '',
    Adresse: '',
    Role: '',
    Experience: '',
    DateRec: '',
    Pass: ''
  }
  id1: any;

  secretairefordelete: AngularFireList<any>;
  listsecretaire: Secretaire[] = [];

  displayAdd: boolean = false;




  secretaireList: AngularFireList<any>

  constructor(private router: Router, public dialog: MatDialog,
    private firebase: AngularFireDatabase, private secretaireService: SecretaireService,
    private route: ActivatedRoute,
    private db: AngularFireDatabase) {

    this.secretaireList = db.list('secretaire');

    this.secretairefordelete = this.firebase.list('secretaire');
    this.route.params.subscribe(params => {
      this.id = params
    });
    this.secretaireforupdate = this.firebase.list('secretaire');
    this.id1 = this.route.snapshot.paramMap.get('id');
    console.log(this.id1)
  }


  ngOnInit(): void {
    this.secretaireService.getsecretaire().subscribe((results) => {

      this.listSecretaire(results)

    })


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

      
  edit(key: string) {

    this.router.navigate(['edit-secretaire/' + key])

  }

}

