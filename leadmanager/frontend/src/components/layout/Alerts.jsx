import React, { Fragment, useEffect, useContext } from 'react'
import { withAlert } from 'react-alert'
import { ErrorsContext } from '../../reducers/errors'
import usePrevious from '../../helpers/usePrevious'

const Alerts = (props) => {
    const { errorsState } = useContext(ErrorsContext)
    const prevErrors = usePrevious(errorsState)

    useEffect(() => {
        if (JSON.stringify(errorsState) !== JSON.stringify(prevErrors)) {
            if (errorsState.msg.name) {
                props.alert.error('Name is required')
            }
            if (errorsState.msg.email) {
                props.alert.error('Email is required')
            }
        }
    })

    return <Fragment />
}

export default withAlert()(Alerts)