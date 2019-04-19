import React, { Fragment, useEffect, useContext } from 'react'
import Button from '@material-ui/core/Button'
import { getLeads, deleteLead } from '../../actions/leads'
import { LeadsContext } from '../../reducers/leads';

const Leads = () => {
    const { leadsState, leadsDispatch } = useContext(LeadsContext)
    const { leads } = leadsState

    useEffect(() => {
      getLeads(leadsDispatch)
    }, [])

    return (
        <Fragment>
            <h2>Leads</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {
                        leads.map(lead => (
                            <tr key={lead.id}>
                                <td>{lead.id}</td>
                                <td>{lead.name}</td>
                                <td>{lead.email}</td>
                                <td>{lead.message}</td>
                                <td>
                                <Button variant='contained' color='secondary' onClick={() => deleteLead(leadsDispatch, lead.id)}>
                                    Button
                                </Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Fragment>
    )
}

export default Leads