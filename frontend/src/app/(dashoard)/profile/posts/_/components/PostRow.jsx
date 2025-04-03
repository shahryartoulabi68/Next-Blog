import Table from '@/ui/Table'
import { PersianNumber } from '@/utils/PersianNumber';
import truncate from '@/utils/truncate';
import React from 'react'
import { DeletePost, UpdatePost } from './Butten';
function PostRow({ post, index }) {

    const { title, createdAt, category, type, author } = post
    const typeMi = {
        free: {
            title: "رایگان",
            class: "badge--success"
        },
        primiom: {
            title: "پولی",
            class: "badge--secondary"
        }
    }

    return (
        <Table.Row>
            <td>{PersianNumber(index + 1)}</td>
            <td>{truncate(title, 15)}</td>
            <td>{category.title}</td>
            <td>{author.name}</td>
            <td>{new Date(createdAt).toLocaleDateString("fa")}</td>
            <td >
                <span className={`badge ${typeMi[type].class}`}>{typeMi[type].title}</span>
            </td>
            <td >
                <div className='flex items-center justify-center gap-x-3'>
                    <UpdatePost  id={post._id}/>
                    <DeletePost post={post} />
                </div>
            </td>

        </Table.Row>
    )
}

export default PostRow
