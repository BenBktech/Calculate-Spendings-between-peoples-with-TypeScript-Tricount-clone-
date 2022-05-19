export class Transaction {
    constructor(l, a, s, r) {
        this.label = l;
        this.amount = a;
        this.spender = s;
        this.receiver = r;
    }
    getLabel() {
        return this.label;
    }
    getAmount() {
        return this.amount;
    }
    getSpender() {
        return this.spender;
    }
    getReceiver() {
        return this.receiver;
    }
}
