import { Component } from '@angular/core'
import { webService} from "./web.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'messages',
  template: `
    <div *ngFor="let message of webService.messages | async">
    <mat-card class="card">
      <mat-card-title [routerLink]="['/messages', message.owner]" style="cursor: pointer">{{message.owner}}</mat-card-title>
      <mat-card-content>{{message.text}}</mat-card-content>
    </mat-card>
  </div>
  `
})

export class MessagesComponent {

  constructor(
    private webService: webService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const name = this.route.snapshot.params.name;
    this.webService.getMessages(name);
  }
}
