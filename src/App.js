import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

import { Route, Routes, Navigate } from 'react-router-dom';
import MainHeader from "./components/UI/MainHeader";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Job Interview",
    description: "Piton Yazılım Evi",
    date: new Date(2022, 7, 14),
  },
  { 
    id: "e2", 
    title: "Flying", 
    description: "To the Eskişehir", 
    date: new Date(2024, 2, 12) 
  },
  {
    id: "e3",
    title: "Hospital",
    description: "Go to the dentist",
    date: new Date(2023, 2, 28),
  },
  {
    id: "e4",
    title: "Meeting",
    description: "Lunch with team members",
    date: new Date(2022, 5, 12),
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
      <MainHeader />
      <main>

      <Routes>
        <Route path="/"  element={ <Navigate replace to="/add" />} />

        <Route path="/add"  element={ <NewExpense onAddExpense={addExpenseHandler} />} />
         
        <Route path="/products"  element={ <Expenses items={expenses} />} />
      

      </Routes>
      </main>
    </div>
  );
};

export default App;
