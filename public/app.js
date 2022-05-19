import { User } from "./classes/user.js";
import { Transaction } from "./classes/transactions.js";
const formCreateUsers = document.querySelector('.formCreateUsers');
const main = document.querySelector('.main');
const user1Input = document.querySelector('.user1');
const user2Input = document.querySelector('.user2');
const spendingList = document.querySelector('.spendingList');
const equilibre = document.querySelector('.equilibre');
const addSpending = document.querySelector('.addSpending');
const addSpendingLabel = document.querySelector('.addSpendingLabel');
const addSpendingAmount = document.querySelector('.addSpendingAmount');
const selectSpender = document.querySelector('.selectSpender');
const selectReceiver = document.querySelector('.selectReceiver');
let transactions = [];
let user1;
let user2;
formCreateUsers.addEventListener('submit', function (e) {
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
});
addSpending.addEventListener('submit', function (e) {
    e.preventDefault();
    let label = addSpendingLabel.value;
    let amount = addSpendingAmount.valueAsNumber;
    let transaction;
    if (selectSpender.value == user1.getName()) {
        transaction = new Transaction(label, amount, user1, user2);
    }
    else {
        transaction = new Transaction(label, amount, user2, user1);
    }
    transactions.push(transaction);
    displayListTransaction();
});
const displayListTransaction = () => {
    spendingList.innerText = '';
    let amountUser1 = 0;
    let amountUser2 = 0;
    transactions.forEach(t => {
        let li = document.createElement('li');
        li.innerText = t.getLabel() + ' - ' + t.getAmount();
        spendingList.append(li);
        //Equilibre dépenses
        let thisAmount = t.getAmount() / 2;
        if (t.getReceiver() == user2) {
            amountUser2 += thisAmount;
        }
        else {
            amountUser1 += thisAmount;
        }
    });
    equilibre.innerHTML = user1.getName() + " doit " + amountUser1 + " à " + user2.getName() + "<br />";
    equilibre.innerHTML += user2.getName() + " doit " + amountUser2 + " à " + user1.getName() + "<br />";
};
