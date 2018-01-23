import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { AuthService } from '../../services/auth.service';
import { State } from '../../services/state';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup;
  loginFailed = false;
  formControls = {
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  };
  private unsubscribe = new Subject<void>();

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private state: State) { }

  ngOnInit() {
    this.form = this.formBuilder.group(this.formControls);
    this.state.authentication.isLoggedIn()
      .takeUntil(this.unsubscribe)
      .first(isLoggedIn => isLoggedIn)
      .subscribe(() => {
        this.authService.redirectFromLogin();
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  login() {
    this.authService.login(this.formControls.username.value, this.formControls.password.value);
  }
}
