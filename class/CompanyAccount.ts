import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value:number): void => {
    if (this.validateStatus()){
      this.balance += value;
      console.log(`Você pegou um emprestimo de R$${value}. Saldo atual: R$${this.getBalance()}`);
    }
  }
}
