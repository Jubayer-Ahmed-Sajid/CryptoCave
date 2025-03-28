import { configureStore } from "@reduxjs/toolkit";
import coinsSlice from './features/coins/coinsSlice'
import { cryptoApi } from "./features/api/trendingCrypto";
import { topCoins } from "./features/api/topCoins";
import { stableCoins } from "./features/api/stableCoins";
import { topGainersLosers } from "./features/api/topGainersLosers";
import { globalMarket } from "./features/api/globalMarket";

const store = configureStore({
    reducer:{
        coins:coinsSlice.reducer,
        [cryptoApi.reducerPath]:cryptoApi.reducer,
        [topCoins.reducerPath]:topCoins.reducer,
        [stableCoins.reducerPath]:stableCoins.reducer,
        [topGainersLosers.reducerPath]:topGainersLosers.reducer,
        [globalMarket.reducerPath]:globalMarket.reducer

    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(cryptoApi.middleware, topCoins.middleware,stableCoins.middleware,topGainersLosers.middleware),
   
})

export default store;
