import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit{
 
  myForm!: FormGroup
  errorMessage: string | undefined

  constructor(private fb: FormBuilder, private router: Router, private authservice: AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }



  initForm() {
    this.myForm = this.fb.group({
      nomcomplet: new FormControl('', [
        Validators.required,


      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email

      ]),

      password: new FormControl('', [
        Validators.required,

        Validators.minLength(3)
      ]),

    }

    )
  }

  saveUser() {
    const email = this.myForm.get('email')?.value;
    const password = this.myForm.get('password')?.value;
    this.authservice.signup(email, password).then(
      () => {
        alert("date de rendez-vous confirmée");
        this.router.navigate(['/login']);
      },
      (error: string) => {
        this.errorMessage = error
        alert("Date de rendez-vous refusée");

      }
    )
  }
  }


