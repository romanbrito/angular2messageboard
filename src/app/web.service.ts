import { Http } from '@angular/http';
import { Injectable} from "@angular/core";

@Injectable()
export class webService {

  constructor(private http: Http) {}

  getMessages() {
    return this.http.get('http://localhost:3000/api/messages').toPromise();
  }
}
