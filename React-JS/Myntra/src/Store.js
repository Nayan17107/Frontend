import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Services/Reducers/ProductReducer';

export const store = configureStore({
    reducer: {
        products: productReducer,
    }
});