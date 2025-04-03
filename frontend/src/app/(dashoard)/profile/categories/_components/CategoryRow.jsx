import Table from '@/ui/Table'
import { PersianNumber } from '@/utils/PersianNumber'
import truncate from '@/utils/truncate'
import React from 'react'
import { DeleteCategory, UpdateCategory } from './UpdateCategory'

function CategoryRow({ item, index }) {


    return (
        <Table.Row>
            <td>{PersianNumber(index + 1)}</td>
            <td>{truncate(item.title, 15)}</td>
            <td>{item.englishTitle}</td>
            <td>{item.description}</td>
            <td>{new Date(item.createdAt).toLocaleDateString("fa")}</td>
            <td >
                <div className='flex items-center justify-center gap-x-3'>
                    <UpdateCategory id={item._id} />
                    <DeleteCategory item={item} />

                </div>
            </td>

        </Table.Row>
    )
}

export default CategoryRow
