import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
@Component({
    templateUrl:'./login.component.html',
    styles:[`
    em{
        float:right;
        color:#E05C65;
        padding-left:10px;
    }
    `]
})
export class LoginComponent{
    userName:string=''
    passWord:string=''
    mouseoverLogin:boolean
    constructor(private authService:AuthService,private router:Router){
        this.mouseoverLogin=false
    }

    login(data:any){
        //console.log(this.userName)
        this.authService.loginUser(data.userName,data.passWord)
        this.router.navigate(['events'])
    }
    cancel(){
        this.router.navigate(['events'])
    }
    


}