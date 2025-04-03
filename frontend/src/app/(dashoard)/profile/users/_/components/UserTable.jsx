import Table from '@/ui/Table'
import UserRow from './UserRow'
import { cookies } from 'next/headers'
import setCookiesOnReq from '@/utils/setCookiesOnReq'
import { getAllUserApi } from '@/services/authService'

async function UserTable() {
    const cookieStor = cookies()
    const options = setCookiesOnReq(cookieStor)
    const { users } = await getAllUserApi(options)


    return (
        <Table>
            <Table.Headr>
                <th>#</th>
                <th>نام</th>
                <th>ایمیل</th>
                <th>تاریخ ورود</th>
                <th>تاریخ بروزرسانی</th>
                <th>لایک </th>
                <th>بوکمارک</th>

                <th className='text-center'>عملیات</th>
            </Table.Headr>
            <Table.body>
                {users.map((user, index) => <UserRow key={user._id} index={index} user={user} />)
                }
            </Table.body>
        </Table>
    )

}

export default UserTable
