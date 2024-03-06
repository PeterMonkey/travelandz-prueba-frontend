import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

type Data = {
    value: string,
    label: string
}

type Destiny = {
    code: string,
    name: string,
    countryCode: string,
    language: string
}

type State = {
    loading: boolean,
    data: Data[] | unknown,
    error: string | undefined,
    country: string
}

const format = (obj: Destiny[]) => {
    const res:Data[] = []
    obj.map(i => res.push({value: i.code, label: i.name}))
    return res
}

export const fetchDestiny = createAsyncThunk('data/fetchDestiny', async (code:string) => {
    const response = await axios.get(`http://localhost:3000/destinations?countryCodes=${code.toUpperCase()}`)
    return format(response.data.response)
})

const initialState:State = {
    loading: false,
    data: [],
    error: '',
    country: ''
}

export const destinySlice = createSlice({
    name: 'destiny',
    initialState,
    reducers: {
        countryCode: (state, action) => {
            return {
                ...state,
                country: action.payload
            }
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchDestiny.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchDestiny.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload,
            state.error = ''
        })
        .addCase(fetchDestiny.rejected, (state, action) => {
            state.loading = false,
            state.data = action.payload,
            state.error = action.error.message
        })
    }
})

export default destinySlice.reducer
export const {countryCode} = destinySlice.actions

