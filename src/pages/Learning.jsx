// pages/Learning.jsx - Update this
import { BookOpen, Clock, Award } from 'lucide-react';

const modules = [
  {
    id: 1,
    title: "Stock Market Basics",
    level: "Beginner",
    duration: "15 min",
    description: "Learn how the stock market works and basic investment concepts"
  },
  {
    id: 2,
    title: "Understanding Risk",
    level: "Beginner",
    duration: "20 min",
    description: "Risk management strategies for new investors"
  },
  {
    id: 3,
    title: "Portfolio Diversification",
    level: "Intermediate",
    duration: "25 min",
    description: "Build a balanced portfolio across different asset classes"
  },
  {
    id: 4,
    title: "Value Investing",
    level: "Advanced",
    duration: "30 min",
    description: "Learn Warren Buffett's investment philosophy"
  }
];

export default function Learning() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900">Learning Center</h1>
      <p className="text-gray-500 mt-2">Master the art of investing</p>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {modules.map((module) => (
          <div key={module.id} className="bg-white rounded-lg shadow border p-6 hover:shadow-md transition">
            <div className="flex items-start justify-between">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className={`text-xs px-2 py-1 rounded ${
                module.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                module.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }`}>
                {module.level}
              </span>
            </div>
            <h3 className="text-lg font-semibold mt-3">{module.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{module.description}</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{module.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="h-4 w-4" />
                <span>Certificate</span>
              </div>
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Start Learning
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}