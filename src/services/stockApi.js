// src/services/stockApi.js
// No new packages needed - uses built-in fetch!

// Replace with your actual API key from marketstack.com
const MARKETSTACK_API_KEY = "79700d7ef7386271d47ce4c481c5ef06 ";
const MARKETSTACK_BASE_URL = "http://api.marketstack.com/v2";

// Free stocks to track (all available on free tier)
const DEFAULT_STOCKS = ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA"];

/**
 * Fetch real-time stock quotes for multiple symbols
 * Uses Marketstack's end-of-day endpoint (free tier)
 */
export async function fetchStockQuotes(symbols = DEFAULT_STOCKS) {
  try {
    // Join symbols with commas for the API
    const symbolsParam = symbols.join(",");
    
    // Make the API request
    const response = await fetch(
      `${MARKETSTACK_BASE_URL}/eod/latest?access_key=${MARKETSTACK_API_KEY}&symbols=${symbolsParam}`
    );
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || "Failed to fetch stock data");
    }
    
    // Format the data for your app
    return formatMarketData(data);
    
  } catch (error) {
    console.error("API Error:", error);
    // Return fallback mock data if API fails
    return getMockStockData();
  }
}

/**
 * Fetch a single stock quote
 */
export async function fetchSingleStock(symbol) {
  const quotes = await fetchStockQuotes([symbol]);
  return quotes[0] || null;
}

/**
 * Format API response into a clean structure for your app
 */
function formatMarketData(apiResponse) {
  if (!apiResponse.data || !Array.isArray(apiResponse.data)) {
    return [];
  }
  
  return apiResponse.data.map(stock => ({
    symbol: stock.symbol,
    name: stock.name || stock.symbol,
    price: stock.close || stock.adj_close || 0,
    change: calculateChange(stock.open, stock.close),
    high: stock.high,
    low: stock.low,
    volume: stock.volume,
    currency: stock.currency || "USD",
    lastUpdated: stock.date
  }));
}

/**
 * Calculate price change percentage
 */
function calculateChange(open, close) {
  if (!open || !close || open === 0) return 0;
  return ((close - open) / open) * 100;
}

/**
 * Mock data for fallback (when API fails or rate limited)
 */
function getMockStockData() {
  return [
    { symbol: "AAPL", name: "Apple Inc.", price: 175.34, change: 2.3, high: 176.50, low: 174.20, volume: 65200000 },
    { symbol: "MSFT", name: "Microsoft", price: 420.72, change: 1.8, high: 422.50, low: 419.00, volume: 22100000 },
    { symbol: "GOOGL", name: "Alphabet", price: 142.56, change: -0.5, high: 143.80, low: 142.10, volume: 18300000 },
    { symbol: "AMZN", name: "Amazon", price: 178.23, change: 1.2, high: 179.50, low: 177.30, volume: 32700000 },
    { symbol: "TSLA", name: "Tesla", price: 245.89, change: -2.1, high: 251.20, low: 244.50, volume: 78400000 }
  ];
}