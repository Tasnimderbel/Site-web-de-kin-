import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Docteur } from './docteur';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class DocteurService {
  adddocteur(docteur: Docteur) {
    throw new Error('Method not implemented.');
  }

  docteurList: AngularFireList<any>



  constructor(private db: AngularFireDatabase) {

    this.docteurList = db.list('docteur')

  }





  createdocteur(docteur: Docteur) {

    this.docteurList.push({
      Id: docteur.Id,
      Nom: docteur.Nom,
      Prenom: docteur.Prenom,
      DateNaissance: docteur.DateNaissance,
      Phone: docteur.Phone,
      Genre: docteur.Genre,
      Email: docteur.Email,
      Adresse: docteur.Adresse,
      Experience: docteur.Experience,
      Role: docteur.Role,
      DateRec: docteur.DateRec,
      Specialite: docteur.Specialite,
      Pass: docteur.Pass,
      

    }).catch(error => {
      console.error(error)

    })

  }


  getdocteur(): Observable<any> {
    return this.db.list('docteur').snapshotChanges();
  }

  getdocteurById(id: any): Observable<any> {
    return this.db.list('docteur', ref => ref.orderByKey().equalTo(id)).snapshotChanges();
  }

}




