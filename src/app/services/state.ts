import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class State {
  authentication = {
    isLoggedIn: new BehaviorSubject<boolean>(false)
  };
}
