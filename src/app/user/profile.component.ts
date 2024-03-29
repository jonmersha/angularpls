import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from './auth.service'

@Component({
  templateUrl: './profile.components.html',
  styles:[`
  em{
    float:right;
    color:#E05C65;
    padding-left:10px;
  }
  .error input {background-color:#E3C3C5;}
  .error ::-webkit-input-placeholder {color:#999}
  .arror::-moz-placeholder{color:#999}
  .error:-moz-placeholder{color:#999}
  .error:ms-input-placeholder{color:#999}
  `]
})
export class ProfileComponent implements OnInit{
  profileForm!: FormGroup
  private firstName!: FormControl
  private lastName!:FormControl
  constructor(private authServcie:AuthService,private router:Router){}
  
  ngOnInit(): void {
    this.firstName=new FormControl(
      this.authServcie.currentUser?.firstName,[Validators.required,Validators.pattern('[a-zA-Z].*')])
    this.profileForm=new FormGroup({
      firstName:this.firstName,
      lastName:this.lastName
    })
  }

  saveProfile(data:any){
    if(this.profileForm.valid){
    this.authServcie.updateCurentUser(data.firstName,data.lastName)
    this.router.navigate(['events'])
    }
    else{
      console.log("Please Input All Required Infamations")
    }
  }

  validateLastName(){
   return this.lastName.valid && this.lastName.untouched
  }
  validateFirstName(){
   return this.firstName.valid && this.firstName.untouched
  }
  
       
}