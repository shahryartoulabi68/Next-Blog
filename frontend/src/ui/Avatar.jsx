import Image from 'next/image'

function Avatar({ src, width = 24 }) {
    return (
        <Image
            src={src || "/images/avatar.png"}
            alt={src || "-"}
            width={24}
            height={24}
            className='rounded-full ring-1 ring-secondary-300'
        />
    )
}

export default Avatar
