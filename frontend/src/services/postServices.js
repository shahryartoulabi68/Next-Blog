import http from "./httpService";


export default async function getPostSlug(slug) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`,
        // { cache: "no-store" }
    );
    const { data } = await res.json();
    const { post } = data || {}
    return post
}

export async function getPost(queries, options) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list?${queries}`
        , { next: { revalidate:3600 } }, options)
    const { data } = await res.json()
    const { posts, totalPages } = data || {}
    return { posts, totalPages }
}

export async function createPostApi(data) {
    return await http.post("/post/create", data).then(({ data }) => data.data)
}

export async function editPostApi({ id, data }) {
    return await http.patch(`/post/update/${id}`, data).then(({ data }) => data.data)
}

export async function getPostById(id) {
    return await http.get(`/post/${id}`).then(({ data }) => data.data)
}

export async function deletePostApi(id, options) {
    return http.delete(`/post/remove/${id}`, options).then(({ data }) => data.data);
}