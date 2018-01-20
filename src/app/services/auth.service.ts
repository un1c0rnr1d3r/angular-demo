import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {
  private loginRequest = Observable.of(false);
  private redirectAfterLoginUrl = '/';

  constructor(private router: Router) { }

  isLoggedIn(): Observable<boolean> {
    return this.loginRequest;
  }

  login(username: string, password: string): Observable<boolean> {
    this.loginRequest = Observable.of(true);
    return this.loginRequest.delay(2000);
  }

  redirectFromLogin() {
    this.router.navigate([this.redirectAfterLoginUrl]);
  }

  redirectToLogin(redirectAfterLoginUrl: string = '/') {
    this.redirectAfterLoginUrl = redirectAfterLoginUrl;
    this.router.navigate(['/login']);
  }
}
