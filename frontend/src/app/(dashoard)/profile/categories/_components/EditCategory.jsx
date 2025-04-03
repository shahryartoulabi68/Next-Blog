"use client"
import Button from '@/ui/Button'
import RHFTextField from '@/ui/RHFTextField'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import useEditCategory from './useEditCategory'
import useAddCategory from './useAddCategory'


function EditCategory({ editCategory = [{}] }) {
    const { _id: editId } = editCategory[0];
    const isEditSession = Boolean(editId)
    const { title, description, englishTitle, _id } = editCategory[0]
    let defaultVal = {}
    if (isEditSession) {
        defaultVal = {
            title,
            englishTitle,
            description,
        }
    }
    const { isEiting, editCategory: editCat } = useEditCategory()
    const { createCategory, isAdding } = useAddCategory()
    const router = useRouter()
    const { register, formState: { errors }, handleSubmit } = useForm({
        defaultValues: defaultVal,
        mode: "onTouched",
    })

    const onSubmit = (data) => {
        if (isEditSession) {
            editCat({ id: _id, data }, {
                onSuccess: () => {
                    router.push("/profile/categories")
                }
            })
        } else {
            createCategory(data, {
                onSuccess: () => {
                    router.push("/profile/categories")
                }
            })
        }

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <RHFTextField
                label="عنوان دسته بندی" name="title" register={register}
                errors={errors} isRequired />
            <RHFTextField
                label="عنوان لاتین" name="englishTitle" register={register}
                errors={errors} isRequired />
            <RHFTextField
                label="توضیحات" name="description" register={register}
                dir="ltr" errors={errors} isRequired />
            <div>
                {
                    <Button className="w-full">تایید</Button>
                }
            </div>
        </form>
    )
}

export default EditCategory