import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { userRoutes } from '../user.routes';





@NgModule({

  declarations: [
    ProfileComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
    
  ],
  providers: [
    
  ],
  bootstrap: [ProfileComponent]
})
export class UserModule { }



