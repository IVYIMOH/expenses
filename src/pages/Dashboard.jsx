export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      <p className="text-gray-500 mt-2">Welcome to Expense+Invest</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-6 border">
          <h3 className="font-semibold">Total Expenses</h3>
          <p className="text-2xl font-bold mt-2">$0.00</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border">
          <h3 className="font-semibold">Monthly Budget</h3>
          <p className="text-2xl font-bold mt-2">$0.00</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border">
          <h3 className="font-semibold">Remaining</h3>
          <p className="text-2xl font-bold mt-2">$0.00</p>
        </div>
      </div>
    </div>
  );
}