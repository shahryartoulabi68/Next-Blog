import Breadcrumbs from '@/ui/Breadcrumbs'
import React from 'react'
import CreatePostForm from './_/CreatePostForm'

function page() {
    return (

        <div>
            <Breadcrumbs breadcrumbs={[
                {
                    label: "پست ها",
                    href:"/profile/posts"
                },
                {
                    label: "ایجاد پست",
                    href:"/profile/posts/create"
                }
            ]} />
            <CreatePostForm/>
        </div>
    )
}

export default page
