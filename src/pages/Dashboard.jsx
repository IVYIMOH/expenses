// pages/Dashboard.jsx
import { useContext, useState, useEffect } from 'react';  // ← ADD useState, useEffect
import { AppContext } from '../contexts/AppContext';
import { TrendingUp, AlertCircle, CheckCircle, Loader } from 'lucide-react';  // ← ADD Loader
import { fetchSingleStock } from '../services/stockApi';  // ← ADD this import

export default function Dashboard() {
  const { expenses, budgets } = useContext(AppContext);
  
  // ADD THIS: State for API data
  const [marketAdvice, setMarketAdvice] = useState(null);
  const [loadingMarket, setLoadingMarket] = useState(true);
  
  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const monthlyBudget = budgets.monthly || 0;
  const remaining = monthlyBudget - totalExpenses;
  
  // ADD THIS: Fetch market data when component loads
  useEffect(() => {
    async function getMarketData() {
      try {
        // Get a major stock for market context
        const stockData = await fetchSingleStock("AAPL");
        if (stockData) {
          setMarketAdvice({
            symbol: stockData.symbol,
            price: stockData.price,
            change: stockData.change,
            trend: stockData.change >= 0 ? "bullish" : "bearish"
          });
        }
      } catch (error) {
        console.error("Failed to fetch market data:", error);
      } finally {
        setLoadingMarket(false);
      }
    }
    getMarketData();
  }, []);
  
  const getInvestmentAdvice = () => {
    if (expenses.length === 0) {
      return {
        message: "Start tracking your expenses to get personalized investment recommendations",
        type: "info",
        icon: AlertCircle
      };
    }
    if (remaining > 500) {
      // ADD THIS: Enhanced message with market context
      const marketTip = marketAdvice?.trend === 'bullish' 
        ? "Consider growth stocks like tech" 
        : "Look for value stocks or ETFs";
      return {
        message: `Excellent! You have $${remaining.toFixed(2)} surplus. ${marketTip}`,
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
      
      {/* Investment Advice Card - This stays exactly as you have it */}
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
      
      {/* ADD THIS: Real Market Data Card - New section below your advice card */}
      <div className="mt-4 bg-white rounded-lg shadow border p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-900 flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Live Market Snapshot
          </h3>
          {loadingMarket && <Loader className="h-4 w-4 animate-spin text-gray-400" />}
        </div>
        
        {!loadingMarket && marketAdvice ? (
          <div>
            <p className="text-sm text-gray-600">
              Market is currently <span className={marketAdvice.trend === 'bullish' ? 'text-green-600' : 'text-red-600'}>
                {marketAdvice.trend === 'bullish' ? 'bullish' : 'bearish'}
              </span>
            </p>
            <div className="mt-3 flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-500">Top Stock</span>
                <p className="font-semibold text-lg">{marketAdvice.symbol}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Price</span>
                <p className="font-semibold text-lg">${marketAdvice.price?.toFixed(2)}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Change</span>
                <p className={`font-semibold text-lg ${marketAdvice.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {marketAdvice.change?.toFixed(2)}%
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              Data from Marketstack API • Updated in real-time
            </p>
          </div>
        ) : (
          !loadingMarket && (
            <p className="text-sm text-gray-500 text-center py-4">
              Connect to API for live market data
            </p>
          )
        )}
      </div>
    </div>
  );
}