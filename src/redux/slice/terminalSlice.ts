import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

type Data = {
    value: string,
    label: string
}

type State = {
    loading: boolean,
    data: Data[] | unknown,
    error: string | undefined,
    destiny: string
}

type Terminal = {
    code: string,
    content: {
        type: string,
        description: string
    },
    countryCode: string,
    coordinates: {
        latitude: null,
        longitude: null
    },
    language: string
}

const format = (obj:Terminal[]) => {
    const res:Data[] = []
    obj.map(i => res.push({value: i.code, label: i.content.description}))
    return res
}

export const fetchTerminal = createAsyncThunk('data/fetchTerminal', async (code:string) => {
    const response = await axios.get(`http://localhost:3000/terminals?code=${code.toUpperCase()}`)
    return format(response.data.response)
})

const initialState:State = {
    loading: false,
    data: [],
    error: '',
    destiny: ''
}

export const terminalSlice = createSlice({
    name: 'terminal',
    initialState,
    reducers: {
        terminalCode: (state, action) => {
            return {
                ...state,
                destiny: action.payload
            }
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchTerminal.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchTerminal.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload,
            state.error = ''
        })
        .addCase(fetchTerminal.rejected, (state, action) => {
            state.loading = false,
            state.data = action.payload,
            state.error = action.error.message
        })
    }
})

export default terminalSlice.reducer
export const { terminalCode } = terminalSlice.actions