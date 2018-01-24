import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { State } from './state';
import { SingleSeriesChart } from '../models/single-series-chart';
import { MultipleSeriesChart } from '../models/multiple-series-chart';
import { ClaimStatus } from '../models/claim-status';
import { PaymentStatus } from '../models/payment-status';


@Injectable()
export class ChartService {
  constructor(private state: State) { }

  getAccountsOverview(): Observable<SingleSeriesChart> {
    return this.state.accounts.all
      .switchMap(accounts => this.state.accounts.claims, (accounts, claims) => ({ accounts, claims }))
      .map(accountsWithClaims => {
        return new Array(
          { name: 'Accounts', value: accountsWithClaims.accounts.length },
          { name: 'Claims', value: accountsWithClaims.claims.length },
          { name: 'Alerts', value: 2 } // TODO: get actual alerts count
        );
      });
  }

  getAnnualSummaries(): Observable<MultipleSeriesChart> {
    return this.state.accounts.claimsByAccountByYear
      .map(annualClaims => {
        return annualClaims.map(claimYear => {
          return {
            name: claimYear.account.name || claimYear.account.type,
            series: claimYear.claimsByYear.map(claimsByYear => {
              return {
                name: claimsByYear.year.toString(),
                value: claimsByYear.claims.map(claim => claim.amount).reduce((previous, current) => previous + current, 0)
              };
            })
          };
        });
      });
  }

  getClaims(): Observable<SingleSeriesChart> {
    return this.state.accounts.claims
      .mergeMap(claims => Observable.from(claims)
        .groupBy(claim => claim.status)
        .mergeMap(group => group.toArray(), (group, groupedClaims) => ({ status: group.key, count: groupedClaims.length }))
        .toArray()
      )
      .map(claimsByStatus => claimsByStatus.sort(this.sortByClaimStatus))
      .map(claimsByStatus => claimsByStatus.map(x => ({ name: x.status.name, value: x.count })));
  }

  getReimbursements(): Observable<MultipleSeriesChart> {
    return this.state.accounts.paymentsByAccount
      .mergeMap(paymentsByAccount => {
        return Observable.from(paymentsByAccount)
          .mergeMap(accountPayments => {
            return Observable.from(accountPayments.payments)
              .groupBy(payment => payment.status)
              .mergeMap(group => group.toArray(), (group, groupedClaims) => (
                {
                  status: group.key,
                  total: groupedClaims.map(payment => payment.amount).reduce((previous, current) => previous + current, 0)
                }
              ))
              .toArray()
              .map(paymentTotalsByStatus => {
                return paymentTotalsByStatus.sort(this.sortByPaymentStatus);
              })
              .map(paymentTotalsByStatus => ({ account: accountPayments.account, paymentTotalsByStatus }));
          })
          .toArray();
      })
      .map(accountPaymentotals => {
        return accountPaymentotals.map(x => (
          {
            name: x.account.name || x.account.type,
            series: x.paymentTotalsByStatus.map(y => (
              {
                name: <string>y.status.name,
                value: y.total
              }
            )).concat([
              {
                name: 'Available',
                value: x.account.balance
              }
            ])
          }
        ));
      });
  }

  private sortByClaimStatus(a: { status: ClaimStatus }, b: { status: ClaimStatus }): number {
    return a.status.value - b.status.value;
  }

  private sortByPaymentStatus(a: { status: PaymentStatus }, b: { status: PaymentStatus }): number {
    return a.status.value - b.status.value;
  }
}
