import { User } from "./user";
import { isTransaction } from "../interfaces/transactionInterface";

export class Transaction implements isTransaction {
    private label: string;
    private amount: number;
    private spender: User;
    private receiver: User;

    constructor(l: string, a: number, s: User, r: User) {
        this.label = l;
        this.amount = a;
        this.spender = s;
        this.receiver = r;
    }

    getLabel(): string {
        return this.label;
    }

    getAmount(): number {
        return this.amount
    }

    getSpender(): User {
        return this.spender;
    }

    getReceiver(): User {
        return this.receiver;
    }
}