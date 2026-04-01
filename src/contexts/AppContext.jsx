// contexts/AppContext.jsx - Create this file
import { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('expenses');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [budgets, setBudgets] = useState(() => {
    const saved = localStorage.getItem('budgets');
    return saved ? JSON.parse(saved) : { monthly: 0 };
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem('budgets', JSON.stringify(budgets));
  }, [budgets]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now(), date: expense.date || new Date().toISOString() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  const updateBudget = (amount) => {
    setBudgets({ ...budgets, monthly: amount });
  };

  return (
    <AppContext.Provider value={{ 
      expenses, 
      addExpense, 
      deleteExpense, 
      budgets, 
      updateBudget 
    }}>
      {children}
    </AppContext.Provider>
  );
}