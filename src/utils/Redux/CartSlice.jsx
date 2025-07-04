import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addItems:(state,action)=>{
            const exists=state.find(item=>item.id===action.payload.id)
            if(!exists){
            state.push(action.payload)
            }
        },
        removeItem:(state,action)=>{
          return state.filter(item=>item.id!==action.payload)
        }
    }
})

export const {addItems,removeItem} = CartSlice.actions;
export default CartSlice.reducer;
