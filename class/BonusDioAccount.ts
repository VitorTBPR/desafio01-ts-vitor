import { DioAccount } from "./DioAccount";

export class BonusDioAccount extends DioAccount{
    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
    }

    deposit(value: number): void {
        if (this.validateStatus()){
            this.balance += value + 10;
            console.log(`Você realizou um depósito no valor de R$${value} e ganhou um acréscimo no valor de R$10, saldo atual de R$${this.balance}`)
        };
    }
}