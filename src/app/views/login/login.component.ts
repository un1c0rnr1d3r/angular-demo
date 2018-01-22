import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { AuthService } from '../../services/auth.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup;
  loginFailed = false;
  private formControls = {
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  };
  private unsubscribe = new Subject<void>();

  constructor(private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group(this.formControls);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  login() {
    this.authService.login(this.formControls.username.value, this.formControls.password.value)
      .takeUntil(this.unsubscribe)
      .subscribe(user => {
        if (user) {
          this.authService.redirectFromLogin();
        } else {
          this.loginFailed = true;
        }
      });
  }
}
