import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        añadirAlCart: (state, action) => {
            const item = action.payload;
            const existeItem = state.items.find((i) => i.id === item.id); // Comparar por ID

            if (existeItem) {
                existeItem.cantidad += 1; // Incrementar la cantidad del producto existente
            } else {
                state.items.push({ ...item, cantidad: 1 }); // Agregar nuevo producto al carrito
            }
        },
        removerDelCart: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter((item) => item.id !== itemId); // Eliminar por ID
        },
        incrementarCantidad: (state, action) => {
            const itemId = action.payload;
            const item = state.items.find((i) => i.id === itemId);
            if (item) {
                item.cantidad += 1; // Incrementar la cantidad
            }
        },
        decrementarCantidad: (state, action) => {
            const itemId = action.payload;
            const item = state.items.find((i) => i.id === itemId);
            if (item && item.cantidad > 1) {
                item.cantidad -= 1; // Disminuir la cantidad
            }
        },
        clearCart: (state) => {
            state.items = []; // Vaciar el carrito
        },
    },
});

export const { añadirAlCart, removerDelCart, clearCart, incrementarCantidad, decrementarCantidad } = cartSlice.actions;
export default cartSlice.reducer;
