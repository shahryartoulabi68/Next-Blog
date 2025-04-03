import { Suspense } from "react"
import Categorys from "../_components/Categorys"
import Spinner from "@/ui/Spinner"
import Search from "@/ui/Search"

export const metadata = {
    title: "بلاگ ها",
    description: "بلاگ ها موجود"
}
function layout({ children }) {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 items-center mb-10">
                <h1 className='text-secondary-900 font-bold '>لیست بلاگ ها</h1>
                <Search />
            </div>
            <div className='grid grid-cols-12 gap-8'>
                <div className='col-span-12 lg:col-span-4 
                xl:col-span-3 text-secondary-600 space-y-4 '>
                    <Suspense fallback={<Spinner />}>
                        <Categorys />
                    </Suspense>
                </div>
                <div className='col-span-12 lg:col-span-8 
                xl:col-span-9 text-secondary-600 space-y-4'>{children}</div>

            </div>
        </div>
    )
}

export default layout
