import Table from '@/ui/Table'
import { PersianNumber } from '@/utils/PersianNumber'
import truncate from '@/utils/truncate'
import { UpdatePost } from './Butten'

function UserRow({ user, index }) {
    const { name, email, createdAt, updatedAt, likedPosts, bookmarkedPosts } = user
    return (
        <Table.Row>
            <td>{PersianNumber(index + 1)}</td>
            <td>{truncate(name, 15)}</td>
            <td>{email}</td>
            <td>{new Date(createdAt).toLocaleDateString("fa")}</td>
            <td>{new Date(updatedAt).toLocaleDateString("fa")}</td>
            <td>{likedPosts.length}</td>
            <td>{bookmarkedPosts.length}</td>

            <td >
                <div className='flex items-center justify-center gap-x-3'>
                    <UpdatePost id={user._id}/>
                </div>
            </td>

        </Table.Row>
    )
}

export default UserRow
