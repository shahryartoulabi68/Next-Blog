"use client"

import { bookmarkPostApi, likePostApi } from '@/services/authService'
import ButtonIcon from '@/ui/ButtonIcon'
import { PersianNumber } from '@/utils/PersianNumber'
import { BookmarkIcon, ChatBubbleLeftEllipsisIcon, HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as SolidHeardIcon, BookmarkIcon as SolidBookmarkIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'

import React from 'react'
import toast from 'react-hot-toast'

function PostInteraction({ item }) {
    const router = useRouter()
    const likeHandler = async (postId) => {
        try {
            const { message } = await likePostApi(postId)
            toast.success(message)
            router.refresh()
        }
        catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    const bookmarkHandler = async (postId) => {
        try {
            const { message } = await bookmarkPostApi(postId)
            toast.success(message)
            router.refresh()
        }
        catch (error) {
            console.log(error);

            toast.error(error?.response?.data?.message)
        }
    }

    return (
        <div className='flex items-center gap-x-4'>
            <ButtonIcon variant="secondary">
                <ChatBubbleLeftEllipsisIcon />
                <span>{PersianNumber(item.commentsCount)}</span>
            </ButtonIcon>
            <ButtonIcon variant="red" onClick={() => likeHandler(item._id)}>
                {item.isLiked ? <SolidHeardIcon /> : <HeartIcon />}
            </ButtonIcon>
            <ButtonIcon variant="primary" onClick={() => bookmarkHandler(item._id)}>
                {item.isBookmarked ? <SolidBookmarkIcon /> : <BookmarkIcon />}
            </ButtonIcon>

        </div>
    )
}

export default PostInteraction
