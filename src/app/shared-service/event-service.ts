import { Injectable } from "@angular/core";
import {Subject} from 'rxjs'
import {IEvent} from '../shared-service/index'

@Injectable()
export class EventService{
    getEvents(){
      let subject=new Subject()
      setTimeout(()=>{
        subject.next(EVENTS);
        subject.complete();
      },10)
        return subject;

    }
    getEvent(id:number){
      return EVENTS.find(event=>event.id===id);
  }
   

}
const  EVENTS:IEvent[]=[
  {
    id:1,
    price:1233, 
    name:'Angular Connect', 
    date: '9/26/2036', 
    time: '10am', 
    location: {
      address: '1 London Rd', 
      city: 'London', 
      country: 'England'},
      imageUrl:'../assets/one.png',
      onlineurl:'https://besheger.com/angualr',
      settion:[
        { 
          id:12,
          name:'Yohannes',
          presenter:'Yohannes Mitike',
          duration:2,
          level:'Level One',
          abstract:`Build features quickly with simple, declarative templates. Extend the template language with your own components and use a wide array of existing components. Get immediate Angular-specific help and feedback with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than trying to make the code work.`,
          voters:['Yohannes']}]
        },
  {id:2,price:1233, name:'ng-nl', date: '4/15/2037', time: '9am', location: {address: '127 DT ', city: 'Amsterdam', country: 'NL'},imageUrl:'../assets/two.png',onlineurl:'',
  settion:[
    { 
      id:12,
      name:'',
      presenter:'',
      duration:12,
      level:'',
      abstract:'',
      voters:['']}]
    },
  {
    id:3,price:1233, name:'ng-conf 2037', date: '4/15/2037', time: '9am', location: {address: 'The Palatial America Hotel', city: 'Salt Lake City', country: 'USA'},imageUrl:'../assets/three.png',onlineurl:'',
    settion:[
    { 
      id:12,
      name:'',
      presenter:'',
      duration:12,
      level:'',
      abstract:'',
      voters:['']}]
    },
  {id:4,price:1233, name:'UN Angular Summit', date: '6/10/2037', time: '8am', location: {address: 'The UN Angular Center', city: 'New York', country: 'USA'},imageUrl:'../assets/four.png',onlineurl:'',
  settion:[
    { 
      id:12,
      name:'',
      presenter:'',
      duration:12,
      level:'',
      abstract:'',
      voters:['']}]
    },
  
]  