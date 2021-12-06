import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';

import {
  Evenetthimbnails,
  EventDetailComponent,
  EventRouteAcitivator,
  CreatEventComponent,
  EventListComponent,
  EventService,
  EventListResolver

} from './event/index'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationService } from './common/toaster-service';
import { HeaderComponent } from './header/header.component';
import { appRoutes } from './routes';
import {Error404Component} from './error/404.componen'



@NgModule({

  declarations: [
    AppComponent,
    EventListComponent,
    Evenetthimbnails,
    HeaderComponent,
    EventDetailComponent,
    Error404Component,
    CreatEventComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
     RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    NotificationService,
    EventRouteAcitivator,
    EventListResolver,
    {provide:'canDeactivateEvent',
    useValue:checkDirtyState}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function checkDirtyState(component:CreatEventComponent){
  if(component.isDirty)
  return window.confirm('You have not Saved Event, Do you relly want to cancel?')
  return true 
}
