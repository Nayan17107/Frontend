import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Services/Reducers/ProductReducer';
import authReducer from './Services/Reducers/UserAuthReducer'; 

export const store = configureStore({
    reducer: {
        products: productReducer,
        auth: authReducer 
    }
});