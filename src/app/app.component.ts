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
  searchtext:any;
  constructor(private authservice: AuthService) {
    var firebaseConfig = {
      apiKey: "AIzaSyCSn0W6M7TVQh25XEba2TsriklUtCWkHCI",
      authDomain: "kine-205af.firebaseapp.com",
      databaseURL: "https://kine-205af-default-rtdb.firebaseio.com",
      projectId: "kine-205af",
      storageBucket: "kine-205af.appspot.com",
      messagingSenderId: "500786636923",
      appId: "1:500786636923:web:c1de1880ae5f48b5685ade",
      measurementId: "G-64MLRJP2PY"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}

