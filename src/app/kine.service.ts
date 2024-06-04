import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kine } from './kine';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class KineService {
  addKine(kine: Kine) {
    throw new Error('Method not implemented.');
  }

  kineList: AngularFireList<any>



  constructor(private db: AngularFireDatabase) {

    this.kineList = db.list('kines')

  }





  createKine(kine: Kine) {

    this.kineList.push({
      Id: kine.Id,
      Nom: kine.Nom,
      Prenom: kine.Prenom,
      DateNaissance: kine.DateNaissance,
      Phone: kine.Phone,
      Sexe: kine.Sexe,
      Adresse: kine.Adresse,
      Service: kine.Service,
      DateRec: kine.DateRec
      
      

    }).catch(error => {
      console.error(error)

    })

  }


  getKine(): Observable<any> {
    return this.db.list('kines').snapshotChanges();
  }

  getKinetById(id: any): Observable<any> {
    return this.db.list('kines', ref => ref.orderByKey().equalTo(id)).snapshotChanges();
  }

}

