export interface Customer {
    CustomerId: number | null;  // Matches backend primary key
    name: string;
    email: string;
    phoneNumber: string;
  }