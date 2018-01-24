import { ClaimStatus } from './claim-status';
import { ServiceProvider } from './service-provider';
import { Receipt } from './receipt';
import { Payment } from './payment';

export interface Claim {
  id: string;
  status: ClaimStatus;
  amount: number;
  provider: ServiceProvider;
  receipt: Receipt;
  filingDate: string;
  payment: Payment;
  finalDispositionDate?: string;
  lastModifiedDate: string;
}
