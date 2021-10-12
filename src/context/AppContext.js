import { createContext, useReducer } from 'react'

// Context accessed through the Provider

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state, //current state
        expenses: [...state.expenses, action.payload],
      }
    default:
      return state
  }
}

const initialState = {
  budget: 2000,
  expenses: [
    { id: 1, name: 'Shopping', cost: 50 },
    { id: 2, name: 'Holiday', cost: 400 },
    { id: 3, name: 'Fuel', cost: 40 },
    { id: 4, name: 'Groceries', cost: 30 },
    { id: 5, name: 'Savings', cost: 100 },
  ],
}

export const AppContext = createContext()

export const AppProvider = (props) => {
  // (state, action) => NewState( Function, initialState )
  const [state, dispatch] = useReducer(AppReducer, initialState) //This becomes props

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}
