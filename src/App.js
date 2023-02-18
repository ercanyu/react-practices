import Expenses from "./components/expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurence1",
      amount: 294.65,
      date: new Date(2021, 3, 12),
    },
    {
      id: "e2",
      title: "Car Insurence2",
      amount: 294.66,
      date: new Date(2021, 4, 12),
    },
    {
      id: "e3",
      title: "Car Insurence3",
      amount: 294.67,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e4",
      title: "Car Insurence4",
      amount: 294.68,
      date: new Date(2021, 6, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
