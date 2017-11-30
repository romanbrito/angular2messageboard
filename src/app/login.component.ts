import { Component } from "@angular/core";
import { AuthService} from "./auth.service";

@Component({
  selector: 'login',
  template: `
    <mat-card>
      <mat-input-container>
        <input matInput type="email" placeholder="Email">
      </mat-input-container>
      <mat-input-container>
        <input matInput type="password" placeholder="Password">
      </mat-input-container>
      <button mat-raised-button color="primary">Login</button>
    </mat-card>
  `
})
export class LoginComponent {
  constructor(private auth: AuthService) {}
}
