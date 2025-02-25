import { fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { getBaseUrl } from "../../../utils/baseURL"

const authApi=createApi({
    reducerPath:"authApi",
    basQuey:fetchBaseQuery({
        baseUrl:`${getBaseUrl()}/api/auth`,
        credentials:'include',
    }),
    endpoints:(builder)=>({
        registerUser:builder.mutation({
            query:(newUser)=>({
                url:"/register",
                method:"POST",
                body:newUser
            })
        })
        loginUser:builder.mutation({
            query:(credentials)=>
        })
    })
})