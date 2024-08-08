import React from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from './header'

export const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <div className='container mx-auto'>
                    <Outlet />
                </div>
            </main>
        </>
    )
}
