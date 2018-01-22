import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { State } from './state';
import { User } from '../models/user';


@Injectable()
export class AuthService implements OnDestroy {
  private redirectAfterLoginUrl = '/';
  private unsubscribe = new Subject<void>();

  constructor(private router: Router, private state: State) { }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  login(username: string, password: string): Observable<User> {
    const fakeUser = <User>{
      id: '1',
      name: 'Test User',
      email: username,
      failedLoginAttempts: 0
    };
    const result = Observable.of(fakeUser).delay(2000);
    result.takeUntil(this.unsubscribe)
      .subscribe(user => {
        this.state.authentication.setUser(user);
      });
    return result;
  }

  redirectFromLogin() {
    this.router.navigate([this.redirectAfterLoginUrl]);
  }

  redirectToLogin(redirectAfterLoginUrl: string = '/') {
    this.redirectAfterLoginUrl = redirectAfterLoginUrl;
    this.router.navigate(['/login']);
  }
}
