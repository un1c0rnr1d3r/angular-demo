export type ClaimStatus = { name: 'Pending', value: 0 }
  | { name: 'Reviewing', value: 1 }
  | { name: 'Accepted', value: 2 }
  | { name: 'Rejected', value: 3 };

export class ClaimStatuses {
  static Pending: ClaimStatus = { name: 'Pending', value: 0 };
  static Reviewing: ClaimStatus = { name: 'Reviewing', value: 1 };
  static Accepted: ClaimStatus = { name: 'Accepted', value: 2 };
  static Rejected: ClaimStatus = { name: 'Rejected', value: 3 };
}
