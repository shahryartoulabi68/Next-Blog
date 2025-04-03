import Breadcrumbs from '@/ui/Breadcrumbs'
import React from 'react'
// import EditUser from '../../_/components/EditUser'

function Page({ params: { userId } }) {
    return (
        <div>
            <Breadcrumbs breadcrumbs={[
                {
                    label: "کاربران",
                    href: "/profile/users"
                },
                {
                    label: "ویرایش کاربر",
                    href: `/profile/users/${userId}/edit`
                }
            ]} />
            {/* <EditUser id={userId}/> */}
        </div>
    )
}

export default Page
