import React, { useReducer, createContext } from 'react'
import { GET_ERRORS } from '../actions/types'

const reducer = (state, action) => {
    switch (action.type) {
        case GET_ERRORS:
            return {
                msg: action.payload.msg,
                status: action.payload.status
            }
        default:
            return state
    }
}

const initialState = {
    msg: {},
    status: null
}
const ErrorsContext = createContext(initialState)

const ErrorsProvider = (props) => {
    const [errorsState, errorsDispatch] = useReducer(reducer, initialState)

    return (
        <ErrorsContext.Provider value={{errorsState, errorsDispatch}}>
            {props.children}
        </ErrorsContext.Provider>
    )
}

export { ErrorsContext, ErrorsProvider }