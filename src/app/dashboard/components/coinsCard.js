import React from 'react';
import Image from "next/image";
import { BiTrendingUp, BiTrendingDown } from "react-icons/bi";

const CoinsCard = ({coin}) => {
    const {name, image, current_price, price_change_percentage_24h} = coin;
    const priceChangeColor = price_change_percentage_24h > 0 ? "text-green-400" : "text-red-400";
    const priceChangeIcon = price_change_percentage_24h > 0 ? <BiTrendingUp className="mr-1" /> : <BiTrendingDown className="mr-1" />;
    const priceChange = price_change_percentage_24h > 0 ? `+${price_change_percentage_24h}` : price_change_percentage_24h;
    const formattedPrice = current_price.toLocaleString("en-US", {style: "currency", currency: "USD"});
    return (
        <div key={coin.id} className=" bg-cyan-900/60 rounded-xl p-5 shadow-lg">
          <div className="bg-cyan-900/60 rounded-xl p-5 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-300 font-medium"> {name} </h3>
              <Image src={image} alt={name} width={24} height={24} />
            </div>
            <p className="text-2xl font-bold text-white">{formattedPrice}</p>
            <p className={`${priceChangeColor} flex items-center mt-2`}>
           {priceChangeIcon}  {priceChange}% (24hours)
            </p>
          </div>

         

        </div>
    );
};

export default CoinsCard;