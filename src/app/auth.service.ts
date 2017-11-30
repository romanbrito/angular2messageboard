import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import {register} from "ts-node/dist";

@Injectable()
export class AuthService {

  //BASE_URL = 'http://localhost:3000/auth';
  BASE_URL = 'http://localhost:3000/api';
  NAME_KEY = 'name';
  TOKEN_KEY = 'token';

  constructor(private http: Http) {}

  get name() {
    return localStorage.getItem(this.NAME_KEY);
  }

  register(user) {
    delete user.confirmPassword;
    this.http.post(this.BASE_URL + '/register', user).subscribe(
      res => {
        localStorage.setItem(this.TOKEN_KEY, res.json().token);
        localStorage.setItem(this.NAME_KEY, res.json().firstName);
      }
    );
  }
}
