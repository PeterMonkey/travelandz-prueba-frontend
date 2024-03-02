import { createContext } from "react";

interface props {
    children: JSX.Element | JSX.Element[]
}

export const Context = createContext({})

export const ContextProvider = ({children}:props) => {

    return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    )
}