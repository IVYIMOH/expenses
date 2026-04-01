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