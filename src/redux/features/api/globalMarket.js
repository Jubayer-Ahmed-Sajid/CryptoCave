import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const globalMarket = createApi({
    reducerPath:'globalMarket',
    baseQuery:fetchBaseQuery({baseUrl:'https://api.coingecko.com/api/v3',
        prepareHeaders:(headers, {getState})=>{
            headers.set('x-cg-demo-api-key', process.env.NEXT_PUBLIC_API_KEY)
            return headers
        }

    }),
    endpoints:(builder)=>({
        getGlobalMarket:builder.query({
            query:()=>'/global'
        })
    })

})