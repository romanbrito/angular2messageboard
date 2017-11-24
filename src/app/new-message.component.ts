import {Component} from '@angular/core'
import {webService} from "./web.service";

@Component({
  selector: 'new-message',
  template: `
    <mat-card class="card">
      <mat-card-content>
        <mat-input-container>
          <input matInput placeholder="Name" type="text">
        </mat-input-container>
        <mat-input-container>
          <textarea matInput placeholder="Message" type="text"></textarea>
        </mat-input-container>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button color="primary">POST</button>
      </mat-card-actions>
    </mat-card>
  `
})

export class NewMessageComponent {
  constructor(private webService: webService) {
  }
}
