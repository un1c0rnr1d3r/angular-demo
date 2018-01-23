import { ClaimStatus } from './claim-status';
import { ServiceProvider } from './service-provider';
import { Receipt } from './receipt';

export interface Claim {
  id: string;
  status: ClaimStatus;
  amount: number;
  provider: ServiceProvider;
  receipt: Receipt;
  filingDate: string;
  finalDispositionDate?: string;
  lastModifiedDate: string;
}
