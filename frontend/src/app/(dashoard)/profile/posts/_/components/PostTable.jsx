import { getPost } from '@/services/postServices'
import Table from '@/ui/Table'
import React from 'react'
import PostRow from './PostRow'

async function PostTable({ query }) {
    const {posts} = await getPost(query)

    return (
        <Table>
            <Table.Headr>
                <th>#</th>
                <th>عنوان</th>
                <th>دسته بندی</th>
                <th>نویسنده</th>
                <th>تاریخ ایجاد</th>
                <th>نوع</th>
                <th className='text-center'>عملیات</th>
            </Table.Headr>
            <Table.body>
                {posts.map((post, index) => <PostRow key={post._id} index={index} post={post} />)

                }
            </Table.body>
        </Table>
    )
}

export default PostTable
