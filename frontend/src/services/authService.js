import axios from "axios";
import http from "./httpService";

export async function signupApi(data) {
    return http.post("/user/signup", data).then(({ data }) => data.data)
}

export async function signinApi(data) {
    return http.post("/user/signin", data).then(({ data }) => data.data)
}

export async function getUserApi() {
    return http.get("/user/profile").then(({ data }) => data.data)
}

export async function likePostApi(postId) {
    return await http.post(`/post/like/${postId}`).then(({ data }) => data.data)
}

export async function bookmarkPostApi(postId) {
    return await http.post(`/post/bookmark/${postId}`).then(({ data }) => data.data)
}


export async function getAllUserApi(options) {
    return await http.get(`/user/list`, options).then(({ data }) => data.data)
}

export async function updateUserApi(data) {
    return await http.patch(`/user/update`, data).then(({ data }) => data.data)
}


