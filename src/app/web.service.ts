import {Http} from '@angular/http';
import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Rx";
import {MatSnackBar} from "@angular/material";
import {AuthService} from "./auth.service";

@Injectable()
export class webService {
  BASE_URL = 'http://localhost:3000/api';

  private messageStore = [];

  private messageSubject = new Subject();

  messages = this.messageSubject.asObservable();

  constructor(private http: Http, private sb: MatSnackBar, private auth: AuthService) {
    //this.getMessages();
  }

  getMessages(user) {
    user = (user) ? '/' + user : '';
    this.http.get(this.BASE_URL + '/messages' + user).subscribe(response => {
      this.messageStore = response.json();
      this.messageSubject.next(this.messageStore);
    }, error => {
      this.handleError('Unable to get messages');
    });
  }

  postMessage(message) {
    this.http.post(this.BASE_URL + '/messages', message).subscribe(response => {
      this.messageStore.push(response.json());
      this.messageSubject.next(this.messageStore);
    }, error => {
      this.handleError('Unable to post message');
    });
  }

  getUser() {
    return this.http.get(this.BASE_URL + '/users/me', this.auth.tokenHeader).map(res => res.json());

  }

  saveUser(userData) {
    return this.http.post(this.BASE_URL + '/users/me', userData, this.auth.tokenHeader).map(res => res.json());

  }

  private handleError(error) {
    console.error(error);
    this.sb.open(error, 'close', {duration: 2000});
  }
}
