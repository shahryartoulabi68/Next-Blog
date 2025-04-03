"use server"

import createCommentApi from "@/services/commentService"
import setCookiesOnReq from "@/utils/setCookiesOnReq"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

export async function createComment(prevState, { postId, parentId, formData }) {
    const rawFprmData = {
        postId,
        parentId,
        text: formData.get("text")
    }
    const cookiesStore = cookies()
    const options = setCookiesOnReq(cookiesStore)
    try {
        const { message } = await createCommentApi(rawFprmData, options)
        revalidatePath("/blogs")
        return {
            message,
        }

    }
    catch (err) {
        const error = (err.response.data.message);
        return {
            error,
        }
    }
}