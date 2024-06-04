import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seance } from './seance';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {
  addseance(seance: Seance) {
    throw new Error('Method not implemented.');
  }

  seanceList: AngularFireList<any>




  constructor(private db: AngularFireDatabase) {

    this.seanceList = db.list('seances')

  }





  createseance(seance: Seance) {

    this.seanceList.push({
      Id: seance.Id,
      Nom: seance.Nom,
      Prenom: seance.Prenom,
      Sexe: seance.Sexe,
      Phone: seance.Phone,
      Adresse: seance.Adresse,
      Date: seance.Date,
      Heure: seance.Heure,
      Nature: seance.Nature,
      Etat: seance.Etat,
      Prix: seance.Prix,

    }).catch(error => {
      console.error(error)

    })

  }

  getSeanceData(id: number): Observable<any> {
    return this.db.object(`seances/${id}`).valueChanges();
  }

  getseance(): Observable<any> {
    return this.db.list('seances').snapshotChanges();
  }


  getseanceById(id: any): Observable<any> {
    return this.db.list('seances', ref => ref.orderByKey().equalTo(id)).snapshotChanges();
  }

}


