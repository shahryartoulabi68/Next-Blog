import Breadcrumbs from '@/ui/Breadcrumbs'
import React from 'react'
import CreatePostForm from '../../create/_/CreatePostForm'
import { getPostById } from '@/services/postServices'

async function page({ params: { postId } }) {
    const {post} = await getPostById(postId)
    return (
        <div>
            <Breadcrumbs breadcrumbs={[
                {
                    label: "پست ها",
                    href: "/profile/posts"
                },
                {
                    label: "ویرایش پست",
                    href: `/profile/posts/${postId}/edit`
                }
            ]} />
            <CreatePostForm postToEdit={post} />
        </div>
    )
}

export default page
