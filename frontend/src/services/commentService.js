import http from "./httpService"

export default async function createCommentApi(data, options) {
    return http.post("/comment/add", data, options).then(({ data }) => data.data)
}

export  async function getAllCommentApi(options = {}) {
    return http.get("/comment/list", options).then(({ data }) => data.data)
}