/*Problem statement
Suppose you are building a personal finance application that helps users track their expenses. You want to ensure that the user's financial information is kept private and secure.




Objective:-


Create a class called ExpenseTracker with the following private properties:

- expenses (an array of objects, each representing an expense with properties: name, amount, date)

-income (a number representing the user's total income)

-The class should have the following private methods:

1-calculateTotalExpenses() - calculates the total expense using the expenses array and returns the total amount.

2-The class should have the following public methods:

a- addExpense(name, amount, date) - adds a new expense to the expenses array in the form of an object.
b- calculateBalance - return the balance left after subtracting all the expenses from the income. (use calculateTotalExpenses to get the total expenses)


Note:
The class should also have a constructor that takes in the user's income and initializes the income property.


Input:
const tracker = new ExpenseTracker(5000);
tracker.addExpense("Rent", 1000, "2021-10-01");
tracker.addExpense("Groceries", 500, "2021-10-02");
console.log(tracker.calculateBalance()); 


Output:
3500
 */

function main() {
  class ExpenseTracker {
    #expenses;
    #income;

    constructor(income) {
      this.#expenses = [];
      this.#income = income;
    }

    addExpense(name, amount, date) {
      this.#expenses.push({ name, amount, date });
    }

    #calculateTotalExpenses() {
      let total = 0;
      for (let expense of this.#expenses) {
        total += expense.amount;
      }
      return total;
    }

    calculateBalance() {
      const totalExpenses = this.#calculateTotalExpenses();
      const totalIncome = this.#income;
      return totalIncome - totalExpenses;
    }
  }

  const tracker = new ExpenseTracker(5000);
  tracker.addExpense("Rent", 1000, "2021-10-01");
  tracker.addExpense("Groceries", 500, "2021-10-02");
  console.log(tracker.calculateBalance()); // should output 3500
  return ExpenseTracker;
}
