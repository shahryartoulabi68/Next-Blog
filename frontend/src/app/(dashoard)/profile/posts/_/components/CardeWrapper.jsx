import { fetchCardData } from '@/services/data'
import { Card } from '../../../_component/Cards'

async function CardeWrapper() {
    const { numOfComment, numOfPosts, numOfUsers } = await fetchCardData()


    return (
        <div className='grid gap-6 md:grid-cols-3 mb-6'>
            <div>
                <Card title="تعداد کاربران" value={numOfUsers} type="users" />
            </div>
            <div>
                <Card title="تعداد پست ها" value={numOfPosts} type="posts" />

            </div>
            <div>
                <Card title="تعداد نظرات" value={numOfComment} type="comments" />

            </div>
        </div>
    )
}

export default CardeWrapper
