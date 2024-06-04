import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { ActivatedRoute, Router } from '@angular/router';
import { Docteur } from '../docteur';
import { DocteurService } from '../docteur.service';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseOperation } from '@angular/fire/compat/database/interfaces';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-docteur',
  templateUrl: './docteur.component.html',
  styleUrls: ['./docteur.component.css']
})
export class DocteurComponent {


  url: string = "../assets/images/docteur.jpg";
  selectedFile: File | null = null;
  
  downloadURL: string | null = null;
  


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  upload() {
    if (this.selectedFile) {
      const filePath = `profile_photos/${Date.now()}_${this.selectedFile.name}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, this.selectedFile);

      task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            this.downloadURL = url;
          });
        })
      ).subscribe();
    }
  }

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
  Specialite!: string
  Pass!: string
 
  docteurforupdate: AngularFireList<any>
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
    Specialite: '',
    Pass: ''
    
  }
  id1: any;

  docteurfordelete: AngularFireList<any>;
  listdocteur: Docteur[] = [];

  displayAdd: boolean = false;




  docteurList: AngularFireList<any>

  constructor(private router: Router, public dialog: MatDialog,
    private firebase: AngularFireDatabase, private docteurService: DocteurService,
    private route: ActivatedRoute,
    private db: AngularFireDatabase,
    private storage: AngularFireStorage) {

    this.docteurList = db.list('docteur');

    this.docteurfordelete = this.firebase.list('docteur');
    this.route.params.subscribe(params => {
      this.id = params
    });
    this.docteurforupdate = this.firebase.list('docteur');
    this.id1 = this.route.snapshot.paramMap.get('id');
    console.log(this.id1)
  }


  ngOnInit(): void {
    this.docteurService.getdocteur().subscribe((results) => {

      this.listDocteur(results)

    })


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

      
  edit(key: string) {

    this.router.navigate(['edit-docteur/' + key])

  }

  

  

}


