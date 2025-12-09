import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Services/Reducers/ProductReducer';
import { auth } from '../Config/firebase.config';

export const store = configureStore({
    reducer: {
        products: productReducer,
        auth: authReducer
    }
});