import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import destinyReducer from './slice/destinySlice'

export const store = configureStore({
    reducer: {
        destiny: destinyReducer
    }
})

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()

