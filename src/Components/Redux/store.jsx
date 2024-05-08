import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import cartReducer from './cartSlice';

// Crear el almacén con configureStore
const Store = configureStore({
    reducer: {
        filter: filterReducer,
        cart: cartReducer,
    },
});

export default Store;