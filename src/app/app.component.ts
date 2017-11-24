import { Component, ViewChild } from '@angular/core'
import {MessagesComponent} from "./messages.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Message Board';

  @ViewChild(MessagesComponent) messages : MessagesComponent;

  onPosted( message ) {
    this.messages.messages.push(message);
  }
}
