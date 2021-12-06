import { Routes } from "@angular/router";
import { Error404Component } from "./error/404.componen";
import { EventDetailComponent } from "./event-detail/event-detail.component";
import { EventRouteAcitivator } from "./event-detail/event.route.activator.service";
import { CreatEventComponent } from "./event/creat-event/creat-event.component";
import { EventListComponent } from "./event/event.list.component";
import { EventListResolver } from "./shared-service/event-list-resolver.service";
//import { UserMpdule } from "./user/user.module";
export const appRoutes:Routes=[
    {path:'events/new',component:CreatEventComponent,canDeactivate:['canDeactivateEvent']},
    {path:'404',component:Error404Component},
    {path:'events',component:EventListComponent,resolve:{events:EventListResolver}},
     {path:'events/:id',component:EventDetailComponent,canActivate:[EventRouteAcitivator]},
    {path:'',redirectTo:'/events', pathMatch:'full'},
    {path:'user',
    loadChildren:()=> import('./user/user.module')
    .then(m => m.UserModule)}

]

 