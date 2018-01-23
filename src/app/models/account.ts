import { AccountType } from './account-type';
import { Claim } from './claim';

export interface Account {
  id: string;
  name?: string;
  type: AccountType;
  claims?: Array<Claim>;
  lastModifiedDate: string;
}
