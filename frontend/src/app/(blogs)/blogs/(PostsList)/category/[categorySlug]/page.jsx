import PostList from '@/app/(blogs)/blogs/_components/PostList';
import { getPost } from '@/services/postServices';
import setCookiesOnReq from '@/utils/setCookiesOnReq';
import { cookies } from 'next/headers';
import queryString from 'query-string';
import React from 'react'

async function Category({ params, searchParams }) {
    const { categorySlug } = params;
    const queries = queryString.stringify(searchParams) + "&" + `categorySlug=${categorySlug}`;
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list?categorySlug=${categorySlug}&${queries}`)
    // const { data } = await res.json()
    // const { posts } = data || {}

    const cookesStor = cookies()
    const options = setCookiesOnReq(cookesStor)
    const {posts} = await getPost(queries, options)

    const { search } = searchParams;

    return (<>
        {search ? <p>
            {posts.length === 0 ? "هیچ پستی با این مشخصات یافت نشد" : `نشان دادن  ${posts.length} نتیجه برای`}
            <span className='font-bold '> &quot;{search}&quot; </span>
        </p> : null

        }

        <PostList posts={posts} />

    </>
    )
}

export default Category
