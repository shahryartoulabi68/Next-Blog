import http from "./httpService";

export async function getCategoryApi(options) {
    return http.get("/category/list", options).then(({ data }) => data.data)
}

export async function updateCategoryApi({ id, data }) {
    return http.patch(`/category/update/${id}`, data).then(({ data }) => data.data)
}

export async function createCategoryApi(data) {
    return http.post(`category/add`, data).then(({ data }) => data.data)
}

export async function deleteCategoryApi({id}) {
    return http.delete(`category/remove/${id}`).then(({ data }) => data.data)
}