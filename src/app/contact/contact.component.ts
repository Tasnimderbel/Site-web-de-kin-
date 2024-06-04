import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  errorMessage1: string = '';
  errorMessage: string = '';
  addContactForm!: FormGroup;


  Nom!: string
  Email!: string
  Sujet!: string
  Message!: string


  contactList: AngularFireList<any>
  constructor(private contactService: ContactService, public router: Router,
    private db: AngularFireDatabase, private fire: AngularFireAuth) {

    this.contactList = db.list('contact')
  }

  ngOnInit(): void {
    this.addContactForm = new FormGroup({
      nom: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      sujet: new FormControl('', [
        Validators.required
      ]),
      message: new FormControl('', [
        Validators.required
      ])
     
    });
  }

  onSubmit() {

    let create = 'false';

    this.contactList.push({

      Nom: this.Nom,
      Email: this.Email,
      Sujet: this.Sujet,
      Message: this.Message
    

    }).then(added => {
      alert("message envoyée");
      this.router.navigate(['/acceuil'])




    }).catch(error => {
      console.error(error)
      alert("Vérifier les champs");
      this.errorMessage1 = error.messaage
      console.log('error', error)
      console.log(error.message)

    })

    /*
     this.condactor = new Conductor(this.lastname,this.firstname,this.phone,this.address);
    
     console.log(this.condactor)
     this.conductorservice.createConductor(this.condactor)
     */

  }

}



  

 