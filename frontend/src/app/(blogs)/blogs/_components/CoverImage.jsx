import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CoverImage({ item }) {
    return (
        <div className='relative aspect-video rounded-md overflow-hidden mb-6'>
            <Link href={`/blogs/${item.slug}`}>
                <Image
                    quality={90}
                    src={item.coverImageUrl}
                    alt={item.title}
                    fill
                    className='object-cover object-center hover:scale-110 transition-all ease-in-out'
                />
            </Link>
        </div>
    )
}

export default CoverImage
