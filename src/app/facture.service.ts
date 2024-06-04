import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facture } from './facture';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  addfacture(facture: Facture) {
    throw new Error('Method not implemented.');
  }

  factureList: AngularFireList<any>



  constructor(private db: AngularFireDatabase) {

    this.factureList = db.list('facture')

  }





  createfacture(facture: Facture) {

    this.factureList.push({
      DateFac: facture.DateFac,
      Nom: facture.Nom,
      Id: facture.Id,
      Date: facture.Date,
      Service: facture.Service,
      Quantite: facture.Quantite,
      Prix: facture.Prix,
      Etat: facture.Etat,
      Total: facture.Total
      

    }).catch(error => {
      console.error(error)

    })

  }


  getfacture(): Observable<any> {
    return this.db.list('facture').snapshotChanges();
  }

  getfactureById(id: any): Observable<any> {
    return this.db.list('facture', ref => ref.orderByKey().equalTo(id)).snapshotChanges();
  }

}




