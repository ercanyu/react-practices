import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.65,
    date: new Date(2021, 3, 21),
  },
  {
    id: "e2",
    title: "New Video Game",
    amount: 294.66,
    date: new Date(2022, 4, 12),
  },
  {
    id: "e3",
    title: "Food",
    amount: 294.67,
    date: new Date(2023, 5, 16),
  },
  {
    id: "e4",
    title: "Travel",
    amount: 294.68,
    date: new Date(2021, 6, 19),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
