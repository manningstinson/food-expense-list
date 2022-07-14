import Expenses from "../src/components/expense-items/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Hamburger",
      amount: 123.59,
      restaurant: "Black Walnut Cafe",
      date: new Date(2022, 2, 12),
    },
    {
      id: "e1",
      title: "Tacos",
      amount: 9.8,
      restaurant: "Torchies",
      date: new Date(2022, 1, 5),
    },
    {
      id: "e1",
      title: "Chicken Fajita Salad",
      amount: 15.45,
      restaurant: "Local Table",
      date: new Date(2022, 1, 5),
    },
    {
      id: "e1",
      title: "Orange Chicken",
      amount: 11.21,
      restaurant: "Chinese Cafe",
      date: new Date(2022, 1, 5),
    },
  ];
  
  return (
<div>
  <Expenses items = {expenses} />
</div>

  );


}

export default App;
