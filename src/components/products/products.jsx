import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDebounceValue } from 'usehooks-ts'

import { useGetData } from '../../hooks/use-get-data'
import { useTableView } from '../../providers/table-view-provider'
import { SearchBar } from '../shared/search-bar'

import { ProductsCards } from './products-cards'
import { ProductsTable } from './products-table'

export const Products = () => {
    const { tableView, onTableViewSwitch } = useTableView()

    const [search, setSearch] = useDebounceValue('', 200)

    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 0,
            pageSize: 10,
            total: 0
        }
    })

    const {
        data: products,
        loading,
        count
    } = useGetData({
        endpoint: '/products',
        queryParamsObject: {
            limit: tableParams?.pagination?.pageSize,
            offset: tableParams?.pagination?.pageSize * tableParams?.pagination?.current,
            title: search
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
                <>
                    <SearchBar
                        search={search}
                        setSearch={setSearch}
                    />
                    <ProductsTable
                        products={products}
                        loading={loading}
                        tableParams={tableParams}
                        setTableParams={setTableParams}
                    />
                </>
            ) : (
                <ProductsCards
                    products={products}
                    loading={loading}
                />
            )}
        </div>
    )
}
