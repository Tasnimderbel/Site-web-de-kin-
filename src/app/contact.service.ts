import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  addcontact(contact: Contact) {
    throw new Error('Method not implemented.');
  }

  contactList: AngularFireList<any>




  constructor(private db: AngularFireDatabase) {

    this.contactList = db.list('contact')

  }





  createcontact(contact: Contact) {

    this.contactList.push({
      Nom: contact.Nom,
      Email: contact.Email,
      Sujet: contact.Sujet,
      Message: contact.Message

    }).catch(error => {
      console.error(error)

    })

  }

  getContactData(id: number): Observable<any> {
    return this.db.object(`contact/${id}`).valueChanges();
  }

  getcontact(): Observable<any> {
    return this.db.list('contact').snapshotChanges();
  }


  getcontactById(id: any): Observable<any> {
    return this.db.list('contact', ref => ref.orderByKey().equalTo(id)).snapshotChanges();
  }

}

