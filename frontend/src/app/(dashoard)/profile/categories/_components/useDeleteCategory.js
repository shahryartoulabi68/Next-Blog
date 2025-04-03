import { deleteCategoryApi } from "@/services/categoryService"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"

export default function useDeleteCategory() {
    const queryClient = useQueryClient()
    const { isPending: isDeleteing, mutate: deleteCategory } = useMutation({
        mutationFn: deleteCategoryApi,
        onSuccess: (data) => {
            toast.success(data.message),
                queryClient.invalidateQueries({
                    queryKey: ["category"]
                })
        },
        onError: (err) => toast.error(err?.response?.data?.message)

    })
    return { isDeleteing, deleteCategory }
}