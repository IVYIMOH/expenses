consolidate my read me file be precise without missing the important parts Repository: ivyimoh/expenses
Files analyzed: 23

Estimated tokens: 24.1k

Directory structure:
└── ivyimoh-expenses/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── tailwind.config.js
    ├── vite.config.js
    └── src/
        ├── App.jsx
        ├── firebase.js
        ├── index.css
        ├── main.jsx
        ├── components/
        │   ├── ExpenseModal.jsx
        │   ├── Layout.jsx
        │   └── ProtectedRoute.jsx
        ├── contexts/
        │   └── AppContext.jsx
        ├── pages/
        │   ├── Budget.jsx
        │   ├── Dashboard.jsx
        │   ├── Expenses.jsx
        │   ├── Learning.jsx
        │   ├── Login.jsx
        │   ├── Market.jsx
        │   └── Reports.jsx
        └── services/
            ├── learningData.js
            └── stockApi.js


================================================
FILE: README.md
================================================
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



================================================
FILE: eslint.config.js
================================================
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])



================================================
FILE: index.html
================================================
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#CC5500" />
    <title>OkoaPesa</title>
  </head>
  <body>
    <div id="root">
      <div class="loading-screen" id="loadingScreen">
        <div class="loader">
          <div class="loader-ring"></div>
          <div class="loader-ring"></div>
          <div class="loader-ring"></div>
        </div>
        <div class="loading-text">
          OkoaPesa<span class="loading-dots"><span>.</span><span>.</span><span>.</span></span>
        </div>
        <div class="loading-progress">
          <div class="loading-progress-bar"></div>
        </div>
      </div>
    </div>
    <script type="module" src="/src/main.jsx"></script>
    <script>
      setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
          loadingScreen.style.opacity = '0';
          setTimeout(() => loadingScreen.style.display = 'none', 500);
        }
      }, 1500);
    </script>
  </body>
</html>


================================================
FILE: package.json
================================================
{
  "name": "okoapesa",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "date-fns": "^4.1.0",
    "firebase": "^12.11.0",
    "lucide-react": "^1.7.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^7.13.2",
    "recharts": "^3.8.1",
    "sonner": "^2.0.7"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.4",
    "@tailwindcss/postcss": "^4.2.2",
    "@tailwindcss/vite": "^4.2.2",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.27",
    "eslint": "^9.39.4",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.4.0",
    "postcss": "^8.5.8",
    "tailwindcss": "^4.2.2",
    "vite": "^5.4.0"
  },
  "description": "This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.",
  "main": "eslint.config.js",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/IVYIMOH/expenses.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/IVYIMOH/expenses/issues"
  },
  "homepage": "https://github.com/IVYIMOH/expenses#readme"
}



================================================
FILE: tailwind.config.js
================================================
[Non-text file]


================================================
FILE: vite.config.js
================================================
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),  // ← This is important for v4
  ],
})


================================================
FILE: src/App.jsx
================================================
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Expenses from './pages/Expenses';
import Budget from './pages/Budget';
import Reports from './pages/Reports';
import Market from './pages/Market';
import Learning from './pages/Learning';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Toaster position="top-right" richColors />
      <Routes>
        {/* Login is public */}
        <Route path="/login" element={<Login />} />
        
        {/* All other routes are protected */}
        <Route path="/" element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }>
          <Route index element={<Dashboard />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="budget" element={<Budget />} />
          <Route path="reports" element={<Reports />} />
          <Route path="market" element={<Market />} />
          <Route path="learning" element={<Learning />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;


================================================
FILE: src/firebase.js
================================================
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage, analytics };


================================================
FILE: src/index.css
================================================
@import "tailwindcss";

/* Your custom styles below */
body {
  margin: 0;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
}

/* Custom scrollbar - Gold/Burnt Orange/Lime Green */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: #2C1810;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #FFD700, #FFA500);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #FFE55C, #FFB347);
}

/* Loading Animation */
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #2C1810 0%, #3A1F15 50%, #4A2A1F 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity 0.6s ease-out;
}

.loader {
  position: relative;
  width: 80px;
  height: 80px;
}

.loader-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 4px solid transparent;
  border-radius: 50%;
  animation: spin 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
}

.loader-ring:nth-child(1) {
  border-top-color: #FFD700;
  border-left-color: #FFD700;
  animation-delay: -0.45s;
}

.loader-ring:nth-child(2) {
  border-right-color: #CC5500;
  border-bottom-color: #CC5500;
  width: 70%;
  height: 70%;
  top: 15%;
  left: 15%;
  animation-delay: -0.3s;
}

.loader-ring:nth-child(3) {
  border-top-color: #32CD32;
  border-right-color: #32CD32;
  width: 40%;
  height: 40%;
  top: 30%;
  left: 30%;
  animation-delay: -0.15s;
}

.loading-text {
  margin-top: 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: linear-gradient(135deg, #FFD700, #FFA500, #32CD32);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: pulse 1.5s ease-in-out infinite;
}

.loading-dots {
  display: inline-flex;
  gap: 6px;
  margin-left: 4px;
}

.loading-dots span {
  animation: bounce 1.4s ease-in-out infinite;
}

.loading-progress {
  margin-top: 2rem;
  width: 200px;
  height: 3px;
  background: rgba(255, 215, 0, 0.2);
  border-radius: 3px;
  overflow: hidden;
}

.loading-progress-bar {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, #FFD700, #CC5500, #32CD32);
  border-radius: 3px;
  animation: progress 2s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

@keyframes bounce {
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.5; }
  40% { transform: scale(1.2); opacity: 1; }
}

@keyframes progress {
  0% { width: 0%; }
  50% { width: 70%; }
  100% { width: 100%; }
}


================================================
FILE: src/main.jsx
================================================
// main.jsx - Update this
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AppProvider } from './contexts/AppContext'; // Add this

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider> {/* Add this wrapper */}
      <App />
    </AppProvider>
  </React.StrictMode>
);


================================================
FILE: src/components/ExpenseModal.jsx
================================================
import { useState } from 'react';
import { X } from 'lucide-react';

export default function ExpenseModal({ isOpen, onClose, onSubmit, editingExpense }) {
  const [description, setDescription] = useState(editingExpense?.description || '');
  const [amount, setAmount] = useState(editingExpense?.amount || '');
  const [category, setCategory] = useState(editingExpense?.category || 'Food');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ 
      description, 
      amount: parseFloat(amount), 
      category,
      date: new Date().toISOString()
    });
    setDescription('');
    setAmount('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Add Expense</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Grocery shopping"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Amount ($)</label>
            <input
              type="number"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="0.00"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Food</option>
              <option>Transport</option>
              <option>Entertainment</option>
              <option>Bills</option>
              <option>Shopping</option>
              <option>Healthcare</option>
              <option>Education</option>
              <option>Other</option>
            </select>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Save Expense
          </button>
        </form>
      </div>
    </div>
  );
}


================================================
FILE: src/components/Layout.jsx
================================================
import { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { 
  Home, Receipt, Target, BarChart3, TrendingUp, BookOpen, 
  Menu, X, Bell, LogOut, User 
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', to: '/', icon: Home },
  { name: 'Expenses', to: '/expenses', icon: Receipt },
  { name: 'Budget', to: '/budget', icon: Target },
  { name: 'Reports', to: '/reports', icon: BarChart3 },
  { name: 'Market', to: '/market', icon: TrendingUp },
  { name: 'Learn', to: '/learning', icon: BookOpen },
];

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  // Get current user from localStorage
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  
  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo Section */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-1.5 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="ml-3">
                  <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Okoa Pesa
                  </span>
                  <span className="hidden md:inline-block ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                    Smart Investing
                  </span>
                </div>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:ml-8 md:flex md:space-x-1">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-blue-50 text-blue-700 shadow-sm'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }`
                    }
                  >
                    <item.icon className={`h-4 w-4 mr-2`} />
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Notification Bell */}
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition">
                <Bell className="h-5 w-5" />
              </button>
              
              {/* User Menu */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-3 p-1.5 rounded-lg">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                    <span className="text-sm font-medium text-white">
                      {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
                    </span>
                  </div>
                  <div className="hidden lg:block text-left">
                    <p className="text-sm font-medium text-gray-700">
                      {currentUser.name || 'Guest User'}
                    </p>
                    <p className="text-xs text-gray-500">
                      {currentUser.isDemo ? 'Demo Account' : 'Free Plan'}
                    </p>
                  </div>
                </div>
                
                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                  title="Logout"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-2">
              {/* Mobile Logout Button */}
              <button
                onClick={handleLogout}
                className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                title="Logout"
              >
                <LogOut className="h-5 w-5" />
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-3 rounded-lg text-sm font-medium transition ${
                      isActive
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`
                  }
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.name}
                </NavLink>
              ))}
              
              {/* Mobile Divider */}
              <div className="border-t border-gray-200 my-2"></div>
              
              {/* Mobile User Info */}
              <div className="px-3 py-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                      <span className="text-sm font-medium text-white">
                        {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        {currentUser.name || 'Guest User'}
                      </p>
                      <p className="text-xs text-gray-500">
                        {currentUser.isDemo ? 'Demo Account' : 'Free Plan'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white/50 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-gray-400" />
              <p className="text-sm text-gray-500">
                © 2026 OkoaPesa. Smart investing starts here.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition">Privacy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition">Terms</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


================================================
FILE: src/components/ProtectedRoute.jsx
================================================
// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const currentUser = localStorage.getItem('currentUser');
  
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}


================================================
FILE: src/contexts/AppContext.jsx
================================================
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


================================================
FILE: src/pages/Budget.jsx
================================================
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


================================================
FILE: src/pages/Dashboard.jsx
================================================
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


================================================
FILE: src/pages/Expenses.jsx
================================================
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


================================================
FILE: src/pages/Learning.jsx
================================================
// src/pages/Learning.jsx
import { useState, useEffect } from 'react';
import { 
  BookOpen, Clock, Award, ChevronRight, FileText, Users, 
  CheckCircle, Circle, TrendingUp, Shield, Target, Gem,
  ArrowLeft, Trophy, Star, Sparkles
} from 'lucide-react';
import { 
  learningModules, 
  getUserProgress, 
  saveProgress, 
  calculateModuleProgress,
  getOverallProgress 
} from '../services/learningData';

export default function Learning() {
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [progress, setProgress] = useState({});
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState({});
  const [overallProgress, setOverallProgress] = useState(0);

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = () => {
    const savedProgress = getUserProgress();
    setProgress(savedProgress);
    setOverallProgress(getOverallProgress());
  };

  const getLevelColor = (level) => {
    switch(level) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'Advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getIcon = (iconName) => {
    switch(iconName) {
      case '📈': return <TrendingUp className="h-8 w-8 text-blue-600" />;
      case '🛡️': return <Shield className="h-8 w-8 text-blue-600" />;
      case '🎯': return <Target className="h-8 w-8 text-blue-600" />;
      case '💎': return <Gem className="h-8 w-8 text-blue-600" />;
      default: return <BookOpen className="h-8 w-8 text-blue-600" />;
    }
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case 'reading': return <FileText className="h-4 w-4" />;
      case 'interactive': return <Users className="h-4 w-4" />;
      case 'quiz': return <Award className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'reading': return 'bg-blue-100 text-blue-700';
      case 'interactive': return 'bg-purple-100 text-purple-700';
      case 'quiz': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const handleCompleteLesson = (moduleId, lessonId) => {
    saveProgress(moduleId, lessonId);
    loadProgress();
  };

  const isLessonCompleted = (moduleId, lessonId) => {
    return progress[moduleId]?.[lessonId] || false;
  };

  const handleQuizSubmit = (lessonId, quiz) => {
    const answers = quizAnswers[lessonId] || {};
    let correctCount = 0;
    
    quiz.forEach((q, idx) => {
      if (answers[idx] === q.correct) {
        correctCount++;
      }
    });
    
    const score = Math.round((correctCount / quiz.length) * 100);
    setQuizSubmitted({ ...quizSubmitted, [lessonId]: score });
    
    if (score >= 70) {
      // Auto-mark lesson as complete if score is 70% or higher
      const module = learningModules.find(m => 
        m.modules.some(l => l.id === lessonId)
      );
      if (module && !isLessonCompleted(module.id, lessonId)) {
        handleCompleteLesson(module.id, lessonId);
      }
    }
    
    return score;
  };

  // Lesson Detail View
  if (selectedLesson && selectedModule) {
    const lesson = selectedModule.modules.find(m => m.id === selectedLesson);
    const content = lesson.content;
    const isCompleted = isLessonCompleted(selectedModule.id, lesson.id);
    const quizScore = quizSubmitted[lesson.id];
    
    return (
      <div className="max-w-4xl mx-auto p-6">
        <button
          onClick={() => setSelectedLesson(null)}
          className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to {selectedModule.title}
        </button>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className={`bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white`}>
            <div className="flex items-center gap-3 mb-2">
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(lesson.type)} bg-white/20`}>
                {lesson.type.toUpperCase()}
              </div>
              <span className="text-sm opacity-90">{lesson.duration}</span>
              {isCompleted && (
                <span className="flex items-center gap-1 text-sm bg-green-500/20 px-2 py-1 rounded-full">
                  <CheckCircle className="h-3 w-3" />
                  Completed
                </span>
              )}
            </div>
            <h1 className="text-2xl font-bold">{lesson.title}</h1>
          </div>
          
          <div className="p-6">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">{content.text}</p>
              
              {content.keyPoints && (
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Key Takeaways
                  </h4>
                  <ul className="space-y-2">
                    {content.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-blue-800">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {content.steps && (
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    Step-by-Step Guide
                  </h4>
                  <ol className="space-y-2 list-decimal list-inside">
                    {content.steps.map((step, idx) => (
                      <li key={idx} className="text-green-800">{step}</li>
                    ))}
                  </ol>
                </div>
              )}

              {content.quiz && (
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <h4 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    Knowledge Check
                  </h4>
                  
                  {quizScore !== undefined ? (
                    <div className="text-center py-4">
                      <div className="text-4xl font-bold text-orange-600 mb-2">{quizScore}%</div>
                      <p className="text-orange-700">
                        {quizScore >= 70 ? 'Great job! You passed the quiz!' : 'Try again to improve your score!'}
                      </p>
                    </div>
                  ) : (
                    <>
                      {content.quiz.map((q, idx) => (
                        <div key={idx} className="mb-4">
                          <p className="font-medium text-orange-800 mb-2">{idx + 1}. {q.question}</p>
                          <div className="space-y-2 ml-4">
                            {q.options.map((opt, optIdx) => (
                              <label key={optIdx} className="flex items-center gap-2 p-2 rounded hover:bg-orange-100 cursor-pointer">
                                <input
                                  type="radio"
                                  name={`quiz-${lesson.id}-${idx}`}
                                  value={optIdx}
                                  onChange={(e) => {
                                    const newAnswers = { ...quizAnswers };
                                    if (!newAnswers[lesson.id]) newAnswers[lesson.id] = {};
                                    newAnswers[lesson.id][idx] = parseInt(e.target.value);
                                    setQuizAnswers(newAnswers);
                                  }}
                                  className="text-orange-600"
                                />
                                <span className="text-orange-700">{opt}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      ))}
                      <button
                        onClick={() => {
                          const score = handleQuizSubmit(lesson.id, content.quiz);
                          alert(`You scored ${score}%! ${score >= 70 ? 'Lesson marked as complete!' : 'Try again to get 70% or higher.'}`);
                        }}
                        className="mt-4 bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700"
                      >
                        Submit Quiz
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>

            <div className="flex justify-end pt-6 mt-6 border-t">
              {!isCompleted && !quizScore && (
                <button
                  onClick={() => handleCompleteLesson(selectedModule.id, lesson.id)}
                  className="px-6 py-2 rounded-lg font-medium bg-green-600 text-white hover:bg-green-700 transition"
                >
                  Mark as Complete
                </button>
              )}
              {isCompleted && (
                <span className="px-6 py-2 rounded-lg font-medium bg-green-100 text-green-700">
                  ✓ Completed
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Module Detail View (Lessons List)
  if (selectedModule) {
    const moduleProgress = calculateModuleProgress(selectedModule);
    const completedCount = Object.values(progress[selectedModule.id] || {}).filter(Boolean).length;
    
    return (
      <div className="p-6">
        <button
          onClick={() => setSelectedModule(null)}
          className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Courses
        </button>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl">{selectedModule.icon}</div>
              <div>
                <h1 className="text-3xl font-bold">{selectedModule.title}</h1>
                <p className="mt-2 opacity-90">{selectedModule.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{selectedModule.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span>{selectedModule.lessons} lessons</span>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(selectedModule.level)} bg-white/20`}>
                {selectedModule.level}
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">Course Progress</span>
                <span>{Math.round(moduleProgress)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 rounded-full h-2 transition-all"
                  style={{ width: `${moduleProgress}%` }}
                />
              </div>
              <p className="text-sm text-gray-500 mt-2">{completedCount} of {selectedModule.modules.length} lessons completed</p>
            </div>
            
            <div className="space-y-3">
              {selectedModule.modules.map((lesson, idx) => (
                <div
                  key={lesson.id}
                  onClick={() => setSelectedLesson(lesson.id)}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition"
                >
                  <div className="flex items-center gap-4">
                    <div>
                      {isLessonCompleted(selectedModule.id, lesson.id) ? 
                        <CheckCircle className="h-6 w-6 text-green-500" /> : 
                        <Circle className="h-6 w-6 text-gray-300" />
                      }
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm text-gray-500">Lesson {idx + 1}</span>
                        <div className={`flex items-center gap-1 text-xs px-2 py-0.5 rounded-full ${getTypeColor(lesson.type)}`}>
                          {getTypeIcon(lesson.type)}
                          <span className="capitalize">{lesson.type}</span>
                        </div>
                        <span className="text-xs text-gray-400">• {lesson.duration}</span>
                      </div>
                      <h3 className="font-semibold text-gray-900">{lesson.title}</h3>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Course Catalog View
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Learning Center</h1>
        <p className="text-gray-500 mt-1">Master the art of investing with our expert-led courses</p>
        
        {/* Overall Progress Card */}
        <div className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Your Overall Progress</p>
              <p className="text-2xl font-bold">{Math.round(overallProgress)}%</p>
            </div>
            <Trophy className="h-8 w-8 opacity-75" />
          </div>
          <div className="w-full bg-white/20 rounded-full h-2 mt-2">
            <div 
              className="bg-white rounded-full h-2 transition-all"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {learningModules.map((module) => {
          const moduleProgress = calculateModuleProgress(module);
          return (
            <div
              key={module.id}
              onClick={() => setSelectedModule(module)}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition cursor-pointer"
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  {getIcon(module.icon)}
                  <span className={`text-xs px-2 py-1 rounded ${getLevelColor(module.level)}`}>
                    {module.level}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mt-3">{module.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{module.description}</p>
                <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{module.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{module.lessons} lessons</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-500">Progress</span>
                    <span className="text-gray-700 font-medium">{Math.round(moduleProgress)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div 
                      className="bg-blue-600 rounded-full h-1.5 transition-all"
                      style={{ width: `${moduleProgress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


================================================
FILE: src/pages/Login.jsx
================================================
// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, Mail, Lock, Eye, EyeOff, User, AlertCircle, CheckCircle } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    // Clear success message when user starts typing
    if (successMessage) {
      setSuccessMessage('');
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!isLogin) {
      if (!formData.name.trim()) {
        newErrors.name = 'Full name is required';
      } else if (formData.name.length < 2) {
        newErrors.name = 'Name must be at least 2 characters';
      }
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!isLogin) {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.email === formData.email && u.password === formData.password);
      
      if (user) {
        // Save current user (without password)
        const { password, ...userWithoutPassword } = user;
        localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
        navigate('/');
      } else {
        setErrors({ submit: 'Invalid email or password' });
      }
      setLoading(false);
    }, 800);
  };

  // Handle signup
  const handleSignup = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const userExists = users.some(u => u.email === formData.email);
      
      if (userExists) {
        setErrors({ submit: 'This email is already registered. Please login instead.' });
        setLoading(false);
      } else {
        const newUser = {
          id: Date.now(),
          name: formData.name.trim(),
          email: formData.email,
          password: formData.password,
          createdAt: new Date().toISOString()
        };
        
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        // Auto login after signup
        const { password, ...userWithoutPassword } = newUser;
        localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
        
        setSuccessMessage('Account created successfully! Redirecting...');
        
        setTimeout(() => {
          navigate('/');
        }, 1000);
      }
      setLoading(false);
    }, 800);
  };

  // Switch between login and signup
  const toggleMode = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setSuccessMessage('');
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>
      
      {/* Login Card */}
      <div className="relative w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-lg">
            <TrendingUp className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mt-4">Okoa Pesa</h1>
          <p className="text-gray-300 mt-2">Track expenses & invest smarter</p>
        </div>
        
        {/* Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8">
          {/* Toggle Buttons */}
          <div className="flex gap-2 mb-6 bg-white/5 rounded-lg p-1">
            <button
              onClick={toggleMode}
              className={`flex-1 py-2 rounded-lg font-medium transition ${
                isLogin 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Login
            </button>
            <button
              onClick={toggleMode}
              className={`flex-1 py-2 rounded-lg font-medium transition ${
                !isLogin 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Sign Up
            </button>
          </div>
          
          {/* Success Message */}
          {successMessage && (
            <div className="mb-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-2 text-green-400 text-sm">
              <CheckCircle className="h-4 w-4" />
              {successMessage}
            </div>
          )}
          
          {/* Error Message */}
          {errors.submit && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2 text-red-400 text-sm">
              <AlertCircle className="h-4 w-4" />
              {errors.submit}
            </div>
          )}
          
          {/* Form */}
          <form onSubmit={isLogin ? handleLogin : handleSignup} className="space-y-4">
            {/* Name Field - Only for Signup */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 transition text-white ${
                      errors.name ? 'border-red-500 focus:ring-red-500' : 'border-white/20 focus:ring-blue-500'
                    }`}
                    placeholder="John Doe"
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                )}
              </div>
            )}
            
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 transition text-white ${
                    errors.email ? 'border-red-500 focus:ring-red-500' : 'border-white/20 focus:ring-blue-500'
                  }`}
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-xs text-red-400">{errors.email}</p>
              )}
            </div>
            
            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-12 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 transition text-white ${
                    errors.password ? 'border-red-500 focus:ring-red-500' : 'border-white/20 focus:ring-blue-500'
                  }`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-xs text-red-400">{errors.password}</p>
              )}
              {isLogin && (
                <p className="mt-1 text-xs text-gray-400">Password must be at least 6 characters</p>
              )}
            </div>
            
            {/* Confirm Password - Only for Signup */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-12 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 transition text-white ${
                      errors.confirmPassword ? 'border-red-500 focus:ring-red-500' : 'border-white/20 focus:ring-blue-500'
                    }`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-xs text-red-400">{errors.confirmPassword}</p>
                )}
              </div>
            )}
            
            {/* Forgot Password - Only for Login */}
            {isLogin && (
              <div className="flex justify-end">
                <a href="#" className="text-sm text-blue-400 hover:text-blue-300 transition">
                  Forgot password?
                </a>
              </div>
            )}
            
            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  {isLogin ? 'Logging in...' : 'Creating account...'}
                </>
              ) : (
                <>
                  {isLogin ? 'Login' : 'Create Account'}
                </>
              )}
            </button>
          </form>
          
          {/* Terms */}
          <p className="text-center text-xs text-gray-400 mt-6">
            By continuing, you agree to our{' '}
            <a href="#" className="text-blue-400 hover:text-blue-300">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-blue-400 hover:text-blue-300">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}


================================================
FILE: src/pages/Market.jsx
================================================
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


================================================
FILE: src/pages/Reports.jsx
================================================
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


================================================
FILE: src/services/learningData.js
================================================
// src/services/learningData.js
export const learningModules = [
  {
    id: 1,
    title: "Stock Market Basics",
    level: "Beginner",
    duration: "25 min",
    description: "Learn how the stock market works and basic investment concepts",
    icon: "📈",
    lessons: 4,
    modules: [
      {
        id: "1-1",
        title: "What is the Stock Market?",
        type: "reading",
        duration: "8 min",
        content: {
          text: "The stock market is a marketplace where investors buy and sell ownership shares of publicly traded companies. Think of it as a giant auction house where company ownership is traded daily.",
          keyPoints: [
            "Companies sell shares to raise capital for growth",
            "Investors buy shares to own a piece of the company",
            "Stock prices fluctuate based on supply and demand",
            "Major exchanges: NYSE (New York Stock Exchange) and NASDAQ"
          ]
        }
      },
      {
        id: "1-2",
        title: "Types of Stocks",
        type: "reading",
        duration: "10 min",
        content: {
          text: "Stocks come in different types. Common stocks give voting rights, while preferred stocks offer fixed dividends.",
          keyPoints: [
            "Common Stock: Voting rights, potential dividends",
            "Preferred Stock: Fixed dividends, no voting rights",
            "Growth Stocks: High potential, higher risk",
            "Value Stocks: Undervalued, stable companies",
            "Blue-Chip Stocks: Large, established companies"
          ]
        }
      },
      {
        id: "1-3",
        title: "How to Buy Your First Stock",
        type: "interactive",
        duration: "7 min",
        content: {
          text: "To buy stocks, you need a brokerage account. Research companies and place your order.",
          steps: [
            "Open a brokerage account (Robinhood, Fidelity, Charles Schwab)",
            "Fund your account with money to invest",
            "Research companies you believe in",
            "Place your trade (market order or limit order)",
            "Track your investment over time"
          ]
        }
      },
      {
        id: "1-4",
        title: "Quick Quiz",
        type: "quiz",
        duration: "5 min",
        content: {
          text: "Test your knowledge of stock market basics.",
          quiz: [
            {
              question: "What is a stock?",
              options: ["A loan to a company", "A share of ownership in a company", "A government bond", "A savings account"],
              correct: 1
            },
            {
              question: "What does NYSE stand for?",
              options: ["National Yield Stock Exchange", "New York Stock Exchange", "North American Stock Exchange", "New Year Stock Exchange"],
              correct: 1
            }
          ]
        }
      }
    ]
  },
  {
    id: 2,
    title: "Understanding Risk",
    level: "Beginner",
    duration: "20 min",
    description: "Risk management strategies for new investors",
    icon: "🛡️",
    lessons: 3,
    modules: [
      {
        id: "2-1",
        title: "Types of Investment Risk",
        type: "reading",
        duration: "8 min",
        content: {
          text: "Every investment carries risk. Understanding different types of risk helps you make informed decisions.",
          keyPoints: [
            "Market Risk: Overall market declines",
            "Company Risk: Individual company problems",
            "Inflation Risk: Purchasing power loss",
            "Interest Rate Risk: Bond prices fall when rates rise"
          ]
        }
      },
      {
        id: "2-2",
        title: "Diversification Strategy",
        type: "reading",
        duration: "7 min",
        content: {
          text: "Don't put all your eggs in one basket. Diversification spreads investments across different assets.",
          strategies: [
            "Across different industries",
            "Across different company sizes",
            "Across different countries",
            "Using ETFs for instant diversification"
          ]
        }
      },
      {
        id: "2-3",
        title: "Risk Tolerance Quiz",
        type: "quiz",
        duration: "5 min",
        content: {
          text: "Take this quiz to understand your risk tolerance.",
          quiz: [
            {
              question: "If your portfolio dropped 20%, what would you do?",
              options: ["Sell everything", "Wait it out", "Buy more", "Consult an advisor"],
              correct: 1
            },
            {
              question: "What's your investment time horizon?",
              options: ["< 1 year", "1-3 years", "3-10 years", "10+ years"],
              correct: 3
            }
          ]
        }
      }
    ]
  },
  {
    id: 3,
    title: "Portfolio Diversification",
    level: "Intermediate",
    duration: "25 min",
    description: "Build a balanced portfolio across different asset classes",
    icon: "🎯",
    lessons: 3,
    modules: [
      {
        id: "3-1",
        title: "Asset Allocation Basics",
        type: "reading",
        duration: "10 min",
        content: {
          text: "Asset allocation is how you divide your investments across different asset classes.",
          keyPoints: [
            "Young (20s-30s): 80-90% stocks, 10-20% bonds",
            "Mid-career (40s-50s): 60-70% stocks, 30-40% bonds",
            "Near retirement (60+): 40-50% stocks, 50-60% bonds"
          ]
        }
      },
      {
        id: "3-2",
        title: "Understanding ETFs",
        type: "reading",
        duration: "8 min",
        content: {
          text: "ETFs offer instant diversification at low cost.",
          keyPoints: [
            "VOO: S&P 500 ETF",
            "QQQ: Technology ETF",
            "VTI: Total Stock Market ETF",
            "BND: Total Bond Market ETF"
          ]
        }
      },
      {
        id: "3-3",
        title: "Sample Portfolio",
        type: "interactive",
        duration: "7 min",
        content: {
          text: "Sample diversified portfolio for a 30-year-old investor:",
          steps: [
            "40% - US Large Cap Stocks (VOO)",
            "20% - International Stocks (VXUS)",
            "15% - US Small/Mid Cap Stocks (VB)",
            "15% - Technology Sector (QQQ)",
            "10% - Bonds (BND)"
          ]
        }
      }
    ]
  },
  {
    id: 4,
    title: "Value Investing",
    level: "Advanced",
    duration: "30 min",
    description: "Learn Warren Buffett's investment philosophy",
    icon: "💎",
    lessons: 4,
    modules: [
      {
        id: "4-1",
        title: "Fundamental Analysis",
        type: "reading",
        duration: "10 min",
        content: {
          text: "Fundamental analysis evaluates a company's financial health.",
          keyPoints: [
            "P/E Ratio: Price to Earnings",
            "P/B Ratio: Price to Book",
            "Debt-to-Equity: Financial leverage",
            "ROE: Return on Equity"
          ]
        }
      },
      {
        id: "4-2",
        title: "Margin of Safety",
        type: "reading",
        duration: "7 min",
        content: {
          text: "Buy stocks at a discount to their intrinsic value.",
          keyPoints: [
            "Buy at 20-30% below intrinsic value",
            "Wait for market pessimism",
            "Focus on quality companies"
          ]
        }
      },
      {
        id: "4-3",
        title: "Warren Buffett's Principles",
        type: "reading",
        duration: "8 min",
        content: {
          text: "Follow the Oracle of Omaha's timeless wisdom:",
          keyPoints: [
            "Buy businesses, not stocks",
            "Invest in what you understand",
            "Look for companies with economic moats",
            "Hold for the long term"
          ]
        }
      },
      {
        id: "4-4",
        title: "Value Investing Quiz",
        type: "quiz",
        duration: "5 min",
        content: {
          text: "Test your understanding:",
          quiz: [
            {
              question: "What is the margin of safety?",
              options: ["Buying at lowest price", "Buying below intrinsic value", "Using stop losses", "Investing only in bonds"],
              correct: 1
            },
            {
              question: "What is an economic moat?",
              options: ["Cash reserves", "Competitive advantage", "Debt level", "Stock price"],
              correct: 1
            }
          ]
        }
      }
    ]
  }
];

// Get user progress from localStorage
export const getUserProgress = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const userId = currentUser.id || currentUser.email || 'guest';
  const saved = localStorage.getItem(`learningProgress_${userId}`);
  return saved ? JSON.parse(saved) : {};
};

// Save user progress
export const saveProgress = (moduleId, lessonId) => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const userId = currentUser.id || currentUser.email || 'guest';
  const progress = getUserProgress();
  
  if (!progress[moduleId]) progress[moduleId] = {};
  progress[moduleId][lessonId] = true;
  
  localStorage.setItem(`learningProgress_${userId}`, JSON.stringify(progress));
  return progress;
};

// Calculate module progress percentage
export const calculateModuleProgress = (module) => {
  const progress = getUserProgress();
  const moduleProgress = progress[module.id] || {};
  const completedLessons = Object.values(moduleProgress).filter(Boolean).length;
  return (completedLessons / module.modules.length) * 100;
};

// Get overall progress across all modules
export const getOverallProgress = () => {
  const progress = getUserProgress();
  const totalLessons = learningModules.reduce((sum, m) => sum + m.modules.length, 0);
  const completedLessons = learningModules.reduce((sum, m) => {
    const moduleProgress = progress[m.id] || {};
    return sum + Object.values(moduleProgress).filter(Boolean).length;
  }, 0);
  return (completedLessons / totalLessons) * 100;
};


================================================
FILE: src/services/stockApi.js
================================================
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
