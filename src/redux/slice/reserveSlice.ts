import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

type State = {
    loading: boolean,
    data: Data[] | unknown,
    error: string | undefined
}

const initialState:State = {
    loading: false,
    data: [],
    error: ''
}

type Data = {
    name: string,
    surname: string,
    email: string,
    phone: string,
    rateKey: string,
    direction: string
}

export const fetchReserve = createAsyncThunk('data/fetchReserve', async (data: Data) => {
    const response = await axios.post('http://localhost:3000/reserve', data, {
        headers: {
            'auth-token': localStorage.getItem('token')
        }
    })
    return response.data
})

export const reserveSlice = createSlice({
    name: "reserve",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchReserve.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchReserve.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })
        .addCase(fetchReserve.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default reserveSlice.reducer;