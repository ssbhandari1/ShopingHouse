import { createSlice } from "@reduxjs/toolkit";



const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
   state.push(action.payload)
       },
       removeToCart:(state,action)=>{
        state.pop(action.payload)
       }
     
    }
})
export  const {addToCart , removeToCart} =cartSlice.actions;
export default cartSlice.reducer;