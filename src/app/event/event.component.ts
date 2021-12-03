import { Component} from '@angular/core';

@Component({
  selector: 'app-event',
  template: `<div><h1>Some evenet</h1>
  <hr/>
<event #myEvent (eventClick)='handleEventClicked($event)' [event]='event1'></event>
<h3>{{myEvent.someVal}}</h3>
<button class="btn button-primary" (click)='myEvent.logMe(myEvent.event)'>clic variable!</button>

  
</div>`,
 
})
export class EventComponent {
  event1={
    id:1,
    name:'adroid trainings',
    date:'modat acotober 3 2022',
    price:'222:00',
    location:'Addis Ababa'
  }
  event2={
    id:1,
    name:'Agular IO',
    date:'modat acotober 3 2022',
    price:'222:00',
    location:'SanJose'
  }
  
  handleEventClicked(data: any){
    console.log('event fired',data)
  }

  constructor() { }

  

}
