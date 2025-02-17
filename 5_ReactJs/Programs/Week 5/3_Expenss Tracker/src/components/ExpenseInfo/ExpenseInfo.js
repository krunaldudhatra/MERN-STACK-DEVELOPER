
import styles from "./ExpenseInfo.module.css";
import React, { useState } from "react";
// export default class ExpenseInfo extends React.Component {
//   render() {
//     return (
//       <div className={styles.expenseInfoContainer}>
//         <div className={styles.balance}>
//           <h4>YOUR BALANCE</h4>
//           <h1>${/* Grand total should be displayed here */}</h1>
//         </div>
//         <div className={styles.incomeExpenseContainer}>
//           <div>
//             <h4>Income</h4>
//             <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
//               +${/*Total Profit Amount should be displayed here */}
//             </p>
//           </div>
//           <div>
//             <h4>Expense</h4>
//             <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
//               -${/* Total expense amount should be displayed here */}
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }


const ExpenseInfo = ({ transactions }) => {
  const amounts = transactions.map((transaction) => transaction.amount);

  // Calculate total balance, income, and expense
  const totalBalance = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);
  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);
  const expense = (
    amounts.filter((amount) => amount < 0).reduce((acc, item) => acc + item, 0) * -1
  ).toFixed(2);

  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>${totalBalance}</h1>
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