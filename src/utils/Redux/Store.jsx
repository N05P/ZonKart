import { configureStore } from "@reduxjs/toolkit";
import ApiSlice from './ApiSlice'
import CartSlice from './CartSlice'

const Store = configureStore({
    reducer:{
        apidata:ApiSlice,
        cart:CartSlice
    }
})

export default Store;