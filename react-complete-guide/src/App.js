import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurence",
      amount: 294.65,
      date: new Date(2021, 3, 21),
    },
    {
      id: "e2",
      title: "New Video Game",
      amount: 294.66,
      date: new Date(2021, 4, 12),
    },
    {
      id: "e3",
      title: "Food",
      amount: 294.67,
      date: new Date(2021, 5, 16),
    },
    {
      id: "e4",
      title: "Travel",
      amount: 294.68,
      date: new Date(2021, 6, 19),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("Adding expense..");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
