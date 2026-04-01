// pages/Dashboard.jsx - Update this
import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

export default function Dashboard() {
  const { expenses, budgets } = useContext(AppContext);
  
  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const monthlyBudget = budgets.monthly || 0;
  const remaining = monthlyBudget - totalExpenses;
  
  const getInvestmentAdvice = () => {
    if (expenses.length === 0) {
      return {
        message: "Start tracking your expenses to get personalized investment recommendations",
        type: "info",
        icon: AlertCircle
      };
    }
    if (remaining > 500) {
      return {
        message: "Excellent! You have surplus funds. Consider investing in diversified index funds or growth stocks",
        type: "success",
        icon: TrendingUp
      };
    }
    if (remaining > 0) {
      return {
        message: "Good job staying within budget. Start with low-risk investments like bonds or ETFs",
        type: "info",
        icon: CheckCircle
      };
    }
    return {
      message: "You're over budget. Review your expenses before investing. Focus on reducing unnecessary spending first",
      type: "warning",
      icon: AlertCircle
    };
  };

  const advice = getInvestmentAdvice();
  const IconComponent = advice.icon;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      <p className="text-gray-500 mt-2">Track expenses and get smart investment advice</p>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-6 border">
          <h3 className="font-semibold text-gray-600">Total Expenses</h3>
          <p className="text-2xl font-bold mt-2 text-gray-900">${totalExpenses.toFixed(2)}</p>
          <p className="text-sm text-gray-500 mt-1">{expenses.length} transactions</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border">
          <h3 className="font-semibold text-gray-600">Monthly Budget</h3>
          <p className="text-2xl font-bold mt-2 text-gray-900">${monthlyBudget.toFixed(2)}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border">
          <h3 className="font-semibold text-gray-600">Remaining</h3>
          <p className={`text-2xl font-bold mt-2 ${remaining >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            ${remaining.toFixed(2)}
          </p>
        </div>
      </div>
      
      {/* Investment Advice Card */}
      <div className={`mt-6 rounded-lg p-6 border ${
        advice.type === 'success' ? 'bg-green-50 border-green-200' : 
        advice.type === 'warning' ? 'bg-red-50 border-red-200' : 
        'bg-blue-50 border-blue-200'
      }`}>
        <div className="flex items-start gap-3">
          <IconComponent className={`h-5 w-5 mt-0.5 ${
            advice.type === 'success' ? 'text-green-600' : 
            advice.type === 'warning' ? 'text-red-600' : 
            'text-blue-600'
          }`} />
          <div>
            <h3 className="font-semibold text-gray-900">Investment Insight</h3>
            <p className="text-gray-700 mt-1">{advice.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}