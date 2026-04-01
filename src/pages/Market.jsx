// src/pages/Market.jsx
import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, RefreshCw, DollarSign } from 'lucide-react';
import { fetchStockQuotes } from '../services/stockApi';

export default function Market() {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  // Load stock data when component mounts
  useEffect(() => {
    loadStockData();
  }, []);

  const loadStockData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchStockQuotes();
      setStocks(data);
    } catch (err) {
      console.error("Failed to load stocks:", err);
      setError("Unable to fetch live market data. Showing demo data instead.");
    } finally {
      setLoading(false);
    }
  };

  const refreshData = async () => {
    setRefreshing(true);
    await loadStockData();
    setRefreshing(false);
  };

  if (loading && stocks.length === 0) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900">Market Overview</h1>
        <div className="mt-6 bg-white rounded-lg shadow border p-12 text-center">
          <div className="animate-pulse">
            <div className="h-8 w-32 bg-gray-200 rounded mx-auto mb-4"></div>
            <p className="text-gray-500">Loading market data...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Market Overview</h1>
          <p className="text-gray-500 mt-1">Real-time stock prices</p>
        </div>
        <button
          onClick={refreshData}
          disabled={refreshing}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
        >
          <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
          {refreshing ? 'Updating...' : 'Refresh'}
        </button>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800 text-sm">
          {error}
        </div>
      )}

      <div className="bg-white rounded-lg shadow border overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left p-4">Symbol</th>
              <th className="text-left p-4">Company</th>
              <th className="text-right p-4">Price</th>
              <th className="text-right p-4">Change</th>
              <th className="text-right p-4">Volume</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock) => (
              <tr key={stock.symbol} className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">{stock.symbol}</td>
                <td className="p-4 text-gray-600">{stock.name}</td>
                <td className="p-4 text-right">
                  ${stock.price?.toFixed(2) || '0.00'}
                </td>
                <td className={`p-4 text-right ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  <div className="flex items-center justify-end gap-1">
                    {stock.change >= 0 ? 
                      <TrendingUp className="h-4 w-4" /> : 
                      <TrendingDown className="h-4 w-4" />
                    }
                    {stock.change?.toFixed(2) || '0.00'}%
                  </div>
                </td>
                <td className="p-4 text-right text-gray-600">
                  {(stock.volume / 1000000).toFixed(1)}M
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* API Status Note */}
      <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex items-center gap-2">
          <DollarSign className="h-4 w-4 text-blue-600" />
          <p className="text-xs text-blue-800">
            Data provided by Marketstack API. Free tier: 100 requests/month.
            {stocks.length > 0 && ` Last updated: ${new Date().toLocaleTimeString()}`}
          </p>
        </div>
      </div>
    </div>
  );
}