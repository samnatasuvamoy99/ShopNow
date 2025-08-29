
import { createSlice } from "@reduxjs/toolkit";



const Cartslice = createSlice({
       name:'cart',
      initialState:{
           items: [],
        total: 0
      },
       
       // update the state using reducer
       reducers:{
            add(state , action){
                 /// redux // retrun [.....state , action.payload]
                 state.items.push(action.payload);

            if (action.payload.price) {
        state.total += action.payload.price;
      }
      },
     remove(state,action){
                 const itemToRemove = state.items.find((item) => item.id === action.payload);

  if (itemToRemove) {
    state.items = state.items.filter((item) => item.id !== action.payload);

    if (itemToRemove.price) {
      state.total -= itemToRemove.price;
    }
  }
       },
     }
})

// to create action directly
export const{add, remove} = Cartslice.actions;

//also create reducers

export default Cartslice.reducer;