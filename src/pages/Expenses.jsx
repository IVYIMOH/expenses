// pages/Expenses.jsx - Update this
import { useState, useContext } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { AppContext } from '../contexts/AppContext';
import ExpenseModal from '../components/ExpenseModal';

export default function Expenses() {
  const { expenses, addExpense, deleteExpense } = useContext(AppContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Expenses</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
        >
          <Plus className="h-5 w-5" />
          Add Expense
        </button>
      </div>

      {expenses.length > 0 && (
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 mb-6 text-white">
          <p className="text-sm opacity-90">Total Expenses</p>
          <p className="text-3xl font-bold">${totalExpenses.toFixed(2)}</p>
        </div>
      )}

      <div className="bg-white rounded-lg shadow border">
        {expenses.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-gray-500">No expenses yet. Click "Add Expense" to get started!</p>
          </div>
        ) : (
          <div className="divide-y">
            {expenses.map((expense) => (
              <div key={expense.id} className="p-4 flex justify-between items-center hover:bg-gray-50">
                <div>
                  <p className="font-medium">{expense.description}</p>
                  <p className="text-sm text-gray-500">
                    {expense.category} • {new Date(expense.date).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-lg font-semibold text-gray-900">${expense.amount.toFixed(2)}</span>
                  <button 
                    onClick={() => deleteExpense(expense.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <ExpenseModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={addExpense}
      />
    </div>
  );
}