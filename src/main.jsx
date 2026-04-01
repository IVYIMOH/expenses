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