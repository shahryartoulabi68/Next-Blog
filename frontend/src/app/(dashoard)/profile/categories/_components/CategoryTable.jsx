import { getCategoryApi } from '@/services/categoryService'
import Table from '@/ui/Table'
import React from 'react'
import CategoryRow from './CategoryRow';

async function CategoryTable() {
    const { categories } = await getCategoryApi()

    return (
        <Table>
            <Table.Headr>
                <th>#</th>
                <th>عنوان</th>
                <th>عنوان لاتین</th>
                <th>توضیحات</th>
                <th>تاریخ ایجاد</th>
                <th className='text-center'>عملیات</th>
            </Table.Headr>
            <Table.body>
                {categories.map((item, index) => <CategoryRow key={item._id} index={index} item={item} />)

                }
            </Table.body>
        </Table>
    )
}

export default CategoryTable
