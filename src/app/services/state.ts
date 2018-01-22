import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../models/user';

@Injectable()
export class State {
  constructor() {
    const userAsString = sessionStorage.getItem('user');
    if (userAsString) {
      const user = JSON.parse(userAsString);
      this.authentication.setUser(user);
    }
  }

  authentication = {
    user: new BehaviorSubject<User>(null),
    isLoggedIn: () => this.authentication.user.map(user => !!user),
    setUser: (user: User) => {
      this.authentication.user.next(user);
      if (user) {
        sessionStorage.setItem('user', JSON.stringify(user));
      } else {
        sessionStorage.removeItem('user');
      }
    }
  };
}
