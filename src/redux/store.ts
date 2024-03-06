import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import destinyReducer from './slice/destinySlice'
import terminalSlice from "./slice/terminalSlice";
import hotelSlice from "./slice/hotelSlice";
import { dateSlice } from "./slice/dateSlice";
import viewSlice from "./slice/viewSlice";

export const store = configureStore({
    reducer: {
        destiny: destinyReducer,
        terminal: terminalSlice,
        hotel: hotelSlice,
        date: dateSlice.reducer,
        view: viewSlice
    }
})

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()

