import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProduct=createAsyncThunk('getProduct' ,async()=>{
    const res=await fetch('https://fakestoreapi.com/products')
    return res.json()
})



const productSlice=createSlice({
    name:"product",
    initialState:{
        isloading:false,
        isError:false,
        data:null
    },
    extraReducers :(builder)=>{
        builder.addCase(getProduct.pending ,(state,action)=>{
            state.isloading=true
        })
        builder.addCase(getProduct.fulfilled,(state,action)=>{
          
            state.isloading=false;
            state.data=action.payload;
        })
        builder.addCase(getProduct.rejected,(state,action)=>{
            state.isError=true
        })
    }
})
export const {isloading,isError}=productSlice.actions;
export default productSlice.reducer;