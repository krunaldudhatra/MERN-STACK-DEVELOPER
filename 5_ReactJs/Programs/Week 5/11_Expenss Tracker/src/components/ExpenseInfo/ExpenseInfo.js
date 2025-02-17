import React from "react";
import styles from "./ExpenseInfo.module.css";

const ExpenseInfo = ({ expenses }) => {
  // Calculate income (sum of all positive amounts)
  const income = expenses
    .filter((expense) => expense.amount > 0)
    .reduce((total, expense) => total + expense.amount, 0)
    .toFixed(2);

  // Calculate expense (sum of all negative amounts)
  const expense = expenses
    .filter((expense) => expense.amount < 0)
    .reduce((total, expense) => total + Math.abs(expense.amount), 0)
    .toFixed(2);

  // Calculate grand total (difference between income and expense)
  const grandTotal = (income - expense).toFixed(2);

  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>${grandTotal}</h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            +${income}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            -${expense}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseInfo;
