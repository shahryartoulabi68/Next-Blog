import Avatar from '@/ui/Avatar'
import React from 'react'

function Author({ name, avatarUrl }) {
    return (
        <div className='flex items-center gap-x-2'>
            <Avatar src={avatarUrl} width={4} />
            <span className='text-sm text-secondary-500'>
                {name}
            </span>
        </div>
    )
}

export default Author
