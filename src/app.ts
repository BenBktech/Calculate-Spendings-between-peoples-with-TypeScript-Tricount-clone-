import { User } from "./classes/user.js";
import { Transaction } from "./classes/transactions.js";

const formCreateUsers = document.querySelector('.formCreateUsers') as HTMLFormElement;
const main = document.querySelector('.main') as HTMLFormElement;
const user1Input = document.querySelector('.user1') as HTMLInputElement;
const user2Input = document.querySelector('.user2') as HTMLInputElement;
const spendingList = document.querySelector('.spendingList') as HTMLUListElement;

const equilibre = document.querySelector('.equilibre') as HTMLDivElement;

const addSpending = document.querySelector('.addSpending') as HTMLFormElement;

const addSpendingLabel = document.querySelector('.addSpendingLabel') as HTMLInputElement;
const addSpendingAmount = document.querySelector('.addSpendingAmount') as HTMLInputElement;
const selectSpender = document.querySelector('.selectSpender') as HTMLSelectElement;
const selectReceiver = document.querySelector('.selectReceiver') as HTMLSelectElement;

let transactions:Transaction[] = [];

let user1:User;
let user2:User;

formCreateUsers.addEventListener('submit', function(e: Event) {
    e.preventDefault();
    user1 = new User(user1Input.value);
    user2 = new User(user2Input.value);
    formCreateUsers.classList.add('hidden');
    main.classList.remove('hidden');
    
    let el = document.createElement('option');
    el.innerText = user1.getName();
    selectSpender.append(el);

    el = document.createElement('option');
    el.innerText = user2.getName();
    selectSpender.append(el);

    el = document.createElement('option');
    el.innerText = user1.getName();
    selectReceiver.append(el);

    el = document.createElement('option');
    el.innerText = user2.getName();
    selectReceiver.append(el);
})

addSpending.addEventListener('submit', function(e: Event) {
    e.preventDefault();
    let label = addSpendingLabel.value;
    let amount = addSpendingAmount.valueAsNumber;
    let transaction;
    if(selectSpender.value == user1.getName()) {
        transaction = new Transaction(label, amount, user1, user2);
    }   
    else {
        transaction = new Transaction(label, amount, user2, user1);
    }
    transactions.push(transaction);
    displayListTransaction();
})

const displayListTransaction = (): void => {
    spendingList.innerText = ''
    let amountUser1:number = 0;
    let amountUser2:number = 0;

    transactions.forEach(t => {
        let li = document.createElement('li');
        li.innerText = t.getLabel() + ' - ' + t.getAmount();
        spendingList.append(li);
        //Equilibre d??penses
        let thisAmount:number = t.getAmount() / 2;
        if(t.getReceiver() == user2) {
            amountUser2 += thisAmount
        }
        else {
            amountUser1 += thisAmount;
        }
    })

    equilibre.innerHTML = user1.getName() + " doit " + amountUser1 + " ?? " + user2.getName() + "<br />";
    equilibre.innerHTML += user2.getName() + " doit " + amountUser2 + " ?? " + user1.getName() + "<br />";

}