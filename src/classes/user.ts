import { isUser } from "../interfaces/userInterface";

export class User implements isUser {
    private name: string;

    constructor(n: string) {
        this.name = n;
    }

    getName():string {
        return this.name;
    }

    setName(n: string): void {
        this.name = n;
    }
}