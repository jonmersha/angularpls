import { Component } from '@angular/core';

@Component({
  selector: 'root-app',
  template: `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'event';
}
