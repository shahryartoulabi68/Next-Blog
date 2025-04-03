import React, { Suspense } from 'react'
import CategoryTable from './_components/CategoryTable'
import { CreateCategory } from './_components/CreateCategory'
import Spinner from '@/ui/Spinner'

function page() {
  return (
    <div >
      <div className='flex items-center justify-between mb-8'>
        <h1 className='text-secondary-700 font-bold '>لیست دسته بندی ها</h1>
        <CreateCategory />
      </div>
      <Suspense fallback={<Spinner />}>
        <CategoryTable />
      </Suspense>
    </div>
  )
}

export default page
