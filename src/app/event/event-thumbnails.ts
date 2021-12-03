import { Component, Input ,EventEmitter, Output} from "@angular/core";


@Component({
    selector:'event',
    template:`
    <div class='well hoverwell thumbnails'>
    <div><h2>{{event.name}}</h2></div>
    <div>Time: {{event.date}}</div>
    <div>Price: $ {{event.price}}</div>
    <div>Location: {{event.location}}</div>
    <button class="btn button-primary" (click)='handleclickMe()'>click me!</button>
    `,
    styles:[`
        .pad-left{margin-left:100px}
    `]
})
export class Evenetthimbnails{
    @Input() event:any
    @Output() eventClick=new EventEmitter()

    someVal:any="Some Values via viaranle from chiled"
    handleclickMe(){
        this.eventClick.emit(this.event.name)
    }

    logMe(data: any){
        console.log("this event fired using varibale and name"+data.name)
    }

   

}