import { Component, Input ,EventEmitter, Output} from "@angular/core";


@Component({
    selector:'event',
    template:`
    <div [routerLink]="['/events',event.id]" class='well hoverwell thumbnails'>
    <div><img class='event-image' [src]="event?.imageUrl" [alt]="event?.name"> 
  </div>
    <div><h2> {{event.name}} </h2></div>
    <div>Date: {{event.date}}</div>
    <div>Time: {{event.time}}</div>
    <div>Location: {{event.location.address}}, {{event.location.city}}, {{event.location.country}}</div>
    `,
    styles:[`
    .pad-left{margin-left:100px}
    .container {padding-left:20px; padding-right:20px;}
    .event-image {height:50px}`]
})
export class Evenetthimbnails{
    @Input() event:any
    @Output() eventClick=new EventEmitter()

    someVal:any="Some Values via viaranle from chiled"
    handleclickMe(){
        //this.eventClick.emit(this.event.name)
        
        //alert('Toaster')
    }

    logMe(data: any){

        //console.log("this event fired using varibale and name"+data.name)
    }

   

}