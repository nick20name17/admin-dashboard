import React from 'react'
import { useParams } from 'react-router-dom'

import { useGetSingleItem } from '../hooks/use-get-data'

export const UserPage = () => {
    const { id } = useParams()

    const { data, loading } = useGetSingleItem({
        endpoint: '/users',
        id
    })

    if (loading) {
        return <UserSkeleton />
    }

    return (
        <article className='size-60 rounded-lg bg-blue-500 p-4 mt-20 mx-auto'>
            <img
                className='size-20 mx-auto rounded-full'
                src={data.avatar}
                alt={data.name}
            />
            <h1 className='text-center text-3xl text-white mt-4'>{data.name}</h1>
            <div className='text-center text-xl text-slate-300 mt-2'>{data.email}</div>
        </article>
    )
}

const UserSkeleton = () => {
    return (
        <article className='size-60  rounded-lg bg-blue-500 p-4 mt-20 mx-auto'>
            <div className='size-20 bg-blue-200 mx-auto rounded-full animate-pulse' />
            <div className='w-32 animate-pulse bg-blue-200 h-6 mt-4 mx-auto rounded-md'></div>
            <div className='w-20 animate-pulse bg-blue-200 h-6 mt-2 mx-auto rounded-md'></div>
        </article>
    )
}
