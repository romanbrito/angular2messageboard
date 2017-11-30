import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {

  //BASE_URL = 'http://localhost:3000/auth';
  BASE_URL = 'http://localhost:3000/api';
  NAME_KEY = 'name';
  TOKEN_KEY = 'token';

  constructor(private http: Http, private router: Router) {}

  get name() {
    return localStorage.getItem(this.NAME_KEY);
  }

  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY); // returns true or false
  }

  login(loginData) {
    this.http.post(this.BASE_URL + '/login', loginData).subscribe( res => {

    });

  }

  register(user) {
    delete user.confirmPassword;
    this.http.post(this.BASE_URL + '/register', user).subscribe(
      res => {

        const authResponse = res.json();
        if(!authResponse.token)
          return;

        localStorage.setItem(this.TOKEN_KEY, authResponse.token);
        localStorage.setItem(this.NAME_KEY, authResponse.firstName);
        this.router.navigate(['/']);
      }
    );
  }

  logout() {
    localStorage.removeItem(this.NAME_KEY);
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
