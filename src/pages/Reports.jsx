// src/pages/Reports.jsx
import { useState, useContext, useEffect } from 'react';
import { 
  BarChart3, PieChart, TrendingUp, Calendar, Download, 
  Filter, DollarSign, CreditCard, ShoppingBag, 
  Car, Coffee, Home, Smartphone, Gift, TrendingDown
} from 'lucide-react';
import { AppContext } from '../contexts/AppContext';

export default function Reports() {
  const { expenses, budgets } = useContext(AppContext);
  const [period, setPeriod] = useState('month'); // month, year, all
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [chartType, setChartType] = useState('expenses'); // expenses, categories, trends

  // Get current date for filtering
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  // Filter expenses based on period
  const getFilteredExpenses = () => {
    return expenses.filter(expense => {
      const expenseDate = new Date(expense.date);
      
      if (period === 'month') {
        return expenseDate.getMonth() === currentMonth && 
               expenseDate.getFullYear() === currentYear;
      }
      if (period === 'year') {
        return expenseDate.getFullYear() === currentYear;
      }
      return true; // 'all'
    });
  };

  const filteredExpenses = getFilteredExpenses();
  
  // Filter by category if selected
  const categoryFilteredExpenses = selectedCategory === 'all' 
    ? filteredExpenses 
    : filteredExpenses.filter(e => e.category === selectedCategory);

  // Calculate totals
  const totalExpenses = categoryFilteredExpenses.reduce((sum, e) => sum + e.amount, 0);
  const transactionCount = categoryFilteredExpenses.length;
  const averageExpense = transactionCount > 0 ? totalExpenses / transactionCount : 0;

  // Calculate category totals
  const categoryTotals = {};
  filteredExpenses.forEach(expense => {
    if (!categoryTotals[expense.category]) {
      categoryTotals[expense.category] = 0;
    }
    categoryTotals[expense.category] += expense.amount;
  });

  // Sort categories by amount
  const sortedCategories = Object.entries(categoryTotals)
    .sort((a, b) => b[1] - a[1]);

  // Get top category
  const topCategory = sortedCategories.length > 0 ? sortedCategories[0] : null;

  // Get daily expenses for trend (last 7 days)
  const getLast7Days = () => {
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      days.push(date);
    }
    return days;
  };

  const dailyTotals = getLast7Days().map(day => {
    const total = filteredExpenses
      .filter(e => {
        const expenseDate = new Date(e.date);
        return expenseDate.toDateString() === day.toDateString();
      })
      .reduce((sum, e) => sum + e.amount, 0);
    return { date: day, total };
  });

  // Category icons mapping
  const getCategoryIcon = (category) => {
    const icons = {
      'Food': <Coffee className="h-4 w-4" />,
      'Transport': <Car className="h-4 w-4" />,
      'Entertainment': <Smartphone className="h-4 w-4" />,
      'Bills': <Home className="h-4 w-4" />,
      'Shopping': <ShoppingBag className="h-4 w-4" />,
      'Healthcare': <Heart className="h-4 w-4" />,
      'Education': <BookOpen className="h-4 w-4" />,
      'Other': <Gift className="h-4 w-4" />
    };
    return icons[category] || <CreditCard className="h-4 w-4" />;
  };

  // Get spending advice
  const getSpendingAdvice = () => {
    if (transactionCount === 0) {
      return "Add some expenses to see personalized spending insights and recommendations.";
    }
    
    const monthlyBudget = budgets.monthly || 0;
    if (monthlyBudget > 0 && totalExpenses > monthlyBudget) {
      return `⚠️ You've spent $${(totalExpenses - monthlyBudget).toFixed(2)} over your monthly budget. Consider reducing spending in ${topCategory?.[0] || 'your top category'}.`;
    }
    
    if (topCategory) {
      return `💡 Your highest spending is in ${topCategory[0]} ($${topCategory[1].toFixed(2)}). Try setting a category budget to manage this better.`;
    }
    
    return "📊 Keep tracking your expenses to get better insights!";
  };

  // Export data as CSV
  const exportToCSV = () => {
    const headers = ['Date', 'Description', 'Category', 'Amount'];
    const rows = categoryFilteredExpenses.map(e => [
      new Date(e.date).toLocaleDateString(),
      e.description,
      e.category,
      e.amount.toFixed(2)
    ]);
    
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `expenses_${period}_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Get max bar height for chart
  const maxDailyTotal = Math.max(...dailyTotals.map(d => d.total), 1);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-500 mt-1">Track your spending patterns and get insights</p>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={exportToCSV}
            disabled={categoryFilteredExpenses.length === 0}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            <Download className="h-4 w-4" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Filters:</span>
          </div>
          
          {/* Period Filter */}
          <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
            {[
              { value: 'month', label: 'This Month' },
              { value: 'year', label: 'This Year' },
              { value: 'all', label: 'All Time' }
            ].map(opt => (
              <button
                key={opt.value}
                onClick={() => setPeriod(opt.value)}
                className={`px-3 py-1.5 text-sm rounded-md transition ${
                  period === opt.value 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          
          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Categories</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Bills">Bills</option>
            <option value="Shopping">Shopping</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">Total Expenses</span>
            <DollarSign className="h-5 w-5 text-blue-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">${totalExpenses.toFixed(2)}</p>
          <p className="text-xs text-gray-500 mt-1">{transactionCount} transactions</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">Average Expense</span>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">${averageExpense.toFixed(2)}</p>
          <p className="text-xs text-gray-500">per transaction</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">Top Category</span>
            {topCategory && getCategoryIcon(topCategory[0])}
          </div>
          <p className="text-2xl font-bold text-gray-900">{topCategory?.[0] || '—'}</p>
          <p className="text-xs text-gray-500">{topCategory ? `$${topCategory[1].toFixed(2)}` : 'No data'}</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">Monthly Budget</span>
            <BarChart3 className="h-5 w-5 text-purple-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">${(budgets.monthly || 0).toFixed(2)}</p>
          <p className="text-xs text-gray-500">
            {budgets.monthly > 0 ? `${((totalExpenses / budgets.monthly) * 100).toFixed(1)}% used` : 'Not set'}
          </p>
        </div>
      </div>

      {/* Spending Trend Chart */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            Last 7 Days Spending Trend
          </h3>
          <span className="text-xs text-gray-500">Daily totals</span>
        </div>
        
        {dailyTotals.some(d => d.total > 0) ? (
          <div className="flex items-end justify-between gap-2 h-48">
            {dailyTotals.map((day, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                <div className="relative w-full flex justify-center">
                  <div 
                    className="w-full max-w-[40px] bg-blue-500 rounded-t hover:bg-blue-600 transition"
                    style={{ 
                      height: `${(day.total / maxDailyTotal) * 120}px`,
                      minHeight: day.total > 0 ? '4px' : '0'
                    }}
                  />
                </div>
                <span className="text-xs text-gray-500 rotate-45 sm:rotate-0">
                  {day.date.toLocaleDateString(undefined, { weekday: 'short' })}
                </span>
                <span className="text-xs font-medium text-gray-700">
                  ${day.total.toFixed(0)}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            No expenses recorded in the last 7 days
          </div>
        )}
      </div>

      {/* Category Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Category List */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 flex items-center gap-2 mb-4">
            <PieChart className="h-5 w-5 text-blue-600" />
            Spending by Category
          </h3>
          
          {sortedCategories.length > 0 ? (
            <div className="space-y-3">
              {sortedCategories.map(([category, amount]) => {
                const percentage = (amount / totalExpenses) * 100;
                return (
                  <div key={category}>
                    <div className="flex justify-between text-sm mb-1">
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(category)}
                        <span className="text-gray-700">{category}</span>
                      </div>
                      <span className="font-medium text-gray-900">${amount.toFixed(2)}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 rounded-full h-2"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{percentage.toFixed(1)}%</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              No expenses to show
            </div>
          )}
        </div>

        {/* Spending Advice */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-sm p-6 text-white">
          <h3 className="font-semibold flex items-center gap-2 mb-3">
            <TrendingUp className="h-5 w-5" />
            Spending Insights
          </h3>
          <p className="text-white/90 mb-4">{getSpendingAdvice()}</p>
          
          {topCategory && (
            <div className="mt-4 p-3 bg-white/10 rounded-lg">
              <p className="text-sm font-medium mb-1">Top Category: {topCategory[0]}</p>
              <p className="text-2xl font-bold">${topCategory[1].toFixed(2)}</p>
              <p className="text-xs text-white/70 mt-1">
                {((topCategory[1] / totalExpenses) * 100).toFixed(1)}% of total spending
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">Recent Transactions</h3>
        </div>
        
        {categoryFilteredExpenses.length > 0 ? (
          <div className="divide-y divide-gray-200">
            {categoryFilteredExpenses.slice(0, 10).map((expense) => (
              <div key={expense.id} className="px-6 py-4 flex justify-between items-center hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    {getCategoryIcon(expense.category)}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{expense.description}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(expense.date).toLocaleDateString()} • {expense.category}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">${expense.amount.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="px-6 py-12 text-center text-gray-500">
            No transactions found for the selected filters
          </div>
        )}
        
        {categoryFilteredExpenses.length > 10 && (
          <div className="px-6 py-3 border-t border-gray-200 bg-gray-50 text-center">
            <p className="text-sm text-gray-500">
              Showing 10 of {categoryFilteredExpenses.length} transactions
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Add missing imports for icons used
import { Heart, BookOpen } from 'lucide-react';