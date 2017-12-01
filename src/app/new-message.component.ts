import { Component } from '@angular/core'
import { webService } from "./web.service";
import {AuthService} from "./auth.service";

@Component({
  selector: 'new-message',
  template: `
    <mat-card class="card">
      <mat-card-content>
        <mat-input-container>
          <textarea [(ngModel)]="message.text" matInput placeholder="Message" type="text"></textarea>
        </mat-input-container>
      </mat-card-content>
      <mat-card-actions>
        <button (click)="post()" mat-button color="primary">POST</button>
      </mat-card-actions>
    </mat-card>
  `
})

export class NewMessageComponent {

  constructor(private webService: webService, private auth: AuthService) {}

  message = {
    owner: this.auth.name,
    text: ""
  };

  post() {
    this.webService.postMessage(this.message);
  }
}
