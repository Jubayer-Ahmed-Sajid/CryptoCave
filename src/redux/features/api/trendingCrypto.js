import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coingecko.com/api/v3',
        prepareHeaders:(headers, {getState})=>{
            headers.set('x-cg-demo-api-key', process.env.NEXT_PUBLIC_API_KEY)
            return headers
        }
     }),
    endpoints:(builder)=>({
        getCrypto:builder.query({
            query: () => '/search/trending',
        })
    })
})

export const {useGetCryptoQuery} = cryptoApi