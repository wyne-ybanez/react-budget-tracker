import { createContext, useReducer } from 'react'

const AppReducer = (state, action) => {
    switch
}

const initialState = {
    budget: 2000,
    expenses: [
        { id: 1, name: 'shopping', cost: 50 },
        { id: 2, name: 'holiday', cost: 400 },
        { id: 3, name: 'shopping', cost: 50 },
        { id: 4, name: 'shopping', cost: 50 },
        { id: 5, name: 'shopping', cost: 50 },
    ],
}

export const AppContext = createContext()

const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
}