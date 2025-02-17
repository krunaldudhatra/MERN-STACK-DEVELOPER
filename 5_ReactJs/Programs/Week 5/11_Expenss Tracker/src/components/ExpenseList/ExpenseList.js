import React from "react";
import styles from "./ExpenseList.module.css";
import Transaction from "../Transaction/Transaction.js";

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <div className={styles.expenseListContainer}>
      <h3>Transactions</h3>
      <ul className={styles.transactionList}>
        {expenses.length === 0 ? (
          <p className={styles.noTransactions}>No transactions yet</p>
        ) : (
          expenses.map((expense, index) => (
            <Transaction
              key={expense.id}
              expense={expense}
              index={index}
              deleteExpense={deleteExpense}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default ExpenseList;
