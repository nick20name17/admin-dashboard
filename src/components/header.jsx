import { NavLink } from 'react-router-dom'

import { routes } from '../config/routes'
import { cn } from '../libs/cn'

export const Header = () => {
    return (
        <header>
            <nav className='flex items-center justify-between bg-blue-600 p-6'>
                <ul className='flex justify-center gap-x-4 text-lg text-blue-50'>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                cn('transition-colors hover:text-blue-200', {
                                    'underline underline-offset-4': isActive
                                })
                            }
                            to={routes.home}>
                            Home
                        </NavLink>
                    </li>
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
        </header>
    )
}
