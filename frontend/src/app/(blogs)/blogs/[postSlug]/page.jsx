// import BlogComments from "@/components/blog/comments/BlogComments";
// import RelatedPost from "@/components/blog/RelatedPost";
import getPostSlug, { getPost } from "@/services/postServices";
import Image from "next/image";
import { notFound } from "next/navigation";
import RelatedPost from "../_components/RelatedPost";
import PostComment from "../_components/comment/PostComment";

// export const dynamic = "force-dynamic";
export const dynamicParams = false;

export async function generateStaticParams() {
  const {posts} = await getPost()
  return posts.map((post) => ({
    postSlug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const post = await getPostSlug(params.postSlug)

  return {
    title: `پست ${post.title}`,
  }
}

async function SingelPost({ params }) {
  const post = await getPostSlug(params.postSlug)

  if (!post) return notFound()

  return (
    <div className="text-secondary-600 max-w-screen-md mx-auto">
      <h1 className="text-secondary-700 text-2xl font-bold mb-8">
        {post.title}
      </h1>
      <p className="mb-4">{post.briefText}</p>
      <p className="mb-8">{post.text}</p>
      <div className="relative aspect-video aspect-h-9 overflow-hidden rounded-lg mb-10">
        <Image
          className="object-cover object-center hover:scale-110 transition-all ease-out duration-300"
          fill
          src={post.coverImageUrl}
          alt={post.title}
        />
      </div>
      {post.related.length > 0 && <RelatedPost posts={post.related} />}
      <PostComment post={post} />
    </div>
  );
}
export default SingelPost;
