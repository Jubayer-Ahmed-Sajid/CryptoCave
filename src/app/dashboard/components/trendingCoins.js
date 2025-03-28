'use client'
import { useGetCryptoQuery } from "@/redux/features/api/trendingCrypto";
import React from "react";
const TrendingCoins = () => {
    const { data: trendingCrypto, isLoading, isError, error } = useGetCryptoQuery();
  return (
    // Trending Cryptocurrencies
    <div className="bg-blue-900/50 rounded-xl p-6 shadow-lg mb-8">
      <h2 className="text-xl font-bold text-white mb-4">
        Trending Cryptocurrencies
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-white">
          <thead>
            <tr className="text-gray-300 border-b border-gray-700">
              <th className="text-left py-3 px-4">#</th>
              <th className="text-left py-3 px-4">Coin</th>
              <th className="text-right py-3 px-4">Price</th>
              <th className="text-right py-3 px-4">24h Change</th>
              <th className="text-right py-3 px-4">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {trendingCrypto?.coins?.slice(0, 10).map((coin, index) => (
              <tr
                key={coin.item.id}
                className="border-b border-gray-800 hover:bg-blue-800/30"
              >
                <td className="py-4 px-4">{index + 1}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <img
                      src={coin.item.small}
                      alt={coin.item.name}
                      className="w-6 h-6 mr-2"
                    />
                    <span>{coin.item.name}</span>
                    <span className="text-gray-400 ml-2">
                      {coin.item.symbol}
                    </span>
                  </div>
                </td>
                <td className="text-right py-4 px-4">
                  ${coin.item.price_btc.toFixed(8)}
                </td>
                <td
                  className={`text-right py-4 px-4 ${
                    index % 2 === 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {index % 2 === 0 ? "+" : "-"}
                  {Math.random().toFixed(2)}%
                </td>
                <td className="text-right py-4 px-4">
                  ${(Math.random() * 100).toFixed(2)}B
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrendingCoins;
