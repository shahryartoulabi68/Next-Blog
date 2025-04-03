
import { deletePostApi } from '@/services/postServices'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export default function useDelitePost() {
    const queryClient = useQueryClient()
    const { isPending: isDeliteing, mutate: delitePost } = useMutation({
        mutationFn: deletePostApi,
        onSuccess: (data) => {
            toast.success(data.message),
                queryClient.invalidateQueries({
                    queryKey: ["posts"]
                })
        },
        onError: (err) => toast.error(err?.response?.data?.message)

    })
    return { isDeliteing, delitePost }
}

