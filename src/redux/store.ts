import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import destinyReducer from './slice/destinySlice'
import terminalSlice from "./slice/terminalSlice";

export const store = configureStore({
    reducer: {
        destiny: destinyReducer,
        terminal: terminalSlice
    }
})

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()

