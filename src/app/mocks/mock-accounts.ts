import { Account } from '../models/account';
import { Claim } from '../models/claim';
import { ServiceProvider } from '../models/service-provider';
import { ClaimStatuses } from '../models/claim-status';
import { PaymentStatuses } from '../models/payment-status';

const lastModifiedDate = '2018-01-23T07:47:23.843-06:00';
const idMap = new Map<string, number>();
const generateId = (prefix: string) => {
  const suffix = idMap.get(prefix) || 1;
  idMap.set(prefix, suffix + 1);
  return `${prefix}-${suffix}`;
};
export const MockProviders = new Array<ServiceProvider>(
  {
    id: generateId('provider'),
    name: 'ABC 123 Child Enrichment Center',
    type: 'Dependent Care',
    address: '1710 Center Avenue West, #130, Dilworth, MN 56529',
    phoneNumber: '(218) 303-1993',
    email: 'ABC123CenterInfo@gmail.com',
    verified: true,
    lastModifiedDate: lastModifiedDate
  },
  {
    id: generateId('provider'),
    name: 'DP\'s Bargain Basement',
    type: 'Dependent Care',
    address: '17900 SW 112th Ave, Tualatin, OR 97062',
    phoneNumber: '(503) 855-5971',
    email: 'txjenterprises@gmail.com',
    verified: false,
    lastModifiedDate: lastModifiedDate
  },
  {
    id: generateId('provider'),
    name: 'Super Kids Academy Daycare Center',
    type: 'Dependent Care',
    address: '715 N Tower Rd, Alamo, TX 78516',
    phoneNumber: '(956) 783-1600',
    verified: true,
    lastModifiedDate: lastModifiedDate
  },
  {
    id: generateId('provider'),
    name: 'HealthPartners Clinic Woodbury',
    type: 'Health Care',
    address: '8450 Seasons Pkwy, Woodbury, MN 55125',
    phoneNumber: '(651) 702-5300',
    verified: true,
    lastModifiedDate: lastModifiedDate
  }
);
export const MockAccounts = new Array<Account>(
  {
    id: generateId('account'),
    type: 'Dependent Care FSA',
    balance: 600,
    claims: new Array<Claim>(
      {
        id: generateId('claim'),
        status: ClaimStatuses.Accepted,
        amount: 150,
        provider: MockProviders[0],
        receipt: {
          id: generateId('receipt'),
          url: '',
          type: 'Document'
        },
        payment: {
          id: generateId('payment'),
          amount: 150,
          status: PaymentStatuses.Reimbursed,
          lastModifiedDate: lastModifiedDate
        },
        filingDate: '2017-01-23T12:06:58-06:00',
        lastModifiedDate: lastModifiedDate
      },
      {
        id: generateId('claim'),
        status: ClaimStatuses.Accepted,
        amount: 150,
        provider: MockProviders[0],
        receipt: {
          id: generateId('receipt'),
          url: '',
          type: 'Document'
        },
        payment: {
          id: generateId('payment'),
          amount: 150,
          status: PaymentStatuses.Reimbursed,
          lastModifiedDate: lastModifiedDate
        },
        filingDate: '2017-02-23T12:06:58-06:00',
        lastModifiedDate: lastModifiedDate
      },
      {
        id: generateId('claim'),
        status: ClaimStatuses.Accepted,
        amount: 150,
        provider: MockProviders[0],
        receipt: {
          id: generateId('receipt'),
          url: '',
          type: 'Document'
        },
        payment: {
          id: generateId('payment'),
          amount: 150,
          status: PaymentStatuses.Reimbursed,
          lastModifiedDate: lastModifiedDate
        },
        filingDate: '2017-03-23T12:06:58-06:00',
        lastModifiedDate: lastModifiedDate
      },
      {
        id: generateId('claim'),
        status: ClaimStatuses.Rejected,
        amount: 437,
        provider: MockProviders[1],
        receipt: {
          id: generateId('receipt'),
          url: '',
          type: 'Document'
        },
        payment: {
          id: generateId('payment'),
          amount: 437,
          status: PaymentStatuses.Denied,
          lastModifiedDate: lastModifiedDate
        },
        filingDate: '2017-03-27T12:06:58-06:00',
        lastModifiedDate: lastModifiedDate
      },
      {
        id: generateId('claim'),
        status: ClaimStatuses.Accepted,
        amount: 175,
        provider: MockProviders[2],
        receipt: {
          id: generateId('receipt'),
          url: '',
          type: 'Image'
        },
        payment: {
          id: generateId('payment'),
          amount: 175,
          status: PaymentStatuses.Reimbursed,
          lastModifiedDate: lastModifiedDate
        },
        filingDate: '2017-04-23T12:06:58-06:00',
        lastModifiedDate: lastModifiedDate
      },
      {
        id: generateId('claim'),
        status: ClaimStatuses.Accepted,
        amount: 175,
        provider: MockProviders[2],
        receipt: {
          id: generateId('receipt'),
          url: '',
          type: 'Image'
        },
        payment: {
          id: generateId('payment'),
          amount: 175,
          status: PaymentStatuses.Reimbursed,
          lastModifiedDate: lastModifiedDate
        },
        filingDate: '2017-05-23T12:06:58-06:00',
        lastModifiedDate: lastModifiedDate
      },
      {
        id: generateId('claim'),
        status: ClaimStatuses.Accepted,
        amount: 175,
        provider: MockProviders[2],
        receipt: {
          id: generateId('receipt'),
          url: '',
          type: 'Image'
        },
        payment: {
          id: generateId('payment'),
          amount: 175,
          status: PaymentStatuses.Reimbursed,
          lastModifiedDate: lastModifiedDate
        },
        filingDate: '2017-06-23T12:06:58-06:00',
        lastModifiedDate: lastModifiedDate
      },
      {
        id: generateId('claim'),
        status: ClaimStatuses.Accepted,
        amount: 175,
        provider: MockProviders[2],
        receipt: {
          id: generateId('receipt'),
          url: '',
          type: 'Image'
        },
        payment: {
          id: generateId('payment'),
          amount: 175,
          status: PaymentStatuses.Reimbursed,
          lastModifiedDate: lastModifiedDate
        },
        filingDate: '2017-07-23T12:06:58-06:00',
        lastModifiedDate: lastModifiedDate
      },
      {
        id: generateId('claim'),
        status: ClaimStatuses.Accepted,
        amount: 175,
        provider: MockProviders[2],
        receipt: {
          id: generateId('receipt'),
          url: '',
          type: 'Image'
        },
        payment: {
          id: generateId('payment'),
          amount: 175,
          status: PaymentStatuses.Reimbursed,
          lastModifiedDate: lastModifiedDate
        },
        filingDate: '2017-08-23T12:06:58-06:00',
        lastModifiedDate: lastModifiedDate
      },
      {
        id: generateId('claim'),
        status: ClaimStatuses.Accepted,
        amount: 175,
        provider: MockProviders[2],
        receipt: {
          id: generateId('receipt'),
          url: '',
          type: 'Image'
        },
        payment: {
          id: generateId('payment'),
          amount: 175,
          status: PaymentStatuses.Reimbursed,
          lastModifiedDate: lastModifiedDate
        },
        filingDate: '2017-09-23T12:06:58-06:00',
        lastModifiedDate: lastModifiedDate
      },
      {
        id: generateId('claim'),
        status: ClaimStatuses.Reviewing,
        amount: 175,
        provider: MockProviders[2],
        receipt: {
          id: generateId('receipt'),
          url: '',
          type: 'Image'
        },
        payment: {
          id: generateId('payment'),
          amount: 175,
          status: PaymentStatuses.Pending,
          lastModifiedDate: lastModifiedDate
        },
        filingDate: '2017-10-23T12:06:58-06:00',
        lastModifiedDate: lastModifiedDate
      },
      {
        id: generateId('claim'),
        status: ClaimStatuses.Reviewing,
        amount: 175,
        provider: MockProviders[2],
        receipt: {
          id: generateId('receipt'),
          url: '',
          type: 'Image'
        },
        payment: {
          id: generateId('payment'),
          amount: 175,
          status: PaymentStatuses.Pending,
          lastModifiedDate: lastModifiedDate
        },
        filingDate: '2017-11-23T12:06:58-06:00',
        lastModifiedDate: lastModifiedDate
      },
      {
        id: generateId('claim'),
        status: ClaimStatuses.Pending,
        amount: 175,
        provider: MockProviders[2],
        receipt: {
          id: generateId('receipt'),
          url: '',
          type: 'Image'
        },
        payment: {
          id: generateId('payment'),
          amount: 175,
          status: PaymentStatuses.Pending,
          lastModifiedDate: lastModifiedDate
        },
        filingDate: '2017-12-23T12:06:58-06:00',
        lastModifiedDate: lastModifiedDate
      }
    ),
    lastModifiedDate: lastModifiedDate
  },
  {
    id: generateId('account'),
    type: 'Health Care FSA',
    balance: 1300,
    claims: new Array<Claim>(
      {
        id: generateId('claim'),
        status: ClaimStatuses.Rejected,
        amount: 352,
        provider: MockProviders[3],
        receipt: {
          id: generateId('receipt'),
          url: '',
          type: 'Document'
        },
        payment: {
          id: generateId('payment'),
          amount: 352,
          status: PaymentStatuses.Denied,
          lastModifiedDate: lastModifiedDate
        },
        filingDate: '2016-12-15T12:06:58-06:00',
        lastModifiedDate: lastModifiedDate
      },
      {
        id: generateId('claim'),
        status: ClaimStatuses.Accepted,
        amount: 30,
        provider: MockProviders[3],
        receipt: {
          id: generateId('receipt'),
          url: '',
          type: 'Document'
        },
        payment: {
          id: generateId('payment'),
          amount: 30,
          status: PaymentStatuses.Reimbursed,
          lastModifiedDate: lastModifiedDate
        },
        filingDate: '2017-03-15T12:06:58-06:00',
        lastModifiedDate: lastModifiedDate
      },
      {
        id: generateId('claim'),
        status: ClaimStatuses.Accepted,
        amount: 100,
        provider: MockProviders[3],
        receipt: {
          id: generateId('receipt'),
          url: '',
          type: 'Image'
        },
        payment: {
          id: generateId('payment'),
          amount: 100,
          status: PaymentStatuses.Reimbursed,
          lastModifiedDate: lastModifiedDate
        },
        filingDate: '2017-07-01T12:06:58-06:00',
        lastModifiedDate: lastModifiedDate
      },
      {
        id: generateId('claim'),
        status: ClaimStatuses.Reviewing,
        amount: 368,
        provider: MockProviders[3],
        receipt: {
          id: generateId('receipt'),
          url: '',
          type: 'Image'
        },
        payment: {
          id: generateId('payment'),
          amount: 368,
          status: PaymentStatuses.Pending,
          lastModifiedDate: lastModifiedDate
        },
        filingDate: '2017-10-29T12:06:58-06:00',
        lastModifiedDate: lastModifiedDate
      },
      {
        id: generateId('claim'),
        status: ClaimStatuses.Pending,
        amount: 45,
        provider: MockProviders[3],
        receipt: {
          id: generateId('receipt'),
          url: '',
          type: 'Image'
        },
        payment: {
          id: generateId('payment'),
          amount: 45,
          status: PaymentStatuses.Pending,
          lastModifiedDate: lastModifiedDate
        },
        filingDate: '2017-12-25T12:06:58-06:00',
        lastModifiedDate: lastModifiedDate
      }
    ),
    lastModifiedDate: lastModifiedDate
  },
  {
    id: generateId('account'),
    type: 'Health Savings Account',
    balance: 800,
    claims: new Array<Claim>(
      {
        id: generateId('claim'),
        status: ClaimStatuses.Accepted,
        amount: 195,
        provider: MockProviders[3],
        receipt: {
          id: generateId('receipt'),
          url: '',
          type: 'Document'
        },
        payment: {
          id: generateId('payment'),
          amount: 195,
          status: PaymentStatuses.Reimbursed,
          lastModifiedDate: lastModifiedDate
        },
        filingDate: '2016-02-24T12:06:58-06:00',
        lastModifiedDate: lastModifiedDate
      },
      {
        id: generateId('claim'),
        status: ClaimStatuses.Accepted,
        amount: 433,
        provider: MockProviders[3],
        receipt: {
          id: generateId('receipt'),
          url: '',
          type: 'Image'
        },
        payment: {
          id: generateId('payment'),
          amount: 433,
          status: PaymentStatuses.Reimbursed,
          lastModifiedDate: lastModifiedDate
        },
        filingDate: '2016-10-30T12:06:58-06:00',
        lastModifiedDate: lastModifiedDate
      },
      {
        id: generateId('claim'),
        status: ClaimStatuses.Accepted,
        amount: 112,
        provider: MockProviders[3],
        receipt: {
          id: generateId('receipt'),
          url: '',
          type: 'Image'
        },
        payment: {
          id: generateId('payment'),
          amount: 112,
          status: PaymentStatuses.Reimbursed,
          lastModifiedDate: lastModifiedDate
        },
        filingDate: '2016-11-02T12:06:58-06:00',
        lastModifiedDate: lastModifiedDate
      }
    ),
    lastModifiedDate: lastModifiedDate
  }
);
