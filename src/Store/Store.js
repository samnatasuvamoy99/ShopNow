import { configureStore } from "@reduxjs/toolkit";

import Cartslice from "/src/Store/Cartslice.js"

import Productslice from "/src/Store/Middleware/Productslice.js"

const Store = configureStore({   // it will take reducer function 
         reducer:{
             cart:Cartslice,
             Product:Productslice,

         }
});


export  default Store;