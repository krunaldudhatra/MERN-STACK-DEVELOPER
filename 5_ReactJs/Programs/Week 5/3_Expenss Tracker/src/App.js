// import "./App.css";
// import React from "react";

// export default class App extends React.Component {
//   // Create state for the expenses here

//   render() {
//     return (
//       <>
//         <h2 className="mainHeading">Expense Tracker</h2>
//         <div className="App">
//           {/* Render expense form here */}
//           <div className="expenseContainer">
//             {/* Render Expense Info here
//             Render Expense List here */}
//           </div>
//         </div>
//       </>
//     );
//   }
// }
import "./App.css";
import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]); // Add new transaction to the list
  };

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        {/* Render Expense Form */}
        <ExpenseForm onAddTransaction={addTransaction} />

        <div className="expenseContainer">
          {/* Render Expense Info */}
          <ExpenseInfo transactions={transactions} />

          {/* Render Expense List */}
          <ExpenseList transactions={transactions} />
        </div>
      </div>
    </>
  );
};

export default App;
