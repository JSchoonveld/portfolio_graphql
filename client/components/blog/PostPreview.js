import Link from "next/link";
import client from "../../apollo-client";
import {gql} from "@apollo/client";
import {useState} from "react";

export default function PostPreview({post, postDeleted}) {

    const mutation = (async () => {
        await client.mutate({
            mutation: gql`
                mutation {
                    deletePost(id:${post.id}) {
                        id
                    }
                }
      `
        }).then((res) => {
            console.log(res.data.deletePost.id)
            postDeleted(res.data.deletePost.id)
        })

    })


    return (
        <div className="p-4 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full"
                     src="https://dummyimage.com/1204x504"/>
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{post.title}</h2>
            <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>

            <Link href={{ pathname: `/posts/${post.id}`}}  className="text-indigo-500 inline-flex items-center mt-3">Read more</Link>
            <button onClick={mutation} className={"bg-blue-500 hover:bg-blue-600 text-white font-bold p-2 rounded mx-2"}>Mutation</button>
        </div>
    )
}
