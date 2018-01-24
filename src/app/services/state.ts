import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../models/user';
import { Account } from '../models/account';
import { DateService } from './date.service';
import { Claim } from '../models/claim';

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
  private dateService = new DateService();
  private _all = new BehaviorSubject<Array<Account>>(new Array<Account>());

  all = this._all.map(accounts => accounts.sort(this.sortAccountsByName));
  claims = this.all.map(accounts => accounts.map(account => account.claims)
    .reduce((previous, current) => previous.concat(current), new Array<Claim>()))
    .map(claims => claims.sort(this.sortClaimsByDate.bind(this)));
  payments = this.claims.map(claims => claims.map(claim => claim.payment));
  paymentsByAccount = this.all.map(accounts => accounts.map(account => {
    return { account, payments: account.claims.map(claim => claim.payment) };
  }));
  claimsByAccountByYear = this.all.mergeMap(accounts =>
    Observable.from(accounts)
      .mergeMap(account =>
        Observable.from(account.claims)
          .groupBy(claim => this.dateService.parse(claim.filingDate).getFullYear())
          .mergeMap(group => group.toArray(), (group, claims) => (
            {
              year: group.key,
              claims: claims.sort(this.sortClaimsByDate.bind(this))
            }))
          .toArray()
          .map(claimsByYear => claimsByYear.sort(
            (a, b) => this.sortClaimsByDate(a.claims[0], b.claims[0]))
          ), (account, claimsByYear) => ({ account, claimsByYear })
      )
      .toArray()
      .map(claimsByAccountByYear => {
        return claimsByAccountByYear.sort((a, b) => this.sortClaimsByDate(a.claimsByYear[0].claims[0], b.claimsByYear[0].claims[0]));
      })
  );

  setAccounts(accounts: Array<Account>) {
    this._all.next(accounts);
  }

  private sortAccountsByName(account1: Account, account2: Account): number {
    const account1Name = account1.name || account1.type;
    const account2Name = account2.name || account2.type;
    return account1Name.localeCompare(account2Name);
  }

  private sortClaimsByDate(claim1: Claim, claim2: Claim): number {
    const claim1Date = this.dateService.parse(claim1.filingDate);
    const claim2Date = this.dateService.parse(claim2.filingDate);
    return claim1Date.getTime() - claim2Date.getTime();
  }
}

class AuthenticationState {
  private _user = new BehaviorSubject<User>(null);
  user = this._user.asObservable();

  isLoggedIn() {
    return this.user.map(user => !!user);
  }

  setUser(user: User) {
    this._user.next(user);
    if (user) {
      sessionStorage.setItem('user', JSON.stringify(user));
    } else {
      sessionStorage.removeItem('user');
    }
  }
}
