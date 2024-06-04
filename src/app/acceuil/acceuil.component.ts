import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent {
  myForm!: FormGroup
  errorMessage: string | undefined

  constructor(private fb: FormBuilder, private router: Router, private authservice: AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }



  initForm() {
    this.myForm = this.fb.group({
      nom: new FormControl('', [
        Validators.required,

      ]),
      
      email: new FormControl('', [
        Validators.required,
        Validators.email

      ]),

      objet: new FormControl('', [
        Validators.required,

      ]),

      message: new FormControl('', [
        Validators.required
      ]),

    }

    )
  }

  saveUser() {
    const email = this.myForm.get('email')?.value;
    const password = this.myForm.get('password')?.value;
    this.authservice.signup(email, password).then(
      () => {
        alert("Message envoyée");
        this.router.navigate(['/acceuil']);
      },
      (error: string) => {
        this.errorMessage = error
        alert("Message non envoyée");

      }
    )
  }


}

