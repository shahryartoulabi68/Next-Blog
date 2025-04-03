"use client"

import Button from "@/ui/Button";
import Modal from "@/ui/Modal";
import Link from "next/link";
import { useState } from "react";
import useDelitePost from "../useDelitePost";
import { useRouter } from "next/navigation";

const { default: ButtonIcon } = require("@/ui/ButtonIcon");
const { TrashIcon, PencilIcon, PlusIcon } = require("@heroicons/react/24/outline");

export function DeletePost({ post: { _id, title } }) {
    const [open, setOpen] = useState(false)
    const routesr = useRouter()
    const { delitePost, isDeliteing } = useDelitePost()
    const handelDeletePost = (id) => {
        delitePost(id, {
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
            title={`آیا از خذف ${title} مطمئن هستید؟`}
            open={open}
            onClose={() => setOpen(false)}
        >
            <div className="flex items-center gap-x-3">
                <Button className="flex-1 "
                    onClick={() => setOpen(false)}>لغو</Button>
                <Button className="flex-1 " variant="danger"
                    onClick={() => handelDeletePost(_id)}>بله</Button>
            </div>
        </Modal>
    </>
}

export function UpdatePost({ id }) {
    return <Link href={`/profile/posts/${id}/edit`}>
        <ButtonIcon variant="outline">
            <PencilIcon className='text-success' />
        </ButtonIcon>
    </Link>
}

export function CreatePost() {
    return <Link href="posts/create"
        className="flex justify-self-end items-center 
     gap-x-4 py-3 bg-primary-800 text-secondary-0 px-4 rounded-lg hover:bg-primary-700">
        <span className="hidden md:block">ایجاد پست </span>
        <PlusIcon className="w-4 h-4" />
    </Link>
}