"use client"

import Button from '@/ui/Button'
import ButtonIcon from '@/ui/ButtonIcon'
import Modal from '@/ui/Modal'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import useDeleteCategory from './useDeleteCategory'

export function DeleteCategory({ item }) {
    const [open, setOpen] = useState(false)
    const routesr = useRouter()
    const { deleteCategory, isDeleteing } = useDeleteCategory()
    const handelDeleteCat = (id) => {
        deleteCategory({id}, {
            onSuccess: () => {
                setOpen(false)
                routesr.refresh()
            }
        })
    }

    return <>
        <ButtonIcon variant="outline" onClick={() => setOpen(true)}>
            <TrashIcon className="text-red-600" />
        </ButtonIcon>
        <Modal
            title={`آیا از خذف ${item.title} مطمئن هستید؟`}
            open={open}
            onClose={() => setOpen(false)}
        >
            <div className="flex items-center gap-x-3">
                <Button className="flex-1 "
                    onClick={() => setOpen(false)}>لغو</Button>
                <Button className="flex-1 " variant="danger"
                    onClick={() => handelDeleteCat(item._id)} >بله</Button>
            </div>
        </Modal>
    </>
}

export function UpdateCategory({ id }) {
    return <Link href={`/profile/categories/${id}/edit`}>
        <ButtonIcon variant="outline">
            <PencilIcon className='text-success' />
        </ButtonIcon>
    </Link>
}