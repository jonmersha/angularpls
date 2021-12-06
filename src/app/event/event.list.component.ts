import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit} from '@angular/core';
import { NotificationService } from '../common/toaster-service';
import { EventService } from '../shared-service/event-service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-event',
  template: `
  <div><h1>Events</h1>
  <hr/>
  <div *ngFor='let event of events' class='col-md-5'>
    <event (click)='handleEventClicked(event.id)' [event]='event'></event>

  </div>
</div>`

})
export class EventListComponent implements OnInit {
  events:any=[]
   
  handleEventClicked(evenetName: any){
    this.notificationService.info(evenetName,"Infomation")
  }
  constructor(private eventSerice:EventService,
    private notificationService:NotificationService,private route:ActivatedRoute) {
   }
   ngOnInit(){
     this.events=this.route.snapshot.data['events']
    //this.eventSerice.getEvents().subscribe(event=>{this.events=event});
   }

  

}
