import { useState } from 'react'

export const UsersCards = ({ users }) => {
    return (
        <div className='mt-10 grid grid-cols-4 gap-4 p-4'>
            {users?.map((user) => {
                return (
                    <article
                        key={user.id}
                        className='relative rounded-sm bg-blue-50 p-2'>
                        <div className='absolute right-4 top-4 rounded-full bg-blue-600 px-2 py-1 text-center text-blue-50'>
                            {user.role}
                        </div>

                        <ImageWithFallback
                            alt={user.name}
                            src={user.avatar}
                        />
                        <h1 className='mt-4 text-2xl text-blue-900'>{user.name}</h1>
                        <p className='mt-4 text-sm'>{user.email}</p>
                    </article>
                )
            })}
        </div>
    )
}

const ImageWithFallback = ({ src, alt }) => {
    const [isImageError, setIsImageError] = useState(false)

    return (
        <div className='h-72 w-full'>
            {isImageError ? (
                <div className='h-full w-full rounded-sm bg-blue-500'></div>
            ) : (
                <img
                    className='h-full w-full rounded-sm'
                    src={src}
                    alt={alt}
                    onError={() => setIsImageError(true)}
                />
            )}
        </div>
    )
}
