import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loginFailed = false;
  private formControls = {
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  };

  constructor(private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group(this.formControls);
  }

  login() {
    this.authService.login(this.formControls.username.value, this.formControls.password.value)
      .subscribe(isLoggedIn => {
        if (isLoggedIn) {
          this.authService.redirectFromLogin();
        } else {
          this.loginFailed = true;
        }
      });
  }
}
