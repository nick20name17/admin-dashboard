import { Badge, Card, Carousel, Image, Tooltip } from 'antd'
import Meta from 'antd/es/card/Meta'

import { trunc } from '../../utils/utils'

export const ProductsCards = ({ products }) => {
    return (
        <div className='mt-10 grid grid-cols-4 gap-4 p-4'>
            {products?.map((product) => {
                return (
                    <Card
                        hoverable
                        cover={
                            <Carousel
                                arrows
                                afterChange={() => {}}>
                                {product.images.map((img) => (
                                    <Image
                                        className='w-full rounded-sm'
                                        src={img}
                                        alt={img}
                                    />
                                ))}
                            </Carousel>
                        }>
                        <Meta
                            title={product.title}
                            description={
                                <Tooltip title={product.description}>
                                    <span>{trunc(product.description, 50)}</span>
                                </Tooltip>
                            }
                        />
                        <Badge
                            color='#2563eb'
                            showZero
                            count={product.price + ' $'}
                            className='mt-4'></Badge>
                    </Card>
                    // <article
                    //     key={product.id}
                    //     className='relative rounded-sm bg-blue-50 p-2'>
                    //     <div className='absolute right-4 top-4 w-16 rounded-full bg-blue-600 px-2 py-1 text-center text-blue-50'>
                    //         {product.price} $
                    //     </div>

                    //     <h1 className='mt-4 text-2xl text-blue-900'>{product.title}</h1>
                    //     <p
                    //         className='mt-4 text-sm'
                    //         title={product.description}>
                    //         {trunc(product.description, 50)}
                    //     </p>
                    // </article>
                )
            })}
        </div>
    )
}
