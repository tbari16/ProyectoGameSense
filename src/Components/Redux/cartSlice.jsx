import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find((i) => i.id === item.id); // Comparar por ID

            if (existingItem) {
                existingItem.cantidad += 1; // Incrementar la cantidad del producto existente
            } else {
                state.items.push({ ...item, cantidad: 1 }); // Agregar nuevo producto al carrito
            }
        },
        removeFromCart: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter((item) => item.id !== itemId); // Eliminar por ID
        },
        incrementQuantity: (state, action) => {
            const itemId = action.payload;
            const item = state.items.find((i) => i.id === itemId);
            if (item) {
                item.cantidad += 1; // Incrementar la cantidad
            }
        },
        decrementQuantity: (state, action) => {
            const itemId = action.payload;
            const item = state.items.find((i) => i.id === itemId);
            if (item && item.cantidad > 1) {
                item.cantidad -= 1; // Disminuir la cantidad, asegurando que no sea menor que 1
            }
        },
        clearCart: (state) => {
            state.items = []; // Vaciar el carrito
        },
    },
});

export const { addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
