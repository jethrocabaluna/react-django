import React from 'react'

import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import Header from './layout/Header'
import Dashboard from './leads/Dashboard'
import Alerts from './layout/Alerts'

import { LeadsProvider } from '../reducers/leads'
import { ErrorsProvider } from '../reducers/errors'

const alertOptions = {
    timeout: 3000,
    position: 'top center'
}

const App = () => {
    return (
        <ErrorsProvider>
            <LeadsProvider>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Header title='Lead Manager' />
                    <Alerts />
                    <Dashboard />
                </AlertProvider>
            </LeadsProvider>
        </ErrorsProvider>
    )
}

export default App