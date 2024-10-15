import { BonusDioAccount} from './class/BonusDioAccount';
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10);
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);
const bonusDioAccount: BonusDioAccount = new BonusDioAccount('Vitor', 2);

companyAccount.deposit(1000);
companyAccount.getLoan(500);
companyAccount.withdraw(300);
console.log(`Saldo da CompanyAccount: R$${companyAccount.getBalance()}`);

peopleAccount.deposit(200);
peopleAccount.withdraw(50);
console.log(`Saldo de PeopleAccount: R$${peopleAccount.getBalance()}`);

bonusDioAccount.deposit(100);
console.log(`Saldo da BonusDioAccount: R$${bonusDioAccount.getBalance()}`);