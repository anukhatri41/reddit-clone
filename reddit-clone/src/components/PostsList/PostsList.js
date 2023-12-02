import React from "react";
import Post from "../Post/Post";


function PostsList({posts}){

    return (
        <div className="posts">
            {(posts != null) ? posts.map((post, index) => <Post key={index} post={post.data} />) : ''}
         </div>
    )
}

export default PostsList;