import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final';
  constructor(private authservice: AuthService) {
    var firebaseConfig = {
      apiKey: "AIzaSyBp4tB61nNkTCrmXnC-oOxCR1-KDDt1ATA",
      authDomain: "webg2-aed9d.firebaseapp.com",
      projectId: "webg2-aed9d",
      storageBucket: "webg2-aed9d.appspot.com",
      messagingSenderId: "64002904937",
      appId: "1:64002904937:web:c8c4105f4607c05c4923f8",
      measurementId: "G-DVZ1PXGF4W"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}

