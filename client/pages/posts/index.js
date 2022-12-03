
import {gql} from "@apollo/client";
import PostPreview from "../../components/blog/PostPreview";
import {useState} from "react";
import client from "../../apollo-client";

export default function Posts({posts}) {
    const [postList, setPostList] = useState(posts);

    const postDeleted = ((deletedPostId)=> {
        setPostList(postList.filter((post) => {
            return post.id !==  deletedPostId;
        }))
    })

    return (
        <div>
            <h1 className={"text-4xl mb-5"}>Posts</h1>

            <div className="flex flex-wrap">
                {postList.map((post) => (
                    <div key={post.id} className={"md:w-1/3"}>
                        <PostPreview postDeleted={postDeleted} post={post}/>
                    </div>
                ))}
            </div>

        </div>
    )
}

export async function getStaticProps() {
    const { data } = await client.query({
        query: gql`
        query Posts {
          posts {
            id
            title
          }
        }
      `,
    });

    return {
        props: {
            posts: data.posts,
        },
    };
}
