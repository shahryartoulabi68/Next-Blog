import { updateUserApi } from "@/services/authService"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"

export default function useEditUser() {
    const queryClient = useQueryClient()
    const { isPending: isEiting, mutate: editUser } = useMutation({
        mutationFn: updateUserApi,
        onSuccess: (data) => {
            toast.success(data.message),
                queryClient.invalidateQueries({
                    queryKey: ["profile"]                 
                })
        },
        onError: (err) => toast.error(err?.response?.data?.message)

    })
    return { isEiting, editUser }
}
