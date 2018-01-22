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
      'name': 'Dependent Care FSA',
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
    },
    {
      'name': 'Health Care FSA',
      'series': [
        {
          'name': 'Reimbursed',
          'value': 150
        },
        {
          'name': 'Pending',
          'value': 50
        },
        {
          'name': 'Denied',
          'value': 0
        },
        {
          'name': 'Available',
          'value': 1300
        }
      ]
    },
    {
      'name': 'Health Savings Account',
      'series': [
        {
          'name': 'Reimbursed',
          'value': 0
        },
        {
          'name': 'Pending',
          'value': 0
        },
        {
          'name': 'Denied',
          'value': 0
        },
        {
          'name': 'Available',
          'value': 800
        }
      ]
    }
  ];
  accountsOverview = [
    {
      'name': 'Accounts',
      'value': 3
    },
    {
      'name': 'Claims',
      'value': 10
    },
    {
      'name': 'Alerts',
      'value': 2
    }
  ];
  annualSummaries = [
    {
      'name': 'Health Savings Account',
      'series': [
        {
          'name': '2010',
          'value': 500
        },
        {
          'name': '2011',
          'value': 700
        },
        {
          'name': '2012',
          'value': 300
        },
        {
          'name': '2013',
          'value': 1800
        },
        {
          'name': '2014',
          'value': 100
        },
        {
          'name': '2015',
          'value': 700
        },
        {
          'name': '2016',
          'value': 800
        },
        {
          'name': '2017',
          'value': 800
        }
      ]
    },
    {
      'name': 'Dependent Care FSA',
      'series': [
        {
          'name': '2010',
          'value': 5000
        },
        {
          'name': '2011',
          'value': 5000
        },
        {
          'name': '2012',
          'value': 5000
        },
        {
          'name': '2013',
          'value': 5000
        },
        {
          'name': '2014',
          'value': 5000
        },
        {
          'name': '2015',
          'value': 5000
        },
        {
          'name': '2016',
          'value': 5000
        },
        {
          'name': '2017',
          'value': 5000
        }
      ]
    },
    {
      'name': 'Health Care FSA',
      'series': [
        {
          'name': '2015',
          'value': 1200
        },
        {
          'name': '2016',
          'value': 1200
        },
        {
          'name': '2017',
          'value': 1450
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  formatCurrency(label: string) {
    return new CurrencyPipe('en-US').transform(label, 'USD', 'symbol', '1.0-0');
  }
}
