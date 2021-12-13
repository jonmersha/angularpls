import { Routes } from "@angular/router";
import { LoginComponent } from "./user/login/login.component";
import { ProfileComponent } from "./user/profile.component";

export const userRoutes:Routes=[
    {path:'profile',component:ProfileComponent},
    {path:'login',component:LoginComponent},
    {path:'logOut',component:LoginComponent}
]