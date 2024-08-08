import { trunc } from '../../utils/utils'

export const ProductsCards = ({ products }) => {
    return (
        <div className='p-4 mt-10 grid grid-cols-4 gap-4'>
            {products?.map((product) => {
                return (
                    <article
                        key={product.id}
                        className='rounded-sm bg-blue-50 p-2 relative'>
                        <div className='text-center w-16 absolute top-4 right-4 bg-blue-600 text-blue-50 rounded-full px-2 py-1'>
                            {product.price} $
                        </div>
                        <img
                            className='w-full rounded-sm '
                            src={product.images[0]}
                            alt={product.title}
                        />
                        <h1 className='text-2xl mt-4 text-blue-900'>{product.title}</h1>
                        <p
                            className='text-sm mt-4'
                            title={product.description}>
                            {trunc(product.description, 50)}
                        </p>
                    </article>
                )
            })}
        </div>
    )
}
