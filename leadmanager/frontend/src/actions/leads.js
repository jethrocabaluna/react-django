// import { useContext } from 'react'
import axios from 'axios'

import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from './types'
// import { LeadsContext } from '../reducers/leads';

export const getLeads = (dispatch) => {
    // const { leadsDispatch } = useContext(LeadsContext)

    axios.get('/api/leads')
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

export const deleteLead = (dispatch, id) => {
    // const { leadsDispatch } = useContext(LeadsContext)

    axios.delete(`/api/leads/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_LEAD,
                payload: id
            })
        }).catch(err => console.log(err))
}

export const addLead = (dispatch, newLead, errorsDispatch) => {
    // const { leadsDispatch } = useContext(LeadsContext)

    axios.post('/api/leads/', newLead)
        .then(res => {
            dispatch({
                type: ADD_LEAD,
                payload: res.data
            })
        }).catch(err => {
            if (errorsDispatch) {
                const errors = {
                    msg: err.response.data,
                    status: err.response.status
                }
                errorsDispatch({
                    type: GET_ERRORS,
                    payload: errors
                })
            } else {
                console.log(err)
            }
        })
}