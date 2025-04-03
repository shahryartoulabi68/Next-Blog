import { getCategoryApi } from '@/services/categoryService';
import EditCategory from '../../_components/EditCategory'

async function page({ params: { categoryId } }) {
    const { categories } = await getCategoryApi()
    const editCategory = categories.filter((item) => item._id === categoryId)

    return (
        <div>
            <EditCategory editCategory={editCategory} />
        </div>
    )
}

export default page
