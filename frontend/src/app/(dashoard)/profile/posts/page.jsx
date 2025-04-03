import { Suspense } from 'react'
import PostTable from './_/components/PostTable'
import Spinner from '@/ui/Spinner'
import Search from '@/ui/Search'
import { CreatePost } from './_/components/Butten'
import queryString from 'query-string'
import Pagination from '@/ui/Pagination'
import { getPost } from '@/services/postServices'

async function page({ searchParams }) {
    const query = queryString.stringify(searchParams)
    const { totalPages } = await getPost(query)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-8 text-secondary-700 items-center mb-8'>
                <h1 className='font-bold'>لیست پست ها</h1>
                <Search />
                <CreatePost />
            </div>
            <Suspense fallback={<Spinner />} key={query}>
                <PostTable query={query} />
            </Suspense>
            <div className='mt-5 flex justify-center w-full'>
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    )
}

export default page
