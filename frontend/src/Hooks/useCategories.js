import { getCategoryApi } from "@/services/categoryService";
import { useQuery } from "@tanstack/react-query";

export function useCategories() {
    const { data, isLoading } = useQuery({
        queryKey: ["category"],
        queryFn: getCategoryApi
    })
    const { categories: rowCategories = [] } = data || {}

    const categories = rowCategories.map((item) => (
        {
            label: item.title,
            value: item._id
        }
    ))
    const transformedCategory = rowCategories.map((item) => (
        {
            titel: item.title,
            value: item.englishTitle
        }
    ))

    return { categories, transformedCategory, isLoading }
}

