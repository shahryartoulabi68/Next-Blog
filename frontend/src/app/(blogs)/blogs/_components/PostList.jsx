import Link from 'next/link'
import CoverImage from './CoverImage'
import { ClockIcon } from '@heroicons/react/24/outline'
import Author from './Author'
import PostInteraction from './PostInteraction'
import { PersianNumber } from '@/utils/PersianNumber'
import { notFound } from 'next/navigation'



async function PostList({ posts }) {



    if (!posts) return notFound()
    return posts.length > 0 ? (
        <div className='grid grid-cols-12 gap-4'>
            {posts.map((item) => {
                return <div key={item._id} className=' col-span-12 sm:col-span-6 lg:col-span-4 
                border p-2 border-secondary-100 rounded-lg overflow-hidden'>
                    <CoverImage item={item} />
                    <div>
                        <Link href={`/blogs/${item.slug}`}>
                            <h2 className='font-bold text-secondary-700 mb-4'>{item.title}</h2>
                        </Link>
                        <div className='flex items-center justify-between mb-2'>
                            <Author {...item.author} />
                            <div className='flex items-center text-secondary-500 text-[10px]'>
                                <ClockIcon className='w-4 h-4 stroke-secondary-500 ml-1' />
                                <span className='ml-1'>خواندن</span>
                                <span className='ml-1'>{PersianNumber(item.readingTime)}</span>
                                <span>دقیقه</span>
                            </div>
                        </div>
                        <PostInteraction item={item} />
                    </div>
                </div>
            })
            }
        </div>
    ) : null
}

export default PostList
