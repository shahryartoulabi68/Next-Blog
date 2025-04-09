"use client"

import { useCategories } from "@/Hooks/useCategories"
import Button from "@/ui/Button"
import ButtonIcon from "@/ui/ButtonIcon"
import RHFSelect from "@/ui/RHFSelect"
import RHFTextField from "@/ui/RHFTextField"
import TextField from "@/ui/TextField"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { yupResolver } from "@hookform/resolvers/yup"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import * as yup from "yup"
import useCreatePost from "./useCreatePost"
import { useRouter } from "next/navigation"
import SpinnerMini from "@/ui/SpinnerMini"
import toast from "react-hot-toast"
import useEditPost from "./useEditPost"
import { imageUrlToFile } from "@/utils/fileFormatter"

function CreatePostForm({ postToEdit = {} }) {
    const { _id: editId } = postToEdit;
    const isEditSession = Boolean(editId)
    const { title, slug, text, briefText,
        readingTime, category, coverImage,
        coverImageUrl: privcoverImageUrl } = postToEdit;
        
    let editValues = {}
    if (isEditSession) {
        editValues = {
            title,
            slug,
            text,
            briefText,
            readingTime,
            category: category._id,
            coverImage,
            coverImageUrl: privcoverImageUrl
        }
    }

    useEffect(() => {
        if (privcoverImageUrl) {
            async function fetchMyApi() {
                const file = await imageUrlToFile(privcoverImageUrl)
                setValue("coverImage", file)
            }
            fetchMyApi()
        }
    }, [])

    const { editPost, isEditing } = useEditPost()
    const { categories } = useCategories()
    const [coverImageUrl, setCoverImageUrl] = useState(privcoverImageUrl || null)
    const schema = yup
        .object({
            title: yup
                .string()
                .min(5, "حداقل ۵ کاراکتر را وارد کنید")
                .required("عنوان ضروری است"),
            briefText: yup
                .string()
                .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
                .required("توضیحات ضروری است"),
            text: yup
                .string()
                .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
                .required("توضیحات ضروری است"),
            slug: yup.string().required("اسلاگ ضروری است"),
            readingTime: yup
                .number()
                .positive()
                .integer()
                .required("زمان مطالعه ضروری است")
                .typeError("یک عدد را وارد کنید"),
            category: yup.string().required("دسته بندی ضروری است"),
        })

    const { createPost, isCreating } = useCreatePost()
    const router = useRouter()

    const { register, formState: { errors }, handleSubmit, control, setValue, reset } = useForm({
        defaultValues: editValues,
        mode: "onTouched",
        resolver: yupResolver(schema)
    })
    const onSubmit = (data) => {

        const formData = new FormData()
        for (const key in data) {
            formData.append(key, data[key])
        }

        if (isEditSession) {
            editPost({ id: editId, data: formData }, {
                onSuccess: () => {
                    reset()
                    router.push("/profile/posts")
                }
            })
        } else {
            createPost(formData, {
                onSuccess: () => {
                    router.push("/profile/posts")
                },
                onerror: (err) => {
                    toast.error(err?.response?.data?.message)
                }
            })
        }


    }

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <RHFTextField
                label="عنوان"
                errors={errors}
                name="title"
                isRequired
                register={register}
            />
            <RHFTextField
                label="متن کوتاه"
                errors={errors}
                name="briefText"
                isRequired
                register={register}
            />
            <RHFTextField
                label="متن"
                errors={errors}
                name="text"
                isRequired
                register={register}
            />

            <RHFTextField
                label="اسلاگ"
                errors={errors}
                name="slug"
                isRequired
                register={register}
            />
            <RHFTextField
                label="زمان مطالعه"
                errors={errors}
                name="readingTime"
                isRequired
                register={register}
            />
            <RHFSelect
                label="دسته بندی"
                errors={errors}
                name="category"
                isRequired
                register={register}
                options={categories}
            />
            <Controller
                name="coverImage"
                control={control}
                rules={{ required: "کاور پست الزامی است" }}
                render={({ field: { value, onChange, ...rest } }) => {
                    return <TextField
                        type="file"
                        label="کاور پست"
                        name={"my-coverImage"}
                        isRequired
                        {...rest}
                        value={value?.filename}
                        onChange={(e) => {
                            const files = e.target.files[0]
                            onChange(files)
                            setCoverImageUrl(URL.createObjectURL(files))
                            e.target.value = null
                        }}
                    />
                }}
            />
            {
                coverImageUrl && <div className="relative aspect-video overflow-hidden rounded-xl">
                    <Image fill alt="coverImage" src={coverImageUrl} className="object-cover object-center" />
                    <ButtonIcon className="absolute top-3 left-3" variant="red"
                        onClick={(e) => {
                            setCoverImageUrl(null)
                            setValue("coverImage", null)
                        }}>
                        <XMarkIcon />
                    </ButtonIcon>
                </div>
            }
            <div>
                {
                    isCreating ? <SpinnerMini /> : <Button className="w-full">تایید</Button>

                }
            </div>
        </form>
    )
}

export default CreatePostForm
