"use client";
import React from "react";
import TopCoins from "./components/topCoins";
import MarketOverview from "./components/marketOverview";
import TrendingCoins from "./components/trendingCoins";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-blue-950">
      <div className="flex-1 overflow-auto p-6">
        <h1 className="text-2xl font-bold text-white mb-6">Dashboard</h1>
        {/* Stats Cards */}
        <TopCoins />
        {/* trending coins */}
        <TrendingCoins />
        {/* Recent Activity Section */}
        <MarketOverview />
      </div>
    </div>
  );
};

export default Dashboard;
