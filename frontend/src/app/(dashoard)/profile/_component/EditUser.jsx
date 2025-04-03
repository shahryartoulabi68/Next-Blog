"use client"
import Button from '@/ui/Button'
import RHFTextField from '@/ui/RHFTextField'
import { useForm } from 'react-hook-form'
import SpinnerMini from '@/ui/SpinnerMini'
import { useRouter } from 'next/navigation'
import useEditUser from './useEditUser'
import { useAuth } from '@/app/context/AuthContext'

function EditUser() {
    const { user } = useAuth()
    const defprofile = {
        name: user?.name,
        email: user?.email
    }
    const router = useRouter()
    const { register, formState: { errors }, handleSubmit } = useForm({
        defaultValues: defprofile,
        mode: "onTouched",
    })
    const { editUser, isEiting } = useEditUser( )

    const onSubmit = (data) => {
        editUser(data, {
            onSuccess: () => {
                router.push("/profile")
                document.location.href="/profile"
                router.refresh()
            }
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <RHFTextField
                label="نام و نام خانوادگی" name="name" register={register}
                errors={errors} isRequired />
            <RHFTextField
                label="ایمیل" name="email" register={register}
                dir="ltr" errors={errors} isRequired />
            <div>
                {isEiting ?
                    <SpinnerMini />
                    :
                    <Button className="w-full">تایید</Button>
                }
            </div>
        </form>
    )
}

export default EditUser
