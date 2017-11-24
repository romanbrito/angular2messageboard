import { Http } from '@angular/http';
import { Injectable} from "@angular/core";

@Injectable()
export class webService {
  BASE_URL = 'http://localhost:3000/api/';

  constructor(private http: Http) {}

  getMessages() {
    return this.http.get(this.BASE_URL + '/messages').toPromise();
  }

  postMessage(message) {
    return this.http.post(this.BASE_URL + '/messages', message).toPromise();
  }
}
