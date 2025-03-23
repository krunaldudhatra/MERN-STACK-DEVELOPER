import { useState, useReducer } from "react";
import "./App.css";

// components imports
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";

// react toasts
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import firebase methods here
import { collection, addDoc,updateDoc,doc } from "firebase/firestore";
import { db } from "./firebaseInit";

const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "ADD_EXPENSE": {
      return {
        expenses: [payload.expense, ...state.expenses],
      };
    }
    case "REMOVE_EXPENSE": {
      return {
        expenses: state.expenses.filter((expense) => expense.id !== payload.id),
      };
    }
    case "UPDATE_EXPENSE": {
      const expensesDuplicate = state.expenses;
      expensesDuplicate[payload.expensePos] = payload.expense;
      return {
        expenses: expensesDuplicate,
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
    const expenseRef = collection(db, "expenses");
    const docRef = await addDoc(expenseRef, expense);

    dispatch({
      type: "ADD_EXPENSE",
      payload: { expense: { id: docRef.id, ...expense } },
    });
    toast.success("Expense added successfully.");
  };

  const deleteExpense = (id) => {
    dispatch({ type: "REMOVE_EXPENSE", payload: { id } });
  };

  const resetExpenseToUpdate = () => {
    setExpenseToUpdate(null);
  };

  const updateExpense = async (expense) => {
    try {
      const expenseRef = doc(db, "expenses", expense.id);
      
      await updateDoc(expenseRef, {
        title: expense.title,
        amount: expense.amount,
        category: expense.category,
        date: expense.date
      });
  
      const expensePos = state.expenses.findIndex((exp) => exp.id === expense.id);
      if (expensePos === -1) return;
  
      dispatch({ type: "UPDATE_EXPENSE", payload: { expensePos, expense } });
      toast.success("Expense updated successfully.");
    } catch (error) {
      toast.error("Failed to update expense.");
      console.error("Error updating expense:", error);
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
