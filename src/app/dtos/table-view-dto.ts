import { User } from "./user-dto";

export interface Table {
    user: User,
    ticketNumber: string,
    ticketPrice: string,
    cinemas: string[],
    peapleNumber: number,
    purchaseNumber: string,
}