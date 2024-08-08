import { useState } from 'react'

export const UsersCards = ({ users }) => {
    return (
        <div className='p-4 mt-10 grid grid-cols-4 gap-4'>
            {users?.map((user) => {
                return (
                    <article
                        key={user.id}
                        className='rounded-sm bg-blue-50 p-2 relative'>
                        <div className='text-center absolute top-4 right-4 bg-blue-600 text-blue-50 rounded-full px-2 py-1'>
                            {user.role}
                        </div>
                        <ImageWithFallback
                            alt={user.name}
                            src={user.avatar}
                        />
                        <h1 className='text-2xl mt-4 text-blue-900'>{user.name}</h1>
                        <p className='text-sm mt-4'>{user.email}</p>
                    </article>
                )
            })}
        </div>
    )
}

const ImageWithFallback = ({ src, alt }) => {
    const [isImageError, setIsImageError] = useState(false)

    return (
        <div className='w-full h-72'>
            {isImageError ? (
                <div className='w-full rounded-sm bg-blue-500 h-full'></div>
            ) : (
                <img
                    className='w-full h-full rounded-sm '
                    src={src}
                    alt={alt}
                    onError={() => setIsImageError(true)}
                />
            )}
        </div>
    )
}
