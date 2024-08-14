import { Button } from 'antd'
import React, { useEffect, useState } from 'react'

import { useGetData } from '../../hooks/use-get-data'
import { useTableView } from '../../providers/table-view-provider'

import { UsersTable } from './table/users-table'
import { UsersCards } from './users-cards'

export const Users = () => {
    const { tableView, onTableViewSwitch } = useTableView()

    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 0,
            pageSize: 10,
            total: 0
        }
    })

    const {
        data: users,
        loading,
        count
    } = useGetData({
        endpoint: '/users',
        queryParamsObject: {
            limit: tableParams?.pagination?.pageSize,
            offset: tableParams?.pagination?.pageSize * tableParams?.pagination?.current
        }
    })

    useEffect(() => {
        if (count !== undefined) {
            setTableParams((prev) => ({
                ...prev,
                pagination: {
                    ...prev.pagination,
                    total: count
                }
            }))
        }
    }, [count])

    return (
        <div className='mt-10'>
            <Button
                type='primary'
                onClick={onTableViewSwitch}
                className='rounded-sm bg-blue-600 px-4 py-2 text-blue-50'>
                Switch to {tableView ? 'Cards View' : 'Table View'}
            </Button>
            {tableView ? (
                <UsersTable
                    users={users}
                    loading={loading}
                    tableParams={tableParams}
                    setTableParams={setTableParams}
                />
            ) : (
                <UsersCards
                    users={users}
                    loading={loading}
                />
            )}
        </div>
    )
}
