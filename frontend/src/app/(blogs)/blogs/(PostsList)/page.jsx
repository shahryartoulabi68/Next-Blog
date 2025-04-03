import React, { Suspense } from 'react'
import Spinner from '@/ui/Spinner'
import PostList from '../_components/PostList'
import { cookies } from 'next/headers'
import setCookiesOnReq from '@/utils/setCookiesOnReq'
import { getPost } from '@/services/postServices'
import queryString from 'query-string'



async function blugPage({ searchParams }) {
  const queries = queryString.stringify(searchParams);
  const cookesStor = cookies()
  const options = setCookiesOnReq(cookesStor)
  const {posts} = await getPost(queries, options)

  return (
    <div>
      <h1 className='text-secondary-700 mb-4'>لیست پست های من</h1>
      <PostList posts={posts} />
    </div>

  )
}

export default blugPage
