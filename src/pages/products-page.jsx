import { Products } from '../components/products/products'
import { CategoriesProvider } from '../providers/categories-provider'

export const ProductsPage = () => {
    return (
        <CategoriesProvider>
            <Products />
        </CategoriesProvider>
    )
}
