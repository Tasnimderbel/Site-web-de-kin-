import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Secretaire } from './secretaire';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class SecretaireService {
  addsecretaire(secretaire: Secretaire) {
    throw new Error('Method not implemented.');
  }

  secretaireList: AngularFireList<any>



  constructor(private db: AngularFireDatabase) {

    this.secretaireList = db.list('secretaire')

  }





  createsecretaire(secretaire: Secretaire) {

    this.secretaireList.push({
      Id: secretaire.Id,
      Nom: secretaire.Nom,
      Prenom: secretaire.Prenom,
      DateNaissance: secretaire.DateNaissance,
      Phone: secretaire.Phone,
      Genre: secretaire.Genre,
      Email: secretaire.Email,
      Adresse: secretaire.Adresse,
      Experience: secretaire.Experience,
      Role: secretaire.Role,
      DateRec: secretaire.DateRec,
      Pass: secretaire.Pass,
      

    }).catch(error => {
      console.error(error)

    })

  }


  getsecretaire(): Observable<any> {
    return this.db.list('secretaire').snapshotChanges();
  }

  getsecretaireById(id: any): Observable<any> {
    return this.db.list('secretaire', ref => ref.orderByKey().equalTo(id)).snapshotChanges();
  }

}


