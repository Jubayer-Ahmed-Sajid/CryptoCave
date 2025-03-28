"use client";
import React from "react";
import { useGetTopCoinsQuery } from "@/redux/features/api/topCoins";
import CoinsCard from "./coinsCard";

const TopCoins = () => {
  const { data: topCoins, isLoading, isError, error } = useGetTopCoinsQuery();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;
  console.log("Top coins are...", topCoins);
  

  return (
    // Top coins
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {topCoins.slice(0, 4).map((coin) => (
       <CoinsCard key={coin.id} coin={coin}></CoinsCard>
      ))}
    </div>
  );
};

export default TopCoins;
