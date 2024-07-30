import { NavLink } from 'react-router-dom'

import { routes } from '../config/routes'
import { cn } from '../libs/cn'

export const Header = () => {
    return (
        <header>
            <nav className='flex justify-between items-center bg-blue-600  p-6'>
                <ul className='flex justify-center gap-x-4 text-blue-50 text-lg'>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                cn('hover:text-blue-200 transition-colors', {
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
                                cn('hover:text-blue-200 transition-colors', {
                                    'underline underline-offset-4': isActive
                                })
                            }
                            to={routes.users}>
                            Users
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
