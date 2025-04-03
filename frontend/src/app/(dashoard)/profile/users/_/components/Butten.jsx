import ButtonIcon from "@/ui/ButtonIcon"
import { PencilIcon } from "@heroicons/react/24/outline"
import Link from "next/link"


// export function DeleteUser({ User: { _id, title } }) {
//     const [open, setOpen] = useState(false)
//     const routesr = useRouter()
//     const { delitePost, isDeliteing } = useDelitePost()
//     const handelDeleteUser = (id) => {
//         delitePost(id, {
//             onSuccess: () => {
//                 setOpen(false)
//                 routesr.refresh()
//             }
//         })
//     }

//     return <>
//         <ButtonIcon variant="outline" onClick={() => setOpen(true)}>
//             <TrashIcon className="text-red-600" />
//         </ButtonIcon>
//         <Modal
//             title={`آیا از خذف ${title} مطمئن هستید؟`}
//             open={open}
//             onClose={() => setOpen(false)}
//         >
//             <div className="flex items-center gap-x-3">
//                 <Button className="flex-1 "
//                     onClick={() => setOpen(false)}>لغو</Button>
//                 <Button className="flex-1 " variant="danger"
//                     onClick={() => handelDeleteUser(_id)}>بله</Button>
//             </div>
//         </Modal>
//     </>
// }

export function UpdatePost({ id }) {
    return <Link href={`/profile/users/${id}/edit`}>
        <ButtonIcon variant="outline">
            <PencilIcon className='text-success' />
        </ButtonIcon>
    </Link>
}