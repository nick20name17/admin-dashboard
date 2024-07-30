import React from 'react'

import { useGetData } from '../../hooks/use-get-data'

import { UsersTable } from './users-table'

export const Users = () => {
    const { data: users } = useGetData({ endpoint: '/users' })

    return (
        <>
            <UsersTable users={users} />

            {/* <div className='mt-10 flex flex-col gap-4'>
                {users.map((user) => {
                    return (
                        <Link
                            key={user.id}
                            to={routes.users + '/' + user.id}>
                            {user.name}
                        </Link>
                    )
                })}
            </div> */}
        </>
    )
}
