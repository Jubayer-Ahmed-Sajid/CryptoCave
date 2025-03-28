import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const topCoins = createApi({
    reducerPath:'topCoins',
    baseQuery:fetchBaseQuery({baseUrl:'https://api.coingecko.com/api/v3',
        prepareHeaders:(headers, {getState})=>{
            headers.set('x-cg-demo-api-key', process.env.NEXT_PUBLIC_API_KEY)
            return headers
        }
    }),
    endpoints:(builder)=>({
        getTopCoins:builder.query({
            query:()=>'/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
        })
    })


})

export const {useGetTopCoinsQuery} = topCoins;