import React from "react";

const MarketOverview = () => {
  return (
    // Market Overview
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-blue-900/50 rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4">Market Overview</h2>
        <div className="h-64 bg-blue-800/30 rounded-lg flex items-center justify-center">
          <p className="text-gray-300">Chart Placeholder</p>
        </div>
      </div>

      <div className="bg-blue-900/50 rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4">Recent News</h2>
        <ul className="space-y-4">
          {[1, 2, 3].map((item) => (
            <li key={item} className="border-b border-blue-800 pb-3">
              <p className="text-gray-300 text-sm">March {20 + item}, 2025</p>
              <h3 className="text-white font-medium my-1">
                {item === 1
                  ? "Bitcoin breaks $100,000 for the first time"
                  : item === 2
                  ? "New regulations impact crypto markets"
                  : "Major exchange launches innovative trading features"}
              </h3>
              <p className="text-gray-400 text-sm">
                {item === 1
                  ? "The leading cryptocurrency reached a new all-time high today..."
                  : item === 2
                  ? "Lawmakers have introduced new guidelines that will affect..."
                  : "Users can now access advanced trading tools directly from their dashboard..."}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MarketOverview;
