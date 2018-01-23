import { ReceiptType } from './receipt-type';

export interface Receipt {
  id: string;
  url: string;
  type: ReceiptType;
}
