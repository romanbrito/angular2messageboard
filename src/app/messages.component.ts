import { Component } from '@angular/core'

@Component({
  selector: 'messages',
  template: `
    <div *ngFor="let message of messages">
    {{message.text}} by {{message.owner}}
  </div>
    <button mat-button>test</button>
  `
})

export class MessagesComponent {
  messages = [{text: 'some text', owner: 'Tim'},{text: 'other message', owner: 'Jane'}];
}
