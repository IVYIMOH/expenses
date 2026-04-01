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