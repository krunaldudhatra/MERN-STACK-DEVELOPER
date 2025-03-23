import { useState, useReducer } from "react";
import "./App.css";

// components imports
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";

// react toasts
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import Firebase methods
import { db, collection, addDoc, doc, setDoc } from "./firebase";

const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "ADD_EXPENSE": {
      return {
        expenses: [payload.expense, ...state.expenses]
      };
    }
    case "REMOVE_EXPENSE": {
      return {
        expenses: state.expenses.filter((expense) => expense.id !== payload.id)
      };
    }
    case "UPDATE_EXPENSE": {
      const updatedExpenses = [...state.expenses];
      updatedExpenses[payload.expensePos] = payload.expense;
      return {
        expenses: updatedExpenses
      };
    }
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { expenses: [] });
  const [expenseToUpdate, setExpenseToUpdate] = useState(null);

  const addExpense = async (expense) => {
    try {
      const docRef = await addDoc(collection(db, "expenses"), expense);
      dispatch({
        type: "ADD_EXPENSE",
        payload: { expense: { id: docRef.id, ...expense } }
      });
      toast.success("Expense added successfully.");
    } catch (error) {
      console.error("Error adding expense:", error);
      toast.error("Failed to add expense.");
    }
  };

  const deleteExpense = (id) => {
    dispatch({ type: "REMOVE_EXPENSE", payload: { id } });
  };

  const resetExpenseToUpdate = () => {
    setExpenseToUpdate(null);
  };

  const updateExpense = async (expense) => {
    const expensePos = state.expenses.findIndex((exp) => exp.id === expense.id);

    if (expensePos === -1) {
      return false;
    }

    try {
      const expenseRef = doc(db, "expenses", expense.id);
      await setDoc(expenseRef, expense, { merge: true });

      dispatch({ type: "UPDATE_EXPENSE", payload: { expensePos, expense } });
      toast.success("Expense updated successfully.");
    } catch (error) {
      console.error("Error updating expense:", error);
      toast.error("Failed to update expense.");
    }
  };

  return (
    <>
      <ToastContainer />
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm
          addExpense={addExpense}
          expenseToUpdate={expenseToUpdate}
          updateExpense={updateExpense}
          resetExpenseToUpdate={resetExpenseToUpdate}
        />
        <div className="expenseContainer">
          <ExpenseInfo expenses={state.expenses} />
          <ExpenseList
            expenses={state.expenses}
            deleteExpense={deleteExpense}
            changeExpenseToUpdate={setExpenseToUpdate}
          />
        </div>
      </div>
    </>
  );
}

export default App;
