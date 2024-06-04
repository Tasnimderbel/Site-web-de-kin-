import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  email!: string;
  errorMessage!: string;
  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  resetPassword(email: string) {

    this.authservice.resetPassword(email).then(
      () => {
        alert("email envoyée");
        this.router.navigate(['/login']);
      },

      (error) => {
        this.errorMessage = error
        alert("email indisponible");
      }
    )

  }
}

