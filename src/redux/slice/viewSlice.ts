import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'


type State = {
    loading: boolean,
    data: Array<Record<string , string>> | unknown,
    error: string | undefined,
}

type data = {
    ftype:string,
    fcode:string,
    ttype:string,
    tcode:number,
    outbound:string,
    inbound:string,
    adults: number,
    children:number,
    infants:number
}

export const fetchView = createAsyncThunk('data/fetchView', async (data:data) => {
    const response = await axios.get(`http://localhost:3000/transfer/?ftype=IATA&fcode=${data.fcode}&ttype=ATLAS&tcode=${data.tcode}&outbound=${data.outbound}&inbound=${data.inbound}&adults=${data.adults}&children=${data.children}&infants=${data.infants}`, {
        headers: {
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImViZGM1MGRiLWJhZTItNDY1Yi05ZjBjLWVkYjVhNTkxY2ZmMyIsIm5hbWUiOiJQZWRybyIsImVtYWlsIjoicGVkcm9AZ21haWwuY29tIiwiaWF0IjoxNzA5MjI4NjM2LCJleHAiOjE3MTE3MzQyMzZ9.7MhKzlujbOp6yLEFZHbu1EOpqjRBSH64au-KCQ9Xkeg'
        }
    })
    return response.data
})

const initialState:State = {
    loading: false,
    data: [],
    error: ''
}

export const viewSlice = createSlice({
    name: 'view',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchView.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchView.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload
        })
        .addCase(fetchView.rejected, (state, action) => {
            state.loading = false,
            state.error = action.error.message
        })
    }
})

export default viewSlice.reducer