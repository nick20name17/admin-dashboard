import { trunc } from '../../utils/utils'

export const ProductsTable = ({ products }) => {
    return (
        <div className='border-2 border-slate-800 rounded-md p-4 mt-10'>
            <div className='grid grid-cols-4 gap-x-2 p-2'>
                <div>Title</div>
                <div>Price</div>
                <div>Description</div>
                <div>Category</div>
            </div>

            {products?.map((product) => (
                <div
                    key={product.id}
                    className='grid grid-cols-4 gap-x-2 border-t border-t-slate-800 p-2'>
                    <div>{product.title}</div>
                    <div>{product.price} $</div>
                    <div title={product.description}>
                        {trunc(product.description, 60)}
                    </div>
                    <div>{product.category.name}</div>
                </div>
            ))}
        </div>
    )
}
