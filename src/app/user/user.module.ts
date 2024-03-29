import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { userRoutes } from '../user.routes';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';


@NgModule({

  declarations: [
    ProfileComponent,
    LoginComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes)
    
  ],
  providers: [
   
    
  ],
  bootstrap: [ProfileComponent]
})
export class UserModule { }



