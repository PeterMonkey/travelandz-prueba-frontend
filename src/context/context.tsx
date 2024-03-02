import { createContext, useReducer, useEffect } from "react";

interface props {
    children: JSX.Element | JSX.Element[]
}

const state = {
    value: '',
    label: '',
    enable: false
}

export const Context = createContext({})

export const ContextProvider = ({children}:props) => {

    useEffect(() => {
        
    })

    const destiReducer = (state, action) => {
        switch(action.type) {
            case 'countriesObtained': 

        }
    }

    return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    )
}