import React from 'react'

import { useGetData } from '../../hooks/use-get-data'
import { useTableView } from '../../providers/table-view-provider'

import { ProductsCards } from './products-cards'
import { ProductsTable } from './products-table'

export const Products = () => {
    const { tableView, onTableViewSwitch } = useTableView()

    const { data: products } = useGetData({
        endpoint: '/products',
        queryParamsObject: {
            offset: 0,
            limit: 20
        }
    })

    return (
        <div className='mt-10'>
            <button
                onClick={onTableViewSwitch}
                className='px-4 py-2 bg-blue-600 rounded-sm text-blue-50'>
                Switch to {tableView ? 'Cards View' : 'Table View'}
            </button>
            {tableView ? (
                <ProductsTable products={products} />
            ) : (
                <ProductsCards products={products} />
            )}
        </div>
    )
}
