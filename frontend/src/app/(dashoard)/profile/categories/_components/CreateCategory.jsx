import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function CreateCategory() {
    return <Link href="categories/create"
        className="flex justify-self-end items-center 
     gap-x-4 py-3 bg-primary-800 text-secondary-0 px-4 rounded-lg hover:bg-primary-700">
        <span className="hidden md:block">ایجاد دسته بندی </span>
        <PlusIcon className="w-4 h-4" />
    </Link>
}