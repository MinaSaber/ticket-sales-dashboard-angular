import { User } from './user-dto';

export interface Ticket {
  user: User;
  ticketNumber: number;
  ticketPrice: number;
  cinemas: string[];
  peapleNumber: number;
  purchaseNumber: string;
}
