import { Button } from 'antd'
import React from 'react'

import { useGetData } from '../../hooks/use-get-data'
import { useTableView } from '../../providers/table-view-provider'

import { UsersTable } from './table/users-table'
import { UsersCards } from './users-cards'

export const Users = () => {
    const { tableView, onTableViewSwitch } = useTableView()

    const { data: users } = useGetData({
        endpoint: '/users',
        queryParamsObject: { limit: 10, offset: 0 }
    })

    return (
        <div className='mt-10'>
            <Button
                type='primary'
                onClick={onTableViewSwitch}
                className='rounded-sm bg-blue-600 px-4 py-2 text-blue-50'>
                Switch to {tableView ? 'Cards View' : 'Table View'}
            </Button>
            {tableView ? <UsersTable users={users} /> : <UsersCards users={users} />}
        </div>
    )
}
