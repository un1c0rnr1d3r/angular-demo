export type PaymentStatus = { name: 'Reimbursed', value: 0 }
  | { name: 'Pending', value: 1 }
  | { name: 'Denied', value: 2 };

export class PaymentStatuses {
  static Reimbursed: PaymentStatus = { name: 'Reimbursed', value: 0 };
  static Pending: PaymentStatus = { name: 'Pending', value: 1 };
  static Denied: PaymentStatus = { name: 'Denied', value: 2 };
}
