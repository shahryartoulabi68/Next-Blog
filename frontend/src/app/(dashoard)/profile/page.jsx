
import PostTable from './posts/_/components/PostTable'
import { Suspense } from 'react'
import CardeWrapper from './posts/_/components/CardeWrapper'
import Spinner from '@/ui/Spinner'

async function page() {
    return (
        <div>
            <h1 className='font-bold text-secondary-700 mb-8'>داشبورد</h1>
            <Suspense fallback={<Spinner />}>
                <CardeWrapper />
            </Suspense>
            <h2 className='font-bold text-secondary-700 mb-8'>آخرین پست ها</h2>
            <Suspense fallback={<Spinner />}>
                <PostTable query="sort=latest&limit=3" />
            </Suspense>
        </div>

    )
}

export default page
