import {Component} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  //moduleId: module.id,
  selector: 'register',
  templateUrl: 'register.component.html',
  styles: [`
    .error {
      background-color: #fff0f0;
    }
  `]
})
export class RegisterComponent {
  form;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      firstName: ['', Validators.required],
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
  }

  onSubmit() {
    console.log(this.form.valid);
  }
}
