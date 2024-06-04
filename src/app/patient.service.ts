
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  addpatient(patient: Patient) {
    throw new Error('Method not implemented.');
  }

  patientList: AngularFireList<any>




  constructor(private db: AngularFireDatabase) {

    this.patientList = db.list('patients')

  }





  createpatient(patient: Patient) {

    this.patientList.push({
      Id: patient.Id,
      Nom: patient.Nom,
      Prenom: patient.Prenom,
      DateNaissance: patient.DateNaissance,
      Sexe: patient.Sexe,
      Phone: patient.Phone,
      Adresse: patient.Adresse,
      DateRdv: patient.DateRdv,

    }).catch(error => {
      console.error(error)

    })

  }

  getPatientData(id: number): Observable<any> {
    return this.db.object(`patients/${id}`).valueChanges();
  }

  getpatient(): Observable<any> {
    return this.db.list('patients').snapshotChanges();
  }


  getpatientById(id: any): Observable<any> {
    return this.db.list('patients', ref => ref.orderByKey().equalTo(id)).snapshotChanges();
  }

}

