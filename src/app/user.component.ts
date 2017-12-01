import { Component } from '@angular/core'
import { webService } from "./web.service";

@Component({
  selector: 'user',
  template: `
    <mat-card class="card">
      <mat-card-content>
        <mat-input-container>
          <input [(ngModel)]="model.firstName" matInput placeholder="First Name" type="text">
        </mat-input-container>
        <mat-input-container>
          <input [(ngModel)]="model.lastName" matInput placeholder="Last Name" type="text">
        </mat-input-container>
      </mat-card-content>
      <mat-card-actions>
        <button (click)="post()" mat-raised-button color="primary">Save Changes</button>
      </mat-card-actions>
    </mat-card>
  `
})

export class UserComponent {

  constructor(private webService: webService) {}

  model = {
    firstName: "",
    lastName: ""
  };

  post() {
    this.webService.saveUser(this.model);
  }
}
