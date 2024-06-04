import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consultation } from './consultation';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {
  addconsultation(consultation: Consultation) {
    throw new Error('Method not implemented.');
  }

  consultationList: AngularFireList<any>




  constructor(private db: AngularFireDatabase) {

    this.consultationList = db.list('consultations')

  }





  createconsultation(consultation: Consultation) {

    this.consultationList.push({
      Id: consultation.Id,
      Nom: consultation.Nom,
      Prenom: consultation.Prenom,
      Sexe: consultation.Sexe,
      Phone: consultation.Phone,
      Adresse: consultation.Adresse,
      Nbrseance: consultation.Nbrseance,
      Etat: consultation.Etat,
      Service: consultation.Service,
      Date: consultation.Date,
      Heure: consultation.Heure,
      Prix: consultation.Prix

    }).catch(error => {
      console.error(error)

    })

  }

  getConsultationData(id: number): Observable<any> {
    return this.db.object(`consultations/${id}`).valueChanges();
  }

  getconsultation(): Observable<any> {
    return this.db.list('consultations').snapshotChanges();
  }


  getconsultationById(id: any): Observable<any> {
    return this.db.list('consultations', ref => ref.orderByKey().equalTo(id)).snapshotChanges();
  }
}
