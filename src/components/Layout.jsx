import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { 
  Home, Receipt, Target, BarChart3, TrendingUp, BookOpen, 
  Menu, X, User, Settings, LogOut, Bell, DollarSign 
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
                    Expense+Invest
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
                    <item.icon className={`h-4 w-4 mr-2 ${({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-500'}`} />
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
              <div className="relative">
                <button className="flex items-center space-x-3 p-1.5 rounded-lg hover:bg-gray-100 transition">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                    <span className="text-sm font-medium text-white">JD</span>
                  </div>
                  <div className="hidden lg:block text-left">
                    <p className="text-sm font-medium text-gray-700">John Doe</p>
                    <p className="text-xs text-gray-500">Free Plan</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center">
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
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                    <span className="text-sm font-medium text-white">JD</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">John Doe</p>
                    <p className="text-xs text-gray-500">Free Plan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Page Content with subtle background pattern */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="animate-fadeIn">
          <Outlet />
        </div>
      </main>

      {/* Optional Footer */}
      <footer className="border-t border-gray-200 bg-white/50 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-4 w-4 text-gray-400" />
              <p className="text-sm text-gray-500">
                © 2024 Expense+Invest. Smart investing starts here.
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

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}