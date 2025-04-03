import { updateCategoryApi } from "@/services/categoryService"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"

export default function useEditCategory() {
    const queryClient = useQueryClient()
    const { isPending: isEiting, mutate: editCategory } = useMutation({
        mutationFn: updateCategoryApi,
        onSuccess: (data) => {
            toast.success(data.message),
                queryClient.invalidateQueries({
                    queryKey: ["category"]
                })
        },
        onError: (err) => toast.error(err?.response?.data?.message)

    })
    return { isEiting, editCategory }
}