import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { routes } from '../../config/routes'

export const UsersTable = ({ users }) => {
    return (
        <div className='w-1/2 mx-auto border-2 border-slate-800 rounded-md p-4 mt-10'>
            <div className='flex items-center justify-between gap-x-2 p-2'>
                <div>Name</div>
                <div>Email</div>
                <div>Role</div>
                <div></div>
            </div>

            {users.map((user) => (
                <div
                    key={user.id}
                    className='flex items-center justify-between gap-x-2 border-t border-t-slate-800 p-2'>
                    <div>{user.name}</div>
                    <div>{user.email}</div>
                    <div>{user.role}</div>
                    <div>
                        <Link
                            className='size-10 border border-slate-800 rounded-sm flex items-center hover:bg-slate-200 transition-colors justify-center p-2'
                            to={routes.users + '/' + user.id}>
                            <ArrowRight className='size-4' />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}
