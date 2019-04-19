import React, { useReducer, createContext } from 'react'
import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from '../actions/types'

const reducer = (state, action) => {
    switch (action.type) {
        case GET_LEADS:
            return {
                ...state,
                leads: action.payload
            }
        case DELETE_LEAD:
            return {
                ...state,
                leads: state.leads.filter(lead => lead.id !== action.payload)
            }
        case ADD_LEAD:
            return {
                ...state,
                leads: [...state.leads, action.payload]
            }
        default:
            return state
    }
}

const initialState = {
    leads: []
}
const LeadsContext = createContext(initialState)

const LeadsProvider = (props) => {
    const [leadsState, leadsDispatch] = useReducer(reducer, initialState)

    return (
        <LeadsContext.Provider value={{leadsState, leadsDispatch}}>
            {props.children}
        </LeadsContext.Provider>
    )
}

export { LeadsContext, LeadsProvider }