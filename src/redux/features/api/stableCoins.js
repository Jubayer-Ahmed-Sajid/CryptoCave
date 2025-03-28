import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const stableCoins =createApi({
    reducerPath:'stableApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://api.coingecko.com/api/v3',
        prepareHeaders:(headers)=>{
            headers.set('x-cg-demo-api-key', process.env.NEXT_PUBLIC_API_KEY)
            return headers
        }
    }),
    endpoints:(builder)=>({
        getStableCoins:builder.query({
            query:()=>'/coins/markets?vs_currency=usd&ids=tether,usd-coin,dai'
        })
    })
})
export const {useGetStableCoinsQuery} = stableCoins;
