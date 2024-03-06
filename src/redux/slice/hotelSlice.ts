import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

type Data = {
    value: string,
    label: string
}

type State = {
    loading: boolean,
    data: Data[] | unknown,
    error: string | undefined
}

type Hotel = {
    code: string,
    name: string,
    category: string,
    description: string,
    countryCode: string,
    destinationCode: string,
    city: string,
    coordinates: {
        latitude: number,
        longitude: number
    },
    address: string,
    postalCode: string
}

const initialState:State = {
    loading: false,
    data: [],
    error: ''
    
}

const format = (obj:Hotel[]) => {
    const res:Data[] = []
    obj.map(i => res.push({value: i.code, label: i.name}))
    return res
}

export const fetchHotel = createAsyncThunk('data/fetchHotel', async (code:{countryCode: string, destinyCode:string}) => {
    const response = await axios.get(`http://localhost:3000/hotels?countryCode=${code.countryCode}&destinationCode=${code.destinyCode}`)
    return format(response.data.response)
})

export const hotelSlice = createSlice({
    name: 'hotel',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchHotel.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchHotel.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload,
            state.error = ''
        })
        .addCase(fetchHotel.rejected, (state, action) => {
            state.loading = false,
            state.data = action.payload,
            state.error = action.error.message
        })
    }
})

export default hotelSlice.reducer;