import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { SocieteComponent } from './societe/societe.component';
import { FinalComponent } from './final/final.component';

const routes: Routes = [
  //la permiére page home
  { path: '', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'register', component:  RegisterComponent },
  { path: 'resetpassword', component:  ResetpasswordComponent },
  { path: 'resetpassword', component:  ResetpasswordComponent },
  { path: 'adduser', component:  AddUserComponent },
  { path: 'update-user/:id', component:  UpdateUserComponent },
  { path: 'confirmation-dialog', component:  ConfirmationDialogComponent },
  { path: 'societe', component:  SocieteComponent },
  { path: 'final', component:  FinalComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
