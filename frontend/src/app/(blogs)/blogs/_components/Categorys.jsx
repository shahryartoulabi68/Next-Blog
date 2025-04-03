import Link from "next/link"

async function Categorys() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}//category/list`)
    const { data: { categories } } = await res.json()


    return (
        <ul className="space-y-4">
            <li>
                <Link href="/blogs">همه</Link>
            </li>
            {categories.map((item) => {
                return <li key={item._id}>
                    <Link href={`/blogs/category/${item.slug}`}>{item.title}</Link>
                </li>
            })}
        </ul>
    )
}

export default Categorys
