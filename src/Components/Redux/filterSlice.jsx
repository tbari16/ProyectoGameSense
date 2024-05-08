import { createSlice } from '@reduxjs/toolkit';

// Definir un slice para el filtro
const filterSlice = createSlice({
    name: 'filter',
    initialState: null,
    reducers: {
        setFilter: (state, action) => {
            return action.payload; // Define el nuevo estado del filtro
        },
        clearFilter: () => {
            return null; // Restablece el filtro a su estado inicial
        },
    },
});

// Exportar acciones generadas por el slice
export const { setFilter, clearFilter } = filterSlice.actions;

export default filterSlice.reducer; 