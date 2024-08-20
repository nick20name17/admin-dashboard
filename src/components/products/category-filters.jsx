import { Select } from 'antd'
import React from 'react'

import { useGetData } from '../../hooks/use-get-data'

export const CategoryFilter = ({ setCategory, category }) => {
    const { data: categories, loading } = useGetData({
        endpoint: '/categories'
    })

    const options = categories?.map((category) => ({
        value: category.id,
        label: category.name
    }))

    const mergedOptions = [
        {
            value: 0,
            label: 'All'
        },
        ...options
    ]

    // if (loading) {
    //     return (
    //         <div className='!h-8 !w-40 flex-shrink-0 animate-pulse rounded-md bg-blue-100' />
    //     )
    // }

    return (
        <Select
            disabled={loading}
            placeholder='Select a category'
            className='!w-40 flex-shrink-0'
            defaultValue={category}
            onChange={(value) => setCategory(value)}
            options={mergedOptions}
        />
    )
}
