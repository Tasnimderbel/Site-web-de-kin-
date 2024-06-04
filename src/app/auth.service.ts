import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private utilisateurConnecte = false;

  connexion(username: string, password: string): boolean {
    // Votre logique de connexion ici (par exemple, vérification des identifiants)
    // ...
    this.utilisateurConnecte = true;
    return true;
  }

  deconnexion(): void {
    // Votre logique de déconnexion ici
    this.utilisateurConnecte = false;
  }

  estConnecte(): boolean {
    return this.utilisateurConnecte;
  }

  createNewUser(email: any, password: any) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  resetPassword(email: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().sendPasswordResetEmail(email).then(
          () => {
            resolve(true)
            console.log("we've sent you a password reset link")


          },
          (error) => {
            reject(error);
          }
        );

      }
    );
  }
  //regiter
  signup(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve(true)
          },
          (error) => {
            reject(error)
          }
        )

      }
    )
  }
  //login
  signInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            resolve(true)
          },
          (error) => {
            reject(error)
          }

        )
      }
    )
  }



}
