import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  claims = [
    {
      'name': 'Pending',
      'value': 2
    },
    {
      'name': 'Reviewing',
      'value': 1
    },
    {
      'name': 'Accepted',
      'value': 6
    },
    {
      'name': 'Rejected',
      'value': 1
    }
  ];
  reimbursements = [
    {
      'name': 'USD',
      'series': [
        {
          'name': 'Reimbursed',
          'value': 1300
        },
        {
          'name': 'Pending',
          'value': 300
        },
        {
          'name': 'Denied',
          'value': 300
        },
        {
          'name': 'Available',
          'value': 600
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  formatCurrency(label: string) {
    return new CurrencyPipe('en-US').transform(label);
  }
}
