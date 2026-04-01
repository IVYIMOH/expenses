// pages/Budget.jsx - Update this
import { useState, useContext } from 'react';
import { Plus, Edit2 } from 'lucide-react';
import { AppContext } from '../contexts/AppContext';

export default function Budget() {
  const { budgets, updateBudget, expenses } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);
  const [budgetAmount, setBudgetAmount] = useState(budgets.monthly || 0);

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const remaining = (budgets.monthly || 0) - totalExpenses;

  const handleSave = () => {
    updateBudget(parseFloat(budgetAmount));
    setIsEditing(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Budget</h1>
        {!isEditing && (
          <button 
            onClick={() => setIsEditing(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
          >
            <Edit2 className="h-5 w-5" />
            Edit Budget
          </button>
        )}
      </div>

      {/* Budget Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-6 border">
          <h3 className="font-semibold text-gray-600">Monthly Budget</h3>
          {isEditing ? (
            <div className="mt-2">
              <input
                type="number"
                value={budgetAmount}
                onChange={(e) => setBudgetAmount(e.target.value)}
                className="border rounded-lg p-2 w-full"
                step="100"
              />
              <button
                onClick={handleSave}
                className="mt-2 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
              >
                Save
              </button>
            </div>
          ) : (
            <p className="text-2xl font-bold mt-2 text-gray-900">
              ${(budgets.monthly || 0).toFixed(2)}
            </p>
          )}
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 border">
          <h3 className="font-semibold text-gray-600">Total Spent</h3>
          <p className="text-2xl font-bold mt-2 text-gray-900">${totalExpenses.toFixed(2)}</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 border">
          <h3 className="font-semibold text-gray-600">Remaining</h3>
          <p className={`text-2xl font-bold mt-2 ${remaining >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            ${remaining.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Budget Progress Bar */}
      {budgets.monthly > 0 && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="font-semibold mb-2">Budget Progress</h3>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div 
              className={`h-4 rounded-full ${(totalExpenses / budgets.monthly) > 0.8 ? 'bg-red-500' : 'bg-green-500'}`}
              style={{ width: `${Math.min(100, (totalExpenses / budgets.monthly) * 100)}%` }}
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            {((totalExpenses / budgets.monthly) * 100).toFixed(1)}% of budget used
          </p>
        </div>
      )}
    </div>
  );
}