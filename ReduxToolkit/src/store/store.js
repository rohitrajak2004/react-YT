import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './feature/CounterSlice.jsx'
export const store = configureStore({
    reducer:{
        counter: counterReducer
    }  
})