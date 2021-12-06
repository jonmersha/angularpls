import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { EventService } from "../shared-service/event-service";

@Injectable()
export class EventRouteAcitivator implements CanActivate{
    constructor(private eventService:EventService,private router:Router){

    }
    canActivate(route:ActivatedRouteSnapshot){
     const eventExist=   !!this.eventService.getEvent(+route.params['id'])
     if(!eventExist)
     this.router.navigate(['/404'])
     return eventExist
    
    }

}