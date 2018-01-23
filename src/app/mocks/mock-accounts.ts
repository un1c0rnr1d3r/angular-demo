import { Account } from '../models/account';
import { Claim } from '../models/claim';
import { ServiceProvider } from '../models/service-provider';

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
    claims: new Array<Claim>(
      {
        id: generateId('claim'),
        status: 'Accepted',
        amount: 150,
        provider: MockProviders[0],
        receipt: {
          id: generateId('receipt'),
          url: '',
          type: 'Document'
        },
        filingDate: '2017-01-23T12:06:58-06:00',
        lastModifiedDate: lastModifiedDate
      },
      {
        id: generateId('claim'),
        status: 'Accepted',
        amount: 150,
        provider: MockProviders[0],
        receipt: {
          id: generateId('receipt'),
          url: '',
          type: 'Document'
        },
        filingDate: '2017-02-23T12:06:58-06:00',
        lastModifiedDate: lastModifiedDate
      },
      {
        id: generateId('claim'),
        status: 'Accepted',
        amount: 150,
        provider: MockProviders[0],
        receipt: {
          id: generateId('receipt'),
          url: '',
          type: 'Document'
        },
        filingDate: '2017-03-23T12:06:58-06:00',
        lastModifiedDate: lastModifiedDate
      },
      {
        id: generateId('claim'),
        status: 'Rejected',
        amount: 437,
        provider: MockProviders[1],
        receipt: {
          id: generateId('receipt'),
          url: '',
          type: 'Document'
        },
        filingDate: '2017-03-27T12:06:58-06:00',
        lastModifiedDate: lastModifiedDate
      },
      {
        id: generateId('claim'),
        status: 'Accepted',
        amount: 175,
        provider: MockProviders[2],
        receipt: {
          id: generateId('receipt'),
          url: '',
          type: 'Image'
        },
        filingDate: '2017-04-23T12:06:58-06:00',
        lastModifiedDate: lastModifiedDate
      },
      {
        id: generateId('claim'),
        status: 'Accepted',
        amount: 175,
        provider: MockProviders[2],
        receipt: {
          id: generateId('receipt'),
          url: '',
          type: 'Image'
        },
        filingDate: '2017-05-23T12:06:58-06:00',
        lastModifiedDate: lastModifiedDate
      },
      {
        id: generateId('claim'),
        status: 'Accepted',
        amount: 175,
        provider: MockProviders[2],
        receipt: {
          id: generateId('receipt'),
          url: '',
          type: 'Image'
        },
        filingDate: '2017-06-23T12:06:58-06:00',
        lastModifiedDate: lastModifiedDate
      }
    ),
    lastModifiedDate: lastModifiedDate
  },
  {
    id: generateId('account'),
    type: 'Health Care FSA',
    claims: new Array<Claim>(
      {
        id: generateId('claim'),
        status: 'Accepted',
        amount: 30,
        provider: MockProviders[3],
        receipt: {
          id: generateId('receipt'),
          url: '',
          type: 'Document'
        },
        filingDate: '2017-03-15T12:06:58-06:00',
        lastModifiedDate: lastModifiedDate
      },
      {
        id: generateId('claim'),
        status: 'Accepted',
        amount: 100,
        provider: MockProviders[3],
        receipt: {
          id: generateId('receipt'),
          url: '',
          type: 'Image'
        },
        filingDate: '2017-07-01T12:06:58-06:00',
        lastModifiedDate: lastModifiedDate
      }
    ),
    lastModifiedDate: lastModifiedDate
  },
  {
    id: generateId('account'),
    type: 'Health Savings Account',
    claims: new Array<Claim>(
      {
        id: generateId('claim'),
        status: 'Accepted',
        amount: 195,
        provider: MockProviders[3],
        receipt: {
          id: generateId('receipt'),
          url: '',
          type: 'Document'
        },
        filingDate: '2016-02-24T12:06:58-06:00',
        lastModifiedDate: lastModifiedDate
      },
      {
        id: generateId('claim'),
        status: 'Accepted',
        amount: 433,
        provider: MockProviders[3],
        receipt: {
          id: generateId('receipt'),
          url: '',
          type: 'Image'
        },
        filingDate: '2016-10-30T12:06:58-06:00',
        lastModifiedDate: lastModifiedDate
      }
    ),
    lastModifiedDate: lastModifiedDate
  }
);
