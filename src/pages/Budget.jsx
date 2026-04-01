import { Plus } from 'lucide-react';

export default function Budget() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Budget</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
          <Plus className="h-5 w-5" />
          Set Budget
        </button>
      </div>
      <div className="bg-white rounded-lg shadow border p-6">
        <p className="text-gray-500 text-center">No budgets set for this month.</p>
      </div>
    </div>
  );
}