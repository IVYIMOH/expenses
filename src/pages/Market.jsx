// pages/Market.jsx - Update this
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

const stocks = [
  { symbol: "AAPL", name: "Apple Inc.", price: 175.34, change: 2.3, volume: "65.2M" },
  { symbol: "MSFT", name: "Microsoft", price: 420.72, change: 1.8, volume: "22.1M" },
  { symbol: "GOOGL", name: "Google", price: 142.56, change: -0.5, volume: "18.3M" },
  { symbol: "AMZN", name: "Amazon", price: 178.23, change: 1.2, volume: "32.7M" },
  { symbol: "TSLA", name: "Tesla", price: 245.89, change: -2.1, volume: "78.4M" }
];

export default function Market() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900">Market Overview</h1>
      <p className="text-gray-500 mt-2">Top stocks to watch</p>
      
      <div className="mt-6 bg-white rounded-lg shadow border overflow-hidden">
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
                <td className="p-4 text-right">${stock.price}</td>
                <td className={`p-4 text-right ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  <div className="flex items-center justify-end gap-1">
                    {stock.change >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                    {stock.change}%
                  </div>
                </td>
                <td className="p-4 text-right text-gray-600">{stock.volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-blue-600" />
          <p className="text-sm text-blue-800">
            Based on your spending habits, consider diversifying into tech and green energy ETFs
          </p>
        </div>
      </div>
    </div>
  );
}