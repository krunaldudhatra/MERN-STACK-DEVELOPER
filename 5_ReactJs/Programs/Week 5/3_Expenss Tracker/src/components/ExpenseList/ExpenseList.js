
import styles from "./ExpenseList.module.css";
import React, { useState } from "react";
// export default class ExpenseList extends React.Component {
//   render() {
//     return (
//       <div className={styles.expenseListContainer}>
//         <h3>Transactions</h3>
//         <ul className={styles.transactionList}>
//           {/* Display transactions here */}
//         </ul>
//       </div>
//     );
//   }
// }


const ExpenseList = () => {
  return (
    <div className={styles.expenseListContainer}>
      <h3>Transactions</h3>
      <ul className={styles.transactionList}>
        {/* Display transactions here */}
      </ul>
    </div>
  );
};

export default ExpenseList;