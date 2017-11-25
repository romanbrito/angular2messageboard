import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <div>
      <nav></nav>
      <new-message></new-message>
      <messages></messages>
    </div>
  `
})
export class AppComponent {}
