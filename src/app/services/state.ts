import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../models/user';
import { Account } from '../models/account';

@Injectable()
export class State {
  constructor() {
    const userAsString = sessionStorage.getItem('user');
    if (userAsString) {
      const user = JSON.parse(userAsString);
      this.authentication.setUser(user);
    }
  }

  accounts = new AccountsState();
  authentication = new AuthenticationState();
}

class AccountsState {
  all = new BehaviorSubject<Array<Account>>(new Array<Account>());

  setAccounts(accounts: Array<Account>) {
    this.all.next(accounts);
  }
}

class AuthenticationState {
  user = new BehaviorSubject<User>(null);

  isLoggedIn() {
    return this.user.map(user => !!user);
  }

  setUser(user: User) {
    this.user.next(user);
    if (user) {
      sessionStorage.setItem('user', JSON.stringify(user));
    } else {
      sessionStorage.removeItem('user');
    }
  }
}
