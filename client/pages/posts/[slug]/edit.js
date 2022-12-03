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

export default function EditPost({post}){
    return (
        <div className={""}>
            <h1 className={"text-4xl font-bold"}>Edit {post.title}</h1>
            <Link href={{ pathname: `/posts/${post.id}`}} className={"text-indigo-500 inline-flex items-center mt-3"}>Back</Link>
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
