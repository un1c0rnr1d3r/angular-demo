export interface User {
  id: string;
  name: string;
  email: string;
  lastLoggedIn?: string;
  failedLoginAttempts: number;
}
