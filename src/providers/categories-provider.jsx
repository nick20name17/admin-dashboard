import { createContext, useContext } from 'react'

import { useGetData } from '../hooks/use-get-data'

export const CategoriesContext = createContext({
    categories: []
})

export const CategoriesProvider = ({ children }) => {
    const { data: categories } = useGetData({
        endpoint: '/categories'
    })

    return (
        <CategoriesContext.Provider value={categories}>
            {children}
        </CategoriesContext.Provider>
    )
}

export const useCategories = () => {
    const context = useContext(CategoriesContext)

    if (context === undefined)
        throw new Error('useContext must be used within a CategoriesProvider')

    return context
}
