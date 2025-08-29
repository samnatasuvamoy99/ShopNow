// redux using api call
// middleware are use  for make this function 

import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";



// for status we are useing Enums
// also we are use  freeze method  as data does not changes anytime 


 export const STATUSES =Object.freeze({
      IDEL:'idle',
      ERROR:'error',
      LOADING:'loading',
})

const Productslice = createSlice({

       name:'Allproducts',
      initialState:{
           data: [], // for all product details
          status:STATUSES.IDEL,
      },
       
       // update the state using reducer
       reducers:{
             /* // for get the products
               setProducts(state , action){
                  state.data=action.payload;
               },
               setStatus(state, action){
                          state.status=action.payload;

                          */
               },
               

      
      extraReducers:(builder)=>{
                           builder
                           .addCase(fetchproducts.pending,(state , action)=>{
                                state.status=STATUSES.LOADING;
                           })
                           .addCase(fetchproducts.fulfilled , (state , action)=>{
                                 state.data=action.payload;
                                 state.status=STATUSES.IDEL;
                           })
                           .addCase(fetchproducts.rejected , ( state,action) =>{
                                   state.status=STATUSES.ERROR;
                           })

                  }
               });

// to create action directly
export const{setProducts, setStatus} = Productslice.actions;

//also create reducers

export default Productslice.reducer;



/*
// thunks middleware
export function fetchproducts(){
        return async function fetchproductsthunks(dispatch , getState){4

              dispatch(setStatus(STATUSES.LOADING));

              try{
                    const res = await fetch('https://fakestoreapi.com/products');
                         const data =  await res.json();
                         dispatch(setProducts(data));
                          dispatch(setStatus(STATUSES.IDEL));
              }
              catch(error){
                    console.log(error);
                    dispatch(setStatus(STATUSES.ERROR))
              }
        }
}
        */


export const fetchproducts = createAsyncThunk('products/fetch', async()=>{
 const res = await fetch('https://fakestoreapi.com/products');
                         const data =  await res.json();
                         return data;



})