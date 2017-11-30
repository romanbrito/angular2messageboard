import { Component } from "@angular/core";
import { AuthService} from "./auth.service";

@Component({
  selector: 'login',
  template: `
    
  `
})
export class LoginComponent {
  constructor(private auth: AuthService) {}
}
