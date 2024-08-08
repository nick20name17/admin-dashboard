import { Button } from 'antd'
import React from 'react'

import { useGetData } from '../../hooks/use-get-data'
import { useTableView } from '../../providers/table-view-provider'

import { UsersCards } from './users-cards'
import { UsersTable } from './users-table'

export const Users = () => {
    const { tableView, onTableViewSwitch } = useTableView()

    const { data: users } = useGetData({ endpoint: '/users' })

    return (
        <div className='mt-10'>
            <Button
                type='primary'
                onClick={onTableViewSwitch}
                className='px-4 py-2 bg-blue-600 rounded-sm text-blue-50'>
                Switch to {tableView ? 'Cards View' : 'Table View'}
            </Button>
            {tableView ? <UsersTable users={users} /> : <UsersCards users={users} />}
        </div>
    )
}
