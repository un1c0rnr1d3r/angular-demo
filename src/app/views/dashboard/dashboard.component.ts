import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { State } from '../../services/state';
import { ChartService } from '../../services/chart.service';
import { SingleSeriesChart } from '../../models/single-series-chart';
import { MultipleSeriesChart } from '../../models/multiple-series-chart';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  claims: SingleSeriesChart;
  reimbursements: MultipleSeriesChart;
  accountsOverview: SingleSeriesChart;
  annualSummaries: MultipleSeriesChart;

  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.chartService.getAccountsOverview()
      .subscribe(accountsOverview => this.accountsOverview = accountsOverview);

    this.chartService.getAnnualSummaries()
      .subscribe(annualSummaries => {
        this.annualSummaries = annualSummaries;
      });

    this.chartService.getClaims()
      .subscribe(claims => this.claims = claims);

    this.chartService.getReimbursements()
      .subscribe(reimbursements => this.reimbursements = reimbursements);
  }

  formatCurrency(label: string) {
    return new CurrencyPipe('en-US').transform(label, 'USD', 'symbol', '1.0-0');
  }
}
