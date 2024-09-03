import { Dropdown } from 'antd'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import { routes } from '../config/routes'
import { useGetData } from '../hooks/use-get-data'
import { cn } from '../libs/cn'

export const Header = () => {
    const isAuth = !!localStorage.getItem('accessToken')

    return (
        <header className='flex items-center justify-between bg-blue-600 p-6'>
            <nav className='flex items-center justify-between'>
                <ul className='flex justify-center gap-x-4 text-lg text-blue-50'>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                cn('transition-colors hover:text-blue-200', {
                                    'underline underline-offset-4': isActive
                                })
                            }
                            to={routes.users}>
                            Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                cn('transition-colors hover:text-blue-200', {
                                    'underline underline-offset-4': isActive
                                })
                            }
                            to={routes.products}>
                            Products
                        </NavLink>
                    </li>
                </ul>
            </nav>
            {isAuth ? (
                <Profile />
            ) : (
                <Link
                    className='text-white transition-colors hover:text-blue-100'
                    to={routes.login}>
                    Login
                </Link>
            )}
        </header>
    )
}

const Profile = () => {
    const navigate = useNavigate()

    const { data, loading } = useGetData({
        endpoint: 'auth/profile'
    })

    if (loading) {
        return <div className='size-10 animate-pulse rounded-full bg-blue-100' />
    }

    const firstNameInitial = data?.name?.charAt(0)?.toUpperCase()

    const logOut = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')

        navigate(routes.login)
    }

    const items = [
        {
            key: 'logout',
            label: <button onClick={logOut}>Log Out</button>
        }
    ]
    return (
        <Dropdown
            menu={{
                items
            }}>
            {data.avatar ? (
                <img
                    className='size-10 rounded-full'
                    src={data.avatar}
                    alt={data.name}
                />
            ) : (
                <div className='flex size-10 items-center justify-center rounded-full bg-white'>
                    {firstNameInitial}
                </div>
            )}
        </Dropdown>
    )
}
