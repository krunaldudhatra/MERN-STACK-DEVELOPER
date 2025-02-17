
import styles from "./ExpenseForm.module.css";
import React, { useState } from "react";
// export default class ExpenseForm extends React.Component {
//   // Create state or ref for the inputs here

//   render() {
//     return (
//       <form className={styles.form} onSubmit={() => {}}>
//         <h3>Add new transaction</h3>
//         <label htmlFor="expenseText">Text</label>
//         <input
//           id="expenseText"
//           className={styles.input}
//           type="text"
//           placeholder="Enter text..."
//           required
//         />
//         <div>
//           <label htmlFor="expenseAmount">Amount</label>
//           <div>(negative - expense,positive-income)</div>
//         </div>
//         <input
//           className={styles.input}
//           id="expenseAmount"
//           type="number"
//           placeholder="Enter amount..."
//           required
//         />
//         <button className={styles.submitBtn}>Add Transaction</button>
//       </form>
//     );
//   }
// }


const ExpenseForm = ({ onAddTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    const newTransaction = {
      id: Date.now(), // Unique ID for each transaction
      text,
      amount: parseFloat(amount),
    };

    onAddTransaction(newTransaction); // Pass data to parent component
    setText(""); // Reset form fields
    setAmount("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>Add new transaction</h3>
      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense, positive - income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button className={styles.submitBtn}>Add Transaction</button>
    </form>
  );
};

export default ExpenseForm;