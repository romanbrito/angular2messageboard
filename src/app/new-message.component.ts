import { Component, Output, EventEmitter } from '@angular/core'
import { webService } from "./web.service";

@Component({
  selector: 'new-message',
  template: `
    <mat-card class="card">
      <mat-card-content>
        <mat-input-container>
          <input [(ngModel)]="message.owner" matInput placeholder="Name" type="text">
        </mat-input-container>
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

  @Output() onPosted = new EventEmitter();

  constructor(private webService: webService) {}

  message = {
    owner: "",
    text: ""
  };

  post() {
    this.webService.postMessage(this.message);
    this.onPosted.emit(this.message);
  }
}
