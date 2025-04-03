import setCookiesOnReq from "@/utils/setCookiesOnReq";
import { cookies } from "next/headers";
import { getAllUserApi } from "./authService";
import { getAllCommentApi } from "./commentService";
import { getPost } from "./postServices";
import { number } from "yup";
import { resolve } from "styled-jsx/css";

export async function fetchCardData() {
    const cookieStor = cookies()
    const options = setCookiesOnReq(cookieStor)
    try {
        const data = await Promise.all([
            getAllUserApi(options),
            getAllCommentApi(options),
            getPost()
        ])
        // console.log(data[0].users.length, data[1].comments.length, data[2].length);
        const numOfUsers = Number(data[0].users.length ?? "0")
        const numOfComment = Number(data[1].comments.length ?? "0")
        const numOfPosts = Number(data[2].posts.length ?? "0")

        return {
            numOfUsers,
            numOfComment,
            numOfPosts
        }
    }
    catch (error) {
        throw new Error("خطا در بارگزاری ")
    }

}