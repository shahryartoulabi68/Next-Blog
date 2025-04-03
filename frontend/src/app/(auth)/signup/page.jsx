"use client"
import RHFTextField from "@/ui/RHFTextField"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { signupApi } from "@/services/authService";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import SpinnerMini from "@/ui/SpinnerMini";

const schema = yup.object({
    name: yup.string().min(3, "طول نا معتبر است").max(15).required("نام و نام خانوادگی الزامی می باشد"),
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی می باشد"),
    password: yup.string().min(4).required("رمز الزامی می باشد")
}).required()

function Signup() {
    const { register, handleSubmit, formState: { errors, isLoading } } = useForm({
        resolver: yupResolver(schema),
        mode: "onTouched"
    })

    const { signup, isLoading: loading } = useAuth()
    const onSubmit = async (values) => {
        await signup(values)
    }

    return <div>
        <h1 className="font-bold text-secondary-800 mb-4 w-full text-center text-lg">ثبت نام</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <RHFTextField
                label="نام و نام خانوادگی" name="name" register={register}
                errors={errors} isRequired />
            <RHFTextField
                label="ایمیل" name="email" register={register}
                dir="ltr" errors={errors} isRequired />
            <RHFTextField
                label="رمزعبور" name="password" register={register}
                dir="ltr" type="password" errors={errors} isRequired />
            <div className="flex items-center justify-center ">
                {loading ? <SpinnerMini />
                    : <button className="btn btn--primary w-full mt-4" type="onSubmit">تایید</button>
                }
            </div>
        </form>
    </div>
}

export default Signup
