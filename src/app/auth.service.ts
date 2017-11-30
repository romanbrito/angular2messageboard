import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import {register} from "ts-node/dist";

@Injectable()
export class AuthService {

  //BASE_URL = 'http://localhost:3000/auth';
  BASE_URL = 'http://localhost:3000/api';

  constructor(private http: Http) {}

  register(user) {
    delete user.confirmPassword;
    this.http.post(this.BASE_URL + '/register', user).subscribe(
      res => {
        localStorage.setItem('token', res.json());
      }
    );
  }
}
