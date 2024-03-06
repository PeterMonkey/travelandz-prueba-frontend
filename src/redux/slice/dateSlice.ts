import { createSlice } from '@reduxjs/toolkit';

export const dateSlice = createSlice({
    name: 'fecha',
    initialState: {
        salida: '',
        llegada: ''
    },
    reducers: {
        fechaSalida: (state, action) => {
            return {
                ...state,
                salida: action.payload
            }
        },
        fechaLlegada: (state, action) => {
            return {
                ...state,
                llegada: action.payload
            }
        }
    }
})

export const { fechaSalida, fechaLlegada } = dateSlice.actions;