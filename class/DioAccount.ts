export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit (value:number): void {
    if(this.validateStatus()){
      if(this.validateStatus()){
        this.balance += value;
        console.log(`Depósito no valor de R$${value} bem sucedido, saldo atual: R$${this.balance}`);
      }
    }
  }

  withdraw (value:number): void {
    if (this.validateStatus() && this.balance >= value){
      this.balance -= value;
      console.log(`Você sacou R$${value}. Saldo atual: R$${this.balance}`);
    }else{
      console.log('Saque não permitido. Verifique o saldo ou o status da conta');
    }
  }

  getBalance (): number {
    return (this.balance)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
