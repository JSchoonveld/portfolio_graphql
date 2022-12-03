import Link from "next/link";
import {gql} from "@apollo/client";
import {GET_POSTS} from "../../../graphql/queries/get-posts.service";
import client from "../../../apollo-client";

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {

    const { data } = await client.query({
        query: GET_POSTS
    });

    const paths = data.posts.map((post) => ({
        params: { slug: post.id.toString() },
    }))

    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    }
}

export default function Post({post}){
    return (
        <div className={"flex flex-col"}>
            <h1 class={"text-4xl font-bold"}>{post.title}</h1>
            <Link href={{ pathname: `/posts`}} className={"text-indigo-500 inline-flex items-center mt-3"}>Back</Link>
            <Link href={{ pathname: `/posts/${post.id}/edit`}} className={"text-indigo-500 inline-flex items-center mt-3"}>Edit this post</Link>
        </div>
    )
}


export async function getStaticProps({params}) {
    const { slug } = params;

    const { data } = await client.query({
        query: gql`
        query Post {
          post(id: ${slug}) {
            id
            title
          }
        }
      `,
    });

    return {
        props: {
            post: data.post,
        },
    };
}
