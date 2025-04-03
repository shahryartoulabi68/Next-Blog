import { createCategoryApi } from "@/services/categoryService"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"

export default function useAddCategory() {
    const queryClient = useQueryClient()
    const { isPending: isAdding, mutate: createCategory } = useMutation({
        mutationFn: createCategoryApi,
        onSuccess: (data) => {
            toast.success(data.message),
                queryClient.invalidateQueries({
                    queryKey: ["category"]
                })
        },
        onError: (err) => toast.error(err?.response?.data?.message)

    })
    return { isAdding, createCategory }
}