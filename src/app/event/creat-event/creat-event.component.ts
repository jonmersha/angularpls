import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './creat-event.component.html',
  styleUrls: ['./creat-event.component.css']
})
export class CreatEventComponent implements OnInit {
  isDirty:boolean=true
  newEvent:any
  constructor(private router:Router) {

   }

  ngOnInit(): void {
    
  }
  cancel(){ 
    this.router.navigate(['/events'])
  }
  saveEvent(formValues:any){
    console.log(formValues)
  }

}
