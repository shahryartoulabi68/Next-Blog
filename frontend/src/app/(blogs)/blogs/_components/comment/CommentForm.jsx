"use client"
import error from '@/app/error';
import { createComment } from '@/lib/actions';
import Button from '@/ui/Button';
import SubmitBtton from '@/ui/SubmitBtton';
import TextArea from '@/ui/TextArea';
import { useActionState, useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const initialState = {
    error: "",
    message: ""
}

function CommentForm({ postId, parentId, onClose }) {
    const [text, setText] = useState()
    const [state, formAction] = useActionState(createComment, initialState)


    useEffect(() => {
        if (state?.message) {
            toast.success(state.message)
            onClose()
        }
        if (state?.error) {
            toast.error(state.error)
        }
    }, [state])

    return (
        <div>
            <div className="flex justify-center mt-4">
                <div className="max-w-md  w-full">
                    <form
                        // action={createComment.bind(null, postId, parentId)}
                        action={async (formData) => {
                            await formAction({ formData, postId, parentId })
                        }}
                        className="space-y-7">
                        <TextArea
                            name="text"
                            label="متن نظر"
                            value={text}
                            isRequired
                            onChange={(e) => setText(e.target.value)}
                        />
                        <div>
                            <SubmitBtton className={"btn badge--primary"}>تایید</SubmitBtton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CommentForm
