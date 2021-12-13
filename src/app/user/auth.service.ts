import { Injectable } from "@angular/core";
import { IUSer } from "./user.model";

@Injectable()
export class AuthService{
   
    sightOut() {
        //throw new Error("Method not implemented.");
        //this.currentUser.firstName=null
    }
    public currentUser!:IUSer;
    loginUser(userName:string,password:string){
        this.currentUser={
            id:1,
            userName:userName,
            firstName:userName,
            lastName:userName
        }
    }
    isAuthonticated(){
        return!!this.currentUser;
    }
    updateCurentUser(fname:string,lastName:string){
        this.currentUser.firstName=fname
        this.currentUser.lastName=lastName 
    }
}