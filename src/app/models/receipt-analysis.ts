import { ServiceProvider } from './service-provider';
import { ReceiptAnalysisLineItem } from './receipt-analysis-line-item';

export interface ReceiptAnalysis {
  id: string;
  provider?: ServiceProvider;
  lineItems?: Array<ReceiptAnalysisLineItem>;
  total?: string;
  analyzedOnDate: string;
}
