"use client"
import RHFTextField from "@/ui/RHFTextField"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { signinApi } from "@/services/authService";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";
import SpinnerMini from "@/ui/SpinnerMini";

const schema = yup.object({
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی می باشد"),
    password: yup.string().min(4).required("رمز الزامی می باشد")
}).required()

function Signin() {
    const { register, handleSubmit, formState: { errors, isLoading } } = useForm({
        resolver: yupResolver(schema),
        mode: "onTouched"
    })

    const { signin, isLoading: loading } = useAuth()
    const onSubmit = async (values) => {
        await signin(values)
    }

    return <div>
        <h1 className="font-bold text-secondary-800 mb-4 w-full text-center text-lg">ورود</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <RHFTextField
                label="ایمیل" name="email" register={register}
                dir="ltr" errors={errors} isRequired />
            <RHFTextField
                label="رمزعبور" name="password" register={register}
                dir="ltr" type="password" errors={errors} isRequired />
            <div className="flex items-center justify-center ">
                {loading ? <SpinnerMini />
                    : <button className="btn btn--primary w-full mt-4" type="onSubmit">ورود</button>
                }
            </div >
            <Link href="/signup" className="mt-4 text-secondary-500 
            text-center hover:text-primary-700">ثبت نام</Link>
        </form>
    </div>
}

export default Signin
