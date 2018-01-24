import { PaymentStatus } from './payment-status';

export interface Payment {
  id: string;
  amount: number;
  status: PaymentStatus;
  finalDispositionDate?: string;
  lastModifiedDate: string;
}
